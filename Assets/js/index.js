const blogposthistory = JSON.parse(localStorage.getItem("blogposts"))||[]
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("Submit button clicked");

  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  const blogposts = {
    username: username,
    title: title,
    content: content,
  };
  blogposthistory.push(blogposts);
  localStorage.setItem('blogposts', JSON.stringify(blogposthistory));

  if (username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
    if (content === '') {
        displayMessage('error', 'Content cannot be blank');
    }
  } else {

    displayMessage('success', 'blog posted successfully');

    window.location.href = 'blog.html';
  }
});
