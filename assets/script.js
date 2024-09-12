const palavras = {
    informatica: {
        facil: [
            { ingles: "Computer", portugues: "Computador" },
            { ingles: "Software", portugues: "Software" },
            { ingles: "Hardware", portugues: "Hardware" },
            { ingles: "Network", portugues: "Rede" },
            { ingles: "Database", portugues: "Banco de dados" },
            { ingles: "Keyboard", portugues: "Teclado" },
            { ingles: "Mouse", portugues: "Mouse" },
            { ingles: "Monitor", portugues: "Monitor" },
            { ingles: "Printer", portugues: "Impressora" },
            { ingles: "Server", portugues: "Servidor" }
        ],
        medio: [
            { ingles: "Algorithm", portugues: "Algoritmo" },
            { ingles: "Programming", portugues: "Programação" },
            { ingles: "Cybersecurity", portugues: "Cibersegurança" },
            { ingles: "Cloud computing", portugues: "Computação em nuvem" },
            { ingles: "Artificial Intelligence", portugues: "Inteligência Artificial" },
            { ingles: "Data mining", portugues: "Mineração de dados" },
            { ingles: "Version control", portugues: "Controle de versão" },
            { ingles: "API", portugues: "Interface de Programação de Aplicações" },
            { ingles: "Framework", portugues: "Framework" },
            { ingles: "Debugging", portugues: "Depuração" }
        ],
        dificil: [
            { ingles: "Machine Learning", portugues: "Aprendizado de Máquina" },
            { ingles: "Blockchain", portugues: "Blockchain" },
            { ingles: "Quantum Computing", portugues: "Computação Quântica" },
            { ingles: "Internet of Things", portugues: "Internet das Coisas" },
            { ingles: "Augmented Reality", portugues: "Realidade Aumentada" },
            { ingles: "Neural Networks", portugues: "Redes Neurais" },
            { ingles: "Containerization", portugues: "Conteinerização" },
            { ingles: "Microservices", portugues: "Microsserviços" },
            { ingles: "DevOps", portugues: "DevOps" },
            { ingles: "Serverless Computing", portugues: "Computação sem Servidor" }
        ]
    },
    enfermagem: {
        facil: [
            { ingles: "Patient", portugues: "Paciente" },
            { ingles: "Nurse", portugues: "Enfermeiro" },
            { ingles: "Hospital", portugues: "Hospital" },
            { ingles: "Medicine", portugues: "Medicamento" },
            { ingles: "Injection", portugues: "Injeção" },
            { ingles: "Bandage", portugues: "Curativo" },
            { ingles: "Thermometer", portugues: "Termômetro" },
            { ingles: "Stethoscope", portugues: "Estetoscópio" },
            { ingles: "Syringe", portugues: "Seringa" },
            { ingles: "Wheelchair", portugues: "Cadeira de rodas" }
        ],
        medio: [
            { ingles: "Blood pressure", portugues: "Pressão arterial" },
            { ingles: "Wound care", portugues: "Cuidados com feridas" },
            { ingles: "Vital signs", portugues: "Sinais vitais" },
            { ingles: "Intensive care", portugues: "Cuidados intensivos" },
            { ingles: "Vaccination", portugues: "Vacinação" },
            { ingles: "Catheter", portugues: "Cateter" },
            { ingles: "Defibrillator", portugues: "Desfibrilador" },
            { ingles: "Triage", portugues: "Triagem" },
            { ingles: "Anesthesia", portugues: "Anestesia" },
            { ingles: "Quarantine", portugues: "Quarentena" }
        ],
        dificil: [
            { ingles: "Cardiopulmonary resuscitation", portugues: "Ressuscitação cardiopulmonar" },
            { ingles: "Electrocardiogram", portugues: "Eletrocardiograma" },
            { ingles: "Palliative care", portugues: "Cuidados paliativos" },
            { ingles: "Epidemiology", portugues: "Epidemiologia" },
            { ingles: "Pharmacology", portugues: "Farmacologia" },
            { ingles: "Endoscopy", portugues: "Endoscopia" },
            { ingles: "Hemodialysis", portugues: "Hemodiálise" },
            { ingles: "Chemotherapy", portugues: "Quimioterapia" },
            { ingles: "Immunosuppression", portugues: "Imunossupressão" },
            { ingles: "Telemedicine", portugues: "Telemedicina" }
        ]
    },
    analises_clinicas: {
        facil: [
            { ingles: "Blood test", portugues: "Exame de sangue" },
            { ingles: "Urine sample", portugues: "Amostra de urina" },
            { ingles: "Laboratory", portugues: "Laboratório" },
            { ingles: "Microscope", portugues: "Microscópio" },
            { ingles: "Specimen", portugues: "Espécime" },
            { ingles: "Centrifuge", portugues: "Centrífuga" },
            { ingles: "Pipette", portugues: "Pipeta" },
            { ingles: "Petri dish", portugues: "Placa de Petri" },
            { ingles: "Test tube", portugues: "Tubo de ensaio" },
            { ingles: "Incubator", portugues: "Incubadora" }
        ],
        medio: [
            { ingles: "Hematology", portugues: "Hematologia" },
            { ingles: "Biochemistry", portugues: "Bioquímica" },
            { ingles: "Microbiology", portugues: "Microbiologia" },
            { ingles: "Immunology", portugues: "Imunologia" },
            { ingles: "Serology", portugues: "Sorologia" },
            { ingles: "Urinalysis", portugues: "Urinálise" },
            { ingles: "Parasitology", portugues: "Parasitologia" },
            { ingles: "Cytology", portugues: "Citologia" },
            { ingles: "Histology", portugues: "Histologia" },
            { ingles: "Toxicology", portugues: "Toxicologia" }
        ],
        dificil: [
            { ingles: "Flow cytometry", portugues: "Citometria de fluxo" },
            { ingles: "Polymerase chain reaction", portugues: "Reação em cadeia da polimerase" },
            { ingles: "Mass spectrometry", portugues: "Espectrometria de massa" },
            { ingles: "Chromatography", portugues: "Cromatografia" },
            { ingles: "Enzyme-linked immunosorbent assay", portugues: "Ensaio imunoenzimático" },
            { ingles: "Gel electrophoresis", portugues: "Eletroforese em gel" },
            { ingles: "Western blot", portugues: "Western blot" },
            { ingles: "Fluorescence in situ hybridization", portugues: "Hibridização in situ fluorescente" },
            { ingles: "Next-generation sequencing", portugues: "Sequenciamento de nova geração" },
            { ingles: "Radioimmunoassay", portugues: "Radioimunoensaio" }
        ]
    }
};

