import { BASE_URL, mainNavigation } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const biz_kimiz =
    mainNavigation.find((item) => item.label === "Biz Kimiz")?.subNavs || [];

  const neler_yapiyoruz =
    mainNavigation
      .find((item) => item.label === "Neler Yapıyoruz")
      ?.subNavs?.filter((item) => item.href) || [];

  return [
    ...[...biz_kimiz, ...neler_yapiyoruz].map((page) => ({
      url: `${BASE_URL}${page.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/cerez-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/kullanim-kosullari`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/kvkk`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },

    {
      url: `${BASE_URL}/mavi-kariyer`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/misyonumuz-vizyonumuz-hedeflerimiz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/nasil-calisiyoruz`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.1,
    },
    {
      url: `${BASE_URL}/sss`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/tanisalim-mi`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
