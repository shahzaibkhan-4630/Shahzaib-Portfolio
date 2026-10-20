import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const project4Ref = useRef(null);
  const project5Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
      project5Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );
  }, []);

  return (
    <section id="work" ref={sectionRef}>
      <div className="md:mt-40 mt-20">
        <TitleHeader
          title="Featured Projects"
          sub="A selection of real projects I've built and shipped"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 app-showcase items-stretch">
        {/* Project 1 - Invexo Pro */}
        <div
          className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
          ref={project1Ref}
        >
          <div className="relative">
            <a
              href="https://www.invexopro.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1777359621/Invexo_xzlwtw.png"
                alt="Invexo Pro"
                className="w-full h-auto rounded-lg"
              />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Invexo Pro — SaaS POS, Inventory & FBR Digital Invoicing
            </h2>
            <p className="text-gray-400 text-justify mt-2">
              Built and launched a multi-tenant SaaS platform for Pakistani
              retailers and manufacturers, bringing POS, inventory, purchasing,
              reporting, and FBR digital invoicing into one solution. Developed
              the frontend and contributed across the complete product
              lifecycle, from application architecture and integrations to
              deployment and ongoing improvements. Now used by 7 businesses.
            </p>
          </div>
        </div>

        {/* Project 2 - Hammer Bid Mart */}
        <div
          className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
          ref={project2Ref}
        >
          <div className="relative">
            <a
              href="https://www.hammerbidmart.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1777359621/hammer_gtc5gn.png"
                alt="Hammer Bid Mart"
                className="w-full h-auto rounded-lg"
              />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Hammer Bid Mart — Multi-Vendor E-Commerce & Auction Platform
            </h2>
            <p className="text-gray-400 mt-2 text-justify">
              Developed a multi-model commerce platform combining B2B
              e-commerce, online auctions, real-time bidding, vendor management,
              bulk ordering, and dropshipping workflows. Built interactive
              frontend experiences and integrated them with backend APIs to
              support marketplace operations, product listings, and role-based
              seller and admin dashboards.
            </p>
          </div>
        </div>

        {/* Project 3 - Design Arena */}
        <div
          className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
          ref={project3Ref}
        >
          <div className="relative">
            <a
              href="https://www.designarena.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1777359621/Design-Arena_qtmfi0.png"
                alt="Design Arena"
                className="w-full h-auto rounded-lg"
              />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Design Arena — Creative Agency Website
            </h2>
            <p className="text-gray-400 text-justify mt-2">
              Designed and developed an 11-page responsive agency website from
              Figma designs, translating visual concepts into a polished,
              production-ready experience. Focused on pixel-accurate layouts,
              reusable UI components, responsive behavior, and consistent
              presentation across desktop, tablet, and mobile devices.
            </p>
          </div>
        </div>

        {/* Project 5 - Autism Therapy */}
        <div
          className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
          ref={project5Ref}
        >
          <div className="relative">
            <a
              href="https://www.ata-abaservices.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1792496448/ATA_cshkjo.png"
                alt="ATA ABA Services"
                className="w-full h-auto rounded-lg object-contain"
              />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              ATA ABA Services — Autism Therapy & Academics Website
            </h2>
            <p className="text-gray-400 text-justify mt-2">
              Developed a modern, responsive website for Autism Therapy &
              Academics (ABA Services), presenting therapy services and academic
              support through a clear, accessible user experience. Built the
              interface to help families explore available services, find
              relevant information, and get in touch, with responsive layouts
              and a professional visual design.
            </p>
          </div>
        </div>

        {/* Project 4 - Purpose Beyond Play */}
        <div
          className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
          ref={project4Ref}
        >
          <div className="relative">
            <a
              href="https://www.purposebeyondplay.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1777359621/Purpose_sqlgmp.png"
                alt="Purpose Beyond Play"
                className="w-full h-auto rounded-lg object-contain"
              />
            </a>
          </div>
          <div className="mt-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Purpose Beyond Play — Athlete Support Platform
            </h2>
            <p className="text-gray-400 text-justify mt-2">
              Built and delivered a custom athlete support website using
              WordPress and Elementor, creating responsive pages to present the
              platform's mission and services. Integrated PayPal payments to
              support donations and event transactions, with attention to
              usability, visual consistency, and deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
