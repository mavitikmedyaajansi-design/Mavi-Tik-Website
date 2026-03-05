import PageRenderer from "@/components/PageRenderer";
import { get } from "@/lib/api-server";
import { blogContents } from "@/lib/constants";
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
    title: blogContents[slug as keyof typeof blogContents].meta_title,
    description:
      blogContents[slug as keyof typeof blogContents].meta_description,
  };

  return meta;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const res: PageData = await get(`page/${slug}`);

  if (slug in blogContents) {
    return <PageRenderer data={res} />;
  } else {
    return notFound();
  }
}
