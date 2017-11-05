function getPromise (x) {
  return new Promise(function (resolve, reject) {
    if (x > 0) {
      resolve(true)
    } else {
      reject(new Error('Not greater 0'))
    }
  })
}

getPromise(0)
