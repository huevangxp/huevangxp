// State Management
let currentLang = localStorage.getItem('huevang_lang') || 'en';
let currentTheme = localStorage.getItem('huevang_theme') || 'dark';

// DOM Elements
const bodyEl = document.body;
const htmlEl = document.documentElement;
const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const mobileMenuToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const headerEl = document.querySelector('header');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// 1. Language Toggle & Bilingual Translation Handler
function translateUI(lang) {
  currentLang = lang;
  localStorage.setItem('huevang_lang', lang);
  
  // Set body class for font switching
  if (lang === 'la') {
    bodyEl.classList.add('lang-la');
  } else {
    bodyEl.classList.remove('lang-la');
  }

  // Update text values
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update input placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update language button text to show the other option
  langToggleBtn.textContent = lang === 'en' ? 'ລາວ' : 'EN';
  langToggleBtn.setAttribute('title', lang === 'en' ? 'ສະຫຼັບເປັນພາສາລາວ' : 'Switch to English');

  // Restart typing animation with updated language texts
  initTypingAnimation();
}

langToggleBtn.addEventListener('click', () => {
  const nextLang = currentLang === 'en' ? 'la' : 'en';
  translateUI(nextLang);
});

// 2. Typing Animation in Hero Section
let typingTimeout;
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function initTypingAnimation() {
  // Clear any existing typing timeout to avoid overlapping
  clearTimeout(typingTimeout);
  
  const target = document.getElementById('typing-text');
  if (!target) return;
  
  const roles = currentLang === 'en' 
    ? [translations.en.roleFullStack, translations.en.roleWebDev, translations.en.roleFreelancer, translations.en.roleBanking]
    : [translations.la.roleFullStack, translations.la.roleWebDev, translations.la.roleFreelancer, translations.la.roleBanking];
  
  // Make sure variables are in range
  if (typingIndex >= roles.length) typingIndex = 0;
  
  const currentRole = roles[typingIndex];
  
  if (isDeleting) {
    target.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typingSpeed = isDeleting ? 40 : 80;
  
  if (!isDeleting && charIndex === currentRole.length) {
    // Word fully typed, pause before deleting
    typingSpeed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Word fully deleted, move to next
    isDeleting = false;
    typingIndex = (typingIndex + 1) % roles.length;
    typingSpeed = 400;
  }
  
  typingTimeout = setTimeout(initTypingAnimation, typingSpeed);
}

// 3. Theme Toggle & Persistent Settings
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('huevang_theme', theme);
  htmlEl.setAttribute('data-theme', theme);
  
  // Change icons
  const icon = themeToggleBtn.querySelector('i');
  if (theme === 'light') {
    icon.className = 'fas fa-moon';
    themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
  } else {
    icon.className = 'fas fa-sun';
    themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
});

// 4. Navigation & Scroll Interactions
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerEl.classList.add('scrolled');
  } else {
    headerEl.classList.remove('scrolled');
  }
  
  highlightActiveNavLink();
});

function highlightActiveNavLink() {
  let scrollPosition = window.scrollY + 200;
  
  document.querySelectorAll('section').forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPosition >= top && scrollPosition < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Mobile navigation menu toggle
mobileMenuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  const icon = mobileMenuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const icon = mobileMenuToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// 5. Scroll Reveal Animations (Intersection Observer)
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// 6. Interactive Skills Tab Filtering
const skillTabBtns = document.querySelectorAll('.tab-btn');
const skillCards = document.querySelectorAll('.skill-card');

skillTabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Set active tab styling
    skillTabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    
    skillCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        // Add subtle pop-in animation
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// 7. Contact Form Mock Handler
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Disable inputs and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${translations[currentLang].formSending}`;
    
    // Simulate API Request
    setTimeout(() => {
      // Re-enable and reset
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      contactForm.reset();
      
      // Display success feedback
      formFeedback.className = "form-feedback success";
      formFeedback.textContent = translations[currentLang].formSuccess;
      
      // Auto clear feedback after 5 seconds
      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 5000);
    }, 1500);
  });
}

// 8. Particle Canvas Background Engine
const canvas = document.getElementById('bg-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  let particleCount = 65;
  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 20) + 10;
      
      // Speeds
      this.dx = (Math.random() - 0.5) * 0.7;
      this.dy = (Math.random() - 0.5) * 0.7;
    }

    draw() {
      ctx.fillStyle = currentTheme === 'dark' ? 'rgba(0, 210, 211, 0.4)' : 'rgba(0, 128, 128, 0.3)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update() {
      // Standard drifting motion
      this.x += this.dx;
      this.y += this.dy;

      // Bounce on boundaries
      if (this.x < 0 || this.x > canvas.width) this.dx = -this.dx;
      if (this.y < 0 || this.y > canvas.height) this.dy = -this.dy;

      // Interaction with mouse
      if (mouse.x !== null && mouse.y !== null) {
        let distanceX = mouse.x - this.x;
        let distanceY = mouse.y - this.y;
        let distance = Math.hypot(distanceX, distanceY);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = distanceX / distance;
          const directionY = distanceY / distance;
          
          // Repel force
          this.x -= directionX * force * 3;
          this.y -= directionY * force * 3;
        }
      }
    }
  }

  function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    
    // Scale count by screen size
    if (canvas.width < 768) {
      particleCount = 25;
    } else {
      particleCount = 65;
    }

    for (let i = 0; i < particleCount; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].draw();
      particlesArray[i].update();
    }
    connectParticles();
    requestAnimationFrame(animateParticles);
  }

  function connectParticles() {
    let opacityVal = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        let distance = Math.hypot(
          particlesArray[a].x - particlesArray[b].x,
          particlesArray[a].y - particlesArray[b].y
        );

        if (distance < 110) {
          opacityVal = (1 - (distance / 110)) * 0.15;
          ctx.strokeStyle = currentTheme === 'dark' 
            ? `rgba(0, 210, 211, ${opacityVal})` 
            : `rgba(0, 128, 128, ${opacityVal})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }
      }
    }
  }

  window.addEventListener('resize', () => {
    initParticles();
  });

  initParticles();
  animateParticles();
}

