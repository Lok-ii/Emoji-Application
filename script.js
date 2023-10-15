let inputField = document.querySelector("#search-box");
let searchButton = document.querySelector("#search-button");

inputField.addEventListener("keyup", (e) => {
    const value = e.target.value;
  displayResult(value);
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = inputField.value;
  displayResult(value);
  return false;
});

const displayResult = (searchValue = "") => {
  let parent = document.getElementById("emoji-container");

  let filteredEmojiList = emojiList.filter((e) => {
    if (e.description.indexOf(searchValue) != -1) {
      return true;
    }
    if (e.aliases.some((el) => el.startsWith(searchValue))) {
      return true;
    }
    if (e.tags.some((ele) => ele.startsWith(searchValue))) {
      return true;
    }
  });
  parent.innerHTML = "";
  filteredEmojiList.forEach((e) => {
    let newRow = document.createElement("tr");
    let newEmoji = document.createElement("td");
    let newAliases = document.createElement("td");
    let newDescription = document.createElement("td");

    newEmoji.classList.add("emoji");
    newAliases.classList.add("aliases");
    newDescription.classList.add("desc");

    newEmoji.innerText = e.emoji;
    newAliases.innerText = e.aliases.join(", ");
    newDescription.innerText = e.description;

    newRow.appendChild(newEmoji);
    newRow.appendChild(newAliases);
    newRow.appendChild(newDescription);
    parent.appendChild(newRow);
  });
};

window.onload = () => displayResult();