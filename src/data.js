// All site content lives here — edit this file to update the portfolio.
// Sources: CV (Google Docs), the old Framer case studies, and github.com/AlfatTaufik.

export const profile = {
  name: 'Alfat Taufik',
  fullName: 'Alfat Taufik Nurhidayat',
  roles: ['Programmer', 'Freelancer'],
  tagline: "I'm based in Indonesia, working remotely with clients worldwide.",
  headline:
    'BNSP-certified Junior Programmer and BCA PPTI scholar studying Computer Science at Binus University.',
  email: 'alfattaufiknh@gmail.com',
  phone: '+62 859-4227-7317',
  cv: 'https://docs.google.com/document/d/18zeiQeMrQV3xnhDn1syUdH0Ba3_A3A4py-HidcY3EkI/edit?usp=sharing',
  avatar: '/images/portrait-front.jpg',
  portraitFront: '/images/portrait-front.jpg',
  portraitBack: '/images/portrait-back.jpg',
}

export const socials = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/alfattn' },
  { name: 'GitHub', href: 'https://github.com/AlfatTaufik' },
  { name: 'Email', href: `mailto:${profile.email}` },
]

export const servicesIntro =
  "I'm a programmer and a programming teacher for kids. I build web and AI-driven applications, and I teach young learners around the world to build their own."

export const services = [
  {
    title: 'Web Development',
    items: [
      'React JS frontends built from Figma designs',
      'WordPress sites with Elementor, SEO and security plugins',
      'Responsive, cross-browser layouts',
      'Web apps backed by Supabase',
    ],
  },
  {
    title: 'UI Design & Prototyping',
    items: [
      'User interfaces and interactive prototypes in Figma',
      'Clear visual hierarchy and user-focused layouts',
      'Pixel-perfect handoff from design to code',
    ],
  },
  {
    title: 'Programming Teacher',
    items: [
      'Private Python lessons, taught fully in English',
      'Students in Japan, the USA and the UK',
      'Figma UI/UX and Godot game development lessons for kids',
      'Project-based, age-appropriate curriculum',
    ],
  },
  {
    title: 'AI & Automation',
    items: [
      'Workflow automation with Python',
      'AI API integration for business processes',
      'Finding where AI fits real business cases',
    ],
  },
]

export const about =
  "Hi, I'm Alfat — a BNSP-certified Junior Programmer and BCA PPTI scholar studying Computer Science at Binus University. I build web and AI-driven applications, and I teach programming to students around the world, fully in English."

export const stats = [
  { value: 3, suffix: '', label: 'Years of Experience' },
  { value: 12, suffix: '', label: 'Completed Projects' },
  { value: 3, suffix: '', label: 'Countries Taught' },
]

export const highlights = [
  '1st Place — IT Software Solutions for Business 2024',
  'BNSP Certified Junior Programmer',
  'BCA PPTI Scholar 2026',
  'Bank Indonesia Scholar (GenBI)',
  'Best Student, Software Development 2025',
]

export const projectsIntro =
  'These selected projects reflect my passion for blending strategy with creativity — solving real problems through thoughtful design and impactful storytelling.'

