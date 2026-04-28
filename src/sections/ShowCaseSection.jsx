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

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
      project4Ref.current,
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
          sub="Bringing Ideas to Life Through Code"
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
              Invexo Pro — SaaS POS & Inventory Management
            </h2>
            <p className="text-gray-400 text-justify mt-2">
              A live SaaS POS and inventory management platform for retailers
              and manufacturers in Pakistan. Built the entire frontend including
              multi-role dashboards, sales modules, FBR IRIS invoicing
              integration, and print-ready invoice generation from scratch.
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
              HammerBidMart — Multi-Vendor Auction Platform
            </h2>
            <p className="text-gray-400 mt-2 text-justify">
              A multi-vendor e-commerce and auction platform with real-time
              bidding, live countdown timers, and role-based dashboards for
              sellers and admins. Built the entire frontend as sole developer
              collaborating with a backend developer.
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
              An 11-page fully responsive creative agency website built
              independently from scratch, converting Figma designs into a
              pixel-perfect production-ready interface.
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
              A custom athlete support platform with fully designed pages,
              PayPal payment gateway integration for donations and event
              transactions, built and delivered as a sole developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
