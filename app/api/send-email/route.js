import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { to, subject, text, html } = body;

    if (!to || !subject || (!text && !html)) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }
    let fromUser = {
      user: "noreplysatyamweb@gmail.com",
      pass: "zismtyhklggsuvyf",
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: fromUser,
    });

    transporter.verify((error, success) => {
      if (error) {
        console.error("SMTP Error:", error);
      } else {
        console.log("SMTP Ready");
      }
    });

    await transporter.sendMail({
      from: fromUser.user,
      to,
      subject,
      text,
      html,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Email failed", error: error.message }),
      { status: 500 }
    );
  }
}
