document.addEventListener("DOMContentLoaded", function () {
  var sidebar = document.getElementById("sidebar");
  var toggleButton = document.getElementById("toggle-button");
  var logo = document.getElementById("logo");
  var contentContainer = document.getElementById("content-container");
  var display = document.getElementById("display");
  var contents = {
    home: `
        <div class="home">
          <div class="header-home">
            <h3>Selamat Datang Di Tobitto</h3>
            <div class="description">
              <p>
              Dengan pembuatan website ini adalah untuk membantu donasi untuk pembuat web atau bantu melihat website ini. theme kali ini adalah foto yang vibes villain enjoy saja.
              </p>
            </div>
            <button class="button">Hover me</button>
          </div>
          <div class="image-right">
            <img src="https://i.pinimg.com/originals/3c/d7/78/3cd778d0e88f3de47b04a5cd0e34f6a9.jpg" alt="img-right">
          </div>
        </div>
      `,
    shop: `
       <div class="card-container">
          <section class="products">
            <div class="product">
              <img src="assets/pp.jpg" alt="Product 1">
              <h2>Obito Villain</h2>
              <p>Mode Villain</p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
              <div class="product">
              <img src="assets/pp1.jpg">
              <h2> Squidward mode serius</h2>
              <p>
              Dengan tatapan tajam nya squidward kita tahu betapa dinginnya squidward.
              </p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
            <div class="product">
              <img src="assets/pp2.jpg">
              <h2>patrick mode villain</h2>
              <p>Sheesh betapa dingin nya patrick sekarang</p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
            <div class="product">
              <img src="assets/pp3.jpg" alt="Product">
              <h2>Spongebob dengan mode coolnya</h2>
              <p>sheesh yang dulu ngira spongebob konyol</p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
            <div class="product">
              <img src="assets/pp4.jpg" alt="Product">
              <h2>Tom mode ngudud</h2>
              <p>betapa dingin nya tom</p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
            <div class="product">
              <img src="assets/pp5.jpg" alt="Product">
              <h2>Bonus 6</h2>
              <p>bonus 1</p>
              <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
            <div class="product">
              <img src="assets/pp6.jpg" alt="Product">
              <h2>Bonus 7</h2>
              <p>bonus 2</p>
  <button class="shop-button" data-link="https://wa.link/ou4qrm">Add to Cart</button>
            </div>
          </section>
        </div> 
      `,
    contact: `
        <div class="center">
          <div class="contact">
            <div class="content">
              <h3>Sosmed kami</h3>
          <ul class="example-2">
    <li class="icon-content">
    <li class="icon-content">
      <a href="https://github.com/Alexyoree" aria-label="GitHub" data-social="github">
        <div class="filled"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-github"
          viewBox="0 0 16 16"
          xml:space="preserve"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div class="tooltip">GitHub</div>
    </li>
    <li class="icon-content">
      <a
        href="https://www.instagram.com/lex_1_998/"
        aria-label="Instagram"
        data-social="instagram"
      >
        <div class="filled"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-instagram"
          viewBox="0 0 16 16"
          xml:space="preserve"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div class="tooltip">Instagram</div>
    </li>
    <li class="icon-content">
      <a href="https://www.youtube.com/channel/UC2557X1SFGb8gORoRzsTU1w" aria-label="Youtube" data-social="youtube">
        <div class="filled"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-youtube"
          viewBox="0 0 16 16"
          xml:space="preserve"
        >
          <path
            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div class="tooltip">Youtube</div>
    </li>
  </ul>
            </div>
          </div>
        </div>
          <div class="about">
          <div class="content">
            <h1>Fix bug</h1>
            <p>
            Contact keluhan ada di ig saya tolong kasih keluhan lewat dm ig saya pasti saya sefast respon.
            </p> 
          </div>
        </div>
      `,
    about: `
        <div class="about">
          <div class="content">
            <h3>About Us</h3>
            <h1>Disclaimer</h1>
            <p>Saya Pemilik Website ini Saya semaksimal mungkin mengerjakan ini jika Kurang responsif mohon maaf sebesar besarnya saya belajar pengetahuan saya jadi ya seperti itu jika kurang responsif dll saya sudah berkerja semaksimal mungkin saya pengerjaan sendiri tanpa bantuan orang lainn, sekian dan terima kasih.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_xBDAuuNQNLT22dpXBOlTNVpkihWvKaUWQ&s"> </img>
            <p> Terima kasih sudah membaca Text Diatas</p>
          </div>
        </div>
      `,
    plot: `
      <div class="plot-twist">
      <h1> hayuluh mau ngapain</h1>
      <p>
      ga ada apa apa disini gabut bet kalian sampe disini
      </p>
      </div>
      
      `,
      portfolio: `
         <div class="main" id="main">
      <div class="left">
        <h5>Halo , Gw MsBreewc</h5>
        <h3>
          Ini web <span>tentang perkenalan</span>
          diri gw
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          similique porro accusantium, accusamus velit itaque quidem tempore
          vero blanditiis dolor soluta quo maxime sunt quod eos! Voluptatibus,
          aperiam dicta. Sit.
        </p>
        <button>Button biasa</button>
      </div>
      <div class="right">
        <img src="https://indo1.id/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-14-at-12.25.20.jpeg" />
      </div>
    </div>

    <div class="skills" id="skills">
      <h2>Skill gw</h2>
      <h3>My Expert</h3>
      <div class="skill-items">
        <div class="item">
          <div class="icon">
            <i class="bx bxl-html5"></i>
          </div>
          <h4>Html</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
            similique omnis hic accusantium blanditiis nisi totam nobis
            necessitatibus a, sed mollitia recusandae obcaecati doloremque
            natus, saepe quo? Unde, mollitia.
          </p>
        </div>
        <div class="item">
          <div class="icon">
            <i class="bx bxl-javascript"></i>
          </div>
          <h4>js</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
            similique omnis hic accusantium blanditiis nisi totam nobis
            necessitatibus a, sed mollitia recusandae obcaecati doloremque
            natus, saepe quo? Unde, mollitia.
          </p>
        </div>
        <div class="item">
          <div class="icon">
            <i class="bx bxl-css3"></i>
          </div>
          <h4>Css</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
            similique omnis hic accusantium blanditiis nisi totam nobis
            necessitatibus a, sed mollitia recusandae obcaecati doloremque
            natus, saepe quo? Unde, mollitia.
          </p>
        </div>
        <div class="item">
          <div class="icon">
            <i class="bx bxl-bootstrap"></i>
          </div>
          <h4>Bootstrap</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum
            similique omnis hic accusantium blanditiis nisi totam nobis
            necessitatibus a, sed mollitia recusandae obcaecati doloremque
            natus, saepe quo? Unde, mollitia.
          </p>
        </div>
      </div>
    </div>

    <div class="about" id="about-me">
      <div class="left">
        <img src="https://modeldewasa.com/wp-content/uploads/2023/07/Msbreewc-wikipedia.jpg" />
      </div>
      <div class="right">
        <h5>About</h5>
        <h3>About Me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem sed? Odio praesentium officiis quibusdam a unde sunt numquam
          mollitia excepturi, repellendus repellat voluptatem soluta totam
          dolores quos vitae eos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Reprehenderit quod in quisquam! Earum recusandae, vel voluptatum
          facilis odit fuga laborum dolorem beatae, magnam et eveniet
          consectetur soluta reprehenderit cumque iste.
        </p>
      </div>
    </div>

    <div class="portfolio" id="portfolio">
      <div class="header">
        <div class="info">
          <h5>Recent Projects</h5>
          <h3>My Portfolio</h3>
        </div>
        <a href="https://github.com/Alexyoree" target="_blank">
          <button><i class="bx bxl-github"></i> Visit My Github</button>
        </a>
      </div>

      <div class="portfo-items">
        <div class="item">
          <img src="assets/Screenshot from 2024-06-24 23-54-02.png" />
          <div class="info">
            <h4>Portfolio</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a href="https://github.com/Alexyoree/lexxyor"
              >View in GIthub <i class="bx bx-link-external"></i
            ></a>
          </div>
        </div>
        <div class="item">
          <img src="assets/Screenshot from 2024-06-24 23-54-44.png" />
          <div class="info">
            <h4>Shop</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a href="https://github.com/Alexyoree/myproject1"
              >View in Github <i class="bx bx-link-external"></i
            ></a>
          </div>
        </div>
        <div class="item">
          <img src="assets/Screenshot from 2024-06-25 11-04-04.png" />
          <div class="info">
            <h4>Msbreew Blog</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <a href="https://github.com/Alexyoree/msbreewc"
              >View in Github <i class="bx bx-link-external"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div class="feedback" id="feedback">
      <h5>Clients Reviews</h5>
      <h3>Customers Feedback</h3>
      <div class="customers">
        <div class="item">
          <div class="rating">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>
          <div class="user">
            <img src="assets/pp4.jpg" />
            <div class="info">
              <h5>Tom</h5>
              <p>Tom and Jerry</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="rating">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>
          <div class="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1shYI0bvays3P1BRHQBNPIlpgkBxTbcVrMw&s"
            />
            <div class="info">
              <h5>Gojo Satoru</h5>
              <p>Jujutsu Kaisen</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="rating">
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
            <i class="bx bxs-star"></i>
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra.
          </p>
          <div class="user">
            <img
              src="https://64.media.tumblr.com/3a77827ecaa2ecb421186329ef647869/tumblr_nafin8hDsZ1sku78to1_1280.jpg"
            />
            <div class="info">
              <h5>Sasuke</h5>
              <p>Naruto</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer id="footer">
      <div class="top">
        <div class="logo">
          <img src="https://modeldewasa.com/wp-content/uploads/2023/07/Msbreewc-wikipedia.jpg" />
          <a href="https://github.com/Alexyoree">MsBreewc</a>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about-me">About</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
     
      </div>
      <div class="separator"></div>
      <div class="bottom">
        <p>Made With By MsBreewc</p>
        <div class="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Setting</a>
        </div>
      </div>
    </footer>
      `
  };

  function updateDisplayName() {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      display.textContent = "Halo, " + storedName + "!";
    } else {
      display.textContent = "";
    }
  }

  function loadContent(contentId) {
    contentContainer.innerHTML = contents[contentId] || contents["home"];
    sessionStorage.setItem("lastContentId", contentId);

    const storedName = localStorage.getItem("userName");
    if (storedName) {
      display.textContent = "Hello, " + storedName + "!";
      nameInput.style.display = "none";
      document.querySelector(".form__label").style.display = "none";
    } else {
      display.textContent = "";
      nameInput.style.display = "block";
      document.querySelector(".form__label").style.display = "block";
    }
  }

  document.querySelectorAll(".nav ul li a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var contentId = this.getAttribute("data-content");
      loadContent(contentId);

      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
      }
    });
  });

  function toggleSidebar() {
    sidebar.classList.toggle("open");
  }

  toggleButton.addEventListener("click", toggleSidebar);

  logo.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
      toggleSidebar();
    } else {
      var lastContentId = sessionStorage.getItem("lastContentId") || "home";
      loadContent(lastContentId);
    }
  });

  var lastContentId = sessionStorage.getItem("lastContentId") || "home";
  loadContent(lastContentId);

  document.getElementById("toggle").addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  });

  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      var name = nameInput.value.trim();
      if (name !== "") {
        localStorage.setItem("userName", name);
        display.textContent = "Hello, " + name + "!";
        nameInput.style.display = "none";
        document.querySelector(".form__label").style.display = "none";
      }
    }
  });

  updateDisplayName();

  const addButton = document.querySelector(".shop-button");

  addButton.addEventListener("click", function () {
    const link = addButton.getAttribute("data-link");

    window.location.href = link;
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const logoutLink = document.getElementById("logoutLink");

  logoutLink.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah tautan melakukan navigasi default

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("rememberMe");

    // Redirect ke halaman index.html
    window.location.href = "index.html";
  });
});

document.getElementById("logoutButton").addEventListener("click", function () {
  window.location.href = "index.html";
});



document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".main").style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".main").style.opacity = "1";

 

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Stop observing once it's shown
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the item is visible
  });

  observer.observe(skillItems);
});                                                                                                                           