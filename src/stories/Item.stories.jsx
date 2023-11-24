import Item from '../components/Item'
import { MemoryRouter } from 'react-router-dom'

export default {
    title: 'Components/Item',
    component: Item,
    tags: ['autodocs'],
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
    argTypes: {
      data: { control: 'object' },
    }
  }

  export const Default = { 
    args: {
      data: {
        id: "1",
        type: "Juoksu",
        length: 10, 
        date: "2023-11-22", 
        duration: 55, 
        averageHeartRate: 140, 
        pace: "5:30",  
        comment: "Peruslenkki"     
      }
    }
  }
  
  export const OnlyRequiredData = {
    args: {
      data: {
        id: "2",
        type: "Kuntosali", 
        date: "2023-11-23", 
        duration: 60, 
        comment: "Kyykkytreeni"
      }
    }  
  }
  