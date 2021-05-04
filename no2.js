function searchName(param1, param2, callback) {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ]
  let text = param1
  const filtered = name
    .filter((item) => {
      return item.includes(text)
    })
    .splice(!param2)
  return callback(filtered)
}

function printNew(value) {
  console.log(value)
}
searchName("an", 3, printNew)
