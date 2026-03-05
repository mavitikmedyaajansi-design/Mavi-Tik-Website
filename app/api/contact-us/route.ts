import axiosInstance from "@/lib/axios-instance";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const surname = formData.get("surname");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !surname || !email || !message) {
      return Response.json({ error: "Alanlar boş." }, { status: 400 });
    }
    if (
      typeof message !== "string" ||
      typeof email !== "string" ||
      typeof surname !== "string" ||
      typeof name !== "string"
    ) {
      return Response.json({ error: "Alanlar geçersiz." }, { status: 400 });
    }

    const mailForm = new FormData();
    mailForm.append("subject", `Yeni İletişim Formu : ${name} ${surname}`);
    mailForm.append(
      "text",
      `
      <h4>İletişim Formu</h4>
      <hr>
      <p>Name: ${name}</*>
      <p>Surname: ${surname}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `
    );

    return await axiosInstance
      .post("send-email", mailForm)
      .then((r) => {
        return Response.json({ text: r.data.text }, { status: 200 });
      })
      .catch((error) => {
        return Response.json(
          { text: "E-posta Gönderilemedi - Contact Us", error },
          { status: 500 }
        );
      });
  } catch (error) {
    return Response.json(
      { text: "E-posta Gönderilemedi - Contact Us", error },
      { status: 500 }
    );
  }
}
