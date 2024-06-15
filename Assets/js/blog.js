const blogposthistory = JSON.parse(localStorage.getItem("blogposts"))||[];
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const blogposthistoryElement = document.querySelector('#blogposthistory');

blogContent();
function blogContent() {
    for (let index = 0; index < blogposthistory.length; index++) {
        let html = `<p>Username: ${blogposthistory[index].username}</p>
        <p>Title: ${blogposthistory[index].title}</p>
        <p>Content: ${blogposthistory[index].content}</p>`
        blogposthistoryElement.insertAdjacentHTML("beforeend", html);     
    }
    // let blogposts = JSON.parse(localStorage.getItem("blogposts"));
    // const title = blogposts.title;
    // const username = blogposts.username;
    // console.log(title);
    // const content = blogposts.content;
  
    // if (!username || !title || !content) {
    //   return;
    // }
  
    // usernameInput.textContent = username;
    // titleInput.textContent = title;
    // contentInput.textContent = content;
  }

function darkmode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}