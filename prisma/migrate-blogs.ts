import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
    const htmlPath = path.join(process.cwd(), 'docs/compitator/likhon/website_dump/blogs.html');
    if (!fs.existsSync(htmlPath)) {
        console.error('blogs.html not found at', htmlPath);
        return;
    }

    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    const articleRegex = /<article class="blog-card">([\s\S]*?)<\/article>/g;
    const titleRegex = /<h3 class="blog-title">([\s\S]*?)<\/h3>/;
    const excerptRegex = /<p class="blog-excerpt">([\s\S]*?)<\/p>/;
    const tagRegex = /<span class="blog-tag">([\s\S]*?)<\/span>/;
    const dateRegex = /<span class="date">[\s\S]*?<\/i>([\s\S]*?)<\/span>/;
    const imageRegex = /<img alt=".*?" src="(.*?)"/;
    const slugRegex = /<a .*? href="blog\/(.*?)"/;

    let match;
    let count = 0;

    console.log('Starting migration...');

    while ((match = articleRegex.exec(htmlContent)) !== null) {
        const content = match[1];

        const title = titleRegex.exec(content)?.[1]?.trim() || '';
        const excerpt = excerptRegex.exec(content)?.[1]?.trim() || '';
        const tagsRaw = tagRegex.exec(content)?.[1]?.trim() || '';
        const dateStr = dateRegex.exec(content)?.[1]?.trim() || '';
        const imagePathRaw = imageRegex.exec(content)?.[1] || '';
        const slug = slugRegex.exec(content)?.[1]?.trim() || '';

        if (!title || !slug) continue;

        // Clean up title (remove &amp; etc)
        const cleanTitle = title.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
        const cleanExcerpt = excerpt.replace(/&amp;/g, '&').replace(/&quot;/g, '"');

        // Parse date
        let publishedAt = new Date();
        if (dateStr) {
            const parsedDate = new Date(dateStr);
            if (!isNaN(parsedDate.getTime())) {
                publishedAt = parsedDate;
            }
        }

        // Process categories (take the first tag as primary category)
        const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
        const categoryName = tags[0] || 'Uncategorized';
        const categorySlug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        const category = await prisma.blogCategory.upsert({
            where: { slug: categorySlug },
            update: {},
            create: {
                name: categoryName,
                slug: categorySlug,
            },
        });

        // Clean up image path
        // Competitor path: uploads/blog/hash.png
        // Our path: /uploads/blog/hash.png
        const image = imagePathRaw.startsWith('uploads/') ? `/${imagePathRaw}` : imagePathRaw;

        await prisma.blogPost.upsert({
            where: { slug },
            update: {
                title: cleanTitle,
                excerpt: cleanExcerpt,
                content: cleanExcerpt, // Using excerpt as content for now as we don't have full content
                coverImage: image,
                categoryId: category.id,
                published: true,
            },
            create: {
                title: cleanTitle,
                slug,
                excerpt: cleanExcerpt,
                content: cleanExcerpt,
                coverImage: image,
                categoryId: category.id,
                authorName: 'Aqib Mehedi',
                published: true,
            },
        });

        count++;
        if (count % 10 === 0) console.log(`Processed ${count} posts...`);
    }

    console.log(`Successfully migrated ${count} blog posts.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
