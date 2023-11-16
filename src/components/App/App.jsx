import { useState } from 'react'
import useLocalStorage from '../../shared/uselocalstorage/uselocalstorage'
import AppRouter from '../AppRouter'
import testdata from './testdata.js'
import firebase from './firebase.js'
import { collection, getFirestore, onSnapshot  } from 'firebase/firestore'
import { useEffect } from 'react'

function App() {

  const [data, setData] = useState([])

  const [typelist, setTypelist] = useLocalStorage('Liikuntapaivakirja-typelist',[])

  const firestore = getFirestore(firebase)

  useEffect( () => {
    const unsubscribe = onSnapshot(collection(firestore,'item'), snapshot => {
      const newData = []
      snapshot.forEach( doc => {
        newData.push({ ...doc.data(), id: doc.id })
      })
      setData(newData)    
    })
    return unsubscribe
  }, [])

  const handleItemDelete = (id) => {
    let copy = data.slice()
    copy = copy.filter(item => item.id !== id)
    setData(copy)
  }
  const handleItemSubmit = (newitem) => {
    let copy = data.slice()
    const index = copy.findIndex(item => item.id === newitem.id)
    if (index >= 0) {
      copy[index] = newitem
    } else {
      copy.push(newitem)
    }
    copy.sort( (a,b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate - aDate
    })
    setData(copy)
  }
  const handleTypeSubmit = (type) => {
    let copy = typelist.slice()
    copy.push(type)
    copy.sort()
    setTypelist(copy)
  }
  return (
    <>
      <AppRouter data={data}
                 typelist={typelist}
                 onItemSubmit={handleItemSubmit}
                 onItemDelete={handleItemDelete}
                 onTypeSubmit={handleTypeSubmit} />
    </>
  )
}
export default App