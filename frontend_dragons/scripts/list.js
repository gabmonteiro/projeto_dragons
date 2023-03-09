function getDragons() {
  fetch("https://api-dragons-production.up.railway.app/receivedragon").then(
    async function (response) {
      var listaJson = await response.json();
      console.log(listaJson);
      let nomes = "";
      let tipos = "";
      let contagem=0;
      listaJson.forEach((element) => {
        nomes += `<p><strong>${contagem+1} Nome:</strong> ${element.nome}</p>`;
        tipos += `<p><strong>${contagem+1} Tipo:</strong> ${element.tipo}</p>`;
        contagem++;
      });
      document.querySelector("#info").innerHTML += tipos;
      document.querySelector("#info2").innerHTML += nomes;
    }
  );
}

getDragons();
