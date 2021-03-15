const filmsListFilms = document.getElementById("filmsList");
const coverFallbackSrc =
  "https://nicolasmelis.com/wp-content/themes/panama/assets/img/empty/600x600.png";

const searchButton = document.getElementById("search");
searchButton.addEventListener("click", getFilmNameValue);
let filmDataWithoutPagination;
let filmData;
let filters = {};
let filmNames = {};

function filterFilmName(data) {
  return data.filter((data) => {
    const name = filmNames.name;
    if (data.name !== name) {
      return false;
    } else return true;
  });
}

function getFilmNameValue() {
  const inp = document.getElementById("inp");
  if (inp.value !== "") {
    filmNames.name = inp.value;
  } else {
    console.log(inp.value);
  }
  filterFilmName(filmData);
}

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
  return data.filter((data) => {
    const { language, genre } = filters;
    const isLanguageNotMatch = language && data.language !== language;
    const isGenreNotMatch = genre && !data.genres.includes(genre);

    if (isLanguageNotMatch || isGenreNotMatch) {
      return false;
    }
    return true;
  });
}

function renderFilms(data) {
  filmsListFilms.innerHTML = "";
  console.log(filmData);

  filterFilms(data).forEach((filmData) => {
    const { image, id } = filmData;

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
    filmName.innerText = filmData.name;

    const rate = document.createElement("div");
    rate.innerText = `score: ${filmData.rating.average}`;

    favourImg.addEventListener("click", (event) => {
      event.stopPropagation();
      favourImg.style.transitionDuration = "1s";
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

function setImageBody(filmData) {
  const modalBody = document.querySelector("#favouriteFilmModal .modal-body");
  const [titleTag, descriptionTag, imageTag] = modalBody.children;

  titleTag.innerText = filmData.name;
  descriptionTag.innerHTML = filmData.summary;
  imageTag.innerHTML = `<img src="${getImage(filmData.image)}" alt=""></img>`;
}

async function main() {
  const data = await fetch(`http://api.tvmaze.com/shows?page=1`);

  filmDataWithoutPagination = await data.json();

  filmData = filmDataWithoutPagination;
  renderFilms(filmDataWithoutPagination);

  pagination(filmDataWithoutPagination);

  console.log(filmData);
}

main();

function pagination(arr) {
  const notesOnPage = 10;
  const pages = document.getElementsByClassName("page-link");
  for (let item of pages) {
    item.addEventListener("click", function () {
      let pageNum = this.innerHTML;

      let start = (pageNum - 1) * notesOnPage;
      let end = start + notesOnPage;

      filmData = arr.slice(start, end);
      renderFilms(filmData);
    });
  }
}
