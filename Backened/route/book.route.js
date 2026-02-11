import express from "express";
import {getBook} from "../controller/book.controller.js"
import { protect, adminOnly } from "../middleware/auth.middleware.js";

const router =express.Router()
router.get("/",getBook);
router.post("/add", protect, adminOnly, async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
});

router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
});

export default router;