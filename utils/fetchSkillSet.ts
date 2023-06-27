import { Skill, SkillSet } from "@/typings";
import axios from "axios";

export const fetchSkillSet = async () => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkillSet`
    );

    const data = res.data;
    const SkillSet: SkillSet[] = data;
    return SkillSet;
};
