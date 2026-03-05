import { footerNavigation, footerSocialMedias } from "@/lib/constants";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary/40 text-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/" title="Ana Sayfa">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={160}
              quality={100}
            />
          </Link>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    title={item.label}
                    className="text-slate-700 hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">İletişim</h3>
            {/* <div className="flex flex-row gap-2 items-center">
              <MapPin size={16} />
              <address className="text-slate-700 not-italic">
                <p>Değirmiçem Mahallesi Prf. Muammer Aksoy Bulvarı</p>
                <p>Osmanlı İş Merkezi Kat:4 No:99</p>
                <p>Şehitkamil / Gaziantep</p>
              </address>
            </div> */}
            <Link
              className="flex flex-row gap-2 items-center"
              href="mailto:mavitikmedyaajansi@gmail.com"
              target="_blank"
              title="E-posta Adresi"
              rel="noreferrer noopener nofollow"
            >
              <Mail size={16} />
              <p>mavitikmedyaajansi@gmail.com</p>
            </Link>
            {/* <Link
              className="flex flex-row gap-2 items-center"
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

        {/* Social Media Links */}
        <div className="mt-8 border-t border-slate-800 pt-2">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="flex space-x-1 mb-4 md:mb-0">
              {footerSocialMedias.map((item) => (
                <Link
                  href={item.href}
                  title={item.label}
                  key={item.label}
                  rel="noreferrer noopener nofollow"
                  target="_blank"
                  className="hover:bg-accent p-2 rounded-full bg-primary/20"
                >
                  <Image
                    src={`/${item.icon}.svg`}
                    alt={item.label}
                    width={16}
                    height={16}
                    quality={100}
                  />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/cerez-politikasi"
                title="Çerez Politikası"
                className="text-slate-700 hover:text-black transition-colors"
              >
                Çerez Politikası
              </Link>
              <Link
                href="/gizlilik-politikasi"
                title="Gizlilik Politikası"
                className="text-slate-700 hover:text-black transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="/kvkk"
                title="KVKK Sayfası"
                className="text-slate-700 hover:text-black transition-colors"
              >
                KVKK
              </Link>
              <Link
                href="/kullanim-kosullari"
                title="Kullanım Koşulları"
                className="text-slate-700 hover:text-black transition-colors"
              >
                Kullanım Koşulları
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-slate-600">
          <p>
            &copy; {new Date().getFullYear()} Mavi Tik Medya. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
