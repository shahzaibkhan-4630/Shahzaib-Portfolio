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

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
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
                }
            );
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section id="work" ref={sectionRef}>

            <div className='md:mt-40 mt-20'>
                <TitleHeader title='Featured Projects' sub='Bringing Ideas to Life Through Code' />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 app-showcase items-stretch">
                <div
                    className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
                    ref={project1Ref}
                >
                    <div className="relative">
                        <a
                            href="https://www.designarena.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/project-1.jpg"
                                alt="Design Arena"
                                className="rounded-lg"
                            />
                        </a>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Design Arena - Creative Agency Portfolio
                        </h2>
                        <p className="text-gray-400 mt-2 text-justify">
                            Developed a modern, responsive digital agency website using React.js and Tailwind CSS, translating UI/UX mockups
                            into a high-performance, accessible front end with scalable component-based architecture.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
                    ref={project2Ref}
                >
                    <div className="relative">
                        <a
                            href="https://purposebeyondplay.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/purpose.png"
                                alt="Purpose Beyond Play"
                                className="rounded-lg"
                            />
                        </a>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Purpose Beyond Play – Athlete Support Platform
                        </h2>
                        <p className="text-gray-400 text-justify mt-2">
                            A responsive, purpose-driven website for athlete transition, built with WordPress and Elementor using custom
                            themes, plugins, and secure PayPal integration for seamless donations. Ensured performance, accessibility, and
                            cross-device compatibility.
                        </p>
                    </div>
                </div>

                <div
                    className="bg-[#0E0E10] p-4 rounded-lg shadow-lg"
                    ref={project3Ref}
                >
                    <div className="relative">
                        <a
                            href="https://raftaan-landingpage.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/project-3.jpg"
                                alt="Raftaan Tech"
                                className=" rounded-lg"
                            />
                        </a>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            HammerBidMart – Multi-Vendor Auction Platform
                        </h2>
                        <p className="text-gray-400 text-justify mt-2">
                            Built responsive, visually polished landing pages for a creative agency using HTML, CSS, JavaScript, and Bootstrap,
                            with pixel-perfect layouts and smooth cross-device performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
