/**
 * SengKueVang BLONGMAI (huevangxp) - Modern Portfolio Interactive Logic
 * Features: Tokyo Night Theme, Bilingual Translations, Interactive CLI Terminal,
 * Dynamic Particles Canvas, Web Audio Synthesizer, 3D Skyline Switcher & Live GitHub API
 */

// ==========================================
// 1. STATE & DOM REFERENCES
// ==========================================
let currentLang = localStorage.getItem('huevang_lang') || 'en';
let currentTheme = localStorage.getItem('huevang_theme') || 'dark';
let soundEnabled = localStorage.getItem('huevang_sound') !== 'false';

const htmlEl = document.documentElement;
const bodyEl = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn = document.getElementById('lang-toggle');
const soundToggleBtn = document.getElementById('sound-toggle');
const mobileToggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mainHeader = document.getElementById('main-header');
const backToTopBtn = document.getElementById('back-to-top');

// Terminal Elements
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const terminalClearBtn = document.getElementById('terminal-clear-btn');
const terminalDemoBtn = document.getElementById('terminal-demo-btn');
const cmdPills = document.querySelectorAll('.cmd-pill');

// Skills & Projects
const skillFilterBtns = document.querySelectorAll('.skills-filter-tabs .filter-btn');
const skillItems = document.querySelectorAll('.skill-item');
const projectFilterBtns = document.querySelectorAll('.projects-filter-tabs .filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// 3D Skyline Switcher
const skylineTabs = document.querySelectorAll('.skyline-tab-btn');
const skylineImg = document.getElementById('skyline-img');

// Copy Code Button
const copyCodeBtn = document.getElementById('copy-code-btn');

// Contact Form
const contactForm = document.getElementById('contact-form');
const formToast = document.getElementById('form-toast');

// ==========================================
// 2. SYNTHESIZED SOUND EFFECTS (Web Audio API)
// ==========================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type = 'click') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'tab') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'cmd') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.07);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.start(now);
      osc.stop(now + 0.07);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.start(now);
      osc.stop(now + 0.28);
    }
  } catch (err) {
    // Ignore audio errors on non-supported environments
  }
}

function updateSoundUI() {
  if (soundToggleBtn) {
    const icon = soundToggleBtn.querySelector('i');
    if (soundEnabled) {
      icon.className = 'fas fa-volume-up';
      soundToggleBtn.setAttribute('title', 'Sound Effects: ON (Click to mute)');
    } else {
      icon.className = 'fas fa-volume-mute';
      soundToggleBtn.setAttribute('title', 'Sound Effects: MUTED (Click to enable)');
    }
  }
}

if (soundToggleBtn) {
  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('huevang_sound', soundEnabled);
    updateSoundUI();
    if (soundEnabled) playSound('click');
  });
}

// ==========================================
// 3. THEME TOGGLING (Dark / Light)
// ==========================================
function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('huevang_theme', theme);
  htmlEl.setAttribute('data-theme', theme);

  if (themeToggleBtn) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'light') {
      icon.className = 'fas fa-moon';
      themeToggleBtn.setAttribute('title', 'Switch to Tokyo Night Dark Mode');
    } else {
      icon.className = 'fas fa-sun';
      themeToggleBtn.setAttribute('title', 'Switch to Clean Light Mode');
    }
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    playSound('click');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

// ==========================================
// 4. BILINGUAL TRANSLATION (English & Lao)
// ==========================================
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('huevang_lang', lang);

  if (lang === 'la') {
    bodyEl.classList.add('lang-la');
  } else {
    bodyEl.classList.remove('lang-la');
  }

  // Update text elements
  document.querySelectorAll('[data-translate]').forEach((el) => {
    const key = el.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update inputs & placeholders
  document.querySelectorAll('[data-translate-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-translate-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update language toggle pill button
  if (langToggleBtn) {
    const flagSpan = langToggleBtn.querySelector('.lang-flag');
    const textSpan = langToggleBtn.querySelector('.lang-text');
    if (lang === 'en') {
      flagSpan.textContent = '🇱🇦';
      textSpan.textContent = 'LA';
      langToggleBtn.setAttribute('title', 'ປ່ຽນເປັນພາສາລາວ (Switch to Lao)');
    } else {
      flagSpan.textContent = '🇬🇧';
      textSpan.textContent = 'EN';
      langToggleBtn.setAttribute('title', 'Switch to English');
    }
  }

  // Restart hero typing animation in newly selected language
  resetTypingLoop();
}

if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    playSound('click');
    const nextLang = currentLang === 'en' ? 'la' : 'en';
    applyLanguage(nextLang);
  });
}