// `cover` is optional: projects without one get a typographic cover until photos are added.
export const projects = [
  {
    slug: 'business-digital-presence',
    featured: true,
    category: 'Web',
    tag: 'Web Development',
    title: 'Company websites for Bears Cinta Kamu & Coding First',
    summary:
      'Two company websites for two very different audiences: an internship program in Japan and a coding school for kids.',
    description:
      "Designed and developed websites for two distinct businesses: Bears Cinta Kamu, which offers internships with companies in Japan, and Coding First, a coding school for kids. Each site matches its audience — a clear, trustworthy program page for future interns, and a bright, friendly site for parents and children.",
    cover: '/images/project-web.jpg',
    gallery: ['/images/projects/cover-web.jpg', '/images/projects/web-1.png', '/images/projects/web-2.png', '/images/projects/web-3.png', '/images/projects/web-4.png', '/images/projects/web-5.png'],
    meta: { Year: '2025', Industry: 'Business', Client: 'Coding First & Bears Cinta Kamu', Duration: '1 month' },
    stack: ['WordPress', 'Elementor', 'HTML & CSS', 'SEO'],
    sections: [
      {
        title: 'Problem',
        body: 'Both businesses lacked a central place to explain what they offer. Bears Cinta Kamu needed future interns to understand its Japan internship program and apply, while Coding First needed parents to find its courses and get in touch. The challenge was two very different visual identities, both fast, responsive and easy to manage.',
      },
      {
        title: 'Solution',
        body: 'I built a tailored site for each brand with WordPress and Elementor. For Bears, a program page that walks visitors from the benefits of interning in Japan to the Apply button. For Coding First, a bright, kid-friendly layout with its courses and a WhatsApp contact button always in reach. Modern web standards and SEO turned both sites into working lead-generation tools.',
      },
      {
        title: 'Challenge',
        body: 'Switching between two audiences: young adults weighing a career move abroad, and parents choosing a coding class for their children. Each needed its own tone, imagery and calls to action, while both sites stayed responsive on mobile.',
      },
      {
        title: 'Result',
        body: 'Two fully working company websites launched, improving brand credibility and client outreach, with a 40% increase in digital inquiries.',
      },
    ],
  },
  {
    slug: 'python-for-kids',
    featured: true,
    category: 'Teaching',
    tag: 'Teaching',
    title: 'Teaching Python for kids',
    summary: 'Personalised, project-based Python lessons for young learners in the USA, the UK and Japan.',
    description:
      'As an international Python instructor I deliver personalised coding lessons to students across the globe, including the USA, the UK and Japan. Breaking complex concepts into engaging, age-appropriate modules, I help young learners master Python fundamentals, logical reasoning and creative problem-solving.',
    cover: '/images/project-python.png',
    gallery: ['/images/projects/python-1.png', '/images/projects/python-2.png'],
    meta: { Year: '2026', Industry: 'Education', Client: 'Calief Anshori (United Kingdom)', Duration: 'Weekly' },
    stack: ['Python', 'Curriculum design', 'Remote teaching'],
    sections: [
      {
        title: 'Problem',
        body: 'Teaching complex syntax to young learners often leads to disengagement. Traditional coding curriculums are too theoretical, so children struggle to stay motivated or see what they are learning for — especially remotely, across different cultures.',
      },
      {
        title: 'Solution',
        body: "A project-based curriculum that turns abstract logic into tangible results. Instead of memorising, students learn Python by building interactive games and visual stories. Relatable metaphors — like comparing variables to labelled toy boxes — make computer science intuitive and fun.",
      },
      {
        title: 'Challenge',
        body: 'Keeping energy high through 60-minute remote sessions. Online learning quickly leads to screen fatigue, so I keep changing the delivery with quick logic puzzles and interactive breaks to keep students focused and excited about their code.',
      },
      {
        title: 'Result',
        body: 'Teaching internationally sharpened how I explain technical ideas to a diverse audience, bridging professional software development and early education — and building leadership, curriculum design and cross-cultural collaboration skills.',
      },
    ],
  },
  {
    slug: 'ui-ux-kids-curriculum',
    featured: true,
    category: 'Teaching',
    tag: 'UI / UX Teaching',
    title: 'Figma design lessons for kids',
    summary: 'A mentorship programme that introduces young learners to UI/UX design with Figma.',
    description:
      'A mentorship programme that introduces young learners to UI/UX design with Figma. I guided students from layouts and colour theory to interactive prototypes, so they can visualise their ideas and understand how the apps and websites they use every day are built.',
    cover: '/images/project-figma.jpg',
    gallery: ['/images/projects/cover-figma.jpg', '/images/projects/figma-1.jpg', '/images/projects/figma-2.jpg', '/images/projects/figma-3.jpg', '/images/projects/figma-4.jpg'],
    meta: { Year: '2025', Industry: 'Design', Client: 'Calief Anshori', Duration: 'Weekly' },
    stack: ['Figma', 'Auto Layout', 'Components', 'Prototyping'],
    sections: [
      {
        title: 'Problem',
        body: 'Tools like Figma feel professional-only, with a steep learning curve. Most tutorials target adults, leaving young creatives with imagination but no simple, structured way to learn grids, components and prototyping.',
      },
      {
        title: 'Solution',
        body: "I turned professional design workflows into a simple, gamified curriculum. Through projects like 'Design Your Own App' and 'Create a Game UI', students learned Auto Layout, Components and Prototyping — and saw results right away.",
      },
      {
        title: 'Challenge',
        body: "Explaining the why of design, not just the how. Drawing a rectangle is easy; user-centred design and accessibility need creative analogies. I translated terms like constraints and hierarchy into relatable ideas, so students saw design as problem-solving, not decoration.",
      },
      {
        title: 'Result',
        body: 'A series of student-led design portfolios, showing that with the right mentorship kids can master the same tools professional designers use.',
      },
    ],
  },
  {
    slug: 'godot-game-dev',
    featured: true,
    category: 'Game',
    tag: 'Game Development',
    title: 'Game development with Godot',
    summary: 'A 2D pixel-art exploration game with NPC dialogue, state machines and Y-sorted depth.',
    description:
      'A 2D pixel-art exploration game built with the Godot Engine, where players interact with a living environment. I built the core mechanics from scratch: fluid movement, a dynamic NPC dialogue system, and an atmosphere that rewards curiosity and environmental storytelling.',
    cover: '/images/project-godot.png',
    gallery: ['/images/projects/cover-godot.jpg', '/images/projects/godot-1.png', '/images/projects/godot-2.png', '/images/projects/godot-3.png', '/images/projects/godot-4.png', '/images/projects/godot-5.png'],
    meta: { Year: '2026', Industry: 'Tech', Client: 'Somechika (Japan)', Duration: 'Weekly' },
    stack: ['Godot', 'GDScript', 'State machines', 'Pixel art'],
    sections: [
      {
        title: 'Problem',
        body: 'An engaging exploration game needs more than movement: every interaction has to feel meaningful. The goal was to go beyond basic platforming with complex NPC behaviour and state-dependent dialogue, without cluttering the codebase or hurting performance.',
      },
      {
        title: 'Solution',
        body: "Godot's node-based architecture and GDScript power a modular interaction system. A custom signal-based event system lets NPCs react to player choices and progress, a state machine drives character animation, and Y-sorting gives the 2D world realistic depth.",
      },
      {
        title: 'Challenge',
        body: 'Balancing the limits of pixel art with a dynamic world. A dialogue system with branching paths had to keep a consistent look, and collision detection had to stay smooth in pixel-perfect environments.',
      },
      {
        title: 'Result',
        body: 'A playable prototype taken from concept, showing GDScript, game-logic architecture and technical art — built around player agency and narrative depth.',
      },
    ],
  },
  {
    slug: 'nusa-track',
    category: 'Web',
    tag: 'Web App',
    title: 'Nusa Track — money tracker',
    summary: 'A personal finance tracker for wallets, investments and budget envelopes, synced to the cloud.',
    description:
      'Nusa Track keeps every wallet, investment and budget envelope in one place — “satu dompet, semua tercatat”. Data syncs securely through Supabase Cloud with local storage, and a demo mode lets anyone try it without an account.',
    cover: '/images/projects/nusa-track.jpg',
    meta: { Year: '2026', Type: 'Personal project', Role: 'Design & development' },
    stack: ['React', 'Vite', 'Supabase'],
    links: { live: 'https://budget-track-chi.vercel.app', code: 'https://github.com/AlfatTaufik/Budget-track' },
  },
  {
    slug: 'trash2cash',
    category: 'Web',
    tag: 'Web App',
    title: 'Trash2Cash — sorting waste, interactively',
    summary: 'An editorial-style education site where you sort real trash by dragging it into a hanging bin.',
    description:
      'Trash2Cash (EcoPilah) teaches household waste sorting through play. Drag real photographed trash into a hanging two-layer bin, built with Pointer Events and a dependency-free Web Audio sound engine. The site also has a searchable waste directory, a decomposition timeline and a household waste impact calculator.',
    cover: '/images/projects/trash2cash.jpg',
    meta: { Year: '2026', Type: 'Prototype', Role: 'Design & development' },
    stack: ['Vite', 'JavaScript', 'Pointer Events', 'Web Audio API'],
    links: { live: 'https://prototype-t2-c.vercel.app', code: 'https://github.com/AlfatTaufik/trash2cash' },
  },
  {
    slug: 'ugm-nexus-ai',
    category: 'AI',
    tag: 'AI Chatbot',
    title: 'UGM Nexus — campus AI assistant',
    summary: 'Talky, a Gemini-powered chatbot that answers questions about UGM and reads the PDFs and photos you upload.',
    description:
      'UGM Nexus is a campus assistant called Talky, built as my final project at Universitas Gadjah Mada. It answers questions about tuition (UKT), admissions, faculties and campus locations from a curated campus dataset, reads uploaded PDFs such as guides and schedules, and analyses photos of buildings or exam questions with Gemini. Quick-action buttons cover the most common questions, and the app ships as a Docker container.',
    cover: '/images/projects/cover-nexus.jpg',
    meta: { Year: '2025', Type: 'Final project, UGM', Role: 'Design & development' },
    stack: ['Python', 'Chainlit', 'Gemini API', 'pypdf', 'Docker'],
    links: { code: 'https://github.com/AlfatTaufik/ugm-nexus-ai' },
  },
  {
    slug: 'vote-smecone',
    category: 'Web',
    tag: 'Web App',
    title: 'VoteSmecone — online student election',
    summary: 'The frontend of an online voting site for SMK Negeri 1 Purwokerto, built by a team of five.',
    description:
      'VoteSmecone was built for the school\'s P5 project on democracy. Students log in with their student number (NIS), read each candidate\'s vision and mission, vote, and follow the results on a live vote chart, with a four-step guide and Q&A for first-time voters. I built it with four teammates as Jantur Dev.',
    cover: '/images/projects/cover-vote.jpg',
    meta: { Year: '2023', Type: 'School project, team of 5', Role: 'Frontend developer' },
    stack: ['React', 'Vite', 'Tailwind CSS', 'NextUI', 'Chart.js'],
    links: { code: 'https://github.com/AlfatTaufik/FE-VoteSmecone2023' },
  },
  {
    slug: 'relife',
    category: 'Design',
    tag: 'UI/UX Design',
    title: 'ReLife — recycle and healthy life app',
    summary: 'A mobile app design that tracks your health score and nudges you towards exercise, better food and recycling.',
    description:
      'ReLife is a mobile app designed in Figma around two habits: living healthily and recycling. A friendly mascot guides onboarding, the home screen shows a daily health score with exercise and food ideas, a comprehensive health assessment builds your profile, and EcoBank turns recycling into a habit.',
    cover: '/images/projects/cover-relife.jpg',
    meta: { Year: '2025', Type: 'App design', Role: 'UI/UX designer' },
    stack: ['Figma', 'Prototyping', 'Mobile UI'],
    links: { design: 'https://www.figma.com/design/D9xmLQtgkNT8KNuPNqzmeD/ReLife---Recycle-and-Healthy-Life?node-id=0-3' },
  },
  {
    slug: 'opsguide-ai',
    category: 'AI',
    tag: 'AI & Automation',
    title: 'OpsGuide.ai — AI workflow automation',
    summary: 'Business solutions in Python that automate workflows and integrate AI APIs.',
    description:
      'As a software developer intern at OpsGuide.ai, I engineered business solutions in Python focused on workflow automation and AI API integration, and proactively found where AI could be applied to real business case studies.',
    meta: { Year: '2025', Type: 'Internship', Role: 'Software Developer' },
    stack: ['Python', 'AI APIs', 'Automation'],
  },
  {
    slug: 'bakaran-project',
    category: 'Web',
    tag: 'Frontend',
    title: 'Bakaran Project — AntriSmecone admission queue',
    summary: 'UI design for AntriSmecone, the online admission queue of SMK Negeri 1 Purwokerto.',
    description:
      'As a part-time frontend developer at Bakaran Project I designed AntriSmecone in Figma: applicants log in, fill in a registration form and receive a queue ticket with their number and a QR code, with an FAQ for common questions. The design covers desktop, tablet and mobile. Across my Bakaran work I turned designs like this into clean, responsive React code.',
    cover: '/images/projects/cover-bakaran.jpg',
    meta: { Year: '2023 – now', Type: 'Part-time', Role: 'Frontend Developer' },
    stack: ['Figma', 'React JS', 'Responsive design'],
    links: { design: 'https://www.figma.com/design/e3wSmzuQhDeBVbtliAYff6/Bakaran-Antrian?node-id=0-1' },
  },
  {
    slug: 'jclothes',
    category: 'Business',
    tag: 'Business',
    title: 'JClothes — print-on-demand merch',
    summary: 'A print-on-demand business delivering custom merchandise, with its own storefront.',
    description:
      'I founded JClothes, a print-on-demand distribution business that partners with local manufacturers to deliver custom merchandise. I manage vendor relationships, negotiate production contracts and handle bulk orders for organisations — without owning manufacturing assets — and built the storefront frontend myself.',
    meta: { Year: '2024', Type: 'Own business', Role: 'Owner' },
    cover: '/images/projects/cover-jclothes.jpg',
    stack: ['Vendor management', 'Frontend', 'CSS'],
    links: { code: 'https://github.com/AlfatTaufik/JClothes-2.1.0' },
  },
]

