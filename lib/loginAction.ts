"use server";

import { login } from "@/lib/action";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await login(email, password);

  // redirect("/panel");
}
