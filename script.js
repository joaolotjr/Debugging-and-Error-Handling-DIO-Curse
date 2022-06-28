function validArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('Send the parameters')

    if (typeof arr !== 'object')
      throw new TypeError('Array must to be of object type.')

    if (typeof num !== 'number')
      throw new TypeError('Num must to be of number type.')

    if (arr.length !== num) throw new RangeError('Invalid Size')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('This Error is a ReferenceError!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('This Error is a TypeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('This Error is a RangeError!')
      console.log(e.message)
    } else {
      console.log('Unexpected error type' + e)
    }
  }
}

console.log(validArray())
