import useForm from '../../shared/useform/useform'
import styles from './ItemForm.module.scss'
import Button from '../../shared/buttons'

function ItemForm(props) {

  const submit = () => {
    console.log(values)
    alert("SUBMIT")
  }

  const initialState = {
    type: "",
    date: "",
    lenght: "",
    duration: "",
    averageHeartRate: "",
    pace: ""
  }

  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)

  const handleCancel = () => {
    alert('CANCEL')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='type'>Liikuntamuoto</label>
              <select name='type' onChange={handleChange} value={values.type}>
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
              <input type='date' name='date' onChange={handleChange} value={values.date} />
            </div>
            <div>
            <label htmlFor='lenght'>Matka/km</label>
              <input type='number' name='lenght' step='0.10' onChange={handleChange} value={values.lenght} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='duration'>Kesto</label>
              <input type='number' name='duration' onChange={handleChange} value={values.duration} />
            </div>
            <div>
              <label htmlFor='averageHeartRate'>Keskisyke</label>
              <input type='number' name='averageHeartRate' onChange={handleChange} value={values.averageHeartRate} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='pace'>min/km</label>
              <input type='pace' name='pace' onChange={handleChange} value={values.pace} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button primary type='submit'>LISÄÄ</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
export default ItemForm