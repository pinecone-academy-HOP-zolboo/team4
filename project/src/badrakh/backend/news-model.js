const { model, Schema } = require("mongoose");

const NewsSchema = new Schema ({
    post: String,
    desc: String,
    title: String,
    username: String,   
    pfp: String,
});

const NewsModel = model("News", NewsSchema);

module.exports = NewsModel;