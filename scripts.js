const caes = [
    { nome: "Thor", descricao: "Thor é muito protetor e cuida da casa com dedicação.", codigo: "C0001", imagem: "imagens/pet1.jpg" },
    { nome: "Maria", descricao: "Maria é calma e ideal para lares tranquilos.", codigo: "C0002", imagem: "imagens/pet2.jpg" },
    { nome: "Carlinhos Magnata", descricao: "Carlinhos Magnata adora brincar ao ar livre e correr.", codigo: "C0003", imagem: "imagens/pet3.webp" },
    { nome: "Sandro", descricao: "Sandro é fiel e protetor, ótimo para a família.", codigo: "C0004", imagem: "imagens/pet4.jpg" },
    { nome: "Max", descricao: "Max tem muita energia e adora socializar com outros cães.", codigo: "C0005", imagem: "https://via.placeholder.com/150" },
    { nome: "Zen", descricao: "Zen é calmo e ama descansar ao lado dos seus donos.", codigo: "C0006", imagem: "https://via.placeholder.com/150" },
    { nome: "Buddy", descricao: "Buddy é extrovertido e muito amigável com crianças.", codigo: "C0007", imagem: "https://via.placeholder.com/150" },
    { nome: "Duke", descricao: "Duke é inteligente e aprende rápido novos truques.", codigo: "C0008", imagem: "https://via.placeholder.com/150" },
    { nome: "Rocky", descricao: "Rocky é brincalhão e adora correr no parque.", codigo: "C0009", imagem: "https://via.placeholder.com/150" },
    { nome: "Oscar", descricao: "Oscar é leal e sempre atento à sua família.", codigo: "C0010", imagem: "https://via.placeholder.com/150" },
    { nome: "Rex", descricao: "Rex é brincalhão e cheio de energia.", codigo: "C0011", imagem: "https://via.placeholder.com/150" },
    { nome: "Charlie", descricao: "Charlie adora se divertir e é cheio de energia.", codigo: "C0012", imagem: "https://via.placeholder.com/150" },
    { nome: "Fred", descricao: "Fred é tranquilo e ótimo para quem mora em apartamento.", codigo: "C0013", imagem: "https://via.placeholder.com/150" },
    { nome: "Sammy", descricao: "Sammy tem um temperamento amigável e adora receber carinho.", codigo: "C0014", imagem: "https://via.placeholder.com/150" },
    { nome: "Leo", descricao: "Leo é sociável e adora brincar com outros animais.", codigo: "C0015", imagem: "https://via.placeholder.com/150" },
    { nome: "Luca", descricao: "Luca é muito carinhoso e gosta de estar perto dos seus donos.", codigo: "C0016", imagem: "https://via.placeholder.com/150" },
    { nome: "Spike", descricao: "Spike é brincalhão e cheio de energia.", codigo: "C0017", imagem: "https://via.placeholder.com/150" },
    { nome: "Rock", descricao: "Rock é protetor e adora se divertir com crianças.", codigo: "C0018", imagem: "https://via.placeholder.com/150" },
    { nome: "Milo", descricao: "Milo é calmo e sempre está disposto a passeios tranquilos.", codigo: "C0019", imagem: "https://via.placeholder.com/150" },
    { nome: "Finn", descricao: "Finn adora brincar na água e se refrescar no verão.", codigo: "C0020", imagem: "https://via.placeholder.com/150" },
    { nome: "Zeke", descricao: "Zeke é super amigável e adora interagir com outros animais.", codigo: "C0021", imagem: "https://via.placeholder.com/150" },
    { nome: "Bruno", descricao: "Bruno é leal e muito ligado à sua família.", codigo: "C0022", imagem: "https://via.placeholder.com/150" },
    { nome: "Toby", descricao: "Toby adora correr atrás de bolas e brincar ao ar livre.", codigo: "C0023", imagem: "https://via.placeholder.com/150" },
    { nome: "Rusty", descricao: "Rusty é calmo e adora descansar ao lado dos donos.", codigo: "C0024", imagem: "https://via.placeholder.com/150" }
];

