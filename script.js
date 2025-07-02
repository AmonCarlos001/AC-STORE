document.addEventListener('DOMContentLoaded', () => {
    // Alerta ao adicionar ao carrinho
    const botoesCarrinho = document.querySelectorAll('.adicionar-carrinho');
    botoesCarrinho.forEach((botao) => {
        botao.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });

    // Alerta ao clicar no botão do banner
    const botaoBanner = document.getElementById('botao-camisa');
    if (botaoCamisa) {
        botaoBanner.addEventListener('click', () => {
            alert('Camisa adicionada ao carrinho!');
        });
    }

    // Funcionalidade de pesquisa
    const campoBusca = document.querySelector('#campo-busca'); // usa querySelector para pegar o primeiro
    const botaoPesquisar = document.querySelector('#botao-pesquisar'); // idem
    const produtos = document.querySelectorAll('.produto');

    if (campoBusca && botaoPesquisar) {
        botaoPesquisar.addEventListener('click', () => {
            const termoBusca = campoBusca.value.trim().toLowerCase();

            produtos.forEach((produto) => {
                const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();
                produto.style.display = nomeProduto.includes(termoBusca) ? 'block' : 'none';
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const botaoCamisa = document.getElementById('botao-ver-camisa');

    botaoCamisa.addEventListener('click', () => {
        alert('Camisa adicionada ao carrinho!');
    });
});

document.getElementById('botao-buscar').addEventListener('click', function () {
  const termoBusca = document.getElementById('campo-busca').value.toLowerCase();
  const produtos = document.querySelectorAll('.produto');

  produtos.forEach(produto => {
    const nomeProduto = produto.querySelector('h3').textContent.toLowerCase();

    if (nomeProduto.includes(termoBusca)) {
      produto.style.display = 'block';
    } else {
      produto.style.display = 'none';
    }
  });
});

document.getElementById('campo-busca').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    document.getElementById('botao-buscar').click();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const botoesMarca = document.querySelectorAll("button[data-marca]");
  const produtos = document.querySelectorAll(".produto");

  botoesMarca.forEach((botao) => {
    botao.addEventListener("click", function () {
      const marcaSelecionada = this.getAttribute("data-marca");

      produtos.forEach((produto) => {
        // Supondo que você tenha uma classe da marca no produto (ex: class="produto adidas")
        if (produto.classList.contains(marcaSelecionada)) {
          produto.style.display = "block";
        } else {
          produto.style.display = "none";
        }
      });
    });
  });
});


