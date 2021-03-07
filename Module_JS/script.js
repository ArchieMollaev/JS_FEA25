const filmsListFilms = document.getElementById("filmsList");
const coverFallbackSrc =
  "https://nicolasmelis.com/wp-content/themes/panama/assets/img/empty/600x600.png";

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", main);
let filmData;
let filters = {};

function handleLanguageChange(event) {
  if (event.value === "Language") {
    delete filters.language;
  } else {
    filters.language = event.value;
  }

  renderFilms(filmData);
}

function handleGenreChange(event) {
  if (event.value === "Genre") {
    delete filters.genre;
  } else {
    filters.genre = event.value;
  }

  renderFilms(filmData);
}

function filterFilms(data) {
  return data.filter(({ show }) => {
    const { language, genre } = filters;
    const isLanguageNotMatch = language && show.language !== language;
    const isGenreNotMatch = genre && !show.genres.includes(genre);

    if (isLanguageNotMatch || isGenreNotMatch) {
      return false;
    }
    return true;
  });
}

function renderFilms(data) {
  filmsListFilms.innerHTML = "";

  filterFilms(data).forEach((filmData) => {
    const {
      show: { image, id },
    } = filmData;

    const divImg = document.createElement("div");
    divImg.setAttribute("class", "col-3 pb-5 position-relative");
    divImg.setAttribute("id", "divImg");
    divImg.addEventListener("click", () => {
      setImageBody(filmData);
    });
    const img = document.createElement("img");
    img.setAttribute("src", getImage(image));
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#favouriteFilmModal");
    img.style = "width: 100%; height: 100%;";
    const favourImg = document.createElement("img");
    favourImg.setAttribute("src", "icons1.png");
    favourImg.setAttribute("id", "favourIcon");
    favourImg.setAttribute("class", "position-absolute");
    const filmName = document.createElement("b");
    filmName.innerText = filmData.show.name;

    const rate = document.createElement("div");
    rate.innerText = `score: ${filmData.score}`;

    favourImg.addEventListener("click", (e) => {
      e.stopPropagation();
      localStorage.setItem(id, JSON.stringify(filmData));
    });

    filmsList.append(divImg);
    divImg.append(img);
    divImg.append(filmName);
    divImg.append(rate);
    divImg.append(favourImg);
  });
}

function getImage(image) {
  return image?.medium || image?.original || coverFallbackSrc;
}

function setImageBody(filmData, image) {
  const modalBody = document.querySelector("#favouriteFilmModal .modal-body");
  const [titleTag, descriptionTag, imageTag] = modalBody.children;

  titleTag.innerText = filmData.show.name;
  descriptionTag.innerHTML = filmData.show.summary;
  imageTag.innerHTML = `<img src="${getImage(
    filmData.show.image
  )}" alt=""></img>`;
}

async function main() {
  const inp = document.getElementById("inp").value;

  const data = await fetch(
    `http://api.tvmaze.com/search/shows?q=${inp ? inp : "a"}`
  );

  filmData = await data.json();

  renderFilms(filmData);
}

main();
