import ContactSection from "@/components/ContactSection";
import {
  CheckCircle,
  FileText,
  HeartHandshake,
  PenTool,
  TestTube,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mavi Tik Medya Ajansı - İş Akış Planı",
  description: "Mavi Tik Medya Ajansı'nın müşteri projelerindeki iş akış planı",
};

export default async function Page() {
  return (
    <article className="max-w-4xl mx-auto p-4 md:p-8 ">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Mavi Tik Medya Ajansı
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800">İş Akış Planı</h2>
      </div>

      <div className="space-y-10">
        {/* Section 1 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              1. Müşteri Tanışma ve İhtiyaç Analizi
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>• Tanışma</li>
            <li>• Toplantı Gerçekleştirme</li>
            <li>• İhtiyaç Analizi</li>
            <li>• Teklif Sunumu</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              2. Proje Planlama ve Sözleşme
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>• Proje Onayı</li>
            <li>• Sözleşme İmzalama</li>
            <li>• Proje Ekibi Oluşturma</li>
            <li>• Proje Takvimi Belirleme</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <PenTool className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              3. Tasarım ve İçerik Üretimi
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>• Araştırma ve Konsept Geliştirme</li>
            <li>• Tasarım Süreci</li>
            <li>• İçerik Üretimi</li>
            <li>• Müşteri Geri Bildirimi</li>
            <li>• Revizyonlar</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <TestTube className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              4. Uygulama ve Test
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>• Web Sitesi Geliştirme Testi</li>
            <li>• Sosyal Medya Yönetimi Testi</li>
            <li>• Reklam Kampanyaları Testi</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              5. Teslimat ve Değerlendirme
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>• Proje Teslimi</li>
            <li>• Müşteri Onayı</li>
            <li>• Değerlendirme Toplantısı</li>
            <li>• Raporlama</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className=" rounded-lg p-6 shadow-md border-l-4 border-primary">
          <div className="flex items-center mb-4">
            <HeartHandshake className="h-8 w-8 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-gray-800">
              6. Sürekli Destek ve İş birliği
            </h3>
          </div>
          <ul className="ml-12 space-y-2 text-gray-700">
            <li>
              • Teknik Destek: Müşteriye proje ile ilgili teknik destek
              sağlanır.
            </li>
            <li>
              • Güncellemeler ve Bakım: Web sitesi ve sosyal medya hesapları
              güncellenir ve bakımı yapılır.
            </li>
            <li>
              • Yeni Projeler: Müşterinin ihtiyaçları doğrultusunda yeni
              projeler geliştirilir.
            </li>
          </ul>
        </div>

        <div className="text-center text-gray-600 mt-8 italic">
          <p>
            Bu iş akış planı, Mavi Tik Medya Ajansı&apos;nın müşterileriyle olan
            iletişimini ve proje sürecini daha şeffaf ve düzenli hale
            getirmesini genel hatlarıyla ifade etmektedir.
          </p>
        </div>
      </div>
      <ContactSection />
    </article>
  );
}
