import fs from "fs";
import nodemailer from "nodemailer";
import os from "os";
import path from "path";

export async function POST(req: Request) {
  if (!rateLimiter(req)) {
    return;
  }
  try {
    const formData = await req.formData();
    const subject = formData.get("subject");
    const html = formData.get("text");
    const file = formData.get("file");

    if (
      !subject ||
      !html ||
      typeof subject !== "string" ||
      typeof html !== "string"
    ) {
      return Response.json(
        { error: "Alanlar boş veya hatalı." },
        { status: 400 }
      );
    }

    let filePath = "";
    if (file) {
      const uploadDir = os.tmpdir(); // Use system's temp directory
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      filePath = path.join(uploadDir, (file as File).name);
      const buffer = Buffer.from(await (file as File).arrayBuffer());
      fs.writeFile(filePath, buffer, (err) => {
        if (err) throw err;
      });
    }

    const host = process.env.EMAIL_HOST;
    const port = process.env.EMAIL_PORT;
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const from = process.env.EMAIL_SENDER;
    const to = process.env.EMAIL_RECIPIENT;
    if (!host || !port || !user || !pass || !from || !to) {
      return Response.json(
        { text: "E-posta Gönderilemedi - File", error: "E-posta sunucusu yok" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port: Number(port),
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      attachments: file
        ? [{ filename: (file as File).name, path: filePath }]
        : undefined,
    });

    return Response.json({ text: "E-posta Gönderildi" }, { status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json(
      { text: "E-posta Gönderilemedi - File", error },
      { status: 500 }
    );
  }
}

const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequests = 10;
const ipRequestCounts: { [ip: string]: { count: number; timestamp: number } } =
  {};

function rateLimiter(req: Request) {
  const ip = req.headers.get("x-forwarded-for");
  console.log(req, ip);

  if (!ip) {
    return Response.json(
      { text: "E-posta Gönderilemedi - File", error: "IP Adresi Yok" },
      { status: 500 }
    );
  }

  const currentTime = Date.now();
  const ipInfo = ipRequestCounts[ip as string];

  if (!ipInfo || currentTime - ipInfo.timestamp > rateLimitWindowMs) {
    ipRequestCounts[ip as string] = {
      count: 1,
      timestamp: currentTime,
    };
  } else {
    ipRequestCounts[ip as string].count += 1;
  }

  // İstek sayısını kontrol et
  if (ipRequestCounts[ip as string].count > maxRequests) {
    return Response.json(
      {
        text: "E-posta Gönderilemedi - File",
        error: "Çok fazla istek yaptınız",
      },
      { status: 429 }
    );
  }

  return true;
}
