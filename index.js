const BASE_URL = 'https://movie-list.alphacamp.io'
const INDEX_URL = BASE_URL + '/api/v1/movies/'
const POSTER_URL = BASE_URL + '/posters/'
const classifyList = document.querySelector('#classify-list')
const moviePanel = document.querySelector('#movie-panel')
const data = []
const footer = document.querySelector('#footer')
const classify = {
  "1": "Action",
  "2": "Adventure",
  "3": "Animation",
  "4": "Comedy",
  "5": "Crime",
  "6": "Documentary",
  "7": "Drama",
  "8": "Family",
  "9": "Fantasy",
  "10": "History",
  "11": "Horror",
  "12": "Music",
  "13": "Mystery",
  "14": "Romance",
  "15": "Science Fiction",
  "16": "TV Movie",
  "17": "Thriller",
  "18": "War",
  "19": "Western"
}

let htmlContent = ""
for (let title in classify) {
  htmlContent += `
  <div class="card"  id="cardWidth" >
  <div class="card-body"  >
     <a class="link" href="#" data-id=${classify[title]}>${classify[title]}</a>
  </div>
</div>
 
`
}
classifyList.innerHTML = htmlContent

// < li class= "item" >
//   <a class="link" href="#">${classify[title]}</a>
// </li >

axios.get(INDEX_URL)
  .then((response) => {
    console.log(response.data.results)
    data.push(...response.data.results)
    displayDataList(data)
    // b(data)


    // classifyMovie(data)


  })
  .catch((error) => console.log(error))


function displayDataList(data) {
  b(data)
  let movieCard = ''
  data.forEach((item, index) => {
    movieCard += `
    <div class="col-sm-3">
          <div class="card mb-2" id="panelWidth">
            <img class="card-img-top"  src="${POSTER_URL}${item.image}"  alt="Card image cap">

            <div  class="card-body movie-item-body">
              <h6 class="card-title">${item.title}</h6>
            </div>
            
            <div  class="card-footer" id="footer">
              <h6>${item.genres}</h6 >
            </div >
          </div >
        </div >
  `
  })

  moviePanel.innerHTML = movieCard

}



classifyList.addEventListener('click', (event) => {
  // console.log(event.target.dataset.id)
  // console.log(target)
  event.preventDefault()
  classifyMovie(event.target.dataset.id)
})

function classifyMovie(id) {
  let results = []
  results = data.filter(item => item.genres[0] === id || item.genres[1] === id || item.genres[2] === id || item.genres[3] === id || item.genres[4] === id || item.genres[5] === id)
  console.log(results)
  displayDataList(results)
  b(data)
}



