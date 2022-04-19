  let people = [{ name: "VAZIO", birth_year: "VAZIO", height: "VAZIO", height: "VAZIO", mass: "VAZIO", hair_color: "VAZIO", skin_color: "VAZIO", eye_color: "VAZIO"}];
  let currentPage = "https://swapi.dev/api/people";
  
  const btFetch = document.getElementById("btFetch");
  const listaFetch = document.getElementById("listaFetch");
  const tabela= document.getElementById("tabela");

  function exibirListaStarWars() {
    tabela.innerHTML = "";
    let tdNode;
    let textNode;

    for (let i = 0; i < people.length; ++i) {
        const trNode = document.createElement("tr");

        textNode = document.createTextNode(
            `${people[i].name}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].birth_year}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].height}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].mass}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].hair_color}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].skin_color}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);


        textNode = document.createTextNode(
            `${people[i].eye_color}`
        );
        tdNode = document.createElement("td");
        tdNode.appendChild (textNode);
        trNode.appendChild(tdNode);

        
        tabela.appendChild(trNode);
    }
  }
  
  const fetchStarWarsPeople = () => {
    fetch(currentPage)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        people = data.results;
        nextPage = data.next;
        exibirListaStarWars();
      })
      .catch((err) => {
        console.log("Erro recebido: ", err);
      });
  };
  
  
  btFetch.onclick = fetchStarWarsPeople;
  exibirListaStarWars();