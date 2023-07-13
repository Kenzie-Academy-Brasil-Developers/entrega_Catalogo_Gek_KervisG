const productsArray = [
  // Produto 1
  {
    image: "img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },

  // Produto 2
  {
    image: "img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },

  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "img/actions/godzilla-action-figure.jpg",
    name: "godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },


  {
    image: "img/actions/groot-action-figure.jpg",
    name: "groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },


  {
    image: "img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },


  {
    image: "img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },


  {
    image: "img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },


  {
    image: "img/paintings/quadro-controle.jpg",
    name: "controle playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },

  {
    image: "img/paintings/quadro-mario.jpg",
    name: "mario",
    price: "R$ 275,00",
    type: "Paintings",
  },


  {
    image: "img/paintings/quadro-pacman.jpg",
    name: "pacman",
    price: "R$ 160,00",
    type: "Paintings",
  },


  {
    image: "img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },


];

const actionFiguresArray = []

const paintingsArray = []

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const products = productsArray[i]
    if (products.type === "Action Figures") {
      actionFiguresArray.push(products)
    } else if (products.type === "Paintings") {
      paintingsArray.push(products)
    }

  }
  return actionFiguresArray, paintingsArray

}
separateItems(productsArray)




function cardsPaintingsArray(paintingsArray) {
  const ulP = document.querySelector(".cardPaintings");
  for (let i = 0; i < paintingsArray.length; i++) {
    const cardP = paintingsArray[i]
    const li1 = document.createElement("li");
    const div1 = document.createElement("div")
    const imge = document.createElement('img');
    const nomeP = document.createElement('p');
    const precoo = document.createElement('small');
    imge.src = cardP.image
    imge.alt = cardP.name
    nomeP.innerText = cardP.name
    precoo.innerText = cardP.price


    div1.append(nomeP, precoo)
    li1.append(imge, div1)
    ulP.appendChild(li1)
  }

}
cardsPaintingsArray(paintingsArray)

function cardsActionFiguresArray(actionFiguresArray) {
  const ula1 = document.querySelector(".cardActionFigure");


  for (let i = 0; i < actionFiguresArray.length; i++) {
    const cardA = actionFiguresArray[i]
    const liA = document.createElement("li");
    const div1 = document.createElement("div")

    const img2 = document.createElement('img');
    const nomee = document.createElement('p');
    const precoo = document.createElement('small');
    img2.src = cardA.image
    img2.alt = cardA.name
    nomee.innerText = cardA.name
    precoo.innerText = cardA.price

    div1.append(nomee, precoo)
    liA.append(img2, div1)
    ula1.appendChild(liA)
  }

}
cardsActionFiguresArray(actionFiguresArray)