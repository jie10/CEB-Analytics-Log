gtag('event', 'exception', {
  'description': 'error_description',
  'fatal': true,   // set to true if the error is fatal
})

try {

  alert('Start of try runs')  // (1) <--

  // ...no errors here

  alert('End of try runs')   // (2) <--

} catch (err) {

  alert('Catch is ignored, because there are no errors') // (3)

}

try {
  lalala // error, variable is not defined!
} catch (err) {
  alert(err.name) // ReferenceError
  alert(err.message) // lalala is not defined
  alert(err.stack) // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err) // ReferenceError: lalala is not defined
}