import { urlFor } from "@/sanity";
import { PageInfo, Skill } from "@/typings";
import axios from "axios";

export const fetchPageInfo = async () => {
    const res = await axios
        .get(
            `https://next-portfolio-o1lvkfe7z-bharat0509.vercel.app/api/getPageInfo`
        )
        .then((res) => res.data);

    // const data = res;
    const pageInfo: PageInfo = res;
    let imgUrl = urlFor(pageInfo.heroImage).url();
    pageInfo.img = imgUrl;
    return pageInfo;
};
