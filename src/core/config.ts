export const SITE_CONFIG = {
    name: "Aqib Mehedi",
    company: "Kamal-Paterson Ltd",
    logo: {
        text: "Aqib",
        suffix: " Mehedi",
    },
    title: "Best AI Engineer in Bangladesh | Senior Solutions Architect",
    description: "Aqib Mehedi is the Best AI Engineer in Bangladesh, specializing in custom LLMs, RAG systems, and high-performance Flutter applications. Award-winning innovation and 10+ years experience.",
    url: "https://aqibmehedi.com",
    ogImage: "/og-image.png",
    keywords: [
        "Best AI Engineer in Bangladesh",
        "Top AI Engineer Bangladesh",
        "Hire AI Engineer Dhaka",
        "Generative AI Specialist Bangladesh",
        "LLM Fine-Tuning Expert Bangladesh",
        "RAG System Developer Bangladesh",
        "Senior Mobile Solutions Architect",
        "Best Flutter Developer Bangladesh",
        "Aqib Mehedi",
        "Kamal-Paterson Ltd",
        "Agri-Llama",
        "Krishok AI",
        "AI Consultant Bangladesh",
        "Technical Architect Dhaka",
        "Machine Learning Engineer Bangladesh",
    ],
    author: "Aqib Mehedi",
    location: "Dhaka, Bangladesh",
    coordinates: {
        lat: 23.8103,
        lng: 90.4125,
    },
    socials: {
        github: "https://github.com/aqibmehedi007",
        linkedin: "https://linkedin.com/in/aqibmehedi",
        email: "aqibcareer007@gmail.com",
        whatsapp: "+8801777818880",
    },
    navLinks: [
        { label: "Expertise", href: "/#stack" },
        { label: "Arsenal", href: "/#arsenal" },
        { label: "Projects", href: "/#projects" },
        { label: "Blog", href: "/blog" },
        { label: "Approach", href: "/#process" },
        { label: "Contact", href: "/#contact" },
    ],
    cta: {
        nav: "Hire Me",
        hero: "Architect Your Future",
        contact: "Start the Audit",
    },
    assets: {
        profile: "/profile/aqib_mehedi.jpg",
        resume: "/resume/Aqib-Mehedi-Resume.pdf",
        og: "/og-image.png",
    }
};

export const SCHEMA_DATA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": `${SITE_CONFIG.url}/#person`,
            "name": SITE_CONFIG.name,
            "url": SITE_CONFIG.url,
            "image": {
                "@type": "ImageObject",
                "@id": `${SITE_CONFIG.url}/#primaryimage`,
                "url": `${SITE_CONFIG.url}${SITE_CONFIG.assets.profile}`,
                "contentUrl": `${SITE_CONFIG.url}${SITE_CONFIG.assets.profile}`,
                "caption": `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
                "width": 800,
                "height": 800
            },
            "jobTitle": ["Senior AI & Mobile Solutions Architect", "Best AI Engineer in Bangladesh", "LLM Specialist"],
            "worksFor": {
                "@type": "Organization",
                "name": SITE_CONFIG.company,
                "url": "https://kamal-paterson.com"
            },
            "alternateName": [
                "Aqib Mehedi",
                "Mehedi Aqib",
                "Engineer Aqib",
                "Aqib AI",
                "Best AI Engineer Bangladesh",
                "Top Gen AI Specialist Bangladesh",
                "Leading Flutter Architect Dhaka",
                "Architect Aqib",
                "Aqib GenAI",
                "Aqib RAG Expert",
            ],
            "description": SITE_CONFIG.description,
            "sameAs": [
                SITE_CONFIG.socials.linkedin,
                SITE_CONFIG.socials.github,
            ],
            "knowsAbout": [
                "Artificial Intelligence",
                "Generative AI",
                "Large Language Models (LLM)",
                "Retrieval-Augmented Generation (RAG)",
                "Flutter Development",
                "System Architecture",
                "LLM Fine-tuning",
                "MLOps",
                "Computer Vision",
                "AES-256 Encryption",
                "Cloud Computing",
                "AWS",
                "Google Cloud",
                "Vector Databases",
            ],
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "BSc in Computer Science & Engineering",
                    "recognizedBy": { "@type": "Organization", "name": "Daffodil International University" }
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "BASIS Certified Android Developer",
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "Machine Learning Specialization",
                    "recognizedBy": { "@type": "Organization", "name": "DeepLearning.AI" }
                }
            ],
            "award": [
                "BASIS National ICT Awards 2018 Winner - E-Parking (Smart Parking Solution)",
                "Banglalink IT Incubator 2.0 Champion - HomeFoodz",
            ],
        },
        {
            "@type": "ProfilePage",
            "@id": `${SITE_CONFIG.url}/#profilepage`,
            "name": `${SITE_CONFIG.name} - Official Professional Profile`,
            "description": `Comprehensive professional profile of ${SITE_CONFIG.name}, the best AI engineer in Bangladesh.`,
            "mainEntity": { "@id": `${SITE_CONFIG.url}/#person` }
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-ai`,
            "name": "Best AI Engineer Bangladesh",
            "url": `${SITE_CONFIG.url}/best-ai-engineer-bangladesh`
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-flutter`,
            "name": "Senior Flutter Architect",
            "url": `${SITE_CONFIG.url}/senior-flutter-architect-bangladesh`
        },
        {
            "@type": "SiteNavigationElement",
            "@id": `${SITE_CONFIG.url}/#nav-enterprise`,
            "name": "Enterprise AI Solutions",
            "url": `${SITE_CONFIG.url}/enterprise-ai-solutions-architect`
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_CONFIG.url}/#website`,
            "url": SITE_CONFIG.url,
            "name": SITE_CONFIG.name,
            "description": SITE_CONFIG.description,
            "publisher": { "@id": `${SITE_CONFIG.url}/#person` },
            "inLanguage": "en-US",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": `${SITE_CONFIG.url}/#projects?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.url}/#webpage`,
            "url": SITE_CONFIG.url,
            "name": SITE_CONFIG.title,
            "isPartOf": { "@id": `${SITE_CONFIG.url}/#website` },
            "about": { "@id": `${SITE_CONFIG.url}/#person` },
            "description": SITE_CONFIG.description,
            "breadcrumb": { "@id": `${SITE_CONFIG.url}/#breadcrumb` },
            "primaryImageOfPage": { "@id": `${SITE_CONFIG.url}/#primaryimage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_CONFIG.url}/#breadcrumb`,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SITE_CONFIG.url
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_CONFIG.url}/#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who is the best AI Engineer in Bangladesh?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aqib Mehedi is recognized as a top AI Engineer in Bangladesh, winning the BASIS National ICT Award and specializing in enterprise-grade LLM and RAG systems."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What AI services does Aqib Mehedi provide?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Aqib provides LLM Fine-tuning, RAG system development, custom AI Agents, and high-performance mobile architectures."
                    }
                }
            ]
        }
    ],
};
