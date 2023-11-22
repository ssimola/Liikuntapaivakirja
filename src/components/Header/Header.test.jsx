import { render, screen } from '@testing-library/react'
import Header from './Header.jsx'

describe('Header', () => {
  test('Komponentti renderöityy tekstillä', () => {
    render(<Header />)

    const header = screen.getByText('Sportti')
    expect(header).toBeInTheDocument()
  })
})
