import {
  describe,
  expect,
  it,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
} from 'vitest'

import { asyncCallback, asyncPromise } from './../functions/async'

describe('using callback and promises', done => {
  it(
    'should return  true',
    asyncCallback(result => {
      expect(result).toBe(false)

      done()
    })
  )
  beforeAll(() => console.log('me ejecuto antes de todo :v'))

  beforeEach(() => console.log('me ejecuto despues de cada test :v'))

  afterAll(() => console.log('me ejecuto de ultimo :c'))

  afterEach(() => console.log('me ejecuto al final de cada test :c'))

  it('should be a function', () => {
    expect(typeof asyncPromise).toBe('function')
  })

  it('use async await', async () => {
    const result = await asyncPromise(true)
    expect(result).toBe(false)
    expect(result).not.toBe(true)
  })

  it('the param is diff to bool then return exception', async () => {
    const result = asyncPromise([])
    expect(asyncPromise({})).rejects.toThrow()
    expect(asyncPromise(undefined)).rejects.toThrow()
    expect(result).rejects.toThrow()
  })

  it('should use .then and param is true', () => {
    asyncPromise(true).then(bool => expect(bool).toBe(false))
    asyncPromise(false).then(bool => expect(bool).toBe(true))
    asyncPromise(false).then(bool => expect(bool).not.toBe(false))
    asyncPromise(true).then(bool => expect(bool).not.toBe(true))
  })
})
