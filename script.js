// Data untuk animasi mengetik
const textToType =
  "Semoga di umur yang baru ini, makin bahagia, makin sukses, dan semua keinginanmu tercapai. \nYang katanya mau naek gaji ,semoga cepet anek gaji atau ngga semoga bisa dapet kerjaan yang lebih baik gaji gede, lingkungan kerja yang asik, \ndan segala hal yang kamu ingin dan keinginanmu bisa diraih dengan mudah. \nSemoga semua doa baik terkabul ya buy! \n \n Wopyuuu🥰";
let index = 0;
const typingElement = document.getElementById("typing-text");

// Fungsi mengetik teks secara bertahap
function typeText() {
  if (index < textToType.length) {
    typingElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

// Fungsi untuk mengganti sesi
function nextSection(next) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sec, i) => {
    sec.classList.add("hidden");
    if (i + 1 === next) {
      sec.classList.remove("hidden");
      if (next === 2) typeText(); // Mulai animasi mengetik di sesi 2
    }
  });
}
