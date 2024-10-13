const ListaSelecaoPokedevs = document.querySelectorAll(".pokedev");



ListaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        esconderCartaoPokedev();


        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        const pokedevAtivoNaListagem = desativarPokedevNaListagem();


        ativarPokedevNaListagem(idPokedevSelecionado, pokedevAtivoNaListagem);
    })
})

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector("ativo"); pokedevAtivoNaListagem.classList.remove("ativo");
    return pokedevAtivoNaListagem;
}

function ativarPokedevNaListagem(idPokedevSelecionado, pokedevAtivoNaListagem) {
    const PokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevAtivoNaListagem.classList;
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParAbrir = "cartao-" + idPokedevSelecionado;
    const CartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParAbrir);
    CartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
