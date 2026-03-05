"use client";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";
import { Send, Upload } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

export default function CareerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<"loading" | "success" | "error" | null>(
    null
  );
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileSizeLimit = 10 * 1024 * 1024;

      if (selectedFile.size > fileSizeLimit) {
        setError("Dosya boyutu çok büyük.");
      } else {
        setFile(selectedFile);
        setError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    //todo ileride bot korumaları yapılacak
    e.preventDefault();
    if (!file) {
      setError("Lütfen bir CV yükleyin.");
      return;
    }
    setError("");
    setResult("loading");

    const data = new FormData();
    data.append("file", file);

    await axios
      .post("./api/send-cv", data)
      .then(() => {
        setResult("success");
        setFile(null);
      })
      .catch(() => {
        setResult("error");
      });
  };

  return (
    <article className="bg-gradient-to-b from-primary/10 to-white">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] lg:aspect-square">
            <Image
              src="/mavi-kariyer.webp"
              alt="Mavi Tik Medya Kariyer"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-primary">MAVİ KARİYER</h1>
              <p className="text-2xl font-medium text-gray-700">
                Seninle çalışmak heyecan verici olurdu!
              </p>
              <p className="text-lg text-gray-600">
                Mavi Tik Medya ekibinde senin gibi yetenekli insanlara yer var.
              </p>
              <p className="text-xl font-medium text-primary">
                Hayallerini bizimle gerçekleştirmek ister misin?
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Label htmlFor="cv">{"CV'nizi Yükleyin"}</Label>
                <div className="grid w-full items-center gap-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="cv"
                      className="flex flex-col items-center justify-center w-full h-48 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-12 h-12 mb-3 text-primary" />
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">
                            Yüklemek için tıklayın
                          </span>{" "}
                          veya sürükleyip bırakın
                        </p>
                        <p className="text-xs text-gray-500">
                          PDF veya WORD (MAX. 10MB)
                        </p>
                      </div>
                      <Input
                        id="cv"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  {file && (
                    <p className="text-sm text-green-600">
                      Seçilen dosya: {file.name}
                    </p>
                  )}
                  {result === "success" ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                      {
                        "CV'niz başarıyla gönderildi. En kısa sürede size dönüş yapacağız."
                      }
                    </div>
                  ) : result === "error" ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
                    </div>
                  ) : null}
                  {error ? (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                      {error}
                    </div>
                  ) : null}
                </div>
              </div>
              <Button
                type="submit"
                size={"lg"}
                className="w-full "
                disabled={result === "loading" || result === "success"}
              >
                {result === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Gönderiliyor...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {"CV'ni Gönder"} <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        <ContactSection />
        <Toaster />
      </div>
    </article>
  );
}
