// Garante que o script só rode depois que todo o HTML for carregado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Seleciona os elementos do DOM
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const projectContainer = document.querySelector('.todos-projetos');
    const projects = document.querySelectorAll('.projeto');

    // Se não houver projetos, não faz nada
    if (projects.length === 0) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        return;
    }
    
    // 2. Variável de estado para saber qual projeto está visível
    let currentIndex = 0;
    const projectWidth = projects[0].offsetWidth; // Largura de cada projeto

    // 3. Função para atualizar a visibilidade dos botões
    const updateButtons = () => {
        // Desabilita o botão "anterior" se estiver no primeiro projeto
        prevButton.disabled = currentIndex === 0;

        // Desabilita o botão "próximo" se estiver no último projeto
        nextButton.disabled = currentIndex === projects.length - 1;
    };

    // 4. Funções para os cliques
    const goToNextProject = () => {
        if (currentIndex < projects.length - 1) {
            currentIndex++;
            projectContainer.scrollTo({
                left: currentIndex * projectWidth,
                behavior: 'smooth' // Animação suave!
            });
            updateButtons();
        }
    };

    const goToPrevProject = () => {
        if (currentIndex > 0) {
            currentIndex--;
            projectContainer.scrollTo({
                left: currentIndex * projectWidth,
                behavior: 'smooth'
            });
            updateButtons();
        }
    };

    // 5. Adiciona os "escutadores" de eventos de clique
    nextButton.addEventListener('click', goToNextProject);
    prevButton.addEventListener('click', goToPrevProject);

    // 6. Inicia o estado dos botões ao carregar a página
    updateButtons();

});