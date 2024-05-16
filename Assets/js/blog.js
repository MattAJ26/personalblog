document.addEventListener('DOMContentLoaded', function () {
    const submittedBlogsDiv = document.getElementById('submittedBlogs');

    function renderSubmittedBlogs() {
        submittedBlogsDiv.innerHTML = '';

        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        console.log(blogs);

        if (blogs.length === 0) {
            submittedBlogsDiv.innerHTML = '<p>No blogs submitted yet.</p>';
            return;
        }

        blogs.forEach(function (blog) {
            const blogDiv = document.createElement('div');
            blogDiv.innerHTML = `
                <h3>Title: ${blog.title}</h3>
                <p><strong>By:</strong> ${blog.username}</p>
                <p>${blog.content}</p>
            `;
            submittedBlogsDiv.appendChild(blogDiv);
        });
    }

    renderSubmittedBlogs();
});