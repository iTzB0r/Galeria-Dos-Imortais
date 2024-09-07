

function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let campoPesquisa = document.getElementById("campo-pesquisa").value
  
  
  let section = document.getElementById("resultados-pesquisa")

  //se o campo de pesquisa for uma string vazia
  if (campoPesquisa == "") {
   section.innerHTML = " <p>Insira o Nome do Atleta!</p> "
   return
  }

campoPesquisa = campoPesquisa.toLowerCase()

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre os dados e constrói o HTML para cada resultado
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao= dado.descricao.toLowerCase()
    tags= dado.tags.toLowerCase()
    dado.titulo.includes(campoPesquisa) 
    // se o titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)
  ) {
      //Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
           <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <p class="gols-meta">${dado.gols}</p>
        <p class="assistencia-meta">${dado.assistencias}</p>
        <p class="clube-meta">${dado.clubes}</p>
        <p class="posicao-meta">${dado.posicao}</p>
        <p class="dataNascimento-meta">${dado.dataNascimento}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
     }

      if (!resultados) {
          resultados = "<p></p>"
      }
    
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}