// ==========================================
// 5. HERO ROTATING TYPING ANIMATION
// ==========================================
let typingTimeout = null;
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function getPhrases() {
  if (currentLang === 'la') {
    return [
      translations.la.roleFullStack,
      translations.la.roleUIUX,
      translations.la.roleBanking,
      translations.la.roleMobile,
      translations.la.roleSpiderman,
    ];
  }
  return [
    translations.en.roleFullStack,
    translations.en.roleUIUX,
    translations.en.roleBanking,
    translations.en.roleMobile,
    translations.en.roleSpiderman,
  ];
}

function runTypingAnimation() {
  clearTimeout(typingTimeout);
  const target = document.getElementById('typing-text');
  if (!target) return;

  const phrases = getPhrases();
  if (phraseIndex >= phrases.length) phraseIndex = 0;
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    target.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    target.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let speed = isDeleting ? 35 : 75;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    // Finished typing phrase, hold for 2s
    speed = 2200;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    // Finished deleting phrase, advance to next
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  typingTimeout = setTimeout(runTypingAnimation, speed);
}

function resetTypingLoop() {
  clearTimeout(typingTimeout);
  phraseIndex = 0;
  letterIndex = 0;
  isDeleting = false;
  runTypingAnimation();
}

// ==========================================
// 6. INTERACTIVE CLI TERMINAL ENGINE
// ==========================================
const commandHistory = [];
let historyCursor = -1;

const terminalCommands = {
  whoami: {
    desc: 'Print author summary & developer identity',
    run: () => {
      return `<span class="t-cyan">SengKueVang BLONGMAI (Hue Vang)</span>\n<span class="t-indigo">Roles:</span> Full-Stack Developer &amp; UI/UX Designer\n<span class="t-pink">Specialty:</span> Modern Web Apps, Mobile Systems &amp; Banking Infrastructure\n<span class="t-green">Status:</span> Open for high-impact collaborations 🚀`;
    },
  },
  'cat location.txt': {
    desc: 'Display current operating base & timezone',
    run: () => {
      return `<span class="t-cyan">Vientiane Capital, Laos 🇱🇦</span>\nTimezone: Indochina Time (UTC+07:00)\nCoordinates: 17.9757° N, 102.6331° E\nAvailable: Remote, Hybrid &amp; Worldwide`;
    },
  },
  'ls skills': {
    desc: 'List core programming technologies',
    run: () => {
      return `<span class="t-pink">python  nodejs  php  laravel  vue  nuxt  react  flutter  firebase  tailwind  postgres  docker</span>`;
    },
  },
  'ls ~/skills': {
    desc: 'List core programming technologies',
    run: () => {
      return `<span class="t-pink">python  nodejs  php  laravel  vue  nuxt  react  flutter  firebase  tailwind  postgres  docker</span>`;
    },
  },
  'git status': {
    desc: 'Check git repository working tree',
    run: () => {
      return `<span class="t-green">On branch main | open to collaborations | ready to build</span>\nEverything up to date with origin/main (huevangxp/huevangxp)`;
    },
  },
  'echo $MOTTO': {
    desc: 'Echo the primary engineering motto',
    run: () => {
      return `<span class="t-amber">"Keep it simple, make it beautiful." ✨</span>`;
    },
  },
  projects: {
    desc: 'View curated portfolio projects',
    run: () => {
      return `<span class="t-cyan">★ Featured Portfolio Repositories:</span>\n1. <a href="https://github.com/huevangxp/MeUIPay" target="_blank" class="t-green">MeUIPay</a> - Modern banking &amp; payment UI integration\n2. <a href="https://github.com/huevangxp/booking-apartment" target="_blank" class="t-green">booking-apartment</a> - Apartment reservation &amp; rental portal\n3. <a href="https://github.com/huevangxp/ai_server" target="_blank" class="t-green">ai_server</a> - Intelligent Python asynchronous AI services\n4. <a href="https://github.com/Sengkue/FoodDeleveryApp-2CW1" target="_blank" class="t-green">FoodDeleveryApp</a> - Flutter mobile dispatch &amp; ordering app\n5. <a href="https://github.com/Sengkue/ibook_nuxt" target="_blank" class="t-green">ibook_nuxt</a> - Nuxt 3 digital bookstore catalog`;
    },
  },
  exp: {
    desc: 'View career history summary',
    run: () => {
      return `<span class="t-cyan">[2023 - Present]</span> Freelance &amp; Banking Sector Developer\n<span class="t-indigo">[2022 - 2023]</span> Front-End Developer at Laos IT Capital\n<span class="t-pink">[2021 - 2022]</span> Full-Stack Developer at LaiLaoLab ICT Solution\n<span class="t-amber">[2019 - 2023]</span> Bachelor of Website Development, National University of Laos`;
    },
  },
  spiderman: {
    desc: 'Spider-Man Easter Egg',
    run: () => {
      return `<span class="t-pink">
  /\\___/\\
 (  o o  )  🕸️ "With great code comes great responsibility!"
 (  =^=  )
  (---)
</span>\n<span class="t-cyan">Swinging through syntax trees since 2019! 🕷️</span>`;
    },
  },
  clear: {
    desc: 'Clear the terminal output',
    run: () => {
      terminalOutput.innerHTML = '';
      return null;
    },
  },
  help: {
    desc: 'List all commands',
    run: () => {
      let msg = `<span class="t-amber">Antigravity ZSH Terminal Shell v2.4</span>\nAvailable commands:\n`;
      Object.keys(terminalCommands).forEach((cmd) => {
        msg += `  <span class="t-cyan">${cmd.padEnd(18, ' ')}</span> <span class="t-muted">${terminalCommands[cmd].desc}</span>\n`;
      });
      return msg;
    },
  },
};

