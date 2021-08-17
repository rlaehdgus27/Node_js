import express from "express";
import User from "../schemas/User";

const router = express.Router();

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find({ isDelete: false });

    res.json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/create", async (req, res, next) => {
  const { title, content, author } = req.body;

  try {
    const user = await User.create({
      title,
      content,
      author,
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    user.hit = user.hit + 1;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.patch("/update/:id", async (req, res, next) => {
  const { content } = req.body;

  try {
    const result = await User.updateOne(
      {
        _id: req.params.id,
      },
      {
        content,
      }
    );

    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/delete/:id", async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.params.id });

    user.isDelete = true;
    await user.save();

    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
