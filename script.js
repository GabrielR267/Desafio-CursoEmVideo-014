function pegarValor() {
    // Médias de Matemática
    var nota1Mat = parseFloat(document.getElementById("mat-nota1").value);
    var nota2Mat = parseFloat(document.getElementById("mat-nota2").value);
    var mediaMat = (nota1Mat + nota2Mat) / 2;
    document.getElementById("md-mat").innerHTML = mediaMat.toFixed(2);

    // Médias de Física
    var nota1Fis = parseFloat(document.getElementById("fis-nota1").value);
    var nota2Fis = parseFloat(document.getElementById("fis-nota2").value);
    var mediaFis = (nota1Fis + nota2Fis) / 2;
    document.getElementById("md-fisic").innerHTML = mediaFis.toFixed(2);

    // Médias de Química
    var nota1Quim = parseFloat(document.getElementById("quim-nota1").value);
    var nota2Quim = parseFloat(document.getElementById("quim-nota2").value);
    var mediaQuim = (nota1Quim + nota2Quim) / 2;
    document.getElementById("md-quim").innerHTML = mediaQuim.toFixed(2);

    // Médias de Biologia
    var nota1Bio = parseFloat(document.getElementById("bio-nota1").value);
    var nota2Bio = parseFloat(document.getElementById("bio-nota2").value);
    var mediaBio = (nota1Bio + nota2Bio) / 2;
    document.getElementById("md-bio").innerHTML = mediaBio.toFixed(2);

    // Médias de História
    var nota1Hist = parseFloat(document.getElementById("hist-nota1").value);
    var nota2Hist = parseFloat(document.getElementById("hist-nota2").value);
    var mediaHist = (nota1Hist + nota2Hist) / 2;
    document.getElementById("md-hist").innerHTML = mediaHist.toFixed(2);

    // Médias de Geografia
    var nota1Geo = parseFloat(document.getElementById("geo-nota1").value);
    var nota2Geo = parseFloat(document.getElementById("geo-nota2").value);
    var mediaGeo = (nota1Geo + nota2Geo) / 2;
    document.getElementById("md-geo").innerHTML = mediaGeo.toFixed(2);

    // Médias de Exatas
    var mediaExatas = (mediaMat + mediaFis + mediaQuim + mediaBio) / 4;
    document.getElementById("md-exatas").innerHTML = mediaExatas.toFixed(2);

    // Médias de Humanas
    var mediaHumanas = (mediaHist + mediaGeo) / 2;
    document.getElementById("md-humanas").innerHTML = mediaHumanas.toFixed(2);
  }