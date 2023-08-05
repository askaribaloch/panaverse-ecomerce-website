import { defineField, defineType } from "sanity";

// sanity/pet.ts
export const product = defineType({
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "description",
      title: "Product Description",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    defineField({
      name: "category",
      title: "Product",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});