export const projectCategories = ['All', 'Web', 'Design', 'Teaching', 'Game', 'AI', 'Business']

// "Teach with me" page. Draft: pricing and testimonials wait for Alfat's input.
export const teach = {
  intro:
    'Live online coding lessons in English for young learners around the world. Students build real games, apps and designs from the first session, not just exercises.',
  facts: [
    { value: '3', label: 'Countries: Japan, USA, UK' },
    { value: '60', label: 'Minutes per live session' },
    { value: '$0', label: 'Free 30-minute trial class' },
    { value: '100%', label: 'Taught in English' },
  ],
  courses: [
    {
      slug: 'python-for-kids',
      title: 'Python for Kids',
      body: 'Learn Python by building games and visual stories. Variables, loops and logic are explained with everyday metaphors, so the ideas stick.',
      image: '/images/project-python.png',
    },
    {
      slug: 'godot-game-dev',
      title: 'Game Development with Godot',
      body: 'Make a 2D game in Godot and learn GDScript along the way: characters, levels, dialogue, health and game logic.',
      image: '/images/project-godot.png',
    },
    {
      slug: 'ui-ux-kids-curriculum',
      title: 'UI/UX Design with Figma',
      body: 'Design real app and website screens in Figma, from layout and colour to a clickable prototype.',
      image: '/images/project-figma.jpg',
    },
  ],
  steps: [
    { title: 'Free trial class', body: "Book a free 30-minute class. Your child builds something small, and you see how I teach." },
    { title: 'Make a plan', body: 'We choose a course, a package and a weekly time that works in your time zone.' },
    { title: 'Learn live', body: '60-minute sessions over Google Meet or Zoom, with screen sharing and live coding.' },
    { title: 'Build something real', body: 'Every course ends with a project your child made themselves.' },
  ],
  pricing: 'Start with a free trial class. Prices are in US dollars per 60-minute live session.',
  plans: [
    { name: 'Free trial', price: '$0', unit: '30 minutes', points: ['Meet me and try a mini project', 'Find the right course and level', 'No commitment'], featured: false },
    { name: 'Single session', price: '$15', unit: 'per session', points: ['Pay as you go', 'Good for trying a new topic'], featured: false },
    { name: '4-session package', price: '$52', unit: '4 sessions · $13 each', points: ['One session a week for a month', 'A small project at the end'], featured: true },
    { name: '8-session package', price: '$96', unit: '8 sessions · $12 each', points: ['Two sessions a week', 'Bigger projects, faster progress'], featured: false },
  ],
  groupNote: 'Siblings or friends learning together (2–3 students): $10 per student per session.',
  faq: [
    { q: 'What happens in the free trial?', a: 'We talk about what your child enjoys, then build a tiny project together, such as a guessing game in Python. Afterwards I suggest a course and level. There is no obligation to continue.' },
    { q: 'What does my child need?', a: 'A laptop or desktop computer (not a tablet), a stable internet connection, a webcam and a headset or microphone. I help install everything in the first session.' },
    { q: 'When are classes held?', a: 'Every day of the week, at a time agreed with you. I am in Indonesia (UTC+7) and teach families in Asia, Europe and beyond, so we find a slot that fits your time zone.' },
    { q: 'Which language do you teach in?', a: 'Lessons are in English. Parents are welcome to talk with me in English or Bahasa Indonesia.' },
    { q: 'Can siblings or friends learn together?', a: 'Yes. Small groups of 2–3 students cost $10 per student per session.' },
    { q: 'How do I pay?', a: 'By PayPal, Wise or bank transfer, in US dollars.' },
  ],
  testimonials: [],
  whatsapp: 'https://wa.me/6285942277317?text=' + encodeURIComponent("Hi Alfat, I'd like to book a free trial coding class for my child."),
}

