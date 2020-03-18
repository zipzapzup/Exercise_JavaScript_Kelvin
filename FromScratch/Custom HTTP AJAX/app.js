const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }

// })

// Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }

// })

// POST Request
// Create Data

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// // Create POST Request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// Update Post (PUT updates it)

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){ 
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }

})