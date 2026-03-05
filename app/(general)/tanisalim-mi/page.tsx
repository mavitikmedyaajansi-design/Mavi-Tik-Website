import ContactForm from "@/components/ContractForm";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const pageContents = {
  content: {
    title: "MAVİ TİK İLETİŞİM",
    description: `
    <p>Mavi Tik Medya olarak m&uuml;şterilerimizle olan iletişimimizi &ouml;nemsiyoruz.</p>
<p>Bize ulaşmak i&ccedil;in hemen iletişime ge&ccedil;! Ya da biz seninle iletişime ge&ccedil;elim.&nbsp;</p>
<p>İster telefonla ister e-maille istersen de sosyal medyadan, nasıl rahat edersen.</p>
<p>Tek yapmanız gereken bir mesaj bırakmak.</p>
<p>Bu arada kahve i&ccedil;meye de bekleriz&hellip; :)</p>`,
  },

  meta_title: "Bize Ulaşın",
  meta_description:
    "Mavi Tik Medya olarak müşterilerimizle olan iletişimimizi önemsiyoruz.",
  image: {
    src: "/contact-us.webp",
    alt: "Contact Us",
    className: "w-full",
    position: "top",
  },
};

export const metadata: Metadata = {
  title: pageContents.meta_title,
  description: pageContents.meta_description,
};

export default async function Page() {
  return (
    <article className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {pageContents.image.position === "top" ? (
        <Image
          src={pageContents.image.src}
          alt={pageContents.image.alt}
          width={2000}
          height={500}
          loading="eager"
          className={cn(
            pageContents.image.className,
            "max-h-[400px] object-cover col-span-full"
          )}
        />
      ) : null}

      <div>
        <h1
          className="text-3xl font-bold text-primary my-4"
          id={pageContents.content.title.toLowerCase()}
        >
          {pageContents.content.title}
        </h1>

        <div
          dangerouslySetInnerHTML={{
            __html: pageContents.content.description,
          }}
        />
      </div>
      <ContactForm />
      <div className="bg-white rounded-xl shadow-md overflow-hidden relative col-span-2">
        <div className="triangle-pattern opacity-20"></div>
        <div className="p-8 relative z-10">
          <div className="bg-blue-100 p-4 rounded-lg inline-block mb-6">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>

          {/* <h2 className="text-2xl font-bold text-gray-800 mb-6">
            İletişim Bilgilerimiz
          </h2> */}

          <div className="space-y-4">
            <h3 className="text-xl font-bold">İletişim</h3>
            {/* <div className="flex flex-row gap-2 items-center">
              <MapPin size={16} />
              <address className="text-slate-700 not-italic space-y-2">
                <p>Değirmiçem Mahallesi Prf. Muammer Aksoy Bulvarı</p>
                <p>Osmanlı İş Merkezi Kat:4 No:99</p>
                <p>Şehitkamil / Gaziantep</p>
              </address>
            </div> */}

            <Link
              className="flex flex-row gap-2 items-center text-primary hover:text-primary/50 transition-colors"
              href="mailto:mavitikmedyaajansi@gmail.com"
              target="_blank"
              title="E-posta Adresi"
              rel="noreferrer noopener nofollow"
            >
              <Mail size={16} />
              <p>mavitikmedyaajansi@gmail.com</p>
            </Link>

            {/* <Link
              className="flex flex-row gap-2 items-center text-primary hover:text-primary/50 transition-colors"
              href="tel:+905533650396"
              title="Telefon Numarası"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              <Phone size={16} />
              <p>+90553 365 03 96</p>
            </Link> */}
          </div>
        </div>
      </div>

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d1036.7437169554848!2d37.370604392857096!3d37.0693529396196!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e145758c4a97%3A0x6b03f8e231dbcdda!2zT3NtYW5sxLEgxLDFnyBNZXJrZXo!5e1!3m2!1str!2sus!4v1741208256067!5m2!1str!2sus"
        width="100%"
        height="450"
        loading="lazy"
        allowFullScreen={false}
        referrerPolicy="no-referrer-when-downgrade"
        // style="border:0;"
      ></iframe> */}
    </article>
  );
}
