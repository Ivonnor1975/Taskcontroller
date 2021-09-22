var getUserRepos = function() {
  console.log("function was called");
};



displaycalendar()
 if (repos.length === 0) {
        repoContainerEl.textContent = "No task progam for today.";
        return;
    }
// loop over repos
for (var i = 0; i < repos.length; i++) {
  // format repo name
  var repoName = repos[i].owner.login + "/" + repos[i].name;

  // create a container for each repo
  var repoEl = document.createElement("div");
  repoEl.classList = "list-item flex-row justify-space-between align-center";

  // create a span element to hold repository name
  var titleEl = document.createElement("span");
  titleEl.textContent = repoName;

  // append to container
  repoEl.appendChild(titleEl);

  // append container to the dom
  repoContainerEl.appendChild(repoEl);
}

loadcalendar
