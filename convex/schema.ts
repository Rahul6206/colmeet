import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
user: defineTable({
    name: v.string(),
    email: v.string(),
    profilePicture: v.optional(v.string()),
    role: v.union(v.literal("interviewer"), v.literal("candidate")),
    clarkID: v.string() //Login and singup with Clerk ID
}).index("by_ClarkID", ["clarkID"]),


});