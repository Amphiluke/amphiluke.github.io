{
    let entityMap = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};
    let sanitize = str => str.replace(/[&<>]/g, char => entityMap[char] || char);

    let shortNameMap = {
        potprox: "pp",
        nanothrower: "nt",
        "learn-quantum-mechanics": "qm"
    };
    let shortenName = fullName => shortNameMap[fullName] ||
        fullName.replace(/^(.)[^\W_]*[\W_](\w).*/, "$1$2").slice(0, 2);

    let makeTitle = fullName => sanitize(shortenName(fullName).toUpperCase());
    let {CSS = {}} = window;
    let makeName = CSS.supports && CSS.supports("display", "contents") ?
        fullName => `<em>${sanitize(fullName)}</em>` :
        fullName => sanitize(fullName);
    let makeDescription = description => sanitize(description);

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
                        <h2>${makeTitle(repo.name)}</h2>
                        <p>${makeName(repo.name)} &middot; ${makeDescription(repo.description)}</p>
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
