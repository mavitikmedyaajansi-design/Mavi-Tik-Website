"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState<"loading" | "success" | "error" | null>(
    null
  );
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    //todo ileride bot korumaları yapılacak
    e.preventDefault();
    setResult("loading");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("email", formData.email);
    data.append("message", formData.message);

    await axios
      .post("./api/contact-us", data)
      .then(() => {
        setResult("success");
        setFormData({ name: "", surname: "", email: "", message: "" });
      })
      .catch(() => {
        setResult("error");
      });
  };

  return (
    <div className="max-w-7xl p-2 md:p-8">
      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden relative">
        <div className="clip-pattern-short opacity-30"></div>
        <div className="p-8 relative z-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Mesaj Gönderin
          </h2>

          {result === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
              Mesajınız başarıyla gönderildi. En kısa sürede size dönüş
              yapacağız.
            </div>
          ) : result === "error" ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Adınız</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Adınızı giriniz"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="surname">Soyadınız</Label>
                <Input
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Soyadınızı giriniz"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta Adresiniz</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta adresinizi giriniz"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mesajınız</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mesajınızı buraya yazınız"
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
                  Gönder <Send className="h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
