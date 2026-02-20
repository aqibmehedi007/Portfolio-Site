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
    console.log('🚀 Seeding initial FAQs...');

    const seoData = await readJSON('src/database/seo_page.json');
    if (seoData && seoData.faqs) {
        // Clear existing to avoid duplicates if needed, or just upsert?
        // Let's just create if the table is totally empty
        const count = await prisma.faq.count();
        if (count === 0) {
            console.log(`Adding ${seoData.faqs.length} FAQs...`);
            let idx = 0;
            for (const faq of seoData.faqs) {
                await prisma.faq.create({
                    data: {
                        question: faq.question,
                        answer: faq.answer,
                        orderIdx: idx++
                    }
                });
            }
            console.log('✅ FAQs seeded successfully');
        } else {
            console.log('⚠️ FAQs already exist in database, skipping seed.');
        }
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error('❌ Failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
