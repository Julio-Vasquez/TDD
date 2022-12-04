import { storage } from '../util/storage'

export const saveUser = (key, username) => {
  storage.saveItem({ key, value: username })
}

export const getUser = key => {
  const res = storage.getItem({ key })
  return res
}
