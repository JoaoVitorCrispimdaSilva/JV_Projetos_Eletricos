/*==================================================
                LANDING PAGE
                JV PROJETOS ELÉTRICOS
==================================================*/

/*==================================================
                ELEMENTOS
==================================================*/

const header = document.getElementById("header");

const menuBtn = document.getElementById("menu-btn");

const nav = document.getElementById("nav");

const navLinks = document.querySelectorAll("nav a");

const backTop = document.querySelector(".back-top");

/*==================================================
                MENU MOBILE
==================================================*/

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.classList.toggle("active");

});

/*==================================================
            FECHAR MENU AO CLICAR
==================================================*/

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    });

});

/*==================================================
            HEADER + BOTÃO TOPO
==================================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    if (window.scrollY > 500) {

        backTop.classList.add("active");

    } else {

        backTop.classList.remove("active");

    }

});

/*==================================================
            VOLTAR AO TOPO
==================================================*/

backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==================================================
            SCROLL SUAVE
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const id = this.getAttribute("href");

        if (id === "#") return;

        const destino = document.querySelector(id);

        if (!destino) return;

        e.preventDefault();

        destino.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

/*==================================================
            FECHAR MENU COM ESC
==================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    }

});

/*==================================================
        FECHAR MENU AO CLICAR FORA
==================================================*/

document.addEventListener("click", (e) => {

    const clicouNoMenu = nav.contains(e.target);

    const clicouNoBotao = menuBtn.contains(e.target);

    if (!clicouNoMenu && !clicouNoBotao) {

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    }

});

/*==================================================
            EFEITO NOS BOTÕES
==================================================*/

const buttons = document.querySelectorAll(".btn-primary, .btn-header");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});

/*==================================================
        REMOVER FOCUS APÓS CLIQUE
==================================================*/

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.blur();

    });

});

/*==================================================
            PREVENIR DUPLO CLIQUE
==================================================*/

let clickLock = false;

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        if (clickLock) return;

        clickLock = true;

        setTimeout(() => {

            clickLock = false;

        }, 300);

    });

});

/*==================================================
            RESIZE
==================================================*/

window.addEventListener("resize", () => {

    if (window.innerWidth > 991) {

        nav.classList.remove("active");

        menuBtn.classList.remove("active");

    }

});

/*==================================================
                PARTE 2 ABAIXO
==================================================*/

/*==================================================
        ANIMAÇÕES AO APARECER NA TELA
==================================================*/

const animatedElements = document.querySelectorAll(

    ".fade-up, .fade-left, .fade-right, .zoom"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

animatedElements.forEach(element => {

    observer.observe(element);

});

/*==================================================
            CONTADORES ANIMADOS
==================================================*/

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        const duration = 1800;

        const increment = target / (duration / 16);

        let value = 0;

        function updateCounter() {

            value += increment;

            if (value >= target) {

                value = target;

            }

            if (target === 100) {

                counter.innerText = Math.floor(value) + "%";

            }

            else {

                counter.innerText = Math.floor(value) + "+";

            }

            if (value < target) {

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();

    });

}

const statisticsSection = document.querySelector(".statistics");

if (statisticsSection) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    }, {

        threshold: .35

    });

    counterObserver.observe(statisticsSection);

}

/*==================================================
                FAQ
==================================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*==================================================
            EFEITO PARALLAX HERO
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    hero.style.backgroundPositionY = scroll * 0.4 + "px";

});

/*==================================================
            CARDS SERVIÇOS
==================================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*==================================================
            DIFERENCIAIS
==================================================*/

const advantages = document.querySelectorAll(".advantage-card");

advantages.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*==================================================
            PROCESSO
==================================================*/

const processSteps = document.querySelectorAll(".step");

processSteps.forEach(step => {

    step.addEventListener("mouseenter", () => {

        step.style.transform = "translateY(-12px)";

    });

    step.addEventListener("mouseleave", () => {

        step.style.transform = "";

    });

});

/*==================================================
        SCROLL REVEAL EXTRA
==================================================*/

const revealElements = document.querySelectorAll(

    ".card,.advantage-card,.step,.stat"

);

window.addEventListener("scroll", () => {

    const trigger = window.innerHeight * 0.92;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

});

/*==================================================
            PRELOAD IMAGENS
==================================================*/

const images = document.querySelectorAll("img");

images.forEach(img => {

    if (img.complete) {

        img.classList.add("loaded");

    }

    else {

        img.onload = () => {

            img.classList.add("loaded");

        };

    }

});

/*==================================================
                PARTE 3 ABAIXO
==================================================*/

/*==================================================
            FORMULÁRIO
==================================================*/

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if (input.hasAttribute("required") && input.value.trim() === "") {

                input.style.borderColor = "#ff4d4d";

                valid = false;

            } else {

                input.style.borderColor = "";

            }

        });

        if (!valid) {

            alert("Preencha todos os campos obrigatórios.");

            return;

        }

        const nome = form.querySelector('input[type="text"]').value;

        const email = form.querySelector('input[type="email"]').value;

        const telefone = form.querySelector('input[type="tel"]').value;

        const mensagem = form.querySelector("textarea").value;

        const texto =

`Olá!

Meu nome é ${nome}.

Email: ${email}

Telefone: ${telefone}

Descrição do projeto:

${mensagem}`;

        const numero = "5584991268477"; // ALTERE PARA SEU NÚMERO

        const url =

`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        form.reset();

    });

}

/*==================================================
        MENU ATIVO CONFORME A SEÇÃO
==================================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
        EFEITO DE CARREGAMENTO
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==================================================
        ANIMAÇÃO DOS BOTÕES
==================================================*/

buttons.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform = "scale(.96)";

    });

    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

/*==================================================
            IMAGENS
==================================================*/

images.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transition = ".4s";

        image.style.transform = "scale(1.03)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*==================================================
            TECLA ENTER
==================================================*/

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        if (

            document.activeElement.tagName !== "TEXTAREA"

        ) {

            e.preventDefault();

        }

    }

});

/*==================================================
        LAZY LOAD SIMPLES
==================================================*/

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("loading", "lazy");

});

/*==================================================
        ANIMAÇÃO DE TÍTULOS
==================================================*/

const titles = document.querySelectorAll(".section-title h2");

titles.forEach(title => {

    title.addEventListener("mouseenter", () => {

        title.style.letterSpacing = "1px";

        title.style.transition = ".35s";

    });

    title.addEventListener("mouseleave", () => {

        title.style.letterSpacing = "";

    });

});

/*==================================================
        MENSAGEM FINAL
==================================================*/

console.log(

"%cJV Projetos Elétricos",

"color:#FFC107;font-size:22px;font-weight:bold;"

);

console.log(

"%cLanding Page desenvolvida com HTML, CSS e JavaScript.",

"color:#0D47A1;font-size:14px;"

);

/*==================================================
                FIM
==================================================*/