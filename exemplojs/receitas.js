'use strict';

const receitas = [
  {
    "titulo": "Pão de Queijo de Liquidificador",
      "imagem": "img/paodequijo.png",
      "ingredientes": [
        "Povilho Azedo",
        "Queijo ralado",
        "Ovo e Leite",
        "Sal a Gosto"],
        "preparo": "Unte com Óleo as forminhas de Cupcakes Reserve 2 Colheres de Sopa de Queijo Ralado Para Povilhar Sobre os Pães de Queijo Numa Tigela.",
  },
  {
    "titulo": "Lasanha de Arroz",
    "imagem": "img/lasanhadearroz.png",
    "ingredientes": [
      "Molho de Tomate",
      "Cebola e Alho Picado",
      "Arroz Cozido",
      "Requeijão",
      "Musssarela Ralada"],
    "preparo": "Numa Panela em Fogo Médio Coloque a Manteiga Junte a Cebola e o Alho Pìcado e deixe Refogar Coloque em uma Vasilha o Arroz.",


  },
  {
    "titulo": "Arroz de Carreteiro",
    "imagem": "./img/carreteiro.jpg",
    "ingredientes": [
      "Pimentão e Tempero verde Picado",
      "Bacon Picado",
      "Linguiça Calabresa em Cubos",
      "Caldo de Carne",
      "Arroz"],
      "preparo": "Acrescente a cebola,o alho em uma Panela e Refogue Depois Adicione as Carnes em Cubos Tempere com Sal.",
  }
];

const getListaIngredientes = (receita) => receita.ingredientes
  .map(ingrediente => `<li class="mb-1">${ingrediente}</li>`)
  .reduce((acumulador, item) => acumulador + item, '<ul class="mb-4">') + '</ul>';


const getCard = (receita) =>
  `<div class='card rounded-5 mx-2' style="width: 320px; height: 610px;"> 
     <img src='${receita.imagem}' class='card-img-top bg-warning'>
     <div class='card-body'>
       <h5 class='card-title text-center fs-4 p-2 fw-bold'>${receita.titulo}</h5>
       <div class='card-text'>${getListaIngredientes(receita)}</div>
       <hr>
       <p class='card-text p-2'>${receita.preparo}</p>
     </div>
   </div>`;

const preencheCatalogo = () => {
  document.getElementById('pnlCatalogo').innerHTML = receitas
    .map(receita => getCard(receita))
    .reduce((acumulador, item) => acumulador + item, '');
}

document.onload = preencheCatalogo();