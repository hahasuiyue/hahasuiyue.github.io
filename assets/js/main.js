// MENU MOBILE

const eventMenuMobile = document.querySelectorAll("[data-eventmenumobile]");
const overlay = document.createElement("div");
overlay.setAttribute("class", "overlay");

if(eventMenuMobile.length >= 1) {

    eventMenuMobile.forEach(btn => {

        btn.addEventListener("click", e=> {

            const menuTarget = e.target.closest("[data-eventmenumobile]").dataset.eventmenumobile;
            const menuMobile = document.querySelector(`[data-menumobile*="${menuTarget}"]`);

            if(menuMobile) {

                if(!menuMobile.classList.contains("menu-mobile-active")) {

                    menuMobile.classList.add("menu-mobile-active");
                    document.body.prepend(overlay);
                    
                    setTimeout(() => {
                        menuMobile.style.right = "0";
                    }, 50);

                } else {
                    
                    menuMobile.style.right = "-100%";

                    setTimeout(() => {
                        menuMobile.classList.remove("menu-mobile-active");
                        overlay.remove();
                    }, 300);

                };

            };

        });

    });

};

// WINDOW RESIZE

window.addEventListener("resize", e=> {

    if(!window.matchMedia("(max-width: 992px)").matches) {

        if(document.querySelectorAll("[data-menumobile]").length >= 1) {

            document.querySelectorAll("[data-menumobile]").forEach(menu => {

                menu.classList.remove("menu-mobile-active");
                menu.style.right = "-100%";

                if(overlay) {

                    overlay.remove();
        
                };

            });

        };
    
    };

});

// STARTING ANIMATE SCROLL PAGE

AOS.init();

// ENDING ANIMATE SCROLL PAGE

// STARTING OWL CAROUSEL

if(document.querySelector(".customer")) {

    $('.customer').owlCarousel({
        loop:true,
        margin:10,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

};

if(document.querySelector(".partners-slider")) {
  
    $('.partners-slider').owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
        ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
    
};

if(document.querySelectorAll(".owl-dot").length >= 1) {

    document.querySelectorAll(".owl-dot").forEach((owlDot, index) => {

        owlDot.ariaLabel = `Slider ${index}`;

    });

};

if(document.querySelector(".owl-prev")) {

    document.querySelectorAll(".owl-prev").forEach(owlPrev => {

        owlPrev.setAttribute("aria-label", "Carrousel prev");

    });

};

if(document.querySelector(".owl-next")) {

    document.querySelectorAll(".owl-next").forEach(owlNext => {

        owlNext.setAttribute("aria-label", "Carrousel next");

    });

};

// ENDING OWL CAROUSEL

// STARTING DOMAIN EXTENSION

const domainTLDParent = document.querySelector(".domain-tld");
const domainInput = document.querySelector("#domain-input")

if(domainTLDParent) {

    domainTLDParent.querySelectorAll(".btn-tld").forEach(btn => {

        btn.addEventListener("click", e=> {

            const tld = btn.dataset.tld;

            if(domainInput) {

                domainInput.value = "";
                domainInput.value = tld;
                domainInput.setSelectionRange(0, 0);
                domainInput.focus();

            };

            document.body.scrollTop = document.documentElement.scrollTop = 0;

        });

    });

};

// ENDING DOMAIN EXTENSION

// STARTING POPOVER

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// ENDING POPOVER

// STARTING HEADER STICKLY AND BUTTON UP TO TOP

const upToTop = document.createElement("button");
upToTop.setAttribute("class", "btn btn-skyblue up-to-top");
upToTop.id = "up-to-top";

upToTop.innerHTML = `<i class="cci-arrow-02"></i>`;

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
          document.querySelector('.header').classList.add('fixed-top');
          if(document.querySelector('.header').parentElement) {
            const fixedClass = "fixed-top"
            if(fixedClass) {
                document.querySelector('.header').classList.add(fixedClass);
            };
          };
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.header').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
          setTimeout(() => {
              document.querySelector(".header").style.top = 0;
          }, 1000);
          document.body.prepend(upToTop);
        } else {
          document.querySelector('.header').classList.remove('fixed-top');
          document.querySelector('.header').removeAttribute('style');
          if(document.querySelector('.header').parentElement) {
            const fixedClass = document.querySelector('.header').parentElement.dataset.fixedClass;
            if(fixedClass) {
                if(document.querySelector('.header').classList.contains(fixedClass)) {
                    document.querySelector('.header').classList.remove(fixedClass);
                };
            }
          };
           // remove padding top from body
          document.body.style.paddingTop = '0';
          if(upToTop) {

            upToTop.remove();

          };
        } 
    });
});

