import { mutation,query } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({

    args: {
        clerkId: v.string(),
        email: v.string(),
        name: v.string(),
        image: v.optional(v.string()),

    },

    handler: async (ctx, args) => {
        const existuser = await ctx.db.query("user").filter(q => q.eq(q.field("clarkID"), args.clerkId)).first();
        if (existuser) return
       return await ctx.db.insert("user", {
            name: args.name,
            email: args.email,
            profilePicture: args.image,
            role: "candidate", // Default role, can be changed later
            clarkID: args.clerkId
        });


},

});

export const getUsers = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    const users = await ctx.db.query("user").collect();

    return users;
  },
});

export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("user")
      .withIndex("by_ClarkID", (q) => q.eq("clarkID", args.clerkId))
      .first();

    return user;
  },
});