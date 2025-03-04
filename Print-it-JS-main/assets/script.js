// Liste des images et textes du carrousel
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments HTML
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    // Mise à jour de l'image et du texte
    bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;

    // Mise à jour des dots
    const allDots = document.querySelectorAll(".dot");
    allDots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentIndex);
    });
}

// Création des bullets points (dots) dynamiquement
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    // Ajouter la classe 'dot_selected' au premier dot
    if (index === 0) {
        dot.classList.add("dot_selected");
    }

    // Ajout de l'event listener pour cliquer sur un dot
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
    });

    dotsContainer.appendChild(dot);
});

// Écouteurs d'événements pour les flèches
rightArrow.addEventListener("click", () => {
    console.log("Flèche droite cliquée !");
    
    // Si on est à la dernière image, on revient à la première
    currentIndex = (currentIndex + 1) % slides.length;

    updateCarousel();
});

leftArrow.addEventListener("click", () => {
    console.log("Flèche gauche cliquée !");
    
    // Si on est à la première image, on va à la dernière
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    updateCarousel();
});

// Affichage initial du carrousel
updateCarousel();