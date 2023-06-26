import { Skill, SkillSet } from "@/typings";

export const fetchSkillSet = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillSet`
    );

    const data = await res.json();
    const SkillSet: SkillSet[] = data;
    return SkillSet;
};
