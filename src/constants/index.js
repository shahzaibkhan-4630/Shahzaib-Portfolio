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
  { id: 1, text: "Scalable", imgPath: "/ideas.svg" },
  { id: 2, text: "Fast", imgPath: "/concepts.svg" },
  { id: 3, text: "Modern", imgPath: "/designs.svg" },
  { id: 4, text: "Pixel-Perfect", imgPath: "/code.svg" },
  { id: 5, text: "Scalable", imgPath: "/ideas.svg" },
  { id: 6, text: "Fast", imgPath: "/concepts.svg" },
  { id: 7, text: "Modern", imgPath: "/designs.svg" },
  { id: 8, text: "Pixel-Perfect", imgPath: "/code.svg" },
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
  {
    id: 6,
    imgPath: "/express2.png",
  },
  {
    id: 7,
    imgPath: "/nodejs.png",
  },
  {
    id: 8,
    imgPath: "/mongo-db.png",
  },
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
    title: "Founder & Full-Stack Developer | Invexo Pro",
    date: "March 2026 – Present",
    responsibilities: [
      "Built and launched Invexo Pro, a multi-tenant SaaS platform designed for Pakistani retailers and manufacturers, combining POS, inventory management, purchasing, reporting, invoicing, and FBR digital invoicing.",
      "Lead end-to-end product development, from architecture and frontend/backend engineering to deployment and client onboarding.",
      "Build application interfaces with React.js and Next.js, supported by Node.js, Express.js, MongoDB, and REST APIs.",
      "Implement tenant-isolated database architecture, authentication, role-based access control, and secure route protection.",
      "Develop FBR digital invoicing workflows, including token handling, QR generation, scenario testing, and credit notes.",
      "Manage production deployment and infrastructure while improving the platform based on real business requirements.",
    ],
  },
  {
    logoPath: "/stacone.jpeg",
    title: "Frontend Developer | STAC ONE",
    date: "December 2024 – January 2026 · Indonesia · Remote",
    responsibilities: [
      "Delivered responsive web experiences for digital agency projects, translating design requirements into polished, functional interfaces.",
      "Developed frontend interfaces using React.js and Next.js.",
      "Built reusable UI components and responsive layouts for different screen sizes.",
      "Worked with WordPress to implement and refine website interfaces.",
      "Focused on visual consistency, usability, performance, and maintainable frontend code.",
      "Delivered web experiences aligned with project requirements and design specifications.",
    ],
  },
  {
    logoPath:
      "https://res.cloudinary.com/dn7cdtibf/image/upload/v1755403664/HBM-Logo_seplxo.webp",
    title: "Full-Stack Developer | (Hammer Bid Mart)",
    date: "August 2025 - October 2025 · Karachi Division, Pakistan · Hybrid",
    responsibilities: [
      "Developed a multi-model commerce platform combining B2B e-commerce, online auctions, real-time bidding, vendor management, bulk ordering, and dropshipping workflows.",
      "Built frontend experiences and interactive application interfaces using Next.js, React.js, Tailwind CSS, and ShadCN.",
      "Developed backend services and REST APIs using Node.js and Express.js.",
      "Designed MongoDB data models and application workflows for marketplace and vendor operations.",
      "Worked across frontend and backend functionality to deliver an integrated commerce experience.",
    ],
  },
];

export { navLinks, words, abilities, techStackImages, expCards };
