import useForm from '../../shared/useform/useform'
import styles from './ItemForm.module.scss'
import Button from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {
  // Käytetään useNavigate-hookkia navigoinnin hallitsemiseen
  const navigate = useNavigate()
  // Lomake funktio, jossa runko ehtorakenteelle, jonka tule toteuttamaan myöhemmin
  const submit = () => {
    if (values.type === "Juoksu") {
      // TODO
    } else if (values.type === "Kuntosali") {
      // TODO
    } else if (values.type === "BJJ") {
      // TODO
    } else if (values.type === "Kahvakuula") {
      // TODO
    }
    // Generoi ainutlaatuisen tunnisteen ja lähettää lomakkeen
    let storedValues = Object.assign({}, values)
    storedValues.amount = parseFloat(storedValues.amount)
    storedValues.id = crypto.randomUUID()
    props.onItemSubmit(storedValues)
    navigate(-1)
  }
    // Asettaa lomakkeen arvot
  const initialState = props.formData ? props.formData : {
    type: "",
    date: "",
    length: "",
    duration: "",
    averageHeartRate: "",
    pace: "",
    comment: ""
  }
 // Purkaa saadut arvot, käyttämällä useForm koukkua
  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)
  // Peruuta funktio
  const handleCancel = () => {
    navigate(-1)
  }
  // Poista funktio
  const handleDelete = () => {
    props.onItemDelete(values.id)
    navigate(-1)
  }
  // Lomakkeen renderöinti
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='type'>Liikuntamuoto</label>
              <select id='type' name='type' onChange={handleChange} value={values.type}>
              <option value=''>Valitse vaihtoehto</option>
                <option>Juoksu</option>
                <option>Kuntosali</option>
                <option>BJJ</option>
                <option>Kahvakuula</option>
              </select>
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
            <label htmlFor='date'>Päivä</label>
              <input id='date' type='date' name='date' onChange={handleChange} value={values.date} />
            </div>
            <div>
            <label htmlFor='length'>Matka/km</label>
              <input id='length' type='number' name='length' step='0.10' onChange={handleChange} value={values.length} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='duration'>Kesto/min</label>
              <input id='duration' type='number' name='duration' onChange={handleChange} value={values.duration} />
            </div>
            <div>
              <label htmlFor='averageHeartRate'>Keskisyke</label>
              <input  id='averageHeartRate' type='number' name='averageHeartRate' onChange={handleChange} value={values.averageHeartRate} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='pace'>min/km</label>
              <input id='pace' type='number' name='pace' step='0.1' onChange={handleChange} value={values.pace} />
            </div>
            <div>
              <label htmlFor='comment'>Kommentti</label>
              <input id='comment' type='text' name='comment' onChange={handleChange} value={values.comment} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
            <Button
              primary
              disabled={
                !(values.type && values.date && values.duration && values.comment)
              }
              type="submit"
              >
              {props.formData ? "TALLENNA" : "LISÄÄ"}
            </Button>
            </div>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>
          </div>
          { props.onItemDelete ? 
            <div className={styles.itemform_row}>
              <div>
                <Button secondary onClick={handleDelete}>POISTA</Button>
              </div>
              <div></div>
            </div>
            : null }
        </div>
      </form>
    </div>
  )
}
export default ItemForm
