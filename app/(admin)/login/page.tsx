"use server";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSession } from "@/lib/action";
import { loginAction } from "@/lib/loginAction";
import { LogIn } from "lucide-react";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();
  if (session) {
    redirect("/panel");
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Card className="max-w-md w-full">
        <CardContent>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {"Giriş Yap"}
          </h1>
          <form
            action={loginAction}
            className="flex flex-col gap-4 md:gap-8 w-full"
          >
            <div className="space-y-1">
              <Label htmlFor="email">Eposta</Label>
              <Input
                placeholder="Eposta"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Şifre</Label>
              <Input
                placeholder="Şifre"
                type="password"
                name="password"
                id="password"
                autoComplete={"current-password"}
              />
            </div>
            <Button
              type="submit"
              className=" col-span-1 md:col-span-2 flex flex-row items-center"
              size={"lg"}
            >
              <LogIn size={16} className="mr-2" />
              Giriş Yap
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
