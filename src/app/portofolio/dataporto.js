import portoimage from "../../../public/IMG/portoimage.png";
import porto_eureka_tracking from "../../../public/IMG/porto_eureka_tracking.png";
import porto_bensin from "../../../public/IMG/porto_bensin.png";
import CLI_Tiktok_Downloader from "../../../public/IMG/CLI_Tiktok_Downloader.png";
import CLI_Cek_Cuaca from "../../../public/IMG/CLI_Cek_Cuaca.png";
import porto_Rumahimpian from "../../../public/IMG/porto_Rumahimpian.png";
import porto_RajaCepat from "../../../public/IMG/porto_RajaCepat.png";
import porto_Eureka_Logistic from "../../../public/IMG/porto_Eureka_Logistic.png";
import API_Scraping_berita_CNN from "../../../public/IMG/API_Scraping_berita_CNN.png";
import screen_cuaca_android from "../../../public/IMG/screen_cuaca_android.png";
import siplahApp from "../../../public/IMG/siplahapp.jpg";
import siplahApp2 from "../../../public/IMG/siplahapp2.jpg";
import siplahApp3 from "../../../public/IMG/siplahapp3.jpg";
import siplahApp4 from "../../../public/IMG/siplahapp4.jpg";
import siplahApp5 from "../../../public/IMG/siplahapp5.jpg";
import siplahApp6 from "../../../public/IMG/siplahapp6.jpg";
import siplahsatdik from "../../../public/IMG/siplah-satdik.png";
import siplahSatdikdetail from "../../../public/IMG/siplahSatdikdetail.png";
import race from "../../../public/IMG/rajaCepat.png";
import race2 from "../../../public/IMG/rajaCepat2.png";
import race3 from "../../../public/IMG/rajaCepat3.png";
import batugin from "../../../public/IMG/batugin.png";
import batugin2 from "../../../public/IMG/batugin2.png";
import batugin3 from "../../../public/IMG/batugin3.png";
import eureka_logistik from "../../../public/IMG/eureka_logistik.png";
import eureka_logistik2 from "../../../public/IMG/eureka_logistik2.png";
import waBot from "../../../public/IMG/bot_wa_masdis.jpg";
import waBot2 from "../../../public/IMG/bot_wa_masdis2.jpg";
import masterdiskon_web from "../../../public/IMG/masterdiskon_web.png";
import masterdiskon_web2 from "../../../public/IMG/masterdiskon_web2.png";
import jajaAuto from "../../../public/IMG/jaja_auto_web.png";
import jajaAuto2 from "../../../public/IMG/jaja_auto_web2.png";
import jajaId from "../../../public/IMG/jajaid.png";
import jajaId2 from "../../../public/IMG/jajaid2.png";

