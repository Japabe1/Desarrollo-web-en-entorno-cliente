function media(a, b) {
    var media;
    media = (a + b) / 2;
    return media;
}
function mostrarMedia() {
    var a = Number(document.getElementById("eje2num1").value);
    var b = Number(document.getElementById("eje2num2").value);
    var resultado = media(a, b);
    document.getElementById("ResEje2").value = resultado.toString();
}
