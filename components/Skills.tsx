"use client";
import { motion } from "framer-motion";
import { SkillSet } from "@/typings";
import Skill from "./Skill";

type Props = {
    skillsSet: SkillSet[] | null;
};

const Skills = ({ skillsSet }: Props) => {
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
            <div className='mt-24 my-28 md:mt-32 w-full flex space-x-5 overflow-x-scroll md:py-10 md:pt-20 lg:pt-32 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80'>
                {skillsSet &&
                    skillsSet.map((skillSet) => (
                        <div
                            className='flex flex-col rounded-lg items-center space-y-7 mt-10 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px]  bg-[#363636] p-5 md:p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden pb-4 snap-center '
                            key={skillSet._id}
                        >
                            <h3 className='font-bold text-[#f7AB0A]'>
                                {skillSet.title}
                            </h3>
                            <div className='flex justify-between space-x-4'>
                                {skillSet &&
                                    skillSet?.skills.map((skill) => (
                                        <Skill key={skill._id} skill={skill} />
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </motion.div>
    );
};
export default Skills;
