// 'http://www.omdbapi.com/?i=tt3896198&apikey=7f4ccb39'
let movieList = document.getElementById('movie-list')

function search(){
  // console.log("hello")
  movieList.innerHTML = ""
  async function promiseHandle(){
    try{
      let apikey = '7f4ccb39'
      let input = document.getElementById('input')
      let search = input.value
      let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${apikey}`)
      let data = (await res.json()).Search
      // console.log(data)
      getData(data)
    }
    catch(err){
      console.log(err)
    }
  }
  promiseHandle()
}

//   Title": "Suraj",
// "Year": "1966",
// "imdbID": "tt0061046",
// "Type": "movie",
// "Poste
function getData(data){
  
  data.forEach(ele => {
    console.log(ele)
    let div = document.createElement('div')
    div.className = 'movie-details'
    let poster = document.createElement('img')
    poster.src = ele.Poster
    let title = document.createElement('p')
    title.textContent = "Title: " + ele.Title
    let year = document.createElement('p')
    year.textContent = "Year: " + ele.Year
    let type = document.createElement('p')
    type.textContent = "Type: " + ele.Type
    div.append(poster,title,year,type)
    movieList.appendChild(div)
  });
}