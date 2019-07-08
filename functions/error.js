function error() {
  return function (error) {
    if (error)
      console.log("Data could not be saved." + error)
  }
}
exports.error = error
