Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'o5NyUr6wDGE7Ph56wT5IgG77bkg1j2aU3A4u7jko', // This is your Application ID
  'zyIlxaicrjQPTFHFb1IGpg4Hd0IPoyWLpfBZmBK8' // This is your Javascript key
);

let vetTarefa = [];
const div = document.getElementById("div");
const inputDescri = document.getElementById("adicTarefa");
const btnInserir = document.getElementById("inserir");



function gerarLista() {
  div.innerHTML = "";
  for (let i = 0; i < vetTarefa.length; ++i) {
    // lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = 'Remover';
    btnRemover.id = "btn";
    const txt = document.createTextNode(
      `${vetTarefa[i].Descricao}`
    );
    li.appendChild(txt);
    div.appendChild(li);
    li.appendChild(check);
    li.appendChild(btnRemover);
  }
}

const check=check.innerHTML;

const lista = async () => {
  const Tarefa = Parse.Object.extend('Tarefa');
  const query = new Parse.Query(Tarefa);
  vetTarefa = [];
  try {
    const results = await query.find();
    for (const object of results) {
      const Descricao = object.get('Descricao')
      const Concluido = object.get('Concluido')
      console.log(Descricao);
      console.log(Concluido);
      vetTarefa.push({ Descricao, Concluido });
    }
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Tarefa', error);
  }
};

const inserir = async () => {
  const myNewObject = new Parse.Object('Tarefa');
  myNewObject.set('Descricao', inputDescri.value);
  myNewObject.set('Concluido', false);
  try {
    const result = await myNewObject.save();
    console.log('Tarefa created', result);
    lista();
  } catch (error) {
    console.error('Error while creating Tarefa: ', error);
  }
};



btnInserir.onclick = inserir;
lista();
gerarLista();





