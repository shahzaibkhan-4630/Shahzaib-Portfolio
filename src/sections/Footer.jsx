import {useEffect, useState} from "react";
import {GrGithub} from "react-icons/gr";
import {FaLinkedin} from "react-icons/fa6";

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <div className="mb-3 md:mb-0">
                <p>
                    {currentTime.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        hour12: true,
                    })}
                </p>
            </div>
            <div className="mb-5 md:mb-0">
                © {new Date().getFullYear()} Shahzaib Khan. All rights reserved.
            </div>
            <div className="socials">
                <div className="icon">
                    <a href="www.linkedin.com/in/shahzaib-khan-783395272" target="_blank">
                        <FaLinkedin className="text-2xl"/>
                    </a>
                </div>
                <div className="icon">
                    <a href="https://github.com/shahzaibkhan-4630" target="_blank">
                        <GrGithub className="text-2xl"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
