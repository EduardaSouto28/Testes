Parse.initialize("shIQiNIQO8C2Js9wnlfKYSZgv80uWv717lTaFTUo", "RKJD4IP2tHHinJa4THdOeyUDe8cfVrvnmtHLrBRo");
Parse.serverURL = "https://parseapi.back4app.com/";

let Personagens = [];
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < Personagens.length; ++i) {
    // lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${Personagens[i].Nome} - AnoCria: ${Personagens[i].AnoCria} - Origem: ${Personagens[i].Origem} - Empresa: ${Personagens[i].Empresa}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

(async () => {
  const Personagens = Parse.Object.extend("Personagens");
  const query = new Parse.Query(Personagens);
  try {
    const results = await query.find();
    Personagens = [];
    for (const object of results) {
      const Nome = object.get("Nome")
      const AnoCria = object.get("AnoCria")
      const Empresa = object.get("Empresa")
      const Origem = object.get("Origem")
      console.log(Nome);
      console.log(AnoCria);
      console.log(Empresa);
      console.log(Origem);
      Personagens.push({Nome, AnoCria, Empresa, Origem});
    }
    gerarLista();
  } catch (error) {
    console.error('Error while fetching Personagens', error);
  }
})();












