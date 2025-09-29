import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: request["email"],
      to: "contact@innosys.ai",
      subject: request["name"] + " from "+request["company"],
      html: request["message"],
    });

    return Response.json({ data, error });
  },
};