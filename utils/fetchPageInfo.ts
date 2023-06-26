import { urlFor } from "@/sanity";
import { PageInfo, Skill } from "@/typings";

export const fetchPageInfo = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );

    const data = await res.json();
    const pageInfo: PageInfo = data;
    let imgUrl = await urlFor(pageInfo.heroImage).url();
    pageInfo.img = imgUrl;
    return pageInfo;
};
