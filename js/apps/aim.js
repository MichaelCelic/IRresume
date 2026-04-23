export const aimApp = {
  id: "aim",
  title: "AIM - My Experience",
  icon: "📁",
  render() {
    return `
      <div class="aim-app" style="display:grid;grid-template-columns:230px 1fr;height:100%;font:12px Arial,sans-serif;">
        <aside style="border-right:1px solid #9bb7df;background:#eef5ff;padding:8px;overflow:auto;">
          <div style="font-weight:700;margin-bottom:8px;">Michael Zuazo - Away</div>
          <div class="aim-buddy" data-buddy="fsu">🏢 FSU Research Lab</div>
          <div class="aim-buddy" data-buddy="arcvale">💻 Arcvale Studios</div>
          <div class="aim-buddy" data-buddy="memorial">🏥 Memorial Healthcare</div>
          <div class="aim-buddy" data-buddy="helpdesk">🖥️ FSU Help Desk</div>
          <div class="aim-buddy" data-buddy="batteries">🔋 Batteries Plus</div>
          <div class="aim-buddy" data-buddy="intern">🏥 Memorial Hospital</div>
        </aside>
        <section style="padding:8px;overflow:auto;">
          <div id="aim-chat-log" style="background:#fff;border:1px solid #8aa5c7;height:100%;padding:8px;"></div>
        </section>
      </div>
    `;
  },
  init(root) {
    const chats = {
      fsu: [
        "Buddy [9:00]: Hey! So what do you do here at FSU?",
        "MichaelZ [9:01]: Researched machine learning algorithms to enhance data analysis project outcomes",
        "MichaelZ [9:02]: Presented findings in reports to stakeholders, facilitating informed decision-making",
        "MichaelZ [9:03]: Attended industry conferences to gain insights on emerging AI technologies"
      ],
      arcvale: [
        "Buddy [9:10]: What was your role at Arcvale Studios?",
        "MichaelZ [9:11]: Worked on the DrawDrills program, focusing on backend development using Python and GraphQL",
        "MichaelZ [9:12]: Modified and optimized GraphQL queries and mutations, improving API schema design",
        "MichaelZ [9:13]: Contributed to overall application performance and maintainability",
        "MichaelZ [9:14]: Gained hands-on experience with Strawberry GraphQL, FastAPI, and containerized development using Docker"
      ],
      memorial: [
        "Buddy [9:20]: What did you build for Memorial Healthcare System?",
        "MichaelZ [9:21]: Led full-stack development of an internal scheduling application for departmental use",
        "MichaelZ [9:22]: Built the backend using Python (FastAPI) and the frontend with React.js",
        "MichaelZ [9:23]: Integrated secure user authentication, real-time calendar updates, and RESTful API endpoints",
        "MichaelZ [9:24]: Collaborated with IT and clinical teams to gather requirements and deliver a scalable, HIPAA-compliant solution"
      ],
      helpdesk: [
        "Buddy [9:30]: What did you handle at FSU Help Desk?",
        "MichaelZ [9:31]: Provided technical assistance for computer systems, software, and hardware, resolving issues promptly",
        "MichaelZ [9:32]: Assisted students and professors with connectivity, hardware, and software troubleshooting",
        "MichaelZ [9:33]: Maintained, installed, and updated faculty systems to support academic operations and enhance user experience"
      ],
      batteries: [
        "Buddy [9:40]: Tell me about Batteries Plus.",
        "MichaelZ [9:41]: Managed mobile device repairs and battery diagnostics",
        "MichaelZ [9:42]: Handled customer reception and service operations"
      ],
      intern: [
        "Buddy [9:50]: And your internship at Memorial Hospital System?",
        "MichaelZ [9:51]: Developed backend tools using Java and Python for risk analysis",
        "MichaelZ [9:52]: Provided on-site support to Joe DiMaggio offices"
      ]
    };
    const log = root.querySelector("#aim-chat-log");
    const paint = (k) => {
      log.innerHTML = chats[k].map((line) => `<div style="margin:0 0 7px;">${line}</div>`).join("");
    };
    paint("fsu");
    root.querySelectorAll(".aim-buddy").forEach((item) => {
      item.style.cssText = "padding:5px 6px;border-radius:4px;cursor:pointer;margin-bottom:4px;";
      item.addEventListener("click", () => paint(item.dataset.buddy));
    });
  }
};
