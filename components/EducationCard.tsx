import { motion } from "framer-motion";
import React from "react";

type Props = {};

const EducationCard = (props: Props) => {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 mt-10 flex-shrink-0 w-[375px] md:w-[500px] xl:w-[700px]  bg-[#292929] p-5 md:p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden pb-4 snap-center'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full md:w-44 md:h-44 xl:w[200px] xl:h-[200px] object-center'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-afgPjnExlHSXMqga_cb1PBhzoGG2bT4gpA&usqp=CAU'
                alt='bhammar bharat'
            />
            <div className='px-0 md:px-10 mx-auto '>
                <h4 className='text-2xl md:text-3xl font-light'>NIT Surat</h4>
                <p className='text-xl md:text-2xl font-bold mt-1'>
                    Computer Science and Engineering
                </p>
                <div className='flex space-x-2 my-2'></div>
                <p className='uppercase  text-gray-300'>
                    started word...- Ended...
                </p>
            </div>
            <ul className='list-disc space-y-4 ml-5 text-lg flex flex-col items-start'>
                <li>Lorem ipsum dolor sit amet consectetur,elit. Sed, ex!</li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
            </ul>
        </article>
    );
};
export default EducationCard;
