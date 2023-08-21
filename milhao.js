const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');

let score = 0;
let chances = 2;
let currentQuestion = 0;

options.forEach(option => {
    option.addEventListener('click', checkAnswer);
});

const questions = [
    {
        question: 'Qual é o processo de conversão da energia luminosa em energia química nas plantas?',
        image: 'https://i.pinimg.com/1200x/36/58/a7/3658a7128d81c7d8599c76186280ed64.jpg',
        options: ['Fotossíntese', 'Respiração', 'Fermentação', 'Digestão'],
        answer: 'Fotossíntese'
    },
    {
        image: 'https://i.kym-cdn.com/photos/images/newsfeed/002/636/569/d5a.jpg',
        question: 'Quem foi o cientista que formulou a Teoria da Relatividade?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileu Galilei', 'Marie Curie'],
        answer: 'Albert Einstein'
    },
    {
        image: 'https://2.bp.blogspot.com/-U4Z91M8J7w8/T9pc63028iI/AAAAAAAAIqk/f15Kof-ee5U/s1600/osso+duro.png',
        question: 'Qual é o osso mais longo do corpo humano?',
        options: ['Fêmur', 'Tíbia', 'Úmero', 'Rádio'],
        answer: 'Fêmur'
    },
    {
        image: 'https://www.guiadasemana.com.br/contentFiles/system/pictures/2016/7/304016/cropped/escreve-ai2.jpg',
        question: 'Qual é o autor da frase "Penso, logo existo"?',
        options: ['René Descartes', 'Friedrich Nietzsche', 'Jean-Jacques Rousseau', 'Sigmund Freud'],
        answer: 'René Descartes'
    },
    {
        image: 'https://images7.memedroid.com/images/UPLOADED437/6175715468e70.jpeg',
        question: 'Quem foi o líder da Revolução Russa de 1917?',
        options: ['Vladimir Putin', 'Josef Stalin', 'Leon Trotsky', 'Vladimir Lenin'],
        answer: 'Vladimir Lenin'
    }
];

function checkAnswer(event) {
    const selectedOption = event.target;
    
    if (selectedOption.textContent === questions[currentQuestion].answer) {
        score += 10;
        scoreDisplay.textContent = score;
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            alert('Parabéns por fazer o minímo');
        }
    } else {
        chances--;
        if (chances === 0) {
            alert('Pode voltar pra escola.');
            resetQuiz();
        } else {
            alert('Tu é burro? Tenta dnv.');
        }
    }
}

function loadQuestion(questionIndex) {
    const currentQuestionData = questions[questionIndex];
    
    questionImage.src = currentQuestionData.image;
    questionText.textContent = currentQuestionData.question;
    
    options.forEach((option, index) => {
        option.textContent = currentQuestionData.options[index];
    });
}

function resetQuiz() {
    score = 0;
    chances = 2;
    currentQuestion = 0;
    scoreDisplay.textContent = score;
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);