function enviarWhats() {
    const telefone = '5541991498368';
    const texto = "Olá! Gostaria de fazer um orçamento com vocês.";
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
  }