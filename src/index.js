import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    const resend = new Resend(env.RESEND_API_KEY);
	const req = await request.json()
    const { data, error } = await resend.emails.send({
      from: req["email"],
      to: "contact@innosys.ai",
      subject: req["name"] + " from "+request["company"],
      html: req["message"],
    });

    return Response.json({ data, error });
  },
};
