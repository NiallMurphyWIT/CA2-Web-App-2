import express from 'express';
import stubAPI from './stubAPI';
//import Post from './postsModel';
//import asyncHandler from 'express-async-handler';

const router = express.Router();// eslint-disable-line

// get all posts
router.get('/', (req, res) => {
  const posts = stubAPI.getAll();
  res.send({posts: posts});
});


// Add a post
router.post('/', (req, res) => {
  const newPost = req.body;

  if (newPost && stubAPI.add(newPost.title, newPost.link, newPost.author)) {
       return res.status(201).send({message: 'Posts Created'});
  }
  return res.status(400).send({message: 'Unable to find Post in request.'});
});

// upvote a post
router.post('/:id/upvote', (req, res) => {
  const id = req.params.id;
         if (stubAPI.upvote(id)) {
              return res.status(200).send({message: `Post ${id} Upvoted`});
         }
         return res.status(404).send({message: `Unable to find Post ${id}`});
});

// get a post
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const post = stubAPI.getPost(id);

     if (post) {
             return res.status(200).send(post);
            }
            return res.status(404).send({message: `Unable to find Post ${id}`});
});


/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 //
function handleError(res, err) {
  return res.status(500).send(err);
};
*/

export default router;