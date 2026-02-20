import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function makeSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
}

const projectsContent = [
    {
        title: "Agri-Llama",
        content: `# Agri-Llama — Specialized LLM for Bangladeshi Agriculture

> *"What if the world's most powerful AI technology could run on a $50 phone in a village with no internet?"* — That was the engineering challenge behind Agri-Llama.

## The Problem
Bangladesh has 16 million smallholder farmers who need accurate, real-time agricultural guidance. Existing AI solutions require high-end hardware or stable cloud connectivity — neither of which exist in rural Bangladesh. Off-the-shelf LLMs were too large (7B+ parameters) and couldn't understand Bengali agricultural terminology.

## The Solution: LLM Quantization at Scale
I designed and optimized a custom large language model specifically for Bangladeshi agricultural use cases using **GGUF quantization** and **LLaMA.cpp** as the inference backend.

### Technical Architecture
\`\`\`
Base Model (7B)  →  Quantization (Q4_K_M)  →  Agri-Llama (2.3GB)
       ↓
 Bengali LoRA Fine-tuning on Agricultural Dataset
       ↓
 Inference via llama.cpp on 2GB RAM Android Device
\`\`\`

## Key Achievements

| Metric | Before | After |
|---|---|---|
| Model Size | 7.2 GB | 2.1 GB |
| Size Reduction | — | **70.8%** |
| Bengali Query Accuracy | 34% | 91% |
| Inference Speed (2GB RAM) | Fail | ~3 tokens/sec |
| RAM Requirement | 8GB+ | **2GB** |

## Fine-Tuning Dataset
- 50,000+ Bengali agricultural Q&A pairs
- Crop disease symptom descriptions
- Weather-based farming advice
- Soil type and fertilizer recommendations
- Pest management in Bengali

## Core Capabilities
- 🌾 **Crop Recommendations** — Based on season, region, soil type
- 🦠 **Disease Diagnosis** — Text description → probable diseases + treatment
- 🌤️ **Weather Alerts** — Contextual advice based on upcoming conditions
- 💊 **Fertilizer Guidance** — Optimal NPK ratios per crop type
- 🗣️ **Native Bengali** — Responds naturally in rural dialectal Bengali

## Technology Stack
- **Base**: LLaMA-3 / Mistral architecture
- **Quantization**: GGUF Q4_K_M via llama.cpp
- **Fine-tuning**: LoRA adapters with QLoRA on A100 GPU
- **datasets**: Hugging Face Datasets
- **Deployment**: llama.cpp server + Flutter mobile client

## Impact
Agri-Llama is the first LLM specifically optimized for Bengali agricultural use cases and designed to run on the cheapest Android phones available in rural Bangladesh. Published on Hugging Face for the research community.`,
        contentType: "markdown"
    },
    {
        title: "Krishok AI",
        content: `# Krishok AI — AI-Powered Farmer Platform

> *"Every farmer deserves a world-class agronomist in their pocket."*

## Overview
Krishok AI is a production-grade, AI-powered agricultural platform built for Bangladeshi farmers. It combines GPT-4 intelligence with a native Bengali voice interface, computer vision for disease detection, and real-time weather data — all accessible with a single tap.

Built at **Kamal-Paterson Ltd (KP Cloud)** serving the Bangladesh agricultural sector.

## The Challenge
- 60%+ of Bangladeshi farmers are semi-literate — typing is a barrier
- Disease misdiagnosis leads to crop loss worth billions of BDT annually
- Existing apps were built for tech-savvy users, not farmers

## Core Features

### 🎤 Voice-First Interface
Single-tap voice interaction in Bengali. Farmers speak naturally, the app transcribes, processes via GPT-4, and responds in audio — no typing required.

\`\`\`
Farmer speaks in Bengali → STT (Whisper) → GPT-4 with Agricultural Context
→ TTS (Bengali) → Farmer hears the answer
\`\`\`

### 🔬 Computer Vision Disease Diagnosis
- Snap a photo of a diseased leaf or crop
- CV model identifies disease with 87% accuracy
- Returns treatment protocol with local product names

### 🌤️ Integrated Weather Intelligence
- Real-time weather API integration
- Proactive alerts: "Rain expected in 2 days — harvest your paddy now"
- Seasonal crop planning based on 10-day forecasts

### 💊 Fertilizer & Pesticide Recommendations
- GPT-4 with fine-tuned agricultural prompt context
- Returns BD-market-available product names and dosages
- Safe handling instructions in Bengali

## System Architecture

\`\`\`
Flutter App (Voice UI)
    ↓
Laravel REST API (Authentication, Logging)
    ↓
GPT-4 API (Agricultural Context Injection)
    ↓
Firebase (Real-time data sync, notifications)
    ↓
Computer Vision Service (Disease Detection)
\`\`\`

## Technology Stack
- **Frontend**: Flutter (iOS + Android)
- **Backend**: Laravel + MySQL
- **AI**: GPT-4 API, Whisper STT, Custom CV Model
- **Infrastructure**: Firebase, AWS EC2
- **Voice**: Bengali TTS integration

## Key Metrics
- **Response Time**: < 3 seconds end-to-end
- **Disease Accuracy**: 87% on test dataset
- **Languages**: Bengali + English
- **Offline Mode**: Basic features work without internet`,
        contentType: "markdown"
    },
    {
        title: "Echo AI",
        content: `# Echo AI — Privacy-First Local Digital Twin

> *"Your AI should know you. But your data should never leave your computer."*

## Concept
Echo AI is a local, GPU-accelerated **Digital Twin** platform that combines RAG (Retrieval-Augmented Generation) with Gemma 3 4B to create a personal AI that understands your documents, emails, codebase, and notes — without any data ever touching the cloud.

## The Privacy Problem with Current AI
Every document you upload to ChatGPT, Claude, or Gemini:
- Gets stored on their servers
- May be used for training
- Is subject to their data policies
- Could be subpoenaed

Echo AI solves this at the architecture level: **everything runs on your machine**.

## System Architecture

\`\`\`
Your Documents (PDFs, Code, Notes, Emails)
    ↓
Document Parser (PyMuPDF, docx2txt)
    ↓
Embedding Model (nomic-embed-text — local)
    ↓
Vector Database (ChromaDB — local)
    ↓
Query → Semantic Search → Top-K Chunks
    ↓
Gemma 3 4B (via Ollama — fully local)
    ↓
Grounded Response with Source Citations
\`\`\`

## Core Capabilities

### 📚 Document Intelligence
- Ingest PDFs, Word docs, markdown files, code files
- Chunk and embed into local ChromaDB
- Semantic search across thousands of pages in milliseconds

### 💬 Contextual Chat
- Ask questions, get answers with citations
- "Which contract mentions the penalty clause?" → Exact paragraph + page number
- Multi-turn conversation with document context

### 🖼️ Vision (Gemma 3 4B Vision)
- Analyze images, charts, diagrams
- "What does this architecture diagram show?" → Detailed analysis

### 🔧 Custom RAG Backend API
Built as a modular SaaS backbone — any app can connect to Echo's API:

\`\`\`python
# Example API call
response = echo.query(
    question="What is our Q3 revenue?",
    sources=["financial_reports/", "board_meetings/"]
)
print(response.answer)
print(response.citations)
\`\`\`

## Technology Stack
- **LLM**: Gemma 3 4B (via Ollama)
- **Embeddings**: nomic-embed-text (local)
- **Vector DB**: ChromaDB
- **Backend**: FastAPI (Python)
- **Frontend**: Flutter desktop + web
- **GPU**: NVIDIA CUDA acceleration

## Performance
- **Indexing Speed**: ~500 pages/minute on RTX 3080
- **Query Latency**: < 2 seconds on local GPU
- **Context Window**: 128K tokens (Gemma 3)
- **Privacy**: 100% — zero external API calls`,
        contentType: "markdown"
    },
    {
        title: "MChat Offline LLM",
        content: `# MChat — On-Device LLM for Android

> *"Full LLM intelligence, zero internet, zero cloud, zero compromise."*

## What is MChat?
MChat is an Android application that runs large language models **entirely on-device** using **llama.cpp** and Google's **Gemini Nano** architecture. No API keys. No monthly subscriptions. No internet connection required.

This is the first step toward democratizing AI in regions with unreliable connectivity.

## The Core Challenge
Running LLMs on mobile hardware is a 3-front engineering war:
1. **Memory**: LLMs are 4–14GB. Android apps cap at 512MB heap
2. **Compute**: Mobile NPUs aren't designed for transformer attention
3. **Thermal**: Sustained inference causes throttling

MChat solves all three.

## Technical Architecture

\`\`\`
Android App (Kotlin + JNI)
    ↓
llama.cpp (C++ core, compiled for ARM64)
    ↓
GGUF Quantized Model (Q4_0, Q5_K_M)
    ↓ 
Android NDK Memory Mapped Files (mmap)
    ↓
GPU Acceleration via OpenCL / Vulkan backend
\`\`\`

### Memory Management
\`\`\`cpp
// Key technique: memory-mapped model loading
// Model never fully loaded into heap
llama_model* model = llama_load_model_from_file(
    model_path.c_str(),
    params  // mlock=false, mmap=true
);
\`\`\`

## Supported Models
| Model | Size | Tokens/sec (Pixel 8) |
|---|---|---|
| Gemma 2B Q4_0 | 1.5 GB | ~12 t/s |
| Phi-3 Mini Q4_K_M | 2.2 GB | ~8 t/s |
| Llama 3.2 3B Q5_K_M | 2.8 GB | ~6 t/s |

## Features
- 💬 Full conversational chat with persistent history
- 🔧 System prompt customization
- 📁 Model download manager (HuggingFace direct links)
- 🌡️ Thermal monitoring with auto-throttle
- 📊 Live inference stats (tokens/sec, memory)
- 🌙 Fully offline — airplane mode compatible

## Technology Stack
- **Runtime**: llama.cpp (C++) via Android NDK + JNI
- **UI**: Kotlin + Jetpack Compose
- **Model Format**: GGUF (Q4_0, Q5_K_M quantizations)
- **Acceleration**: OpenCL / Vulkan compute shaders
- **Distribution**: GitHub (open source)

## Open Source
MChat is open source and available on GitHub. Contributions welcome.`,
        contentType: "markdown"
    },
    {
        title: "PersonaPlex AI",
        content: `# PersonaPlex AI — Real-Time Speech-to-Speech LLM Interaction

> *"The future of human-AI interaction isn't typing. It's conversation."*

## Overview
PersonaPlex AI is a high-fidelity **speech-to-speech** AI system that enables seamless, real-time vocal conversations with large language models. It achieves end-to-end audio latency under 1.5 seconds — below the human perception threshold for conversation lag.

## The Latency Problem
Existing voice AI pipelines are slow because they're sequential:
\`\`\`
[Record] → [STT] → [Wait for full transcription] → [LLM API] → [Wait] → [TTS] → [Playback]
Total: 4-8 seconds ❌
\`\`\`

PersonaPlex uses a **streaming pipeline** with intelligent interruption:
\`\`\`
[VAD] → [Streaming STT] → [Partial transcription to LLM] → [Streaming TTS]
                              ↑ Token-by-token processing         ↑
Total: < 1.5 seconds ✅
\`\`\`

## Technical Pipeline

### Stage 1 — Voice Activity Detection (VAD)
Silero VAD runs locally to detect speech start/end with 30ms precision. Eliminates silence processing overhead.

### Stage 2 — Streaming Speech-to-Text
Whisper Streaming processes audio chunks in real-time. First words are transcribed before the speaker finishes.

### Stage 3 — Partial LLM Processing
\`\`\`python
# Partial sentence streaming to LLM
async def stream_to_llm(partial_text: str):
    async for token in llm.agenerate(partial_text):
        yield token  # Immediate token forwarding to TTS
\`\`\`

### Stage 4 — Neural TTS
XTTS-v2 synthesizes speech token-by-token, enabling audio playback to begin before LLM response completes.

## Voice Persona System
PersonaPlex allows custom voice personas:
- Clone a voice from 3 seconds of reference audio
- Assign a personality via system prompt
- Create multiple distinct AI personas with different voices

## Use Cases
- 🎭 **AI companions** with unique personalities
- 📞 **Voice customer service** agents
- 🎓 **Language learning** conversation partners
- 🎮 **Game NPCs** with natural dialogue

## Technology Stack
- **STT**: OpenAI Whisper (streaming mode)
- **VAD**: Silero VAD
- **LLM**: LLaMA 3 / Mistral (via Ollama)
- **TTS**: XTTS-v2 (Coqui) with voice cloning
- **Backend**: FastAPI + WebSockets
- **Frontend**: Flutter (real-time audio stream)`,
        contentType: "markdown"
    },
    {
        title: "Pocket Chef AI",
        content: `# Pocket Chef AI — Computer Vision Cooking Assistant

> *"Open your fridge. Point your phone. Get a Michelin-star recipe."*

## Overview
Pocket Chef AI is an intelligent cooking assistant that uses **computer vision** to identify ingredients from a photo and **GPT-4** to generate personalized recipes, shopping lists, and meal plans.

Developed at **Kamal-Paterson Ltd (KP Cloud)** as part of their consumer AI app portfolio.

## How It Works

\`\`\`
📸 Photo of fridge/pantry
    ↓
Computer Vision (Ingredient Detection)
    ↓
Ingredient List: ["chicken", "tomatoes", "garlic", "pasta"]
    ↓
GPT-4 with Culinary Context
    ↓
Recipe: "Chicken Arrabiata" (with steps, timings, substitutions)
\`\`\`

## Core Features

### 🔍 Real-Time Ingredient Scanner
- Point camera at ingredients anywhere
- Detects 2,000+ food items with 94% accuracy
- Works in poor lighting conditions
- Identifies packaged products via label OCR

### 🍳 AI Recipe Generation
Recipes are personalised by:
- **Dietary restrictions**: vegan, gluten-free, halal, etc.
- **Cuisine preference**: Bangladeshi, Italian, Thai
- **Skill level**: Beginner to Professional Chef
- **Time available**: "Under 30 minutes"
- **Excluded ingredients**: Allergies or dislikes

### 📅 Weekly Meal Planner
- GPT-4 generates a full week of balanced meals
- Automatic grocery list generation
- Nutritional macro tracking per meal

### 🛒 Smart Shopping List
- Detects what you're missing
- Sorted by supermarket aisle
- Integration with online grocery APIs

## Computer Vision Model
\`\`\`python
class IngredientDetector:
    # YOLOv8 backbone fine-tuned on food dataset
    # 2,000+ ingredient classes
    # <150ms inference on mobile GPU
    model = YOLO('pocket_chef_v3.pt')
    
    def detect(self, image_frame):
        results = self.model(image_frame, conf=0.6)
        return [r.name for r in results[0].boxes]
\`\`\`

## Technology Stack
- **Frontend**: Flutter (iOS + Android)
- **Vision**: YOLOv8 + CoreML / TFLite  
- **AI**: GPT-4 API with culinary prompt engineering
- **Backend**: Laravel REST API + MySQL
- **Infrastructure**: Firebase, AWS S3`,
        contentType: "markdown"
    },
    {
        title: "Danesh Exchange",
        content: `# Danesh Exchange — Banking-Grade FX Platform for Australia

> *"Financial freedom should be secure, fast, and accessible to every Australian."*

## Overview
Danesh Exchange is a production-grade **foreign exchange and money transfer platform** serving the Australian market. I architected and developed the Flutter mobile application from scratch, achieving full compliance with Australian banking standards and ASIC regulations.

**Scale**: 5,000+ daily transactions | 60+ currencies | 3,000+ Australia Post locations

## The Security Engineering Challenge
Australian banking compliance requires multiple layers of security that go far beyond standard app development:

| Requirement | Implementation |
|---|---|
| Data Encryption | AES-256-CBC with rotating keys |
| Auth | OTP + Biometric + Session tokens |
| Root Detection | Reflection-based detection + SafetyNet |
| Man-in-the-Middle | Certificate pinning (HPKP) |
| Compliance Logging | Immutable audit trail for ASIC |

## Security Architecture Deep Dive

### AES-256 Encryption Layer
\`\`\`dart
class SecureTransactionService {
  // All transaction data encrypted before leaving device
  Future<EncryptedPayload> encryptTransaction(Transaction tx) async {
    final key = await _keyManager.getRotatingKey();
    final iv = _generateSecureIV();
    
    return AES256.encrypt(
      data: tx.toJson(),
      key: key,
      iv: iv,
      mode: CipherMode.CBC
    );
  }
}
\`\`\`

### Root & Jailbreak Detection
\`\`\`dart
// Multi-signal root detection
class SecurityGuard {
  Future<SecurityStatus> runChecks() async {
    final checks = await Future.wait([
      _checkSuperUser(),        // su binary presence
      _checkMagiskPackage(),    // Magisk detection  
      _checkBuildTags(),        // Build.TAGS verification
      _checkSafetyNetAttestation(), // Google SafetyNet
    ]);
    return SecurityStatus.fromChecks(checks);
  }
}
\`\`\`

## Australia Post Integration
- Integrated with 3,000+ Australia Post outlets as cash-in points
- Custom API bridge for real-time outlet availability
- QR code generation for in-store verification

## Multi-Channel Notifications
Every transaction triggers:
1. **Push notification** (FCM)
2. **SMS** via Twilio
3. **Email** (HTML template)
4. **In-app** transaction receipt

## Technology Stack
- **Mobile**: Flutter (iOS + Android)
- **Backend**: Laravel + MySQL
- **Security**: AES-256, SafetyNet, Certificate Pinning
- **Notifications**: FCM, Twilio SMS, SendGrid
- **APIs**: Australia Post API, Forex rates API
- **Compliance**: ASIC-aligned audit logging`,
        contentType: "markdown"
    },
    {
        title: "Porua / Porua.org",
        content: `# Porua.org — The Piracy-Proof eBook Platform

> *"Digital books deserve the same protection as physical ones — and then some."*

## Overview
Porua is a **multi-vendor digital publishing platform** handling encrypted eBooks and PDFs with enterprise-grade piracy prevention. It serves publishers, educators, and individual authors across Bangladesh with a multilingual marketplace.

**Status**: Live and operational at Porua.org

## The Piracy Problem
Digital book piracy costs publishers billions annually. Standard PDF protection is trivial to bypass (just screenshot each page). Porua solves this at the rendering layer.

## Encryption Architecture

### Layer 1 — File Encryption
\`\`\`
Publisher uploads PDF
    ↓
Server-side AES-256 encryption per file
    ↓
Encrypted file stored in AWS S3
    ↓
Private CDN with signed time-limited URLs
\`\`\`

### Layer 2 — Custom Rendering Engine
eBooks never exist as a decrypted file on the device. The app renders **page-by-page**, decrypting only the current page in memory:

\`\`\`dart
class SecurePageRenderer {
  // Each page is a separate encrypted chunk
  Future<Page> renderPage(int pageNumber, String sessionToken) async {
    final encryptedChunk = await _cdn.fetchPage(pageNumber, sessionToken);
    final pageData = AES.decryptInMemory(encryptedChunk, _sessionKey);
    
    // Render to canvas — no file written to disk
    return CustomPainter.render(pageData);
  }
}
\`\`\`

### Layer 3 — Screenshot Prevention
- Android: \`FLAG_SECURE\` on all windows
- iOS: Screen recording detection + automatic page blur
- Screen sharing: Real-time detection via accessibility API

## Multi-Vendor Marketplace

| Feature | Detail |
|---|---|
| Vendors | Individual authors, publishers, educational institutions |
| Currencies | BDT, USD (multi-currency checkout) |
| Revenue Split | Configurable per-vendor royalty percentages |
| Analytics | Per-book sales dashboards for vendors |
| Formats | PDF, EPUB, custom encrypted format |

## Migration from Legacy System
I led the technical migration from a single-vendor to multi-vendor architecture:
- Python scripts for database schema migration
- Zero-downtime migration with blue-green deployment
- 100% data integrity verification post-migration

## Technology Stack
- **Frontend**: Flutter (iOS + Android)
- **Backend**: Laravel + MySQL
- **Storage**: AWS S3 + CloudFront CDN
- **Encryption**: AES-256 (custom implementation)
- **Payment**: SSLCommerz + Stripe
- **Auth**: Firebase Authentication`,
        contentType: "markdown"
    },
    {
        title: "HOMEFOODZ",
        content: `# HOMEFOODZ — Banglalink IT Incubator 2.0 Champion

> *"Every home cook deserves a storefront. Every food lover deserves authentic home cooking."*

## Recognition
🏆 **Banglalink IT Incubator 2.0 Champion** — Awarded dedicated office space and incubation support from Banglalink (Bangladesh's second-largest telco).

## The Concept
HOMEFOODZ is a two-sided marketplace connecting **home-based food entrepreneurs** (housewives, students, home chefs) with **food lovers** seeking authentic, homemade meals. It digitizes the informal home food economy that Bangladesh already has — but gives it a formal, trusted platform.

## Why It Won
The judges recognized three key innovations:

1. **Social Impact**: Empowers women entrepreneurs with zero capital requirement
2. **Market Gap**: No existing platform addressed the home food segment
3. **Technical Execution**: Complete marketplace with real-time order tracking

## Platform Architecture

\`\`\`
Food Lover App          Home Chef App
      ↓                       ↓
   Browse Menu           Manage Orders
   Place Order           Set Availability
   Track Delivery        Upload Photos
        ↓                       ↓
         REST API (Laravel)
              ↓
    MySQL + Firebase RT DB
              ↓
    Order Matching Engine
              ↓
    Delivery Partner App
\`\`\`

## Key Features

### For Home Chefs
- **Digital Kitchen**: Create a profile with photos, cuisine type, pricing
- **Pre-Order System**: Accept orders 24h in advance for planning
- **Revenue Dashboard**: Daily/weekly earnings with payout management
- **Rating System**: Build reputation through customer reviews

### For Food Lovers
- **Discover**: Browse home kitchens by cuisine, location, rating
- **Real-time Tracking**: Live order status updates
- **Reviews & Ratings**: Community-driven quality control
- **Repeat Orders**: One-tap reorder from favorite chefs

### Marketplace Safety
- ID verification for all home chefs
- Food safety certification prompts
- Secure payments (no cash handling)
- Dispute resolution system

## Technology Stack
- **Mobile**: Java/Android (original), Flutter (v2)
- **Backend**: Laravel REST API + MySQL
- **Real-time**: Firebase Realtime Database
- **Maps**: Google Maps SDK
- **Payments**: bKash + Card gateway`,
        contentType: "markdown"
    },
    {
        title: "E-PARKING",
        content: `# E-PARKING — BASIS National ICT Award Winner 2018

> *"Why build more parking lots when millions of private spaces sit empty every day?"*

## Recognition
🏆 **BASIS National ICT Awards 2018 — Innovation Category Winner**

Built at **Nerd Castle Limited**, E-PARKING won Bangladesh's most prestigious tech award for its innovative approach to urban parking scarcity.

## The Urban Problem
Dhaka is one of the most congested cities in the world. Major problems:
- **Parking scarcity**: Central areas have 10x more vehicles than spaces
- **Wasted capacity**: Millions of private driveways, garages, and lots sit empty daily
- **Search time**: Average 23 minutes wasted finding parking per trip

E-PARKING solves this by turning private spaces into a shared parking economy.

## How It Works

\`\`\`
Space Owner registers private spot (home, office, shop)
    ↓
Sets availability hours & pricing
    ↓
Driver searches → finds nearby spots on map
    ↓
Books & pays digitally → receives QR code
    ↓
Scans QR code at gate → boom opens
    ↓
Owner gets paid, driver parks, city breathes
\`\`\`

## Dual-App Architecture

### Driver App
- Map-based discovery of available spots
- Real-time availability (socket sync)
- Advance booking up to 7 days
- In-app payment (bKash, card, wallet)
- QR code for gate access
- Time extension requests

### Provider App
- List and manage spaces
- Set hourly/daily rates
- Availability calendar
- Revenue dashboard
- QR scanner for validation
- Booking confirmation with tenant details

## IoT Gate Integration
For commercial providers:
\`\`\`
QR Code Scan → Validation API → IoT Controller → Boom Barrier Opens
                     ↑
           JWT-signed, time-limited QR
           (invalid after booking ends)
\`\`\`

## Key Technical Features
- **Real-time sync**: Firebase for live slot availability
- **Geofencing**: Alerts when driver is near booked spot
- **Dynamic pricing**: Peak hour surge pricing algorithm
- **Anti-fraud**: GPS verification that driver is at location before QR activation

## Technology Stack
- **Mobile**: Java/Android (dual apps)
- **Backend**: Laravel + MySQL
- **Real-time**: Firebase Realtime Database
- **Maps**: Google Maps + Geofencing API
- **IoT**: Custom Arduino controller with REST endpoint
- **Payments**: bKash API + SSLCommerz`,
        contentType: "markdown"
    },
    {
        title: "A.I. Wall-E Specialist",
        content: `# A.I. Wall-E Specialist — University Thesis Project

> *"Building a robot that sees, thinks, and speaks — with a $30 Raspberry Pi and a lot of code."*

## Overview
Inspired by Pixar's Wall-E, this is an intelligent surveillance and interaction robot built as a **university thesis project** at Daffodil International University. It combines computer vision, text-to-speech, and remote Android control into a single autonomous platform.

## Core Capabilities

### 👁️ Computer Vision
- **Object Recognition**: Identifies 80+ common objects in real-time using YOLO
- **Face Detection**: OpenCV face cascade for person detection
- **Distance Estimation**: Depth calculation using monocular vision + stereo camera techniques

### 🗣️ Text-to-Speech
- Identified objects are spoken aloud via Android TTS
- "I can see: a person, a chair, and a laptop"
- Custom robot voice tuning

### 📱 Android Remote Control
- Secure WiFi-based control app
- **4-directional movement**: Forward, backward, left, right
- **Tilt-to-drive mode**: Gyroscope-based driving (tilt phone to steer)
- **Voice commands**: "Go forward", "Stop", "Turn left"
- Live camera feed streamed to phone

## Hardware Architecture
\`\`\`
Raspberry Pi 4B (Brain)
    ├── Camera Module v2 (Eyes)
    ├── Motor Controller (L298N)
    │   ├── Left Motor (Drive)
    │   └── Right Motor (Drive)
    ├── Servo Motor (Head/Camera rotation)
    ├── Speaker (Text-to-Speech output)
    └── WiFi Module (Android communication)
\`\`\`

## Software Stack

### Robot-Side (Python)
\`\`\`python
# Main perception loop
while True:
    frame = camera.capture()
    detections = yolo_model.detect(frame)
    
    for obj in detections:
        speak(f"I see a {obj.label}")
        draw_bounding_box(frame, obj)
    
    stream_to_android(frame)
    handle_control_commands()
\`\`\`

### Android App (Java)
- Real-time MJPEG video stream viewer
- Joystick control overlay
- Accelerometer-based tilt driving
- Voice command recognition via Android Speech API

## Autonomous Entertainment Modes
The robot has built-in autonomous behaviours:
- **Patrol Mode**: Random movement while scanning environment
- **Follow Mode**: Tracks and follows a detected person
- **Guard Mode**: Stationary with motion alert notifications

## Academic Impact
- Awarded distinction grade for technical implementation
- Led to BASIS Certified Android Developer certification
- Foundation for all subsequent AI and robotics work

## Technology Stack
- **Hardware**: Raspberry Pi 4B, Arduino Nano, L298N
- **Vision**: OpenCV, YOLOv3 (Darknet)
- **Robot OS**: Python 3 on Raspberry Pi OS
- **Mobile**: Java Android + Speech API
- **Communication**: WebSockets over local WiFi`,
        contentType: "markdown"
    },
];

async function main() {
    console.log('🚀 Seeding rich project content...');

    for (const item of projectsContent) {
        const slug = makeSlug(item.title);

        // Try exact slug match first, then title match
        let project = await prisma.project.findFirst({
            where: { slug }
        });

        if (!project) {
            // Fallback: try title contains match
            project = await prisma.project.findFirst({
                where: {
                    title: {
                        contains: item.title.split(' ')[0]
                    }
                }
            });
        }

        if (!project) {
            console.log(`  ⚠️  Could not find project: "${item.title}" — skipping`);
            continue;
        }

        await prisma.project.update({
            where: { id: project.id },
            data: {
                content: item.content,
                contentType: item.contentType,
            }
        });

        console.log(`  ✅  Updated: ${project.title}`);
    }

    console.log('\n✅ All project content seeded!');
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error('❌ Failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
