import { PrismaClient } from '@prisma/client';
import projectsData from '../src/database/projects.json';
import skillsData from '../src/database/skills.json';
import processData from '../src/database/process.json';
import showcaseData from '../src/database/showcase.json';
import seoPageData from '../src/database/seo_page.json';

const prisma = new PrismaClient();

async function main() {
    console.log('Start seeding...');

    // Clean up existing data to prevent unique constraint errors
    console.log('Cleaning existing data...');
    await prisma.project.deleteMany();
    await prisma.skill.deleteMany();
    await prisma.processStep.deleteMany();
    await prisma.showcase.deleteMany();
    await prisma.faq.deleteMany();
    await prisma.authorityStat.deleteMany();

    // 1. Projects
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

    // 2. Skills
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

    // 3. Process
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

    // 4. Showcase
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

    // 5. SEO FAQs & Stats
    console.log('Seeding SEO FAQs...');
    for (const [index, faq] of seoPageData.faqs.entries()) {
        await prisma.faq.create({
            data: {
                question: faq.question,
                answer: faq.answer,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding SEO Authority Stats...');
    for (const [index, stat] of seoPageData.authority_stats.entries()) {
        await prisma.authorityStat.create({
            data: {
                label: stat.label,
                value: stat.value,
                orderIdx: index,
            },
        });
    }

    console.log('Seeding mapping highly completed.');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
