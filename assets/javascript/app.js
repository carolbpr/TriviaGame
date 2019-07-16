window.onload = function () {
    $(".restart").on("click", restart);
    $(".start").on("click", start);
    //$(".possible-answer").on("click", choice);
    $(document).on('click', ".possible-answer", choice);
};
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var number = 30;
function restart() {
    number = 10;
    time = 0;
    $("#player-choice").css("display", "none");
    $(".restart").css("display", "none");
    $(".start").css("display", "-webkit-inline-box");
}
const newLocal = "correct";
function start() {
    clearInterval(onemore);
    $("#player-choice").empty();
    $("#img-answer").css("display", "none");
    $(".start").css("display", "none");
    $("#timer").css("display", "block");
    $("#timer").text("Time Remaining: " + number + " Seconds");
    choosethequestion()
    $("#question").css("display", "block");
    $("#question").html(questionchosen[0]);
    correctanswer = questionchosen[1].correct;
    image_answer = images[k];
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
    }
}
//this function countdown the clock
function count() {
    number--;
    $("#timer").html("Time Remaining: " + number + " Seconds");
    //Timeout is the counter is equal 0
    if (number === 0) {
        $("#player-choice").html("<span>Time Up!</span>");
        $("#player-choice").css("display", "inline");
        clearInterval(intervalId);
        clockRunning = false;
        $("#timer").empty();
        $("#question").empty();
        $(".answer-choices").empty();
        $("#correct-answer").empty();
        $(".possible-answer").empty();
        $("#img-answer").css("display", "none");
        $(".restart").css("display", "-webkit-inline-box");
    }
}
//Trivia questions & answers
var k;
var questionchosen;
var correctanswer = "";
var image_answer;
var onemore;
var images = [
    "assets/images/whale.gif",
    "assets/images/lionpride.jpg",
    "assets/images/butterfly.png",
    "assets/images/antartica.jpg",
    "assets/images/elephant.webp",
    "assets/images/giraffe.jpg",
    "assets/images/camel.jpg",
    "assets/images/bumblebee.jpg",
    "assets/images/australia.jpg",
    "assets/images/albatross.jpg",
    "assets/images/cheeta.gif",
    "assets/images/calf.jpg",
    "assets/images/panda.webp",
    "assets/images/drake.jpg",
    "assets/images/doe.jpg",
    "assets/images/komodo.jpg",
    "assets/images/mare.jpg",
    "assets/images/frog.png",
    "assets/images/ram.webp",
    "assets/images/penguin.webp",
    "assets/images/bison.jpg ",
    "assets/images/mane.jpg",
    "assets/images/bison.webp",
    "assets/images/drone.jpg",
    "assets/images/queen_cat.jpg",
];
var game = [
    one = [
        question = "Name the largest mammal in the world?",
        answers = {
            correct: "Whale",
            incorrect1: "Elephant",
            incorrect2: "Delphin",
            incorrect3: "Dinasour",
            incorrect4: "Shark",
        }
    ],
    two = [
        question = "A group of lions is known as?",
        answers = {
            correct: "Pride",
            incorrect1: "Pack",
            incorrect2: "Group",
            incorrect3: "Lions",
            incorrect4: "Team",
        }
    ],
    three = [
        question = "Caterpillar grows and develops into?",
        answers = {
            correct: "A butterfly",
            incorrect1: "A Worm",
            incorrect2: "A Big Caterpillar",
            incorrect3: "A Dragonfly",
            incorrect4: "A Mosquito",
        }
    ],
    four = [
        question = "In which the only continent, bees are not found?",
        answers = {
            correct: "Antarctica",
            incorrect1: "America",
            incorrect2: "Asia",
            incorrect3: "Europe",
            incorrect4: "Africa",
        }
    ],
    five = [
        question = "Name the largest animal in the world.",
        answers = {
            correct: "Elephant",
            incorrect1: "whale",
            incorrect2: "Giraffe",
            incorrect3: "Rhino",
            incorrect4: "Lion",
        }
    ],
    six = [
        question = "Name the tallest animal in the world.",
        answers = {
            correct: "Giraffe",
            incorrect1: "Elephant",
            incorrect2: "Horse",
            incorrect3: "Kangaroo",
            incorrect4: "Lion",
        }
    ],
    seven = [
        question = "Which animal is known as the desert’s animal?",
        answers = {
            correct: "Camel",
            incorrect1: "Giraffe",
            incorrect2: "Lion",
            incorrect3: "Snake",
            incorrect4: "Bear",
        }
    ],
    eight = [
        question = "Bumblebee lives in which country?",
        answers = {
            correct: "Thailand",
            incorrect1: "USA",
            incorrect2: "Colombia",
            incorrect3: "Australia",
            incorrect4: "Italy",
        }
    ],
    nine = [
        question = "Australia is a homeland of which animal?",
        answers = {
            correct: "Kangaroo",
            incorrect1: "Elephant",
            incorrect2: "Snake",
            incorrect3: "Crocodile",
            incorrect4: "Shark",
        }
    ],
    ten = [
        question = "Which bird has the largest living span?",
        answers = {
            correct: "The wandering albatross",
            incorrect1: "Parrots",
            incorrect2: "Pelicans",
            incorrect3: "Penguins",
            incorrect4: "Eagles",
        }
    ],
    eleven = [
        question = "Name the world’s fastest land animal.",
        answers = {
            correct: "Cheeta",
            incorrect1: "Tiger",
            incorrect2: "Hare",
            incorrect3: "Turtle",
            incorrect4: "Snake",
        }
    ],
    twelve = [
        question = "A baby cow is known as?",
        answers = {
            correct: "Calf",
            incorrect1: "Baby Cow",
            incorrect2: "Little Cow",
            incorrect3: "Baby",
            incorrect4: "Short Cow",
        }
    ],
    thirteen = [
        question = "What is the major food of Giant Panda?",
        answers = {
            correct: "Bamboos",
            incorrect1: "Noddles",
            incorrect2: "Rice",
            incorrect3: "Grass",
            incorrect4: "Special Panda Food",
        }
    ],
    fourteen = [
        question = "A male duck is known as?",
        answers = {
            correct: "Drake",
            incorrect1: "Big Duck",
            incorrect2: "Donald",
            incorrect3: "Boy Duck",
            incorrect4: "Duck that is Male",
        }
    ],
    fifteen = [
        question = "The female deer is known as?",
        answers = {
            correct: "Doe",
            incorrect1: "Lady Deer",
            incorrect2: "Girl Deer",
            incorrect3: "Bambiny",
            incorrect4: "Deer that is Female",
        }
    ],
    sixteen = [
        question = "Komodo dragon belongs to which animal family?",
        answers = {
            correct: "Lizard",
            incorrect1: "Mammal",
            incorrect2: "Snail",
            incorrect3: "Amphibian",
            incorrect4: "Bird",
        }
    ],
    seventeen = [
        question = "A female horse is known as?",
        answers = {
            correct: "Mare",
            incorrect1: "Mary",
            incorrect2: "Rose",
            incorrect3: "Girl Horse",
            incorrect4: "Horsie",
        }
    ],
    eighteen = [
        question = "Through which process, a frog survives a winter?",
        answers = {
            correct: "Hibernation",
            incorrect1: "Evaporation",
            incorrect2: "Concentration",
            incorrect3: "Manipulation",
            incorrect4: "Population",
        }
    ],
    nineteen = [
        question = "Jackass penguin is the other name of which penguin?",
        answers = {
            correct: "African Penguin",
            incorrect1: "Emperor Penguin",
            incorrect2: "Little Penguin",
            incorrect3: "Humboldt Penguin",
            incorrect4: "Galapagos Penguin",
        }
    ],
    twenty = [
        question = "Is a ram a female sheep or male?",
        answers = {
            correct: "Male",
            incorrect1: "Female",
            incorrect2: "Both, female and Male",
            incorrect3: "None of them",
            incorrect4: "Maybe a mix",
        }
    ],
    twentyone = [
        question = "In which two countries American Bison is found?",
        answers = {
            correct: "The United States and Canada",
            incorrect1: "Mexico and Argentina",
            incorrect2: "Spain and Brazil",
            incorrect3: "Japan and China",
            incorrect4: "South Africa and India",
        }
    ],
    twentytwo = [
        question = "Mane is the most recognizable feature of which animal?",
        answers = {
            correct: "Lion",
            incorrect1: "Elephant",
            incorrect2: "Shark",
            incorrect3: "Cats",
            incorrect4: "Snake",
        }
    ],
    twentythree = [
        question = "Which animal was once the symbol of Great Plains?",
        answers = {
            correct: "American Bison",
            incorrect1: "Elephant",
            incorrect2: "Delphin",
            incorrect3: "Dinasour",
            incorrect4: "Shark",
        }
    ],
    twentyfour = [
        question = "What is the masculine of an ant?",
        answers = {
            correct: "Drone",
            incorrect1: "Elephant",
            incorrect2: "Delphin",
            incorrect3: "Dinasour",
            incorrect4: "Shark",
        }
    ],
    twentyfive = [
        question = " What is the feminine of a cat?",
        answers = {
            correct: "Queen",
            incorrect1: "Lady Cat",
            incorrect2: "Girl Cat",
            incorrect3: "Kitty",
            incorrect4: "Cat Woman",
        }
    ],
];
//function to randomly select the question and possible answers
function choosethequestion() {
    k = Math.floor(Math.random() * game.length);
    questionchosen = game[k];
    console.log(questionchosen);
    let possible_answer = questionchosen[1];
    possible_answer = Object.keys(possible_answer)
        .map((key) => ({ key, value: possible_answer[key] }))
        .sort((a, b) => b.key.localeCompare(a.key))
        .reduce((acc, e) => {
            acc[e.key] = e.value;
            var answer = $("<p>");
            answer.addClass("possible-answer", "posibility", "possible-answer-color");
            answer.attr("data-posibility", e.value);
            answer.html(e.value);
            answer.appendTo("#answer-choices");
            return acc;
        }, {});

}

function choice() {

    if (correctanswer == $(this).attr("data-posibility")) {
        //alert("your answer is correct")
        
        clockRunning = false;
        clearInterval(intervalId);
        $("#question").empty();
        $(".answer-choices").empty();
        $("#correct-answer").empty();
        $(".possible-answer").empty();
        var correct = $("<h2>");
        correct.html("Correct!");
        correct.appendTo("#player-choice");
        $("#img-answer").attr("src", image_answer);
        $("#img-answer").css("display", "block");
        onemore= setInterval(function () {
            number = 30;
            start();
        }, 5000);
        
    }
    else { alert("Your answer is wrong") }

}

