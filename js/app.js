const quizContent = document.getElementById("quiz");
const submit = document.getElementById("submit");
const result = document.getElementById("results");
var userQuestions = [];//Lista de preguntas
var userAnswers = [];//Lista de respuestas
var index = 0; //Indice
var score = 0; //Puntaje

//Preguntas y respuestas
const myQuestions = [
  {
    question: "Acomodar a las personas en la mesa, si hay niños pequeños llevar la silla para ellos, es tarea de:",
    answers: {
      a: "Domiciliario.",
      b: "Despachador.",
      c: "Toma pedidos con tablet.",
      d: "Vendedor de salón."
    },
    correctAnswer: "d"
  },
  {
    question: "Con la factura en la mano se le dice al cliente lo que se le está entregando y se le confirma las salsas que está recibiendo con el pedido, es tarea de:",
    answers: {
      a: "Domiciliario",
      b: "Despachador",
      c: "Toma pedidos con tablet",
      d: "Vendedor de salón"
    },
    correctAnswer: "d"
  },
  {
    question: "La frase “Sr – Sra. que disfrute su pedido, recuerde que si sabe rico sabe a Frisby.” Debe ser dicha en qué momento del pedido?",
    answers: {
      a: "Saludo",
      b: "Despedida",
      c: "Cobro del pedido"
    },
    correctAnswer: "b"
  },
  {
    question: "El proceso de atención con la Tablet se aplica cuando:",
    answers: {
      a: "Hay más de 5 clientes en fila, en horas pico",
      b: "Hay bajos volumenes de ventas",
      c: "Hay hora pico en un restaurante que debe mejorar sus volúmenes de venta"
    },
    correctAnswer: "a"
  }
];

function sortRandomly() {
  myQuestions.sort(function(){
    return 0.5 - Math.random()
  });
}

function checkSelected() {
  var radios = document.getElementsByTagName("input");
  var button = document.getElementsByTagName("button");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked == true) {
      button[0].disabled = false;
    }
  }
}

//Mostrar la primera pregunta
function showQuestion(index) {
  var answers = myQuestions[index].answers;
  userQuestions[index] = myQuestions[index].question

  quizContent.innerHTML = quizContent.innerHTML + (index+1) + ". " + myQuestions[index].question + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_1'><input type='radio' name='options' value='answers.a' onclick='checkSelected()' onclick='getUserAnswers()'>" + answers.a + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_2'><input type='radio' name='options' value='answers.b' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.b + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_3'><input type='radio' name='options' value='answers.c' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.c + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_4'><input type='radio' name='options' value='answers.d' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.d + "</div>" + "<br>";
}

//Obtener los valores de los radios
function getUserAnswers() {
  var radios = document.getElementsByName('options');

  for (var i = 0; i < radios.length; i++)
  {
   if (radios[i].checked)
   {

    userAnswers.push(radios[i].value);

    break;
   }
  }
}

//Ir a la siguiente pregunta al hacer clic en el botón
function nextQuestion() {
  //Mantener el botón deshabilitado
  var button = document.getElementsByTagName("button");
  button[0].disabled = true;

  index = index + 1;
  var answers = myQuestions[index].answers;
  userQuestions[index] = myQuestions[index].question

  quizContent.innerHTML = (index+1) + ". " + myQuestions[index].question + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_1'><input type='radio' name='options' value='answers.a' onclick='checkSelected()' onclick='getUserAnswers()'>" + answers.a + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_2'><input type='radio' name='options' value='answers.b' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.b + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_3'><input type='radio' name='options' value='answers.c' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.c + "</div>" + "<br>";
  quizContent.innerHTML = quizContent.innerHTML + "<div class='card_4'><input type='radio' name='options' value='answers.d' onclick='checkSelected()' onclick='getUserAnswers()'>"+ answers.d + "</div>" + "<br>";


  if (myQuestions.length == index+1) {
    button[0].innerHTML = "Calificar";
    result.innerHTML = "Haz finalizado, haz clic en el botón Calificar";
    button[0].onclick = function getResults() {
      // for (var i = 0; i < userQuestions.length; i++) {
      //   if (userQuestions[i] === myQuestions[i].question) {
      //     if (userAnswers[i] === myQuestions[i].correctAnswer) {
      //
      //     }
      //   }
      // }
      result.innerHTML = result.innerHTML + "<br>" + "Tu puntuación es: " + "%" + score;
    }
  }
}

sortRandomly(); //Ordenar las preguntas de forma aleatoria
showQuestion(index); //Mostrar la primera pregunta con sus respectivas respuestas partiendo del indice
