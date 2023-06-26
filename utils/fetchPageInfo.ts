import { urlFor } from "@/sanity";
import { PageInfo, Skill } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await fetch(
        `https://next-portfolio-o1lvkfe7z-bharat0509.vercel.app/api/getPageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data;
    let imgUrl = urlFor(pageInfo.heroImage).url();
    pageInfo.img = imgUrl;
    return pageInfo;
};
