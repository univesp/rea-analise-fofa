  // Chama segunda tela
  function display101() {
    document.getElementById("text-container").style.display = "none";
    document.getElementById("imagemmobile").style.display = "none";
    document.getElementById("table-container").style.display = "flex";
    document.getElementById("printbtn2").style.display = "inherit";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // Inicia preenchimento
  function display201() {
    document.getElementById("item1").style.display = "none";
    document.getElementById("ta1").style.display = "block";
    document.getElementById("ta1").focus();
  }
  function display202() {
    document.getElementById("item2").style.display = "none";
    document.getElementById("ta2").style.display = "block";
    document.getElementById("ta2").focus();
  }
  function display203() {
    document.getElementById("item3").style.display = "none";
    document.getElementById("ta3").style.display = "block";
    document.getElementById("ta3").focus();
  }
  function display204() {
    document.getElementById("item4").style.display = "none";
    document.getElementById("ta4").style.display = "block";
    document.getElementById("ta4").focus();
  }

  // Impressão
  function callPrinter() {
    window.print();
  }
