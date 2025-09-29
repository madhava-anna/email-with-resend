import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    const resend = new Resend(env.RESEND_API_KEY);
	console.log("Request: "+request);   
	const req = await request.json();
    const { data, error } = await resend.emails.send({
      from: "admin@innosys.ai",
      to: "contact@innosys.ai",
      subject: req["name"] + " from "+req["company"],
      html: req["message"] + " \n" + req["email"],
    });

    return Response.json({ data, error });
  },
};
