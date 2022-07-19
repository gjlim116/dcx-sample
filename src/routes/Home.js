import { useEffect, useState } from "react";
// import Movie from "../components/Movie";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <div>
            <h3 className={styles.title}>main title</h3>
            <p className={styles.title}>sub title</p>
          </div>
          <div className={styles.movies}>
            {movies.map((movie, index) => (
                <Link to={`/detail/${movie.id}`} key={movie.id} className={styles.movie}>
                  <span className={styles.movie__index}>{++index}</span>
                  <img className={styles.movie__img} src={movie.medium_cover_image} alt={movie.title}  />
                  <span className={styles.movie__title}>
                    {movie.title}
                  </span>
                  <span className={styles.movie__year}>{movie.year}</span>
                </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
