Parse.initialize("shIQiNIQO8C2Js9wnlfKYSZgv80uWv717lTaFTUo", "RKJD4IP2tHHinJa4THdOeyUDe8cfVrvnmtHLrBRo");
Parse.serverURL = "https://parseapi.back4app.com/";

let vetPersonagens = [];
const lista = document.getElementById("lista");
const inputNome = document.getElementById("inputNome");
const inputOrigem = document.getElementById("inputOrigem");
const inputEmpresa = document.getElementById("inputEmpresa");
const inputAno = document.getElementById("inputAno");
const btn= document.getElementById("btnInserir");


function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < vetPersonagens.length; ++i) {
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${vetPersonagens[i].Nome} || Ano de criação: ${vetPersonagens[i].AnoCria} || Origem: ${vetPersonagens[i].Origem}  ||  Empresa: ${vetPersonagens[i].Empresa}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
};

const gerar = async () => {
  const Personagens = Parse.Object.extend("Personagens");
  const query = new Parse.Query(Personagens);
  try {
    const results = await query.find();
    vetPersonagens = [];
    for (const object of results) {
      const Nome = object.get("Nome")
      const Empresa = object.get("Empresa")
      const Origem = object.get("Origem")
      const AnoCria= object.get("AnoCria");
      vetPersonagens.push({Nome, Empresa, AnoCria, Origem});
    }
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Personagens', error);
  }
};


const inserir = async () => {
  const myNewObject = new Parse.Object('Personagens');
  myNewObject.set('Nome', inputNome.value);
  myNewObject.set('AnoCria', Number(inputAno.value));
  myNewObject.set('Empresa', inputEmpresa.value);
  myNewObject.set('Origem', inputOrigem.value);

  try {
    const result = await myNewObject.save();
    console.log('Personagens created', result);
    gerar();
    inputNome.value="";
    inputOrigem.value="";
    inputEmpresa.value="";
  } catch (error) {
    console.error('Error while creating Personagens: ', error);
  }
};

gerar();

btn.onclick = inserir;
















