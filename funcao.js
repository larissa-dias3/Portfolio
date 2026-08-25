function destacarElemento(idElemento) {
  const elemento = document.getElementById(idElemento);
  
  if (elemento) {
    // Adiciona a classe que ativa o efeito visual
    elemento.classList.add('destaque');
    
    // 2. Remove o destaque após 2.5 segundos (2500ms)
    setTimeout(() => {
      elemento.classList.remove('destaque');
    }, 2500);
  }
}