if(upToTop) {

    upToTop.addEventListener("click", e=> {

        document.body.scrollTop = document.documentElement.scrollTop = 0;

    });

};

// ENDING HEADER STICKLY AND BUTTON UP TO TOP

// STARTING ALERT

const alertInfo = decodeURI(location.search.replace(/\?.*=/gi, ""));
let alertClass = "alert-danger";
let alertOn = false;

if(location.search.startsWith("?error=")) {
    alertClass = "alert-danger";
    alertOn = true;
};

if(location.search.startsWith("?warning=")) {
    alertClass = "alert-warning";
    alertOn = true;
};

if(location.search.startsWith("?success=")) {
    alertClass = "alert-success";
    alertOn = true;
};

if(alertOn) {

    const form = document.querySelector("form");
    const alert = document.createElement("div");
    alert.setAttribute("class", `alert ${alertClass} w-50 m-auto mt-3`);
    alert.innerHTML = alertInfo;

    form.parentNode.insertBefore(alert, form.previousSibling);

    window.addEventListener("load", e=> {

        alert.scrollIntoView({behavior: 'smooth', block: 'center'});

    });

};

// ENDING ALERT

// STARTING FIELD REQUIRED

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

// ENDING FIELD REQUIRED

// STARTING DARK MODE

const enableDarkMode = false;
const saveInLocalStorage = false;
const darkModeBtn = document.querySelector("#dark-mode");
const logos = document.querySelectorAll(".logo a img");
const defaultTheme = document.body.getAttribute("class");
const defaultLogo = document.querySelector(".logo a img").getAttribute("src");
const darkLogo = "assets/img/logos/onbley-logo-white.svg";

if(enableDarkMode) {

    if(localStorage.getItem("theme")) {

        if(localStorage.getItem("theme") === "theme-dark") {
    
            darkMode(true);
    
        };
    
    };
    
    if(darkModeBtn) {
    
        darkModeBtn.addEventListener("click", e=> {
    
            e.preventDefault();
    
            if(document.body.classList.contains("theme-dark")) {
    
                darkMode(false);  
    
            } else {
    
                darkMode(true);
    
            };
    
        });
    
    };
    
    function darkMode(status) {
    
        if(status) {
    
            if(defaultTheme) {
    
                document.body.removeAttribute("class");
    
            };
    
        } else {
    
            document.body.setAttribute("class", defaultTheme);
    
        };
    
        document.body.classList[(status) ? "add" : "remove"]("theme-dark");
        
        if(logos.length >= 1) {
    
            logos.forEach(logo => {
    
                logo.src = (status) ? darkLogo : defaultLogo;
        
            });
    
        };
    
        if(status) {
    
            if(saveInLocalStorage) {
    
                localStorage.setItem("theme", "theme-dark");
    
            };
    
        } else {
    
            if(saveInLocalStorage) {
    
                localStorage.removeItem("theme", "theme-dark");
    
            };
    
        };
    
    };

};

// ENDING DARK MODE

// STARTING LOADING PAGE

const loadingPage = document.querySelector("#loading-page");

document.addEventListener("DOMContentLoaded", e=> {

	loadingPage.remove();

});

// ENDING LOADING PAGE