const movieModel = require("./database/movie.model")



const moviesData =[
    {
      "img": "https://image.tmdb.org/t/p/w500//tYqp6vEOo8YlVWrYQvt9nyOhsA2.jpg",
      "title": "The Avengers",
      "releaseYear": "2012-04-25",
      "averageRating": 4,
      "totalCounting": 10
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      "title": "Avatar: The Way of Water",
      "releaseYear": "2022-12-14",
      "averageRating": 3,
      "totalCounting": 4
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//yx0gPrJqdZei4PX8krLZXmIimSI.jpg",
      "title": "Sanam Teri Kasam",
      "releaseYear": "2016-02-05",
      "averageRating": 5,
      "totalCounting": 30
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      "title": "Black Adam",
      "releaseYear": "2022-10-19",
      "averageRating": 4,
      "totalCounting": 27
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//rNfToRJw35h7a4y6HXGRgfkLvdc.jpg",
      "title": "Bajrangi Bhaijaan",
      "releaseYear": "2015-07-17",
      "averageRating": 3,
      "totalCounting": 24
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//wE0I6efAW4cDDmZQWtwZMOW44EJ.jpg",
      "title": "RRR",
      "releaseYear": "2022-06-01",
      "averageRating": 4,
      "totalCounting": 36
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
      "title": "K.G.F",
      "releaseYear": "2018-12-20",
      "averageRating": 5,
      "totalCounting": 56
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//xWGuyAriV4h3vzSSplITsJlIUSX.jpg",
      "title": "Notebook",
      "releaseYear": "2019-03-29",
      "averageRating": 4,
      "totalCounting": 42
    },
    {
      "img": "https://image.tmdb.org/t/p/w500//vDkct38sSFSWJIATlfJw0l3QOIR.jpg",
      "title": "Naruto Shippuden the Movie",
      "releaseYear": "2007-08-04",
      "averageRating": 3,
      "totalCounting": 80
    }
]



const addData = async()=>{

    for(let i=0;i<moviesData.length;i++){

        await movieModel.create(moviesData[i]);

    }
}


module.exports = addData;