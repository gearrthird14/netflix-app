import React, { useState, useEffect} from 'react';
import axios from '../Api/axios'
import requests from '../Api/Requests';
// Styles
import styles from './Banner.module.scss';

const Banner = () => {
  
  const [movie, setMovie] = useState([]);
 
 
  useEffect (() => {
    const apiHandler =async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[
       Math.floor(Math.random() * request.data.results.length - 1)
      ])
      return request;
   }
   apiHandler()
  }, [])
  
  console.log(movie, '@@@@@@@@@@@@')

  
  const textHandler = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + '...' : str;
  };

  return (
   <>
    <header className={styles.banner} style={{
      backgroundSize: "cover",
      backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      backgroundPosition: "center center"
    }}
    >
      <div className={styles.banner_Contents}>
        <h1 className={styles.banner_Title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
          <div className={styles.banner_BtnGroup}>
            <button className={styles.banner_Btn}>Play</button>
            <button className={styles.banner_Btn}>My List</button>
          </div>
          <h1 className={styles.banner_Description}>
          {textHandler(`${movie?.overview}`, 150)}
          </h1>
      </div>

      <div className={styles.banner_FadeBottom} />
    </header>
   </>
  )
}

export default Banner




