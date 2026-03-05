import { blogContents, legalPages, pageContents } from "@/lib/constants";
import { PageData } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ContactSection from "./ContactSection";

type Props = {
  data: PageData;
};

const PageRenderer = ({ data }: Props) => {
  const content = Object.entries({
    ...blogContents,
    ...pageContents,
    ...legalPages,
  }).find(([key]) => key === data.slug)?.[1];

  return (
    content && (
      <article className="max-w-7xl mx-auto p-4 md:p-8 ">
        {content.image?.position === "top" ? (
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={2000}
            height={500}
            loading="eager"
            className={content.image.className}
          />
        ) : null}

        <h1 className="text-3xl font-bold text-primary my-4">
          {data.container[0]?.title || data.title}
        </h1>

        {content.image?.position === "inner" ? (
          <Image
            src={content.image.src}
            alt={content.image.alt}
            width={500}
            height={500}
            loading="eager"
            className={cn(content.image.className, "m-4")}
          />
        ) : //todo mobilde sola yapışmış
        null}
        <div
          dangerouslySetInnerHTML={{ __html: data.container[0]?.content ?? "" }}
        />
        {data.type !== "legal" && <ContactSection />}
      </article>
    )
  );
};

export default PageRenderer;
