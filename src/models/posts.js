const fs = require("fs");
      path = require("path");
      posts = "../../dataPost";
      uuid = require("uuid/v4");
      postArray = JSON.parse(fs.readFileSync(path.join(__dirname, posts, "posts.json"), "utf-8"));

const createPost = (newPost) => {
  const title = newPost.title;
        content = newPost.content;
        errors = [];

  // checks if the title or content is empty
  if (!title) errors.push("title field is required");
  if (!content) errors.push("content field is required");

  // return with error if any
  // else save post into posts.json
  if (errors.length > 0) {
    return {
      status: 400,
      message: "Fields are missing: ",
      errors
    };
  } else {
    const savePost = {
      id: uuid(),
      title,
      content
    };
    // push data into postArray
    postArray.push(savePost);

    // write data to posts.json file
    fs.writeFileSync(path.join(__dirname, posts, "posts.json"), JSON.stringify(postArray));

    return savePost;
  }
};

const getAllPosts = () => {

};

const getPostById = () => {

};

const updatePost = () => {

};

const deletePost = () => {

};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost
};