import express from "express";
import User from "../schemas/User";

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const user = await User.create({
      title: req.body.title,
      content: req.body.content,
      // hit: req.body.hit,
      author: req.body.author,
      // createdAt: req.body.createdAt,
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({ id: req.params.id });

    console.log(user);

    res.json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;