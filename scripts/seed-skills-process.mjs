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
    console.log('🚀 Seeding Skills and Process CMS from static JSON...');

    const arsenal = await readJSON('src/database/tech_arsenal.json');
    const skillCount = await prisma.skill.count();

    if (skillCount === 0) {
        console.log(`Adding ${arsenal.length} Skills...`);
        let idx = 0;
        for (const skill of arsenal) {
            await prisma.skill.create({
                data: {
                    title: skill.title,
                    description: skill.description,
                    icon: skill.icon,
                    skills: skill.items,
                    orderIdx: idx++
                }
            });
        }
    }

    const processData = await readJSON('src/database/process.json');
    const processCount = await prisma.processStep.count();
    if (processCount === 0) {
        console.log(`Adding ${processData.length} Process Steps...`);
        let idx = 0;
        for (const step of processData) {
            await prisma.processStep.create({
                data: {
                    step: step.step,
                    title: step.title,
                    description: step.description,
                    icon: step.icon,
                    orderIdx: idx++
                }
            });
        }
    }

    console.log('✅ Secondary seeding complete');
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error('❌ Failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
