const URL = "https://meme-api.com/gimme/50";

function loadData() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

const displayData = (data) => {
  const memes = data.memes;
  const section = document.getElementById("display-card");
  memes.map((meme) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="bg-gray-200 rounded-lg overflow-hidden ">
    <img class="w-full h-auto" src=${meme.url} alt="Image 1" />
  </div>
        </div>
    `;
    section.appendChild(div);
  });
};

loadData();
