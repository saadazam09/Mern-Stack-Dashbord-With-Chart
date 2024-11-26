import express from "express";
const router = express.Router();

// Define routes
router.get("/", (req, res) => res.send("Client route working"));

// Export router
export default router;
