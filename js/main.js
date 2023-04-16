(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    


    
    
})(jQuery);

document.querySelector('.aAgar').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.pAgar').innerHTML = `Dungeon and Dragons est un jeu vidéo multijoueur free-to-play développé par Benoît Misplon et Antonin Duvauchel. Le joueur contrôle un cercle coloré représentant une cellule, dont le but est de grossir le plus possible en absorbant des cellules plus petites sans être à son tour absorbée par des cellules plus grosses.
    Le jeu se présente sous la forme d'un plateau, vu de dessus, et sur lequel se rejoignent toutes les personnes connectées : chacun.e peut ainsi voir en temps réel les mouvements des autres participant.e.s.
    `;
    document.querySelector('.aAgar').style.display = 'none';
})
document.querySelector('.aGlyphe').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.pGlyphe').innerHTML = `
    Il s'agit d'un site web pour une entreprise fictive. Durant ce projet nous avons du réliser le site d'une entreprise que nous avons creé, celle-ci vendait donc un moteur de jeu.
    `;
    document.querySelector('.aGlyphe').style.display = 'none';
})

document.querySelector('.aCloudy').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.pCloudy').innerHTML = `
    Le but de ce projet etait de développer un outil de chargement, classification, affichage, et consultation d'un ensemble de données <br>
    La problématique professionnelle etait de mettre en place l'organisation du projet et de créer, en équipe, une application en suivant une démarche de développement itérative et incrémentale. En partant d'un besoin décrit de manière imprécise ou incomplète par un client, l'objectif est de clarifier, compléter, collecter et formaliser le besoin, puis de développer une application communicante intégrant la manipulation des données et respectant les paradigmes de qualité (ergonomie des IHM, qualité logicielle…).
    `;
    document.querySelector('.aCloudy').style.display = 'none';
})

document.querySelector('.aUniv').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('.pUniv').innerHTML = `
Il s'agit d'un site web permettant la mise en place d'un système de co-voiturage et de location entre les étudiants et le personnel de l'université de Lille. Ce projet a été réalisé en binome , il s'agit simplement d'un site vitrine.
   
    `;
    document.querySelector('.aUniv').style.display = 'none';
})



