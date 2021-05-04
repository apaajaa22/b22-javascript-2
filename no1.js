// method pada string
// 1. CharAt()
// sebuah method untuk mengakses sebuah huruf dalam string
const animal = "jerapah"
console.log(`huruf pertama pada kalimat ${animal} adalah ${animal.charAt(0)}`)

// 2. repeat()
// sebuah method untuk mengulang sebuah string
const num = 2
const name = "reza"
console.log(
  `kata ${name} diulang sebanyak ${num} kali menjadi ${name.repeat(num)}`
)

// 3. split()
// sebuah method untuk memisahkan sebuah string
const str = "nama saya adalah reza"
const split = str.split(" ", 2) // memisahkan antar 1 kalimat menggunakan 1 spasi string dan hanya menampilkan 2 kata pertama
console.log(split)

// method pada array
// 4. push()
// sebuah method untuk menambahkan sebuah item kedalam suatu array
let number = [1, 2, 3]
let newNumber = number.push(4)
console.log(number)

// 5. pop()
// sebuah method untuk menghilangkan sebuah item pada akhir index array
let angka = number.pop()
console.log(number)

// 6. shift()
// sebuah method untuk menghilangkan sebuah item pada awal index array
let newAngka = number.shift()
console.log(number)

// method pada object
// 7. assign()
// sebuah method untuk menggabungkan sebuah objek
const num1 = { a: 6 }
const num2 = { b: 8 }
const num3 = { c: 3 }
const newObj = Object.assign(num1, num2, num3)
console.log(newObj)

// 8. keys()
// sebuah method untuk mengecek sebuah key dari objek, key akan berurutan
// dari nilai terkecil hingga ke besar jika bertipe number
// jika ada sebuah string maka akan menampilkan sebuah number dahulu lalu dilanjutkan
// dengan sebuah string
const obj = { 10: "a", 11: "b", 7: "c" }
console.log(Object.keys(obj))

// method pada number
// 9. isInteger()
// sebuah method untuk mengecek apakah sebuah value adalah integer atau bukan

const cek = (a, b) => {
  if (Number.isInteger(a / b)) {
    return "integer"
  }
  return "bukan integer"
}
console.log(cek(1, 2))

// 10. isFinite()
// sebuah method untuk mengecek apakah value bernilai terbatas atau tidak
console.log(Number.isFinite(10 / 10) ? "terbatas" : "tidak terbatas")
console.log(Number.isFinite(10 / 0) ? "terbatas" : "tidak terbatas")
