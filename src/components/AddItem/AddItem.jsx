import styles from './AddItem.module.scss'
import ItemForm from '../ItemForm/ItemForm'

function AppItem(props) {

  return (
    <div>
      <h2>Uuden merkinnän lisääminen</h2>
      <ItemForm onItemSubmit={props.onItemSubmit} />
    </div>
  )

}

export default AppItem