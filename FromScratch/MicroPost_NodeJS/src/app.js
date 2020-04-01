import { http } from './http.js';
import { ui } from './ui.js';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
// document.querySelector('#posts').addEventListener('click');

// Listen for edit-state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit)



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
  const id = document.querySelector('#id').value;
  const data = {
    title: title,
    body: body
  }


  if(title === '' || body === '') {
    ui.showAlert('Please fill in all fields','alert alert-danger');

  }  else {
    if(id === '') {
      // Create POST method
      http.post('http://localhost:3000/posts', data)
       .then( data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
         })
       .catch( err => console.log(err));

    } else {
      // Update Post
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then( data => {
         ui.showAlert('Post updated', 'alert alert-success');
         ui.changeFormState('add');
         getPosts();
        })
      .catch( err => console.log(err));

    }


}
}

function enableEdit(e) {
  if(e.target.parentElement.classList.contains('edit')) {
    const id  = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;


    const data = {
      id: id,
      title: title,
      body: body
    }

    ui.fillForm(data);

  }
  console.log(e.target);

  e.preventDefault();
}

//  Cancel edit state
function cancelEdit(e) {
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  
  e.preventDefault();
}