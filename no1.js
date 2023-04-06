// object yang akan di replace
let information = {
  author: "John Red Doe",
  title: "Mr.RED has a red and a green car",
  images: {
    url: "https://dummy.com/red-image.jpg",
  }
};

// melakukan replace pada value yang mengandung string "red" dengan string "blue"
information.author = information.author.replace(/red/ig, "blue");
information.title = information.title.replace(/red/ig, "blue");
information.images.url = information.images.url.replace(/red/ig, "blue");

// menampilkan hasil replace
console.log(information); 
