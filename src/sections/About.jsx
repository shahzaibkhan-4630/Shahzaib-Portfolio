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
                        I’m a MERN Stack Developer with a strong focus on building scalable, performance-driven web applications. Currently in my final year of Software Engineering at the University of Karachi, I combine academic insight with hands-on experience to deliver clean, effective digital solutions. I’m currently working as a Front-End Developer at STAC ONE, a remote-based startup, where I contribute to building responsive user interfaces and enhancing UI performance. My core strengths include React.js, Node.js, Express, and MongoDB. I’m passionate about writing efficient, maintainable code and continuously expanding my skill set to create impactful, real-world applications.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
