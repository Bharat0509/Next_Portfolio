"use client";

import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className='flex flex-col relative overflow-hidden text-left md:flex-row max-w-full  justify-evenly mx-auto items-center h-screen px-6 md:px-10 py-5'
        >
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>
                Hover over a skill for current proficiency
            </h3>

            <div className='mt-24 md:mt-36 grid grid-cols-4 gap-5'>
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    );
};
export default Skills;
