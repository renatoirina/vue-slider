// Array di oggetti immagine con titolo e descrizione
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Vivi la crescita di Miles Morales mentre il nuovo eroe padroneggia incredibili e esplosivi poteri per diventare il proprio Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Viaggia tra dimensioni con Ratchet e Clank mentre affrontano un malvagio imperatore proveniente da un'altra realtà.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Raduna tutti i tuoi amici e lanciati in Epic Games Fortnite, un enorme scontro tra 100 giocatori che combina saccheggi, creazioni, sparatorie e caos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Perduto, ferito e solo, un gatto randagio deve districare un antico mistero per fuggire da una città da tempo dimenticata.",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers è un epico gioco d'azione e avventura in terza persona che unisce una storia originale e cinematografica con un gameplay in singolo e cooperativo.",
  },
];

// Inizializzo l'indice attivo
let activeIndex = 0;

// Seleziono il container del carousel e il container delle miniature
const container = document.querySelector(".my-carousel-images")
const thumbnailsDom = document.querySelector(".my-thumbnails");

// Popolo il carousel e le miniature con le immagini e i relativi dettagli
images.forEach((item, index) => {
  container.innerHTML += 
  `
  <div class="my-carousel-item" carousel-item="${index + 1}">
    <img
      class="img-fluid"
      src="./${item.image}"
      alt="${item.title} immagine"
    />
    <div class="item-description px-3">
      <h2>${item.title}</h2>
      <p>${item.text}</p>
    </div>
  </div>
  `

  thumbnailsDom.innerHTML += `
  <img
  class="img-fluid my-thumbnail"
  src="./${item.image}"
  alt="Miniatura di ${item.title}"
  />
  `
});

// Ottengo tutti gli elementi immagine e rendo attivo il primo
const imageElems = document.querySelectorAll(".my-carousel-item")
imageElems[activeIndex].classList.add("active");
const thumbnailElems = document.querySelectorAll(".my-thumbnail")
thumbnailElems[activeIndex].classList.add("active");

// Ottengo i pulsanti avanti e indietro
const nextBtn = document.querySelector(".my-next-hook")
const prevBtn = document.querySelector(".my-prev-hook")

// Aggiungo gli event listener ai pulsanti
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Funzione per mostrare l'immagine successiva
function showNext() {
  imageElems[activeIndex].classList.remove("active")
  thumbnailElems[activeIndex].classList.remove("active")

  if (activeIndex < imageElems.length - 1){
    activeIndex++;
  } else {
    activeIndex = 0
  }

  imageElems[activeIndex].classList.add("active")
  thumbnailElems[activeIndex].classList.add("active");
}

// Funzione per mostrare l'immagine precedente
function showPrev() {
  imageElems[activeIndex].classList.remove("active")
  thumbnailElems[activeIndex].classList.remove("active")

  if (activeIndex > 0){
    activeIndex--;
  } else {
    activeIndex = imageElems.length - 1;
  }

  imageElems[activeIndex].classList.add("active")
  thumbnailElems[activeIndex].classList.add("active");
}

// Eseguo un loop del carousel ogni 3 secondi
const carouselLoop = setInterval (showNext, 3000);
