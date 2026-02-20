import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    console.log('--- Starting Blog Seed ---')

    // 1. Create Categories
    const techCategory = await prisma.blogCategory.upsert({
        where: { slug: 'technology' },
        update: {},
        create: {
            name: 'Technology',
            slug: 'technology',
        },
    })

    const aiCategory = await prisma.blogCategory.upsert({
        where: { slug: 'artificial-intelligence' },
        update: {},
        create: {
            name: 'Artificial Intelligence',
            slug: 'artificial-intelligence',
        },
    })

    // 2. Create Blog Posts
    const posts = [
        {
            title: 'Optimizing Phi-3 for Edge Devices using ONNX',
            slug: 'optimizing-phi-3-edge-onnx',
            excerpt: 'A technical deep-dive into quantization and runtime optimization for Microsofts latest SLM.',
            content: `
# Optimizing Phi-3 for Edge Devices

Edge computing is the new frontier for LLMs. In this post, we explore how to take Microsoft's Phi-3-mini and optimize it for mobile and IoT devices.

## The Strategy: Quantization
We use 4-bit quantization via ONNX Runtime to reduce memory footprint without significant accuracy loss.

\`\`\`python
import onnxruntime_genai as og
model = og.Model("phi-3-onnx")
# ... performance code ...
\`\`\`

## Results
- **Memory Reduction**: 70%
- **Latency**: < 50ms per token on Snapdragon 8 Gen 3
      `,
            coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000',
            categoryId: aiCategory.id,
            published: true,
        },
        {
            title: 'The Future of Flutter: WASM and Beyond',
            slug: 'future-of-flutter-wasm',
            excerpt: 'Why WebAssembly is changing the game for high-performance cross-platform web applications.',
            content: `
# Flutter + WASM

Flutter's foray into WebAssembly (WASM) is a massive leap for web performance. It allows us to run Skia directly with near-native execution speed.

## Key Benefits
1. **No Javascript Overhead**
2. **Deterministic Garbage Collection**
3. **Multi-threading via Workers**

As a Senior Flutter Architect, I've seen a 30% increase in rendering performance on complex animations...
      `,
            coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000',
            categoryId: techCategory.id,
            published: true,
        }
    ]

    for (const post of posts) {
        await prisma.blogPost.upsert({
            where: { slug: post.slug },
            update: {},
            create: post,
        })
    }

    console.log('--- Blog Seed Finished ---')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
