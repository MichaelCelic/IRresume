/**
 * Rich app UIs (plain script for file:// compatibility).
 * window.MZApps[id] = { fill?: boolean, html: string, init(root: HTMLElement): void }
 */
(function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  const aimBuddyTitle = {
    fsu: "FSU Research Lab",
    arcvale: "Arcvale Studios",
    memorial: "Memorial Healthcare",
    helpdesk: "FSU Help Desk",
    batteries: "Batteries Plus",
    intern: "Memorial Hospital"
  };

  const aimScreenNames = {
    fsu: "FSU_HiringMgr",
    arcvale: "ArcvaleRecruiter",
    memorial: "Memorial_IT",
    helpdesk: "FSU_SupportLead",
    batteries: "BatteriesPlusDM",
    intern: "MemorialInternCoord"
  };

  const aimChats = {
    fsu: [
      { who: "them", t: "9:00 AM", text: "Hey! So what do you do here at FSU?" },
      { who: "me", t: "9:01 AM", text: "Researched machine learning algorithms to enhance data analysis project outcomes" },
      { who: "me", t: "9:01 AM", text: "Presented findings in reports to stakeholders, facilitating informed decision-making" },
      { who: "me", t: "9:02 AM", text: "Attended industry conferences to gain insights on emerging AI technologies" }
    ],
    arcvale: [
      { who: "them", t: "9:10 AM", text: "What was your role at Arcvale Studios?" },
      { who: "me", t: "9:11 AM", text: "Worked on the DrawDrills program, focusing on backend development using Python and GraphQL" },
      { who: "me", t: "9:11 AM", text: "Modified and optimized GraphQL queries and mutations, improving API schema design" },
      { who: "me", t: "9:12 AM", text: "Contributed to overall application performance and maintainability" },
      { who: "me", t: "9:12 AM", text: "Gained hands-on experience with Strawberry GraphQL, FastAPI, and containerized development using Docker" }
    ],
    memorial: [
      { who: "them", t: "9:20 AM", text: "What did you build for Memorial Healthcare System?" },
      { who: "me", t: "9:21 AM", text: "Led full-stack development of an internal scheduling application for departmental use" },
      { who: "me", t: "9:21 AM", text: "Built the backend using Python (FastAPI) and the frontend with React.js" },
      { who: "me", t: "9:22 AM", text: "Integrated secure user authentication, real-time calendar updates, and RESTful API endpoints" },
      { who: "me", t: "9:22 AM", text: "Collaborated with IT and clinical teams to gather requirements and deliver a scalable, HIPAA-compliant solution" }
    ],
    helpdesk: [
      { who: "them", t: "9:30 AM", text: "What did you handle at FSU Help Desk?" },
      { who: "me", t: "9:31 AM", text: "Provided technical assistance for computer systems, software, and hardware, resolving issues promptly" },
      { who: "me", t: "9:31 AM", text: "Assisted students and professors with connectivity, hardware, and software troubleshooting" },
      { who: "me", t: "9:32 AM", text: "Maintained, installed, and updated faculty systems to support academic operations and enhance user experience" }
    ],
    batteries: [
      { who: "them", t: "9:40 AM", text: "Tell me about Batteries Plus." },
      { who: "me", t: "9:41 AM", text: "Managed mobile device repairs and battery diagnostics" },
      { who: "me", t: "9:41 AM", text: "Handled customer reception and service operations" }
    ],
    intern: [
      { who: "them", t: "9:50 AM", text: "And your internship at Memorial Hospital System?" },
      { who: "me", t: "9:51 AM", text: "Developed backend tools using Java and Python for risk analysis" },
      { who: "me", t: "9:51 AM", text: "Provided on-site support to Joe DiMaggio offices" }
    ]
  };

  function aimPaint(root, key) {
    const log = root.querySelector("#aim-chat-log");
    const title = root.querySelector("#aim-chat-target");
    if (title) title.textContent = aimScreenNames[key] || "Buddy";

    const rows = aimChats[key] || [];
    log.innerHTML = rows
      .map(function (r) {
        const isMe = r.who === "me";
        const nm = isMe ? "MichaelZ" : aimScreenNames[key];
        const nmClass = isMe ? "aim-name-me" : "aim-name-buddy";
        const run = isMe ? '<span class="aim-running" title="Running">🏃</span>' : "";
        return (
          '<div class="aim-msg"><span class="aim-ts">[' +
          esc(r.t) +
          "]</span> " +
          run +
          '<span class="' +
          nmClass +
          '">' +
          esc(nm) +
          ":</span> " +
          esc(r.text) +
          "</div>"
        );
      })
      .join("");

    root.querySelectorAll(".aim-buddy").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-buddy") === key);
    });
  }

  function aimInit(root) {
    aimPaint(root, "fsu");

    root.querySelectorAll(".aim-group-hd").forEach(function (hd) {
      hd.addEventListener("click", function () {
        hd.classList.toggle("collapsed");
      });
    });

    root.querySelectorAll(".aim-buddy").forEach(function (row) {
      row.addEventListener("click", function () {
        aimPaint(root, row.getAttribute("data-buddy"));
      });
    });
  }

  const myspaceDetails = {
    nn: "Designed and implemented a convolutional neural network (CNN) using Python. Leveraged libraries such as TensorFlow and Keras to perform image classification tasks. The project focused on developing foundational deep learning skills and understanding of neural network architecture, training, and evaluation.",
    face: "Developed a facial recognition application in Python that provides real-time face detection and identification. Utilized libraries such as OpenCV and face_recognition to map facial features and associate them with corresponding names. The system can enroll new faces and perform recognition based on stored image data.",
    neuro: "Founded AI startup integrating OpenAI, Elevenlabs, n8n, and Loveable. NeuroForge builds custom AI automation solutions for service-based businesses—from conversational AI and CRM automation to scheduling and lead generation.",
    screen: "Built the front end of ScreenWager, a React Native application that enables students to bet on their friends' ability to reduce screen time. The project combines social accountability with gamification to encourage healthier screen habits. Collaborated on UI design, navigation, and component integration for iOS and Android platforms.",
    bella:
      "<p>Desktop AI companion with voice and text interaction and emotional expression. Digital companion designed to create emotional connections through conversation, voice synthesis, and visual expression.</p><ul><li>Built desktop AI companion (Electron) with hybrid AI pipeline: OpenAI GPT-3.5 for dialogue, ElevenLabs for text-to-speech, and Transformers.js (Xenova Whisper) for local speech recognition.</li><li>Implemented multi-provider cloud API module supporting OpenAI, Qwen, ERNIE, and GLM with shared conversation history and personality system prompt (50+ traits).</li><li>Designed secure Electron app with contextIsolation, preload bridge, frameless window, system tray, and minimize-to-tray.</li><li>Delivered personality-driven chat UI with overlay panel, message history cap, voice toggle, and emotional expression via HTML5 video backgrounds.</li><li>Shipped cross-platform builds (Windows, macOS, Linux) via electron-builder and model download workflow.</li></ul>"
  };

  function myspaceSetDetail(root, key) {
    const box = root.querySelector("#ms-detail");
    const html = myspaceDetails[key];
    if (!html) return;
    if (html.indexOf("<") !== -1) {
      box.innerHTML = html;
    } else {
      box.textContent = html;
    }
    root.querySelectorAll(".ms-friend").forEach(function (f) {
      f.classList.toggle("active", f.getAttribute("data-key") === key);
    });
  }

  function myspaceInit(root) {
    myspaceSetDetail(root, "nn");
    root.querySelectorAll(".ms-friend").forEach(function (f) {
      f.addEventListener("click", function () {
        var k = f.getAttribute("data-key");
        if (!k) return;
        myspaceSetDetail(root, k);
      });
    });
  }

  const aimHtml =
    '<div class="aim-shell">' +
    '<div class="aim-menubar"><span>File</span><span>Buddy</span><span>People</span><span>Help</span></div>' +
    '<div class="aim-main">' +
    '<aside class="aim-buddies">' +
    '<div class="aim-userbar">' +
    '<img src="./Assets/profile.png" alt="">' +
    '<div class="aim-user-meta">' +
    '<div class="aim-sn">MichaelZuazo</div>' +
    '<div class="aim-status">Status: <strong>Away</strong></div>' +
    "</div></div>" +
    '<div class="aim-buddy-scroll">' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 🏢 ' +
    esc(aimBuddyTitle.fsu) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy active" data-buddy="fsu">AI Researcher @ FSU</div></div></div>' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 💻 ' +
    esc(aimBuddyTitle.arcvale) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy" data-buddy="arcvale">Backend Dev Intern</div></div></div>' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 🏥 ' +
    esc(aimBuddyTitle.memorial) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy" data-buddy="memorial">Full-Stack Developer (Contract)</div></div></div>' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 🖥️ ' +
    esc(aimBuddyTitle.helpdesk) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy" data-buddy="helpdesk">Help Desk Technician</div></div></div>' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 🔋 ' +
    esc(aimBuddyTitle.batteries) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy" data-buddy="batteries">Head Technician / Asst Manager</div></div></div>' +
    '<div class="aim-group">' +
    '<div class="aim-group-hd">▼ 🏥 ' +
    esc(aimBuddyTitle.intern) +
    "</div>" +
    '<div class="aim-group-body"><div class="aim-buddy" data-buddy="intern">Intern Technician</div></div></div>' +
    "</div></aside>" +
    '<section class="aim-chat">' +
    '<div class="aim-chat-titlebar">Instant Message — <span id="aim-chat-target">FSU_HiringMgr</span></div>' +
    '<div id="aim-chat-log" class="aim-chat-log" role="log"></div>' +
    "</section></div></div>";

  const myspaceHtml =
    '<div class="ms-root">' +
    '<div class="ms-inner">' +
    '<table class="ms-table"><tr>' +
    '<td class="ms-col-left">' +
    '<div class="ms-panel ms-profile-pic">' +
    '<img src="./Assets/profile.png" alt="Michael Zuazo">' +
    '<div class="ms-contact">' +
    "<strong>Mood:</strong> shipping code ✨<br>" +
    "<strong>Here for:</strong> Networking, Projects<br>" +
    "<strong>Location:</strong> Tallahassee, FL" +
    "</div></div></td>" +
    '<td class="ms-col-mid">' +
    '<div class="ms-panel">' +
    '<h1 class="ms-headline">Michael Zuazo 🖤</h1>' +
    '<div class="ms-marquee-wrap"><div class="ms-marquee">★ thanks 4 visiting my page — click a Top Friend 2 read project details ★</div></div>' +
    '<div class="ms-section-title">::: About Me :::</div>' +
    '<div class="ms-about">AI Researcher | IT Student | Help Desk Technician — building things that blend ML, full-stack apps, and real campus IT support.</div>' +
    '<div class="ms-section-title">::: Latest Blog Entry :::</div>' +
    '<div class="ms-about">Just shipped updates to my NeuroForge automation stack. n8n + OpenAI + Twilio = chef kiss 💋</div>' +
    '<div class="ms-section-title">::: Project spotlight :::</div>' +
    '<div id="ms-detail" class="ms-detail"></div>' +
    '<div class="ms-now-playing">Currently Playing: <span>Linkin Park — Numb (2003)</span> <em style="color:#aaa">(flavor text)</em></div>' +
    "</div></td>" +
    '<td class="ms-col-right">' +
    '<div class="ms-panel">' +
    '<div class="ms-top8-title">Michael\'s Top Friends</div>' +
    '<div class="ms-top8-grid">' +
    '<div class="ms-friend" data-key="nn"><div class="ms-friend-avatar" style="font-size:22px">🧠</div><div class="ms-friend-name">Neural Network Dev</div></div>' +
    '<div class="ms-friend" data-key="face"><div class="ms-friend-avatar" style="font-size:22px">📷</div><div class="ms-friend-name">Facial Recognition</div></div>' +
    '<div class="ms-friend" data-key="neuro"><div class="ms-friend-avatar" style="font-size:22px">⚡</div><div class="ms-friend-name">NeuroForge Systems</div></div>' +
    '<div class="ms-friend" data-key="screen"><div class="ms-friend-avatar" style="font-size:22px">📱</div><div class="ms-friend-name">ScreenWager</div></div>' +
    '<div class="ms-friend" data-key="bella"><div class="ms-friend-avatar" style="font-size:22px">💜</div><div class="ms-friend-name">Bella AI Companion</div></div>' +
    '<div class="ms-friend" style="cursor:default;opacity:0.55"><div class="ms-friend-avatar" style="font-size:16px">?</div><div class="ms-friend-name">Add me!</div></div>' +
    '<div class="ms-friend" style="cursor:default;opacity:0.55"><div class="ms-friend-avatar" style="font-size:16px">?</div><div class="ms-friend-name">Thx 4 the add</div></div>' +
    '<div class="ms-friend" style="cursor:default;opacity:0.55"><div class="ms-friend-avatar" style="font-size:16px">★</div><div class="ms-friend-name">PC 4 Life</div></div>' +
    "</div>" +
    '<div class="ms-section-title">::: Comments :::</div>' +
    '<div class="ms-comments">' +
    '<div class="ms-comment"><b>xXDevDanXx:</b> bro ur projects section goes hard</div>' +
    '<div class="ms-comment"><b>Tom:</b> thanks for being my friend (this is a simulation)</div>' +
    '<div class="ms-comment"><b>ThinkAI_club:</b> see u at the next workshop 🔥</div>' +
    "</div></div></td></tr></table></div></div>";

  window.MZApps = {
    aim: {
      fill: true,
      html: aimHtml,
      init: aimInit
    },
    myspace: {
      fill: true,
      html: myspaceHtml,
      init: myspaceInit
    }
  };
})();
