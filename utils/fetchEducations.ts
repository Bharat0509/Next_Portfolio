import { Education, Skill } from "@/typings";
import axios from "axios";

export const fetchEducation = async () => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducation`
    );
    if (res.headers["content-type"].split(";")[0] === "text/html") return null;
    const data = res.data;
    const education: Education[] = data;
    return education;
};
