import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
user: defineTable({
    name: v.string(),
    email: v.string(),
    profilePicture: v.optional(v.string()),
    clarkId: v.string() //Login and singup with Clerk ID
}).index("by_clarkId", ["clarkId"]),

 interviews: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    startTime: v.number(),
    endTime: v.optional(v.number()),
    status: v.string(),
    streamCallId: v.string(),
    candidateId: v.string(),
    interviewerIds: v.array(v.string()),
  })
    .index("by_candidate_id", ["candidateId"])
    .index("by_stream_call_id", ["streamCallId"]),

  comments: defineTable({
    content: v.string(),
    rating: v.number(),
    interviewerId: v.string(),
    interviewId: v.id("interviews"),
  }).index("by_interview_id", ["interviewId"]),





});    