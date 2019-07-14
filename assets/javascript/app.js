window.onload = function () {
    $(".restart").on("click", restart);
    $(".start").on("click", start);
};
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var time = 0;
var number = 10;
function restart() {
    number = 10;
    time = 0;
    $("#player-choice").css("display", "none");
    $(".restart").css("display", "none");
    $(".start").css("display", "-webkit-inline-box");
     

}
function start() {
    $(".start").css("display", "none");
    $("#timer").css("display", "block");
    $("#timer").text("Time Remaining: " + number + " Seconds");
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

        clearInterval(intervalId);
        clockRunning = false;
        $("#timer").text("");  
        $("#question").html(" ");
        $("#question").css("display", "-webkit-inline-box");
        $(".answer-choices").html("");
        $(".answer-choices").css("display", "-webkit-inline-box");
        $("#correct-answer").html("");
        $("#correct-answer").css("display", "-webkit-inline-box");
        $(".restart").css("display", "-webkit-inline-box");

    }
}
//Trivia questions & answers
var images ={
    Whale =	"assets/images/whale.gif",
    Pride = "assets/images/lionpride.jpg",
    A_butterfly = "assets/images/butterfly.png",
    Antarctica  = "assets/images/antartica.jpg",
    Elephant = "assets/images/elephant.webp",
    Giraffe = "assets/images/giraffe.jpg",
    Camel = "assets/images/camel.jpg",
    Thailand = "assets/images/bumblebee.jpg",
    Kangaroo = "assets/images/australia.jpg",
    The_wandering_albatross = "assets/images/albatross.jpg",
    Cheetah = "assets/images/cheeta.gif",
    Calf = "assets/images/calf.jpg",
    Bamboos = "assets/images/panda.webp",
    Drake = "assets/images/drake.jpg",
    Doe = "assets/images/doe.jpg",
    Lizard = "assets/images/komodo.jpg",
    Mare = "assets/images/mare.jpg",
    Hibernation = "assets/images/frog.png",
    Male = "assets/images/ram.webp",
    African_Penguin = "assets/images/penguin.webp",
    The_United_States_and_Canada = "assets/images/bison.jpg ",
    Lion = "assets/images/mane.jpg",
    American_Bison = "assets/images/bison.webp",
    Drone = "assets/images/drone.jpg",
    Queen = "assets/images/queen_cat.jpg",
};
var game = {
    one ={
        question = "Name the largest mammal in the world?",
        correct = "Whale",
        incorrect1 = "Elephant",
        incorrect2 = "Delphin",
        incorrect3 = "Dinasour",
        incorrect4 = "Shark",
    },
    two ={
        question = "A group of lions is known as?",
        correct = "Pride",
        incorrect1 = "Pack",
        incorrect2 = "Group",
        incorrect3 = "Lions",
        incorrect4 = "Team",
    },
    three ={
        question = "Caterpillar grows and develops into?",
        correct = "A butterfly",
        incorrect1 = "A Worm",
        incorrect2 = "A Big Caterpillar",
        incorrect3 = "A Dragonfly",
        incorrect4 = "A Mosquito",
    },
    four ={
        question = "In which the only continent, bees are not found?",
        correct = "Antarctica",
        incorrect1 = "America",
        incorrect2 = "Asia",
        incorrect3 = "Europe",
        incorrect4 = "Africa",
    },
    five ={
        question = "Name the largest animal in the world.",
        correct = "Elephant",
        incorrect1 = "whale",
        incorrect2 = "Giraffe",
        incorrect3 = "Rhino",
        incorrect4 = "Lion",
    },
    six ={
        question = "Name the tallest animal in the world.",
        correct = "Giraffe",
        incorrect1 = "Elephant",
        incorrect2 = "Horse",
        incorrect3 = "Kangaroo",
        incorrect4 = "Lion",
    },
    seven ={
        question = "Which animal is known as the desert’s animal?",
        correct = "Camel",
        incorrect1 = "Giraffe",
        incorrect2 = "Lion",
        incorrect3 = "Snake",
        incorrect4 = "Bear",
    },
    eight ={
        question = "Bumblebee lives in which country?",
        correct = "Thailand",
        incorrect1 = "USA",
        incorrect2 = "Colombia",
        incorrect3 = "Australia",
        incorrect4 = "Italy",
    },
    nine ={
        question = "Australia is a homeland of which animal?",
        correct = "Kangaroo",
        incorrect1 = "Elephant",
        incorrect2 = "Snake",
        incorrect3 = "Crocodile",
        incorrect4 = "Shark",
    },
    ten ={
        question = "Which bird has the largest living span?",
        correct = "The wandering albatross",
        incorrect1 = "Parrots",
        incorrect2 = "Pelicans",
        incorrect3 = "Penguins",
        incorrect4 = "Eagles",
    },
    eleven ={
        question = "Name the world’s fastest land animal.",
        correct = "Cheeta",
        incorrect1 = "Tiger",
        incorrect2 = "Hare",
        incorrect3 = "Turtle",
        incorrect4 = "Snake",
    },
    twelve ={
        question = "A baby cow is known as?",
        correct = "Calf",
        incorrect1 = "Baby Cow",
        incorrect2 = "Little Cow",
        incorrect3 = "Baby",
        incorrect4 = "Short Cow",
    },
    thirteen ={
        question = "What is the major food of Giant Panda?",
        correct = "Bamboos",
        incorrect1 = "Noddles",
        incorrect2 = "Rice",
        incorrect3 = "Grass",
        incorrect4 = "Special Panda Food",
    },
    fourteen ={
        question = "A male duck is known as?",
        correct = "Drake",
        incorrect1 = "Big Duck",
        incorrect2 = "Donald",
        incorrect3 = "Boy Duck",
        incorrect4 = "Duck that is Male",
    },
    fifteen ={
        question = "The female deer is known as?",
        correct = "Doe",
        incorrect1 = "Lady Deer",
        incorrect2 = "Girl Deer",
        incorrect3 = "Bambiny",
        incorrect4 = "Deer that is Female",
    },
    sixteen ={
        question = "Komodo dragon belongs to which animal family?",
        correct = "Lizard",
        incorrect1 = "Mammal",
        incorrect2 = "Snail",
        incorrect3 = "Amphibian",
        incorrect4 = "Bird",
    },
    seventeen ={
        question = "A female horse is known as?",
        correct = "Mare",
        incorrect1 = "Mary",
        incorrect2 = "Rose",
        incorrect3 = "Girl Horse",
        incorrect4 = "Horsie",
    },
    eighteen ={
        question = "Through which process, a frog survives a winter?",
        correct = "Hibernation",
        incorrect1 = "Evaporation",
        incorrect2 = "Concentration",
        incorrect3 = "Manipulation",
        incorrect4 = "Population",
    },
    nineteen ={
        question = "Jackass penguin is the other name of which penguin?",
        correct = "African Penguin",
        incorrect1 = "Emperor Penguin",
        incorrect2 = "Little Penguin",
        incorrect3 = "Humboldt Penguin",
        incorrect4 = "Galapagos Penguin",
    },
    twenty ={
        question = "Is a ram a female sheep or male?",
        correct = "Male",
        incorrect1 = "Female",
        incorrect2 = "Both, female and Male",
        incorrect3 = "None of them",
        incorrect4 = "Maybe a mix",
    },
    twentyone ={
        question = "In which two countries American Bison is found?",
        correct = "The United States and Canada",
        incorrect1 = "Mexico and Argentina",
        incorrect2 = "Spain and Brazil",
        incorrect3 = "Japan and China",
        incorrect4 = "South Africa and India",
    },
    twentytwo ={
        question = "Mane is the most recognizable feature of which animal?",
        correct = "Lion",
        incorrect1 = "Elephant",
        incorrect2 = "Shark",
        incorrect3 = "Cats",
        incorrect4 = "Snake",
    },
    twentythree ={
        question = "Which animal was once the symbol of Great Plains?",
        correct = "American Bison",
        incorrect1 = "Elephant",
        incorrect2 = "Delphin",
        incorrect3 = "Dinasour",
        incorrect4 = "Shark",
    },
    twentyfour ={
        question = "What is the masculine of an ant?",
        correct = "Drone",
        incorrect1 = "Elephant",
        incorrect2 = "Delphin",
        incorrect3 = "Dinasour",
        incorrect4 = "Shark",
    },
    twentyfive ={
        question = " What is the feminine of a cat?",
        correct = "Queen",
        incorrect1 = "Lady Cat",
        incorrect2 = "Girl Cat",
        incorrect3 = "Kitty",
        incorrect4 = "Cat Woman",
    },

}
