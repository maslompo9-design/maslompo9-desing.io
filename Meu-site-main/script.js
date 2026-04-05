function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function entrar() {

    let email = document.getElementById("email").value;

    if (email === "") {
        alert("Digite um email!");
    } else {

        let nome = email.split("@")[0];

        document.getElementById("btnLogin").innerText = "Olá, " + nome;

        localStorage.setItem("email", email);

        document.getElementById("modal").style.display = "none";
    }
}

function sair() {
    localStorage.removeItem("email");

    let btn = document.getElementById("btnLogin");
    btn.innerText = "Login";
}

function verificarLogin() {

    let emailSalvo = localStorage.getItem("email");

    if (emailSalvo) {
        sair();
    } else {
        abrirModal();
    }
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");

    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function abrirModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "flex";

    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

function fecharModal() {
    let modal = document.getElementById("modal");

    modal.classList.remove("show");

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

const elementos = document.querySelectorAll(".hidden");

function mostrarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach((el, index) => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < alturaTela - 100) {

            setTimeout(() => {
                el.classList.add("show");
            }, index * 200); // atraso progressivo
        }
    });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();

window.history.scrollRestoration = "manual";

window.onload = function () {

    let emailSalvo = localStorage.getItem("email");

    if (emailSalvo) {
        let nome = emailSalvo.split("@")[0];
        document.getElementById("btnLogin").innerText = "Olá, " + nome;
    }

    window.scrollTo(0, 0);

    mostrarElementos();
};

function abrirBusca() {
    let box = document.querySelector(".search-box");
    box.classList.toggle("ativo");
}