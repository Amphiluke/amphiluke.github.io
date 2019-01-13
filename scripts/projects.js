{
    let entityMap = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};
    let sanitize = str => str.replace(/[&<>]/g, char => entityMap[char] || char);

    let shortenName = fullName => fullName.replace(/^(.)[^\W_]*[\W_](\w).*/, "$1$2").slice(0, 2);

    fetch("https://api.github.com/users/Amphiluke/repos?sort=created")
        .then(response => response.json())
        .then(repos => repos.filter(repo => !!repo.homepage))
        .then(repos => {
            if (!repos.length) {
                return Promise.reject();
            }
            let projectList = document.querySelector(".project-list");
            projectList.innerHTML = repos.reduce((memo, repo) => `
                ${memo}
                <li>
                    <a href="${sanitize(repo.homepage)}">
                        <h2>${sanitize(shortenName(repo.name).toUpperCase())}</h2>
                        <p>${sanitize(repo.name)} &middot; ${sanitize(repo.description)}</p>
                    </a>
                </li>
            `, "");
            document.querySelector(".fetch-message").classList.add("hidden");
        })
        .catch(() => {
            document.querySelector(".fetch-message").classList.add("hidden");
            document.querySelector(".error-message").classList.remove("hidden");
        });
}
