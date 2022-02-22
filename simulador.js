document.getElementById("ipca").innerHTML = "10,06%";
document.getElementById("cdi").innerHTML = "9,15%";

array = ["0"];
function arrayBotao(id) {
  array.push(id);
}
arrayA = ["0"];
function arrayBotao1(id) {
  arrayA.push(id);
}

function simular() {
  document.getElementById("resultado").style.visibility = "visible";
  document.getElementById("btnSimular").style.background = "#FF8631";
  document.getElementById("rentabilidade").style.color = "black";


  document.getElementById("colum1").style.height = "15px"; 
  document.getElementById("colum2").style.height = "20px"; 
  document.getElementById("colum3").style.height = "25px"; 
  document.getElementById("colum4").style.height = "30px";
  document.getElementById("colum5").style.height = "35px";
  document.getElementById("colum6").style.height = "40px"; 
  document.getElementById("colum7").style.height = "45px";
  document.getElementById("colum8").style.height = "50px"; 
  document.getElementById("colum9").style.height = "55px"; 
  document.getElementById("colum10").style.height = "60px";
  document.getElementById("colum11").style.height = "70px"
  document.getElementById("colum12").style.height = "80px";
  document.getElementById("colum13").style.height = "90px";
  document.getElementById("colum14").style.height = "100px";
  document.getElementById("colum15").style.height = "110px";
  document.getElementById("colum16").style.height = "120px";
  document.getElementById("colum17").style.height = "130px";

  let inputPrazo = document.getElementById("prazo").value;
  let cleanPrazo = inputPrazo.replace(/[^0-9,]*/g, "").replace(",", ".");
  let newPrazo = parseFloat(cleanPrazo);
  let campoAporteMensal = document.getElementById("aporteMes").value;
  let cleanAporteMensal = inputPrazo.replace(/[^0-9,]*/g, "").replace(",", ".");

  if (campoAporteMensal === "") {
    document.getElementById("hrAvisos").style.borderColor = "red";
    document.getElementById("aporteMensal").style.color = "red";
  }
  if (campoAporteMensal !== "") {
    document.getElementById("hrAvisos").style.borderColor = "";
    document.getElementById("aporteMensal").style.color = "black";
  }
  if (inputPrazo === "") {
    document.getElementById("hrAviso").style.borderColor = "red";
    document.getElementById("prazoMes").style.color = "red";
    document.getElementById("msgAviso").style.visibility = "visible";
  }
  if (inputPrazo !== "") {
    document.getElementById("hrAviso").style.borderColor = "";
    document.getElementById("prazoMes").style.color = "black";
    document.getElementById("msgAviso").style.visibility = "hidden";

    array.forEach((element) => {
      var ultimo = element.slice(-1)[0];
      escolha1 = ultimo;
    });
    arrayA.forEach((element) => {
      var ultimoA = element.slice(-1)[0];
      escolha2 = ultimoA;
    });

    let inputAporte = document.getElementById("aporte").value;
    let cleanAporte = inputAporte.replace(/[^0-9,]*/g, "").replace(",", ".");
    let valorAporte = parseFloat(cleanAporte);
    valorAporte = 0;
    let inputAporteMes = document.getElementById("aporteMes").value;
    let cleanAporteMes = inputAporteMes
      .replace(/[^0-9,]*/g, "")
      .replace(",", ".");
    let valorAporteMes = parseFloat(cleanAporteMes);

    let valorInvestido = valorAporte + valorAporteMes * newPrazo;

    let valorTotalInvestido = valorInvestido.toFixed(2); //VALOR SOMA DOS 2 VALORES OK

    let taxa = 1.05;
    let valorTotal = 0;
    let valorAdicional = valorAporteMes;
    let quantidadeMeses = newPrazo;
    for (let contador = 1; contador <= quantidadeMeses; contador++) {
      valorTotal = (valorTotal + valorAdicional) * taxa;
    }
    totalBruto = valorTotal.toFixed(2);

    let ganhoLiquido = totalBruto - valorTotalInvestido;
    let finalLiquidoPreBruto = totalBruto - 0;
    let valorPagoImpostoBrutoPre = ganhoLiquido * 0.0;
    let valorPagoImpostoLiquidoPreEpos = ganhoLiquido * 0.2;

    if (
      (escolha1 === "0" && escolha2 === "0") ||
      (escolha1 === "1" && escolha2 === "3")
    ) {
      document.getElementById("finalBr").innerHTML = totalBruto; //BRUTO PRÉ
      document.getElementById("ir").innerHTML = "0%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoBrutoPre.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }
    if (
      (escolha1 === "0" && escolha2 === "4") ||
      (escolha1 === "1" && escolha2 === "4")
    ) {
      document.getElementById("finalBr").innerHTML = totalBruto; //BRUTO PÓS
      document.getElementById("ir").innerHTML = "0%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoBrutoPre.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }

    if (
      (escolha1 === "0" && escolha2 === "5") ||
      (escolha1 === "1" && escolha2 === "5")
    ) {
      document.getElementById("finalBr").innerHTML = totalBruto; //BRUTO FIXADO
      document.getElementById("ir").innerHTML = "0%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoBrutoPre.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }

    if (
      (escolha1 === "2" && escolha2 === "0") ||
      (escolha1 === "2" && escolha2 === "3")
    ) {
      document.getElementById("finalBr").innerHTML = totalBruto; //LIQUIDOPRE
      document.getElementById("ir").innerHTML = "20%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoLiquidoPreEpos.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }

    if (escolha1 === "2" && escolha2 === "4") {
      document.getElementById("finalBr").innerHTML = totalBruto; //LIQUIDOPos
      document.getElementById("ir").innerHTML = "20%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoLiquidoPreEpos.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }

    if (escolha1 === "2" && escolha2 === "5") {
      document.getElementById("finalBr").innerHTML = totalBruto; //LIQUIDOPos
      document.getElementById("ir").innerHTML = "20%";
      document.getElementById("vlPago").innerHTML =
        valorPagoImpostoLiquidoPreEpos.toFixed(2);
      document.getElementById("finalLi").innerHTML = finalLiquidoPreBruto;
      document.getElementById("totalInv").innerHTML = valorTotalInvestido;
      document.getElementById("ganhoLiq").innerHTML = ganhoLiquido.toFixed(2);
    }
  }
}
