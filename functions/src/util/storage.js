export const storage = {
  saveItem: ({ key, value }) => localStorage.setItem(key, value),
  getItem: ({ key }) => localStorage.getItem(key),
}
