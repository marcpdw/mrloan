import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Avatar from '../../components/Avatar'

describe('Avatar Component', () => {

  afterEach(cleanup)

  test('should take snapshot', () => {
    const container = render(<Avatar />)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('Should render a valid DOM when inputs not provided', () => {
    const { container } = render(<Avatar />)
    const element: HTMLDivElement = container.querySelector('.avatar')

    const backgroundImg: string = element.style.backgroundImage
    expect(backgroundImg).not.toBeUndefined()
    expect(backgroundImg.includes('anonymous_user')).toBe(true)

    const secondary = container.querySelector('.secondary')
    expect(secondary).toBeNull()
  })

  test('Sets the avatar picture', () => {
    const dummyPic = '/assets/images/coffee.png'

    const { container } = render(<Avatar pic={dummyPic} />)
    const element: HTMLDivElement = container.querySelector('.avatar')

    const backgroundImg: string = element.style.backgroundImage
    expect(backgroundImg).not.toBeUndefined()
    expect(backgroundImg.includes(dummyPic)).toBe(true)
  })

  test('Sets the color band', () => {
    const dummyColor = 'red'

    const { container } = render(<Avatar color={dummyColor} />)
    const colorBand: HTMLDivElement = container.querySelector('.secondary')
    expect(colorBand).not.toBeNull()

    const classList: DOMTokenList = colorBand.classList
    expect(colorBand.style.background).toBe(dummyColor)
    expect(classList.length).toBe(1)
  })

  test('Sets the status class', () => {
    const status = 'connected'
    const { container } = render(<Avatar status={status} />)

    const colorBand: HTMLDivElement = container.querySelector('.secondary')
    expect(colorBand).not.toBeNull()
    const classList: DOMTokenList = colorBand.classList

    expect(classList.contains(status)).toBe(true)
    expect(colorBand.style.background).toBe('')
  })
})
