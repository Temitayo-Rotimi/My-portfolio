 /* ========================
        Hero Section
   ======================== */
// Hero sections
const messages = [
    "Temitayo Rotimi",
    "A Back-End Developer",
    "Computer Engineer"
  ];
  
  let index = 0;
  const welcomeElement = document.getElementById("welcome");
  
  // Immediately show the first message
  welcomeElement.textContent = messages[index];
  
  // Start the loop
  setInterval(() => {
    index = (index + 1) % messages.length;
    welcomeElement.textContent = messages[index];
  }, 2000); // 2 seconds interval
/* ========================
        Back to top Section
   ======================== */
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



