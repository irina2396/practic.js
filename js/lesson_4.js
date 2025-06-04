// !Task1 //
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
// const button = document.querySelector('#alertButton');
// const input = document.querySelector('#alertInput');
// button.addEventListener('click', () => {
//     const value = input.value.trim();
//     if (value !== "") {
//         alert(`Ви ввели: ${value}`);
//     }else{
//         alert("Поле порожнє");
//     }

// });


// !Task2 //
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
// const button = document.querySelector("#swapButton");
// const rightInput = document.querySelector("#rightSwapInput");
// const leftInput = document.querySelector("#leftSwapInput");

// button.addEventListener('click', () =>{
//     const temp = leftInput.value;
//     leftInput.value = rightInput.value;
//     rightInput.value = temp;
// })

//! Task3 //
// При кліку на кнопку текст параграфів змінюється на їх порядковий номе

// const button = document.getElementById("changeButton");
// const paragraphs = document.querySelectorAll("#taskContainer p");

// button.addEventListener("click", () => {
//   paragraphs.forEach((p, index) => {
//     p.textContent = `Параграф №${index + 1}`;
//   });
// });


// !Task4 //
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const input = document.getElementById("passwordInput");
// const button = document.getElementById("passwordButton");

// button.addEventListener("click", () => {
//   if (input.type === "text") {
//     input.type = "password";
//     button.textContent = "Розкрити";
//   } else {
//     input.type = "text";
//     button.textContent = "Приховати";
//   }
// });


//! Task 5//
// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, кнопка "Збільшити" - більше на 10 пікселів.

// const btnDec = document.querySelector(".decrease");
// const btnInc = document.querySelector(".increase");
// const boxEl = document.querySelector("#box");

// btnDec.addEventListener("click", DecreaseBox);
// btnInc.addEventListener("click", IncreaseBox);

// function DecreaseBox() {
//     const width = boxEl.offsetWidth;
//     const height = boxEl.offsetHeight;

//     boxEl.style.width = `${width - 10}px`;
//     boxEl.style.height = `${height - 10}px`;
// }
// function IncreaseBox() {
//     const width = boxEl.offsetWidth;
//     const height = boxEl.offsetHeight;

//     boxEl.style.width = `${width + 10}px`;
//     boxEl.style.height = `${height + 10}px`;
// }

// ! Task 6 //
// Натиснувши кнопку "Подвоювати", збільшити значення
// у кожному елементі списку у 2 рази

// const button = document.getElementById("double");
// const items = document.querySelectorAll(".listItem");

// button.addEventListener("click", () => {
//   items.forEach(item => {
//     const currentValue = Number(item.textContent);
//     item.textContent = currentValue * 2;
//   });
// });

// ! Task 7 ////

// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.querySelector(".number-container");

// for (let i = 0; i < 100; i++) {
//     const numberDiv = document.createElement("div");
//     numberDiv.classList.add("number");

//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     numberDiv.textContent = randomNumber;

//     if (randomNumber % 2 === 0) {
//        numberDiv.classList.add("even"); // парне
//     } else {
//        numberDiv.classList.add("odd"); // непарне
//     }

//     numberContainer.appendChild(numberDiv);
// }

