Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'o5NyUr6wDGE7Ph56wT5IgG77bkg1j2aU3A4u7jko', // This is your Application ID
  'zyIlxaicrjQPTFHFb1IGpg4Hd0IPoyWLpfBZmBK8' // This is your Javascript key
);


const div = document.getElementById("div");
const inputDescri = document.getElementById("adicTarefa");
const btnInserir = document.getElementById("inserir");

let vetTarefa = [];

function gerarLista() {
  div.innerHTML = "";
  for (let i = 0; i < vetTarefa.length; ++i) {

    const li = document.createElement("li");

    const txt = document.createTextNode(
      `${vetTarefa[i].get("Descricao")}`
    );
    txt.id= "txt";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "check";
    check.checked = vetTarefa[i].get("Concluido");
    check.onclick = (evt) => checkTarefa(evt, vetTarefa[i]);

    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = 'REMOVER';
    btnRemover.id = "btn";
    btnRemover.onclick = (evt2) => removeTarefa(evt2, vetTarefa[i]);

    li.appendChild(check);
    li.appendChild(txt);
    div.appendChild(li);
    li.appendChild(btnRemover);
  }
}

const lista = async () => {
  const Tarefa = Parse.Object.extend('Tarefa');
  const query = new Parse.Query(Tarefa);
  try {
    const results = await query.find();
    vetTarefa = results;
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Tarefa', error);
  }
};

const inserir = async () => {
  const myNewObject = new Parse.Object('Tarefa');
  myNewObject.set('Descricao', inputDescri.value);
  myNewObject.set('Concluido', false);
  inputDescri.value = "";
  inputDescri.focus();
  try {
    const result = await myNewObject.save();
    console.log('Tarefa created', result);
    lista();
  } catch (error) {
    console.error('Error while creating Tarefa: ', error);
  }
};

const checkTarefa = async (evt, tarefa) => {
  tarefa.set('Concluido', evt.target.checked);
  try {
    const response = await tarefa.save();
    console.log(response.get('Concluido'));
    console.log('Tarefa updated', response)
  } catch (error) {
    console.error('Error while updating Tarefa', error);
  }
};

const removeTarefa = async (evt2, tarefa) => {
  tarefa.set(evt2.target.remove);
  try {
    const response = await tarefa.destroy();
    console.log('Delet ParseObject', response);
    lista();
  } catch (error) {
    console.error('Error while updating Tarefa', error);
  }
};

btnInserir.onclick = inserir;
lista();
gerarLista();









