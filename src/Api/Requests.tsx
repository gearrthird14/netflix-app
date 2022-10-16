const API_KEY = "aff3d5771c64f5dc201e016a213d9313";

const requests = {
  fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// const firebaseConfig = {
//   apiKey: "AIzaSyDHAEi3lfhs-dKFAlaH0aFapdLA93iVVqA",
//   authDomain: "netflix-clone-db568.firebaseapp.com",
//   projectId: "netflix-clone-db568",
//   storageBucket: "netflix-clone-db568.appspot.com",
//   messagingSenderId: "939176997085",
//   appId: "1:939176997085:web:b8e15f721962c76bd72b34"
// };

// Firebase Web API Key AIzaSyDHAEi3lfhs-dKFAlaH0aFapdLA93iVVqA
// Project ID netflix-clone-db568