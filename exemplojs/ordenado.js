const itens = []

quant = () => console.log(itens.length);

add = () => {
    const valor = document.getElementById("valor").value;
    if (valor != '') {
        document.getElementById("valor").value = '';
        const lista = document.getElementById("valores");
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(valor));
        lista.appendChild(node);
    }
};


swap = (vetor, posicaoA, posicaoB) => {
    const tempA = vetor[posicaoA];
    const tempB = vetor[posicaoB];
    vetor[posicaoA] = tempB;
    vetor[posicaoB] = tempA;
    return vetor;
}


shuffle = (vetor, qdeTrocas) => {
    for (let index = 1; index <= qdeTrocas; index++) {
        const randomA = Math.floor(Math.random() * vetor.length);
        const randomB = Math.floor(Math.random() * vetor.length);
        vetor = swap(vetor, randomA, randomB)
    }
    return vetor;
};

bubble_sort = (vetor) => {
    console.log('bubble_sort')
    for (var i = 0; i < vetor.length; i++) {
        for (var j = 0; j < (vetor.length - i - 1); j++) {
             
            if (vetor[j] > vetor[j + 1]) {
                vetor = swap(vetor, j, j+1)
            }
        }
    }
    return vetor;
};

selection_sort = (vetor) => {
    console.log('selection_sort')

    let n = vetor.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min]) {
                min = j;
            }
        }
        if (min != i) {
            vetor = swap(vetor, i, min)
        }
    }
    return vetor;
};

particionamento = (vetor, posicaoInicial, posicaoFinal) => {
    var pivot   = vetor[Math.floor((posicaoFinal + posicaoInicial) / 2)], 
        i       = posicaoInicial, 
        j       = posicaoFinal;
    while (i <= j) {
        while (vetor[i] < pivot) {
            i++;
        }
        while (vetor[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(vetor, i, j);
            i++;
            j--;
        }
    }
    return i;
}

quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
    var index;
    if (vetor.length > 1) {
        index = particionamento(vetor, posicaoInicial, posicaoFinal);
        if (posicaoInicial < index - 1) {
            quick_sort(vetor, posicaoInicial, index - 1);
        }
        if (index < posicaoFinal) {
            quick_sort(vetor, index, posicaoFinal);
        }
    }
    return vetor;
};


function ordenar() {
    const listaSelecao = document.getElementById('listSort');
    const listaValores = document.getElementById('valores');

    listaComoArray = [...listaValores.children];

    const listaArrayConvertidaInt = [];
    listaComoArray.map((item) => {
        listaArrayConvertidaInt.push(eval(item.innerHTML));
    });
    console.log(listaArrayConvertidaInt);

    const metodoSelecionado = listaSelecao.children[listaSelecao.selectedIndex].value;

    var novoVetor = [];

    switch (metodoSelecionado) {
        case "bubbleSort":
            novoVetor = bubble_sort(listaArrayConvertidaInt)
            break;
        case "selectionSort":
            novoVetor = selection_sort(listaArrayConvertidaInt)
            break;
        case "quickSort":
            novoVetor = quick_sort(listaArrayConvertidaInt, 0, listaArrayConvertidaInt.length -1  ) 
            break;
    }

    console.log(novoVetor);

    for (let index = 0; index < listaComoArray.length; index++) {
        const element = listaComoArray[index];
        element.innerHTML = novoVetor[index];
    }

}
function misturar() {
    console.log("misturar")
 
    const listaValores = document.getElementById('valores');

    listaComoArray = [...listaValores.children];

    const listaArrayConvertidaInt = [];
    listaComoArray.map((item) => {
        listaArrayConvertidaInt.push(eval(item.innerHTML));
    });
    console.log(listaArrayConvertidaInt);

    var novoVetor = [];

    novoVetor = shuffle(listaArrayConvertidaInt, 3)

    for (let index = 0; index < listaComoArray.length; index++) {
        const element = listaComoArray[index];
        element.innerHTML = novoVetor[index];
    }

}

function limpar() {
    let listaValores = document.getElementById('valores');
    listaValores.innerHTML = '';
  
    let input = document.getElementById('valor');
    input.value = '';
  }