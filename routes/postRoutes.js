const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;