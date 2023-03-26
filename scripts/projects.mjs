import {request} from "https://cdn.skypack.dev/@octokit/request";

let entityMap = {"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;"};
let sanitize = str => str.replace(/[&<>"]/g, char => entityMap[char] || char);

let shortNameMap = {
    lindsvg: "ls",
    potprox: "pp",
    nanothrower: "nt",
    "learn-quantum-mechanics": "qm"
};
let shortenName = fullName => shortNameMap[fullName] ||
    fullName.replace(/^(.)[^\W_]*[\W_](\w).*/, "$1$2").slice(0, 2);

let makeTitle = fullName => sanitize(shortenName(fullName).toUpperCase());

request("GET /users/{username}/repos?sort=created", {username: "Amphiluke"})
    .then(({data: repos}) => repos.filter(({homepage, archived}) => !!homepage && !archived))
    .then(repos => {
        let reposCount = repos.length;
        if (!reposCount) {
            return Promise.reject();
        }
        let projectList = document.querySelector(".project-list");
        projectList.innerHTML = repos.reduce((memo, repo, index) => `
            ${memo}
            <li style="--azimuth: ${(360 * index / reposCount).toFixed(1)}deg" title="${sanitize(repo.name)} &middot; ${sanitize(repo.description)}">
                <a href="${sanitize(repo.homepage)}">${makeTitle(repo.name)}</a>
            </li>
        `, "");
        document.querySelector(".fetch-message").classList.add("hidden");
        projectList.classList.remove("hidden");
    })
    .catch(() => {
        document.querySelector(".fetch-message").classList.add("hidden");
        document.querySelector(".error-message").classList.remove("hidden");
    });
