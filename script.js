//Retrieving inputs
const submitBtn = document.getElementById("btn");

//Retrieving paragraphs
const texts = document.querySelector(".texts");
const pState = document.getElementById("state");
const pCity = document.getElementById("city");
const pNeighborhood = document.getElementById("neighborhood");
const pStreet = document.getElementById("street");

submitBtn.addEventListener("click", () => {
  const cep = document.getElementById("cep").value;
  const request = `https://brasilapi.com.br/api/cep/v2/{${cep}}`;
  fetch(`${request}`)
    .then((response) => response.json())
    .then((data) => {
      texts.style.visibility = "visible";
      pState.textContent = `Estado: ${data.state}`;
      pCity.textContent = `Cidade: ${data.city}`;
      pNeighborhood.textContent = `Bairro: ${data.neighborhood}`;
      pStreet.textContent = `Rua: ${data.street}`;
    })
    .catch((error) => {
      console.error("Ocorreu um erro.", error);
    });
});
