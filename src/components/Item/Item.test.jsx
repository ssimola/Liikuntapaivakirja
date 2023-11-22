import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Item from './Item.jsx'

describe('Item', () => {
  test('Komponentti renderöityy merkinnän tiedoilla', () => {
    // Määritellään merkinnän tiedot.
    const data = {
      id: "1",
      type: "Juoksu",
      length: 10,
      date: "2023-03-20",
      duration: 60,
      pace: 6,
      comment: "Peruslenkki"      
    }
    render(<Item data={data} />, {wrapper: BrowserRouter})
    
    // Määritetään lokaaliasetukset.
    const locale = "fi-FI"
  
    // Tyyppi
    const typeElement = screen.getByText(/Juoksulenkki/, data.type)
    expect(typeElement).toBeInTheDocument()

    // Päivä
    const dateElement = screen.getByText(/Päivämäärä: 2023-03-20/, data.date);
    expect(dateElement).toBeInTheDocument();

    // Kommentti
    const commentElement = screen.getByText(/Kommentti: Peruslenkki/,data.comment);
    expect(commentElement).toBeInTheDocument();

  })
})