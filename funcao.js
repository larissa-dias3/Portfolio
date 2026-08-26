document.addEventListener('DOMContentLoaded', function() {
  //seleciona url e pega o #
  const url = window.location.href;
  const hashIndex = url.indexOf('#');
  if (hashIndex !== -1) {
    const hash = url.substring(hashIndex + 1);
    //destaca o elemento com o id correspondente ao hash
    destacarElemento(hash);
  }
});
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