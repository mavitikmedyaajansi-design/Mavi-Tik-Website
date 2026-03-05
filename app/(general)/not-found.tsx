import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold tracking-tight">
            Sayfa Bulunamadı
          </h2>
          <p className="text-muted-foreground">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="relative w-full max-w-[350px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50" />
          <div className="relative bg-background/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Aradığınızı bulamadık. Ana sayfaya dönüp tekrar aramayı
              deneyebilirsiniz.
            </p>
            <Button asChild className="w-full">
              <Link href="/" title="Ana Sayfaya Dön">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
