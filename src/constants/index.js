const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
];

const words = [
  { id: 1, text: "Ideas", imgPath: "/ideas.svg" },
  { id: 2, text: "Concepts", imgPath: "/concepts.svg" },
  { id: 3, text: "Designs", imgPath: "/designs.svg" },
  { id: 4, text: "Code", imgPath: "/code.svg" },
  { id: 5, text: "Ideas", imgPath: "/ideas.svg" },
  { id: 6, text: "Concepts", imgPath: "/concepts.svg" },
  { id: 7, text: "Designs", imgPath: "/designs.svg" },
  { id: 8, text: "Code", imgPath: "/code.svg" },
];

const abilities = [
  //   {
  //     imgPath: "/seo.png",
  //     title: "Quality Focus",
  //     desc: "Committed to delivering high-quality results with meticulous attention to every detail.",
  //   },
  //   {
  //     imgPath: "/chat.png",
  //     title: "Reliable Communication",
  //     desc: "Clear and consistent communication to keep you informed every step of the way.",
  //   },
  //   {
  //     imgPath: "/time.png",
  //     title: "On-Time Delivery",
  //     desc: "Delivering projects on schedule without compromising on quality or detail.",
  //   },

  {
    imgPath: "/seo.png",
    title: "Clean Code",
    desc: "Writing readable, maintainable, and scalable code is a habit not an afterthought. Every component is structured for reusability and long-term maintainability.",
  },
  {
    imgPath: "/chat.png",
    title: "Pixel-Perfect UI",
    desc: "I build exactly what's in the design no shortcuts. From Figma to production, every spacing, color, and interaction is intentional.",
  },
  {
    imgPath: "/time.png",
    title: "Fast Learner",
    desc: "I adapt quickly to new technologies and frameworks, keeping your projects up-to-date with the latest best practices.",
  },
];

const techStackImages = [
  {
    id: 1,
    imgPath: "/html.png",
  },
  {
    id: 2,
    imgPath: "/css.png",
  },
  {
    id: 3,
    imgPath: "/javascript.png",
  },
  {
    id: 4,
    imgPath: "/react.png",
  },
  {
    id: 5,
    imgPath: "/next.png",
  },
  //   {
  //     id: 6,
  //     imgPath: "/express2.png",
  //   },
  //   {
  //     id: 7,
  //     imgPath: "/nodejs.png",
  //   },
  //   {
  //     id: 8,
  //     imgPath: "/mongo-db.png",
  //   },
  {
    id: 9,
    imgPath: "/tailwind.png",
  },
  {
    id: 10,
    imgPath: "/git.png",
  },
  {
    id: 11,
    imgPath: "/wordpress.png",
  },
];

const expCards = [
  //   {
  //     logoPath:"/stacone.jpeg",
  //     title:"MERN Stack Developer (Remote)",
  //     date:"December 2024 - January 2026",
  //     responsibilities: [
  //       "Engineered responsive and high-performing web applications using React.js, Next.js, Node.js, Express.js, and Tailwind CSS. Integrated RESTful APIs to enable dynamic data exchange and maintain seamless front-end–back-end connectivity.",
  //       "Enhanced application performance and load speed by up to 30% through optimized rendering and code refactoring.",
  //       "Built and maintained a scalable component library, standardizing UI elements and improving development efficiency across projects.",
  //       "Collaborated closely with designers and backend engineers to deliver user-focused, maintainable, and production-ready solutions aligned with business goals."
  //     ]
  //   }

  {
    logoPath:
      "https://res.cloudinary.com/dn7cdtibf/image/upload/v1777360818/Invexo_Pro_2-removebg-preview_yrxcdv.png",
    title: "Front-End Developer | Invexo Pro (Self-Founded SaaS)",
    date: "February 2026 – Present",
    responsibilities: [
      "Founded and led the entire frontend development of Invexo Pro (invexopro.com) — a live SaaS POS and inventory management platform for retailers and manufacturers. Built 17 pages across sales, stock purchases, and reporting modules using Next.js, React.js, and shadcn/ui. Architected multi-role dashboards with role-based access control and integrated RESTful APIs across all pages via React Hook Form, Zod, and Axios. Built complex UI components including FBR IRIS invoicing integration and print-ready invoice generation.",
    ],
  },
  {
    logoPath:
      "https://res.cloudinary.com/dn7cdtibf/image/upload/v1755403664/HBM-Logo_seplxo.webp",
    title: "Front-End Developer | Hammer Bid Mart",
    date: "August 2025 – September 2025",
    responsibilities: [
      "Led the entire frontend of HammerBidMart (hammerbidmart.com) — a multi-vendor e-commerce and auction platform — as sole frontend developer, collaborating with a backend developer to deliver a fully functional production application. Built role-based dashboards for sellers and admins with real-time auction features including live countdown timers and dynamic bid updates using WebSockets. Delivered a complete B2B system with vendor management, product listings, and auction modules ensuring responsive design across all devices.",
    ],
  },
  {
    logoPath: "/stacone.jpeg",
    title: "Front-End Developer | STAC ONE",
    date: "December 2024 - January 2026",
    responsibilities: [
      "Built Design Arena (designarena.net), an 11-page responsive creative agency website independently from scratch using React.js and Tailwind CSS, converting Figma designs into a pixel-perfect interface within a one-month deadline.",
      "Developed Purpose Beyond Play (purposebeyondplay.com), a custom athlete support platform building all pages in WordPress and Elementor and integrating a PayPal payment gateway for donations and transactions.",
      "Delivered both projects as a sole developer managing the full frontend lifecycle through multiple revision cycles to final deployment.",
    ],
  },
];

export { navLinks, words, abilities, techStackImages, expCards };
