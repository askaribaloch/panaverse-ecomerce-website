import { defineType, defineField } from "sanity";

export const tagline = defineType({
  name: "tagline",
  title: "Tag Line",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tag Name",
      type: "string",
    }),
  ],
});
