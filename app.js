 /** MENU BAR & DROPDOWN **/

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const bottomNav = document.getElementById('bottomNav');
    const deptItem = document.querySelector('.departments-dropdown');

    menuToggle.addEventListener('click', function () {
      bottomNav.classList.toggle('show-menu');

      // Optional: close the department dropdown if open
      deptItem.classList.remove('open');
    });

    // Dropdown toggle only on mobile
    deptItem.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.classList.toggle('open');
      }
    });
  });








  
 let currentIndex = 0;

  function updateSlider() {
    const slider = document.getElementById("cardSlider");
    const card = slider.querySelector(".testimonial-card");
    const cardWidth = card.offsetWidth + 20; // including gap
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }

  function moveRight() {
    const slider = document.getElementById("cardSlider");
    const totalCards = slider.children.length;
    const cardsPerView = window.innerWidth <= 768 ? 1 : 2;
    const maxIndex = totalCards - cardsPerView;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  window.addEventListener("resize", () => {
    currentIndex = 0;
    updateSlider();
  });
  

















/** BLOG SECTION & PAGINATION **/

document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 6;
  const items = document.querySelectorAll(".blog-item");
  const pagination = document.getElementById("pagination");

  let currentPage = 1;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  function showPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "block" : "none";
    });

    // Highlight current page
    const pageLinks = document.querySelectorAll(".pagination-link");
    pageLinks.forEach(link => link.classList.remove("active"));
    if (pageLinks[page - 1]) {
      pageLinks[page - 1].classList.add("active");
    }
  }

  function createPagination() {
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.classList.add("pagination-link", "btn", "btn-sm", "btn-outline-primary", "mx-1");
      btn.addEventListener("click", function () {
        currentPage = i;
        showPage(currentPage);
      });
      pagination.appendChild(btn);
    }
  }

  createPagination();
  showPage(currentPage);
});















// Scroll fade-in effect
  const section = document.getElementById('hospitalSection');
  const content = section.querySelector('.hospital-content');

  window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionTop < screenPosition) {
      content.classList.add('animate');
    }
  });





















/** SWIPER OUR SERVICE SECTION **/

 
























  /** BLOGPAGE NEWLETTER SUBSCRIPTION & SOCIAL ICONS **/

  document.getElementById("subscribeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("emailInput").value;
    if (email) {
      alert(`Subscribed with email: ${email}`);
      // You can add Web3Forms or integration here
      document.getElementById("subscribeForm").reset();
    }
  });

  // Animate on scroll
  window.addEventListener("scroll", () => {
    const left = document.getElementById("slideInLeft");
    const right = document.getElementById("fadeInRight");

    const trigger = window.innerHeight * 0.8;

    if (left.getBoundingClientRect().top < trigger) {
      left.style.opacity = 1;
    }

    if (right.getBoundingClientRect().top < trigger) {
      right.style.opacity = 1;
    }
  });

























  