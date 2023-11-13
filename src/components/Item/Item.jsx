import testdata from '../App/testdata'
import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Item({ data, ...props }) {
  let itemTypeLabel = "";

  switch (data.type) {
    case "Juoksu":
      itemTypeLabel = "Juoksulenkki";
      break;
    case "Kuntosali":
      itemTypeLabel = "Kuntosaliharjoitus";
      break;
    case "BJJ":
      itemTypeLabel = "BJJ-harjoitus";
      break;
    case "Kahvakuula":
      itemTypeLabel = "Kahvakuulaharjoitus";
      break;
    default:
      itemTypeLabel = "Joku muu";
  }

  return (
    <div className={styles.item}>
      <div className={styles.item_data}>
      <div className={`${styles.item_type} ${data.type === "Juoksu" ? styles.item_type_juoksu : ''} ${data.type === "Kuntosali" ? styles.item_type_kuntosali : ''} ${data.type === "BJJ" ? styles.item_type_Bjj : ''} ${data.type === "Kahvakuula" ? styles.item_type_Kahvakuula : ''}`}>{itemTypeLabel}</div>
        {data.type === "Juoksu" && (
          <>
            <div className={styles.item_juoksu_length}>Juoksulenkin pituus: {data.length} km</div>
            <div className={styles.item_juoksu_date}>Päivämäärä: {data.date}</div>
            <div className={styles.item_juoksu_timespan}>Kesto: {data.duration} min</div>
            <div className={styles.item_juoksu_receiver}>Keskisyke: {data.averageHeartRate} bpm</div>
            <div className={styles.item_juoksu_average}>Vauhti: {data.pace} min/km</div>
          </>
        )}
        {data.type === "Kuntosali" && (
          <>
            <div className={styles.item_kuntosali_date}>Päivämäärä: {data.date}</div>
            <div className={styles.item_kuntosali_timespan}>Kesto: {data.duration} min</div>
            <div className={styles.item_kuntosali_comment}>Kommentti: {data.comment}</div> 
          </>
        )}
        {data.type === "BJJ" && (
          <>
            <div className={styles.item_Bjj_date}>Päivämäärä: {data.date}</div>
            <div className={styles.item_Bjj_timespan}>Kesto: {data.duration} min</div>
            <div className={styles.item_Bjj_comment}>Kommentti: {data.comment}</div> 
          </>
        )}
         {data.type === "Kahvakuula" && (
          <>
            <div className={styles.item_Kahvakuula_date}>Päivämäärä: {data.date}</div>
            <div className={styles.item_Kahvakuula_timespan}>Kesto: {data.duration} min</div>
            <div className={styles.item_Kahvakuula_comment}>Kommentti: {data.comment}</div> 
          </>
        )}
      </div>
      <div className={styles.item_edit}>
        <Link to={"/edit/" + data.id}><MdNavigateNext /></Link>
      </div>
    </div>
  );
}

export default Item;