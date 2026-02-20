const catalogo = [
    {
        titulo:"Guitarra Acústica",
        descricao:"Aprenda desde os acordes básicos até aos ritmos mais complexos.",
        imagem: "assets/images/violao.png"
    },
    {
        titulo:"Piano Clássico",
        descricao:"Domine as teclas e aprenda a ler partituras do zero.",
        imagem: "assets/images/piano.png"
    },
    {
        titulo:"Bateria Iniciante",
        descricao:"Desenvolva a sua coordenação motora e ritmo com aulas práticas.",
        imagem: "assets/images/bateria.png"
    }
]

const vitrine = document.getElementById('vitrine-cursos');

catalogo.forEach(curso => {
    vitrine.innerHTML += `
        <div class="cartao-curso relative bg-white rounded-2xl text-left border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer overflow-hidden">
            <img src="${curso.imagem}" alt="Capa do curso de ${curso.titulo}" class="w-full h-48 object-cover">
            <div class="p-8 relative">
                <button class="icone-toggle absolute top-0 right-6 text-4xl font-bold text-terracota bg-transparent border-none outline-none pointer-events-none">+</button>
                <h4 class="text-terracota text-2xl font-bold mb-2 pr-8">${curso.titulo}</h4>

                <div class="detalhes-curso hidden mt-4 pt-4 border-t border-gray-100">
                    <p class="text-gray-600 leading-relaxed">${curso.descricao}</p>
                </div>
            </div>
        </div>
    `;
});

vitrine.addEventListener('click', function(event) {
    const cartaoClicado = event.target.closest('.cartao-curso');
    if (!cartaoClicado) return;
    const detalhes = cartaoClicado.querySelector('.detalhes-curso')
    detalhes.classList.toggle('hidden');
    const icone = cartaoClicado.querySelector('.icone-toggle');
    if (!detalhes.classList.contains('hidden')) {
        icone.textContent = '-';
    } else {
        icone.textContent = '+';
    }
});