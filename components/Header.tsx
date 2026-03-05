import Image from "next/image";
import Link from "next/link";
import HeaderNav from "./HeaderNav";
import MobileNav from "./MobileNav";
import SocialMedias from "./SocialMedias";

const Header = () => {
  return (
    <header className="flex shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/70">
      <div className="w-full max-w-7xl py-2 px-4 mx-auto flex flex-row gap-4 justify-between md:justify-start items-center">
        <Link href="/" title="Anasayfaya git">
          {/* todo: modalda videoyu açacak  */}
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link>
        <HeaderNav />
        <MobileNav />
        <SocialMedias />
      </div>
    </header>
  );
};

export default Header;
