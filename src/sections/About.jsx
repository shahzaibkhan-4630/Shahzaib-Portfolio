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
                I'm a Front-End Developer with 1+ year
                of professional experience building responsive, scalable web
                applications using React.js, Next.js, and Tailwind CSS. I founded
                Invexo Pro, a live SaaS POS and inventory management platform for
                retailers and manufacturers in Pakistan, where I owned the entire
                frontend from day one. I've also delivered freelance client work
                including HammerBidMart, a multi-vendor auction platform with
                real-time bidding, and built production websites from Figma designs
                during my time at STAC ONE. I care about clean code, pixel-perfect
                interfaces, and building things that actually work not just look
                good in a portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
