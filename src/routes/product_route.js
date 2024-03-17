const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product_controller.js");

// router.get("/", (req, res) => {
//   const element = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Welcome to REST API Webpage</title>
//         </head>
//         <body>
//             <h1>Welcome to the REST API Webpage</h1>
//             <p class="lead">This webpage provides access to our REST API.</p>
//             <p>Feel free to explore the available endpoints.</p>
//             <a href="/">Go to API Documentation</a>
//         </body>
//         </html>
//     `;
//   res.send(element);
// });

// Get all products
router.get("/", getProducts);

// Get product by id
router.get("/:id", getProduct);

// Create product
router.post("/", createProduct);

// Update product
router.put("/:id", updateProduct);

// Delete product
router.delete("/:id", deleteProduct);


module.exports = router;