
//  Função para tratamento de erros que impede valores NaN, valores abaixo de 0 
// e valores acima de 10 nos inputs e calcula sua média

function validarNotas(nota1, nota2, id) {
  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    isNaN(nota1) ||
    isNaN(nota2)
  ) {
    document.getElementById(id).innerHTML = "n/a";
  } else {
    var media = (nota1 + nota2) / 2;
    document.getElementById(id).innerHTML = media.toFixed(2);
    return media;
  }
}


//  Função para tratamento de erro na saida das médias

function mediaGeral(media, idmedia) {
  if (isNaN(media)) {
    document.getElementById("erro").innerHTML =
      "Preencha toda a tabela para obter as Médias.";
  } else {
    document.getElementById("erro").innerHTML = "";
    document.getElementById(idmedia).innerHTML = media.toFixed(2);
  }
}


//  Função para pegar os valores dos inputs

function pegarValor() {
  // Médias de Matemática
  var nota1Mat = parseFloat(document.getElementById("mat-nota1").value);
  var nota2Mat = parseFloat(document.getElementById("mat-nota2").value);
  var mediaMat = validarNotas(nota1Mat, nota2Mat, "md-mat");

  // Médias de Física
  var nota1Fis = parseFloat(document.getElementById("fis-nota1").value);
  var nota2Fis = parseFloat(document.getElementById("fis-nota2").value);
  var mediaFis = validarNotas(nota1Fis, nota2Fis, "md-fisic");

  // Médias de Química
  var nota1Quim = parseFloat(document.getElementById("quim-nota1").value);
  var nota2Quim = parseFloat(document.getElementById("quim-nota2").value);
  var mediaQuim = validarNotas(nota1Quim, nota2Quim, "md-quim");

  // Médias de Biologia
  var nota1Bio = parseFloat(document.getElementById("bio-nota1").value);
  var nota2Bio = parseFloat(document.getElementById("bio-nota2").value);
  var mediaBio = validarNotas(nota1Bio, nota2Bio, "md-bio");

  // Médias de História
  var nota1Hist = parseFloat(document.getElementById("hist-nota1").value);
  var nota2Hist = parseFloat(document.getElementById("hist-nota2").value);
  var mediaHist = validarNotas(nota1Hist, nota2Hist, "md-hist");

  // Médias de Geografia
  var nota1Geo = parseFloat(document.getElementById("geo-nota1").value);
  var nota2Geo = parseFloat(document.getElementById("geo-nota2").value);
  var mediaGeo = validarNotas(nota1Geo, nota2Geo, "md-geo");

  // Médias de Exatas
  var mediaExatas = (mediaMat + mediaFis + mediaQuim + mediaBio) / 4;
  mediaGeral(mediaExatas, "md-exatas");

  // Médias de Humanas
  var mediaHumanas = (mediaHist + mediaGeo) / 2;
  mediaGeral(mediaHumanas, "md-humanas");
}
