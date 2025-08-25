document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('#search form');
    const searchInput = document.querySelector('#search input');
    const posts = document.querySelectorAll('#posts article');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();

        const allPosts = document.querySelectorAll('#posts article');
        allPosts.forEach(post => {
            const title = post.querySelector('h3').textContent.toLowerCase();
            const content = post.querySelector('p:last-of-type').textContent.toLowerCase();

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });

    const newPostForm = document.querySelector('#new-post form');
    const newPostNameInput = document.querySelector('#new-post-name');
    const newPostDescriptionInput = document.querySelector('#new-post-description');
    const postsSection = document.querySelector('#posts');

    newPostForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = newPostNameInput.value;
        const description = newPostDescriptionInput.value;

        const newPost = document.createElement('article');
        newPost.innerHTML = `
            <h3>${name}</h3>
            <p>Posted by: Anonymous</p>
            <p>${description}</p>
        `;

        postsSection.appendChild(newPost);

        newPostNameInput.value = '';
        newPostDescriptionInput.value = '';
    });
});
