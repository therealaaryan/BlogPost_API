const Post = require('../models/Post');

const createPost = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newPost = new Post({title, content, author: req.userId});
        await newPost.save();
        res.json(newPost);
    } catch (error) {
        res.status(500).json({error: 'Server Error'})
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username');
        res.json(posts);
    } catch (error) {
        res.status(500).json({error: 'Server Error'})
    }
};

const updatePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const {title, content} = req.body;

        const post = await Post.findById(postId);
        
        if(!post){
            return res.status(404).json({error: 'Post not found'});
        }

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ error: 'Permission denied' });
        }

        post.title = title;
        post.content = content;
        
        await post.save();
        res.json(post);

    } catch (error) {
        res.status(500).json({error: 'Server Error'})
    }
};

const deletePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);

        if(!post){
            return res.status(404).json({error: 'Post not found'});
        }

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ error: 'Permission denied' });
        }

        await post.remove();

        res.json({message: 'Post deleted successfully'})
    } catch (error) {
        res.status(500).json({error: 'Server Error'})
    }
};

module.exports = {createPost, getPosts, updatePost, deletePost};
