const fruitImages = ["apple.png", "banana.png", "orange.png", "pear.png"];
let score = 0;

function getRandomFruit() {
  const random = Math.floor(Math.random() * 9);
  return document.getElementById(random.toString());
}

function newFruit() {
    const randomFruit = getRandomFruit()
    const fruitImage = fruitImages[Math.floor(Math.random() * fruitImages.length)];
    randomFruit.src = `images/${fruitImage}`;
    randomFruit.addEventListener("click", collectFruit);
    randomFruit.classList.remove("hidden");
}

function collectFruit(event) {
    const fruit = event.target;
    fruit.classList.add("hidden");
    fruit.removeEventListener("click", collectFruit);

    score++;
    document.getElementById("score").innerHTML = "Score: " + score + "/20";

    if (score === 20) {
        for (let i = 0; i < 9; i++) {
            const fruit = document.getElementById(i.toString());
            fruit.classList.remove("hidden");
        }
        document.getElementById("score").innerHTML = "You win!";
        return;
    }

    newFruit()
}

newFruit()