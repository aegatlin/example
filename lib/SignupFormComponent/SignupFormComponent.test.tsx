import { render, screen } from '@testing-library/react'
import SignupFormComponent from './SignupFormComponent'

describe('Index', () => {
  it('renders heading', () => {
    render(<SignupFormComponent />)
    const title = screen.getByText('Sign Up')
    expect(title).toBeInTheDocument()
  })
})
