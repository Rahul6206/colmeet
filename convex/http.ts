import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix"
import { api } from "./_generated/api";
const http = httpRouter();
http.route({
    path: "/cleark-hook",
    method: "POST",
    handler: httpAction(async (ctx, request) => {
        const webhook = process.env.CLERK_WEBHOOK_SECRET;
        if (!webhook) {
            throw new Error("Webhook secret is not set");
        }
        const svix_id = request.headers.get("svix-id");
        const svix_signature = request.headers.get("svix-signature");
        const svix_timestamp = request.headers.get("svix-timestamp");
        if (!svix_id || !svix_signature || !svix_timestamp) {
            throw new Response("Missing svix headers", { status: 400 });

        }

        const payload = await request.json();
        const body = JSON.stringify(payload);

        const webhk = new Webhook(webhook);
        let event: WebhookEvent;
        try {
            event = webhk.verify(body, {
                "svix-id": svix_id,
                "svix-signature": svix_signature,
                "svix-timestamp": svix_timestamp,
            }) as WebhookEvent;
        } catch (error) {
            console.error("Webhook verification failed:", error);
            return new Response("Invalid signature", { status: 400 });
        }

        const eventType = event.type;
        if (eventType === "user.created") {
            const { id, email_addresses, first_name, last_name, image_url } = event.data;
            const email = email_addresses.length > 0 ? email_addresses[0].email_address : "";
            const name = `${first_name || ""} ${last_name || ""}`.trim();



            try {
                await ctx.runMutation(api.users.syncUser, {
                    clerkId: id,
                    email,
                    name,
                    image: image_url,
                });
            } catch (error) {
                console.log("Error creating user:", error);
                return new Response("Error creating user", { status: 500 });
            }
        }

        return new Response("Webhook processed successfully", { status: 200 });


    })
})

export default http;