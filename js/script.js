/* ========================================
   DEVSHOW
   Main JavaScript
   ======================================== */


/* =========================
   THEME
   ========================= */

const themeToggle =
    document.querySelector(".theme-toggle");

const savedTheme =
    localStorage.getItem("devshow-theme");


if (savedTheme) {

    document.documentElement.setAttribute(
        "data-theme",
        savedTheme
    );

}


function updateThemeIcon() {

    if (!themeToggle) return;


    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    themeToggle.textContent =
        currentTheme === "light"
            ? "☾"
            : "☼";

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const currentTheme =
                document.documentElement
                .getAttribute("data-theme");


            const newTheme =
                currentTheme === "light"
                    ? "dark"
                    : "light";


            document.documentElement
                .setAttribute(
                    "data-theme",
                    newTheme
                );


            localStorage.setItem(
                "devshow-theme",
                newTheme
            );


            updateThemeIcon();

        }
    );

}


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-open"
            );

            menuToggle.classList.toggle(
                "open"
            );

        }
    );

}


/* =========================
   PASSWORD TOGGLE
   ========================= */

const passwordToggle =
    document.querySelector(
        ".password-toggle"
    );

const passwordInput =
    document.querySelector(
        "#password"
    );


if (
    passwordToggle &&
    passwordInput
) {

    passwordToggle.addEventListener(
        "click",
        () => {

            const isPassword =
                passwordInput.type ===
                "password";


            passwordInput.type =
                isPassword
                    ? "text"
                    : "password";


            passwordToggle.textContent =
                isPassword
                    ? "◉"
                    : "○";

        }
    );

}


/* =========================
   TOAST
   ========================= */

const toast =
    document.querySelector("#toast");

const toastMessage =
    document.querySelector(
        ".toast-message"
    );

let toastTimeout;


function showToast(message) {

    if (!toast || !toastMessage) {
        return;
    }


    toastMessage.textContent =
        message;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


const likeButtons =
    document.querySelectorAll(
        ".project-like"
    );

likeButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();
            event.stopPropagation();

            const isLiked =
                this.classList.toggle("liked");

            this.textContent =
                isLiked
                    ? "♥"
                    : "♡";

            showToast(
                isLiked
                    ? "Project liked"
                    : "Like removed"
            );

        }
    );

});

/* =========================
   PROJECT CARD
   ========================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("click", function () {

        // MOBILE
        if (window.innerWidth <= 767) {

            // Tap pertama → tampilkan View Project
            if (!this.classList.contains("is-active")) {

                this.classList.add("is-active");

                return;
            }

            // Tap kedua → buka project
            window.location.href = "project.html";

            return;
        }

        // DESKTOP
        window.location.href = "project.html";

    });

});