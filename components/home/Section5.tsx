import ConstraintedBox from "@/components/core/ConstraintedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import ProjectList from "./ui/ProjectList";
import { fetchProjects } from "@/utils/fetchProjects";
import { Suspense } from "react";
import { Title } from "../Title";
import { Project } from "@/typings";

const HomeSection5 = async ({ id }: { id: string }) => {
    const projects = (await fetchProjects()) as Project[];
    if (!projects) return null;
    return (
        <ResponsiveBox
            className=' min-h-[calc(100vh-5rem)] w-full items-center justify-center'
            id={id}
        >
            <Title h2='Projects' useMotion />
            <Suspense>
                <ConstraintedBox className='p-4 w-full'>
                    <ProjectList projects={projects} />
                </ConstraintedBox>
            </Suspense>
        </ResponsiveBox>
    );
};

export default HomeSection5;
