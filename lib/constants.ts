import { Nav, PageContent } from "./types";

export const BASE_URL = "https://mavitikmedya.com";

export const mainNavigation: Nav[] = [
  {
    label: "Biz Kimiz",
    subNavs: [
      {
        label: "Hikayemiz",
        href: "/hikayemiz",
      },
      {
        label: "Misyonumuz",
        href: "/misyonumuz-vizyonumuz-hedeflerimiz#misyonumuz",
      },
      {
        label: "Vizyonumuz",
        href: "/misyonumuz-vizyonumuz-hedeflerimiz#vizyonumuz",
      },
      {
        label: "Hedeflerimiz",
        href: "/misyonumuz-vizyonumuz-hedeflerimiz#hedeflerimiz",
      },
      {
        label: "Hayallerimiz",
        href: "/misyonumuz-vizyonumuz-hedeflerimiz#hayallerimiz",
      },
    ],
  },
  {
    label: "Neler Yapıyoruz",
    subNavs: [
      {
        label: "Dijital Pazarlama Danışmanlığı",
        href: "/dijital-pazarlama-danismanligi",
      },
      {
        label: "Web Tasarımı",
        href: "/web-tasarimi",
      },
      {
        label: "Sosyal Medya Yönetimi",
        href: "/sosyal-medya-yonetimi",
      },
      {
        label: "E-Ticaret (Pazaryeri) Danışmanlığı",
        href: "/e-ticaret-pazaryeri-danismanligi",
      },
      {
        label: "Grafik Tasarımı",
        href: "/grafik-tasarimi",
      },
      {
        label: "SEO (Arama Motoru Optimizasyonu)",
        href: "/seo-arama-motoru-optimizasyonu",
      },
      {
        label: "Google ADS (Google Reklam Yönetimi)",
        href: "/google-ads-google-reklam-yonetimi",
      },
      {
        label: "Meta Reklam Yönetimi(Facebook ve İnstagram)",
        href: "/meta-reklam-yonetimi-facebook-ve-instagram",
      },
      {
        label: "İçerik Üretimi",
        href: "/icerik-uretimi",
      },
      {
        label: "Ürün Çekimleri",
        href: "/urun-cekimleri",
      },
      {
        label: "Fenomenlik Danışmanlığı",
        subNavs: [
          {
            label: "Instagram",
            href: "/instagram",
          },
          {
            label: "Youtube",
            href: "/youtube",
          },
          {
            label: "Tik Tok",
            href: "/tik-tok",
          },
          {
            label: "Bigo",
            href: "/bigo",
          },
        ],
      },
    ],
  },
  {
    label: "Blog",
    subNavs: [
      {
        label: "2025 Yılı Dijital Pazarlama Trendleri",
        href: "/blog/2025-yili-dijital-pazarlama-trendleri",
      },
      {
        label: "E-Ticaret Web Siteleri İçin İpuçları",
        href: "/blog/eticaret-web-siteleri-icin-ipuclari",
      },
      {
        label: "Tik Tok'ta Viral Olmanın Sırları",
        href: "/blog/tik-tokta-viral-olmanin-sirlari",
      },
      {
        label: "Veri Odaklı Dijital Pazarlama",
        href: "/blog/veri-odakli-dijital-pazarlama",
      },
      {
        label: "Blog Yazarak Markanızı Nasıl Büyütürsünüz",
        href: "/blog/blog-yazarak-markanizi-nasil-buyutursunuz",
      },
      {
        label: "Instagram'da Markanızı Nasıl Büyütürsünüz",
        href: "/blog/instagramda-markanizi-nasil-buyutursunuz",
      },
      {
        label: "Kullanıcı dostu bir web sitesi nasıl tasarlanır",
        href: "/blog/kullanici-dostu-bir-web-sitesi-nasil-tasarlanir",
      },
      {
        label: "Mobil Uyumlu Web Sitenin Önemi",
        href: "/blog/mobil-uyumlu-web-sitenin-onemi",
      },
      {
        label: "Seo Uyumlu İçerik Nasıl Oluşturulur",
        href: "/blog/seo-uyumlu-icerik-nasil-olusturulur",
      },
      {
        label: "Sıra Dışı Ve Etkileyici İçerikler Nasıl Oluşturulur",
        href: "/blog/sira-disi-ve-etkileyici-icerikler-nasil-olusturulur",
      },
      {
        label: "Sosyal Medya Algoritmalarındaki Değişiklikler",
        href: "/blog/sosyal-medya-algoritmalarindaki-degisiklikler",
      },
      {
        label: "Sosyal Medya Reklamları Nasıl Oluşturulur",
        href: "/blog/sosyal-medya-reklamlari-nasil-olusturulur",
      },
      {
        label:
          "Yerel Seo İle İşletmenizi Nasıl Daha Bulunabilir Hale Getirebilirsiniz",
        href: "/blog/yerel-seo-ile-isletmenizi-nasil-daha-bulunabilir-hale-getirebilirsiniz",
      },
    ],
  },
  {
    label: "Nasıl Çalışıyoruz",
    title: "Mavi Tik Medya Ajansı İş Akış Planı",
    href: "/nasil-calisiyoruz",
  },
  {
    label: "S.S.S",
    title: "Sıkça Sorulan Sorular",
    href: "/sss",
  },
  {
    label: "Mavi Kariyer",
    title: "Mavi Tik Medyada Yeteneğe Yer Açtık…",
    href: "/mavi-kariyer",
  },
  {
    label: "Tanışalım Mı?",
    title: "Mavi Tik Medya İletişim",
    href: "/tanisalim-mi",
  },
];

export const footerNavigation = [
  {
    label: "Hikayemiz",
    href: "/hikayemiz",
  },
  {
    label: "Mavi Kariyer",
    href: "/mavi-kariyer",
  },
  {
    label: "Tanışalım Mı?",
    href: "/tanisalim-mi",
  },
  {
    label: "S.S.S",
    href: "/sss",
  },
];

export const headerSocialMedias = [
  // {
  //   label: "Whatsapp",
  //   href: "https://wa.me/905533650396",
  //   icon: "whatsapp",
  // },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mavitikmedyaajansi/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572261321873",
    icon: "facebook",
  },
  {
    label: "X",
    href: "https://x.com/mavitikmedya",
    icon: "twitter",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@MaviTikMedya",
    icon: "youtube",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mavitikmedya/",
    icon: "linkedin",
  },
  {
    label: "Pinterest",
    href: "https://tr.pinterest.com/mavitikmedya/",
    icon: "pinterest",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mavitikmedya",
    icon: "tiktok",
  },
];

export const footerSocialMedias = [...headerSocialMedias];

