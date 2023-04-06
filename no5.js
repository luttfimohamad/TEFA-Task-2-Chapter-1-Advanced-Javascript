class Car {
    constructor(brand, year, country) {
      this.brand = brand;
      this.year = year;
      this.country = country;
    }
    
    getAge() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
    
    isMadeInUS() {
      return this.country === 'US';
    }
}

// membuat objek
const myCar1 = new Car('Toyota', 2018, 'Japan');

// mengakses objek
console.log("Nama Mobil\t\t: ", myCar1.brand); 
console.log("Tahun Pembuatan\t\t: ", myCar1.year); 
console.log("Negara Pembuatan\t: ", myCar1.country); 
console.log("Umur Mobil\t\t: ", myCar1.getAge(), "Tahun"); 
console.log("Apakah mobil di buat di US? :", myCar1.isMadeInUS(), "\n"); 

// membuat objek
const myCar2 = new Car('Jeep', 2020, 'US');

// mengakses objek
console.log("Nama Mobil\t\t: ", myCar2.brand); 
console.log("Tahun Pembuatan\t\t: ", myCar2.year); 
console.log("Negara Pembuatan\t: ", myCar2.country); 
console.log("Umur Mobil\t\t: ", myCar2.getAge(), "Tahun"); 
console.log("Apakah mobil di buat di US? :", myCar2.isMadeInUS()); 

  