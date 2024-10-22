const Post = require("./models/postSchema");
class Posts {
  async getPosts(req, res) {
    try {
      const posts = await Post.find({});
      res.json({ data: { posts } });
    } catch (e) {
      console.log(e);
    }
  }

  async createPost(req, res) {
    try {
      const { name, subject, text } = req.body;
      const post = new Post({ name, subject, text });
      await post.save();
      return res.json({ message: "Пост успешно создан" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "К сожалениию пост не удалось создать" });
    }
  }

  async deletePost(req, res) {
    const { id } = req.body;
    const post = await Post.findOne({ _id: id });
    await post.deleteOne();
    return res.status(204).json("");
  }
}

module.exports = new Posts();