export const portfolioData = [
  {
    title: "SIPLAH EUREKA | Belanja keperluan sekolah praktis dan mudah",
    image: siplahsatdik,
    images: [siplahsatdik, siplahSatdikdetail],
    link: "https://siplah.eurekabookhouse.co.id/satdik/",
    linkText: "https://siplah.eurekabookhouse.co.id/satdik/",
    technologies: ["React JS", "Express.js", "Node.js", "TailWind"],
    categories: ["Project", "Web App", "Api", "DevOps"],
    description:
      "SIPLAH EUREKA adalah platform e-commerce terintegrasi untuk keperluan sekolah yang saya kembangkan menggunakan Express.js dan Next.js. Proyek ini berhasil meningkatkan efisiensi pemrosesan pesanan sebesar 20% melalui optimasi antarmuka pengguna dan performa backend. Saya juga mengimplementasikan integrasi dengan ARKAS (Aplikasi Rencana Kegiatan dan Anggaran Sekolah) untuk mempermudah proses perencanaan dan pembelian.",
    features: [
      "Integrasi dengan sistem ARKAS",
      "Optimasi performa backend dan frontend",
      "Sistem pemrosesan pesanan yang efisien",
      "Integrasi pembayaran yang aman",
      "Dashboard manajemen produk dan pesanan",
      "Sistem tracking pesanan real-time",
    ],
  },
  {
    title: "KPU Logistics Tracking System Eureka Logistics",
    image: eureka_logistik,
    images: [eureka_logistik, eureka_logistik2],
    link: "https://eurekalogistics.co.id/",
    linkText: "https://eurekalogistics.co.id/",
    technologies: ["React JS", "Node.js", "Express.js"],
    categories: ["Project", "Web App", "DevOps"],
    description:
      "Sistem tracking logistik real-time yang saya rancang dan implementasikan untuk KPU (Komisi Pemilihan Umum). Sistem ini meningkatkan transparansi dan efisiensi dalam operasi logistik pemilu. Menggunakan teknologi WebSocket untuk pembaruan data secara real-time dan antarmuka yang intuitif untuk memudahkan pemantauan pergerakan logistik.",
    features: [
      "Tracking real-time untuk logistik pemilu",
      "Dashboard monitoring komprehensif",
      "Sistem notifikasi otomatis",
      "Pelaporan dan analitik",
      "Manajemen inventori terintegrasi",
      "Interface yang user-friendly",
    ],
  },
  {
    title: "Jaja.id E-commerce Platform",
    image: jajaId,
    images: [jajaId, jajaId2],
    technologies: ["Express.js", "Node.js"],
    categories: ["Web App", "Api", "DevOps"],
    description:
      "Mengembangkan platform e-commerce Jaja.id dengan fokus pada merancang solusi backend yang kuat, aman, dan skalabel. Proyek ini mencakup pengembangan arsitektur API, implementasi fitur inti e-commerce, dan optimasi kinerja sistem untuk mendukung pengalaman belanja online yang lancar.",
    features: [
      "Arsitektur API RESTful yang komprehensif",
      "Manajemen katalog produk",
      "Sistem pembayaran terintegrasi",
      "Manajemen pesanan dan pengiriman",
      "Autentikasi dan keamanan pengguna",
      "Pencarian dan filter produk canggih",
    ],
  },
  {
    title: "Jaja Auto Deployment",
    link: "https://auto.jaja.id/",
    linkText: "https://auto.jaja.id/",
    image: jajaAuto,
    images: [jajaAuto, jajaAuto2],
    technologies: [
      "Google Cloud Platform",
      "CI/CD Pipeline",
      "Server Migration",
      "Cloud Infrastructure",
      "Frontend Deployment",
    ],
    categories: ["Web App", "DevOps"],
    description:
      "Membantu tim frontend melakukan deployment aplikasi ke server Google Cloud Platform dengan mengimplementasikan pipeline CI/CD yang efisien. Proyek ini fokus pada otomatisasi proses deployment, memastikan distribusi kode yang cepat, aman, dan andal, serta mengoptimalkan infrastruktur cloud untuk performa maksimal.",
    features: [
      "Konfigurasi pipeline CI/CD untuk frontend",
      "Otomatisasi proses deployment",
      "Manajemen versi dan rollback",
      "Monitoring performa server",
      "Optimasi infrastruktur cloud",
      "Implementasi strategi deployment yang aman",
    ],
  },
  {
    title: "Siplah Mitra APP",
    image: siplahApp,
    images: [
      siplahApp,
      siplahApp2,
      siplahApp3,
      siplahApp4,
      siplahApp5,
      siplahApp6,
    ],
    link: "https://www.linkedin.com/in/mohamad-hasyim-ridwan-1a1762b8/overlay/1731496560132/single-media-viewer/?profileId=ACoAABkHSIkB02vRkr_itH1xeGWFPVDUtGpVUws",
    linkText:
      "https://www.linkedin.com/in/mohamad-hasyim-ridwan-1a1762b8/overlay/1731496560132/single-media-viewer/?profileId=ACoAABkHSIkB02vRkr_itH1xeGWFPVDUtGpVUws",
    technologies: ["React Native", "Node JS", "Express.js"],
    categories: ["Mobile"],
    description:
      "Saya mengembangkan aplikasi mobile SIPLAH menggunakan React Native untuk mempercepat persetujuan produk dan manajemen mitra dalam rantai pasokan pendidikan. Aplikasi ini memungkinkan alur kerja yang efisien dengan mengurangi waktu persetujuan hingga 30%, menyediakan antarmuka intuitif untuk mengelola produk, mitra, dan pesanan secara real-time. Solusi ini meningkatkan transparansi operasional dan mengoptimalkan proses persetujuan secara keseluruhan untuk pengguna.",
    features: [
      "Notifikasi setiap ada product baru untuk di Approve",
      "Alur kerja persetujuan produk real-time",
      "Sistem manajemen mitra",
      "Antarmuka mobile yang intuitif",
      "Pelacakan dan manajemen pesanan",
      "Komunikasi rantai pasokan yang efisien",
    ],
  },
  {
    title: "MasterDiskon Travel Platform",
    image: masterdiskon_web,
    images: [masterdiskon_web2, masterdiskon_web],
    link: "https://masterdiskon.com/",
    linkText: "https://masterdiskon.com/",
    technologies: [
      "Google Cloud Platform",
      "CI/CD Pipeline",
      "Server Migration",
      "Cloud Infrastructure",
      "Frontend Deployment",
    ],
    categories: ["Web App", "DevOps"],
    description:
      "Platform travel dan gaya hidup inovatif yang menawarkan diskon komprehensif pada hotel, penerbangan, tur, dan pengalaman leisure. Proyek ini melibatkan migrasi infrastruktur ke Google Cloud Platform dan pengembangan pipeline CI/CD untuk meningkatkan performa dan skalabilitas platform.",
    features: [
      "Diskon komprehensif untuk layanan travel",
      "Antarmuka pencarian yang ramah pengguna",
      "Promosi di berbagai destinasi",
      "Kemudahan booking online",
      "Sistem rekomendasi perjalanan",
    ],
  },

  {
    title: "Masterdiskon WhatsApp Bot",
    image: waBot2,
    images: [waBot, waBot2],
    technologies: ["Node.js", "typescript"],
    categories: ["Bot"],
    description:
      "Bot WhatsApp yang dikembangkan untuk Masterdiskon guna mengotomatisasi pengiriman token kepada pelanggan. Solusi ini merampingkan proses komunikasi dengan mengirimkan token secara otomatis melalui platform WhatsApp, meningkatkan efisiensi dan pengalaman pelanggan.",
    features: [
      "Pengiriman token otomatis",
      "Integrasi dengan sistem Masterdiskon",
      "Komunikasi real-time melalui WhatsApp",
      "Autentikasi token yang aman",
      "Notifikasi pelanggan instan",
    ],
  },
  {
    title: "Batugin Company Profile",
    image: batugin,
    images: [batugin, batugin2, batugin3],
    link: "https://www.batugin.co.id/",
    linkText: "https://www.batugin.co.id/",
    technologies: ["Next JS", "TailWind", "Ant Design"],
    categories: ["Portofolio", "Project", "Api"],
    description:
      "Saya bertanggung jawab dalam pengembangan Company Profile Batugin menggunakan Next.js dan TailwindCSS. Website ini dirancang dengan fokus pada performa dan pengalaman pengguna yang optimal. Fitur-fitur utama termasuk animasi smooth, tampilan yang responsif, dan integrasi konten yang dinamis. Penggunaan Next.js memungkinkan performa yang cepat melalui static generation dan server-side rendering, sementara TailwindCSS memberikan desain yang modern dan konsisten. Implementasi SEO yang optimal memastikan visibilitas website yang baik di mesin pencarian.",
    features: [
      "Desain responsif untuk semua ukuran perangkat",
      "Animasi halus untuk meningkatkan user experience",
      "Optimasi SEO untuk meningkatkan visibilitas online",
      "Performa tinggi dengan Next.js",
      "Integrasi konten dinamis",
      "UI/UX modern dengan Ant Design dan TailwindCSS",
    ],
  },
  {
    title: "Raja Cepat Company Profile",
    image: race2,
    images: [race, race2, race3],
    link: "https://track.rajacepat.com/",
    linkText: "https://track.rajacepat.com/",
    technologies: ["Vite JS", , "Ant Design"],
    categories: ["Portofolio", "Project", "Web App"],
    description:
      "RajaCepat adalah layanan pengiriman dan logistik yang menyediakan solusi pengiriman cepat dan andal. Mereka menawarkan berbagai layanan pengiriman untuk memenuhi kebutuhan pelanggan dengan fokus pada efisiensi dan kecepatan dalam pengiriman barang.",
    features: [
      "Profil perusahaan komprehensif",
      "Sistem pelacakan pengiriman real-time",
      "Responsive web design",
      "Antarmuka pengguna yang intuitif",
      "Informasi layanan pengiriman lengkap",
    ],
  },

  {
    title: "Mobile App - Cuaca App",
    image: screen_cuaca_android,
    link: "https://github.com/mhrdwan/cuaca_app_flutter",
    linkText: "https://github.com/mhrdwan/cuaca_app_flutter",
    technologies: ["Flutter"],
    categories: ["Mobile", "Project"],
  },
  {
    title: "Portofolio Website - Mohamad Hasyim Ridwan",
    image: portoimage,
    images: [portoimage],
    link: "https://www.mhridwan.com",
    linkText: "mhridwan.com",
    technologies: ["Next JS", "TailWind"],
    categories: ["Portofolio", "Project"],
  },
  {
    title:
      "Portofolio Website & Tracking Pengiriman Pada Website Eureka Logistics",
    image: porto_eureka_tracking,
    link: "https://eurekalogistics.co.id/",
    linkText: "eurekalogistics.co.id",
    technologies: ["React Vite", "Ant Design"],
    categories: ["Portofolio", "Project"],
  },
  {
    title: "Web App - Raja Cepat",
    image: porto_RajaCepat,
    link: "https://elogsv4.eurekalogistics.co.id/",
    linkText: "elogsv4.eurekalogistics.co.id",
    technologies: ["React JS", "Ant Design", "Bootstrap"],
    categories: ["Project", "Web App"],
  },
  {
    title: "Web App - Eureka Logistic",
    image: porto_Eureka_Logistic,
    link: "https://elogsv4.eurekalogistics.co.id/",
    linkText: "elogsv4.eurekalogistics.co.id",
    technologies: ["React JS", "Ant Design", "Bootstrap"],
    categories: ["Project", "Web App"],
  },
  {
    title: "Api - Scraping Berita CNN",
    image: API_Scraping_berita_CNN,
    link: "",
    linkText: "",
    technologies: ["Node JS"],
    categories: ["Project", "Api"],
  },
  {
    title: "Web - Rumah Impian",
    image: porto_Rumahimpian,
    link: "https://github.com/mhrdwan/slicing-figma-Company-Profile-Responsive",
    linkText: "github.com/mhrdwan/slicing-figma-Company-Profile-Responsive",
    technologies: ["React JS", "Bootstrap"],
    categories: ["Project", "Web App", "Portofolio"],
  },
  {
    title: "Web App - Manajemen Stock Bensin Eceran dengan Chat Live Firebase",
    image: porto_bensin,
    link: "",
    linkText: "",
    technologies: ["React JS", "Fire Base"],
    categories: ["Project", "Web App"],
  },
  {
    title: "CLI - Download Tiktok",
    image: CLI_Tiktok_Downloader,
    link: "https://github.com/mhrdwan/tiktok-downloader-telegram",
    linkText: "github.com/mhrdwan/tiktok-downloader-telegram",
    technologies: ["Node JS"],
    categories: ["Bot", "Project"],
  },
  {
    title: "CLI - Cek Cuaca",
    image: CLI_Cek_Cuaca,
    link: "https://github.com/mhrdwan/promp-dengan-inquirer",
    linkText: "github.com/mhrdwan/promp-dengan-inquirer",
    technologies: ["Node JS"],
    categories: ["Bot", "Project"],
  },
];
