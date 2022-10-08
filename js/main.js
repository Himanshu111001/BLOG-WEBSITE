// Filter JS
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    // Add active to btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});
// Header BackGround Change On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});
// Login Page  
const container = document.querySelector(".login-container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");
//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})
// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});
