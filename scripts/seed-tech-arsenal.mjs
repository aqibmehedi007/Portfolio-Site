import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Seeding Tech Arsenal from JSON...');

    const arsenalPath = path.join(__dirname, '..', 'src/database/tech_arsenal.json');
    const arsenal = JSON.parse(fs.readFileSync(arsenalPath, 'utf8'));

    const count = await prisma.techArsenal.count();
    if (count > 0) {
        console.log(`⚠️  TechArsenal already has ${count} records. Clearing before re-seed...`);
        await prisma.techArsenal.deleteMany();
    }

    console.log(`Adding ${arsenal.length} Tech Arsenal categories...`);
    let idx = 0;
    for (const item of arsenal) {
        await prisma.techArsenal.create({
            data: {
                title: item.title,
                description: item.description,
                items: item.items,
                size: item.size || 'md:col-span-1',
                icon: item.icon,
                color: item.color || 'amber',
                orderIdx: idx++
            }
        });
        console.log(`  ✅ ${item.title}`);
    }

    console.log(`\n🎉 Tech Arsenal seeding complete! ${arsenal.length} categories added.`);
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error('❌ Failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
