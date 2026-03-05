import Bird from "@/components/Bird";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import "./../globals.css";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics />
      <Header />
      <main className="grow">{children}</main>
      {/* <Intro /> */}
      <Footer />
      {/* <FlyingBird /> */}
      <Bird />
    </>
  );
}
