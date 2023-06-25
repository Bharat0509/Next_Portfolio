/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const projects = [1, 2, 3, 4, 5];

function Projects({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative overflow-hidden text-left md:flex-row max-w-full  justify-evenly mx-auto items-center h-screen px-5 md:px-10 py-5'
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 '>
                {projects.map((project, ind) => (
                    <div
                        key={ind}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Android_Larger_Screens_2880x1200.jpg'
                            height={"600"}
                            width={"600"}
                            alt='ShopSwift'
                        />
                        <div className='space-y-10 px-0 md:px-1 max-w-6xl'>
                            <h4 className='text-2xl font-semibold text-center'>
                                <span
                                    className='underline
                                decoration-[#F7AB0A]/50'
                                >
                                    Project {ind + 1} of {projects.length} :
                                </span>{" "}
                                ShopSwift
                            </h4>
                            <p className='text-sm md:text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Alias molestias magni ratione
                                nemo beatae porro repudiandae dicta magnam
                                voluptatum officiis suscipit ab, quis sunt
                                doloribus, modi voluptatem. Et cupiditate
                                pariatur voluptatem neque molestiae architecto,
                                ut autem animi enim unde tempora sapiente
                                numquam placeat nulla obcaecati! Fugiat dolor
                                blanditiis mollitia enim!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div
                className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
            -skew-y-12
            '
            />
        </motion.div>
    );
}

export default Projects;
