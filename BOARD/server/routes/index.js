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

// router.post("/create", async (req, res, next) => {
//   try {
//     const user = await User.create({
//       title: req.body.title,
//       content: req.body.content,
//       // hit: req.body.hit,
//       author: req.body.author,
//       // createdAt: req.body.createdAt,
//     });
//     res.status(201).json(user);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

// router.get("/users/:id", async (req, res, next) => {
//   console.log("asldhakdj");
//   console.log("asldhakdj");
//   console.log("asldhakdjßß  ");

//   try {
//     const user = await User.findOne({ _id: req.params.id });

//     console.log(user);

//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

export default router;