function b(data) {
  data.forEach(item => {
    if (item.genres[0] === 1) {
      console.log(item.genres[0] = "Action")
    }
    else if (item.genres[0] === 2) {
      console.log(item.genres[0] = "Adventure")
    }
    else if (item.genres[0] === 3) {
      console.log(item.genres[0] = "Animation")
    }
    else if (item.genres[0] === 4) {
      console.log(item.genres[0] = "Comedy")
    }
    else if (item.genres[0] === 5) {
      console.log(item.genres[0] = "Crime")
    }

    else if (item.genres[0] === 6) {
      console.log(item.genres[0] = "Documentary")
    }

    else if (item.genres[0] === 7) {
      console.log(item.genres[0] = "Drama")
    }

    else if (item.genres[0] === 8) {
      console.log(item.genres[0] = "Family")
    }

    else if (item.genres[0] === 9) {
      console.log(item.genres[0] = "Fantasy")
    }

    else if (item.genres[0] === 10) {
      console.log(item.genres[0] = "History")
    }

    else if (item.genres[0] === 11) {
      console.log(item.genres[0] = "Horror")
    }
    else if (item.genres[0] === 12) {
      console.log(item.genres[0] = "Music")
    }
    else if (item.genres[0] === 13) {
      console.log(item.genres[0] = "Mystery")
    }

    else if (item.genres[0] === 14) {
      console.log(item.genres[0] = "Romance")
    }

    else if (item.genres[0] === 15) {
      console.log(item.genres[0] = "Science Fiction")
    }

    else if (item.genres[0] === 16) {
      console.log(item.genres[0] = "TV Movie")
    }

    else if (item.genres[0] === 17) {
      console.log(item.genres[0] = "Thriller")
    }


    else if (item.genres[0] === 18) {
      console.log(item.genres[0] = "War")
    }

    else if (item.genres[0] === 19) {
      console.log(item.genres[0] = "Western")
    }

    if (item.genres[1] === 1) {
      console.log(item.genres[1] = "Action")
    }

    else if (item.genres[1] === 2) {
      console.log(item.genres[1] = "Adventure")
    }
    else if (item.genres[1] === 3) {
      console.log(item.genres[1] = "Animation")
    }
    else if (item.genres[1] === 4) {
      console.log(item.genres[1] = "Comedy")
    }
    else if (item.genres[1] === 5) {
      console.log(item.genres[1] = "Crime")
    }

    else if (item.genres[1] === 6) {
      console.log(item.genres[1] = "Documentary")
    }

    else if (item.genres[1] === 7) {
      console.log(item.genres[1] = "Drama")
    }

    else if (item.genres[1] === 8) {
      console.log(item.genres[1] = "Family")
    }

    else if (item.genres[1] === 9) {
      console.log(item.genres[1] = "Fantasy")
    }

    else if (item.genres[1] === 10) {
      console.log(item.genres[1] = "History")
    }

    else if (item.genres[1] === 11) {
      console.log(item.genres[1] = "Horror")
    }
    else if (item.genres[1] === 12) {
      console.log(item.genres[1] = "Music")
    }
    else if (item.genres[1] === 13) {
      console.log(item.genres[1] = "Mystery")
    }

    else if (item.genres[1] === 14) {
      console.log(item.genres[1] = "Romance")
    }

    else if (item.genres[1] === 15) {
      console.log(item.genres[1] = "Science Fiction")
    }

    else if (item.genres[1] === 16) {
      console.log(item.genres[1] = "TV Movie")
    }

    else if (item.genres[1] === 17) {
      console.log(item.genres[1] = "Thriller")
    }


    else if (item.genres[1] === 18) {
      console.log(item.genres[1] = "War")
    }

    else if (item.genres[1] === 19) {
      console.log(item.genres[1] = "Western")
    }

    if (item.genres[2] === 1) {
      console.log(item.genres[2] = "Action")
    }

    else if (item.genres[2] === 2) {
      console.log(item.genres[2] = "Adventure")
    }
    else if (item.genres[2] === 3) {
      console.log(item.genres[2] = "Animation")
    }
    else if (item.genres[2] === 4) {
      console.log(item.genres[2] = "Comedy")
    }
    else if (item.genres[2] === 5) {
      console.log(item.genres[2] = "Crime")
    }

    else if (item.genres[2] === 6) {
      console.log(item.genres[2] = "Documentary")
    }

    else if (item.genres[2] === 7) {
      console.log(item.genres[2] = "Drama")
    }

    else if (item.genres[2] === 8) {
      console.log(item.genres[2] = "Family")
    }

    else if (item.genres[2] === 9) {
      console.log(item.genres[2] = "Fantasy")
    }

    else if (item.genres[2] === 10) {
      console.log(item.genres[2] = "History")
    }

    else if (item.genres[2] === 11) {
      console.log(item.genres[2] = "Horror")
    }
    else if (item.genres[2] === 12) {
      console.log(item.genres[2] = "Music")
    }
    else if (item.genres[2] === 13) {
      console.log(item.genres[2] = "Mystery")
    }

    else if (item.genres[2] === 14) {
      console.log(item.genres[2] = "Romance")
    }

    else if (item.genres[2] === 15) {
      console.log(item.genres[2] = "Science Fiction")
    }

    else if (item.genres[2] === 16) {
      console.log(item.genres[2] = "TV Movie")
    }

    else if (item.genres[2] === 17) {
      console.log(item.genres[2] = "Thriller")
    }


    else if (item.genres[2] === 18) {
      console.log(item.genres[2] = "War")
    }

    else if (item.genres[2] === 19) {
      console.log(item.genres[2] = "Western")
    }

    if (item.genres[3] === 1) {
      console.log(item.genres[3] = "Action")
    }

    else if (item.genres[3] === 2) {
      console.log(item.genres[3] = "Adventure")
    }
    else if (item.genres[3] === 3) {
      console.log(item.genres[3] = "Animation")
    }
    else if (item.genres[3] === 4) {
      console.log(item.genres[3] = "Comedy")
    }
    else if (item.genres[3] === 5) {
      console.log(item.genres[3] = "Crime")
    }

    else if (item.genres[3] === 6) {
      console.log(item.genres[3] = "Documentary")
    }

    else if (item.genres[3] === 7) {
      console.log(item.genres[3] = "Drama")
    }

    else if (item.genres[3] === 8) {
      console.log(item.genres[3] = "Family")
    }

    else if (item.genres[3] === 9) {
      console.log(item.genres[3] = "Fantasy")
    }

    else if (item.genres[3] === 10) {
      console.log(item.genres[3] = "History")
    }

    else if (item.genres[3] === 11) {
      console.log(item.genres[3] = "Horror")
    }
    else if (item.genres[3] === 12) {
      console.log(item.genres[3] = "Music")
    }
    else if (item.genres[3] === 13) {
      console.log(item.genres[3] = "Mystery")
    }

    else if (item.genres[3] === 14) {
      console.log(item.genres[3] = "Romance")
    }

    else if (item.genres[3] === 15) {
      console.log(item.genres[3] = "Science Fiction")
    }

    else if (item.genres[3] === 16) {
      console.log(item.genres[3] = "TV Movie")
    }

    else if (item.genres[3] === 17) {
      console.log(item.genres[3] = "Thriller")
    }


    else if (item.genres[3] === 18) {
      console.log(item.genres[3] = "War")
    }

    else if (item.genres[3] === 19) {
      console.log(item.genres[3] = "Western")
    }

    if (item.genres[4] === 1) {
      console.log(item.genres[4] = "Action")
    }

    else if (item.genres[4] === 2) {
      console.log(item.genres[4] = "Adventure")
    }
    else if (item.genres[4] === 3) {
      console.log(item.genres[4] = "Animation")
    }
    else if (item.genres[4] === 4) {
      console.log(item.genres[4] = "Comedy")
    }
    else if (item.genres[4] === 5) {
      console.log(item.genres[4] = "Crime")
    }

    else if (item.genres[4] === 6) {
      console.log(item.genres[4] = "Documentary")
    }

    else if (item.genres[4] === 7) {
      console.log(item.genres[4] = "Drama")
    }

    else if (item.genres[4] === 8) {
      console.log(item.genres[4] = "Family")
    }

    else if (item.genres[4] === 9) {
      console.log(item.genres[4] = "Fantasy")
    }

    else if (item.genres[4] === 10) {
      console.log(item.genres[4] = "History")
    }

    else if (item.genres[4] === 11) {
      console.log(item.genres[4] = "Horror")
    }
    else if (item.genres[4] === 12) {
      console.log(item.genres[4] = "Music")
    }
    else if (item.genres[4] === 13) {
      console.log(item.genres[4] = "Mystery")
    }

    else if (item.genres[4] === 14) {
      console.log(item.genres[4] = "Romance")
    }

    else if (item.genres[4] === 15) {
      console.log(item.genres[4] = "Science Fiction")
    }

    else if (item.genres[4] === 16) {
      console.log(item.genres[4] = "TV Movie")
    }

    else if (item.genres[4] === 17) {
      console.log(item.genres[4] = "Thriller")
    }


    else if (item.genres[4] === 18) {
      console.log(item.genres[4] = "War")
    }

    else if (item.genres[4] === 19) {
      console.log(item.genres[4] = "Western")
    }

    if (item.genres[5] === 1) {
      console.log(item.genres[5] = "Action")
    }

    else if (item.genres[5] === 2) {
      console.log(item.genres[5] = "Adventure")
    }
    else if (item.genres[5] === 3) {
      console.log(item.genres[5] = "Animation")
    }
    else if (item.genres[5] === 4) {
      console.log(item.genres[5] = "Comedy")
    }
    else if (item.genres[5] === 5) {
      console.log(item.genres[5] = "Crime")
    }

    else if (item.genres[5] === 6) {
      console.log(item.genres[5] = "Documentary")
    }

    else if (item.genres[5] === 7) {
      console.log(item.genres[5] = "Drama")
    }

    else if (item.genres[5] === 8) {
      console.log(item.genres[5] = "Family")
    }

    else if (item.genres[5] === 9) {
      console.log(item.genres[5] = "Fantasy")
    }

    else if (item.genres[5] === 10) {
      console.log(item.genres[5] = "History")
    }

    else if (item.genres[5] === 11) {
      console.log(item.genres[5] = "Horror")
    }
    else if (item.genres[5] === 12) {
      console.log(item.genres[5] = "Music")
    }
    else if (item.genres[5] === 13) {
      console.log(item.genres[5] = "Mystery")
    }

    else if (item.genres[5] === 14) {
      console.log(item.genres[5] = "Romance")
    }

    else if (item.genres[5] === 15) {
      console.log(item.genres[5] = "Science Fiction")
    }

    else if (item.genres[5] === 16) {
      console.log(item.genres[5] = "TV Movie")
    }

    else if (item.genres[5] === 17) {
      console.log(item.genres[5] = "Thriller")
    }


    else if (item.genres[5] === 18) {
      console.log(item.genres[5] = "War")
    }

    else if (item.genres[5] === 19) {
      console.log(item.genres[5] = "Western")
    }

  })
}






























