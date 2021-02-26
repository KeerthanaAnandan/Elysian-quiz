let questions = [
  {
    id: 1,
    question: "Take a look in the mirror. The pores of your skin are:",

    options: [
      "Almost invisible",
      "Small but still visible",
      "Bigger in the areas of the nose or forehead",
      "Enlarged",
    ],
  },
  {
    id: 2,
    question:
      "Dab a cosmetic tissue to your cheeks, nose, forehead and chin.The tissue has:",

    options: [
      "No oily prints",
      "Light prints, almost unnoticeable",
      "Imprints left from the nose, chin, forehead",
      "Clear prints from every touch",
    ],
  },
  {
    id: 3,
    question: "How do you usually feel after washing your face?",

    options: [
      "Tight skin and feels dry",
      "The face is smooth, refreshed",
      "In some areas the skin is smooth, in others skin is peeling",
      "Pleasant feeling of freshness",
    ],
  },
  {
    id: 4,
    question: "2 hours after washing your face, your skin is:",

    options: [
      "Tight, slightly itchy",
      "Fresh, clean",
      "Shiny on the forehead and / or nose, chin",
      "Oily on almost all areas of the face",
    ],
  },
  {
    id: 5,
    question: "How often do you get acne, blackheads, whiteheads?",

    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    id: 6,
    question: "How does your skin condition depend on the season?",

    options: [
      "The skin is very dry, chapped and flaky in winter",
      "The skin tolerates heat and cold equally, but it’s more dry in winter",
      "The skin is more oily in summer than in winter",
      "The skin tolerates winter well, but in summer acne and blackheads appear much more often",
    ],
  },
];

let question_count = 0;
//let points = 0;
Max_Questions = 6;
let firstTypePoints = 0;
let secondTypePoints = 0;
let thirdTypePoints = 0;
let fourthTypePoints = 0;

window.onload = function () {
  show(question_count);
};

function next(e) {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector(".option.active").innerHTML;

  //check answer
  /////////////////////////first type
  if (
    user_answer === "Almost invisible" ||
    user_answer === "No oily prints" ||
    user_answer === "Tight skin and feels dry" ||
    user_answer === "Tight, slightly itchy" ||
    user_answer === "Never" ||
    user_answer === "The skin is very dry, chapped and flaky in winter"
  ) {
    firstTypePoints += 1;
  }

  ///////////////////second type
  else if (
    user_answer === "Small but still visible" ||
    user_answer === "Light prints, almost unnoticeable" ||
    user_answer === "The face is smooth, refreshed" ||
    user_answer === "Fresh, clean" ||
    user_answer === "Rarely" ||
    user_answer ===
      "The skin tolerates heat and cold equally, but it’s more dry in winter"
  ) {
    secondTypePoints += 1;
  }
  /////////////////third type
  else if (
    user_answer === "Bigger in the areas of the nose or forehead" ||
    user_answer === "Imprints left from the nose, chin, forehead" ||
    user_answer ===
      "In some areas the skin is smooth, in others skin is peeling" ||
    user_answer === "Shiny on the forehead and / or nose, chin" ||
    user_answer === "Sometimes" ||
    user_answer === "The skin is more oily in summer than in winter"
  ) {
    thirdTypePoints += 1;
  }
  /////////////////fourth type
  else if (
    user_answer === "Enlarged" ||
    user_answer === "Clear prints from every touch" ||
    user_answer === "Pleasant feeling of freshness" ||
    user_answer === "Oily on almost all areas of the face" ||
    user_answer === "Invisalig" ||
    user_answer === "Often" ||
    user_answer ===
      "The skin tolerates winter well, but in summer acne and blackheads appear much more often"
  ) {
    fourthTypePoints += 1;
  }

  sessionStorage.setItem("firstTypePoints", firstTypePoints);
  sessionStorage.setItem("secondTypePoints", secondTypePoints);
  sessionStorage.setItem("thirdTypePoints", thirdTypePoints);
  sessionStorage.setItem("fourthTypePoints", fourthTypePoints);

  //let coloranswer = document.querySelector("li.option.active");
  //e.target.coloranswer.classList.add("correct");

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${question_count + 1}.${questions[count].question}</h2>
   <ul class="option_group">
  <li><span class="option">${first}</span></li>
  <li ><span class="option">${second}</span></li>
  <li ><span class="option">${third}</span></li>
  <li ><span class="option">${fourth}</span></li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll(".option");

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
