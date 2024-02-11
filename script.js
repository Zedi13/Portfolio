function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}
window.addEventListener('scroll', function() {
    var rectangle = document.getElementById('rectangle');
    var scrollPosition = window.scrollY;

    // Modifier la position verticale du rectangle pour suivre le scroll
    rectangle.style.top = scrollPosition + 'px';
});



// Sélectionne tous les éléments avec la classe .tile
const tiles = document.querySelectorAll('.tile');

// Crée une instance de l'observateur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Ajoute la classe .show si l'élément est visible
        }
    });
});

// Observe chaque tuile
tiles.forEach(tile => {
    observer.observe(tile);
});

function scrollToTarget(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth' // Fait défiler en douceur
        });
    }
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Fait défiler en douceur
    });
}

function redirectToContact() {
    window.location.href = 'contact.html';
}