function onlyLetters(product, category) {
  if (product.search('[^a-zA-Z]+') == -1 && category.search('[^a-zA-Z]+') == -1)
    return true
  else
    return false
}
exports.onlyLetters = onlyLetters
