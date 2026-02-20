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
    for (const project of projectsData) {
        await prisma.project.create({
            data: {
                title: project.title,
                category: project.category,
                description: project.description,
                icon: project.icon,
                image: project.image,
                video: project.video || null,
                link: project.link || null,
                tags: project.tags,
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

    console.log('Seeding Blog Categories...');
    const techCategory = await prisma.blogCategory.upsert({
        where: { slug: 'technology' },
        update: {},
        create: { name: 'Technology', slug: 'technology' },
    });

    const aiCategory = await prisma.blogCategory.upsert({
        where: { slug: 'artificial-intelligence' },
        update: {},
        create: { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
    });

    console.log('Seeding Blog Posts...');
    const posts = [
        {
            title: 'Optimizing Phi-3 for Edge Devices using ONNX',
            slug: 'optimizing-phi-3-edge-onnx',
            excerpt: 'A technical deep-dive into quantization and runtime optimization for Microsofts latest SLM.',
            content: `# Optimizing Phi-3 for Edge Devices\n\nEdge computing is the new frontier for LLMs...`,
            coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
            categoryId: aiCategory.id,
            published: true,
        },
        {
            title: 'The Future of Flutter: WASM and Beyond',
            slug: 'future-of-flutter-wasm',
            excerpt: 'Why WebAssembly is changing the game for high-performance cross-platform web applications.',
            content: `# Flutter + WASM\n\nFlutter's foray into WebAssembly (WASM) is a massive leap...`,
            coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
            categoryId: techCategory.id,
            published: true,
        }
    ];

    for (const post of posts) {
        await prisma.blogPost.upsert({
            where: { slug: post.slug },
            update: {},
            create: post,
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
