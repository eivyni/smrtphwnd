// Texto que será disposto em círculo
const text = "ᛖᚢᛁᚷ ᛚᛁᚢ ᚲᛟᛗᛗᛖᚱ ᛒᚨᚱᛖ ᛏᛁᛚ ᛞᛖ ᛊᛟᛗ ᚷᛃᚢᚱ ᛞᛖᛏ ᚢᛖᚱᛞᛏ ᛞᛖᛏ";
const radius = 150; // Raio do círculo
const container = document.querySelector(".circle-container");

// Função para posicionar os caracteres
text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;

    // Calcula o ângulo para cada caractere
    const angle = (index / text.length) * 360;
    const radians = (angle * Math.PI) / 180;

    // Posiciona o caractere no círculo
    span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;

    container.appendChild(span);
});
