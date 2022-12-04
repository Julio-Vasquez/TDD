import { beforeAll, describe, expect, it, vi } from 'vitest'

describe('test of mocks', () => {
  const mock = vi
    .fn()
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hey')
    .mockReturnValueOnce(500)

  beforeAll(() => {
    console.group('Mock')
    console.log(mock)
    console.groupEnd()
  })

  it('should work', () => {
    mock()
    expect(mock).toHaveBeenCalled()
  })

  it('should mock return undefined', () => {
    const test = mock() //'hey
    const test2 = mock() //500
    const test3 = mock() //true

    expect(test).not.toBe(undefined)
    expect(test).toBe(true)
    expect(test2).toBe('hey')

    expect(test3).toBe(500)
  })
})
