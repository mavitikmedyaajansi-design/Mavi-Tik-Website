import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const items = [
  {
    title: "Hikayemiz",
    href: "/hikayemiz",
    description:
      "Mavi Tik Medya Ajansının Hikayesinin esinlenme noktası “Spix Papağanı” bir başka deyişle “Mavi Makav Papağının” yaşam hikayesi olmuştur...",
  },
  {
    title: "Misyonumuz",
    href: "/misyonumuz-vizyonumuz-hedeflerimiz#misyonumuz",
    description:
      "Biz, Mavi Tik Medya Ajansında, sadece bir dijital medya ajansı değil, aynı zamanda hayallerinizi gerçeğe dönüştürmek için yanınızda yürüyen bir ekibiz...",
  },
  {
    title: "Vizyonumuz",
    href: "/misyonumuz-vizyonumuz-hedeflerimiz#vizyonumuz",
    description:
      "Mavi Tik Medya Ajansı olarak, dijital dünyanın sürekli değişen ve gelişen yapısında, markaların ve bireylerin potansiyellerini en üst düzeye çıkarmalarına öncülük etmek istiyoruz...",
  },
  {
    title: "Hedeflerimiz",
    href: "/misyonumuz-vizyonumuz-hedeflerimiz#hedeflerimiz",
    description:
      "Mavi Tik Medya Ajansı olarak, dijital dünyada iz bırakmanız için size ilham veriyor, yol gösteriyor ve destek oluyoruz...",
  },
];

const HomeFourItems = () => {
  return (
    <div className="max-w-7xl mx-auto  gap-2 md:gap-4  p-2 md:p-8 grid grid-cols-1 md:grid-cols-4 ">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="flex flex-col gap-4 p-4 bg-primary/20 rounded-md shadow-lg "
        >
          {index === 0 ? (
            <h1 className="text-xl font-bold text-primary">{item.title}</h1>
          ) : (
            <h2 className="text-xl font-bold text-primary">{item.title}</h2>
          )}
          <p className="text-sm text-muted-foreground grow">
            {item.description}
          </p>
          <div className="flex flex-row justify-end">
            <Link href={item.href} title={item.title} passHref>
              <Button variant="ghost">
                Devamını Oku
                <ChevronRight />
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFourItems;
