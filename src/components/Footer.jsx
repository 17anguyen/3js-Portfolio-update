import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { footerLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { pdf, resume } from "../assets";

const Footer = () => {
    const [active, setActive] = useState("");

    return (
        <div
            className='w-full flex bottom-0'
        >
            <div className='w-full flex  justify-evenly'>
                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {footerLinks.map((footer) => (
                        <li
                            key={footer.name}
                            className={`${active === footer.name ? "text-white" : "text-[#69005A]"
                                } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(footer.title)}
                        >
                            <a href={`#${footer.URL}`}>
                                <img
                                    src={footer.icon}
                                    alt={footer.name}
                                    className="w-auto h-[40px]" />
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href={pdf} download>
                            <img
                                src={resume}
                                alt="resume"
                                className="w-auto h-[40px]" />
                        </a>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;