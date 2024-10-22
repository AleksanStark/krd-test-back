const Router = require("express");
const postsController = require("./postsController");

const router = new Router();

router.get("/posts", postsController.getPosts);
router.post("/post", postsController.createPost);
router.delete("/post", postsController.deletePost);

module.exports = router;
