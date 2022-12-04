// callbacks
const asyncCallback = cb => {
  setTimeout(() => cb(true), 1000)
}

// promises
const asyncPromise = bool =>
  new Promise((resolve, reject) => {
    if (typeof bool !== 'boolean')
      reject(new Error('Parameter must be boolean'))
    resolve(!bool)
  })

export { asyncCallback, asyncPromise }
