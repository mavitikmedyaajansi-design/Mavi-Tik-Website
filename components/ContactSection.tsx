"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      <div className="rounded-xl shadow-md overflow-hidden relative hidden md:block my-8">
        <div className="triangle-pattern opacity-20"></div>
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-bold text-gray-800">Bize ulaşın</h2>
            <p className="text-gray-600">
              Sorularınız mı var? Fikirlerinizi paylaşmak mı istiyorsunuz? Size
              özel çözümlerimiz hakkında daha fazla bilgi almak için bizimle
              iletişime geçin.
            </p>
            <Link href={"/tanisalim-mi"} title="Bize ulaşın" passHref>
              <Button className="bg-primary flex items-center gap-2 mt-2">
                Daha fazlası için kahveye bekliyoruz...{" "}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="bg-blue-100 p-6 rounded-full">
              <Mail className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl shadow-md relative overflow-hidden md:hidden my-4">
        <div className="clip-pattern opacity-30"></div>
        <div className="p-6 space-y-4 relative z-10">
          <div className="bg-blue-100 p-4 rounded-lg inline-block mb-2">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">Bize ulaşın</h3>
          <p className="text-gray-600 text-sm">
            Sorularınız mı var? Fikirlerinizi paylaşmak mı istiyorsunuz? Size
            özel çözümlerimiz hakkında daha fazla bilgi almak için bizimle
            iletişime geçin.
          </p>
          <Link href={"/tanisalim-mi"} title="Bize ulaşın" passHref>
            <Button className="bg-primary flex items-center gap-2 w-full justify-center">
              Daha fazlası için kahveye bekliyoruz...{" "}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
