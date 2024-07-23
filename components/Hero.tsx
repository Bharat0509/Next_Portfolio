"use client";
import { PageInfo } from "@/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Row from "./core/Row";
type Props = {
    pageInfo: PageInfo | null;
};

import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const socialLinks: ISocialLinkItem[] = [
    {
        name: Strings.github,
        url: Strings.githubLink,
        icon: faGithub,
        text: Strings.githubUsername,
    },
    {
        name: Strings.linkedIn,
        url: Strings.linkedInLink,
        icon: faLinkedin,
        text: Strings.linkedInUsername,
    },
    {
        name: Strings.email,
        url: Strings.primaryEmailLink,
        icon: faEnvelope,
        text: Strings.primaryEmail,
    },
    {
        name: Strings.leetCode,
        url: Strings.leetCodeLink,
        icon: faCodeBranch,
        text: Strings.leetCodeUsername,
    },
];
const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [`Bharat Bhammar`],
        loop: true,
        delaySpeed: 5000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <div className='z-20'>
                <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mx-auto mb-4'>
                    <span className='mr-3 text-center pt-20 md:mt-0'>
                        I am <span className='text-primary'>{text}</span>
                    </span>
                    <Cursor cursorColor='#00b171' />
                </h1>
                <BackgroundCircles />
                <h2 className='text-sm uppercase my-4 text-white tracking-[10px] font-extralight'>
                    {pageInfo?.role ?? "Full Stack Developer"}
                </h2>
            </div>

            <div className='z-20 flex flex-col md:flex-row gap-4'>
                <button className='border-1 px-8 w-[12rem] md:w-[15rem] py-4 rounded-full border-primary bg-primary hover:bg-primary_dark transition-all'>
                    {"Let's Talk"}
                </button>
                <button className='border-1 outline px-8 w-[12rem] text-sm md:text-base md:w-[15rem] py-4 border-primary bg-transparent rounded-full hover:bg-primary_dark transition-all text-primary'>
                    {"Download Resume"}
                </button>
            </div>

            <div className='z-20 flex gap-4 pt-10 md:pt-20  flex-col'>
                <h3 className='text-gray-500'>Important Links</h3>
                <Row className='mt-2 gap-4'>
                    {socialLinks.slice(0, 5).map((link, index) => {
                        return (
                            <Link
                                key={`social-link-${index}`}
                                href={link.url}
                                target='_blank'
                                className='h-10 w-10 border flex items-center justify-center rounded-full p-2 border-white/25'
                                aria-label={`${link.name}`}
                            >
                                <span className='text-2xl text-primary'>
                                    <FontAwesomeIcon icon={link.icon} />
                                </span>
                            </Link>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
};

export default Hero;
