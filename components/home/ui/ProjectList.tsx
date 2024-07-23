"use client";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import { Project } from "@/typings";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }: Readonly<{ projects: Project[] }>) => {
    return (
        <Column className='w-full mt-16'>
            <Row className='w-full gap-4 overflow-x-scroll no-scrollbar'>
                {projects?.map((item, index) => {
                    return (
                        <ProjectItem
                            key={`project-item-${index}`}
                            project={item}
                        />
                    );
                })}
            </Row>
        </Column>
    );
};

export default ProjectList;
