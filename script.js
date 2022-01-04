//Função para criação dos elementos
function createElements(id, row){

  // Pega o elemento do HTML
  const element = document.getElementById(`item-${id}`)

  //Cria o elemento de texto
  var text = document.createElement("text");
  text.innerHTML = row;

  //Cria a lista
  var table = document.createElement('li');
      table.setAttribute("id", `${element}`);
    
  //Insere os itens na lista
  var ul = document.getElementById('tableList');
      ul.appendChild(table);
      table.appendChild(text); 
};

 ///////////////////////////////////////////////////////////////////

  // Função para adicionar novos itens
  function InsertRow(){

  //Inicia os vetores vazios
  var List = [];
  var Object = {}; 

  // Pega conteúdo do localStorage e mostra, se existir
  let listStorage = localStorage.getItem('lista')
  if (listStorage) {     
	listRestored = JSON.parse(listStorage) //Converte JSON em objeto JavaScript
	console.log(listStorage) 
	console.log(listRestored[0]) 
  }

  //Valor inserido na caixa de texto
  var row = document.getElementById('rowInput').value; 

  //Validação se não está vazio
  if(row==""){
	alert('Preencha o item!'); 
  }else{  
  List.push(List.length+1, row);
  
  //Definição de objeto do item a ser enviado
  Object = { 
	id: List.length+1, 
	name: row
  };
    
  // Função que cria os elementos (botão, texto, etc)
  createElements(List.length+1, row); 
  
  // Envia para o local storage
  localStorage.setItem('lista', JSON.stringify(List));

};
};

 ///////////////////////////////////////////////////////////////////

 //Função para pegar conteúdo do Local Storage
   function storageList(){

    let listStorage = localStorage.getItem('lista')
  
    if (listStorage){ 
      listRestored = JSON.parse(listStorage)
      List = listRestored;
      for(var i=0; i<=List.length-1; i++){
        createElements(List[i].id, List[i].name);
      };
    };
  }