import React from 'react'
import { cleanup } from '@testing-library/react'
import axios from 'axios'

import { get as getUser } from '../../actions/user'

///////

type User = {
  id: string
  name: string
}

interface ReduxContext {
  getUser: (id: string) => Promise<User | null>
}

describe('Avatar Component', () => {

  jest.mock('axios')
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  afterEach(cleanup)

  test('should fetch the case when not in state', async() => {
    // Arrange
    const fakeContext: ReduxContext = {
      getUser: (id: string) => Promise.resolve(null)
    }
    mockedAxios.get.mockImplementationOnce(() => Promise.resolve({
      id: '123',
      name: 'Mr. Test'
    }))

    // Act
    const user = getUser('123', fakeContext)

    // Assert
    expect(user).not.toBeNull()
    expect(mockedAxios.get).toHaveBeenCalled();
  })

  test('should find the case in the state', () => {
    // Arrange
    const fakeContext: ReduxContext = {
      getUser: (id: string) => Promise.resolve({
        id: '123',
        name: 'Mr. Test'
      })
    }
    mockedAxios.get.mockImplementationOnce(() => Promise.reject('Should not have been called'))

    // Act
    const user = getUser('123', fakeContext)

    // Assert
    expect(user).not.toBeNull()
    expect(mockedAxios.get).not.toHaveBeenCalled();
  })
})
