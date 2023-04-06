// object yang akan diolah
const jobdesc = {
  marketing: [
    {
      name: "Budi",
      salary: 5000000,
    },
    {
      name: "Agus",
      salary: 4500000,
    },
  ],
  engineer: {
    frontend: [
      {
        name: "Suci",
        salary: 8500000,
      },
      {
        name: "Lukito",
        salary: 7000000,
      },
    ],
    backend: [
      {
        name: "Bustomi",
        salary: 9500000,
      },
    ],
    devops: [
      {
        name: "Paul",
        salary: 9000000,
      },
    ],
  },
};

// fungsi rekursif untuk menghitung total gaji
function calculateTotalSalary(obj) {
  let totalSalary = 0;
  // iterasi setiap key pada objek
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      // jika objek adalah array, iterasi setiap elemennya
      obj[key].forEach((element) => {
        totalSalary += element.salary;
      });
    } else {
      // jika objek adalah objek, panggil fungsi secara rekursif
      totalSalary += calculateTotalSalary(obj[key]);
    }
  }
  return totalSalary;
}

// menampilkan total gaji
console.log("Total Gaji : ", calculateTotalSalary(jobdesc)); 
