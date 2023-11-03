import testdata from '../App/testdata'
import styles from './Item.module.scss'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Item({data, ...props}) {

  return (
    <div className={styles.item}>
    <div className={styles.item_data}>
      <div className={styles.item_type}>Juoksulenkki</div>
      <div className={styles.item_amount}>Juoksulenkin pituus: {data.length} km</div>
      <div className={styles.item_date}>Päivämäärä: {data.date}</div>
      <div className={styles.item_timespan}>Kesto: {data.duration} min</div>
      <div className={styles.item_receiver}>Keskisyke: {data.averageHeartRate} bpm</div>
      <div className={styles.item_average}>Vauhti: {data.pace} min/km</div>
    </div>
    <div className={styles.item_edit}>
        <Link to={"/edit/" + data.id}><MdNavigateNext /></Link>
      </div>
    </div>
  )
}
  
export default Item