// 9. GitHub Dashboard Logic (API Fetch, count-up, tab panel)
function initGitHubDashboard() {
  const username = "huevangxp";
  
  // Set up chart tabs
  const tabBtns = document.querySelectorAll('.github-chart-tab-btn');
  const tabContents = document.querySelectorAll('.github-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-tab');
      tabContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });

  // Fetch Stats from GitHub API
  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("API Limit or Request Error");
      return res.json();
    })
    .then(data => {
      // Update info
      const avatarImg = document.getElementById('github-profile-pic');
      const profileName = document.getElementById('github-profile-name');
      const profileBio = document.getElementById('github-profile-bio');
      const profileCompany = document.getElementById('github-profile-company');
      const profileLocation = document.getElementById('github-profile-location');
      const profileUrl = document.getElementById('github-profile-url');

      if (avatarImg) avatarImg.src = data.avatar_url;
      if (profileName) profileName.textContent = data.name || data.login;
      if (profileBio) profileBio.textContent = data.bio || "Full-Stack Developer | Banking Sector";
      
      if (profileCompany) {
        profileCompany.innerHTML = `<i class="fas fa-building"></i> ${data.company || 'Freelance'}`;
      }
      if (profileLocation) {
        profileLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${data.location || 'Vientiane, Laos'}`;
      }
      if (profileUrl) {
        profileUrl.href = data.html_url;
      }

      // Animate Stats Counts
      animateCount('github-repos-count', data.public_repos);
      animateCount('github-followers-count', data.followers);
      animateCount('github-following-count', data.following);
      animateCount('github-gists-count', data.public_gists);

      // Remove skeletons
      document.querySelectorAll('.github-dashboard .skeleton').forEach(el => el.classList.remove('skeleton'));
    })
    .catch(err => {
      console.warn("GitHub API error, using static fallback:", err);
      // Mock stats fallback if rate-limited
      const avatarImg = document.getElementById('github-profile-pic');
      if (avatarImg) avatarImg.src = "https://avatars.githubusercontent.com/u/84102927?v=4";

      document.getElementById('github-profile-name').textContent = "huevangxp";
      document.getElementById('github-profile-bio').textContent = "Full-Stack Developer | Banking Systems Specialist";
      
      animateCount('github-repos-count', 45);
      animateCount('github-followers-count', 12);
      animateCount('github-following-count', 15);
      animateCount('github-gists-count', 0);
      
      document.querySelectorAll('.github-dashboard .skeleton').forEach(el => el.classList.remove('skeleton'));
    });

  // Fetch Repositories
  fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    .then(res => {
      if (!res.ok) throw new Error("API Limit or Request Error");
      return res.json();
    })
    .then(repos => {
      const reposList = document.getElementById('github-repos-list');
      if (!reposList) return;
      reposList.innerHTML = '';

      repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card glass-card reveal active';
        
        // Colors mapping for languages
        const langColors = {
          JavaScript: '#f7df1e',
          TypeScript: '#3178c6',
          HTML: '#e34c26',
          CSS: '#563d7c',
          Python: '#3572A5',
          Vue: '#41b883',
          Dart: '#00B4AB',
          Swift: '#F05138',
          PHP: '#4F5D95'
        };
        const langColor = langColors[repo.language] || '#64748b';

        card.innerHTML = `
          <div class="repo-top">
            <div class="repo-name-row">
              <a href="${repo.html_url}" target="_blank" class="repo-name-link">${repo.name}</a>
              <i class="fab fa-git-alt repo-icon-git"></i>
            </div>
            <p class="repo-desc">${repo.description || 'No description provided.'}</p>
          </div>
          <div class="repo-bottom">
            <span class="repo-lang">
              <span class="lang-dot" style="background-color: ${langColor}"></span>
              ${repo.language || 'Markdown'}
            </span>
            <div class="repo-stats">
              <span class="repo-stat-item"><i class="far fa-star"></i> ${repo.stargazers_count}</span>
              <span class="repo-stat-item"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
            </div>
          </div>
        `;
        reposList.appendChild(card);
      });
    })
    .catch(err => {
      console.warn("GitHub Repos API error, using static fallback:", err);
      const reposList = document.getElementById('github-repos-list');
      if (reposList) {
        reposList.innerHTML = `
          <div class="repo-card glass-card reveal active">
            <div class="repo-top">
              <div class="repo-name-row">
                <a href="https://github.com/huevangxp/banking-internal-solutions" target="_blank" class="repo-name-link">banking-internal-solutions</a>
                <i class="fab fa-git-alt repo-icon-git"></i>
              </div>
              <p class="repo-desc">Core internal banking software integrations, handling transaction validation mechanisms.</p>
            </div>
            <div class="repo-bottom">
              <span class="repo-lang"><span class="lang-dot" style="background-color: #3178c6"></span>TypeScript</span>
              <div class="repo-stats">
                <span class="repo-stat-item"><i class="far fa-star"></i> 5</span>
                <span class="repo-stat-item"><i class="fas fa-code-branch"></i> 2</span>
              </div>
            </div>
          </div>
          <div class="repo-card glass-card reveal active">
            <div class="repo-top">
              <div class="repo-name-row">
                <a href="https://github.com/huevangxp/huevangxp" target="_blank" class="repo-name-link">huevangxp</a>
                <i class="fab fa-git-alt repo-icon-git"></i>
              </div>
              <p class="repo-desc">My professional developer bio readme and interactive web portfolio resources.</p>
            </div>
            <div class="repo-bottom">
              <span class="repo-lang"><span class="lang-dot" style="background-color: #f7df1e"></span>JavaScript</span>
              <div class="repo-stats">
                <span class="repo-stat-item"><i class="far fa-star"></i> 3</span>
                <span class="repo-stat-item"><i class="fas fa-code-branch"></i> 1</span>
              </div>
            </div>
          </div>
          <div class="repo-card glass-card reveal active">
            <div class="repo-top">
              <div class="repo-name-row">
                <a href="https://github.com/huevangxp/government-portal-api" target="_blank" class="repo-name-link">government-portal-api</a>
                <i class="fab fa-git-alt repo-icon-git"></i>
              </div>
              <p class="repo-desc">API back-end portal built for citizen identity and documentation processing registries.</p>
            </div>
            <div class="repo-bottom">
              <span class="repo-lang"><span class="lang-dot" style="background-color: #e0234e"></span>Nest.js</span>
              <div class="repo-stats">
                <span class="repo-stat-item"><i class="far fa-star"></i> 4</span>
                <span class="repo-stat-item"><i class="fas fa-code-branch"></i> 0</span>
              </div>
            </div>
          </div>
        `;
      }
    });
}

// Helper: Animate count
function animateCount(id, targetValue) {
  const el = document.getElementById(id);
  if (!el) return;
  
  if (targetValue === 0) {
    el.textContent = '0';
    return;
  }
  
  let current = 0;
  const duration = 1200; // ms
  const stepTime = Math.max(Math.floor(duration / targetValue), 15);
  
  const timer = setInterval(() => {
    current += Math.ceil(targetValue / 40);
    if (current >= targetValue) {
      el.textContent = targetValue;
      clearInterval(timer);
    } else {
      el.textContent = current;
    }
  }, stepTime);
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  // Sync systems with persisted configurations
  setTheme(currentTheme);
  translateUI(currentLang);
  initGitHubDashboard();
  
  // Make page visible and animate reveal items
  setTimeout(() => {
    highlightActiveNavLink();
  }, 100);
});
