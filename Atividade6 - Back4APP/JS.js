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

    const divContainer = document.createElement("div");
    divContainer.className = "container"

    const txt = document.createTextNode(
      `${vetTarefa[i].get("Descricao")}`
    );
    const div2 = document.createElement("div");
    div2.className = "semRisco"

    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = "check";
    check.checked = vetTarefa[i].get("Concluido");
    check.onclick = (evt) => checkTarefa(evt, vetTarefa[i], div2);

    const btnRemover = document.createElement("button");
    btnRemover.className= "fa fa-trash"
    btnRemover.onclick = (evt2) => removeTarefa(evt2, vetTarefa[i]);

    divContainer.appendChild(check);
    div2.appendChild(txt);
    divContainer.appendChild(div2);
    divContainer.appendChild(btnRemover);
    div.appendChild(divContainer);
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

const checkTarefa = async (evt, tarefa, div2) => {
  tarefa.set('Concluido', evt.target.checked);

  if (evt.target.checked) {
    div2.className = "risco";
  } else {
    div2.className = "semRisco"
  }

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







