
const catFactsUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1" ;

function getcatFacts() {
    fetch(catFactsUrl)
        .then((response) => response.json())
		.then((data) => showCatFacts(data))
		.catch((error) => console.error(error))
}

function showCatFacts(data) {
    let factsDiv = document.getElementById("facts");
    factsDiv.innerHTML = null;
    let factP = document.createElement("p");
    factP.textContent = data.text;
    factP.style.fontSize = "25px";
    factsDiv.appendChild(factP); 
}     
document.getElementById("submit-name").addEventListener("click",getcatFacts)



 
