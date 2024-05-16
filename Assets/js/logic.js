
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');
const usernameSpan = document.querySelector('#username');
const usertitleSpan = document.querySelector('#title');
const usercontentSpan = document.querySelector('#content');


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  const username = localStorage.getItem('username');
  const title = localStorage.getItem('title');
  const content = localStorage.getItem('content');

  if (!username || !title || !content) {
    return;
  }

  usernameSpan.textContent = username;
  usertitleSpan.textContent = title;
  usercontentSpan.textContent = content;
}

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  const blogposts = {
    username: username,
    title: title,
    content: content,
  };

  const  blogs = JSON.parse(localStorage.setItem('blogs')) || [];
  blogs.push(blogposts);
  localStorage.setItem('blogs', JSON.stringify(blogs));

  //document.getElementById('name').value = '';
  //document.getElementById('title').value = '';
  //document.getElementById('content').value = '';

  if (username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank');
    if (content === '') {
        displayMessage('error', 'Content cannot be blanl');
    }
  } else {
    displayMessage('success', 'Registered successfully');
    window.location.href = 'blog.html';

    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    renderLastRegistered();
  }
});



