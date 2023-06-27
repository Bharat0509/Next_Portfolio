import { Social } from "@/typings";
import axios from "axios";

export const fetchSocials = async () => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );
    if (res.headers["content-type"].split(";")[0] === "text/html") return null;
    const data = res.data;
    const socials: Social[] = data;
    return socials;
};
