import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    
    console.log(json);
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (    
    <div className={styles.container}>
    {loading ? (
      <div className={styles.loader}>
        <span>Loading...</span>
      </div>
    ) : (
      <div>
        <Link to={'/'}>{'<---'}
          {/* <img className={styles.back__img} src={detail.medium_cover_image} alt={detail.title}  /> */}
        </Link>
        <div>
          <h3 className={styles.title}>detail - main title</h3>
          <p className={styles.title}>detail - sub title</p>
        </div>
        <div className={styles.movie__img_div}>
          <img className={styles.movie__img} src={detail.medium_cover_image} alt={detail.title}  />
        </div>
        <div className={styles.details}>
          <div className={styles.detail__info}>
            <span className={styles.movie__category}>
              {'제목'}
            </span>
            <span className={styles.movie__info}>
              {detail.title}
            </span>
          </div>
          <div className={styles.detail__info}>
            <span className={styles.movie__category}>
              {'제작연도'}
            </span>
            <span className={styles.movie__info}>{detail.year}</span>
          </div>
          <div className={styles.detail__info}>
            <span className={styles.movie__category}>
              {'장르'}
            </span>
            <span className={styles.movie__info}>{'코미디dlkjfldkjfls dkjfslkfjlskdjfl kdjflsdkjflsdkjfslkdj fldkfjldkfjl dfkjlfkjldfkj'}</span>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}
export default Detail;