function appendTerminalLog(cmd, outputHtml) {
  if (!terminalOutput) return;

  const entry = document.createElement('div');
  entry.className = 'terminal-line';

  let html = `<div><span class="t-prompt">$</span> <span class="t-in">${escapeHtml(cmd)}</span></div>`;
  if (outputHtml) {
    html += `<div style="margin-top: 4px; padding-left: 12px; border-left: 2px solid rgba(129,140,248,0.3);">${outputHtml}</div>`;
  }
  entry.innerHTML = html;
  terminalOutput.appendChild(entry);
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, (tag) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[tag] || tag));
}

function executeTerminalCommand(rawInput) {
  const cmd = rawInput.trim();
  if (!cmd) return;

  playSound('cmd');
  commandHistory.push(cmd);
  historyCursor = commandHistory.length;

  const normalized = cmd.toLowerCase();

  if (terminalCommands[normalized]) {
    const res = terminalCommands[normalized].run();
    if (res !== null) {
      appendTerminalLog(cmd, res);
    }
  } else {
    appendTerminalLog(
      cmd,
      `<span class="t-error">zsh: command not found: ${escapeHtml(cmd)}</span>. Type <span class="t-cyan">'help'</span> for available commands.`
    );
  }
}

if (terminalInput) {
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = terminalInput.value;
      terminalInput.value = '';
      executeTerminalCommand(val);
    } else if (e.key === 'ArrowUp') {
      if (historyCursor > 0) {
        historyCursor--;
        terminalInput.value = commandHistory[historyCursor] || '';
      }
    } else if (e.key === 'ArrowDown') {
      if (historyCursor < commandHistory.length - 1) {
        historyCursor++;
        terminalInput.value = commandHistory[historyCursor] || '';
      } else {
        historyCursor = commandHistory.length;
        terminalInput.value = '';
      }
    }
  });
}

// Click on quick command pills
cmdPills.forEach((pill) => {
  pill.addEventListener('click', () => {
    const cmd = pill.getAttribute('data-cmd');
    if (cmd) {
      if (terminalInput) terminalInput.value = cmd;
      executeTerminalCommand(cmd);
    }
  });
});

