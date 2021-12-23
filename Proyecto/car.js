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


document.getElementById("button-addon2").addEventListener("click", brandsearch);
const divsearch = document.getElementById("search")
function brandsearch() {
    const brandname = document.getElementById("brandsearch").value
    if (brandlist.includes(brandname.toLowerCase())){
      divsearch.innerHTML = "Este modelo lo podemos cotizar";
      divsearch.className = "accept";
    }else{
      divsearch.innerHTML = "Este modelo no lo podemos cotizar";
      divsearch.className = "reject";
    }
    
}
const button = document.getElementById("buttonnew")
const input = document.getElementById("brandsearch")
button.addEventListener("click",clearinfo)
function clearinfo() {
    input.value=""
    document.getElementById("search").innerHTML = ""
}

/*Aplicando JQuery */

let imagen = $("#gruaimagen");
$("#gruaimagen").fadeIn(function(){
  $("#gruaimagen").animate({ opacity: 0 }, 1000);
  $("#gruaimagen").animate({ opacity: 1 }, 1000);
});

console.log(gruaimagen);




