
document.addEventListener('DOMContentLoaded', function(){
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
  const opcoesDeAcessibilidade = document.getElementById('opcoesDeAcessibilidade')
  
  botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    
    const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-explanded') ===
      botaoDeAcessibilidade.setAttribute('aria-explanded', !botaoSelecionado)

  })

  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternarContraste = document.getElementById('alterna-contraste')
  let tamanhoAtualFonte = 1;

  aumentaFonteBotao.addEventListener('click', function(){
    taanhoAtuaFonte += 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem

)}
    diminuiFonteBotao.addEventListener('click', function(){
  tamanhoAtualFonte -= 0.1;
  document.body.style.fontSize = `${tamanhoAtualFonte}rem
  })

  alteraContraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
  })
})

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#tropicalia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay; 500 });
ScrollReveal().reveal('#contato', { elay; 500 });
                
