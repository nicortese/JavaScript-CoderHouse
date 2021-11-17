class Car {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }
  carinfo() {
    alert(
      "Tu vehiculo es un " +
        this.marca +
        " " +
        this.modelo +
        " del año " +
        this.año
    );
  }
}

function cotizar() {
  const marca = prompt("Ingrese marca de su vehiculo");
  const modelo = prompt("Ingrese el modelo de su vehiculo");
  const año = parseInt(prompt("Ingrese el año de su vehiculo"));
  const auto = new Car(marca, modelo, año);
  auto.carinfo();
}

function brandsearch() {
    const brandname = document.getElementById("brandsearch").value
    if (brandlist.includes(brandname.toLowerCase())){
        alert("Ese auto lo podemos cotizar")
    }else{
        alert("Ese auto no se puede cotizar")
    }
    
}

function clearinfo() {
    document.getElementById("brandsearch").value=""
    
}

const brandlist = [
  "abarth",
  "alfa romeo",
  "aston martin",
  "audi",
  "bentley",
  "bmw",
  "bugatti",
  "cadillac",
  "chevrolet",
  "chrysler",
  "citroën",
  "dacia",
  "daewoo",
  "daihatsu",
  "dodge",
  "donkervoort",
  "ds",
  "ferrari",
  "fiat",
  "fisker",
  "ford",
  "honda",
  "hummer",
  "hyundai",
  "infiniti",
  "iveco",
  "jaguar",
  "jeep",
  "kia",
  "ktm",
  "lada",
  "lamborghini",
  "lancia",
  "land rover",
  "landwind",
  "lexus",
  "lotus",
  "maserati",
  "maybach",
  "mazda",
  "mclaren",
  "mercedes-benz",
  "mg",
  "mini",
  "mitsubishi",
  "morgan",
  "nissan",
  "opel",
  "peugeot",
  "porsche",
  "renault",
  "rolls-royce",
  "rover",
  "saab",
  "seat",
  "skoda",
  "smart",
  "ssangyong",
  "subaru",
  "suzuki",
  "tesla",
  "toyota",
  "volkswagen",
  "volvo",
];
brandlist.sort();
