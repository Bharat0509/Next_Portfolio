import { Education, Skill } from "@/typings";
import axios from "axios";

export const fetchEducation = async () => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
    );

    const data = res.data;
    const education: Education[] = data;
    return education;
};
