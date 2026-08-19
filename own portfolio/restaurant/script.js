// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// CLOSE MOBILE MENU WHEN LINK IS CLICKED

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


// MENU FILTER

const filters = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.category;

        foodCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// RESERVATION FORM

const form = document.getElementById("reservationForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    toast.classList.add("show");

    form.reset();

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();