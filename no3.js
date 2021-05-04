function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
    let filterData = dataArray.filter((value) => {
      return value > nilaiAwal && value < nilaiAkhir
    })
    let result = filterData.sort((a, b) => a - b)
    return result
  } else if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal"
  } else if (dataArray.length < 5) {
    return "jumlah angka dalam dataArray harus lebih dari 5"
  }
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]))
