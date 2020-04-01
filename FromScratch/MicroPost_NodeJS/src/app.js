import { http } from './http.js';
import { ui } from './ui.js';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get Post
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));

}

// Add Post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title: title,
    body: body
  }

  // Create POST method
  http.post('http://localhost:3000/posts', data)
    .then( data => {
      getPosts();
    })
    .catch( err => console.log(err));

}