export const pageContents: Record<string, PageContent> = {
  hikayemiz: {
    title: "İşte Hikayemiz",
    description: `<p>
        Mavi Tik Medya Ajansının Hikayesinin esinlenme noktası “Spix Papağanı”
        bir başka deyişle “Mavi Makav Papağının” yaşam hikayesi olmuştur.
      </p><br/>
      <p>
        Mavi Makav Papağanı doğada nesli tükenmiş ve en son 2019 yılında
        görülmüş olan nadir bir kuş türüdür. Mavi Tik Medya Ajansı olarak kendi
        yetkinliklerimizi incelediğimizde Mavi Makav Papağını ile benzer
        karakteristik özelliklere sahip olduğumuzu fark ettik.
      </p><br/>
      <p>
        Mavi Tik Medya Ajansı, Mavi Makav gibi doğa sı gereği iletişim ve
        etkileşim konusunda uzmandır. Onlar gibi biz de müşterilerimizle ve
        takipçilerimizle güçlü bağlar kuruyoruz. Mavi Makav papağanı, amazon
        ormanlarının doğal güzelliklerini yansıttığı gibi, biz de markaların
        dijital dünyadaki en çekici yüzlerini yansıtmayı hedefliyoruz…
      </p><br/>
      <p>
        Mavi Makav papağanının nesli tehlikede olduğu gibi, dijital dünyada da
        doğru iletişim kurmak ve hedef kitlenize ulaşmak her geçen gün
        zorlaşıyor. Mavi Tik Medya Ajansı olarak biz de tıpkı bu özel papağanlar
        gibi, inovatif yaklaşımımız ve uzmanlığımızla zorlukların üstesinden
        gelmeyi amaçlıyoruz…
      </p><br/>
      <p>
        Mavi Tik Medya Ajansı olarak, Mavi Makav papağanının ötüşü kadar dikkat
        çekici ve akılda kalıcı olmak, bizim için bir tutkudur. Onlar gibi, biz
        de özgün ve yenilikçi projelerle fark ortaya koyuyoruz. Onlar gibi
        sosyalleşmek bizim ve müşterilerimiz içinde vazgeçilmezimiz…
      </p><br/>
      <p>
        Mavi Tik Medya Ajansı olarak benzer şekilde Mavi Makav papağanı gibi
        çevreye karşı meraklı, keşfetmeyi seven ve maceracı bir ruha sahibiz.
      </p><br/>
      <p>
        Tıpkı bu nadir bulunan papağan gibi, biz de dijital dünyada benzersiz
        bir konum hedefliyoruz...
      </p>`,
    meta_title: "İşte Hikayemiz",
    meta_description:
      "Tıpkı bu nadir bulunan papağan gibi, biz de dijital dünyada benzersiz bir konum hedefliyoruz...",
    image: {
      src: "/birds/bird2.png",
      alt: "Mavi Makav Papağanı",
      className: "float-right",
      position: "inner",
    },
  },
  "dijital-pazarlama-danismanligi": {
    title:
      "Merhaba! İşletmenizin Dijital Dünyada Parlamasına Yardımcı Oluyoruz!",
    description: `<p>G&uuml;n&uuml;m&uuml;zde, dijital d&uuml;nya işletmeler i&ccedil;in vazge&ccedil;ilmez bir platform haline geldi. Ancak, bu karmaşık ve s&uuml;rekli değişen ortamda başarılı olmak i&ccedil;in doğru stratejilere ve uzmanlığa ihtiya&ccedil; var. İşte tam da bu noktada, Mavi Tik Medya olarak devreye giriyoruz!</p>
<br/>
    <p>Biz, dijital pazarlama konusunda deneyimli ve tutkulu bir ekibiz. Amacımız, işletmenizin dijital d&uuml;nyada hak ettiği yeri almasına yardımcı olmak. Sadece rakamlarla değil, sizinle birlikte, markanızın hikayesini ve değerlerini anlayarak, size &ouml;zel &ccedil;&ouml;z&uuml;mler &uuml;retiyoruz.</p>
<br/>
    <p>Hadi Tanışalım!</p>
<br/>
    <p>İşletmenizin dijital d&uuml;nyada nasıl parlayacağını konuşmak i&ccedil;in bize ulaşın. Sizinle tanışmak ve markanızı daha yakından tanımak i&ccedil;in sabırsızlanıyoruz. Birlikte, dijital başarıya doğru yolculuğa &ccedil;ıkalım!</p>
    <br/>
    <p class="text-primary font-semibold text-base">Mavi Tik Medya - Dijital D&ouml;n&uuml;ş&uuml;m&uuml;n G&uuml;venilir Adresi</p>
`,
    meta_title: "Dijital Pazarlama Danışmanlığı",
    meta_description:
      "Günümüzde, dijital dünya işletmeler için vazgeçilmez bir platform haline geldi. Ancak, bu karmaşık ve sürekli değişen ortamda başarılı olmak için doğru stratejilere ve uzmanlığa ihtiyaç var. İşte tam da bu noktada, Mavi Tik Medya olarak devreye giriyoruz!",
    image: {
      src: "/hizmetler/dijital-pazarlama.webp",
      alt: "Dijital Pazarlama Danışmanlığı",
      className: "w-full",
      position: "top",
    },
  },
  "web-tasarimi": {
    title: "Web Sitenizle Dijital Dünyada İz Bırakın!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, markanızın dijital d&uuml;nyadaki y&uuml;z&uuml; olan web sitenizi tasarlayarak sizi bir adım &ouml;ne taşımak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, internetin yaygınlaşmasıyla birlikte, web siteleri işletmeler i&ccedil;in vazge&ccedil;ilmez bir iletişim aracı haline geldi. M&uuml;şterileriniz sizi ilk olarak web sitenizde tanıyor, &uuml;r&uuml;nlerinizi ve hizmetlerinizi inceliyor ve sizinle iletişim kuruyor. Bu nedenle, web sitenizin tasarımı, markanızın imajını yansıtan, kullanıcı dostu ve etkileyici olmalıdır.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Web Tasarımı hizmetimiz ile markanızın ihtiya&ccedil;larına uygun, modern, işlevsel ve kullanıcı odaklı web siteleri tasarlıyoruz.</p><br/>
<p>Haydi, Online'da Fark Yaratın!</p><br/>
<p>Web Tasarımı hizmetimiz ile markanızın dijital d&uuml;nyadaki temsilcisi olan web sitenizi tasarlamak i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, iyi bir web sitesi, markanızın dijital d&uuml;nyadaki vitrinidir!</p>`,
    meta_title: "Web Tasarımı",
    meta_description:
      "Merhaba! Mavi Tik Medya Ajansı olarak, markanızın dijital dünyadaki yüzü olan web sitenizi tasarlayarak sizi bir adım öne taşımak için buradayız!",
    image: {
      src: "/hizmetler/web-tasarimi.webp",
      alt: "Web Tasarımı",
      className: "w-full",
      position: "top",
    },
  },
  "sosyal-medya-yonetimi": {
    title: "Sosyal Medya ile Markanıza Canlılık Katın!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, sosyal medyanın g&uuml;c&uuml;n&uuml; kullanarak markanızı daha g&ouml;r&uuml;n&uuml;r ve etkileşimli hale getirmenize yardımcı olmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, sosyal medya platformları markanız i&ccedil;in sadece bir vitrin değil, aynı zamanda m&uuml;şterilerinizle doğrudan iletişim kurabileceğiniz, onların ilgisini &ccedil;ekebileceğiniz ve sadık bir topluluk oluşturabileceğiniz bir alandır.</p><br/>
<p>Ancak, sosyal medyada başarılı olmak, d&uuml;zenli ve etkili paylaşımlar yapmak, doğru stratejiler uygulamak ve hedef kitlenizi iyi tanımak gerektirir.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Sosyal Medya Y&ouml;netimi ve Sosyal Medya İ&ccedil;erik Y&ouml;netimi hizmetlerimiz ile markanızın sosyal medya yolculuğunda size rehberlik ediyoruz.</p><br/>
<p>Haydi, Sosyal Medyada Fark Yaratın!</p><br/>
<p>Sosyal Medya Y&ouml;netimi ve Sosyal Medya İ&ccedil;erik Y&ouml;netimi hizmetlerimiz ile markanızı sosyal medyada daha g&uuml;&ccedil;l&uuml; bir konuma getirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, sosyal medya sadece bir platform değil, markanız i&ccedil;in bir fırsattır!</p>`,
    meta_title: "Sosyal Medya Yönetimi",
    meta_description:
      "Merhaba! Mavi Tik Medya Ajansı olarak, sosyal medyanın gücün kullanarak markanızı daha görünür ve etkileşimli hale getirmenize yardımcı olmak için buradayız!",
    image: {
      src: "/hizmetler/sosyal-medya.webp",
      alt: "Sosyal Medya Yönetimi",
      className: "w-full",
      position: "top",
    },
  },
  "e-ticaret-pazaryeri-danismanligi": {
    meta_title: "E-Ticaret Pazaryeri Danışmanlığı",
    meta_description:
      "E-ticaret ve Pazar Yeri Danışmanlığı ile İşinizi Online' da Zirveye Taşıyın!",
    title:
      "E-ticaret ve Pazar Yeri Danışmanlığı ile İşinizi Online' da Zirveye Taşıyın!",
    description: `
      <p>Merhaba! Mavi Tik Medya Ajansı olarak, e-ticaret d&uuml;nyasında başarılı olmanız ve işinizi b&uuml;y&uuml;tmeniz i&ccedil;in size yol arkadaşlığı yapmaya hazırız! G&uuml;n&uuml;m&uuml;zde, online alışverişin y&uuml;kselişiyle birlikte, e-ticaret ve pazar yerleri işletmeler i&ccedil;in b&uuml;y&uuml;k fırsatlar sunuyor. Ancak, bu rekabet&ccedil;i ortamda &ouml;ne &ccedil;ıkmak, doğru stratejileri belirlemek ve uzman bilgisi gerektirir.Trendyol, GittiGidiyor, Hepsiburada, n11, Amazon, ePttAVM ve daha faziası i&ccedil;in danışmanlık hizmeti almak ka&ccedil;ınılmaz oluyor.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! E-ticaret Danışmanlığı ve Pazar Yeri Danışmanlığı hizmetlerimiz ile markanızın online başarısı i&ccedil;in size &ouml;zel &ccedil;&ouml;z&uuml;mler sunuyoruz.</p><br/>
<p>Haydi, Online'da İşinizi B&uuml;y&uuml;telim!</p><br/>
<p>E-ticaret Danışmanlığı ve Pazar Yeri Danışmanlığı hizmetlerimiz ile markanızı online platformlarda daha g&uuml;&ccedil;l&uuml; bir konuma getirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, e-ticaret gelecektir!</p>
      `,
    image: {
      src: "/hizmetler/e-ticaret.webp",
      alt: "E-Ticaret Pazaryeri Danışmanlığı",
      className: "w-full",
      position: "top",
    },
  },
  "grafik-tasarimi": {
    meta_title: "Grafik Tasarımı",
    meta_description:
      "Markanızın Hikayesini Renklerle ve Çizgilerle Anlatalım!",
    title: "Markanızın Hikayesini Renklerle ve Çizgilerle Anlatalım!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, markanızın g&ouml;rsel kimliğini g&uuml;&ccedil;lendirmek ve dikkat &ccedil;ekici tasarımlar oluşturmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, g&ouml;rsel iletişim, markanızın m&uuml;şterilerle etkileşim kurmasında ve akılda kalıcı bir izlenim bırakmasında kritik bir rol oynuyor. Logo tasarımından broş&uuml;rlere, web sitesi grafiklerinden sosyal medya paylaşımlarına kadar her t&uuml;rl&uuml; g&ouml;rsel materyal, markanızın kişiliğini ve değerlerini yansıtmalıdır.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Grafik Tasarımı hizmetimiz ile markanızın ihtiya&ccedil;larına uygun, &ouml;zg&uuml;n, kreatif ve profesyonel tasarımlar &uuml;retiyoruz.</p><br/>
<p>Haydi, Markanızı G&ouml;rsel Olarak G&uuml;&ccedil;lendirin!</p><br/>
<p>Grafik Tasarımı hizmetimiz ile markanızın g&ouml;rsel kimliğini g&uuml;&ccedil;lendirmek ve dikkat &ccedil;ekici tasarımlar oluşturmak i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, bir g&ouml;rsel bin kelimeye bedeldir!</p>
    `,
    image: {
      src: "/hizmetler/grafik-tasarimi.webp",
      alt: "Grafik Tasarımı",
      className: "w-full",
      position: "top",
    },
  },
  "seo-arama-motoru-optimizasyonu": {
    meta_title: "SEO (Arama Motoru Optimizasyonu)",
    meta_description: "Web Sitenizi Arama Motorlarında Zirveye Taşıyalım!",
    title: "Web Sitenizi Arama Motorlarında Zirveye Taşıyalım!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, web sitenizin dijital d&uuml;nyada daha g&ouml;r&uuml;n&uuml;r ve başarılı olmasına yardımcı olmak i&ccedil;in buradayız!</p><br/>
<p>G&uuml;n&uuml;m&uuml;zde, internet kullanıcıları aradıkları &uuml;r&uuml;nleri, hizmetleri veya bilgileri bulmak i&ccedil;in arama motorlarını (Google, Yandex vb.) kullanıyor. Web sitenizin arama sonu&ccedil;larında &uuml;st sıralarda yer alması, potansiyel m&uuml;şterilerinizin sizi kolayca bulmasını ve web sitenize daha fazla trafik &ccedil;ekmenizi sağlar.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Arama Motoru Optimizasyonu (SEO) hizmetimiz ile web sitenizin arama motorlarında daha &uuml;st sıralarda yer almasını sağlayarak markanızın dijital d&uuml;nyadaki g&uuml;c&uuml;n&uuml; artırıyoruz.</p><br/>
<p>Haydi, Web Sitenizi Keşfedin!</p><br/>
<p>Arama Motoru Optimizasyonu (SEO) hizmetimiz ile web sitenizi arama motorlarında daha g&ouml;r&uuml;n&uuml;r hale getirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, SEO bir yatırımdır ve uzun vadede size b&uuml;y&uuml;k kazan&ccedil;lar sağlar!</p>
    `,
    image: {
      src: "/hizmetler/seo.webp",
      alt: "SEO (Arama Motoru Optimizasyonu)",
      className: "w-full",
      position: "top",
    },
  },
  "google-ads-google-reklam-yonetimi": {
    meta_title: "Google ADS (Google Reklam Yönetimi)",
    meta_description:
      "İşletmenizin Google'da Yıldız Gibi Parlamasını Sağlıyoruz!",
    title: "İşletmenizin Google'da Yıldız Gibi Parlamasını Sağlıyoruz!",
    description: `
    <p>Merhaba! Google, arama motoru devi olarak işletmenizin potansiyel m&uuml;şterilerine ulaşması i&ccedil;in muazzam bir fırsat sunuyor. Ancak, Google Reklamları'nın (eski adıyla AdWords) karmaşık d&uuml;nyasında kaybolmak ve b&uuml;t&ccedil;enizi boşa harcamak da m&uuml;mk&uuml;n. İşte tam da bu noktada, Mavi Tik Medya olarak size yardımcı olmak i&ccedil;in buradayız!</p><br/>
<p>Biz, Google Reklamları konusunda uzman ve deneyimli bir ekibiz. Amacımız, işletmenizin hedeflerine ulaşmasını sağlayacak etkili reklam kampanyaları oluşturmak ve y&ouml;netmek. Sadece tıklamalarla değil, ger&ccedil;ek m&uuml;şterilerle ve d&ouml;n&uuml;ş&uuml;mlerle ilgileniyoruz.</p><br/>
<p>Google'da Yıldız Gibi Parlamaya Hazır mısınız?</p><br/>
<p>İşletmenizin Google'da nasıl parlayacağını konuşmak i&ccedil;in bize ulaşın. Sizinle tanışmak ve markanızı daha yakından tanımak i&ccedil;in sabırsızlanıyoruz. Birlikte, Google'da başarıya doğru yolculuğa &ccedil;ıkalım!</p><br/>
<p>Mavi Tik Medya - Google Reklamlarında G&uuml;venilir Partneriniz</p>
    `,
    image: {
      src: "/hizmetler/google-reklam.webp",
      alt: "Google ADS (Google Reklam Yönetimi)",
      className: "w-full",
      position: "top",
    },
  },
  "meta-reklam-yonetimi-facebook-ve-instagram": {
    meta_title: "Meta Reklam Yönetimi (Facebook ve İnstagram)",
    meta_description: "Meta Reklam Yönetimi ile İşletmenizi Yükseğe Uçurun!",
    title: "Meta Reklam Yönetimi ile İşletmenizi Yükseğe Uçurun!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, işletmenizin dijital d&uuml;nyada parlamasına yardımcı olmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, sosyal medya platformları işinizi b&uuml;y&uuml;tmek ve potansiyel m&uuml;şterilere ulaşmak i&ccedil;in harika bir fırsat sunuyor. &Ouml;zellikle Meta platformları (Facebook ve Instagram), milyonlarca kullanıcısıyla markanız i&ccedil;in eşsiz bir vitrin olabilir.</p><br/>
<p>Ancak, bu platformlarda etkili bir şekilde reklam vermek, doğru stratejileri ve uzman bilgisi gerektirir. İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Meta Reklam Y&ouml;netimi hizmetimiz ile markanızın hedeflerine ulaşmasına yardımcı oluyoruz.</p><br/>
<p>Haydi, İşletmenizi Birlikte B&uuml;y&uuml;telim!</p><br/>
<p>Meta Reklam Y&ouml;netimi hizmetimiz ile markanızı daha geniş kitlelere ulaştırmak ve işinizi b&uuml;y&uuml;tmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, mavi tik sadece sosyal medyada değil, işinizde de olsun!</p>
    `,
    image: {
      src: "/hizmetler/meta-reklam.webp",
      alt: "Meta Reklam Yönetimi (Facebook ve İnstagram)",
      className: "w-full",
      position: "top",
    },
  },
  "icerik-uretimi": {
    meta_title: "İçerik Üretimi",
    meta_description: "İçeriklerinizle Fark Atın, Markanızı Öne Çıkarın!",
    title: "İçeriklerinizle Fark Atın, Markanızı Öne Çıkarın!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, markanızın hikayesini etkili bir şekilde anlatmanıza ve hedef kitlenizle bağ kurmanıza yardımcı olmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, i&ccedil;erik pazarlaması, markanızın b&uuml;y&uuml;mesi ve başarısı i&ccedil;in kritik &ouml;neme sahip. Doğru ve etkili i&ccedil;erikler sayesinde potansiyel m&uuml;şterilerinizin ilgisini &ccedil;ekebilir, marka bilinirliğinizi artırabilir ve satışlarınızı y&uuml;kseltebilirsiniz.</p><br/>
<p>Ancak, kaliteli i&ccedil;erik &uuml;retmek ve bunları doğru kanallarda yayınlamak zaman ve uzmanlık gerektirir. İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! İ&ccedil;erik Y&ouml;netimi hizmetimiz ile markanızın ihtiya&ccedil;larına uygun, &ouml;zg&uuml;n ve etkili i&ccedil;erikler &uuml;retiyor ve y&ouml;netiyoruz.</p><br/>
<p>Haydi, İ&ccedil;eriklerinizle Konuşulun!</p><br/>
<p>İ&ccedil;erik Y&ouml;netimi hizmetimiz ile markanızın sesini duyurmak ve hedef kitlenizle etkileşim kurmak i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, i&ccedil;erik kraldır!</p>`,
    image: {
      src: "/hizmetler/icerik-yonetimi.webp",
      alt: "İçerik Üretimi",
      className: "float-right lg:max-w-[25%]",
      position: "inner",
    },
  },
  "urun-cekimleri": {
    meta_title: "Ürün Çekimleri",
    meta_description:
      "Ürünlerinizi ve İşletmenizi Gökyüzünden ve Yerden Göz Kamaştırıcı Hale Getirin!",
    title:
      "Ürünlerinizi ve İşletmenizi Gökyüzünden ve Yerden Göz Kamaştırıcı Hale Getirin!",
    description: `
      <p>Merhaba! Mavi Tik Medya Ajansı olarak, &uuml;r&uuml;nlerinizin ve işletmenizin en iyi şekilde tanıtılmasına yardımcı olmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde, g&ouml;rsel i&ccedil;eriklerin g&uuml;c&uuml; yadsınamaz. Kaliteli &uuml;r&uuml;n fotoğrafları ve etkileyici drone &ccedil;ekimleri, markanızın imajını g&uuml;&ccedil;lendirmek, m&uuml;şterilerinizin ilgisini &ccedil;ekmek ve satışlarınızı artırmak i&ccedil;in harika bir fırsattır.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! &Uuml;r&uuml;n &Ccedil;ekimleri ve Drone &Ccedil;ekimleri hizmetlerimiz ile markanızın ihtiya&ccedil;larına uygun, profesyonel ve g&ouml;z kamaştırıcı i&ccedil;erikler &uuml;retiyoruz.</p><br/>
<p>Haydi, G&ouml;rsellerinizle Konuşulun!</p><br/>
<p>&Uuml;r&uuml;n &Ccedil;ekimleri ve Drone &Ccedil;ekimleri hizmetlerimiz ile markanızı ve &uuml;r&uuml;nlerinizi daha &ccedil;ekici hale getirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, bir fotoğraf bin kelimeye bedeldir!</p>
      `,
    image: {
      src: "/hizmetler/urun-cekimleri.webp",
      alt: "Ürün Çekimleri",
      className: "float-right lg:max-w-[25%]",
      position: "inner",
    },
  },
  instagram: {
    meta_title: "Instagram",
    meta_description: "Instagram ‘da Fenomen Olmanın Tam Zamanı!",
    title: "Instagram ‘da Fenomen Olmanın Tam Zamanı!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, Instagram &lsquo;da parlamanız ve hayallerinizi ger&ccedil;ekleştirmeniz i&ccedil;in size &ouml;zel bir fırsat sunuyoruz! G&uuml;n&uuml;m&uuml;zde Instagram, milyonlarca kullanıcısıyla markalar ve bireyler i&ccedil;in b&uuml;y&uuml;k bir potansiyel taşıyor. Ancak, bu platformda &ouml;ne &ccedil;ıkmak, dikkat &ccedil;ekmek ve takip&ccedil;i kitlenizi b&uuml;y&uuml;tmek i&ccedil;in doğru stratejilere ve uzman desteğine ihtiyacınız var.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Instagram Influencer Danışmanlığı hizmetimiz ile size &ouml;zel bir yol haritası &ccedil;iziyor, potansiyelinizi ortaya &ccedil;ıkarıyor ve Instagram &lsquo;da zirveye ulaşmanıza yardımcı oluyoruz.</p><br/>
<p>Haydi, Instagram&rsquo; da Yıldızlaşın!</p><br/>
<p>Instagram Influencer Danışmanlığı hizmetimiz ile Instagram &lsquo;da fenomen olmak ve hayallerinizi ger&ccedil;ekleştirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, Instagram sizin i&ccedil;in bir fırsat!</p>
    `,
    image: {
      src: "/hizmetler/instagram.webp",
      alt: "Instagram",
      className: "w-full",
      position: "top",
    },
  },
  youtube: {
    meta_title: "Youtube",
    meta_description: "YouTube'da Yıldız Olmaya Hazır mısınız?",
    title: "YouTube'da Yıldız Olmaya Hazır mısınız?",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, YouTube hayallerinizi ger&ccedil;ekleştirmenize ve kanalınızı zirveye taşımanıza yardımcı olmak i&ccedil;in buradayız! G&uuml;n&uuml;m&uuml;zde YouTube, milyonlarca kullanıcısıyla yeteneklerinizi sergilemek, ilgi alanlarınızı paylaşmak ve geniş kitlelere ulaşmak i&ccedil;in harika bir platform sunuyor. Ancak, YouTube'da başarılı olmak, dikkat &ccedil;ekmek ve abone kitlenizi b&uuml;y&uuml;tmek i&ccedil;in doğru stratejilere ve uzman desteğine ihtiyacınız var.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! YouTuber'lık Danışmanlığı hizmetimiz ile size &ouml;zel bir yol haritası &ccedil;iziyor, potansiyelinizi ortaya &ccedil;ıkarıyor ve YouTube'da parlamanıza yardımcı oluyoruz.</p><br/>
<p>Haydi, YouTube'da Yıldızlaşın!</p><br/>
<p>YouTuber'lık Danışmanlığı hizmetimiz ile YouTube'da fenomen olmak ve hayallerinizi ger&ccedil;ekleştirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, YouTube sizin i&ccedil;in bir fırsat!</p>`,
    image: {
      src: "/hizmetler/youtube.webp",
      alt: "Youtube",
      className: "w-full",
      position: "top",
    },
  },
  "tik-tok": {
    meta_title: "Tik Tok",
    meta_description: "Tik Tok'ta Trendleri Yakalayın, Fenomen Olun!",
    title: "Tik Tok'ta Trendleri Yakalayın, Fenomen Olun!",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, Tik Tok d&uuml;nyasında dikkat &ccedil;ekmeniz, takip&ccedil;i kitlenizi b&uuml;y&uuml;tmeniz ve fenomen olmanız i&ccedil;in size &ouml;zel bir fırsat sunuyoruz! Tik Tok, kısa videoların ve yaratıcı i&ccedil;eriklerin paylaşıldığı, milyonlarca kullanıcısıyla markalar ve bireyler i&ccedil;in b&uuml;y&uuml;k bir potansiyel taşıyan dinamik bir platform. Ancak, bu platformda &ouml;ne &ccedil;ıkmak, dikkat &ccedil;ekmek ve takip&ccedil;i kitlenizi b&uuml;y&uuml;tmek i&ccedil;in doğru stratejilere ve uzman desteğine ihtiyacınız var.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Tik Toker'lık Danışmanlığı hizmetimiz ile size &ouml;zel bir yol haritası &ccedil;iziyor, potansiyelinizi ortaya &ccedil;ıkarıyor ve Tik Tok'ta zirveye ulaşmanıza yardımcı oluyoruz.</p><br/>
<p>Haydi, Tik Tok'ta Yıldızlaşın!</p><br/>
<p>TikToker'lık Danışmanlığı hizmetimiz ile Tik Tok'ta fenomen olmak ve hayallerinizi ger&ccedil;ekleştirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, TikTok sizin i&ccedil;in bir fırsat!</p>`,
    image: {
      src: "/hizmetler/tiktok.webp",
      alt: "Tik Tok",
      className: "w-full",
      position: "top",
    },
  },
  bigo: {
    meta_title: "Bigo",
    meta_description: "Canlı Yayınlarda Yıldızlaşmaya Hazır mısınız?",
    title: "Canlı Yayınlarda Yıldızlaşmaya Hazır mısınız?",
    description: `
    <p>Merhaba! Mavi Tik Medya Ajansı olarak, canlı yayın platformlarında parlamanız ve hayallerinizi ger&ccedil;ekleştirmeniz i&ccedil;in size yol arkadaşlığı yapmaya hazırız!&nbsp;</p><br/>
<p>Bigo, YouTube Live, Tik Tok, Instagram Live gibi canlı yayın platformları, yeteneklerinizi sergilemek, ilgi alanlarınızı paylaşmak ve geniş kitlelere ulaşmak i&ccedil;in harika bir fırsat sunuyor. Ancak, canlı yayınlarda başarılı olmak, dikkat &ccedil;ekmek ve izleyici kitlenizi b&uuml;y&uuml;tmek i&ccedil;in doğru stratejilere ve uzman desteğine ihtiyacınız var.</p><br/>
<p>İşte tam da bu noktada Mavi Tik Medya Ajansı devreye giriyor! Canlı Yayıncılık Danışmanlığı hizmetimiz ile size &ouml;zel bir yol haritası &ccedil;iziyor, potansiyelinizi ortaya &ccedil;ıkarıyor ve canlı yayınlarda parlamanıza yardımcı oluyoruz.</p><br/>
<p>Haydi, Canlı Yayınlarda Fark Yaratın!</p><br/>
<p>Canlı Yayıncılık Danışmanlığı hizmetimiz ile canlı yayın platformlarında yıldız gibi parlamak ve hayallerinizi ger&ccedil;ekleştirmek i&ccedil;in bizimle iletişime ge&ccedil;in. Mavi Tik Medya Ajansı olarak, size en iyi hizmeti sunmaktan memnuniyet duyarız!</p><br/>
<p>Unutmayın, canlı yayınlar sizin i&ccedil;in bir fırsat!</p>`,
    image: {
      src: "/hizmetler/bigo.webp",
      alt: "Bigo",
      className: "float-right lg:max-w-[25%] ",
      position: "inner",
    },
  },
  "misyonumuz-vizyonumuz-hedeflerimiz": {
    title: "Misyonumuz",
    description: `<div> <h1 class="text-3xl font-bold text-primary my-4" id="misyonumuz"> Misyonumuz </h1> <div> Biz, Mavi Tik Medya Ajansında, sadece bir dijital medya ajansı değil, aynı zamanda hayallerinizi gerçeğe dönüştürmek için yanınızda yürüyen bir ekibiz. Her markanın ve her bireyin kendine özgü bir hikayesi olduğuna inanıyoruz. Amacımız, bu hikayeleri dijital dünyanın renkli ve dinamik dünyasında en etkili şekilde anlatmanıza yardımcı olmak. </div> </div> <div> <h1 class="text-3xl font-bold text-primary my-4" id="vizyonumuz"> Vizyonumuz </h1> <div> Mavi Tik Medya Ajansı olarak, dijital dünyanın sürekli değişen ve gelişen yapısında, markaların ve bireylerin potansiyellerini en üst düzeye çıkarmalarına öncülük etmek istiyoruz. Amacımız, sadece bugünün değil, geleceğin dijital trendlerini de öngörerek, müşterilerimize her zaman en yenilikçi ve etkili çözümleri sunmak. </div> </div> <div> <h1 class="text-3xl font-bold text-primary my-4" id="hedeflerimiz"> Hedeflerimiz </h1> <div> <ul style="list-style-type: disc"> <li> İnovasyonda ilham vermek: Her projeye taze bir bakış a&ccedil;ısı ve &ouml;zg&uuml;n fikirlerle yaklaşıyoruz. </li> <li> Teknolojiyle g&uuml;&ccedil;lendirmek: En son dijital ara&ccedil;ları ve trendleri kullanarak markanızı geleceğe taşıyoruz. </li> <li> İletişimle bağ kurmak: Sizinle s&uuml;rekli iletişim halinde kalarak, ihtiya&ccedil;larınızı ve beklentilerinizi en iyi şekilde anlıyoruz. </li> <li> Sonu&ccedil;larla fark yaratmak: Başarınızı &ouml;nemsiyoruz ve &ouml;l&ccedil;&uuml;lebilir sonu&ccedil;larla hedeflerinize ulaşmanızı sağlıyoruz. </li> </ul> <br /> <p> Mavi Tik Medya Ajansı olarak, dijital dünyada iz bırakmanız için size ilham veriyor, yol gösteriyor ve destek oluyoruz. Çünkü biz, sadece işimizi değil, sizin başarınızı da seviyoruz! </p> </div> </div> <div> <h1 class="text-3xl font-bold text-primary my-4" id="hayallerimiz"> Hayallerimiz </h1> <div> Mavi Tik Medya Ajansı olarak hayallerimiz; <ul style="list-style-type: disc"> <li> Dijital d&uuml;nyada lider olmak: Yaratıcılığımız, teknolojimiz ve uzmanlığımızla sekt&ouml;rde &ouml;nc&uuml; bir konuma ulaşmak. </li> <li> Markaları geleceğe taşımak: M&uuml;şterilerimizin dijital hedeflerine ulaşmalarını sağlayarak, onların uzun vadeli başarılarına katkıda bulunmak. </li> <li> İlham veren bir topluluk oluşturmak: &Ccedil;alışanlarımızla, m&uuml;şterilerimizle ve iş ortaklarımızla birlikte, dijital d&uuml;nyada ilham veren bir topluluk oluşturmak. </li> <li> S&uuml;rekli gelişmek ve &ouml;ğrenmek: Dijital d&uuml;nyanın dinamik yapısını takip ederek, s&uuml;rekli &ouml;ğrenmek ve gelişmek. </li> </ul> <br /> <p> Mavi Tik Medya Ajansı olarak, dijital dünyada iz bırakacak işler yaparak, markaların ve bireylerin hayallerini gerçekleştirmelerine destek olmak için çalışıyoruz. Çünkü biz, sadece işimizi değil, sizin başarınızı da hayal ediyoruz! </p> </div> </div>`,
    meta_title: "Misyonumuz Vizyonumuz Hedeflerimiz",
    meta_description:
      "Misyonumuz Biz, Mavi Tik Medya Ajansında, sadece bir dijital medya ajansı değil, aynı zamanda hayallerinizi gerçeğe dönüştürmek için yanınızda yürüyen bir ekibiz. Her markanın ve her bireyin kendine özgü bir hikayesi olduğuna inanıyoruz. Amacımız, bu hikayeleri dijital dünyanın renkli ve dinamik dünyasında en etkili şekilde anlatmanıza yardımcı olmak.",
    image: {
      src: "/misyon-vizyon.png",
      alt: "Misyon Vizyon",
      className: "w-full",
      position: "top",
    },
  },
};

export const blogContents: Record<string, PageContent> = {
  "2025-yili-dijital-pazarlama-trendleri": {
    title: "2025 Yılı Dijital Pazarlama Trendleri",
    meta_title: "2025 Yılı Dijital Pazarlama Trendleri",
    meta_description:
      "2025'ün Dijital Pazarlama Trendleri: Bu yazıda, yapay zekâ, artırılmış gerçeklik, kısa videolar, kişiselleştirilmiş deneyimler gibi 2025'te öne çıkacak dijital pazarlama trendlerini ele alıyoruz.",
    description: `<p>2025'&uuml;n Dijital Pazarlama Trendleri: Bu yazıda, yapay zek&acirc;, artırılmış ger&ccedil;eklik, kısa videolar, kişiselleştirilmiş deneyimler gibi 2025'te &ouml;ne &ccedil;ıkacak dijital pazarlama trendlerini ele alıyoruz.&nbsp;</p><br/>
<ul style="list-style-type: disc;">
<li>Sosyal Medya Algoritmalarındaki Değişiklikler: Sosyal medya platformları algoritmalarını s&uuml;rekli olarak değiştiriyor. Dijital d&uuml;nyada var olabilmek son değişiklikleri ve bu değişikliklere uyum sağlaması gerekmektedir.</li>
<li>Veri Odaklı Pazarlama: Veri analizi, pazarlama stratejilerinin belirlenmesinde ve optimize edilmesinde giderek daha &ouml;nemli hale geliyor.&nbsp;</li>
<li>İ&ccedil;erik Pazarlaması: Hedef kitlenizin ilgisini &ccedil;ekecek, değerli bilgiler sunacak ve markanızı &ouml;ne &ccedil;ıkaracak i&ccedil;erikler oluşturmanın stratejisinin belirlenmesi gerekmektedir. Başlık se&ccedil;imi, i&ccedil;erik yazımı, g&ouml;rsel kullanımı gibi konulara i&ccedil;erik pazarlamasında &ouml;nemli rol oynamaktadır.</li>
<li>SEO (Arama Motoru Optimizasyonu): Seo uyumlu i&ccedil;eriklerin oluşturulması&nbsp;ve SEO nun dikkatli ve bilin&ccedil;li kullanılması y&uuml;kselen trendler arasında yerini almaktadır.</li>
<li>Kullanıcı Dostu Web Tasarımı: Kullanıcı dostu bir web sitesi, ziyaret&ccedil;ilerin sitenizde daha uzun s&uuml;re kalmasını ve istedikleri bilgilere kolayca ulaşmasını sağlar.&nbsp;</li>
<li>Yapay Zeka (Ai) ve Makine &Ouml;ğrenimi: YZ ve makine &ouml;ğrenimi, pazarlamacıların m&uuml;şteri davranışlarını daha iyi anlamalarına, kişiselleştirilmiş deneyimler sunmalarına ve kampanyalarını optimize etmelerine yardımcı oluyor. 2025'te Ai destekli pazarlama ara&ccedil;larının daha da yaygınlaşması bekleniyor.</li>
</ul>
<p>Bu trendler, 2025 yılında dijital pazarlamanın nasıl şekilleneceği hakkında genel bir fikir veriyor. Ancak dijital d&uuml;nya s&uuml;rekli değiştiği i&ccedil;in pazarlamacıların yenilikleri takip etmesi ve stratejilerini buna g&ouml;re uyarlaması gerekiyor.</p><br/>`,
    image: {
      src: "/blog/2025-dijital.webp",
      alt: "2025 Dijital Pazarlama Trendleri",
      className: "w-full",
      position: "top",
    },
  },
  "eticaret-web-siteleri-icin-ipuclari": {
    title: "E-Ticaret Web Siteleri İçin İpuçları",
    meta_title: "E-Ticaret Web Siteleri İçin İpuçları",
    meta_description:
      "Günümüzde e-ticaret, işletmeler için büyük bir fırsat sunuyor. Ancak rekabetin yoğun olduğu bu alanda başarılı olmak için dikkat etmeniz gereken bazı önemli noktalar var. İşte e-ticaret web sitenizi geliştirmenize ve satışlarınızı artırmanıza yardımcı olacak bazı ipuçları",
    description: `<p>E-ticaret Web Siteleri İ&ccedil;in İpu&ccedil;ları: Online Başarınızın Anahtarı</p><br/>
<p>G&uuml;n&uuml;m&uuml;zde e-ticaret, işletmeler i&ccedil;in b&uuml;y&uuml;k bir fırsat sunuyor. Ancak rekabetin yoğun olduğu bu alanda başarılı olmak i&ccedil;in dikkat etmeniz gereken bazı &ouml;nemli noktalar var. İşte e-ticaret web sitenizi geliştirmenize ve satışlarınızı artırmanıza yardımcı olacak bazı ipu&ccedil;ları:</p><br/>
<ol>
<li>Kullanıcı Dostu Bir Web Sitesi Tasarımı</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Basit ve Anlaşılır Navigasyon: Ziyaret&ccedil;ileriniz, aradıkları &uuml;r&uuml;nleri veya bilgileri hızlıca bulabilmelidir.</li>
<li>Mobil Uyumlu Tasarım: Web siteniz, t&uuml;m cihazlarda (telefon, tablet, bilgisayar) sorunsuz bir şekilde &ccedil;alışmalıdır.</li>
<li>Hızlı Y&uuml;kleme S&uuml;resi: Web sitenizin hızlı a&ccedil;ılması, ziyaret&ccedil;ilerinizin sabrını zorlamamanız a&ccedil;ısından &ouml;nemlidir.</li>
<li>Arama İşlevi: Web sitenizde bir arama işlevi bulunması, ziyaret&ccedil;ilerinizin aradıkları &uuml;r&uuml;nlere daha hızlı ulaşmasına yardımcı olur.</li>
</ul>
<ol start="2">
<li>&Uuml;r&uuml;nlerinizi Etkili Bir Şekilde Tanıtın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Y&uuml;ksek Kaliteli Fotoğraflar: &Uuml;r&uuml;nlerinizin net ve detaylı fotoğraflarını kullanın.</li>
<li>Detaylı &Uuml;r&uuml;n A&ccedil;ıklamaları: &Uuml;r&uuml;nlerinizin &ouml;zelliklerini, faydalarını ve kullanım şeklini a&ccedil;ıklayan detaylı a&ccedil;ıklamalar yazın.</li>
<li>M&uuml;şteri Yorumları: M&uuml;şteri yorumları, potansiyel m&uuml;şterilerin &uuml;r&uuml;nlerinize g&uuml;venmesini sağlar.</li>
<li>Video İ&ccedil;erikler: &Uuml;r&uuml;nlerinizi tanıtan veya kullanım şeklini g&ouml;steren videolar, m&uuml;şterilerin ilgisini &ccedil;eker ve satın alma kararlarını etkiler.</li>
</ul>
<ol start="3">
<li>G&uuml;venli ve &Ccedil;eşitli &Ouml;deme Se&ccedil;enekleri Sunun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>G&uuml;venli &Ouml;deme Sistemi: M&uuml;şterilerinizin kredi kartı bilgilerini koruyan g&uuml;venli bir &ouml;deme sistemi kullanın.</li>
<li>&Ccedil;eşitli &Ouml;deme Se&ccedil;enekleri: Kredi kartı, banka havalesi, kapıda &ouml;deme gibi farklı &ouml;deme se&ccedil;enekleri sunarak m&uuml;şterilerinize kolaylık sağlayın.</li>
</ul>
<ol start="4">
<li>Hızlı ve G&uuml;venilir Kargo Hizmeti Sunun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Hızlı Kargo: M&uuml;şterilerinizin siparişlerini en kısa s&uuml;rede ve g&uuml;venli bir şekilde teslim edin.</li>
<li>Kargo Takibi: M&uuml;şterilerinize siparişlerini takip etme imk&acirc;nı sunun.</li>
<li>&Uuml;cretsiz Kargo: Belli bir tutarın &uuml;zerindeki alışverişlerde &uuml;cretsiz kargo se&ccedil;eneği sunarak m&uuml;şterilerinizi teşvik edin.</li>
</ul>
<ol start="5">
<li>M&uuml;şteri Hizmetlerine &Ouml;nem Verin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Canlı Destek: Web sitenizde canlı destek hizmeti sunarak m&uuml;şterilerinizin sorularını anında yanıtlayın.</li>
<li>İade ve Değişim Kolaylığı: M&uuml;şterilerinize iade ve değişim konusunda kolaylık sağlayın.</li>
<li>M&uuml;şteri Geri Bildirimleri: M&uuml;şteri geri bildirimlerini dikkate alarak hizmetlerinizi geliştirin.</li>
</ul>
<ol start="6">
<li>Pazarlama Stratejileri Geliştirin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Sosyal Medya Pazarlaması: Sosyal medya platformlarında markanızı ve &uuml;r&uuml;nlerinizi tanıtın.</li>
<li>E-posta Pazarlaması: M&uuml;şterilerinize &ouml;zel indirimler ve kampanyalar sunan e-postalar g&ouml;nderin.</li>
<li>Arama Motoru Optimizasyonu (SEO): Web sitenizi arama motorlarında &uuml;st sıralarda yer alacak şekilde optimize edin.</li>
<li>İ&ccedil;erik Pazarlaması: Blog yazıları, makaleler veya videolar gibi değerli i&ccedil;erikler &uuml;reterek m&uuml;şterilerin ilgisini &ccedil;ekin.</li>
</ul>
<ol start="7">
<li>Analiz ve İyileştirme</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Web Sitesi Analitiği: Web sitenizin performansını (ziyaret&ccedil;i sayısı, d&ouml;n&uuml;ş&uuml;m oranı vb.) d&uuml;zenli olarak takip edin.</li>
<li>M&uuml;şteri Davranışları: M&uuml;şterilerinizin web sitenizdeki davranışlarını analiz ederek iyileştirme alanlarını belirleyin.</li>
<li>Rekabet Analizi: Rakiplerinizin web sitelerini ve pazarlama stratejilerini analiz ederek kendi stratejilerinizi geliştirin.</li>
</ul>
<p>Bu ipu&ccedil;larını uygulayarak e-ticaret web sitenizi daha başarılı hale getirebilir ve satışlarınızı artırabilirsiniz. Unutmayın, e-ticaret s&uuml;rekli gelişen bir alan. Bu nedenle, yenilikleri takip etmeniz ve stratejilerinizi buna g&ouml;re uyarlamanız &ouml;nemlidir.</p><br/>`,
    image: {
      src: "/blog/e-ticaret.webp",
      alt: "E-Ticaret Web Siteleri İçin İpuçları",
      className: "float-right",
      position: "inner",
    },
  },
  "tik-tokta-viral-olmanin-sirlari": {
    title: "Tik Tok'ta Viral Olmanın Sırları",
    meta_title: "Tik Tok'ta Viral Olmanın Sırları",
    meta_description:
      "Tik Tok, günümüzün en popüler sosyal medya platformlarından biri olarak, kısa ve eğlenceli videolarıyla milyonlarca kullanıcıyı cezbediyor. Ancak Tik Tok'ta sadece video yayınlamak yeterli değil. Viral olmak, yani videolarınızın milyonlarca kişi tarafından izlenmesi ve paylaşılması, doğru stratejiler ve yaratıcılık gerektiriyor.",
    description: `<p>Tik Tok'ta Viral Olmanın Sırları: Kısa Videolarla B&uuml;y&uuml;k Etki Yaratmak</p><br/>
<p>Tik Tok, g&uuml;n&uuml;m&uuml;z&uuml;n en pop&uuml;ler sosyal medya platformlarından biri olarak, kısa ve eğlenceli videolarıyla milyonlarca kullanıcıyı cezbediyor. Ancak Tik Tok'ta sadece video yayınlamak yeterli değil. Viral olmak, yani videolarınızın milyonlarca kişi tarafından izlenmesi ve paylaşılması, doğru stratejiler ve yaratıcılık gerektiriyor. İşte Tik Tok'ta viral olmanın sırları:</p><br/>
<ol>
<li>Trendleri Takip Edin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>TikTok'ta viral olmanın en &ouml;nemli yollarından biri, platformdaki trendleri yakından takip etmektir.</li>
</ul>
<ol start="2">
<li>İnovatif ve &Ouml;zg&uuml;n Olun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Sıra dışı fikirler &uuml;retin, farklı i&ccedil;erik formatlarını deneyin ve kendi tarzınızı oluşturun.</li>
</ul>
<ol start="3">
<li>Kaliteli İ&ccedil;erik &Uuml;retin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Y&uuml;ksek &ccedil;&ouml;z&uuml;n&uuml;rl&uuml;kl&uuml; videolar &ccedil;ekin, iyi bir ışıklandırma kullanın ve videolarınızı d&uuml;zenlerken &ouml;zen g&ouml;sterin. Ses kalitesine de dikkat edin. Videolarınızda net ve anlaşılır bir ses olmalıdır.</li>
</ul>
<ol start="4">
<li>Etkileşim Kurun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Tik Tok'ta sadece video yayınlamakla kalmayın, aynı zamanda izleyicilerinizle etkileşim kurun. Yorumlara yanıt verin, sorularını &ccedil;&ouml;z&uuml;n ve onlarla sohbet edin.</li>
</ul>
<ol start="5">
<li>Hashtag'leri Doğru Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Hashtag'ler, videolarınızın keşfedilmesine yardımcı olur. Videolarınızla ilgili pop&uuml;ler ve alakalı hashtag'ler kullanın.</li>
</ul>
<ol start="6">
<li>Doğru Zamanda Paylaşım Yapın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Tik Tok'ta videolarınızı doğru zamanda paylaşmak, daha fazla kişiye ulaşmanızı sağlar. İzleyicilerinizin en aktif olduğu saatleri belirlemek i&ccedil;in Tik Tok analiz ara&ccedil;larını kullanabilirsiniz.</li>
</ul>
<ol start="7">
<li>Diğer Sosyal Medya Platformlarında Tanıtım Yapın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Tik Tok videolarınızı diğer sosyal medya platformlarında da tanıtarak daha fazla kişiye ulaşabilirsiniz.</li>
</ul>
<ol start="8">
<li>Sabırlı ve İstikrarlı Olun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Tik Tok'ta viral olmak zaman ve sabır gerektirir. D&uuml;zenli olarak i&ccedil;erik &uuml;retmeye, etkileşim kurmaya ve stratejinizi geliştirmeye devam edin.</li>
</ul>
<p>Ek İpu&ccedil;ları</p><br/>
<ul style="list-style-type: disc;">
<li>M&uuml;zik Kullanımına Dikkat Edin: Tik Tok'ta pop&uuml;ler olan m&uuml;zikleri kullanarak videolarınızı daha dikkat &ccedil;ekici hale getirebilirsiniz.</li>
<li>Challenge'lara Katılın: Tik Tok'ta d&uuml;zenlenen challenge'lara katılarak videolarınızın daha fazla kişi tarafından g&ouml;r&uuml;lmesini sağlayabilirsiniz.</li>
<li>D&uuml;zenli Olarak Canlı Yayın Yapın: Canlı yayınlar yaparak izleyicilerinizle doğrudan etkileşim kurabilir ve takip&ccedil;i kitlenizi b&uuml;y&uuml;tebilirsiniz.</li>
<li>TikTok Topluluğuna Katılın: Diğer TikTok kullanıcılarıyla etkileşim kurarak ve topluluğa katkıda bulunarak daha fazla kişiye ulaşabilirsiniz.</li>
</ul>
<p>TikTok'ta viral olmak i&ccedil;in yukarıdaki ipu&ccedil;larını uygulayabilirsiniz. Ancak unutmayın ki her i&ccedil;erik farklıdır ve bazı videoların viral olması tamamen şans eseri olabilir. &Ouml;nemli olan, &ouml;zg&uuml;n ve kaliteli i&ccedil;erikler &uuml;retmeye devam etmek ve izleyicilerinizle etkileşim kurmaktır.</p><br/>`,
    image: {
      src: "/blog/tiktok.webp",
      alt: "Tik Tok'ta Viral Olmanın Sırları",
      className: "w-full",
      position: "top",
    },
  },
  "veri-odakli-dijital-pazarlama": {
    title: "Veri Odaklı Dijital Pazarlama",
    meta_title: "Veri Odaklı Dijital Pazarlama",
    meta_description:
      "Geleceğin Pazarlaması Günümüzün dijital çağında, pazarlama stratejileri artık sadece tahminlere veya sezgilere dayanmıyor. Veri odaklı dijital pazarlama, işletmelerin müşteri verilerini analiz ederek daha etkili ve kişiselleştirilmiş pazarlama kampanyaları oluşturmasına olanak tanıyor.",
    description: `
  <p>Geleceğin Pazarlaması G&uuml;n&uuml;m&uuml;z&uuml;n dijital &ccedil;ağında, pazarlama stratejileri artık sadece tahminlere veya sezgilere dayanmıyor. Veri odaklı dijital pazarlama, işletmelerin m&uuml;şteri verilerini analiz ederek daha etkili ve kişiselleştirilmiş pazarlama kampanyaları oluşturmasına olanak tanıyor. Bu yaklaşım, pazarlamacıların m&uuml;şterilerini daha iyi anlamalarına, doğru hedef kitleye ulaşmalarına ve pazarlama b&uuml;t&ccedil;elerini daha verimli kullanmalarına yardımcı oluyor.</p><br/>
<p>Veri Odaklı Pazarlamanın Temel Unsurları</p><br/>
<ul style="list-style-type: disc;">
<li>Veri Toplama: M&uuml;şteri verileri, web sitenizden, sosyal medya platformlarından, CRM sistemlerinden ve diğer kaynaklardan toplanabilir. Bu veriler, demografik bilgiler, davranışsal veriler, satın alma ge&ccedil;mişi, ilgi alanları gibi &ccedil;eşitli bilgileri i&ccedil;erebilir.</li>
<li>Veri Analizi: Toplanan veriler, &ouml;zel ara&ccedil;lar ve yazılımlar kullanılarak analiz edilir.</li>
<li>Strateji Geliştirme: Veri analizleri sonucunda elde edilen bilgiler, pazarlama stratejilerinin geliştirilmesinde kullanılır.</li>
<li>Kampanya Uygulama: Geliştirilen stratejiler doğrultusunda pazarlama kampanyaları uygulanır.</li>
<li>Performans &Ouml;l&ccedil;&uuml;m&uuml;: Kampanyaların performansı d&uuml;zenli olarak &ouml;l&ccedil;&uuml;l&uuml;r ve analiz edilir.</li>
</ul>
<p>Veri Odaklı Pazarlamanın Avantajları</p><br/>
<ul style="list-style-type: disc;">
<li>Daha İyi Hedefleme: M&uuml;şteri verileri sayesinde doğru hedef kitleye ulaşmak m&uuml;mk&uuml;n olur.</li>
<li>Kişiselleştirilmiş Deneyimler: M&uuml;şteri verileri, m&uuml;şterilere &ouml;zel i&ccedil;erik, &uuml;r&uuml;n &ouml;nerileri ve teklifler sunulmasını sağlar.</li>
<li>Daha Y&uuml;ksek D&ouml;n&uuml;ş&uuml;m Oranları: Veriye dayalı pazarlama stratejileri, daha etkili kampanyalar oluşturulmasına ve d&ouml;n&uuml;ş&uuml;m oranlarının artmasına yardımcı olur.</li>
<li>Daha İyi Karar Verme: Veri analizleri, pazarlamacıların daha doğru ve bilgiye dayalı kararlar vermesini sağlar.</li>
<li>Rekabet Avantajı: Veri odaklı pazarlama, işletmelere rakiplerine karşı bir avantaj sağlar.</li>
</ul>
<p>Veri Odaklı Pazarlamada Dikkat Edilmesi Gerekenler</p><br/>
<ul style="list-style-type: disc;">
<li>Veri Gizliliği: M&uuml;şteri verilerinin gizliliğine dikkat etmek ve yasal d&uuml;zenlemelere uymak &ouml;nemlidir.</li>
<li>Veri G&uuml;venliği: M&uuml;şteri verilerinin g&uuml;venliğini sağlamak ve yetkisiz erişimi engellemek gerekir.</li>
<li>Veri Kalitesi: Doğru ve g&uuml;venilir verilere sahip olmak, veri odaklı pazarlamanın başarısı i&ccedil;in kritiktir.</li>
<li>Veri Entegrasyonu: Farklı kaynaklardan toplanan verilerin entegre edilmesi ve anlamlı bir şekilde kullanılması gerekir.</li>
</ul>
<p>Veri odaklı dijital pazarlama, g&uuml;n&uuml;m&uuml;z&uuml;n rekabet&ccedil;i iş ortamında işletmelerin başarılı olması i&ccedil;in vazge&ccedil;ilmez bir yaklaşımdır. M&uuml;şteri verilerini doğru bir şekilde analiz ederek ve kullanarak, işletmeler daha etkili pazarlama kampanyaları oluşturabilir, m&uuml;şteri memnuniyetini artırabilir ve rekabet avantajı elde edebilirler.</p><br/>`,
    image: {
      src: "/blog/veri-odakli.webp",
      alt: "Veri Odaklı Dijital Pazarlama",
      className: "w-full",
      position: "top",
    },
  },
  "blog-yazarak-markanizi-nasil-buyutursunuz": {
    title: "Blog Yazarak Markanızı Nasıl Büyütürsünüz",
    meta_title: "Blog Yazarak Markanızı Nasıl Büyütürsünüz",
    meta_description:
      "Günümüzün dijital çağında, bir blog sahibi olmak, markanızın büyümesi için harika bir fırsat sunuyor. Blog yazmak, sadece düşüncelerinizi paylaşmakla kalmaz, aynı zamanda markanızın bilinirliğini artırmak, hedef kitlenizle etkileşim kurmak ve potansiyel müşteriler çekmek için de etkili bir yöntemdir.",
    description: `
 <p>G&uuml;n&uuml;m&uuml;z&uuml;n dijital &ccedil;ağında, bir blog sahibi olmak, markanızın b&uuml;y&uuml;mesi i&ccedil;in harika bir fırsat sunuyor. Blog yazmak, sadece d&uuml;ş&uuml;ncelerinizi paylaşmakla kalmaz, aynı zamanda markanızın bilinirliğini artırmak, hedef kitlenizle etkileşim kurmak ve potansiyel m&uuml;şteriler &ccedil;ekmek i&ccedil;in de etkili bir y&ouml;ntemdir.</p><br/>
<p>Blog Yazmanın Faydaları</p><br/>
<ul style="list-style-type: disc;">
<li>Marka Bilinirliğini Artırır</li>
<li>Trafik &Ccedil;eker: Arama motorlarında &uuml;st sıralarda yer alan blog yazıları, web sitenize organik trafik &ccedil;eker.</li>
<li>İtibarınızı Artırır, alanınızla ilgili değerli bilgiler sunan blog yazıları, uzmanlığınızı g&ouml;stererek itibarınızı artırır.</li>
<li>M&uuml;şteri Bağlılığı Oluşturur</li>
<li>Satışları Artırır</li>
</ul>
<p>Etkili Bir Blog Stratejisi Oluşturmak</p><br/>
<ul style="list-style-type: disc;">
<li>Hedef Kitlenizi Tanıyın</li>
<li>Konularınızı Belirleyin</li>
<li>İ&ccedil;erik Takvimi Oluşturun</li>
<li>Kaliteli İ&ccedil;erik &Uuml;retin</li>
<li>Seo Uyumlu Yazılar Yazın</li>
<li>G&ouml;rsel Materyaller Kullanın</li>
<li>Sosyal Medyada Paylaşın</li>
<li>Okuyucularınızla Etkileşim Kurun</li>
<li>Blogunuzu Tanıtın</li>
<li>İstatistikleri Takip Edin</li>
</ul>
<p>Etkili Blog Yazma İ&ccedil;in İpu&ccedil;ları;</p><br/>
<ul style="list-style-type: disc;">
<li>Başlıklarınızı &Ccedil;arpıcı Hale Getirin</li>
<li>Kısa ve &Ouml;z C&uuml;mleler Kurun</li>
<li>G&ouml;rsel Materyaller Kullanın</li>
<li>Okuyucularınızla Etkileşim Kurun</li>
<li>Sosyal Medyada Paylaşın</li>
<li>Blog yazarak markanızı b&uuml;y&uuml;tmek uzun ve sabır gerektiren bir s&uuml;re&ccedil; olabilir. Ancak d&uuml;zenli ve istikrarlı bir şekilde i&ccedil;erik &uuml;retmeye devam ederseniz, markanızın b&uuml;y&uuml;mesine &ouml;nemli katkılar sağlayacaktır.</li>
</ul>
<p>Umarım bu bilgiler, blog yazarak markanızı nasıl b&uuml;y&uuml;tebileceğiniz konusunda size yardımcı olur.</p><br/>`,
    image: {
      src: "/blog/blog-yazarak.webp",
      alt: "Blog Yazarak Markanızı Nasıl Büyütürsünüz",
      className: "w-full",
      position: "top",
    },
  },
  "instagramda-markanizi-nasil-buyutursunuz": {
    title: "Instagram'da Markanızı Nasıl Büyütürsünüz",
    meta_title: "Instagram'da Markanızı Nasıl Büyütürsünüz",
    meta_description:
      "Instagram, günümüzün en popüler sosyal medya platformlarından biri olarak, markanızın büyümesi için harika bir potansiyel sunuyor. Doğru stratejilerle, Instagram'ı markanızın bilinirliğini artırmak, hedef kitlenizle etkileşim kurmak ve satışlarınızı yükseltmek için etkili bir araç olarak kullanabilirsiniz.",
    description: `
 <p>Instagram, g&uuml;n&uuml;m&uuml;z&uuml;n en pop&uuml;ler sosyal medya platformlarından biri olarak, markanızın b&uuml;y&uuml;mesi i&ccedil;in harika bir potansiyel sunuyor. Doğru stratejilerle, Instagram'ı markanızın bilinirliğini artırmak, hedef kitlenizle etkileşim kurmak ve satışlarınızı y&uuml;kseltmek i&ccedil;in etkili bir ara&ccedil; olarak kullanabilirsiniz. Bunu yaparken şu adımlar size yol g&ouml;sterebilir;</p><br/>
<ol>
<li>Hedef Kitlenizi Tanıyın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Yaş, cinsiyet, ilgi alanları, değerleri, ihtiya&ccedil;ları ve sorunları gibi demografik ve psikografik &ouml;zelliklerini belirleyin.</li>
<li>&nbsp;Hedef kitlenizin hangi i&ccedil;erik t&uuml;rlerini sevdiğini, hangi hesapları takip ettiğini ve hangi konularla ilgilendiğini araştırın.</li>
</ul>
<ol start="2">
<li>Profesyonel Bir Profil Oluşturun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram profiliniz, markanızın vitrini gibidir.</li>
<li>&nbsp;Profil fotoğrafınızın, kullanıcı adınızın, bio'nuzun ve web sitenizin bağlantısının profesyonel ve markanızla uyumlu olduğundan emin olun.</li>
<li>&nbsp;Bio'nuzda markanızı kısaca tanıtın, değerlerinizi ve sunduğunuz &uuml;r&uuml;nleri veya hizmetleri vurgulayın.</li>
<li>&nbsp;Web sitenizin veya diğer sosyal medya hesaplarınızın bağlantılarını ekleyin.</li>
</ul>
<ol start="3">
<li>Kaliteli ve &Ccedil;ekici İ&ccedil;erikler Paylaşın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram'da i&ccedil;erik kraldır.</li>
<li>&nbsp;Hedef kitlenizin ilgisini &ccedil;ekecek, eğlendirecek, bilgilendirecek veya ilham verecek i&ccedil;erikler paylaşın.</li>
<li>&nbsp;&Uuml;r&uuml;nlerinizi veya hizmetlerinizi tanıtan, marka hikayenizi anlatan veya takip&ccedil;ilerinizle etkileşim kurmanızı sağlayan i&ccedil;erikler oluşturun.</li>
</ul>
<ol start="4">
<li>D&uuml;zenli Olarak İ&ccedil;erik Paylaşın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram'da d&uuml;zenli olarak i&ccedil;erik paylaşmak, takip&ccedil;ilerinizin ilgisini canlı tutar ve markanızın g&ouml;r&uuml;n&uuml;rl&uuml;ğ&uuml;n&uuml; artırır.</li>
<li>&nbsp;İ&ccedil;eriklerinizi paylaşırken en uygun zamanları belirlemek i&ccedil;in Instagram analiz ara&ccedil;larını kullanabilirsiniz.</li>
</ul>
<ol start="5">
<li>Hashtag'leri Doğru Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Hashtag'ler, i&ccedil;eriklerinizin keşfedilmesine yardımcı olur.</li>
<li>&nbsp;İ&ccedil;eriklerinizle ilgili pop&uuml;ler ve alakalı hashtag'ler kullanın.</li>
<li>&nbsp;Ancak hashtag'leri abartmamaya ve spam olarak algılanmamaya dikkat edin.</li>
</ul>
<ol start="6">
<li>Takip&ccedil;ilerinizle Etkileşim Kurun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Takip&ccedil;ilerinizle etkileşim kurmak, onların markanıza olan bağlılığını artırır.</li>
<li>&nbsp;Yorumlara yanıt verin, sorularını &ccedil;&ouml;z&uuml;n ve onlarla sohbet edin.</li>
<li>&nbsp;Anketler, yarışmalar veya canlı yayınlar gibi interaktif i&ccedil;erikler oluşturarak takip&ccedil;ilerinizin katılımını sağlayın.</li>
</ul>
<ol start="7">
<li>Diğer Kullanıcılarla iş birliği Yapın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;İlgili sekt&ouml;rlerden influencer'lar veya diğer markalarla ortak projeler yapın.</li>
<li>&nbsp;Karşılıklı olarak birbirinizin i&ccedil;eriklerini tanıtın ve takip&ccedil;ilerinizi etkileşimde bulunmaya teşvik edin.</li>
</ul>
<ol start="8">
<li>Instagram Reklamlarını Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram reklamları, hedef kitlenize ulaşmanın ve markanızı tanıtmanın etkili bir yoludur.</li>
<li>&nbsp;B&uuml;t&ccedil;enize uygun reklam kampanyaları oluşturarak markanızın bilinirliğini artırabilir ve satışlarınızı y&uuml;kseltebilirsiniz.</li>
<li>&nbsp;Instagram reklamlarının farklı formatlarını (fotoğraf, video, hik&acirc;ye,) deneyerek en etkili olanları belirleyin.</li>
</ul>
<ol start="9">
<li>Analizleri Takip Edin ve Stratejinizi Geliştirin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram analiz ara&ccedil;ları, i&ccedil;eriklerinizin performansını takip etmenize yardımcı olur.</li>
<li>&nbsp;Hangi i&ccedil;eriklerin daha &ccedil;ok beğeni aldığını, hangi saatlerde daha fazla etkileşim olduğunu ve takip&ccedil;i demografiklerini analiz edin.</li>
</ul>
<ol start="10">
<li>Sabırlı ve İstikrarlı Olun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>&nbsp;Instagram &lsquo;da markanızı b&uuml;y&uuml;tmek zaman ve sabır gerektirir.</li>
<li>&nbsp;D&uuml;zenli olarak i&ccedil;erik paylaşmaya, takip&ccedil;ilerinizle etkileşim kurmaya ve stratejinizi geliştirmeye devam edin.</li>
<li>&nbsp;Başarıya ulaşmak i&ccedil;in uzun vadeli bir bakış a&ccedil;ısına sahip olun ve istikrarlı bir şekilde &ccedil;alışın.</li>
</ul>
<p>Bu ipu&ccedil;larını takip ederek Instagram &lsquo;da markanızı b&uuml;y&uuml;tebilir, hedef kitlenizle etkileşim kurabilir ve satışlarınızı artırabilirsiniz. Unutmayın, her marka farklıdır ve kendine &ouml;zg&uuml; bir strateji gerektirebilir. Bu nedenle, kendi markanıza en uygun y&ouml;ntemleri deneyerek ve analiz ederek en iyi sonu&ccedil;ları elde edebilirsiniz.</p><br/>
 `,
    image: {
      src: "/blog/instagramda.webp",
      alt: "Instagram'da Markanızı Nasıl Büyütürsünüz",
      className: "float-right",
      position: "inner",
    },
  },
  "kullanici-dostu-bir-web-sitesi-nasil-tasarlanir": {
    title: "Kullanıcı dostu bir web sitesi nasıl tasarlanır",
    meta_title: "Kullanıcı dostu bir web sitesi nasıl tasarlanır",
    meta_description:
      "Kullanıcı dostu bir web sitesi tasarlamak, ziyaretçilerinizin web sitenizde kolayca gezinebilmesini, aradıkları bilgilere hızlıca ulaşabilmesini ve keyifli bir deneyim yaşamasını sağlamak anlamına gelir.",
    description: `
    <p>Kullanıcı dostu bir web sitesi tasarlamak, ziyaret&ccedil;ilerinizin web sitenizde kolayca gezinebilmesini, aradıkları bilgilere hızlıca ulaşabilmesini ve keyifli bir deneyim yaşamasını sağlamak anlamına gelir. Kullanıcı dostu bir web sitesi, sadece estetik a&ccedil;ıdan hoş g&ouml;r&uuml;nmekle kalmaz, aynı zamanda iş hedeflerinize ulaşmanıza da yardımcı olur. İşte kullanıcı dostu bir web sitesi tasarlarken dikkat etmeniz gereken bazı &ouml;nemli noktalar:</p><br/>
<ol>
<li>Hedef Kitlenizi Tanıyın</li>
</ol><br/>
<p>Web sitenizi kimler i&ccedil;in tasarladığınızı bilmek, kullanıcı dostu bir deneyim sunmanın ilk adımıdır. Hedef kitlenizin demografik &ouml;zelliklerini, ilgi alanlarını, ihtiya&ccedil;larını ve beklentilerini anlamak, web sitenizin tasarımında ve i&ccedil;eriğinde &ouml;nemli kararlar almanıza yardımcı olacaktır.</p><br/>
<ol start="2">
<li>Basit ve Anlaşılır Bir Navigasyon Sunun</li>
</ol><br/>
<p>Web sitenizde gezinmek kolay olmalıdır. Ziyaret&ccedil;ileriniz, aradıkları bilgilere birka&ccedil; tıklamayla ulaşabilmelidir.&nbsp;</p><br/>
<ol start="3">
<li>Arama İşlevi Ekleyin</li>
</ol><br/>
<p>Web sitenizde bir arama işlevi bulunması, ziyaret&ccedil;ilerinizin aradıkları bilgilere daha hızlı ulaşmasına yardımcı olur</p><br/>
<ol start="4">
<li>Mobil Uyumlu Tasarım Yapın</li>
</ol><br/>
<p>G&uuml;n&uuml;m&uuml;zde internet kullanıcılarının b&uuml;y&uuml;k bir b&ouml;l&uuml;m&uuml; mobil cihazlar &uuml;zerinden internete bağlanıyor. Bu nedenle, web sitenizin mobil cihazlarda sorunsuz bir şekilde &ccedil;alışması &ccedil;ok &ouml;nemlidir.&nbsp;</p><br/>
<ol start="5">
<li>Hızlı Y&uuml;kleme S&uuml;resi Sağlayın</li>
</ol><br/>
<p>Web sitenizin hızlı y&uuml;klenmesi, ziyaret&ccedil;ilerinizin sabrını zorlamamanız a&ccedil;ısından &ouml;nemlidir. Yavaş y&uuml;klenen bir web sitesi, ziyaret&ccedil;ilerinizin web sitenizden hemen ayrılmasına neden olabilir.</p><br/>
<ol start="6">
<li>Okunabilir ve Anlaşılır İ&ccedil;erik Sunun</li>
</ol><br/>
<p>Web sitenizdeki i&ccedil;eriklerin okunabilir ve anlaşılır olması, ziyaret&ccedil;ilerinizin web sitenizde daha uzun s&uuml;re kalmasına yardımcı olur.&nbsp;</p><br/>
<ol start="7">
<li>G&ouml;rsel Tasarımı Basit Tutun</li>
</ol><br/>
<p>Web sitenizin g&ouml;rsel tasarımı, kullanıcı dostu bir deneyim sunmak i&ccedil;in basit ve sade olmalıdır.</p><br/>
<ol start="8">
<li>Erişilebilirlik &Ouml;zelliklerine Dikkat Edin</li>
</ol><br/>
<p>Web sitenizin engelli bireyler tarafından da kullanılabilir olması &ouml;nemlidir. Bu nedenle, web sitenizin erişilebilirlik &ouml;zelliklerine dikkat edin.</p><br/>
<ol start="9">
<li>Kullanıcı Geri Bildirimlerini Dikkate Alın</li>
</ol><br/>
<p>Ziyaret&ccedil;ilerinizin &ouml;nerilerini ve şikayetlerini dikkate alarak web sitenizi geliştirebilirsiniz.</p><br/>
<ol start="10">
<li>Test Yapın</li>
</ol><br/>
<p>Web sitenizi tasarladıktan sonra, kullanıcılar &uuml;zerinde test yapmanız &ouml;nemlidir. Bu testler, web sitenizdeki sorunları ve eksiklikleri belirlemenize yardımcı olur.</p><br/>
<p>Kullanıcı dostu bir web sitesi tasarlamak, s&uuml;rekli bir s&uuml;re&ccedil;tir. Ziyaret&ccedil;ilerinizin ihtiya&ccedil;larını ve beklentilerini takip ederek web sitenizi s&uuml;rekli olarak geliştirmelisiniz. Unutmayın, kullanıcı dostu bir web sitesi, ziyaret&ccedil;ilerinizin memnuniyetini artırır ve iş hedeflerinize ulaşmanıza yardımcı olur.</p><br/>`,
    image: {
      src: "/blog/kullanici-dostu.webp",
      alt: "Kullanıcı dostu bir web sitesi tasarlamak",
      className: "w-full",
      position: "top",
    },
  },
  "mobil-uyumlu-web-sitenin-onemi": {
    title: "Mobil Uyumlu Web Sitenin Önemi",
    meta_title: "Mobil Uyumlu Web Sitenin Önemi",
    meta_description:
      "Mobil uyumlu web sitesi; Cebinizdeki Dijital Vitrin Günümüzde akıllı telefonlar, hayatımızın vazgeçilmez bir parçası haline geldi. İletişimden eğlenceye, alışverişten bilgiye kadar her alanda mobil cihazları kullanıyoruz. ",
    description: `
    <p>Mobil uyumlu web sitesi; Cebinizdeki Dijital Vitrin</p><br/>
<p>G&uuml;n&uuml;m&uuml;zde akıllı telefonlar, hayatımızın vazge&ccedil;ilmez bir par&ccedil;ası haline geldi. İletişimden eğlenceye, alışverişten bilgiye kadar her alanda mobil cihazları kullanıyoruz. Bu durum, web siteleri i&ccedil;in de b&uuml;y&uuml;k bir &ouml;nem taşıyor. Artık internet kullanıcılarının b&uuml;y&uuml;k bir &ccedil;oğunluğu mobil cihazlar &uuml;zerinden internete bağlanıyor. Bu nedenle, mobil uyumlu bir web sitesine sahip olmak, işletmeler i&ccedil;in bir tercih değil, zorunluluk haline geldi.</p><br/>
<p>Mobil Uyumlu Web Sitesinin &Ouml;nemi</p><br/>
<ul style="list-style-type: disc;">
<li>Kullanıcı Deneyimi: Mobil uyumlu bir web sitesi, kullanıcıların mobil cihazlarında sorunsuz bir şekilde gezinebilmesini ve aradıkları bilgilere kolayca ulaşabilmesini sağlar. Mobil cihazlara uygun olarak tasarlanmış bir web sitesi, daha b&uuml;y&uuml;k ve okunabilir metinler, dokunmatik ekranlara uygun butonlar ve hızlı y&uuml;kleme s&uuml;releri sunar. Bu da kullanıcıların web sitenizde daha uzun s&uuml;re kalmasına ve markanızla daha olumlu bir deneyim yaşamasına katkıda bulunur.</li>
<li>Arama Motoru Optimizasyonu (SEO): Google gibi arama motorları, mobil uyumlu web sitelerine &ouml;ncelik verir. Mobil uyumlu bir web sitesi, arama sonu&ccedil;larında daha &uuml;st sıralarda yer alır ve bu da web sitenize daha fazla trafik &ccedil;ekmenizi sağlar.</li>
<li>Rekabet Avantajı: Mobil uyumlu bir web sitesine sahip olmak, rakiplerinize karşı bir adım &ouml;ne ge&ccedil;menizi sağlar. Mobil cihazlar &uuml;zerinden internete bağlanan kullanıcıların sayısı giderek arttığı i&ccedil;in, mobil uyumlu bir web sitesi, potansiyel m&uuml;şterilerinize ulaşmanız i&ccedil;in &ouml;nemli bir avantaj sunar.</li>
<li>D&ouml;n&uuml;ş&uuml;m Oranları: Mobil uyumlu bir web sitesi, kullanıcıların web sitenizde daha kolay gezinebilmesini ve aradıkları &uuml;r&uuml;nleri veya hizmetleri daha hızlı bulabilmesini sağlar. Bu da d&ouml;n&uuml;ş&uuml;m oranlarınızı artırır ve satışlarınızı y&uuml;kseltir.</li>
<li>Marka İmajı: Mobil uyumlu bir web sitesi, markanızın modern ve profesyonel bir imaja sahip olmasına katkıda bulunur.</li>
</ul>
<p>Mobil Uyumlu Web Sitesi Nasıl Olmalı?</p><br/>
<ul style="list-style-type: disc;">
<li>Duyarlı Tasarım: Web siteniz, farklı ekran boyutlarına ve &ccedil;&ouml;z&uuml;n&uuml;rl&uuml;klerine otomatik olarak uyum sağlamalıdır.</li>
<li>Hızlı Y&uuml;kleme S&uuml;resi: Web siteniz, mobil cihazlarda hızlı bir şekilde y&uuml;klenmelidir.</li>
<li>Kolay Navigasyon: Web sitenizde gezinmek kolay olmalı ve kullanıcılar aradıkları bilgilere hızlıca ulaşabilmelidir.</li>
<li>Dokunmatik Ekranlara Uygunluk: Web sitenizdeki butonlar ve diğer &ouml;ğeler, dokunmatik ekranlara uygun olarak tasarlanmalıdır.</li>
<li>Okunabilir Metinler: Web sitenizdeki metinler, mobil cihazlarda kolayca okunabilmelidir.</li>
</ul>
<p>Unutmayın, mobil uyumlu bir web sitesi sadece bir tasarım meselesi değil, aynı zamanda kullanıcı deneyimi, SEO, rekabet avantajı ve marka imajı gibi bir&ccedil;ok fakt&ouml;r&uuml; etkileyen stratejik bir yatırımdır.</p><br/>
    `,
    image: {
      src: "/blog/mobil-uyumlu.webp",
      alt: "Mobil Uyumlu Web Sitenin Önemi",
      className: "w-full",
      position: "top",
    },
  },
  "seo-uyumlu-icerik-nasil-olusturulur": {
    title: "SEO Uyumlu İçerik Nasıl Oluşturulur",
    meta_title: "SEO Uyumlu İçerik Nasıl Oluşturulur",
    meta_description:
      "SEO uyumlu içerik, arama motorlarının (Google, Yandex vb.) web sitenizi daha kolay anlamasına ve sıralamasına yardımcı olan içeriktir. Bu tür içerikler, kullanıcıların arama yaptığı anahtar kelimeleri içerir, bilgilendirici ve değerlidir, teknik olarak optimize edilmiştir ve kullanıcı deneyimini ön planda tutar.",
    description: `
<p>SEO Uyumlu İ&ccedil;erik Nedir?</p><br/>
<p>SEO uyumlu i&ccedil;erik, arama motorlarının (Google, Yandex vb.) web sitenizi daha kolay anlamasına ve sıralamasına yardımcı olan i&ccedil;eriktir. Bu t&uuml;r i&ccedil;erikler, kullanıcıların arama yaptığı anahtar kelimeleri i&ccedil;erir, bilgilendirici ve değerlidir, teknik olarak optimize edilmiştir ve kullanıcı deneyimini &ouml;n planda tutar.</p><br/>
<p>Neden SEO Uyumlu İ&ccedil;erik Oluşturmalıyız?</p><br/>
<ul style="list-style-type: disc;">
<li>Daha Y&uuml;ksek Sıralama: Arama motorlarında &uuml;st sıralarda yer almak, web sitenize daha fazla trafik &ccedil;ekmenizi sağlar.</li>
<li>Daha Fazla Ziyaret&ccedil;i: SEO uyumlu i&ccedil;erikler, ilgili aramalar yapan kullanıcılar tarafından daha kolay bulunur ve ziyaret edilir.</li>
<li>Daha İyi Kullanıcı Deneyimi: SEO uyumlu i&ccedil;erikler genellikle kullanıcı odaklıdır ve aradıkları bilgileri kolayca bulmalarını sağlar.</li>
<li>Daha Y&uuml;ksek D&ouml;n&uuml;ş&uuml;m Oranları: Web sitenize gelen doğru ziyaret&ccedil;iler, &uuml;r&uuml;nlerinizi veya hizmetlerinizi satın alma olasılığı daha y&uuml;ksek olan kişilerdir.</li>
</ul>
<p>SEO Uyumlu İ&ccedil;erik Oluşturmanın Adımları</p><br/>
<p>Anahtar Kelime Araştırması:</p><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriğinizle ilgili anahtar kelimeleri belirleyin.</li>
<li>Hedef kitlenizin hangi kelimeleri kullanarak arama yaptığını araştırın.</li>
<li>Anahtar kelime araştırma ara&ccedil;larını (Google Keyword Planner, Ahrefs, SEMrush vb.) kullanabilirsiniz.</li>
</ul>
<p>İ&ccedil;erik Planlaması:</p><br/>
<ul style="list-style-type: disc;">
<li>Anahtar kelimelerinize uygun bir i&ccedil;erik planı oluşturun.</li>
<li>İ&ccedil;eriğinizin başlığını, alt başlıklarını ve ana noktalarını belirleyin.</li>
<li>İ&ccedil;eriğinizin hedef kitlenize değer katacağından emin olun.</li>
</ul>
<p>İ&ccedil;erik Oluşturma:</p><br/>
<ul style="list-style-type: disc;">
<li>Anahtar kelimelerinizi doğal bir şekilde i&ccedil;eriğinize yedirin.</li>
<li>İ&ccedil;eriğinizin akıcı, anlaşılır ve ilgi &ccedil;ekici olduğundan emin olun.</li>
<li>G&ouml;rsel materyaller (fotoğraflar, videolar, infografikler) kullanarak i&ccedil;eriğinizi zenginleştirin.</li>
<li>İ&ccedil;eriğinizin uzunluğu, konunuza ve amacınıza uygun olmalıdır.</li>
</ul>
<p>Teknik Optimizasyon:</p><br/>
<ul style="list-style-type: disc;">
<li>Başlık etiketlerini (title tag) ve meta a&ccedil;ıklamalarını optimize edin.</li>
<li>URL'lerinizi kısa ve a&ccedil;ıklayıcı hale getirin.</li>
<li>G&ouml;rsel materyallerin alt metinlerini (alt text) ekleyin.</li>
<li>Web sitenizin mobil uyumlu olduğundan emin olun.</li>
<li>Web sitenizin hızını artırın.</li>
</ul>
<p>İ&ccedil; Bağlantılar ve Dış Bağlantılar:</p><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriğinizle ilgili diğer sayfalara bağlantılar verin (i&ccedil; bağlantılar).</li>
<li>G&uuml;venilir ve otoriter kaynaklara bağlantılar verin (dış bağlantılar).</li>
</ul>
<p>İ&ccedil;erik Tanıtımı:</p><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriğinizi sosyal medya platformlarında paylaşın.</li>
<li>E-posta listenize g&ouml;nderin.</li>
<li>Diğer web sitelerinden bağlantılar almaya &ccedil;alışın (backlink).</li>
</ul>
<p>SEO Uyumlu İ&ccedil;erik Oluşturma İpu&ccedil;ları</p><br/>
<ul style="list-style-type: disc;">
<li>Kullanıcı Odaklı Olun: İ&ccedil;eriğinizin hedef kitlenizin sorularına cevap verdiğinden ve ihtiya&ccedil;larını karşıladığından emin olun.</li>
<li>&Ouml;zg&uuml;n Olun: Kopya i&ccedil;erikten ka&ccedil;ının ve kendi tarzınızı ortaya koyun.</li>
<li>G&uuml;ncel Olun: İ&ccedil;eriğinizin g&uuml;ncel ve doğru bilgiler i&ccedil;erdiğinden emin olun.</li>
<li>Sabırlı Olun: SEO uzun vadeli bir s&uuml;re&ccedil;tir. Sonu&ccedil;ları g&ouml;rmek zaman alabilir.</li>
</ul>
<p>SEO Uyumlu İ&ccedil;erik Oluşturma Ara&ccedil;ları</p><br/>
<ul style="list-style-type: disc;">
<li>Google Keyword Planner</li>
<li>Ahrefs</li>
<li>SEMrush</li>
<li>Yoast SEO (WordPress eklentisi)</li>
</ul>
<p>Bu rehber, SEO uyumlu i&ccedil;erik oluşturmanıza yardımcı olacaktır. Unutmayın, SEO s&uuml;rekli değişen bir alandır. Bu nedenle, en son gelişmeleri takip etmeniz ve stratejilerinizi buna g&ouml;re g&uuml;ncellemeniz &ouml;nemlidir.</p><br/>`,
    image: {
      src: "/blog/seo-uyumlu.webp",
      alt: "SEO Uyumlu İçerik Nasıl Oluşturulur",
      className: "w-full",
      position: "top",
    },
  },
  "sira-disi-ve-etkileyici-icerikler-nasil-olusturulur": {
    title: "Sıra Dışı ve Etkileyici İçerikler Nasıl Oluşturulur",
    meta_title: "Sıra Dışı ve Etkileyici İçerikler Nasıl Oluşturulur",
    meta_description:
      "Sıra dışı ve etkileyici içerikler oluşturmak zaman, çaba ve yaratıcılık gerektirir. Ancak bu çabalarınızın karşılığını alacak ve markanızın veya kişisel hesabınızın daha fazla kişiye ulaşmasını sağlayacaktır",
    description: `
<p>Sıra dışı ve etkileyici i&ccedil;erikler oluşturmak i&ccedil;in bazı ipu&ccedil;ları ve stratejilere şu aşamaları izleyerek ulaşılabilir:</p><br/>
<ol>
<li>Hedef Kitlenizi Tanıyın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;erik oluşturmaya başlamadan &ouml;nce, hedef kitlenizi derinlemesine anlamanız &ouml;nemlidir.</li>
<li>Yaş, cinsiyet, ilgi alanları, değerleri, ihtiya&ccedil;ları ve sorunları gibi demografik ve psikografik &ouml;zelliklerini belirleyin.</li>
<li>Hedef kitlenizin hangi platformlarda vakit ge&ccedil;irdiğini, hangi i&ccedil;erik t&uuml;rlerini sevdiğini ve hangi konularla ilgilendiğini araştırın.</li>
<li>Bu bilgiler, hedef kitlenize &ouml;zel ve ilgi &ccedil;ekici i&ccedil;erikler oluşturmanıza yardımcı olacaktır.</li>
</ul>
<ol start="2">
<li>&Ouml;zg&uuml;n ve İnovatif Olun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Sıra dışı i&ccedil;erikler oluşturmanın en &ouml;nemli yolu, &ouml;zg&uuml;n ve inovatif olmaktır.</li>
<li>Yeni ve farklı şeyler denemekten &ccedil;ekinmeyin.</li>
<li>Alışılmışın dışında fikirler &uuml;retmek i&ccedil;in beyin fırtınası yapın, ilham alın ve farklı kaynaklardan beslenin.</li>
</ul>
<ol start="3">
<li>Hikaye Anlatımını Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Hikayeler, insanların duygularına dokunur ve akılda kalıcıdır.</li>
<li>İ&ccedil;eriklerinizin konusuna uygun, ilgi &ccedil;ekici ve s&uuml;r&uuml;kleyici bir hikaye oluşturun.</li>
<li>Hikayenizi g&ouml;rsellerle, videolarla veya ses kayıtlarıyla destekleyebilirsiniz.</li>
</ul>
<ol start="4">
<li>G&ouml;rsel ve İşitsel Materyaller Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>G&ouml;rsel ve işitsel materyaller, i&ccedil;eriklerinizi daha zengin ve etkileyici hale getirir.</li>
<li>Fotoğraflar, ill&uuml;strasyonlar, infografikler, videolar, animasyonlar, podcast'ler veya m&uuml;zikler kullanabilirsiniz.</li>
<li>Kullanacağınız materyallerin i&ccedil;eriklerinizle uyumlu olmasına ve estetik bir g&ouml;r&uuml;n&uuml;me sahip olmasına dikkat edin.</li>
</ul>
<ol start="5">
<li>Farklı İ&ccedil;erik Formatlarını Deneyin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Blog yazıları, makaleler, listeler, rehberler, e-kitaplar, infografikler, videolar, podcast'ler, canlı yayınlar, sosyal medya paylaşımları gibi farklı i&ccedil;erik formatlarını deneyebilirsiniz.</li>
<li>Hedef kitlenize ve i&ccedil;eriğinizin konusuna en uygun formatı se&ccedil;in.</li>
</ul>
<ol start="6">
<li>Etkileşimli İ&ccedil;erikler Oluşturun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Etkileşimli i&ccedil;erikler, okuyucularınızın i&ccedil;eriğinize dahil olmasını ve sizinle etkileşim kurmasını sağlar.</li>
<li>Anketler, yarışmalar, testler, interaktif videolar veya oyunlar kullanabilirsiniz.</li>
</ul>
<ol start="7">
<li>Duygulara Hitap Edin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriklerinizde duygulara hitap ederek okuyucularınızla daha derin bir bağ kurabilirsiniz.</li>
<li>Mizah, heyecan, şaşkınlık, merak, empati veya ilham gibi farklı duyguları kullanabilirsiniz.</li>
</ul>
<ol start="8">
<li>Değerli Bilgiler Sunun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriklerinizde okuyucularınıza değerli bilgiler sunarak onların g&uuml;venini kazanabilirsiniz.</li>
<li>Alanınızla ilgili uzmanlığınızı g&ouml;sterin ve okuyucularınızın sorunlarına &ccedil;&ouml;z&uuml;m bulun.</li>
</ul>
<ol start="9">
<li>Harekete Ge&ccedil;irici Mesajlar Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İ&ccedil;eriklerinizin sonunda okuyucularınızı harekete ge&ccedil;meye teşvik edin.</li>
<li>Web sitenizi ziyaret etmelerini, &uuml;r&uuml;nlerinizi satın almalarını, e-posta listesine kaydolmalarını veya sosyal medya hesaplarınızı takip etmelerini isteyebilirsiniz.</li>
</ul>
<ol start="10">
<li>İ&ccedil;eriklerinizi Tanıtın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Oluşturduğunuz sıra dışı ve etkileyici i&ccedil;erikleri hedef kitlenize ulaştırmak i&ccedil;in tanıtımını yapın.</li>
<li>Sosyal medya, e-posta pazarlaması, arama motoru optimizasyonu (SEO) veya &uuml;cretli reklamlar gibi farklı tanıtım kanallarını kullanabilirsiniz.</li>
</ul>
<p>Unutmayın, sıra dışı ve etkileyici i&ccedil;erikler oluşturmak zaman, &ccedil;aba ve yaratıcılık gerektirir. Ancak bu &ccedil;abalarınızın karşılığını alacak ve markanızın veya kişisel hesabınızın daha fazla kişiye ulaşmasını sağlayacaktır</p><br/>`,
    image: {
      src: "/blog/sira-disi.webp",
      alt: "Sıra Dışı ve Etkileyici İçerikler Nasıl Oluşturulur",
      className: "w-full",
      position: "top",
    },
  },
  "sosyal-medya-algoritmalarindaki-degisiklikler": {
    title: "Sosyal Medya Algoritmalarındaki Değişiklikler",
    meta_title: "Sosyal Medya Algoritmalarındaki Değişiklikler",
    meta_description:
      "Sosyal medya platformları, günümüzün en dinamik ve etkileşimli dijital alanlarından biri. Ancak bu platformların arkasında, içeriklerin akışını ve kullanıcıların deneyimini şekillendiren karmaşık bir dünya yatıyor: sosyal medya algoritmaları. Bu algoritmalar, platformların kullanıcılarına en ilgi çekici ve alakalı içerikleri sunma amacını taşıyor. ",
    description: `
  <p>Sosyal Medya Algoritmaları: S&uuml;rekli Değişen Bir Labirent</p><br/>
<p>Sosyal medya platformları, g&uuml;n&uuml;m&uuml;z&uuml;n en dinamik ve etkileşimli dijital alanlarından biri. Ancak bu platformların arkasında, i&ccedil;eriklerin akışını ve kullanıcıların deneyimini şekillendiren karmaşık bir d&uuml;nya yatıyor: sosyal medya algoritmaları. Bu algoritmalar, platformların kullanıcılarına en ilgi &ccedil;ekici ve alakalı i&ccedil;erikleri sunma amacını taşıyor. Ancak bu amaca ulaşmak i&ccedil;in s&uuml;rekli olarak değişiyorlar, g&uuml;ncelleniyorlar ve evrim ge&ccedil;iriyorlar.</p><br/>
<p>Algoritmaların Evrimi: Basitlikten Karmaşıklığa</p><br/>
<p>İlk başlarda, sosyal medya algoritmaları kronolojik bir sıralamaya dayanıyordu. Yani, en son paylaşılan i&ccedil;erik en &uuml;stte g&ouml;r&uuml;n&uuml;yordu. Ancak zamanla, bu basit yaklaşımın kullanıcıların ilgi alanlarını tam olarak yansıtmadığı ve bilgi kirliliğine yol a&ccedil;tığı fark edildi. Bunun &uuml;zerine platformlar, daha karmaşık algoritmalar geliştirmeye başladı.</p><br/>
<p>G&uuml;n&uuml;m&uuml;zde, sosyal medya algoritmaları kullanıcıların davranışlarını, ilgi alanlarını, etkileşimlerini ve hatta platformda ge&ccedil;irdikleri s&uuml;reyi analiz ediyor. Bu verileri kullanarak, kullanıcılara en &ccedil;ok ilgi g&ouml;sterecekleri i&ccedil;erikleri belirliyor ve akışlarında &ouml;nceliklendiriyor.</p><br/>
<p>Değişikliklerin Nedenleri: Kullanıcı Deneyimi ve Rekabet</p><br/>
<p>Sosyal medya algoritmalarındaki değişikliklerin temelinde iki ana neden yatıyor: kullanıcı deneyimini iyileştirmek ve platformlar arasındaki rekabeti s&uuml;rd&uuml;rmek.</p><br/>
<p>Platformlar, kullanıcıların platformda daha fazla zaman ge&ccedil;irmesini ve daha fazla i&ccedil;erikle etkileşim kurmasını istiyor. Bu nedenle, algoritmalarını kullanıcıların ilgi alanlarına g&ouml;re i&ccedil;erikleri &ouml;ne &ccedil;ıkaracak şekilde tasarlıyorlar.</p><br/>
<p>Aynı zamanda, sosyal medya platformları reklam verenler i&ccedil;in de cazip bir alan olmak zorunda. Bu nedenle, algoritmalar reklamların doğru hedef kitleye ulaşmasını sağlayacak şekilde optimize ediliyor.</p><br/>
<p>Değişikliklerin Etkileri: Markalar ve Kullanıcılar</p><br/>
<p>Sosyal medya algoritmalarındaki değişiklikler hem markaları hem de kullanıcıları etkiliyor. Markalar i&ccedil;in, algoritmaların değişmesi organik erişimlerini zorlaştırabiliyor. Artık markaların i&ccedil;eriklerinin daha fazla kişiye ulaşması i&ccedil;in daha fazla &ccedil;aba g&ouml;stermesi veya reklam b&uuml;t&ccedil;elerini artırması gerekebiliyor.</p><br/>
<p>Kullanıcılar i&ccedil;in ise, algoritmalar sayesinde ilgi alanlarına daha uygun i&ccedil;erikler g&ouml;r&uuml;yorlar. Ancak bu durum, bazı kullanıcıların Filter Bubble (Bilgi Balonu)i&ccedil;ine girmesine ve farklı g&ouml;r&uuml;şlerle karşılaşmamasına neden olabilir.</p><br/>
<p>Algoritmalarla Yaşamak: İpu&ccedil;ları ve Stratejiler</p><br/>
<p>Sosyal medya algoritmalarındaki değişikliklere ayak uydurmak, markalar ve kullanıcılar i&ccedil;in &ouml;nemli. İşte bazı ipu&ccedil;ları:</p><br/>
<ul style="list-style-type: disc;">
<li>Kaliteli İ&ccedil;erik &Uuml;retin: H kitlenizin ilgisini &ccedil;ekecek, değerli bilgiler sunacak ve etkileşim yaratacak i&ccedil;erikler &uuml;retmeye odaklanın.</li>
<li>Etkileşimi Artırın: Etkileşim, algoritmaların sizi daha fazla kişiye g&ouml;stermesine yardımcı olur.</li>
<li>Trendleri Takip Edin: Sosyal medya trendlerini ve algoritmalarındaki değişiklikleri yakından takip edin.</li>
<li>Farklı İ&ccedil;erik Formatlarını Deneyin: Video, fotoğraf, canlı yayın, hikaye gibi farklı i&ccedil;erik formatlarını kullanarak hedef kitlenize ulaşmaya &ccedil;alışın.</li>
<li>Verileri Analiz Edin: Sosyal medya analiz ara&ccedil;larını kullanarak i&ccedil;eriklerinizin performansını takip edin. Hangi t&uuml;r i&ccedil;eriklerin daha &ccedil;ok etkileşim aldığını, hangi saatlerde paylaşım yapmanız gerektiğini ve hedef kitlenizin nelerden hoşlandığını &ouml;ğrenin.</li>
</ul>
<p>Sosyal medya algoritmaları, dijital d&uuml;nyanın karmaşık ve s&uuml;rekli değişen bir par&ccedil;ası. Ancak bu d&uuml;nyaya ayak uydurarak, markanızın veya kişisel hesabınızın potansiyelini en &uuml;st d&uuml;zeye &ccedil;ıkarabilirsiniz. Unutmayın, her değişiklik yeni bir fırsat sunar. &Ouml;nemli olan, bu fırsatları doğru bir şekilde değerlendirmektir.</p><br/>`,
    image: {
      src: "/blog/sosyal-medyada.webp",
      alt: "Sosyal Medya Algoritmalarındaki Değişiklikler",
      className: "float-right",
      position: "inner",
    },
  },
  "sosyal-medya-reklamlari-nasil-olusturulur": {
    title: "Sosyal Medya Reklamları Nasıl Oluşturulur",
    meta_title: "Sosyal Medya Reklamları Nasıl Oluşturulur",
    meta_description:
      "Günümüzün dijital çağında, sosyal medya platformları, markaların hedef kitlelerine ulaşmak ve ürünlerini veya hizmetlerini tanıtmak için vazgeçilmez bir araç haline geldi. Ancak organik paylaşımların yanı sıra, sosyal medya reklamları da markanızın büyümesi için büyük bir potansiyel sunuyor. ",
    description: `
 <p>Sosyal Medya Reklamları: Hedef Kitlenize Ulaşmanın En Etkili Yolu</p><br/>
<p>G&uuml;n&uuml;m&uuml;z&uuml;n dijital &ccedil;ağında, sosyal medya platformları, markaların hedef kitlelerine ulaşmak ve &uuml;r&uuml;nlerini veya hizmetlerini tanıtmak i&ccedil;in vazge&ccedil;ilmez bir ara&ccedil; haline geldi. Ancak organik paylaşımların yanı sıra, sosyal medya reklamları da markanızın b&uuml;y&uuml;mesi i&ccedil;in b&uuml;y&uuml;k bir potansiyel sunuyor. Doğru stratejilerle, sosyal medya reklamları sayesinde hedef kitlenize doğrudan ulaşabilir, marka bilinirliğinizi artırabilir ve satışlarınızı y&uuml;kseltebilirsiniz.</p><br/>
<p>Sosyal Medya Reklamlarının Avantajları</p><br/>
<ul style="list-style-type: disc;">
<li>Hedefli Kitleye Ulaşım: Sosyal medya platformları, kullanıcıların demografik bilgileri, ilgi alanları, davranışları ve hatta konumları gibi bir&ccedil;ok veriye sahip. Bu sayede reklamlarınızı tam olarak hedef kitlenize y&ouml;nelik olarak g&ouml;sterebilirsiniz.</li>
<li>B&uuml;t&ccedil;e Kontrol&uuml;: Sosyal medya reklamları, b&uuml;t&ccedil;enizi kontrol etmenize olanak tanır</li>
<li>&Ouml;l&ccedil;&uuml;lebilir Sonu&ccedil;lar:G&ouml;sterim sayısı, tıklama oranı, d&ouml;n&uuml;ş&uuml;m oranı gibi metrikleri analiz ederek reklamlarınızın etkinliğini &ouml;l&ccedil;ebilir ve stratejilerinizi buna g&ouml;re ayarlayabilirsiniz.</li>
<li>Farklı Reklam Formatları: Sosyal medya platformları, farklı reklam formatları sunar. Fotoğraf, video, hikaye, carousel gibi formatları kullanarak markanızın mesajını en etkili şekilde iletebilirsiniz.</li>
<li>Anında Geri Bildirim: Sosyal medya kullanıcıları, reklamlarınıza yorum yaparak veya beğenerek anında geri bildirimde bulunabilirler. Bu sayede reklamlarınızın etkisini hızlı bir şekilde g&ouml;rebilir ve stratejilerinizi buna g&ouml;re uyarlayabilirsiniz.</li>
</ul>
<p>Sosyal Medya Reklamları Nasıl Oluşturulur?</p><br/>
<ul style="list-style-type: disc;">
<li>Hedeflerinizi Belirleyin: Reklam kampanyanızla ne istediğinizi net bir şekilde belirleyin. Marka bilinirliğini artırmak mı, web sitenize trafik &ccedil;ekmek mi, yoksa &uuml;r&uuml;n satışı yapmak mı? Hedefiniz, reklam stratejinizi ve kullanacağınız formatları belirlemede &ouml;nemli bir rol oynayacaktır.</li>
<li>Hedef Kitlenizi Tanımlayın: Reklamlarınızı kimlere g&ouml;stermek istediğinizi detaylı olarak belirleyin. Yaş, cinsiyet, ilgi alanları, konum gibi demografik ve psikografik &ouml;zelliklerini g&ouml;z &ouml;n&uuml;nde bulundurun.</li>
<li>Platform Se&ccedil;imi Yapın: Hedef kitlenizin hangi sosyal medya platformlarında daha aktif olduğunu belirleyin. Facebook, Instagram, X, Youtube, LinkedIn, TikTok gibi platformlardan size en uygun olanları se&ccedil;in.</li>
<li>İ&ccedil;erik Oluşturun: Reklamlarınız i&ccedil;in ilgi &ccedil;ekici ve etkili i&ccedil;erikler oluşturun.</li>
<li>Reklam Formatını Se&ccedil;in: Hedeflerinize ve i&ccedil;eriklerinize uygun reklam formatını se&ccedil;in. Fotoğraf, video, hikaye, carousel gibi farklı formatları deneyerek en etkili olanları belirleyin.</li>
<li>B&uuml;t&ccedil;enizi Belirleyin: G&uuml;nl&uuml;k veya haftalık bir b&uuml;t&ccedil;e belirleyebilir ve reklamlarınızın ne kadar harcama yapacağını siz kontrol edebilirsiniz.</li>
<li>Reklam Kampanyanızı Oluşturun: Se&ccedil;tiğiniz platformun reklam y&ouml;netim panelini kullanarak reklam kampanyanızı oluşturun.</li>
<li>Reklamlarınızı Yayınlayın: Reklam kampanyanızı yayınlayın ve performansını takip etmeye başlayın.</li>
<li>Performansı İzleyin ve Optimize Edin: Reklamlarınızın performansını d&uuml;zenli olarak izleyin ve analiz edin.</li>
</ul>
<p>İpu&ccedil;ları</p><br/>
<ul style="list-style-type: disc;">
<li>Hedef kitlenizin ilgi alanlarına uygun i&ccedil;erikler oluşturun.</li>
<li>Kısa, &ouml;z ve etkileyici mesajlar kullanın.</li>
<li>Harekete ge&ccedil;irici ifadeler kullanın.</li>
<li>Y&uuml;ksek kaliteli g&ouml;rseller ve videolar kullanın.</li>
<li>Farklı reklam formatlarını deneyin.</li>
<li>Reklamlarınızı d&uuml;zenli olarak test edin ve optimize edin.</li>
</ul>
<p>Unutmayın, her marka farklıdır ve kendine &ouml;zg&uuml; bir reklam stratejisi gerektirebilir. Bu nedenle, kendi markanıza en uygun y&ouml;ntemleri deneyerek ve analiz ederek en iyi sonu&ccedil;ları elde edebilirsiniz.</p><br/>`,
    image: {
      src: "/blog/sosyal-medyada-reklamlar.webp",
      alt: "Sosyal Medya Reklamları Nasıl Oluşturulur",
      className: "float-right",
      position: "inner",
    },
  },
  "yerel-seo-ile-isletmenizi-nasil-daha-bulunabilir-hale-getirebilirsiniz": {
    title:
      "Yerel SEO ile İşletmenizi Nasıl Daha Bulunabilir Hale Getirebilirsiniz",
    meta_title:
      "Yerel SEO ile İşletmenizi Nasıl Daha Bulunabilir Hale Getirebilirsiniz",
    meta_description:
      "Stratejileri düzenli olarak uyguladığınızda, işletmenizin yerel aramalarda daha üst sıralarda yer aldığını ve daha fazla müşteri çektiğini göreceksiniz. Umarım bu bilgiler, yerel SEO ile işletmenizi nasıl daha bulunabilir hale getirebileceğiniz konusunda size yardımcı olmuştur. ",
    description: `
 <p>Yerel SEO ile işletmenizi nasıl daha bulunabilir hale getirebileceğiniz konusunda sizlere kısaca bilgiler verebiliriz. İşte ipu&ccedil;ları:</p><br/>
<ol>
<li>İşletmenizi Google Benim İşletmem'e Kaydedin ve Optimize Edin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Google Benim İşletmem (GBI), yerel SEO'nun temel taşıdır. İşletmenizi GBI'ye kaydettirerek Google Arama ve Haritalar'da g&ouml;r&uuml;nmesini sağlayın.</li>
<li>İşletme adınızı, adresinizi ve telefon numaranızı (NAP) doğru ve tutarlı bir şekilde girin.</li>
<li>İşletmenizin kategorisini doğru bir şekilde se&ccedil;in ve ek kategoriler ekleyin.</li>
<li>&Ccedil;alışma saatlerinizi g&uuml;ncel tutun.</li>
<li>İşletmenizin fotoğraflarını y&uuml;kleyin (logo, &uuml;r&uuml;nler, ofis vb.).</li>
<li>M&uuml;şterilerinizden yorumlar alın ve yorumlara yanıt verin.</li>
</ul>
<ol start="2">
<li>Yerel Anahtar Kelimeleri Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Web sitenizde, blog yazılarınızda ve diğer i&ccedil;eriklerinizde yerel anahtar kelimeleri kullanın.</li>
<li>Anahtar kelimeleri doğal bir şekilde kullanmaya &ouml;zen g&ouml;sterin ve abartıdan ka&ccedil;ının.</li>
</ul>
<ol start="3">
<li>Yerel Dizinlere Kaydolun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İşletmenizi Yelp, Foursquare, Yellow Pages gibi yerel dizinlere kaydettirin.</li>
<li>Bu dizinler, m&uuml;şterilerin sizi bulmasına yardımcı olur ve aynı zamanda web sitenize bağlantılar sağlar.</li>
</ul>
<ol start="4">
<li>Web Sitenizi Yerel SEO'ya Uygun Hale Getirin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Web sitenizin başlık etiketlerinde, meta a&ccedil;ıklamalarında ve i&ccedil;eriklerinde yerel anahtar kelimeleri kullanın.</li>
<li>İşletmenizin adresini ve telefon numarasını web sitenizin alt kısmına veya iletişim sayfasına ekleyin.</li>
<li>Web sitenizin mobil uyumlu olduğundan emin olun.</li>
<li>Web sitenizin hızlı a&ccedil;ıldığından emin olun.</li>
</ul>
<ol start="5">
<li>Yerel İ&ccedil;erik Oluşturun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>İşletmenizin bulunduğu b&ouml;lgeyle ilgili blog yazıları yazın, etkinlikleri duyurun veya yerel haberlere değinin.</li>
<li>Yerel i&ccedil;erik hem hedef kitlenizin ilgisini &ccedil;eker hem de yerel SEO'ya katkı sağlar.</li>
</ul>
<ol start="6">
<li>Sosyal Medyayı Aktif Kullanın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Sosyal medya platformlarında işletmenizin hesaplarını oluşturun ve aktif bir şekilde kullanın.</li>
<li>Yerel etkinlikleri duyurun, kampanyalar d&uuml;zenleyin veya takip&ccedil;ilerinizle etkileşim kurun.</li>
<li>Sosyal medya, markanızın bilinirliğini artırmanın ve yerel m&uuml;şterilere ulaşmanın etkili bir yoludur.</li>
</ul>
<ol start="7">
<li>M&uuml;şteri Yorumlarını Teşvik Edin</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>M&uuml;şterilerinizden yorumlar almak, işletmenizin itibarını artırır ve yerel SEO'ya katkı sağlar.</li>
<li>M&uuml;şterilerinizi yorum bırakmaya teşvik edin ve yorumlara yanıt verin.</li>
</ul>
<ol start="8">
<li>Yerel İşletmelerle İş birliği Yapın</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>B&ouml;lgenizdeki diğer işletmelerle iş birliği yaparak birbirinizin markalarını tanıtabilirsiniz.</li>
<li>Ortak etkinlikler d&uuml;zenleyebilir, kampanyalar yapabilir veya birbirinizin &uuml;r&uuml;nlerini veya hizmetlerini tavsiye edebilirsiniz.</li>
</ul>
<ol start="9">
<li>Sabırlı Olun</li>
</ol><br/>
<ul style="list-style-type: disc;">
<li>Yerel SEO uzun vadeli bir s&uuml;re&ccedil;tir. Sonu&ccedil;ları g&ouml;rmek zaman alabilir.</li>
<li>Ancak yukarıdaki stratejileri d&uuml;zenli olarak uyguladığınızda, işletmenizin yerel aramalarda daha &uuml;st sıralarda yer aldığını ve daha fazla m&uuml;şteri &ccedil;ektiğini g&ouml;receksiniz.</li>
</ul>
<p>Umarım bu bilgiler, yerel SEO ile işletmenizi nasıl daha bulunabilir hale getirebileceğiniz konusunda size yardımcı olmuştur.</p><br/>`,
    image: {
      src: "/blog/yerel-seo.webp",
      alt: "Yerel SEO ile İşletmenizi Nasıl Daha Bulunabilir Hale Getirebilirsiniz",
      className: "float-right",
      position: "inner",
    },
  },
};

