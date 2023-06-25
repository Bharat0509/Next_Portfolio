import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className='h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll z-0 scroll-smooth overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7AB0A]/80 '>
            <Header />
            <section id='hero' className='snap-start'>
                <Hero />
            </section>

            <section id='about' className='snap-center'>
                <About />
            </section>

            <section id='education' className='snap-center'>
                <Education />
            </section>

            <section id='skills' className='snap-start'>
                <Skills />
            </section>

            <section id='projects' className='snap-start'>
                <Projects />
            </section>
            <section id='contact' className='snap-start'>
                <ContactMe />
            </section>
            <Link href={"#hero"}>
                <footer className='sticky bottom-5 left-[50%] flex items-center justify-center mx-auto w-full cursor-pointer'>
                    <div
                        title='Go To Top'
                        className=' flex items-center justify-center h-6 w-6 bg-orange-500 rounded-full grayscale hover:grayscale-0'
                    />
                </footer>
            </Link>
        </main>
    );
}