const gatos = [
    { nome: "Ronaldo Nazário", descricao: "Ronaldo Nazário adora explorar novas alturas.", codigo: "G0001", imagem: "imagens/pet5.webp" },
    { nome: "Mia", descricao: "Mia adora um bom carinho no colo.", codigo: "G0002", imagem: "imagens/pet6.png" },
    { nome: "Safado gamer", descricao: "Safado gamer gosta de ficar relaxando ao sol.", codigo: "G0003", imagem: "imagens/pet7.jpg" },
    { nome: "Garfo", descricao: "Garfo é brincalhão e curioso, sempre explorando lugares.", codigo: "G0004", imagem: "imagens/pet8.jpg" },
    { nome: "Simba", descricao: "Simba é independente, mas sempre adora um carinho.", codigo: "G0005", imagem: "https://via.placeholder.com/150" },
    { nome: "Nina", descricao: "Nina adora se esconder em lugares altos.", codigo: "G0006", imagem: "https://via.placeholder.com/150" },
    { nome: "Tico", descricao: "Tico é muito brincalhão e adora perseguir brinquedos.", codigo: "G0007", imagem: "https://via.placeholder.com/150" },
    { nome: "Bella", descricao: "Bella adora dormir por horas no mesmo lugar.", codigo: "G0008", imagem: "https://via.placeholder.com/150" },
    { nome: "Chester", descricao: "Chester é muito sociável e gosta de interagir com outros gatos.", codigo: "G0009", imagem: "https://via.placeholder.com/150" },
    { nome: "Luna", descricao: "Luna é quieta, mas sempre curiosa.", codigo: "G0010", imagem: "https://via.placeholder.com/150" },
    { nome: "Sunny", descricao: "Sunny adora um bom banho de sol.", codigo: "G0011", imagem: "https://via.placeholder.com/150" },
    { nome: "Pixel", descricao: "Pixel é independente e sempre encontra seu próprio espaço.", codigo: "G0012", imagem: "https://via.placeholder.com/150" },
    { nome: "Charlie", descricao: "Charlie é muito tranquilo e gosta de se aventurar no jardim.", codigo: "G0013", imagem: "https://via.placeholder.com/150" },
    { nome: "Zara", descricao: "Zara adora explorar os cantos da casa.", codigo: "G0014", imagem: "https://via.placeholder.com/150" },
    { nome: "Milo", descricao: "Milo gosta de brincar de esconde-esconde.", codigo: "G0015", imagem: "https://via.placeholder.com/150" },
    { nome: "Shadow", descricao: "Shadow adora perseguir luzes e sombras.", codigo: "G0016", imagem: "https://via.placeholder.com/150" },
    { nome: "Luna", descricao: "Luna é muito carinhosa e adora ser mimada.", codigo: "G0017", imagem: "https://via.placeholder.com/150" },
    { nome: "Misty", descricao: "Misty é calmo e adora observar a rua da janela.", codigo: "G0018", imagem: "https://via.placeholder.com/150" },
    { nome: "Hunter", descricao: "Hunter é um excelente caçador de brinquedos.", codigo: "G0019", imagem: "https://via.placeholder.com/150" },
    { nome: "Nico", descricao: "Nico gosta de explorar todos os cantos da casa.", codigo: "G0020", imagem: "https://via.placeholder.com/150" },
    { nome: "Oscar", descricao: "Oscar é muito ativo e sempre em movimento.", codigo: "G0021", imagem: "https://via.placeholder.com/150" },
    { nome: "Cleo", descricao: "Cleo é descontraído e adora dormir em lugares quentes.", codigo: "G0022", imagem: "https://via.placeholder.com/150" },
    { nome: "Whiskers", descricao: "Whiskers é independente, mas adora um bom carinho.", codigo: "G0023", imagem: "https://via.placeholder.com/150" },
    { nome: "Pepper", descricao: "Pepper é muito curioso e sempre explorando novos lugares.", codigo: "G0024", imagem: "https://via.placeholder.com/150" }
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