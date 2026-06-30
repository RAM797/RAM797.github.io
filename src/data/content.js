// ─────────────────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update the site — every section reads from here.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ram Sankar Koripalli',
  firstName: 'Ram',
  roles: [
    'AI infrastructure',
    'distributed systems',
    'backend microservices',
    'ML inference engines',
    'GPU-accelerated kernels',
  ],
  tagline: 'Software Engineer building distributed systems, backend microservices, and ML infrastructure at scale.',
  location: 'Sunnyvale, CA',
  email: 'ramshankar797@gmail.com',
  phone: '(979) 635-0305',
  resumeUrl: '/Ram_Sankar_Koripalli_Resume.pdf',
  summary:
    'Software engineer with 5+ years of experience building distributed systems, backend microservices, and ML infrastructure at scale. Tech lead for telemetry on 100M+ Amazon devices; previously shipped Go cloud-storage services for 100+ enterprise customers at HPE. Hands-on with LLM inference, GPU/CUDA kernel optimization, and high-throughput, low-latency systems.',
  seeking:
    'Seeking AI infrastructure, distributed systems, and backend engineering roles.',
}

export const socials = {
  github: 'https://github.com/RAM797',
  linkedin: 'https://www.linkedin.com/in/ramsankar797',
  email: 'mailto:ramshankar797@gmail.com',
}

// Headline metrics used for the "by the numbers" strip
export const stats = [
  { value: '5+', label: 'Years building at scale' },
  { value: '100M+', label: 'Devices served (Amazon)' },
  { value: '120', label: 'GFLOPS custom CUDA GEMM' },
  { value: '4.0', label: 'M.S. GPA · Texas A&M' },
]

export const about = {
  intro:
    "I'm a software engineer who likes the layer where systems meet scale — telemetry pipelines feeding 100M+ devices, Go microservices for global enterprise storage, and CUDA kernels squeezing every last GFLOP out of a GPU.",
  body: [
    'Today I lead the Device OS Metrics & Telemetry platform at Amazon (Lab126), designing observability systems that span FireOS, VegaOS, and AOSP. Before that I shipped cloud-storage microservices at HPE and built RDBMS test infrastructure and ML tooling at Oracle.',
    'My sweet spot is high-throughput, low-latency backend and ML infrastructure: gRPC service contracts, event-driven architectures, GPU/CUDA kernel optimization, and LLM inference pipelines. I care about systems that stay fast, observable, and correct as they grow.',
  ],
  // Tags surfaced as quick "what I work on" chips
  focus: [
    'AI / ML Infrastructure',
    'Distributed Systems',
    'Telemetry & Observability',
    'GPU / CUDA Optimization',
    'LLM Inference',
    'Backend Microservices',
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Go', 'C++', 'C', 'Java', 'JavaScript', 'SQL', 'Bash', 'CUDA'],
  },
  {
    category: 'AI / ML',
    items: [
      'PyTorch',
      'TensorFlow',
      'ONNX',
      'LangChain',
      'LLM Inference',
      'FP16 Quantization',
      'GPU Kernels',
      'scikit-learn',
    ],
  },
  {
    category: 'Distributed Systems',
    items: [
      'Microservices',
      'gRPC',
      'REST',
      'Kafka',
      'NATS',
      'Redis',
      'Event-Driven Architecture',
      'Telemetry & Observability',
    ],
  },
  {
    category: 'Infra & DevOps',
    items: [
      'Docker',
      'Kubernetes',
      'Helm',
      'Prometheus',
      'Jenkins',
      'GitHub Actions',
      'AWS (EC2 · S3 · DynamoDB)',
    ],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'Oracle', 'MySQL', 'DynamoDB', 'Redis'],
  },
  {
    category: 'Web Frameworks',
    items: ['Django', 'Flask', 'Streamlit', 'Oracle APEX'],
  },
]

