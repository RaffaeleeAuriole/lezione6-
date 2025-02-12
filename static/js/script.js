let btn = document.querySelector(".hitMe");
let url = "https://api.chucknorris.io/jokes/random";
let risorsa;
let jokeContainer = document.querySelector("#joke-container");
let categorySelect = document.querySelector("#category");

btn.addEventListener("click", function (e) {
    e.preventDefault();

    // Otteniamo la categoria selezionata
    let category = categorySelect.value;

    // Se c'è una categoria selezionata, modifichiamo l'URL
    if (category) {
        url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    } else {
        url = "https://api.chucknorris.io/jokes/random"; // Senza categoria selezionata
    }

    // Effettuiamo la richiesta fetch
    risorsa = fetch(url).then(
        function (resp) {
            console.log("Risposta della fetch:", resp);
            return resp.json();
        }
    ).then(
        function (data) {
            console.log("Joke:", data.value);
            // Inseriamo il joke nel contenitore
            jokeContainer.innerHTML = data.value;
        }
    ).catch(
        function (err) {
            console.log("Errore nella richiesta:", err);
            jokeContainer.innerHTML = "An error occurred. Please try again later.";
        }
    );

    console.log(risorsa);
});
