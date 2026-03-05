import { headerSocialMedias } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const SocialMedias = () => {
  return (
    <nav className=" flex-row gap-1 items-center hidden md:flex">
      {headerSocialMedias.map((item) => (
        <Link
          href={item.href}
          title={item.label}
          key={item.label}
          rel="noreferrer noopener nofollow"
          target="_blank"
          className="hover:bg-accent p-2 rounded-full"
        >
          <Image
            src={`/${item.icon}.svg`}
            alt={item.label}
            width={20}
            height={20}
            quality={100}
          />
        </Link>
      ))}
    </nav>
  );
};

export default SocialMedias;
