(function () {
  const desktop = document.getElementById("desktop");
  const taskbar = document.getElementById("taskbar");
  const windowLayer = document.getElementById("window-layer");
  const iconLayer = document.getElementById("desktop-icons");
  const tabs = document.getElementById("taskbar-tabs");
  const boot = document.getElementById("boot-screen");
  const balloon = document.getElementById("welcome-balloon");
  const clock = document.getElementById("live-clock");

  const apps = [
    { id: "aim", title: "AIM - My Experience", icon: "📁", iconSrc: "./Assets/icons/AIM.png", content: "<h3>AIM Buddy List</h3><p>AI Researcher - Florida State University (Aug 2025 - Current)</p><p>Backend Development Intern - Arcvale Studios (Apr 2025 - Aug 2025)</p><p>Full-Stack Developer (Contract) - Memorial Healthcare System (Jun 2025 - Aug 2025)</p><p>Help Desk Technician - Florida State University (Aug 2023 - Current)</p><p>Head Technician/Assistant Manager - Batteries Plus (Sep 2021 - Dec 2023)</p><p>Intern Technician - Memorial Hospital System (May 2024 - Aug 2024)</p>" },
    { id: "myspace", title: "MySpace - My Projects", icon: "🌐", iconSrc: "./Assets/icons/Myspace.ico", content: "<h3>Personal Projects</h3><p>Neural Network Development</p><p>Facial Recognition System</p><p>NeuroForge Systems</p><p>ScreenWager Mobile App</p><p>Bella AI Companion</p>" },
    { id: "winamp", title: "WINAMP - Education", icon: "🎓", iconSrc: "./Assets/icons/Winamp.png", content: "<h3>Track List</h3><p>Track 01 - Florida State University - Information Technology B.S. (Aug 2023 - May 2026)</p><p>Track 02 - McFatter Technical College - Cyber Security A.A.S (Aug 2017 - Jun 2021)</p><p>Track 03 - McFatter Technical High School - Magnet Program (2017 - 2021)</p>" },
    { id: "forum", title: "MSN Groups - Extra Curriculars", icon: "🏆", iconSrc: "./Assets/icons/Forum_2000_Logo.svg.png", content: "<h3>FSU ThinkAI - Community Forum</h3><p>Strategic Leadership, Event Orchestration, Stakeholder Management</p><p>Top 3 Takeaways: Community-Driven Learning, Strategic Alignment, Adaptive Leadership</p>" },
    { id: "xbox", title: "NeuroForge Systems - Xbox Edition", icon: "🤖", iconSrc: "./Assets/icons/xbox.png", content: "<h3>THE NEXT LEVEL OF AI AUTOMATION</h3><p>Core Agents: Ultimate Assistant, Email Agent, Calendar Agent, Contact Agent, Content Creator Agent, Twilio Agent, Lead Generation Agent.</p><p>Business Benefits: Time Savings, 24/7 Availability, Consistency, Lead Conversion, Data Centralization, CRM Integration, Cost Efficiency, Human-Like Interactions, Scalability, Cross-Agent Intelligence.</p>" },
    { id: "outlook", title: "Outlook Express - Contact Me", icon: "📧", iconSrc: "./Assets/icons/outlook.png", content: "<h3>Contact Me</h3><p>Email: <a href=\"mailto:michaelczuazo@gmail.com\">michaelczuazo@gmail.com</a></p><p>Phone: <a href=\"tel:+19542248558\">(954)-224-8558</a></p><p>GitHub: <a href=\"https://github.com/MichaelCelic\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/MichaelCelic</a></p><p>LinkedIn: <a href=\"https://www.linkedin.com/in/michael-zuazo\" target=\"_blank\" rel=\"noopener noreferrer\">www.linkedin.com/in/michael-zuazo</a></p>" },
    { id: "mycomputer", title: "My Computer - About Me", icon: "🖥️", iconSrc: "./Assets/icons/my%20computer.jpg", content: "<h3>System Properties</h3><p>Michael Zuazo - Tallahassee, FL</p><p>AI Development & Programming: Python, C++, Java, SQL database management</p><p>Tools: Docker, Git, Bash, HTML, Cloud computing, Ollama, n8n, Airtable, Lovable</p><p>Certifications: CompTIA A+, Network+, Security+ (program completed), Wise Device repair</p>" }
  ];

  const state = { z: 20, windows: new Map() };

  function bringFront(win) {
    state.z += 1;
    win.style.zIndex = String(state.z);
    tabs.querySelectorAll(".taskbar-tab").forEach((t) => t.classList.toggle("active", t.dataset.winId === win.dataset.winId));
  }

  function makeDraggable(win, handle) {
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;
    const down = (x, y) => {
      if (win.classList.contains("maximized")) return;
      dragging = true;
      const rect = win.getBoundingClientRect();
      offsetX = x - rect.left;
      offsetY = y - rect.top;
      bringFront(win);
    };
    const move = (x, y) => {
      if (!dragging) return;
      win.style.left = Math.max(0, x - offsetX) + "px";
      win.style.top = Math.max(0, y - offsetY) + "px";
    };
    const up = () => { dragging = false; };
    handle.addEventListener("mousedown", (e) => down(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => move(e.clientX, e.clientY));
    window.addEventListener("mouseup", up);
    handle.addEventListener("touchstart", (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener("touchmove", (e) => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener("touchend", up);
  }

  function makeResizable(win, handle) {
    let resizing = false, sx = 0, sy = 0, sw = 0, sh = 0;
    const down = (x, y) => {
      if (win.classList.contains("maximized")) return;
      resizing = true;
      const r = win.getBoundingClientRect();
      sx = x; sy = y; sw = r.width; sh = r.height;
      bringFront(win);
    };
    const move = (x, y) => {
      if (!resizing) return;
      win.style.width = Math.max(320, sw + x - sx) + "px";
      win.style.height = Math.max(220, sh + y - sy) + "px";
    };
    const up = () => { resizing = false; };
    handle.addEventListener("mousedown", (e) => down(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => move(e.clientX, e.clientY));
    window.addEventListener("mouseup", up);
    handle.addEventListener("touchstart", (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener("touchmove", (e) => { const t = e.touches[0]; if (t) move(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener("touchend", up);
  }

  function createWindow(appId) {
    if (state.windows.has(appId)) {
      const existing = state.windows.get(appId);
      existing.classList.remove("hidden");
      bringFront(existing);
      return;
    }
    const app = apps.find((a) => a.id === appId);
    if (!app) return;
    const winId = "win-" + app.id;
    const win = document.createElement("article");
    win.className = "app-window";
    win.dataset.app = app.id;
    win.dataset.winId = winId;
    win.style.left = 90 + state.windows.size * 20 + "px";
    win.style.top = 70 + state.windows.size * 18 + "px";
    var mz = window.MZApps && window.MZApps[app.id];
    var inner = mz ? mz.html : app.content;
    var bodyClass = "window-body";
    if (mz && mz.fill) {
      bodyClass += " window-body--fill";
    }
    var bodyOpen = mz && mz.fill ? '<div class="' + bodyClass + '">' : '<div class="' + bodyClass + '" style="padding:12px;">';
    win.innerHTML =
      '<header class="window-titlebar"><div class="window-controls"><button class="btn-close" type="button" aria-label="Close"></button><button class="btn-min" type="button" aria-label="Minimize"></button><button class="btn-max" type="button" aria-label="Maximize"></button></div><span class="window-title">' +
      app.title +
      "</span></header>" +
      bodyOpen +
      inner +
      '</div><div class="resize-handle"></div>';
    windowLayer.appendChild(win);
    state.windows.set(appId, win);
    bringFront(win);

    var bodyEl = win.querySelector(".window-body");
    if (mz && typeof mz.init === "function") {
      mz.init(bodyEl);
    }

    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "taskbar-tab active";
    tab.dataset.winId = winId;
    tab.textContent = app.title;
    tabs.appendChild(tab);

    makeDraggable(win, win.querySelector(".window-titlebar"));
    makeResizable(win, win.querySelector(".resize-handle"));
    win.addEventListener("mousedown", () => bringFront(win));

    tab.addEventListener("click", () => {
      if (win.classList.contains("hidden")) {
        win.classList.remove("hidden");
        bringFront(win);
      } else if (tab.classList.contains("active")) {
        win.classList.add("hidden");
        tab.classList.remove("active");
      } else {
        bringFront(win);
      }
    });

    win.querySelector(".btn-close").addEventListener("click", () => {
      state.windows.delete(appId);
      tab.remove();
      win.remove();
    });
    win.querySelector(".btn-min").addEventListener("click", () => {
      win.classList.add("hidden");
      tab.classList.remove("active");
    });
    win.querySelector(".btn-max").addEventListener("click", () => {
      win.classList.toggle("maximized");
      bringFront(win);
    });
  }

  function renderIcons() {
    apps.forEach((app, i) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "desktop-icon";
      item.style.animationDelay = (0.1 + i * 0.1) + "s";
      const label =
        app.id === "aim" ? "My Experience" :
        app.id === "myspace" ? "My Projects" :
        app.id === "winamp" ? "Education" :
        app.id === "forum" ? "Extra Curriculars" :
        app.id === "xbox" ? "NeuroForge Systems" :
        app.id === "outlook" ? "Contact Me" : "About Me";
      const iconBlock = app.iconSrc
        ? '<img class="desktop-icon-img" src="' + app.iconSrc + '" alt="" loading="lazy" onerror="this.remove(); var fb=this.parentNode.querySelector(\'.icon-fallback\'); if(fb) fb.style.display=\'grid\';">' +
          '<div class="icon-fallback" aria-hidden="true" style="display:none">' + app.icon + "</div>"
        : '<div class="icon-fallback" aria-hidden="true">' + app.icon + "</div>";
      item.innerHTML = iconBlock + '<div class="desktop-icon-label">' + label + "</div>";
      let clickTimer = null;
      item.addEventListener("click", () => {
        iconLayer.querySelectorAll(".desktop-icon").forEach((n) => n.classList.remove("selected"));
        item.classList.add("selected");
        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
          createWindow(app.id);
        } else {
          clickTimer = setTimeout(() => { clickTimer = null; }, 300);
        }
      });
      iconLayer.appendChild(item);
    });
  }

  function startClock() {
    function update() {
      clock.textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    update();
    setInterval(update, 1000);
  }

  setTimeout(() => {
    boot.classList.add("hidden");
    desktop.classList.remove("hidden");
    taskbar.classList.remove("hidden");
    renderIcons();
    startClock();
    setTimeout(() => balloon.classList.remove("hidden"), 450);
    setTimeout(() => balloon.classList.add("hidden"), 4200);
  }, 2100);
})();
