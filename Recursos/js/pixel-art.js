var paleta=document.getElementById("paleta");
var grilla=document.getElementById("grilla-pixeles");
console.log("el valor de la tabla es ",grilla)




var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');


colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    colorIndicado.style.backgroundColor=colorActual;
    
    


  })
);
// funcion de generar colores en la paleta.

var generarColoresPaleta=function(){
  
  for(i=0;i<nombreColores.length;i++){
    var elemento=document.createElement("div");
    elemento.className="color-paleta";
    elemento.style.backgroundColor=nombreColores[i];
    paleta.append(elemento)
    elemento.addEventListener("click",indicarColor)
  }
}


//creamos la grilla de 1750 pixeles
var crearGrillaColores=function(){
  for(i=0;i<1750;i++){
    var cuadrado=document.createElement("div");
    grilla.append(cuadrado)
    cuadrado.addEventListener("click",pintarPixel)
    
  }
}
//Funcion que pinta pixel una vez que se percibe un click sobre cualquier cuadrado de la grilla(pixel)
var pintarPixel=function(e){
  e.target.style.backgroundColor=colorIndicado.style.backgroundColor

}

// funcion indicarColor, que al percebir un click sobre el elemento que guarda el color de la paleta, pinta el colorIndicado
var colorIndicado=document.getElementById("indicador-de-color");
var indicarColor=function(e){
  
  console.log("El objeto e es ",e.target.style.backgroundColor);
  colorIndicado.style.backgroundColor=e.target.style.backgroundColor;
  console.log("El color Indicado es",colorIndicado)
  
}

var mouseApretado=false

grilla.addEventListener("mousedown",apretar)
grilla.addEventListener("mouseup",soltar)
grilla.addEventListener("mousemove",pintarMoviendo)

function apretar(){
  mouseApretado=true
  console.log("valor del mouseApretado",mouseApretado)
}

function soltar(){
  mouseApretado=false
  console.log("valor del mouseApretado",mouseApretado)
}

function pintarMoviendo(e){
  if(mouseApretado){
    pintarPixel(e)
  }
}

$("#borrar").click(function(){
  var div=$("#grilla-pixeles div").animate({"background-color":"#ffffff"},500);

})

$("#batman").click(function(){
  cargarSuperheroe(batman)

})
$("#flash").click(function(){
  cargarSuperheroe(flash)

})
$("#wonder").click(function(){
  cargarSuperheroe(wonder)

})
$("#invisible").click(function(){
  cargarSuperheroe(invisible)

})

$("#guardar").click(function(){
  guardarPixelArt();
})

crearGrillaColores()
generarColoresPaleta()
indicarColor()
pintarPixel()