export const faqIntro =
  "Maybe you're wondering about one of these. Here are some answers — but feel free to ask me directly."

export const faqs = [
  {
    q: 'What services do you offer?',
    a: "I work as a freelancer while I study, so I take on project-based work rather than full-time roles. My services are web development, UI design in Figma, AI and automation in Python, and teaching programming to kids.",
  },
  {
    q: 'How long does a project usually take?',
    a: "It depends on what you need. A landing page can take a week or two; a full website or web app takes longer. Tell me about your project and I'll give you an honest timeline.",
  },
  {
    q: 'What do I need to provide before starting a project?',
    a: "Typically, information about your business, your goals, and any branding assets you already have, like a logo or colour palette. For web projects, text and images too. Don't worry — I'll guide you through this step.",
  },
  {
    q: 'Do you offer revisions?',
    a: 'Yes. Revisions are part of my process to make sure the result meets your expectations. I usually include 2–3 rounds depending on the project, and more can be arranged if needed.',
  },
  {
    q: 'How do I get started?',
    a: "Email me or reach out on LinkedIn. We'll schedule a call to discuss your project, goals and timeline, and I'll send a proposal to get things moving.",
  },
]

export const resume = {
  education: [
    {
      period: '2026 – 2028',
      title: 'Binus University & BCA Learning Institute',
      subtitle: 'Computer Science (undergraduate) · PPTI scholarship, dual programme',
      points: [
        'Full scholarship from PT Bank Central Asia Tbk (BCA), integrated with a Computer Science degree at Binus University.',
        'Core computer science, enterprise application architecture, algorithms and secure software development.',
        'Professional and character-building programme focused on corporate readiness in financial technology.',
      ],
    },
    {
      period: '2025 – 2026',
      title: 'Universitas Gadjah Mada',
      subtitle: 'Instrumentation Control Engineering · transferred to BCA PPTI / Binus',
      points: [
        'Coursework in Basic Programming (C++), Digital Logic Design, Electrical Circuits and Engineering Physics.',
        'C++ for control systems and hardware interfacing; simulation in Proteus and PCB design in KiCad.',
      ],
    },
    {
      period: '2022 – 2025',
      title: 'SMK Negeri 1 Purwokerto',
      subtitle: 'Software Development',
      points: [
        'Foundations in OOP, MySQL databases and web development (HTML, CSS, PHP).',
        'Excellent scores in the National Competency Assessment (UKK); mentored peers in coding clubs.',
      ],
    },
  ],
  experience: [
    {
      period: '2026 – now',
      title: 'AI Developer (Freelance)',
      org: 'Alignerr · Remote',
      points: ['Freelance AI development work for Alignerr, fully remote.'],
    },
    {
      period: '2025',
      title: 'Software Developer (Intern)',
      org: 'OpsGuide.ai',
      points: ['Python solutions for workflow automation and AI API integration.', 'Applied AI to real business case studies.'],
    },
    {
      period: '2024 – 2025',
      title: 'Software Programmer (Contract)',
      org: 'Coding First · joined as a web developer intern',
      points: [
        'Built and launched responsive, cross-browser WordPress websites.',
        'Customised themes with Elementor and hand-tuned HTML/CSS; configured plugins for security and SEO.',
      ],
    },
    {
      period: '2023 – now',
      title: 'Frontend Developer (Part-time)',
      org: 'Bakaran Project',
      points: ['Designed UI and prototypes in Figma.', 'Built pixel-perfect, responsive React JS frontends from those designs.'],
    },
    {
      period: '2024 – now',
      title: 'Programming Teacher',
      org: 'Freelance · international students',
      points: [
        'Private coding lessons for students in Japan, the USA and the UK, 100% in English.',
        'Schedules managed across time zones, with long-term client relationships.',
      ],
    },
    {
      period: '2024 – now',
      title: 'Owner',
      org: 'JClothes (Digital Printing)',
      points: ['Print-on-demand merch with local manufacturing partners.', 'Vendor negotiation and bulk orders for organisations.'],
    },
  ],
  organisations: [
    {
      period: '2024',
      title: 'Generasi Baru Indonesia (GenBI)',
      org: 'Bank Indonesia Scholarship awardee · top 5% of applicants',
      points: ['Frontliner promoting digital payments (QRIS) and financial literacy to the public and MSMEs.', 'Organised community and economic-empowerment projects.'],
    },
    {
      period: '2023 – 2024',
      title: 'Head of Event',
      org: 'Smecone Visual Art Exhibition',
      points: ['Led a team of 721 members, 239 artworks and 2 schools.', 'Ran the full lifecycle, from concept and budget to execution and evaluation.'],
    },
  ],
  skills: [
    { group: 'Languages', items: ['C++ / C#', '.NET', 'Python', 'SQL / MySQL', 'HTML & CSS'] },
    { group: 'Web', items: ['React JS', 'WordPress', 'Elementor', 'SEO & security plugins'] },
    { group: 'Design', items: ['Figma', 'Prototyping', 'Visual hierarchy'] },
    { group: 'Engineering', items: ['Proteus', 'KiCad', 'Microcontrollers'] },
    { group: 'Concepts', items: ['OOP', 'AI integration', 'Digital logic', 'Blockchain'] },
  ],
  // Both lists are ordered by prestige, not by date.
  achievements: [
    { year: '2026', title: 'BCA PPTI Scholarship awardee' },
    { year: '2024', title: 'Bank Indonesia Scholarship awardee (GenBI)' },
    { year: '2025–26', title: 'Beasiswa Unggulan awardee (Kemendikdasmen)' },
    { year: '2024', title: '1st Place — IT Software Solutions for Business, LKS SMK Banyumas' },
    { year: '2024', title: 'Contestant, LKS SMK Central Java provincial round — IT Software Solutions for Business' },
    { year: '2025–26', title: 'KIP Kuliah (KIP-K) Scholarship awardee, Universitas Gadjah Mada' },
    { year: '2025', title: 'Best Student, Software Development major (SMK Negeri 1 Purwokerto)' },
  ],
  certifications: [
    'BNSP — Junior Programmer',
    'BNSP — Microsoft Office Advanced (PowerPoint, Excel, Word)',
    'UKBI — Indonesian Language Proficiency Test (Badan Bahasa)',
    'Crocodic — Web Developer Advanced',
    'Dicoding — Git and GitHub',
    'freeCodeCamp — Foundational C# with Microsoft',
  ],
}