if (terminalClearBtn) {
  terminalClearBtn.addEventListener('click', () => {
    playSound('click');
    if (terminalOutput) terminalOutput.innerHTML = '';
  });
}

// Auto-Play Demo script matching console.svg
let demoRunning = false;
if (terminalDemoBtn) {
  terminalDemoBtn.addEventListener('click', () => {
    if (demoRunning) return;
    playSound('click');
    demoRunning = true;
    terminalDemoBtn.disabled = true;
    if (terminalOutput) terminalOutput.innerHTML = '';

    const scriptSteps = [
      { cmd: 'whoami', delay: 700 },
      { cmd: 'cat location.txt', delay: 1800 },
      { cmd: 'ls ~/skills', delay: 3000 },
      { cmd: 'git status', delay: 4200 },
      { cmd: 'echo $MOTTO', delay: 5400 },
    ];

    scriptSteps.forEach((step, index) => {
      setTimeout(() => {
        executeTerminalCommand(step.cmd);
        if (index === scriptSteps.length - 1) {
          demoRunning = false;
          terminalDemoBtn.disabled = false;
        }
      }, step.delay);
    });
  });
}

// Initialize terminal with initial welcome & whoami
function initTerminalWelcome() {
  if (!terminalOutput) return;
  terminalOutput.innerHTML = `
    <div class="terminal-line t-muted">Last login: ${new Date().toDateString()} on ttys001</div>
    <div class="terminal-line"><span class="t-cyan">Antigravity Interactive ZSH Shell</span> • Type <span class="t-amber">'help'</span> for command listing.</div>
  `;
  setTimeout(() => {
    executeTerminalCommand('whoami');
  }, 400);
}

// ==========================================
// 7. PARTICLES STARFIELD CANVAS
// ==========================================
const canvas = document.getElementById('bg-canvas');
let ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let animFrameId = null;

const mousePos = { x: -1000, y: -1000, radius: 140 };

window.addEventListener('mousemove', (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
});

window.addEventListener('mouseout', () => {
  mousePos.x = -1000;
  mousePos.y = -1000;
});

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
}

function initParticles() {
  if (!canvas) return;
  particles = [];
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2 + 0.8,
      baseColor: Math.random() > 0.5 ? 'rgba(34, 211, 238,' : 'rgba(129, 140, 248,',
      alpha: Math.random() * 0.6 + 0.2,
    });
  }
}

