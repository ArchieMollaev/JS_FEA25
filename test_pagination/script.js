let filmData = [];
async function main() {
  const data = await fetch("http://api.tvmaze.com/shows?page=1");
  filmData = await data.json();
}
main();

console.log(filmData);
