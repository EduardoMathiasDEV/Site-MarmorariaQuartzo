const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");


function mostrarModal(event) {
  event.preventDefault();
  document.getElementById("modal-endereco").style.display = "block";
  document.querySelector(".mascara-modal").style.display = "block";
  document.body.classList.add("modal-aberto");
}

function esconderModal() {
  document.getElementById("modal-endereco").style.display = "none";
  document.querySelector(".mascara-modal").style.display = "none";
  document.body.classList.remove("modal-aberto");
}



function enviarWhats() {
    const telefone = '5541991498368';
    const texto = "Olá! Gostaria de fazer um orçamento com vocês.";
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
  }


  function toggleResposta(elemento) {
    const resposta = elemento.querySelector(".resposta");
    const isVisible = resposta.classList.contains("ativa");

    document.querySelectorAll(".faq .resposta").forEach(r => {
      r.classList.remove("ativa");
    });

    if (!isVisible) {
      resposta.classList.add("ativa");
    }
  }

  function toggleMenu() {
  const nav = document.querySelector(".navegacao");
  nav.classList.toggle("active");
}



    



