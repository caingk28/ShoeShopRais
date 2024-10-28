import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Add this before the static file serving
app.use(express.json());

// Your products array
const products = [
  { id: 1, name: "Stylish T-Shirt", price: 29.99, image: "https://picsum.photos/300/200?random=1" },
  { id: 2, name: "Comfortable Jeans", price: 59.99, image: "https://picsum.photos/300/200?random=2" },
  { id: 3, name: "Elegant Dress", price: 89.99, image: "https://picsum.photos/300/200?random=3" },
  { id: 4, name: "Casual Sneakers", price: 79.99, image: "https://picsum.photos/300/200?random=4" },
  { id: 5, name: "Cozy Sweater", price: 49.99, image: "https://picsum.photos/300/200?random=5" },
  { id: 6, name: "Leather Jacket", price: 129.99, image: "https://picsum.photos/300/200?random=6" }
];

// API endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// After API routes, serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});