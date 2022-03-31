//! Declaracion y asignacion variables DOM

const $btnGenerator = document.querySelector(".card__button"),
    $quoteId = document.querySelector(".card__advice-id"),
    $main = document.querySelector(".card"),
    $quote = document.querySelector(".card__advice");

async function getData() {
    try {
        let res = await axios.get("https://api.adviceslip.com/advice"),
            json = await res.data;
        console.log(json);
        $quoteId.innerHTML = `#${json.slip.id}`
        $quote.innerHTML = `${json.slip.advice}`
        $quoteId.appendChild($quoteId)
    } catch (err) {
        let message = err.response.statusText || "Ocurrio un error";
        $quote.innerHTML = `Error ${err.response.status}: ${message}`
    }
}

$btnGenerator.addEventListener("click", getData);