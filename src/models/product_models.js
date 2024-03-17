const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "* Product name is required. Please enter a product name.",
      ],
    },
    quantity: {
      type: Number,
      required: false,
      default: 0,
    },
    price: {
      type: Number,
      required: [
        true,
        "* Product price is required. Please enter a product quantity.",
      ],
    },
    image: {
      type: String,
      required: false,
      default: "no data added",
    },
  },
  {
    timestamps: false, // Disable automatic management of createdAt and updatedAt fields
    toJSON: { virtuals: true } // Include virtual fields when converting to JSON
  }
);

// Define a virtual field for formattedCreatedAt
ProductSchema.virtual("formattedCreatedAt").get(() => {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
