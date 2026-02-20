import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function exportBlogs() {
    const htmlPath = path.join(__dirname, '../docs/compitator/likhon/website_dump/blogs.html');
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
    const blogs = [];

    console.log('Extracting blogs from HTML...');

    while ((match = articleRegex.exec(htmlContent)) !== null) {
        const content = match[1];

        const title = titleRegex.exec(content)?.[1]?.trim() || '';
        const excerpt = excerptRegex.exec(content)?.[1]?.trim() || '';
        const tagsRaw = tagRegex.exec(content)?.[1]?.trim() || '';
        const imagePathRaw = imageRegex.exec(content)?.[1] || '';
        const slug = slugRegex.exec(content)?.[1]?.trim() || '';

        if (!title || !slug) continue;

        const cleanTitle = title.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
        const cleanExcerpt = excerpt.replace(/&amp;/g, '&').replace(/&quot;/g, '"');

        const tags = tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
        const categoryName = tags[0] || 'Uncategorized';
        const image = imagePathRaw.startsWith('uploads/') ? `/${imagePathRaw}` : imagePathRaw;

        blogs.push({
            title: cleanTitle,
            slug,
            excerpt: cleanExcerpt,
            content: cleanExcerpt, // Temporary content
            coverImage: image,
            category: categoryName,
            published: true
        });
    }

    const outputPath = path.join(__dirname, '../src/database/blogs.json');
    fs.writeFileSync(outputPath, JSON.stringify(blogs, null, 2));
    console.log(`✅ Successfully exported ${blogs.length} blogs to src/database/blogs.json`);
}

exportBlogs();