function drawParticles() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const isLight = currentTheme === 'light';

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    // Mouse gentle push
    const dx = mousePos.x - p.x;
    const dy = mousePos.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < mousePos.radius) {
      const force = (mousePos.radius - dist) / mousePos.radius;
      p.x -= (dx / dist) * force * 2;
      p.y -= (dy / dist) * force * 2;
    }

    // Draw particle
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = isLight ? `rgba(8, 145, 178, ${p.alpha * 0.7})` : `${p.baseColor} ${p.alpha})`;
    ctx.fill();

    // Connect near particles
    for (let j = i + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const djx = p.x - p2.x;
      const djy = p.y - p2.y;
      const d = Math.sqrt(djx * djx + djy * djy);

      if (d < 110) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        const lineAlpha = (1 - d / 110) * (isLight ? 0.15 : 0.22);
        ctx.strokeStyle = isLight ? `rgba(8, 145, 178, ${lineAlpha})` : `rgba(129, 140, 248, ${lineAlpha})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  animFrameId = requestAnimationFrame(drawParticles);
}

// ==========================================
// 8. SKILLS & PROJECTS FILTERING
// ==========================================
skillFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound('tab');
    skillFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    skillItems.forEach((item) => {
      const cat = item.getAttribute('data-cat');
      if (filter === 'all' || cat === filter) {
        item.style.display = 'flex';
        item.style.opacity = '0';
        item.style.transform = 'scale(0.92)';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        }, 50);
      } else {
        item.style.display = 'none';
      }
    });
  });
});

projectFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    playSound('tab');
    projectFilterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card) => {
      const cat = card.getAttribute('data-cat');
      if (filter === 'all' || cat === filter) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ==========================================
// 9. 3D SKYLINE GRAPH SWITCHER
// ==========================================
skylineTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    playSound('tab');
    skylineTabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');

    const newSrc = tab.getAttribute('data-src');
    if (skylineImg && newSrc) {
      skylineImg.style.opacity = '0';
      skylineImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        skylineImg.src = newSrc;
        skylineImg.style.opacity = '1';
        skylineImg.style.transform = 'scale(1)';
      }, 150);
    }
  });
});

// ==========================================
// 10. COPY CODE SNIPPET
// ==========================================
if (copyCodeBtn) {
  copyCodeBtn.addEventListener('click', () => {
    playSound('click');
    const codeEl = document.getElementById('dev-code-block');
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.innerText).then(() => {
        const textSpan = copyCodeBtn.querySelector('span');
        const originalText = textSpan.textContent;
        textSpan.textContent = translations[currentLang].aboutCopied || 'Copied!';
        copyCodeBtn.style.borderColor = 'var(--emerald)';
        copyCodeBtn.style.color = 'var(--emerald)';
        setTimeout(() => {
          textSpan.textContent = originalText;
          copyCodeBtn.style.borderColor = '';
          copyCodeBtn.style.color = '';
        }, 2000);
      });
    }
  });
}

// ==========================================
// 11. FETCH LIVE GITHUB STATS (API)
// ==========================================
async function fetchGithubProfile() {
  try {
    const res = await fetch('https://api.github.com/users/huevangxp');
    if (!res.ok) return;
    const data = await res.json();

    const avatarEl = document.getElementById('gh-avatar');
    const nameEl = document.getElementById('gh-name');
    const bioEl = document.getElementById('gh-bio');
    const reposNum = document.getElementById('gh-repos-num');
    const followersNum = document.getElementById('gh-followers-num');
    const followingNum = document.getElementById('gh-following-num');

    if (avatarEl && data.avatar_url) avatarEl.src = data.avatar_url;
    if (nameEl && data.name) nameEl.textContent = `${data.name} (SengKueVang)`;
    if (bioEl && data.bio) bioEl.textContent = data.bio;
    if (reposNum && data.public_repos !== undefined) reposNum.textContent = `${data.public_repos}+`;
    if (followersNum && data.followers !== undefined) followersNum.textContent = data.followers;
    if (followingNum && data.following !== undefined) followingNum.textContent = data.following;
  } catch (err) {
    // Keep default fallbacks if offline or API rate limit reached
  }
}

// ==========================================
// 12. CONTACT FORM SUBMISSION
// ==========================================
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playSound('click');

    const submitBtn = document.getElementById('form-submit-btn');
    const originalContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span>${translations[currentLang].formSending}</span>`;

    // Simulate backend transmission
    setTimeout(() => {
      playSound('success');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
      contactForm.reset();

      if (formToast) {
        formToast.className = 'form-toast success';
        formToast.textContent = translations[currentLang].formSuccess;
        formToast.style.display = 'block';

        setTimeout(() => {
          formToast.style.display = 'none';
        }, 6000);
      }
    }, 1200);
  });
}

// ==========================================
// 13. NAVIGATION SCROLL & ACTIVE SPY
// ==========================================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Header collapse on scroll
  if (mainHeader) {
    if (scrollY > 50) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  }

  // Floating Back to Top Button
  if (backToTopBtn) {
    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Active navigation spy
  highlightNavigation();
});

function highlightNavigation() {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 180;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Mobile Menu Toggle
if (mobileToggleBtn && navMenu) {
  mobileToggleBtn.addEventListener('click', () => {
    playSound('click');
    mobileToggleBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileToggleBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ==========================================
// 14. SCROLL REVEAL OBSERVER
// ==========================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

// ==========================================
// 15. INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  updateSoundUI();
  initTerminalWelcome();

  // Canvas Starfield
  if (canvas) {
    resizeCanvas();
    drawParticles();
    window.addEventListener('resize', () => {
      cancelAnimationFrame(animFrameId);
      resizeCanvas();
      drawParticles();
    });
  }

  // Live GitHub Profile
  fetchGithubProfile();
});
