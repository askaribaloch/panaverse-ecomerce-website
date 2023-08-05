import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Catageory",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Catagory Name",
      type: "string",
    }),
  ],
});