export const legalPages: Record<string, PageContent> = {
  "cerez-politikasi": {
    meta_title: "Çerez Politikası",
    meta_description:
      "Biz Mavi Tik Medya Ajansı, olarak güvenliğinize önem veriyor ve bu çerez Politikası ile siz sevgili ziyaretçilerimizi, web sitemizde hangi çerezleri, hangi amaçları işlenmişse, size özel çözümlerimiz hakkında daha fazla bilgile sahibi olmak için, çerezler vasıtasıyla, ne tür yerleri paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.",
    title: "Çerez Politikası",
    description: `<p>Son g&uuml;ncellenme: 04/02/2025</p> <br /> <p> Biz, Mavi Tik Medya Ajansı, olarak g&uuml;venliğinize &ouml;nem veriyor ve bu &Ccedil;erez Politikası ile siz sevgili ziyaret&ccedil;ilerimizi, web sitemizde hangi &ccedil;erezleri, hangi ama&ccedil;la kullandığımız ve &ccedil;erez ayarlarınızı nasıl değiştireceğiniz konularında kısaca bilgilendirmeyi hedefliyoruz. </p> <br /> <p> Sizlere daha iyi hizmet verebilmek adına, &ccedil;erezler vasıtasıyla, ne t&uuml;r kişisel verilerinizin hangi ama&ccedil;la toplandığı ve nasıl işlendiği konularında, kısaca bilgi sahibi olmak i&ccedil;in l&uuml;tfen bu &Ccedil;erez Politikasını okuyunuz. Daha fazla bilgi i&ccedil;in Gizlilik Politikamıza g&ouml;z atabilir ya da bizlerle &ccedil;ekinmeden iletişime ge&ccedil;ebilirsiniz. </p> <br /> <p> <strong>&Ccedil;erez Nedir?</strong> </p> <p> &Ccedil;erezler, kullanıcıların web sitelerini daha verimli bir şekilde kullanabilmeleri adına, cihazlarına kaydedilen k&uuml;&ccedil;&uuml;k dosyacıklardır. &Ccedil;erezler vasıtasıyla kullanıcıların bilgilerinin işleniyor olması sebebiyle, 6698 sayılı&nbsp; <a href="/kvkk" target="_blank" className="text-primary underline" title="KVKK" > Kişisel Verilerin Korunması Kanunu </a> &nbsp;gereğince, kullanıcıların bilgilendirilmeleri ve onaylarının alınması gerekmektedir. </p> <br /> <p> Bizler de siz sevgili ziyaret&ccedil;ilerimizin, web sitemizden en verimli şekilde yararlanabilmelerini ve siz sevgili ziyaret&ccedil;ilerimizin kullanıcı deneyimlerinin geliştirilebilmesini sağlamak adına, &ccedil;eşitli &ccedil;erezler kullanmaktayız. </p> <br /> <ol className="list-decimal list-inside"> <li> <strong> Zorunlu &Ccedil;erezler</strong> </li> </ol> <p> Zorunlu &ccedil;erezler, web sitesine ilişkin temel işlevleri etkinleştirerek web sitesinin kullanılabilir hale gelmesini sağlayan &ccedil;erezlerdir. Web sitesi bu &ccedil;erezler olmadan d&uuml;zg&uuml;n &ccedil;alışmaz. </p> <br /> <ol className="list-decimal list-inside" start={2}> <li> <strong> Performans &Ccedil;erezleri</strong> </li> </ol> <p> Performans &ccedil;erezleri, ziyaret&ccedil;ilerin web sitesine ilişkin kullanım bilgilerini ve tercihlerini anonim olarak toplayan ve bu sayede web sitesinin performansının geliştirilmesine olanak sağlayan &ccedil;erezlerdir. </p> <br /> <ol className="list-decimal list-inside" start={3}> <li> <strong> Fonksiyonel &Ccedil;erezler</strong> </li> </ol> <p> Fonksiyonel &ccedil;erezler, kullanıcıların web sitesine ilişkin ge&ccedil;miş kullanımlarından yola &ccedil;ıkılarak gelecekteki ziyaretlerinde tanınmalarını ve hatırlanmalarını sağlayan ve bu sayede web sitelerinin kullanıcılara dil, b&ouml;lge vb. gibi kişiselleştirilmiş bir hizmet sunmasına olanak tanıyan &ccedil;erezlerdir. </p> <br /> <ol className="list-decimal list-inside" start={4}> <li> <strong> Reklam &Ccedil;erezleri</strong> </li> </ol> <p> Reklam &ccedil;erezleri, &uuml;&ccedil;&uuml;nc&uuml; taraflara ait &ccedil;erezlerdir ve web sitelerinde ziyaret&ccedil;ilerin davranışlarını izlemek i&ccedil;in kullanılırlar. Bu &ccedil;erezlerin ama&ccedil;ları, ziyaret&ccedil;ilerin ihtiya&ccedil;larına y&ouml;nelik ilgilerini &ccedil;ekecek reklamların g&ouml;sterilmesine yardımcı olmaktır ve sorumluluğu &ccedil;erez sahibi &uuml;&ccedil;&uuml;nc&uuml; taraflara aittir. </p> <br /> <p> <strong>&Ccedil;erezler İle İşlenen Kişisel Veriler Nelerdir?</strong> </p> <p> Kimlik (isim, soy isim, doğum tarihi vb.) ve iletişim (adres, e-posta adresi, telefon, IP, konum vb.) bilgileriniz tarafımızca, &ccedil;erezler (cookies) vasıtasıyla, otomatik veya otomatik olmayan y&ouml;ntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi &uuml;&ccedil;&uuml;nc&uuml; taraflardan elde edilerek, kaydedilerek, depolanarak ve g&uuml;ncellenerek, aramızdaki hizmet ve s&ouml;zleşme ilişkisi &ccedil;er&ccedil;evesinde ve s&uuml;resince, meşru menfaat işleme şartına dayanılarak işlenecektir. </p> <br /> <p> <strong>&Ccedil;erezler Hangi Ama&ccedil;la Kullanılmaktadır?</strong> </p> <p> Web sitemizde, ş&uuml;pheli eylemlerin tespiti yoluyla g&uuml;venliğin sağlanması, kullanıcıların tercihleri doğrultusunda işlevsellik ve performansın artırılması, &uuml;r&uuml;nlerin ve hizmetlerin geliştirilmesi ve kişiselleştirilmesi ile bu hizmetlere ulaşımın kolaylaştırılması, s&ouml;zleşmesel ve hukuki sorumlulukların yerine getirilmesi ama&ccedil;lı &ccedil;erezler kullanmaktadır. Ayrıca kullanıcıların daha geniş kapsamlı hizmet sağlayıcılar ile buluşturulabilmesi amacıyla reklam &ccedil;erezleri ve &uuml;&ccedil;&uuml;nc&uuml; taraflarla bilgi paylaşımı da s&ouml;z konusudur. </p> <br /> <p> <strong>&Ccedil;erezler Nasıl Y&ouml;netilmektedir?</strong> </p> <p> T&uuml;m bu a&ccedil;ıklamalardan sonra, hangi &ccedil;erezlerin kullanılacağı konusu, tamamen kullanıcılarımızın &ouml;zg&uuml;r iradelerine bırakılmıştır. &Ccedil;erez tercihlerinizi, tarayıcınızın ayarlarından silerek ya da engelleyerek, web sitemize adım attığınız anda y&ouml;netebilir ya da gelecekte, istediğiniz zaman bu ayarları değiştirebilirsiniz. Daha ayrıntılı bilgi i&ccedil;in Gizlilik Politikamıza g&ouml;z atabilir ya da bizlerle&nbsp; <a href="mailto:mavitikmedyaajansi@gmail.com" target="_blank" rel="noreferrer noopener nofollow" className="text-primary underline" > mavitikmedyaajansi@gmail.com </a> &nbsp;e-mail adresi &uuml;zerinden iletişime ge&ccedil;ebilirsiniz. </p> <br /> <p> Bu &ccedil;erez politikası,&nbsp;https://mavitikmedya.com&nbsp;aracılığıyla oluşturulmuştur. </p>`,
  },
  "gizlilik-politikasi": {
    meta_title: "Gizlilik Politikası",
    meta_description:
      "Güvenliğiniz bizim için önemli. Bu sebeple bizimle paylaşacağınız kişisel verileriz hassasiyetle korunmaktadır. Biz, Mavi Tik Medya Ajansı olarak, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile, hangi kişisel verilerinizin hangi amaçlara uygun olarak işleneceği, işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme yöntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı amaçlıyoruz.",
    title: "Gizlilik Politikası",
    description: `<p>Son g&uuml;ncellenme: 04/02/2025</p> <br /> <p> G&uuml;venliğiniz bizim i&ccedil;in &ouml;nemli. Bu sebeple bizimle paylaşacağınız kişisel verileriz hassasiyetle korunmaktadır. </p> <br /> <p> Biz, Mavi Tik Medya Ajansı olarak, veri sorumlusu olarak, bu gizlilik ve kişisel verilerin korunması politikası ile, hangi kişisel verilerinizin hangi ama&ccedil;la işleneceği, işlenen verilerin kimlerle ve neden paylaşılabileceği, veri işleme y&ouml;ntemimiz ve hukuki sebeplerimiz ile; işlenen verilerinize ilişkin haklarınızın neler olduğu hususunda sizleri aydınlatmayı ama&ccedil;lıyoruz. </p> <br /> <p> <strong> Toplanan Kişisel Verileriniz, Toplanma Y&ouml;ntemi ve Hukuki Sebebi </strong> </p> <br /> <p> IP adresiniz ve kullanıcı aracısı bilgileriniz, sadece analiz yapmak amacıyla ve &ccedil;erezler (cookies) vb. teknolojiler vasıtasıyla, otomatik veya otomatik olmayan y&ouml;ntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi &uuml;&ccedil;&uuml;nc&uuml; taraflardan elde edilerek, kaydedilerek, depolanarak ve g&uuml;ncellenerek, aramızdaki hizmet ve s&ouml;zleşme ilişkisi &ccedil;er&ccedil;evesinde ve s&uuml;resince, meşru menfaat işleme şartına dayanılarak işlenecektir. </p> <br /> <p> <strong>Kişisel Verilerinizin İşlenme Amacı</strong> </p> <br /> <p> Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini ve maksimum d&uuml;zeyde faydalanılabilmesini sağlamak, hizmetlerimizi, ihtiya&ccedil;larınız doğrultusunda geliştirebilmek ve sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal &ccedil;er&ccedil;eveler i&ccedil;erisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, s&ouml;zleşme ve hizmet s&uuml;resince, amacına uygun ve &ouml;l&ccedil;&uuml;l&uuml; bir şekilde işlenecek ve g&uuml;ncellenecektir. </p> <br /> <p> <strong> Toplanan Kişisel Verilerin Kimlere ve Hangi Ama&ccedil;larla Aktarılabileceği </strong> </p> <br /> <p> Bizimle paylaştığınız kişisel verileriniz; faaliyetlerimizi y&uuml;r&uuml;tmek &uuml;zere hizmet aldığımız ve/veya verdiğimiz, s&ouml;zleşmesel ilişki i&ccedil;erisinde bulunduğumuz, iş birliği yaptığımız, yurt i&ccedil;i ve yurt dışındaki 3. şahıslar ile kurum ve kuruluşlara ve talep halinde adli ve idari makamlara, gerekli teknik ve idari &ouml;nlemler alınması koşulu ile aktarılabilecektir. </p> <br /> <p> <strong>Kişisel Verileri İşlenen Kişi Olarak Haklarınız</strong> </p> <br /> <p> KVKK madde 11 uyarınca herkes, veri sorumlusuna başvurarak aşağıdaki haklarını kullanabilir: </p> <ol className="list-decimal list-inside"> <li>Kişisel veri işlenip işlenmediğini &ouml;ğrenme,</li> <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li> <li> Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını &ouml;ğrenme, </li> <li> Yurt i&ccedil;inde veya yurt dışında kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişileri bilme, </li> <li> Kişisel verilerin eksik veya yanlış işlenmiş olması h&acirc;linde bunların d&uuml;zeltilmesini isteme, </li> <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li> <li> (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişilere bildirilmesini isteme, </li> <li> İşlenen verilerin m&uuml;nhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya &ccedil;ıkmasına itiraz etme, </li> <li> Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması h&acirc;linde zararın giderilmesini talep etme, haklarına sahiptir. </li> </ol> <br /> <p> Yukarıda sayılan haklarınızı kullanmak &uuml;zere&nbsp; <a href="mailto:mavitikmedyaajansi@gmail.com" target="_blank" rel="noreferrer noopener nofollow" className="text-primary underline" > mavitikmedyaajansi@gmail.com </a> &nbsp;&uuml;zerinden bizimle iletişime ge&ccedil;ebilirsiniz. </p> <br /> <p> <strong>İletişim</strong> </p> <br /> <p> Sizlere hizmet sunabilmek ama&ccedil;lı analizler yapabilmek i&ccedil;in, sadece gerekli olan kişisel verilerinizin, işbu gizlilik ve kişisel verilerin işlenmesi politikası uyarınca işlenmesini, kabul edip etmemek hususunda tamamen &ouml;zg&uuml;rs&uuml;n&uuml;z. Siteyi kullanmaya devam ettiğiniz takdirde kabul etmiş olduğunuz tarafımızca varsayılacak olup, daha ayrıntılı bilgi i&ccedil;in bizimle&nbsp; <a href="mailto:mavitikmedyaajansi@gmail.com" target="_blank" rel="noreferrer noopener nofollow" className="text-primary underline" > mavitikmedyaajansi@gmail.com </a> &nbsp;e-mail adresi &uuml;zerinden iletişime ge&ccedil;mekten l&uuml;tfen &ccedil;ekinmeyiniz. </p> <br /> <p> Bu gizlilik politikası,&nbsp;https://mavitikmedya.com&nbsp;aracılığıyla oluşturulmuştur. </p>`,
  },
  "kullanim-kosullari": {
    meta_title: "Kullanım Koşulları",
    meta_description:
      "SİTE'nin kullanımından doğan zararlara ilişkin sorumluluğumuz, kast ve ağır ihmal ile sınırlıdır. SÖZLEŞMENİN IHLALILDEN DOĞAN ZARARLARDA, TELEKOMUNYA, SİSTEM, KAMU KURUMU, KURUŞU VE KUTURUCU ILİŞKISI, KULLANIMİ VE İLETİŞİMİ SİSTEMLERİNE TELİFİN OLARAK SORUMLU OLMAKTAN SATIŞIR.",
    title: "Kullanım Koşulları",
    description: `<p>Son g&uuml;ncellenme: 04/02/2025</p> <br /> <p> Sevgili ziyaret&ccedil;imiz, l&uuml;tfen&nbsp;https://mavitikmedya.com&nbsp;web sitemizi ziyaret etmeden &ouml;nce işbu kullanım koşulları s&ouml;zleşmesini dikkatlice okuyunuz. Siteye erişiminiz tamamen bu s&ouml;zleşmeyi kabul&uuml;n&uuml;ze ve bu s&ouml;zleşme ile belirlenen şartlara uymanıza bağlıdır. Şayet bu s&ouml;zleşmede yazan herhangi bir koşulu kabul etmiyorsanız, l&uuml;tfen siteye erişiminizi sonlandırınız. Siteye erişiminizi s&uuml;rd&uuml;rd&uuml;ğ&uuml;n&uuml;z takdirde, koşulsuz ve kısıtlamasız olarak, işbu s&ouml;zleşme metninin tamamını kabul ettiğinizin, tarafımızca varsayılacağını l&uuml;tfen unutmayınız. </p> <br /> <p> https://mavitikmedya.com&nbsp;web sitesi Mavi Tik Medya Ajansı tarafından y&ouml;netilmekte olup, bundan sonra SİTE olarak anılacaktır. İşbu siteye ilişkin Kullanım Koşulları, yayınlanmakla y&uuml;r&uuml;rl&uuml;ğe girer. Değişiklik yapma hakkı, tek taraflı olarak SİTE&apos;ye aittir ve SİTE &uuml;zerinden g&uuml;ncel olarak paylaşılacak olan bu değişiklikleri, t&uuml;m kullanıcılarımız baştan kabul etmiş sayılır. </p> <br /> <p> <strong>Gizlilik</strong> </p> <br /> <p> Gizlilik, ayrı bir sayfada, kişisel verilerinizin tarafımızca işlenmesinin esaslarını d&uuml;zenlemek &uuml;zere mevcuttur. SİTE&apos;yi kullandığınız takdirde, bu verilerin işlenmesinin gizlilik politikasına uygun olarak ger&ccedil;ekleştiğini kabul edersiniz. </p> <br /> <p> <strong>Hizmet Kapsamı</strong> </p> <br /> <p> Şirket Adı olarak, sunacağımız hizmetlerin kapsamını ve niteliğini, yasalar &ccedil;er&ccedil;evesinde belirlemekte tamamen serbest olup; hizmetlere ilişkin yapacağımız değişiklikler, SİTE&apos;de yayınlanmakla y&uuml;r&uuml;rl&uuml;ğe girmiş sayılacaktır. </p> <br /> <p> <strong>Telif Hakları</strong> </p> <br /> <p> SİTE&apos;de yayınlanan t&uuml;m metin, kod, grafikler, logolar, resimler, ses dosyaları ve kullanılan yazılımın sahibi (bundan b&ouml;yle ve daha sonra &quot;i&ccedil;erik&quot; olarak anılacaktır) Şirket Adı olup, t&uuml;m hakları saklıdır. Yazılı izin olmaksızın site i&ccedil;eriğinin &ccedil;oğaltılması veya kopyalanması kesinlikle yasaktır. </p> <br /> <p> <strong>Genel H&uuml;k&uuml;mler</strong> </p> <br /> <ul className="list-disc list-inside"> <li> Kullanıcıların tamamı, SİTE&apos;yi yalnızca hukuka uygun ve şahsi ama&ccedil;larla kullanacaklarını ve &uuml;&ccedil;&uuml;nc&uuml; kişinin haklarına tecav&uuml;z teşkil edecek nitelikteki herhangi bir faaliyette bulunmayacağını taahh&uuml;t eder. SİTE d&acirc;hilinde yaptıkları işlem ve eylemlerindeki, hukuki ve cezai sorumlulukları kendilerine aittir. İşbu iş ve eylemler sebebiyle, &uuml;&ccedil;&uuml;nc&uuml; kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı SİTE&apos;nin doğrudan ve/veya dolaylı hi&ccedil;bir sorumluluğu yoktur. </li> <li> SİTE&apos;de mevcut bilgilerin doğruluk ve g&uuml;ncelliğini sağlamak i&ccedil;in elimizden geleni yapmaktayız. Lakin g&ouml;sterdiğimiz &ccedil;abaya rağmen, bu bilgiler, fiili değişikliklerin gerisinde kalabilir, birtakım farklılıklar olabilir. Bu sebeple, site i&ccedil;erisinde yer alan bilgilerin doğruluğu ve g&uuml;ncelliği ile ilgili tarafımızca, a&ccedil;ık veya zımni, herhangi bir garanti verilmemekte, hi&ccedil;bir taahh&uuml;tte bulunulmamaktadır. </li> <li> SİTE&apos;de &uuml;&ccedil;&uuml;nc&uuml; şahıslar tarafından işletilen ve i&ccedil;erikleri tarafımızca bilinmeyen diğer web sitelerine, uygulamalara ve platformlara k&ouml;pr&uuml;ler (hyperlink) bulunabilir. SİTE, işlevsellik yalnızca bu sitelere ulaşımı sağlamakta olup, i&ccedil;erikleri ile ilgili hi&ccedil;bir sorumluluk kabul etmemekteyiz. </li> <li> SİTE&apos;yi vir&uuml;slerden temizlenmiş tutmak konusunda elimizden geleni yapsak da, vir&uuml;slerin tamamen bulunmadığı garantisini vermemekteyiz. Bu nedenle veri indirirken, vir&uuml;slere karşı gerekli &ouml;nlemi almak, kullanıcıların sorumluluğundadır. Vir&uuml;s vb. k&ouml;t&uuml; ama&ccedil;lı programlar, kodlar veya materyallerin sebep olabileceği zararlardan dolayı sorumluluk kabul etmemekteyiz. </li> <li> SİTE&apos;de sunulan hizmetlerde, kusur veya hata olmayacağına ya da kesintisiz hizmet verileceğine dair garanti vermemekteyiz. SİTE&apos;ye ve sitenin hizmetlerine veya herhangi bir b&ouml;l&uuml;m&uuml;ne olan erişiminizi &ouml;nceden bildirmeksizin herhangi bir zamanda sonlandırabiliriz. </li> </ul> <br /> <p> <strong>Sorumluluğun Sınırlandırılması</strong> </p> <br /> <p> SİTE&apos;nin kullanımından doğan zararlara ilişkin sorumluluğumuz, kast ve ağır ihmal ile sınırlıdır. S&ouml;zleşmenin ihlalinden doğan zararlarda, talep edilebilecek toplam tazminat, &ouml;ng&ouml;r&uuml;lebilir hasarlar ile sınırlıdır. Yukarıda bahsedilen sorumluluk sınırlamaları aynı zamanda insan hayatına, bedeni yaralanmaya veya bir kişinin sağlığına gelebilecek zararlar durumunda ge&ccedil;erli değildir. Hukuken m&uuml;cbir sebep sayılan t&uuml;m durumlarda, gecikme, ifa etmeme veya temerr&uuml;tten dolayı, herhangi bir tazminat y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;m&uuml;z doğmayacaktır. </p> <br /> <p> Uyuşmazlık &Ccedil;&ouml;z&uuml;m&uuml;: İşbu S&ouml;zleşme&apos;nin uygulanmasından veya yorumlanmasından doğacak her t&uuml;rl&uuml; uyuşmazlığın &ccedil;&ouml;z&uuml;m&uuml;nde, T&uuml;rkiye Cumhuriyeti yasaları uygulanır; Yozgat Adliyesi Mahkemeleri ve İcra Daireleri yetkilidir. </p> <br /> <p> Bu kullanım koşulları,&nbsp;https://mavitikmedya.com&nbsp;aracılığıyla oluşturulmuştur. </p>`,
  },
  kvkk: {
    meta_title: "KVKK",
    meta_description:
      "Kişisel Verilerin Korunması Kanunu Kapsamında Genel Bilgilendirme ve Aydınlatma Metni",
    title:
      "KİŞİSEL VERİLERİN KORUNMASI KANUNU KAPSAMINDA&nbsp;GENEL BİLGİLENDİRME VE AYDINLATMA METNİ",
    description: `<p> İşbu bilgilendirme ve aydınlatma metni Mavi Tik Medya Ajansı tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili sair mevzuat kapsamında, kişisel verilerin hukuka uygun olarak toplanması, elde edilmesi, saklanması, paylaşılması ve gizliliğinin koruması sırasında Veri sahiplerinin bilgilendirilmesi ve aydınlatılması amacıyla hazırlanmıştır. </p> <br /> <p> Bu kapsamda aşağıda a&ccedil;ıklanacak olan şart ve ama&ccedil;lar ile hukuka uygun şekilde işlenecek veriler a&ccedil;ısından ilgili kanunun 10. Maddesi gereği aydınlatma y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;m&uuml;z&uuml;n yerine getirilmesi amacıyla bu bilgilendirme metni bilgi ve incelemenize sunulmaktadır. </p> <br /> <p>Veri Sorumlusu Tanımı:</p> <br /> <p> 6698 sayılı Kanun&rsquo;un 3. Maddesinde tanımlandığı hali ile veri sorumlusu, &ldquo;Kişisel verilerin işleme ama&ccedil;larını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasından ve y&ouml;netilmesinden sorumlu olan ger&ccedil;ek veya t&uuml;zel kişi&rdquo; olarak tanımlanmıştır. </p> <br /> <p> Bu kapsamda Mavi Tik Medya Ajansı da kişisel verilerin işlenmesine ilişkin Veri Sorumlusu sıfatı ile sorumluluğu bulunmakla, bilgilendirme ve aydınlatma y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;n&uuml;n yerine getirilmesi bu aydınlatma metni ile sağlanmaktadır. </p> <br /> <p>Kişisel Verilerin İşlenmesinin Hukuki Dayanak ve Sebepleri:</p> <br /> <p> 6698 sayılı Kişisel Verilerin Korunması Hakkında Kanun&rsquo;da a&ccedil;ık&ccedil;a tanımlanmış bulunan kişisel verilerin elde edilmesi halinde bu veriler, yine ilgili Kanun&rsquo;un 5. ve 6. Madde kapsamında işlenmektedir. Bu kapsamda kişisel verileriniz aşağıdaki hukuki sebeplere dayanılarak işlenecek olup, belirtilen hukuki sebepler dışındaki durumlarda Kişisel Verilerinizin işlenmesi i&ccedil;in a&ccedil;ık rızanız talep edilecektir.&nbsp; </p> <br /> <p>Kanun gereği bu hukuki ama&ccedil;lar;</p> <br /> <ul className="list-disc list-inside"> <li> Yetkili kamu kurum ve kuruluşlarından bilgi istendiğinde verilebilmesi amacıyla, &ouml;zellikle Mahkeme ve yetkili kamu g&ouml;revlilerinin talep etmesi,&nbsp; </li> <li> Yasal y&uuml;k&uuml;ml&uuml;l&uuml;klerin yerine getirilebilmesi ve y&uuml;r&uuml;rl&uuml;kteki mevzuattan doğan hakların kullanılabilmesi,&nbsp; </li> <li> S&ouml;zleşme kurulması, ifası ve sonu&ccedil;lanması s&uuml;re&ccedil;lerinden kaynaklanan y&uuml;k&uuml;ml&uuml;l&uuml;klerin yerine getirilmesi amacıyla gerekli g&ouml;r&uuml;lmesi,&nbsp; </li> <li> Kişisel verilerin B&ouml;lgemiz tarafından işlenmesinin tarafımızın veya sizlerin veya &uuml;&ccedil;&uuml;nc&uuml; kişilerin haklarının tesisi, kullanılması veya korunması i&ccedil;in zorunlu olması, </li> <li> Kişi temel hak ve &ouml;zg&uuml;rl&uuml;kleri korunmak kaydıyla, B&ouml;lge&rsquo;mizin meşru menfaatleri i&ccedil;in verilerin işlenmesinin zorunlu olması, (mevcut m&uuml;şterilerin memnuniyet değerlendirme faaliyetlerinin y&uuml;r&uuml;t&uuml;lmesi, organizasyon ve etkinlik y&ouml;netimi, finans- muhasebe işlemlerinin ger&ccedil;ekleştirilmesi, denetim s&uuml;re&ccedil;lerinin y&uuml;r&uuml;t&uuml;lmesi, iş sağlığı ve g&uuml;venliği faaliyetlerinin y&uuml;r&uuml;t&uuml;lmesi, Mahkeme vb. yetkili kamu kuruluşlarına bildirim y&uuml;k&uuml;ml&uuml;l&uuml;ğ&uuml;n&uuml;n yerine getirilmesi vb. işlemler gereği) </li> <li> Fiili imk&acirc;nsızlık nedeniyle rızasını a&ccedil;ıklayamayacak durumda bulunan veya rızasına hukuki ge&ccedil;erlilik tanınmayan kişinin kendisinin ya da bir başkasının hayatı veya beden b&uuml;t&uuml;nl&uuml;ğ&uuml;n&uuml;n korunması i&ccedil;in zorunlu olması, </li> <li> Kişisel Verilerin ilgilisi tarafından halihazırda alenileştirilmiş olması, </li> <li> Bir hakkın tesisi, kullanılması veya korunması i&ccedil;in verilerin işlenmesinin zorunlu olması, halleridir.&nbsp; </li> </ul> <br /> <p> Yukarıda sıralamış olduğumuz ama&ccedil;lar dışında kalan Kişisel Veriler, veri ilgilisi kişinin a&ccedil;ık rızasının alınması suretiyle işlenecektir. Kanun &ccedil;er&ccedil;evesinde edinilen ve işlenecek kişisel veriler B&ouml;lgemiz ile veri ilgilisi arasında oluşacak hukuki ilişkiye bağlı olarak farklılık g&ouml;sterebilecektir. Kişisel veriler B&ouml;lgemiz tarafınca hukuka uygun şekilde farklı platformlar (manuel yollar, s&ouml;zl&uuml;/yazılı beyanlar, elektronik kanallar, Mavi Tik Medya Ajansı internet sitesindeki formlar veya ad, soyad, iş veya &ouml;zel e-posta adresi gibi bilgiler girilerek veya kullanıcı adı ve şifresi kullanılarak giriş yapılan sayfalar aracılığıyla web sitesi ziyaret ve kullanımı, B&ouml;lge&rsquo;miz nezdinde yapılan etkinlik ve faaliyetler kapsamında) kanalıyla toplanabilecektir.&nbsp; </p> <br /> <p> B&ouml;lgemizce edinilen Kişisel Veriler, yukarıdaki şartları taşımak ve/veya a&ccedil;ık rızanın mevcut olduğu s&uuml;rece elde edinilebilecek, depolanabilecek, g&uuml;ncellenebilecek ve işlenebilecektir. </p> <br /> <p>Kişisel Verilerin Toplanması, İşlenmesinin Amacı</p> <br /> <p> Web sitemiz aracılığıyla ya da yukarıda bahsi ge&ccedil;en diğer yollar ile tarafımızca edinilen Kişisel Verileriniz niteliğine g&ouml;re aşağıdaki ama&ccedil;larla tarafımızca işlenecektir:&nbsp; </p> <br /> <ul className="list-disc list-inside"> <li> Mavi Tik Medya Ajansı olarak sunduğumuz &uuml;r&uuml;n ve hizmetlerimizden m&uuml;şterilerimizi faydalandırmak i&ccedil;in gerekli planlama, değerlendirme ve &ccedil;alışmaların iş birimlerimiz tarafından yapılması; </li> <li> Sunduğumuz hizmetlere y&ouml;nelik reklam ve pazarlama faaliyetlerinin y&uuml;r&uuml;t&uuml;lerek benzeri konularda bilgilendirme yapılması, kurumsal iletişim faaliyetlerinin y&uuml;r&uuml;t&uuml;lmesi, </li> <li> Pazarlama ve M&uuml;şteri İlişkileri Y&ouml;netimi &ccedil;alışmalarının y&uuml;r&uuml;t&uuml;lmesi; </li> <li> Kurumsal iletişim ve bu kapsamda sair etkinlik, kampanya ve davetlerin d&uuml;zenlenmesi ve bunlar hakkında bilgilendirme yapılması, Pazar araştırma &ccedil;alışmalarının y&uuml;r&uuml;t&uuml;lmesi;&nbsp; </li> <li> M&uuml;şterilerimizin kullanımına sunduğumuz dijital platformların iyileştirilmesi, kişiselleştirilmesi, gerekirse bu ama&ccedil;la &ccedil;erez kullanılması; </li> <li> İlgili kişilerden gelen talep, &ouml;neri ve şikayetlerin takibi, değerlendirilmesi, m&uuml;şteri y&ouml;netimi ve bu kapsamda planlama, her alanda değerlendirme &ccedil;alışması yapılması; </li> <li> Mavi Tik Medya Ajansı kapsamında y&uuml;r&uuml;t&uuml;len her t&uuml;rl&uuml; faaliyetin s&uuml;rd&uuml;r&uuml;lebilirliğini, iyileştirmelerin yapılmasını sağlamak ve s&ouml;zleşmesel ilişki kurduğumuz kişi ve firmaların denetimi; </li> <li> Mavi Tik Medya Ajansı&rsquo;nın iş-hizmet ilişkisi i&ccedil;erisinde olduğu kişilerin hukuki ve ticari g&uuml;venliğinin sağlanması, </li> <li> İş sağlığı ve g&uuml;venliği s&uuml;re&ccedil;lerinin planlanması ve icrası; </li> <li> S&ouml;z konusu bilgiler kullanılarak yasal hakların kullanılması, ilgili kişi/kurum ile mevcut hukuki ilişkinin sona ermesinden sonra işlem ge&ccedil;mişine ilişkin bilgilerin uyuşmazlık halinde delil olarak kullanılması; </li> <li> Faaliyetleri kapsamında planlama, raporlama, ziyaret&ccedil;i/m&uuml;şteri istatistikleri ve benzeri incelemelerin yapılması ve/veya Yurti&ccedil;i ilgili mevzuata uyum sağlanması, kamu kurum ve kuruluşları tarafından talep edilen bilgilerin temini, raporlama y&uuml;k&uuml;ml&uuml;l&uuml;klerinin yerine getirilmesi. </li> <li> Web sitesi/mobil uygulamalar &uuml;zerinden işlem yapan ya da adına işlem yapılan kişilerin, ziyaret&ccedil;ilerin kimlik bilgilerinin teyit edilmesi ve iletişim i&ccedil;in gerekli adres ve diğer gerekli bilgilerin kaydedilmesi, </li> <li> Mavi Tik Medya Ajansı tarafından kurulan internet sitesi ve diğer elektronik sistemlerin ve fiziki ortamların g&uuml;venliğinin sağlanması </li> </ul> <p>Veri Sahibinin Hakları&nbsp;</p> <br /> <p> Kişisel verisi işlenen ger&ccedil;ek/t&uuml;zel kişilerin KVKK&rsquo;nın 11. Maddesi uyarıca sahip olduğu haklar aşağıdaki gibidir; </p> <br /> <ul className="list-disc list-inside"> <li>Kişisel veri işlenip işlenmediğini &ouml;ğrenme,</li> <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li> <li> Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını &ouml;ğrenme, </li> <li> Yurt i&ccedil;inde veya yurt dışında kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişileri bilme, </li> <li> Kişisel verilerin eksik veya yanlış işlenmiş olması h&acirc;linde bunların d&uuml;zeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişilere bildirilmesini isteme, </li> <li> KVKK ve ilgili diğer kanun h&uuml;k&uuml;mlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması h&acirc;linde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı &uuml;&ccedil;&uuml;nc&uuml; kişilere bildirilmesini isteme, </li> <li> İşlenen verilerin m&uuml;nhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya &ccedil;ıkmasına itiraz etme, </li> <li> Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması h&acirc;linde zararın giderilmesini talep etme. </li> </ul> <br /> <p>Veri Sahibinin Taleplerinin Değerlendirilmesi</p> <br /> <p> 6698 sayılı KVK Kanunu&rsquo;nun 13. Maddesinin 1. Fıkrası gereğince, yukarıda belirtilen hakların kullanılması ile ilgili iletilen talepler, yazılı veya Kişisel Verileri Koruma Kurulu&rsquo;nun belirlediği diğer y&ouml;ntemlerle B&ouml;lgemiz&rsquo;e iletildikten sonra başvurunuz en kısa s&uuml;re i&ccedil;erisinde &uuml;cretsiz olarak (Ancak, işlemin ayrıca bir maliyeti gerektirmesi h&acirc;linde, Kurulca belirlenen tarifedeki &uuml;cret alınabilir) sonu&ccedil;landırılacak ve bize ilettiğiniz iletişim bilginiz &uuml;zerinden geri d&ouml;n&uuml;ş sağlayacaktır. </p> <br /> <p> &Uuml;&ccedil;&uuml;nc&uuml; taraf web sitelerine linkler (bağlantılar) </p> <br /> <p> B&ouml;lgemiz Web sitesi &uuml;&ccedil;&uuml;nc&uuml; kişi sıfatındaki web siteleri ile bağlantılar i&ccedil;erebilir. Bu sitelerin gizlilik politikaları i&ccedil;in B&ouml;lge&rsquo;mizce herhangi bir sorumluluk kabul edilmez ve hi&ccedil;bir şekilde, bu Web sitelerinin y&uuml;r&uuml;rl&uuml;kte olan veri koruma uygulamalarının ilgili t&uuml;m mevzuat ve y&ouml;netmeliklere uygun olup olmadığı garanti edilmez. </p>`,
  },
};
