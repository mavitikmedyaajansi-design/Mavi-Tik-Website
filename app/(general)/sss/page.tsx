import ContactSection from "@/components/ContactSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular",
  description: "Sıkça Sorulan Sorular - Dijital Pazarlama Hizmetleri",
};

export default async function Page() {
  const faqs = [
    {
      question: "Hangi dijital pazarlama hizmetlerini sunuyorsunuz?",
      answer:
        "Web tasarımından sosyal medya yönetimine, içerik üretiminden SEO'ya, reklam yönetiminden grafik tasarıma kadar geniş bir yelpazede dijital pazarlama hizmetleri sunuyoruz. İhtiyaçlarınıza özel çözümler üretiyoruz.",
    },
    {
      question: "Hangi sektörlere hizmet veriyorsunuz?",
      answer:
        "Sektör sınırlamamız yok! Her sektörden işletmeye ve bireye dijital pazarlama çözümleri sunuyoruz.",
    },
    {
      question: "Uluslararası müşterilerle çalışıyor musunuz?",
      answer:
        "Evet, uluslararası müşterilerle de çalışıyoruz. Farklı dillerde ve kültürlerde dijital pazarlama stratejileri geliştirebiliyoruz.",
    },
    {
      question: "Projeye nasıl başlıyoruz?",
      answer:
        "Öncelikle ihtiyaçlarınızı ve hedeflerinizi anlamak için sizinle bir araya geliyoruz. Ardından size özel bir strateji geliştiriyor ve proje takvimini oluşturuyoruz.",
    },
    {
      question: "Proje süresince benimle nasıl iletişim kuracaksınız?",
      answer:
        "Proje boyunca düzenli olarak sizinle iletişim halinde olacağız. E-posta, telefon veya video konferans yoluyla güncellemeler paylaşacak ve geri bildirimlerinizi alacağız.",
    },
    {
      question: "Proje tamamlandıktan sonra ne olacak?",
      answer:
        "Proje tesliminden sonra da size destek olmaya devam edeceğiz. Web sitenizin veya sosyal medya hesaplarınızın bakımını yapacak, performansını izleyecek ve size raporlar sunacağız.",
    },
    {
      question: "Fiyatlarınız nasıl belirleniyor?",
      answer:
        "Fiyatlarımız, projenin kapsamına, süresine ve kullanılan kaynaklara göre değişiyor. Size özel bir fiyat teklifi sunmak için ihtiyaçlarınızı detaylı olarak görüşüyoruz.",
    },
    {
      question: "Ödeme seçenekleri nelerdir?",
      answer:
        "Kredi kartı, banka havalesi veya diğer online ödeme yöntemlerini kullanabilirsiniz.",
    },
    {
      question: "Neden Mavi Tik Medya Ajansını seçmeliyim?",
      answer:
        "Çünkü biz, deneyimli, inovatif, sonuç odaklı ve müşteri memnuniyetine önem veren bir ekibiz. Sizin başarınız için çalışıyoruz!",
    },
    {
      question: "Referanslarınızı görebilir miyim?",
      answer:
        "Elbette, daha önceki projelerimizden örnekleri ve müşteri referanslarımızı web sitemizde görebilirsiniz.",
    },
    {
      question: "Projemi ne kadar sürede tamamlayabilirim?",
      answer:
        "Projenin karmaşıklığına ve kapsamına göre değişmekle birlikte, genellikle birkaç hafta içinde tamamlayabiliyoruz.",
    },
  ];

  return (
    <article className="max-w-4xl mx-auto p-2 md:p-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Mavi Tik Medya Ajansı
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Sıkça Sorulan Sorular (S.S.S)
        </h2>
        <p className="text-gray-600">
          Hizmetlerimiz hakkında merak ettikleriniz
        </p>
      </div>

      <div className=" rounded-lg shadow-md p-6 mb-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="flex items-center py-4 text-left text-gray-800 hover:text-primary transition-colors">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="font-medium">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pl-8 pr-4 pb-4 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <ContactSection />
    </article>
  );
}
