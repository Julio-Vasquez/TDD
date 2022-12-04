import { describe, it, expect, vi } from 'vitest'

import { storage } from './../util/storage'
import { saveUser, getUser } from './../functions/user'

vi.mock('./../util/storage.js')

describe('should storage', () => {
  const key = 'username'
  const user = 'DarKPhuRioN'

  it('should type storage is function', () => {
    expect(typeof storage.saveItem).toBe('function')
    expect(typeof storage.getItem).toBe('function')
  })

  it('should saveUser, and getUser is a function', () => {
    expect(typeof saveUser).not.toBe(undefined)
    expect(typeof getUser).toBe('function')
  })

  it('should saveUser called', () => {
    saveUser()
    expect(storage.saveItem).toHaveBeenCalledTimes(1)
  })

  it('should called with key username', () => {
    saveUser(key, user)
    expect(storage.saveItem).toHaveBeenCalledWith({
      key,
      value: user,
    })
  })

  it('should getItem called', () => {
    getUser()
    expect(storage.getItem).toHaveBeenCalledTimes(1)
  })

  it('should called with key username', () => {
    getUser(key)
    expect(storage.getItem).toHaveBeenLastCalledWith({ key })
  })

  it('should getItem return username = DarKPhuRioN', () => {
    storage.getItem.mockReturnValueOnce(user)
    const res = getUser(key)
    console.log('res', res)
    expect(res).toBe(user)
  })
})
