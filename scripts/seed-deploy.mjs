import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

async function readJSON(relPath) {
    const fullPath = path.join(__dirname, '..', relPath);
    return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

async function main() {
    console.log('🚀 Starting CPanel Deployment Seed...');

    const projectsData = await readJSON('src/database/projects.json');
    const skillsData = await readJSON('src/database/skills.json');
    const processData = await readJSON('src/database/process.json');
    const showcaseData = await readJSON('src/database/showcase.json');
    const seoPageData = await readJSON('src/database/seo_page.json');

    console.log('Cleaning existing data...');
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.processStep.deleteMany();
    await prisma.showcase.deleteMany();
    await prisma.faq.deleteMany();
    await prisma.authorityStat.deleteMany();

    console.log('Seeding Projects...');
    for (const [index, project] of projectsData.entries()) {
        const slug = project.title
            .toLowerCase()
            .replace(/[^a-z0-9\s]/g, '')
            .trim()
            .replace(/\s+/g, '-');
        await prisma.project.create({
            data: {
                title: project.title,
                slug,
                category: project.category,
                description: project.description,
                icon: project.icon,
                image: project.image,
                video: project.video || null,
                link: project.link || null,
                tags: project.tags,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding Skills...');
    for (const [index, skill] of skillsData.entries()) {
        await prisma.skill.create({
            data: {
                title: skill.title,
                description: skill.description,
                skills: skill.skills,
                icon: skill.icon,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding Process Steps...');
    for (const [index, step] of processData.entries()) {
        await prisma.processStep.create({
            data: {
                step: step.step,
                title: step.title,
                description: step.description,
                icon: step.icon,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding Showcases...');
    for (const [index, item] of showcaseData.entries()) {
        await prisma.showcase.create({
            data: {
                showcaseId: item.id,
                title: item.title,
                tagline: item.tagline,
                description: item.description,
                media: item.media,
                stats: item.stats,
                link: item.link,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding FAQs...');
    for (const [index, faq] of seoPageData.faqs.entries()) {
        await prisma.faq.create({
            data: {
                question: faq.question,
                answer: faq.answer,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding Authority Stats...');
    for (const [index, stat] of seoPageData.authority_stats.entries()) {
        await prisma.authorityStat.create({
            data: {
                label: stat.label,
                value: stat.value,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding Blogs from blogs.json...');
    const blogsData = await readJSON('src/database/blogs.json');

    for (const blog of blogsData) {
        // Handle Category
        const categorySlug = blog.category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const category = await prisma.blogCategory.upsert({
            where: { slug: categorySlug },
            update: {},
            create: {
                name: blog.category,
                slug: categorySlug,
            },
        });

        // Handle Blog Post
        await prisma.blogPost.upsert({
            where: { slug: blog.slug },
            update: {
                title: blog.title,
                excerpt: blog.excerpt,
                content: blog.content,
                coverImage: blog.coverImage,
                categoryId: category.id,
                published: true,
            },
            create: {
                title: blog.title,
                slug: blog.slug,
                excerpt: blog.excerpt,
                content: blog.content,
                coverImage: blog.coverImage,
                categoryId: category.id,
                authorName: 'Aqib Mehedi',
                published: true,
            },
        });
    }

    console.log('✅ Seeding completed successfully!');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Seeding failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
