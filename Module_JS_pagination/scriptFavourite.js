const filmsList = document.getElementById("filmsList");

const coverFallbackSrc =
  "https://nicolasmelis.com/wp-content/themes/panama/assets/img/empty/600x600.png";

function getImage(image) {
  return image?.medium || image?.original || coverFallbackSrc;
}

filmsList.innerHTML = "";

const data = Object.keys(localStorage).map((key) =>
  JSON.parse(localStorage.getItem(key))
);

data.forEach((filmData) => {
  const { image, id } = filmData;

  const divImg = document.createElement("div");
  divImg.setAttribute("class", "col-3 pb-3 position-relative");
  divImg.setAttribute("id", "divImg");
  //   divImg.addEventListener("click", () => {
  //     setImageBody(filmData);
  //   });
  const img = document.createElement("img");
  img.setAttribute("src", getImage(image));
  img.setAttribute("data-bs-toggle", "modal");
  img.setAttribute("data-bs-target", "#favouriteFilmModal");
  img.style = "width: 100%; height: 100%;";
  //   const favourImg = document.createElement("img");
  //   favourImg.setAttribute("src", "icons1.png");
  //   favourImg.setAttribute("id", "favourIcon");
  //   favourImg.setAttribute("class", "position-absolute");

  //   favourImg.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     localStorage.setItem(id, JSON.stringify(filmData));
  //   });

  filmsList.append(divImg);
  divImg.append(img);
  //   divImg.append(favourImg);
});
