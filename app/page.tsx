import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ScrollToTop from "@/components/common/ScrollToTop";
import Education from "@/components/home/Section3";
import Projects from "@/components/home/Section5";
import { fetchEducation } from "@/utils/fetchEducations";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkillSet } from "@/utils/fetchSkillSet";
import { fetchSocials } from "@/utils/fetchSocials";
import Link from "next/link";
export const revalidate = 0;
export default async function Home() {
    const pageInfo = await fetchPageInfo();
    const socials = await fetchSocials();
    const education = await fetchEducation();
    const skillsSet = await fetchSkillSet();
    const projects = await fetchProjects();

    return (
        <main className="h-full w-full  bg-[url('/LooperGroup2.png')] bg-cover md:bg-contain">
            <section id='hero' className='snap-center'>
                <Hero pageInfo={pageInfo} />
            </section>

            <section id='about' className='snap-center'>
                <About pageInfo={pageInfo} />
            </section>

            <section id='experience' className='snap-start'>
                <Experience />
            </section>

            <section id='education' className='snap-center'>
                <Education id='Education' />
            </section>

            <section id='skills' className='snap-start'>
                <Skills skillsSet={skillsSet} />
            </section>

            <section id='projects' className='snap-start'>
                <Projects id='projects' />
            </section>
            <section id='contact' className='snap-center'>
                <ContactMe />
            </section>
            <ScrollToTop />
        </main>
    );
}
