/**
 * Extends window.MZApps with Education, Forum2000, Xbox, Outlook, System Properties.
 * Load after appContents.js
 */
(function () {
  if (!window.MZApps) window.MZApps = {};

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------- Winamp (Education) ---------- */
  var waTracks = {
    t1: {
      head: "Track 01 — Florida State University — Information Technology B.S. (3:26)",
      html:
        "<p><strong>Information Technology B.S – Florida State University (Aug 2023 - May 2026)</strong></p>" +
        "<p>Florida State University, College of Communication &amp; Information<br>Major: Information Technology</p>"
    },
    t2: {
      head: "Track 02 — McFatter Technical College — Cyber Security A.A.S. (4:21)",
      html:
        "<p><strong>Cyber Security A.A.S – McFatter Technical College (Aug 2017 - Jun 2021)</strong></p>" +
        "<p>McFatter Technical College<br>IT &amp; Cyber Security</p>"
    },
    t3: {
      head: "Track 03 — McFatter Technical High School — Magnet Diploma (4:00)",
      html:
        "<p><strong>Magnet High School Diploma – McFatter Technical High School (2017 - 2021)</strong></p>" +
        "<p>McFatter Technical High School<br>Magnet Program</p>"
    }
  };

  function winampInit(root) {
    var led = root.querySelector("#wa-led");
    function show(id) {
      var t = waTracks[id];
      if (!t) return;
      led.innerHTML = "<strong>" + esc(t.head) + "</strong>" + t.html;
      root.querySelectorAll(".wa-track").forEach(function (row) {
        row.classList.toggle("active", row.getAttribute("data-track") === id);
      });
    }
    show("t1");
    root.querySelectorAll(".wa-track").forEach(function (row) {
      row.addEventListener("click", function () {
        show(row.getAttribute("data-track"));
      });
    });
  }

  var winampHtml =
    '<div class="wa-root">' +
    '<div class="wa-titlebar">WINAMP · Education.pls</div>' +
    '<div class="wa-body">' +
    '<div class="wa-plist">' +
    '<div class="wa-track active" data-track="t1">01. Florida State University — Information Technology B.S. (3:26)</div>' +
    '<div class="wa-track" data-track="t2">02. McFatter Technical College — Cyber Security A.A.S. (4:21)</div>' +
    '<div class="wa-track" data-track="t3">03. McFatter Technical High School — Magnet Diploma (4:00)</div>' +
    "</div>" +
    '<div class="wa-side">' +
    '<div id="wa-led" class="wa-led"></div>' +
    '<div class="wa-vu"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>' +
    "</div></div>" +
    '<div class="wa-controls">' +
    "<button type=\"button\" title=\"Prev\">|&lt;</button>" +
    "<button type=\"button\" title=\"Play\">&gt;</button>" +
    "<button type=\"button\" title=\"Pause\">||</button>" +
    "<button type=\"button\" title=\"Stop\">[]</button>" +
    "<button type=\"button\" title=\"Next\">&gt;|</button>" +
    "</div>" +
    '<div class="wa-eq"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
    "</div>";

  /* ---------- Forum2000 (Extra Curriculars / FSU ThinkAI) ---------- */
  var forumPosts = {
    welcome: {
      title: "[PINNED] President's Welcome Message",
      html:
        "<h4>President of FSU ThinkAI — Key Responsibilities</h4><ul>" +
        "<li><strong>Strategic Leadership:</strong> Directing the mission of ThinkAI to demystify artificial intelligence for students of all skill levels, fostering a community of \"learning, innovating, and connecting.\"</li>" +
        "<li><strong>Event Orchestration:</strong> Overseeing the planning and execution of interactive workshops, technical deep-dives, and networking events that bridge the gap between academic theory and industry application.</li>" +
        "<li><strong>Stakeholder Management:</strong> Collaborating with FSU faculty and the CCI leadership board to align student initiatives with the university's broader AI@FSU goals and ethical standards.</li>" +
        "</ul>"
    },
    events: {
      title: "Thread: Events We've Run",
      html:
        "<h4>Event Orchestration</h4><p>Overseeing the planning and execution of interactive workshops, technical deep-dives, and networking events that bridge the gap between academic theory and industry application.</p>" +
        "<h4>Outcomes</h4><ul><li>Increased member engagement and a multi-disciplinary community (connecting CS, IT, and Social Science students).</li></ul>"
    },
    award: {
      title: "Thread: FSU CCI Outstanding Student Organization Award",
      html:
        "<h4>Award</h4>" +
        "<p>While I was President, FSU ThinkAI earned the <strong>FSU CCI Outstanding Student Organization Award</strong>.</p>"
    },
    partners: {
      title: "Thread: Partnerships Update",
      html:
        "<h4>Stakeholder Management</h4><p>Collaborating with FSU faculty and the CCI leadership board to align student initiatives with the university's broader AI@FSU goals and ethical standards.</p>" +
        "<h4>Outcomes</h4><ul><li>Collaborative partnerships with other student organizations like STARS Alliance or the Cybersecurity Club.</li></ul>"
    },
    challenges: {
      title: "Thread: Main Challenges",
      html:
        "<h4>Main Challenges</h4><ul>" +
        "<li>Scaling technical concepts (like Large Language Models or Neural Networks) so they are accessible to beginners while remaining valuable for advanced students.</li>" +
        "<li>Navigating the ethical discourse surrounding AI to ensure the organization promotes responsible and academic-honor-compliant usage.</li>" +
        "</ul>"
    },
    skills: {
      title: "Thread: Skill Development &amp; Value Proffered",
      html:
        "<h4>Skill Development &amp; Value Proffered</h4><ul>" +
        "<li><strong>Technical Skills:</strong> Deepening knowledge of Generative AI tools (OpenAI, Gemini), understanding the AI development lifecycle, and staying ahead of industry shifts in machine learning and data science.</li>" +
        "<li><strong>Transferable Skills:</strong> Public speaking, organizational management, community building, and \"Technical Translation\"—the ability to explain high-level AI concepts to a general audience.</li>" +
        "</ul>"
    },
    takeaways: {
      title: "Thread: Takeaways &amp; Reflections",
      html:
        "<h4>Top 3 Takeaways</h4><ol>" +
        "<li><strong>Community-Driven Learning:</strong> The best way to master a disruptive technology is to build a collaborative environment where peers teach peers.</li>" +
        "<li><strong>Strategic Alignment:</strong> Success comes from aligning a small organization's goals with the larger university's mission (AI@FSU).</li>" +
        "<li><strong>Adaptive Leadership:</strong> In a field as fast-moving as AI, leadership requires being \"first to learn\" and \"fast to pivot.\"</li>" +
        "</ol>"
    }
  };

  function forumInit(root) {
    var view = root.querySelector("#forum-view");
    function show(key) {
      var p = forumPosts[key];
      if (!p) return;
      view.innerHTML = "<h4>" + p.title + "</h4>" + p.html;
      root.querySelectorAll(".forum-thread-row").forEach(function (tr) {
        tr.classList.toggle("active", tr.getAttribute("data-thread") === key);
      });
    }
    show("welcome");
    root.querySelectorAll(".forum-thread-row").forEach(function (tr) {
      tr.addEventListener("click", function () {
        show(tr.getAttribute("data-thread"));
      });
    });
  }

  var forumHtml =
    '<div class="forum-root">' +
    '<div class="forum-top">Forum2000 — FSU ThinkAI Community<span class="forum-sub">Hosted on Michael Zuazo OS · Read-only archive simulation</span></div>' +
    '<div class="forum-toolbar">File · Edit · View · Thread · Help · Log in: <strong>guest</strong></div>' +
    '<div class="forum-main">' +
    '<table class="forum-table">' +
    "<tr><th style=\"width:52%\">Topic</th><th>Replies</th><th>Author</th><th>Last post</th></tr>" +
    '<tr class="forum-thread-row active" data-thread="welcome"><td>📌 [PINNED] President\'s Welcome Message</td><td>0</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="events"><td>💬 Events We\'ve Run</td><td>3</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="award"><td>🏆 FSU CCI Outstanding Student Organization Award</td><td>0</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="partners"><td>💬 Partnerships Update</td><td>2</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="challenges"><td>💬 Main Challenges</td><td>1</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="skills"><td>💬 Skill Development &amp; Value Proffered</td><td>1</td><td>MZuazo</td><td>Today</td></tr>' +
    '<tr class="forum-thread-row" data-thread="takeaways"><td>💬 Takeaways &amp; Reflections</td><td>4</td><td>MZuazo</td><td>Today</td></tr>' +
    "</table>" +
    '<div id="forum-view" class="forum-view"></div>' +
    "</div></div>";

  /* ---------- Xbox blade (NeuroForge) ---------- */
  function xboxInit() {}

  var xboxHtml =
    '<div class="xb-root"><div class="xb-overlay">' +
    '<div class="xb-logo-line"><span class="xb-green"></span><span class="xb-title">NeuroForge Systems</span></div>' +
    '<div class="xb-blade"><h3>Featured · Company overview</h3>' +
    "<p>NeuroForge Systems is a forward-thinking AI automation company founded with the mission of helping service-based businesses streamline operations, reduce overhead, and enhance customer engagement through intelligent agents and automated workflows. Specializing in the integration of conversational AI, CRM automation, and scheduling systems, NeuroForge builds custom solutions that empower companies to operate more efficiently without sacrificing personalization.</p>" +
    "<p>The company has developed and deployed AI agents across industries such as home services, healthcare, and retail—automating tasks ranging from voice-based customer intake to calendar syncing, lead generation, and data enrichment. Leveraging tools like OpenAI, Elevenlabs, Twilio, n8n, and React-based front ends, NeuroForge delivers scalable and cost-effective solutions that turn repetitive tasks into intelligent, autonomous processes.</p>" +
    "<p>With a focus on innovation, security, and user experience, NeuroForge positions itself at the intersection of AI development and practical business transformation.</p></div>" +
    '<div class="xb-blade"><h3>System overview</h3>' +
    "<p>Neuro Forge System Agents are a suite of integrated AI-powered automation assistants designed to streamline operations, communications, lead generation, content creation, and customer interaction for modern businesses. Each agent operates independently but can seamlessly collaborate within the Neuro Forge ecosystem to maximize efficiency and deliver a premium automated experience.</p>" +
    "<p>These agents are accessed and operated through several interfaces, with the most popular being a Telegram bot interface. This bot acts as the primary entry point for all interactions. Users simply send messages to the bot, and the system uses natural language understanding to interpret the request. The bot intelligently routes the input to the appropriate agent(s), gathers any required additional information, and returns a concise, action-completed response.</p></div>" +
    '<div class="xb-blade"><h3>Game modes · Core agents</h3>' +
    "<p><strong>Ultimate Assistant</strong> — The central coordinator of all Neuro Forge agents. It intelligently routes user queries to the correct specialized agent, understands user queries, classifies them by intent, and delegates tasks to the appropriate agents.</p>" +
    "<p><strong>Email Agent</strong> — An email automation expert that drafts, sends, retrieves, labels, and replies to emails professionally. Handles proper HTML formatting and maintains consistent communication standards.</p>" +
    "<p><strong>Calendar Agent</strong> — A personal scheduling assistant that manages Google Calendar events and invites. Creates events, fetches schedules, and handles updates using event IDs.</p>" +
    "<p><strong>Contact Agent</strong> — A CRM-style contact manager connected to Airtable, handling customer and lead records. Searches, adds, and updates contact details efficiently.</p>" +
    "<p><strong>Content Creator Agent</strong> — A social media content generator that automates Instagram post creation. Generates captions using GPT and creates high-quality, photorealistic images using Leonardo.Ai.</p>" +
    "<p><strong>Twilio Agent</strong> — An AI phone responder that handles live phone calls for businesses, responding intelligently to customer questions. Provides multi-language support and routes bookings appropriately.</p>" +
    "<p><strong>Lead Generation Agent</strong> — A lead harvesting and outreach automation tool. Collects LinkedIn leads, logs them into Google Sheets, and manages AI-written cold email campaigns.</p></div>" +
    '<div class="xb-blade"><h3>System requirements</h3><dl class="xb-specs">' +
    "<dt>Stack</dt><dd>OpenAI, Elevenlabs, Twilio, n8n, Airtable, React-based front ends</dd>" +
    "<dt>Interface</dt><dd>Telegram bot (primary)</dd>" +
    "<dt>Rating</dt><dd>10/10 — Automates Everything <em>(simulated review)</em></dd>" +
    "</dl>" +
    '<p class="xb-quote">“AVAILABLE NOW — The next level of AI automation.”</p></div>' +
    '<div class="xb-blade"><h3>Business benefits</h3><ul>' +
    "<li>Time Savings: Reduce hours spent on manual outreach, scheduling, and follow-ups</li>" +
    "<li>24/7 Availability: AI-powered team ready to respond around the clock</li>" +
    "<li>Consistency: Professional and brand-aligned messaging across platforms</li>" +
    "<li>Lead Conversion: Improved response speed and quality for better conversion rates</li>" +
    "<li>Data Centralization: Streamlined contact and calendar data in automated systems</li>" +
    "<li>CRM Integration: Seamless connection with existing CRM systems</li>" +
    "<li>Cost Efficiency: Reduced need for multiple admin roles or third-party services</li>" +
    "<li>Human-Like Interactions: Natural conversation through Telegram interface</li>" +
    "<li>Scalability: Easy operational scaling without additional staff</li>" +
    "<li>Cross-Agent Intelligence: Seamless agent collaboration for complete workflow coverage</li>" +
    "</ul></div></div></div>";

  /* ---------- Outlook Express ---------- */
  function outlookInit(root) {
    var form = root.querySelector("#oe-form");
    if (!form) return;
    var sendBtn = root.querySelector(".oe-toolbar button");
    if (sendBtn) {
      sendBtn.addEventListener("click", function (e) {
        e.preventDefault();
        if (typeof form.requestSubmit === "function") form.requestSubmit();
        else form.submit();
      });
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var from = root.querySelector("#oe-from").value.trim();
      var subject = encodeURIComponent(root.querySelector("#oe-subject").value.trim());
      var body = encodeURIComponent("From: " + from + "\n\n" + root.querySelector("#oe-body").value);
      window.location.href = "mailto:michaelczuazo@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  var outlookHtml =
    '<div class="oe-root">' +
    '<div class="oe-menubar">File · Edit · View · Insert · Format · Tools · Message · Help</div>' +
    '<div class="oe-toolbar">' +
    "<button type=\"button\">Send</button><button type=\"button\">Cut</button><button type=\"button\">Copy</button>" +
    "<button type=\"button\">Paste</button><button type=\"button\">Attach</button><button type=\"button\">Addresses</button>" +
    "</div>" +
    '<div class="oe-main">' +
    '<div class="oe-tree">' +
    '<div class="oe-tree-title">Folders</div><ul><li>📥 Inbox</li><li>📤 Outbox</li><li>✉️ Sent Items</li><li>📝 Drafts</li></ul>' +
    '<div class="oe-tree-title" style="margin-top:10px">Contacts</div><ul>' +
    "<li>📧 michaelczuazo@gmail.com</li>" +
    "<li>📞 (954)-224-8558</li>" +
    "<li>🔗 <a href=\"https://github.com/MichaelCelic\" target=\"_blank\" rel=\"noopener noreferrer\">github.com/MichaelCelic</a></li>" +
    "<li>🔗 <a href=\"https://www.linkedin.com/in/michael-zuazo\" target=\"_blank\" rel=\"noopener noreferrer\">www.linkedin.com/in/michael-zuazo</a></li>" +
    "<li>📍 Tallahassee, FL</li>" +
    "</ul></div>" +
    '<form id="oe-form" class="oe-compose">' +
    '<div class="oe-row"><label for="oe-to">To:</label><input id="oe-to" type="email" value="michaelczuazo@gmail.com" readonly></div>' +
    '<div class="oe-row"><label for="oe-from">From:</label><input id="oe-from" type="email" placeholder="your@email.com" required></div>' +
    '<div class="oe-row"><label for="oe-subject">Subject:</label><input id="oe-subject" type="text" placeholder="Hello from your resume site"></div>' +
    '<div class="oe-row" style="grid-template-columns:56px 1fr;align-items:start"><label for="oe-body">Message:</label><textarea id="oe-body" class="oe-body" placeholder="Type your message..."></textarea></div>' +
    '<div class="oe-hint">Send opens your mail client with a mailto: link (same behavior as the original site intent).</div>' +
    "<button type=\"submit\" style=\"align-self:flex-start;margin-top:4px;padding:4px 16px;font:11px Tahoma\">Send</button>" +
    "</form></div></div>";

  /* ---------- System Properties ---------- */
  var sysTabs = {
    general:
      '<div class="sys-general">' +
      '<img src="./Assets/profile.png" alt="">' +
      '<div><div class="sys-dl">' +
      "<dt>Computer:</dt><dd>Michael Zuazo</dd>" +
      "<dt>Operating System:</dt><dd>Michael Zuazo OS</dd>" +
      "<dt>Location:</dt><dd>Tallahassee, FL</dd>" +
      "<dt>Role:</dt><dd>AI Researcher | IT Student | Help Desk Technician</dd>" +
      "<dt>Resume:</dt><dd><a href=\"./Assets/Michael_Zuazo_IT_Resume_2026.pdf\" download=\"Michael_Zuazo_IT_Resume_2026.pdf\">Download Michael Zuazo IT Resume 2026 (PDF)</a></dd>" +
      "</div></div></div>",
    skills:
      "<p style=\"margin:0 0 8px;font-weight:700\">Installed programs (skills)</p><ul class=\"sys-list\">" +
      "<li><span>Python</span><span class=\"sys-ver\">3.12</span></li>" +
      "<li><span>C++</span><span class=\"sys-ver\">20</span></li>" +
      "<li><span>Java</span><span class=\"sys-ver\">21</span></li>" +
      "<li><span>SQL database management</span><span class=\"sys-ver\">2026</span></li>" +
      "<li><span>Docker</span><span class=\"sys-ver\">27.x</span></li>" +
      "<li><span>Git</span><span class=\"sys-ver\">2.x</span></li>" +
      "<li><span>Bash</span><span class=\"sys-ver\">5.x</span></li>" +
      "<li><span>HTML</span><span class=\"sys-ver\">5</span></li>" +
      "<li><span>Cloud computing</span><span class=\"sys-ver\">1.0</span></li>" +
      "<li><span>Ollama</span><span class=\"sys-ver\">0.3</span></li>" +
      "<li><span>n8n</span><span class=\"sys-ver\">1.0</span></li>" +
      "<li><span>Airtable</span><span class=\"sys-ver\">2026</span></li>" +
      "<li><span>Lovable</span><span class=\"sys-ver\">1.0</span></li>" +
      "</ul>" +
      "<p style=\"margin:12px 0 0;font-size:10px;color:#555\">AI Development &amp; Programming: Python, C++, Java, SQL database management · Tools: Docker, Git, Bash, HTML, Cloud computing, Ollama, n8n, Airtable, Lovable</p>",
    certs:
      "<p style=\"margin:0 0 8px;font-weight:700\">Device drivers (certifications)</p><ul class=\"sys-list\">" +
      '<li><span>CompTIA A+</span><span class="sys-cert-ok">Active</span></li>' +
      '<li><span>Network+</span><span class="sys-cert-ok">Active</span></li>' +
      '<li><span>Security+ (program completed)</span><span class="sys-cert-ok">Active</span></li>' +
      '<li><span>Wise Device repair</span><span class="sys-cert-ok">Active</span></li>' +
      "</ul>" +
      "<p style=\"margin:12px 0 0;font-size:10px;color:#555\">Certifications: CompTIA A+, Network+, Security+ (program completed), Wise Device repair</p>",
    hardware:
      "<p style=\"margin:0 0 8px;font-weight:700\">Hardware</p><ul class=\"sys-list\">" +
      "<li><span>Brain</span><span class=\"sys-ver\">Overclocked</span></li>" +
      "<li><span>Coffee</span><span class=\"sys-ver\">Required</span></li>" +
      "<li><span>Installation troubleshooting &amp; Technical support</span><span class=\"sys-ver\">Enabled</span></li>" +
      "</ul>"
  };

  function sysInit(root) {
    var panel = root.querySelector("#sys-panel");
    function show(tab) {
      panel.innerHTML = sysTabs[tab] || "";
      root.querySelectorAll(".sys-tab").forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-tab") === tab);
      });
    }
    show("general");
    root.querySelectorAll(".sys-tab").forEach(function (btn) {
      btn.addEventListener("click", function () {
        show(btn.getAttribute("data-tab"));
      });
    });
  }

  var sysHtml =
    '<div class="sys-root">' +
    '<div class="sys-tabs">' +
    '<button type="button" class="sys-tab active" data-tab="general">General</button>' +
    '<button type="button" class="sys-tab" data-tab="skills">Skills</button>' +
    '<button type="button" class="sys-tab" data-tab="certs">Certifications</button>' +
    '<button type="button" class="sys-tab" data-tab="hardware">Hardware</button>' +
    "</div>" +
    '<div id="sys-panel" class="sys-panel"></div>' +
    "</div>";

  Object.assign(window.MZApps, {
    winamp: { fill: true, html: winampHtml, init: winampInit },
    forum: { fill: true, html: forumHtml, init: forumInit },
    xbox: { fill: true, html: xboxHtml, init: xboxInit },
    outlook: { fill: true, html: outlookHtml, init: outlookInit },
    mycomputer: { fill: true, html: sysHtml, init: sysInit }
  });
})();
