import { render } from '@redwoodjs/testing/web'

import UsersVideosPage from './UsersVideosPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UsersVideosPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UsersVideosPage id={42} />)
    }).not.toThrow()
  })
})
