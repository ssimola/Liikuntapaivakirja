import useForm from '../../shared/useform/useform'
import styles from './ItemForm.module.scss'
import Button from '../../shared/buttons'
import { useNavigate } from 'react-router-dom'

function ItemForm(props) {

  const navigate = useNavigate()

  const submit = () => {
    let storedValues = Object.assign({}, values)
    storedValues.amount = parseFloat(storedValues.amount)
    storedValues.id = crypto.randomUUID()
    props.onItemSubmit(storedValues)
    navigate(-1)
  }

  const initialState = {
    type: "",
    date: "",
    lenght: "",
    duration: "",
    averageHeartRate: "",
    pace: "",
    kommentti: ""
  }

  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)

  const handleCancel = () => {
    navigate(-1)
  }

  const handleDelete = () => {
    props.onItemDelete(values.id)
    navigate(-1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='type'>Liikuntamuoto</label>
              <select id='type' name='type' onChange={handleChange} value={values.type}>
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
            <label htmlFor='lenght'>Matka/km</label>
              <input id='lenght' type='number' name='lenght' step='0.10' onChange={handleChange} value={values.lenght} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='duration'>Kesto</label>
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
              <label htmlFor='kommentti'>Kommentti</label>
              <input id='kommentti' type='text' name='kommentti' onChange={handleChange} value={values.kommentti} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
            <Button primary
                      disabled={values.type &&
                                values.date &&
                                values.duration &&
                                values.kommentti ? "" : "true"}
                      type='submit'>
                { props.formData ? "TALLENNA" : "LISÄÄ" }
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