let areaAtual;
let palavraAtual;
let opcaoSelecionada;
let pontuacao = 0;
let acertosConsecutivos = 0;
const totalQuestoes = 10;
let questaoAtual = 0;
let nivelAtual = 'facil';
let vidas = 5;

const palavraInglesElement = document.getElementById("palavraIngles");
const opcoesElement = document.getElementById("opcoes");
const verificarButton = document.getElementById("verificar");
const proximoButton = document.getElementById("proximo");
const feedbackElement = document.getElementById("feedback");
const progressBar = document.getElementById("progressBar");
const nivelAtualElement = document.getElementById("nivelAtual");
const pontuacaoAtualElement = document.getElementById("pontuacaoAtual");
const vidasRestantesElement = document.getElementById("vidasRestantes");
const ouvirPronunciaButton = document.getElementById("ouvirPronuncia");

function embaralharArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function gerarOpcoes() {
    const opcoes = [palavraAtual.portugues];
    const palavrasNivelAtual = palavras[areaAtual][nivelAtual];
    while (opcoes.length < 4) {
        const opcaoAleatoria = palavrasNivelAtual[Math.floor(Math.random() * palavrasNivelAtual.length)].portugues;
        if (!opcoes.includes(opcaoAleatoria)) {
            opcoes.push(opcaoAleatoria);
        }
    }
    return embaralharArray(opcoes);
}

function novaPalavra() {
    if (questaoAtual >= totalQuestoes) {
        if (nivelAtual === 'dificil') {
            finalizarJogo();
        } else {
            subirNivel();
        }
        return;
    }

    questaoAtual++;
    atualizarProgressBar();
    
    const palavrasNivelAtual = palavras[areaAtual][nivelAtual];
    palavraAtual = palavrasNivelAtual[Math.floor(Math.random() * palavrasNivelAtual.length)];
    palavraInglesElement.textContent = palavraAtual.ingles;
    
    const opcoes = gerarOpcoes();
    opcoesElement.innerHTML = opcoes.map((opcao, index) => `
        <div class="col-md-6 mb-3">
            <div class="opcao-card">
                <input type="radio" id="opcao${index}" name="opcao" value="${opcao}" class="opcao-radio">
                <label for="opcao${index}" class="opcao-label">
                    <span class="opcao-custom-radio"></span>
                    ${opcao}
                </label>
            </div>
        </div>
    `).join('');

    opcaoSelecionada = null;
    verificarButton.disabled = true;
    feedbackElement.style.display = 'none';
    proximoButton.style.display = 'none';
    verificarButton.style.display = 'inline-block';

    document.querySelectorAll('.opcao-radio').forEach(radio => {
        radio.addEventListener('change', selecionarOpcao);
    });

    ouvirPronunciaButton.disabled = false;
    ouvirPronunciaButton.style.display = 'inline-block';
}

function selecionarOpcao(event) {
    opcaoSelecionada = event.target;
    verificarButton.disabled = false;
}

