import PageRenderer from "@/components/PageRenderer";
import { get } from "@/lib/api-server";
import { legalPages, pageContents } from "@/lib/constants";
import { PageData } from "@/lib/types";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = {
    title:
      pageContents[slug as keyof typeof pageContents]?.meta_title ||
      legalPages[slug as keyof typeof legalPages]?.meta_title ||
      "",
    description:
      pageContents[slug as keyof typeof pageContents]?.meta_description ||
      legalPages[slug as keyof typeof legalPages]?.meta_description ||
      "",
  };

  return meta;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const res: PageData = await get(`page/${slug}`);

  if (res) {
    return <PageRenderer data={res} />;
  } else {
    return notFound();
  }
}