export const experience = [
  {
    company: 'Amazon (Lab126)',
    role: 'Software Development Engineer II',
    team: 'Device OS Metrics & Telemetry Platform',
    location: 'Sunnyvale, CA',
    start: 'Sep 2025',
    end: 'Present',
    current: true,
    highlights: [
      'Tech lead for the Device OS Metrics platform across FireOS, VegaOS, and AOSP-based platforms; architecting scalable telemetry and metrics-collection systems that power observability for 100M+ active devices.',
      'Designed a rule-based metrics triggering framework that lets 50+ internal teams declaratively define conditional logic, eliminating manual instrumentation and accelerating time-to-metric from days to hours.',
      'Built a dynamic metric config registration/deregistration system that honors user consent and multi-user profile switching, ensuring compliance with Google MBA privacy policies across the device fleet.',
    ],
    tags: ['Telemetry', 'Observability', 'Distributed Systems', 'AOSP'],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Software Development Engineer',
    team: 'Cloud Storage Platform',
    location: 'Durham, NC',
    start: 'Feb 2024',
    end: 'Aug 2025',
    highlights: [
      "Built high-performance Go microservices powering HPE's cloud storage platform for 100+ global enterprise customers, owning secure configuration management, authentication workflows, and gRPC service contracts.",
      'Engineered a reusable Health Check Manager adopted across 4 team-owned microservices, standardizing Kubernetes liveness and readiness probes and reducing on-call noise from health-related incidents.',
      'Pioneered AI-driven unit-test generation using prompt engineering with GitHub Copilot, achieving ~95% generated-test accuracy, lifting code coverage by 15%, and cutting manual test-authoring effort by 70%.',
    ],
    tags: ['Go', 'gRPC', 'Kubernetes', 'Microservices'],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Software Engineer Intern',
    team: 'Cloud Data Services Org',
    location: 'Durham, NC',
    start: 'May 2023',
    end: 'Aug 2023',
    highlights: [
      'Built a CI quality-metrics dashboard aggregating results from 630 GitHub repositories, giving the cloud data services org real-time visibility into test health and build performance.',
      'Re-architected result extraction from a poll-based to a push-based pipeline using Amazon S3 and GitHub Actions, achieving a 350% throughput improvement.',
    ],
    tags: ['AWS S3', 'CI/CD', 'GitHub Actions'],
  },
  {
    company: 'Oracle',
    role: 'Senior Member of Technical Staff (SDE II)',
    team: 'RDBMS Test Infrastructure',
    location: 'Bengaluru, India',
    start: 'Oct 2021',
    end: 'Aug 2022',
    highlights: [
      'Built a relationship-mapping system between RDBMS test suites using Oracle PGX (graph DB) and Redis, enabling test deduplication and cutting redundant executions in large regression runs.',
      'Designed an automated alerting system to track code-coverage regressions across 1,000+ RDBMS modules, driving long-term code-quality improvements at scale.',
      'Lifted GCC block-level coverage of Oracle GoldenGate from 52% to 77% by overhauling coverage validation, profiling, and test-suite integration in the CI pipeline.',
    ],
    tags: ['Graph DB', 'Redis', 'CI', 'Test Infra'],
  },
  {
    company: 'Oracle',
    role: 'Member of Technical Staff (SDE I)',
    team: 'RDBMS Tooling & ML',
    location: 'Bengaluru, India',
    start: 'Jul 2019',
    end: 'Oct 2021',
    highlights: [
      'Implemented a SQL/OraTst/log linter using ANTLR, Python, and Java that serves ~600 requests/day and is integrated into the code-review workflow.',
      'Reduced runtime of a test-selection algorithm by 2.3x by identifying CLOB fetch as the bottleneck and re-implementing it as deferred, batched, multithreaded reads via OCCI.',
      'Trained an RNN-based text-classification model on 4,500 RDBMS bug reports for automated root-cause identification, accelerating bug triage.',
    ],
    tags: ['ANTLR', 'Python', 'Java', 'RNN'],
  },
  {
    company: 'JPMorgan Chase',
    role: 'Machine Learning Intern',
    team: 'Fraud Detection Research',
    location: 'Hyderabad, India',
    start: 'May 2018',
    end: 'Jul 2018',
    highlights: [
      'Built RNN/LSTM credit-card fraud-detection models in TensorFlow on 120K transactions; bidirectional LSTM achieved 94% accuracy / 95% precision / 85% recall under 10-fold cross-validation.',
    ],
    tags: ['TensorFlow', 'LSTM', 'Fraud Detection'],
  },
]

export const projects = [
  {
    name: 'CUDA-Accelerated Batched GEMM & MLP Inference',
    period: 'Jun 2025 – Aug 2025',
    blurb:
      'A tiled shared-memory CUDA kernel for 512×512 GEMM hitting 120 GFLOPS on a T4 GPU — 4× a CPU BLAS baseline and ~12% of cuBLAS — plus an MNIST MLP inference path at 13 ms / 1,000 images. Profiled and tuned with Nsight Compute; FP16 quantization with <0.5% accuracy loss.',
    metrics: ['120 GFLOPS', '4× CPU BLAS', '13 ms / 1k imgs'],
    tags: ['CUDA', 'GPU', 'FP16', 'Nsight'],
    featured: true,
  },
  {
    name: 'LLaMA-Based LLM Inference Engine',
    period: 'May 2025 – Jun 2025',
    blurb:
      'A LLaMA 2-1.3B inference pipeline on AWS EC2 g4dn.large (T4) with FP16 quantization, dynamic batching, and CUDA memory optimizations — 25 ms/token latency while serving 6 concurrent requests.',
    metrics: ['25 ms / token', '6 concurrent', 'T4 GPU'],
    tags: ['LLM Inference', 'AWS', 'Dynamic Batching'],
    featured: true,
  },
  {
    name: 'Two Truths One Lie — Generative AI Trivia',
    period: 'Jan 2025 – Feb 2025',
    blurb:
      'An interactive trivia app built with LangChain and Streamlit; players try to spot the LLM-generated lie hidden among three statements.',
    metrics: ['LangChain', 'Streamlit'],
    tags: ['LangChain', 'Streamlit', 'GenAI'],
    featured: false,
  },
  {
    name: 'Meme Recommendation System',
    period: 'Apr 2023 – May 2023',
    blurb:
      'A Django + DynamoDB recommender that suggests memes from user preferences and engagement; cached embeddings in Redis for a 5× retrieval speedup.',
    metrics: ['5× faster', 'Redis cache'],
    tags: ['Django', 'DynamoDB', 'Redis'],
    featured: false,
  },
]

export const education = [
  {
    school: 'Texas A&M University',
    degree: 'M.S., Computer Science',
    detail: 'GPA 4.0 / 4.0',
    location: 'College Station, TX',
    start: 'Aug 2022',
    end: 'Dec 2023',
    awards: ['$1,000 Department of CSE Academic Scholarship (2023)'],
  },
  {
    school: 'NIT Tiruchirappalli',
    degree: 'B.Tech, Computer Science',
    detail: 'CGPA 8.54 / 10.0 · Minor in Management Studies',
    location: 'Tiruchirappalli, India',
    start: 'Jul 2015',
    end: 'May 2019',
    awards: ['ET Campus Stars Challenger Award — top 34–70 of 5,000 (2018)'],
  },
]

// Navigation sections (id must match each section's anchor id)
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
