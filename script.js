// Empréstimo (Price)
function simularEmprestimo() {
  let valor = parseFloat(document.getElementById("valorEmprestimo").value);
  let juros = parseFloat(document.getElementById("jurosEmprestimo").value) / 100;
  let n = parseInt(document.getElementById("parcelasEmprestimo").value);

  let parcela = valor * (juros * Math.pow(1+juros, n)) / (Math.pow(1+juros, n) - 1);

  document.getElementById("resultadoEmprestimo").innerText =
    `Parcela mensal: R$ ${parcela.toFixed(2)}`;
}

// Financiamento (SAC)
function simularFinanciamento() {
  let valor = parseFloat(document.getElementById("valorFinanciamento").value);
  let juros = parseFloat(document.getElementById("jurosFinanciamento").value) / 100;
  let n = parseInt(document.getElementById("parcelasFinanciamento").value);

  let amortizacao = valor / n;
  let resultado = "Parcelas:\n";

  for (let i = 1; i <= n; i++) {
    let saldoDevedor = valor - amortizacao * (i-1);
    let parcela = amortizacao + saldoDevedor * juros;
    resultado += `Parcela ${i}: R$ ${parcela.toFixed(2)}\n`;
  }

  document.getElementById("resultadoFinanciamento").innerText = resultado;
}

// Saldo Devedor
function calcularSaldo() {
  let valor = parseFloat(document.getElementById("valorInicial").value);
  let juros = parseFloat(document.getElementById("jurosSaldo").value) / 100;
  let n = parseInt(document.getElementById("parcelasSaldo").value);
  let pagas = parseInt(document.getElementById("pagasSaldo").value);

  let parcela = valor * (juros * Math.pow(1+juros, n)) / (Math.pow(1+juros, n) - 1);
  let saldo = valor * Math.pow(1+juros, pagas) - parcela * ((Math.pow(1+juros, pagas)-1) / juros);

  document.getElementById("resultadoSaldo").innerText =
    `Saldo devedor após ${pagas} parcelas: R$ ${saldo.toFixed(2)}`;
}
