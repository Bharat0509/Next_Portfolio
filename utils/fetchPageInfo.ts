import { urlFor } from "@/sanity";
import { PageInfo, Skill } from "@/typings";
import axios from "axios";

export const fetchPageInfo = async () => {
    const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const pageInfo: PageInfo = res.data;

    return pageInfo;
};
