import TitleHeader from "../components/TitleHeader";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center items-center section-padding bg-black text-white"
    >
      <div className="w-full px-5 md-px-10">
        <TitleHeader title="About Me" sub="A Brief Introduction" />
        <div className="mt-10 bg-neutral-900 rounded-2xl p-6 md:p-10 shadow-lg transition-transform">
          <p className="text-lg leading-8 text-gray-300 text-justify space-y-6">
            I'm a Full-Stack Developer and SaaS Product Builder who turns ideas
            and business requirements into scalable, production-ready web
            applications. My work spans the full development lifecycle—from
            crafting responsive user interfaces with React.js and Next.js to
            building backend services, REST APIs, database architectures,
            authentication systems, and business-focused software using Node.js,
            Express.js, and MongoDB. I founded and built Invexo Pro, a live SaaS
            platform for Pakistani retailers and manufacturers that brings POS,
            inventory management, invoicing, reporting, and FBR digital
            invoicing into one solution. Today, it's used by 7 businesses,
            giving me hands-on experience building, deploying, and continuously
            improving software for real-world operations. I've also worked on
            complex e-commerce and auction workflows through Hammer Bid Mart and
            delivered responsive web experiences during my time at STAC ONE. I
            believe great software goes beyond clean code and polished
            interfaces. It solves real problems, creates a better user
            experience, and gives businesses a reliable foundation to grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
