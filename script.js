const button_rank = document.querySelectorAll(".rate__button");
const raking_text = document.querySelector(".card__rankingText");
const ranking = document.querySelector("#card__ranking");
const thanks = document.querySelector("#card__thanks");
const button = document.querySelector(".card__button");
const cards = document.querySelector("#cards")

cards.removeChild(thanks)

button_rank.forEach(button => {
  button.addEventListener("click", e => {
    raking_text.textContent =  `You Selected ${e.path[0].innerText} out of 5`
    raking_text.textContent;  
  })
});

button.addEventListener("click", function(){
  cards.removeChild(ranking)
  cards.appendChild(thanks)
})
