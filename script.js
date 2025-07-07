// Set your target date here
const targetDate = new Date("2025-12-31T23:59:59").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    clearInterval(interval);
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // initial call




  function openModal() {
    document.getElementById("rulesModal").style.display = "flex";
    document.body.style.overflow = 'hidden';
    showTab('bgmi'); // default
  }

  function closeModal() {
    document.getElementById("rulesModal").style.display = "none";
    document.body.style.overflow = 'auto';
  }

  function showTab(tab) {
    // Hide all
    document.getElementById("bgmiRules").classList.add("hidden");
    document.getElementById("valorantRules").classList.add("hidden");

    // Show current tab
    document.getElementById(tab + "Rules").classList.remove("hidden");

    // Change image
    const img = document.getElementById("modalImage");
    img.src = tab === "bgmi" ? "assets/rule_card_bgmi.jpg" : "assets/valoran_card.jpg";

    // Tab active styles
    document.getElementById("bgmiTab").classList.remove("active-tab");
    document.getElementById("valorantTab").classList.remove("active-tab");
    document.getElementById(tab + "Tab").classList.add("active-tab");
  }



  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('visible');
  //     }
  //   });
  // });

  // document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // // FAQ accordion
  // document.querySelectorAll('.faq-question').forEach(button => {
  //   button.addEventListener('click', () => {
  //     const isActive = button.classList.toggle('active');
  //     document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
  //     if (isActive) {
  //       button.nextElementSibling.style.display = 'block';
  //     }
  //   });
  // });




const text = "Arcadia26";
  const speed = 150;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      document.getElementById("typewriter").classList.add("glow-gradient");
    }
  }

  window.onload = typeWriter;




  

