import { getAllTags, locations } from "@/data/restaurants";
import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allTags = await getAllTags();

    const searchLandingPages = allTags.map(tag => (
        locations.map(location => ({
            url: `${baseUrl}/${location}/${tag}`,
            lastModified: new Date(),
            changeFrequency:"weekly",
            priority: 1
        }))
    )).flat() as MetadataRoute.Sitemap;

    return [
        //Insert to your all pages
        {
            url:`${baseUrl}/about`,
            lastModified: "2025-02-18",
            changeFrequency:"yearly",
            priority: 0.8
        },
        //Our programatic SEO pages
        ...searchLandingPages
    ]
}