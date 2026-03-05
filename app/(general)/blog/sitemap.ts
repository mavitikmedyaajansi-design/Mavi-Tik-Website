import { BASE_URL, mainNavigation } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs =
    mainNavigation.find((item) => item.label === "Blog")?.subNavs || [];

  return blogs.map((blog) => ({
    url: `${BASE_URL}${blog.href}`,
    lastModified: new Date(),
  }));
}
