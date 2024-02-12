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

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });







})(jQuery);

const popups = document.querySelectorAll('.project .col-md-6');
popup(popups);
function popup(popups) {
    popups.forEach(popup => {
        popup.innerHTML += `
            <btn id='exit' class="btn hidden exit btn-primary btn-lg-square rounded-0"><i class='bi bi-x-circle'></i></btn>
            `
        const exit = popup.querySelector('.btn');
        popup.addEventListener('click', event => {
            event.stopPropagation();
            popup.classList.add('project-popup');
            document.querySelector('body').style.overflow = 'hidden';
            popup.style.pointerEvents = 'auto';
            popup.querySelector('.p-4.pt-0').style.backgroundColor = 'white';
            document.querySelector('body').style.pointerEvents = 'none';
            exit.classList.remove('hidden');
        });
        exit.addEventListener('click', event => {
            event.stopPropagation();
            event.preventDefault();
            popup.classList.remove('project-popup');
            document.querySelector('body').style.overflow = 'auto';
            document.querySelector('body').style.pointerEvents = 'auto';
            popup.style.pointerEvents = '';

            exit.classList.add('hidden');
        })
    });
}

document.querySelector('.aAgar').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pAgar').innerHTML = `Dungeon and Dragons est un jeu vidéo multijoueur free-to-play développé par Benoît Misplon et Antonin Duvauchel. Le joueur contrôle un cercle coloré représentant une cellule, dont le but est de grossir le plus possible en absorbant des cellules plus petites sans être à son tour absorbée par des cellules plus grosses.
    Le jeu se présente sous la forme d'un plateau, vu de dessus, et sur lequel se rejoignent toutes les personnes connectées : chacun.e peut ainsi voir en temps réel les mouvements des autres participant.e.s.
    `;
    document.querySelector('.aAgar').style.display = 'none';
})

document.querySelector('.aCloudy').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pCloudy').innerHTML = `
    Le but de ce projet etait de développer un outil de chargement, classification, affichage, et consultation d'un ensemble de données <br>
    La problématique professionnelle etait de mettre en place l'organisation du projet et de créer, en équipe, une application en suivant une démarche de développement itérative et incrémentale. En partant d'un besoin décrit de manière imprécise ou incomplète par un client, l'objectif est de clarifier, compléter, collecter et formaliser le besoin, puis de développer une application communicante intégrant la manipulation des données et respectant les paradigmes de qualité (ergonomie des IHM, qualité logicielle…).
    `;
    document.querySelector('.aCloudy').style.display = 'none';
})

document.querySelector('.aUniv').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pUniv').innerHTML = `
    Il s'agit d'un site web permettant la mise en place d'un système de co-voiturage et de location entre les étudiants et le personnel de l'université de Lille. Ce projet a été réalisé en binome , il s'agit simplement d'un site vitrine.
    `;
    document.querySelector('.aUniv').style.display = 'none';
})

document.querySelector('.aRest').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pRest').innerHTML = `
    Réalisation de l'API Rest d'une pizzeria en Java. Requêtes GET/POST/PATCH/DELETE mises en place avec un lien à une base de données PostgreSQL.
    Gestion des ingrédients, pizzas et des commandes. Sécurisation de l'API avec un système de gestion d'authentification avec une basic authent.
    `;
    document.querySelector('.aRest').style.display = 'none';
})

document.querySelector('.aGlyphe').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pGlyphe').innerHTML = `
    Il s'agit d'un site web pour une entreprise fictive. Durant ce projet nous avons du réliser le site d'une entreprise que nous avons creé, celle-ci vendait donc un moteur de jeu.
    `;
    document.querySelector('.aGlyphe').style.display = 'none';
})

document.querySelector('.aPlanning').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pPlanning').innerHTML = `
    A la manière de prendreunrendezvous, de Doctolib ou de nombreux sites de prise de rendez-vous mis en place
    durant la crise COVID-19, l’objectif de ce projet consistez à réaliser un site internet de gestion de rendez-vous multiutilisateurs. Le site devait permettre d’une part de montrer aux utilisateurs les créneaux libres, d’autre part de permettre
    aux utilisateurs de saisir et gérer leurs rendez-vous, et évidemment de n’autoriser des rendez-vous que s’ils respectent
    les contraintes souhaitées pour ce site.
    Le site devait donc impérativement s’appuyer sur de nombreux paramètres permettant l’expression de contraintes afin
    de pouvoir être adapté à toutes les situations. Par exemple le planning de réservation des créneaux de piscine (avec la
    contrainte “pas plus de 30 personnes par heure”) ou le planning de réservation de créneaux chez le médecin (avec la
    contrainte “pas plus d’1 personne toutes les 15mn”).
    `;
    document.querySelector('.aPlanning').style.display = 'none';
})

document.querySelector('.aCodeWar').addEventListener('click', event => {
    event.preventDefault();
    event.stopPropagation();
    document.querySelector('.pCodeWar').innerHTML = `
    Le but du projet était d'implémenter tous les éléments nécessaires pour jouer au jeu "Code War". Le jeu consiste en une bataille entre processeurs. Chaque joueur doit écrire le programme qui s’exécutera sur un processeur.
    CodeWar est un jeu opposant des programmes s’exécutant sur une architecture rudimentaire. Le « plateau » de jeu
est constitué d’une grille de processeur qui exécutent chacun un programme. La table 1 illustre un plateau de jeu de
256 processeurs répartis sur une grille de 16 × 16. Chaque processeur possède sa mémoire propre mais peut également
adresser celle d’une partie des autres. La connexion de la grille est considérée thorique, c’est à dire que les processeurs
    `;
    document.querySelector('.aCodeWar').style.display = 'none';
})
