import { createClient } from "@sanity/client";

export const client = createClient({
  apiVersion: "v2023-06-06",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn: false,
})