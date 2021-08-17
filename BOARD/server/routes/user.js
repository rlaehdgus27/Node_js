import express from "express";
import User from "../schemas/User";

const router = express.Router();

// router.post("/create", async (req, res, next) => {
//   try {
//     const user = await User.create({
//       title: req.body.title,
//       content: req.body.content,
//       author: req.body.author,
//     });
//     res.status(201).json(user);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// router.get("/users/:id", async (req, res, next) => {
//   try {
//     const user = await User.findOne({ _id: req.params.id });

//     user.hit = user.hit + 1;
//     await user.save();

//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

export default router;