function verificarResposta() {
    const respostaCorreta = palavraAtual.portugues;
    const respostaSelecionada = opcaoSelecionada.value;

    document.querySelectorAll('.opcao-card').forEach(card => {
        const radio = card.querySelector('.opcao-radio');
        if (radio.value === respostaCorreta) {
            card.classList.add('correta');
        }
        if (radio === opcaoSelecionada && radio.value !== respostaCorreta) {
            card.classList.add('incorreta');
        }
    });

    if (respostaSelecionada === respostaCorreta) {
        feedbackElement.textContent = "Correto! Parabéns!";
        feedbackElement.className = "alert alert-success text-center mb-4";
        pontuacao++;
        acertosConsecutivos++;
    } else {
        feedbackElement.textContent = `Incorreto. A resposta correta é "${respostaCorreta}".`;
        feedbackElement.className = "alert alert-danger text-center mb-4";
        vidas--;
        acertosConsecutivos = 0;
        if (vidas === 0) {
            finalizarJogo();
            return;
        }
    }

    atualizarInterface();
    feedbackElement.style.display = 'block';
    verificarButton.style.display = 'none';
    proximoButton.style.display = 'inline-block';

    if (questaoAtual === totalQuestoes) {
        if (nivelAtual === 'dificil') {
            finalizarJogo();
        } else {
            subirNivel();
        }
    }
}

const atualizarProgressBar = () => {
    const progresso = (questaoAtual / totalQuestoes) * 100;
    progressBar.style.width = `${progresso}%`;
    progressBar.setAttribute('aria-valuenow', progresso);
};

const atualizarInterface = () => {
    nivelAtualElement.textContent = nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1);
    pontuacaoAtualElement.textContent = pontuacao;
    vidasRestantesElement.textContent = vidas;
};

const subirNivel = () => {
    if (nivelAtual === 'facil') {
        nivelAtual = 'medio';
    } else if (nivelAtual === 'medio') {
        nivelAtual = 'dificil';
    }
    questaoAtual = 0;
    acertosConsecutivos = 0;
    atualizarInterface();
    atualizarProgressBar();
    feedbackElement.textContent = `Parabéns! Você passou para o nível ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}!`;
    feedbackElement.className = "alert alert-info text-center mb-4";
    feedbackElement.style.display = 'block';
    proximoButton.textContent = "Continuar para o próximo nível";
    proximoButton.style.display = 'inline-block';
    verificarButton.style.display = 'none';
    proximoButton.removeEventListener('click', novaPalavra);
    proximoButton.addEventListener('click', iniciarProximoNivel);
}

function iniciarProximoNivel() {
    proximoButton.textContent = "Continuar";
    proximoButton.removeEventListener('click', iniciarProximoNivel);
    proximoButton.addEventListener('click', novaPalavra);
    novaPalavra();
}

const finalizarJogo = () => {
    opcoesElement.innerHTML = '';
    palavraInglesElement.textContent = '';
    feedbackElement.textContent = `Parabéns! Você completou todos os níveis! Pontuação final: ${pontuacao}`;
    feedbackElement.className = "alert alert-success text-center mb-4";
    feedbackElement.style.display = 'block';
    proximoButton.textContent = "Jogar Novamente";
    proximoButton.removeEventListener('click', novaPalavra);
    proximoButton.addEventListener('click', reiniciarJogo);
};

function reiniciarJogo() {
    pontuacao = 0;
    questaoAtual = 0;
    nivelAtual = 'facil';
    vidas = 5;
    acertosConsecutivos = 0;
    proximoButton.textContent = "Continuar";
    proximoButton.removeEventListener('click', reiniciarJogo);
    proximoButton.addEventListener('click', novaPalavra);
    atualizarInterface();
    atualizarProgressBar();
    novaPalavra();
};

function pronunciarPalavra(palavra) {
    if ('speechSynthesis' in window) {
        // Cancela qualquer fala em andamento
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(palavra);
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // Diminui um pouco a velocidade da fala

        // Espera um momento antes de iniciar a fala
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 100);
    } else {
        console.log("A síntese de fala não é suportada neste navegador.");
        alert("Desculpe, a pronúncia não está disponível no seu navegador.");
    }
}

ouvirPronunciaButton.addEventListener("click", () => {
    if (palavraAtual && palavraAtual.ingles) {
        pronunciarPalavra(palavraAtual.ingles);
    } else {
        console.log("Palavra atual não definida");
    }
});

verificarButton.addEventListener("click", verificarResposta);
proximoButton.addEventListener("click", novaPalavra);

atualizarInterface();

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('areaSelecaoModal').style.display = 'block';

    document.querySelectorAll('.area-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const area = btn.getAttribute('data-area');
            iniciarJogo(area);
        });
    });
});

function iniciarJogo(area) {
    areaAtual = area;
    document.getElementById('areaSelecaoModal').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    nivelAtual = 'facil';
    questaoAtual = 0;
    pontuacao = 0;
    vidas = 5;
    atualizarInterface();
    
    ouvirPronunciaButton.disabled = false;
    ouvirPronunciaButton.style.display = 'inline-block';
    
    novaPalavra();
}