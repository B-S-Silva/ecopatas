// Dados com 24 itens para cães e gatos, cada um com um código único.
const caes = [
    { nome: "Cão 1", descricao: "Cão 1 é brincalhão e cheio de energia.", codigo: "C0001", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 2", descricao: "Cão 2 é calmo e ideal para lares tranquilos.", codigo: "C0002", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 3", descricao: "Cão 3 adora brincar ao ar livre e correr.", codigo: "C0003", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 4", descricao: "Cão 4 é fiel e protetor, ótimo para a família.", codigo: "C0004", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 5", descricao: "Cão 5 tem muita energia e adora socializar com outros cães.", codigo: "C0005", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 6", descricao: "Cão 6 é calmo e ama descansar ao lado dos seus donos.", codigo: "C0006", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 7", descricao: "Cão 7 é extrovertido e muito amigável com crianças.", codigo: "C0007", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 8", descricao: "Cão 8 é inteligente e aprende rápido novos truques.", codigo: "C0008", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 9", descricao: "Cão 9 é brincalhão e adora correr no parque.", codigo: "C0009", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 10", descricao: "Cão 10 é leal e sempre atento à sua família.", codigo: "C0010", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 11", descricao: "Cão 11 é muito protetor e cuida da casa com dedicação.", codigo: "C0011", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 12", descricao: "Cão 12 adora se divertir e é cheio de energia.", codigo: "C0012", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 13", descricao: "Cão 13 é tranquilo e ótimo para quem mora em apartamento.", codigo: "C0013", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 14", descricao: "Cão 14 tem um temperamento amigável e adora receber carinho.", codigo: "C0014", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 15", descricao: "Cão 15 é sociável e adora brincar com outros animais.", codigo: "C0015", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 16", descricao: "Cão 16 é muito carinhoso e gosta de estar perto dos seus donos.", codigo: "C0016", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 17", descricao: "Cão 17 é brincalhão e cheio de energia.", codigo: "C0017", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 18", descricao: "Cão 18 é protetor e adora se divertir com crianças.", codigo: "C0018", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 19", descricao: "Cão 19 é calmo e sempre está disposto a passeios tranquilos.", codigo: "C0019", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 20", descricao: "Cão 20 adora brincar na água e se refrescar no verão.", codigo: "C0020", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 21", descricao: "Cão 21 é super amigável e adora interagir com outros animais.", codigo: "C0021", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 22", descricao: "Cão 22 é leal e muito ligado à sua família.", codigo: "C0022", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 23", descricao: "Cão 23 adora correr atrás de bolas e brincar ao ar livre.", codigo: "C0023", imagem: "https://via.placeholder.com/150" },
    { nome: "Cão 24", descricao: "Cão 24 é calmo e adora descansar ao lado dos donos.", codigo: "C0024", imagem: "https://via.placeholder.com/150" }
];

