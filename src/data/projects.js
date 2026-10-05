/**
 * Projects Data Module
 * Top-tier high-impact systems spanning Full-Stack AI architectures,
 * enterprise document intelligence, distributed big data pipelines, and intelligent agents.
 */

export const projects = [
  {
    id: 1,
    slug: "libstack",
    title: "LibStack — AI-Powered Enterprise Library System",
    subtitle: "Full-Stack Next.js 15, PostgreSQL & Groq LLaMA-3.3-70B Bengali RAG",
    category: "Full-Stack AI",
    description:
      "Production-grade library circulation system featuring an in-catalog Bengali conversational AI recommendation assistant, sub-millisecond inventory concurrency guards, and 24-book sliced pagination.",
    longDescription:
      "Eliminated over-issuing race conditions on single-copy inventory using PostgreSQL partial composite indexing (book_issues_active_inventory_idx on book_id where returned_at IS NULL) and transactional validation guards. Implemented a zero-hallucination RAG pipeline using Groq LLaMA-3.3-70B with custom token delimiters ([[BOOK:uuid]]) dynamically parsed into interactive UI micro-cards directly linked to circulation modals. Features custom Bengali stemming with case-inflection stripping.",
    image: "/projects/libstack.png",
    video: "",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Groq LLaMA-3.3-70B",
      "Tailwind CSS",
      "Bengali NLP / RAG"
    ],
    demoUrl: "https://libstack-origin.vercel.app",
    githubUrl: "https://github.com/mahadi24t/libstack",
    featured: true,
    accentColor: "from-blue-600 to-indigo-600",
    status: "Live Production",
    highlights: [
      "Inference Latency: ~300+ tok/s (<1s response)",
      "Inventory Race Prevention: 100% concurrency-safe",
      "Catalog DOM Footprint: -78% (24-item sliced pagination)"
    ],
    metrics: {
      "Inference Latency": "~300+ tok/s (<1s response)",
      "Inventory Concurrency": "100% concurrency-safe",
      "Catalog DOM Footprint": "-78% sliced pagination"
    }
  },
  {
    id: 2,
    slug: "futuremap",
    title: "FutureMap™ — Enterprise Document Intelligence & SME Scoring",
    subtitle: "Lead Software Architect — Autonomous Financial Intelligence Platform",
    category: "Full-Stack AI",
    description:
      "Architected an enterprise document intelligence platform turning complex financial PDFs into decision-ready SME investment intelligence with decoupled qualitative AI reasoning and deterministic SQL scoring.",
    longDescription:
      "Re-architected manual analyst assessment into a 100% automated 3-step pipeline: secure document ingestion with magic-byte validation and ClamAV quarantine scanning, async FastAPI PDF chunking studio, and decoupled scoring where GPT-4o emits qualitative 9-category scores and PostgreSQL RPC (calculate_assessment_scores) deterministically computes weighted totals, eliminating math hallucination and ensuring full compliance auditability.",
    image: "/projects/futuremap.png",
    video: "",
    tags: [
      "Next.js",
      "FastAPI (Python)",
      "PostgreSQL / Supabase",
      "OpenAI GPT-4o",
      "TypeScript",
      "ClamAV",
      "Docker",
      "Deterministic SQL RPC"
    ],
    demoUrl: "https://futuremap-mvp.vercel.app/",
    githubUrl: "#",
    featured: true,
    accentColor: "from-purple-500 to-pink-600",
    status: "Enterprise MVP",
    highlights: [
      "Workflow Automation: 100% autonomous evaluation",
      "Scoring Calculation: Deterministic PostgreSQL RPC",
      "Ingestion Security: Magic-byte + ClamAV quarantine"
    ],
    metrics: {
      "Workflow Automation": "100% autonomous evaluation",
      "Scoring Engine": "Deterministic PostgreSQL RPC",
      "Ingestion Defense": "Magic-byte + ClamAV quarantine"
    }
  },
  {
    id: 3,
    slug: "dual-telegram-bot",
    title: "Dual Telegram AI Assistant",
    subtitle: "Multi-Persona LLM Assistant Bot via Groq LLaMA-3.3-70B",
    category: "AI & Automation",
    description:
      "High-throughput dual-mode Telegram bot leveraging Groq API's ultra-fast LLaMA-3.3-70b inference, persistent conversation history with SQLite, and 24/7 cloud deployment on Render.",
    longDescription:
      "Engineered asynchronous Telegram webhook handlers with sub-second token streaming via Groq LLaMA-3.3-70b. Implemented thread-safe SQLite connection pooling for per-user conversational memory, persona switching, and automated message truncation safeguards.",
    image: "/projects/telegrambot.jpg",
    video: "",
    tags: [
      "Groq LLaMA-3.3-70B",
      "Python",
      "SQLite",
      "Telegram Bot API",
      "Render",
      "Asynchronous"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/dual-telegram-ai-assistant",
    featured: true,
    accentColor: "from-cyan-500 to-blue-600",
    status: "Live",
    highlights: [
      "Inference Latency: <800ms Time-to-First-Token",
      "Memory Architecture: Thread-safe SQLite connection pooling",
      "Deployment Uptime: 99.9% 24/7 on Render"
    ],
    metrics: {
      "Token Streaming": "<800ms Time-to-First-Token",
      "Context Memory": "Persistent SQLite per-user session",
      "Availability": "99.9% Cloud Uptime"
    }
  },
  {
    id: 4,
    slug: "stock-market-forecasting",
    title: "Big Data Stock Market Forecasting",
    subtitle: "Hybrid CNN-LSTM with Apache Spark & Sentiment Analysis",
    category: "Big Data & ML",
    description:
      "Scalable big data analytics pipeline merging 1.4M news headlines with historical market trends to train a hybrid CNN-LSTM predictive model using Apache Spark and TensorFlow.",
    longDescription:
      "Processed and tokenized over 1.4 million financial news headlines using Apache Spark clusters. Combined NLP sentiment polarity scores with technical indicators into a hybrid spatial-temporal CNN-LSTM neural network to forecast market movements.",
    image: "/projects/stock-forecast.png",
    video: "",
    tags: [
      "Apache Spark",
      "Hybrid CNN-LSTM",
      "Sentiment Analysis",
      "TensorFlow",
      "PySpark",
      "Big Data"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/stockpriceprediction",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600",
    status: "Research",
    highlights: [
      "Dataset Scale: 1.4M+ Financial News Articles Processed",
      "Distributed Engine: Apache Spark RDDs & PySpark NLP",
      "Neural Architecture: Hybrid Spatial CNN + Temporal LSTM"
    ],
    metrics: {
      "Dataset Scale": "1.4M+ News Headlines Processed",
      "Feature Extraction": "Distributed PySpark Text Pipeline",
      "Model Architecture": "Hybrid CNN-LSTM Neural Network"
    }
  },
  {
    id: 5,
    slug: "chef-llm",
    title: "Chef-LLM: AI-Powered Culinary Assistant",
    subtitle: "Context-Aware Zero-Waste Culinary Synthesis",
    category: "AI & Web",
    description:
      "Intelligent culinary assistant that creates creative, customized recipes based on available pantry ingredients using Perplexity AI with real-time response generation.",
    longDescription:
      "Implemented a responsive recipe generator powered by Perplexity AI's live reasoning models. Features prompt injection defense, dietary constraint filters, zero-waste pantry ingredient matching, and real-time streaming text rendering.",
    image: "/projects/chef-llm.png",
    video: "",
    tags: [
      "React 18",
      "Perplexity AI",
      "Vite",
      "Tailwind CSS",
      "Netlify",
      "Prompt Engineering"
    ],
    demoUrl: "https://chef-llm.netlify.app/",
    githubUrl: "https://github.com/mahadi24t/Chef-LLM",
    featured: true,
    accentColor: "from-amber-500 to-orange-600",
    status: "Live Production",
    highlights: [
      "AI Core: Perplexity AI Live Reasoning Integration",
      "Pantry Matching: Zero-Waste Ingredient Synthesis",
      "Streaming Engine: Sub-Second Responsive Text Generation"
    ],
    metrics: {
      "Response Generation": "Real-time streaming synthesis",
      "Frontend Engine": "React 18 Concurrent Rendering",
      "Deployment": "Netlify Edge Global CDN"
    }
  },
  {
    id: 6,
    slug: "higgs-boson-pca",
    title: "Scalable PCA on Higgs Boson Dataset",
    subtitle: "Distributed Dimensionality Reduction on 11M+ Records",
    category: "Big Data & ML",
    description:
      "Scalable dimensionality reduction pipeline on the 11-million-record UCI Higgs dataset using Apache Spark MLlib and PySpark for distributed feature extraction.",
    longDescription:
      "Engineered a distributed machine learning pipeline to process the 11-million-record UCI Higgs Boson dataset (~8 GB). Benchmarked Spark MLlib's Singular Value Decomposition (SVD) and PCA against single-node memory ceilings, preserving 95% variance with significant feature dimension reduction.",
    image: "/projects/higgs-pca.png",
    video: "",
    tags: [
      "Apache Spark MLlib",
      "PySpark",
      "11M+ Records",
      "PCA",
      "Distributed Systems",
      "Big Data"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/mahadi24t/openendedbigdata",
    featured: true,
    accentColor: "from-rose-500 to-pink-600",
    status: "Research Benchmark",
    highlights: [
      "Data Volume: 11 Million Records (~8 GB Dataset)",
      "Variance Preserved: 95% with Dimensionality Reduction",
      "Cluster Compute: Distributed Apache Spark MLlib SVD"
    ],
    metrics: {
      "Dataset Scale": "11M Records (~8 GB)",
      "Variance Retained": "95% Information Preserved",
      "Engine": "Distributed Spark MLlib SVD"
    }
  }
];

export default projects;
