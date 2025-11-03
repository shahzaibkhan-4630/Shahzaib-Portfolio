import TitleHeader from '../components/TitleHeader'

const About = () => {
    return (
        <div id='about' className='flex justify-center items-center section-padding bg-black text-white'>
            <div className='w-full px-5 md-px-10'>
                <TitleHeader
                    title="About Me"
                    sub="A Brief Introduction"
                />
                <div className='mt-10 bg-neutral-900 rounded-2xl p-6 md:p-10 shadow-lg transition-transform'>
                    <p className='text-lg leading-8 text-gray-300 text-justify space-y-6'>
                        Results-driven Web Developer with over 2 years of experience designing and developing responsive, scalable, and user-centric web applications. Proficient in JavaScript (ES6+), React.js, Next.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS, and RESTful APIs. Skilled in collaborating with cross-functional teams to deliver high-quality, maintainable, and performance-optimized solutions. Dedicated to writing clean code, following best practices, and continuously improving user experience and development efficiency.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