const gatos = [
    { nome: "Gato 1", descricao: "Gato 1 adora explorar novas alturas.", codigo: "G0001", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 2", descricao: "Gato 2 adora um bom carinho no colo.", codigo: "G0002", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 3", descricao: "Gato 3 gosta de ficar relaxando ao sol.", codigo: "G0003", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 4", descricao: "Gato 4 é brincalhão e curioso, sempre explorando novos lugares.", codigo: "G0004", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 5", descricao: "Gato 5 é independente, mas sempre adora um carinho.", codigo: "G0005", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 6", descricao: "Gato 6 adora se esconder em lugares altos.", codigo: "G0006", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 7", descricao: "Gato 7 é muito brincalhão e adora perseguir brinquedos.", codigo: "G0007", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 8", descricao: "Gato 8 adora dormir por horas no mesmo lugar.", codigo: "G0008", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 9", descricao: "Gato 9 é muito sociável e gosta de interagir com outros gatos.", codigo: "G0009", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 10", descricao: "Gato 10 é quieto, mas sempre curioso.", codigo: "G0010", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 11", descricao: "Gato 11 adora um bom banho de sol.", codigo: "G0011", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 12", descricao: "Gato 12 é independente e sempre encontra seu próprio espaço.", codigo: "G0012", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 13", descricao: "Gato 13 é muito tranquilo e gosta de se aventurar no jardim.", codigo: "G0013", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 14", descricao: "Gato 14 adora explorar os cantos da casa.", codigo: "G0014", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 15", descricao: "Gato 15 gosta de brincar de esconde-esconde.", codigo: "G0015", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 16", descricao: "Gato 16 adora perseguir luzes e sombras.", codigo: "G0016", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 17", descricao: "Gato 17 é muito carinhoso e adora ser mimado.", codigo: "G0017", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 18", descricao: "Gato 18 é calmo e adora observar a rua da janela.", codigo: "G0018", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 19", descricao: "Gato 19 é um excelente caçador de brinquedos.", codigo: "G0019", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 20", descricao: "Gato 20 gosta de explorar todos os cantos da casa.", codigo: "G0020", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 21", descricao: "Gato 21 é muito ativo e sempre em movimento.", codigo: "G0021", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 22", descricao: "Gato 22 é descontraído e adora dormir em lugares quentes.", codigo: "G0022", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 23", descricao: "Gato 23 é independente, mas adora um bom carinho.", codigo: "G0023", imagem: "https://via.placeholder.com/150" },
    { nome: "Gato 24", descricao: "Gato 24 é muito curioso e sempre explorando novos lugares.", codigo: "G0024", imagem: "https://via.placeholder.com/150" }
];

const ITEMS_PER_PAGE = 8;
let currentPageCaes = 1;
let currentPageGatos = 1;

// Função para gerar cartões e paginação
function generateCards(data, sectionId, paginationId, currentPage) {
    const section = document.getElementById(sectionId);
    const pagination = document.getElementById(paginationId);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    section.innerHTML = '';
    pageData.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="card-body">
                <h3 class="card-title">${animal.nome}</h3>
                <p class="card-text">${animal.descricao}</p>
                <p class="card-code"><strong>Código:</strong> ${animal.codigo}</p>
                <a href="#" class="btn-adotar">Adotar</a>
            </div>`;
        section.appendChild(card);
    });

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    pagination.innerHTML = '';
    
    // Botão de página anterior
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<img src="setaesquerda.png" alt="Página Anterior">';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            generateCards(data, sectionId, paginationId, currentPage - 1);
        }
    });
    pagination.appendChild(prevButton);

    // Botões de paginação
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            generateCards(data, sectionId, paginationId, i);
        });
        pagination.appendChild(button);
    }

    // Botão de próxima página
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<img src="setadireita.png" alt="Próxima Página">';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            generateCards(data, sectionId, paginationId, currentPage + 1);
        }
    });
    pagination.appendChild(nextButton);
}

// Inicialização
generateCards(caes, 'caes-section', 'caes-pagination', currentPageCaes);
generateCards(gatos, 'gatos-section', 'gatos-pagination', currentPageGatos);
// Função para gerar os cartões
function generateCards(data, sectionId, paginationId, currentPage) {
    const section = document.getElementById(sectionId);
    const pagination = document.getElementById(paginationId);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const pageData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    section.innerHTML = '';
    pageData.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // Adicionando conteúdo do card
        card.innerHTML = `
            <button class="heart-btn" onclick="toggleFavorite(this)">
                ❤️
            </button>
            <img src="${animal.imagem}" alt="${animal.nome}">
            <div class="card-body">
                <h3 class="card-title">${animal.nome}</h3>
                <p class="card-text">${animal.descricao}</p>
                <p class="card-code"><strong>Código:</strong> ${animal.codigo}</p>
                <a href="#" class="btn-adotar">Adotar</a>
            </div>
        `;
        
        section.appendChild(card);
    });

    // Função para paginação
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            generateCards(data, sectionId, paginationId, i);
        });
        pagination.appendChild(button);
    }
}

// Função para alternar o status de favoritado
function toggleFavorite(button) {
    button.classList.toggle('favorited');
    if (button.classList.contains('favorited')) {
        alert('Pet favoritado!');
    } else {
        alert('Pet removido dos favoritos!');
    }
}

// Inicialização
generateCards(caes, 'caes-section', 'caes-pagination', 1);
generateCards(gatos, 'gatos-section', 'gatos-pagination', 1);
