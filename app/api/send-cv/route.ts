import axiosInstance from "@/lib/axios-instance";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return Response.json({ error: "Dosya yüklenmedi" }, { status: 400 });
    }

    const mailForm = new FormData();
    mailForm.append("subject", "Yeni CV");
    mailForm.append("text", "Yeni bir CV alındı.");
    mailForm.append("file", file as File);

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
