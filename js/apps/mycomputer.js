export const myComputerApp = {
  id: "mycomputer",
  title: "My Computer - About Me",
  icon: "🖥️",
  render() {
    return `
      <div style="height:100%;display:grid;grid-template-rows:auto 1fr;font-size:12px;">
        <div style="display:flex;gap:6px;padding:8px;border-bottom:1px solid #a7b7c8;background:#eef3f9;">
          <button class="sys-tab" data-tab="general">General</button>
          <button class="sys-tab" data-tab="skills">Skills</button>
          <button class="sys-tab" data-tab="certs">Certifications</button>
          <button class="sys-tab" data-tab="hardware">Hardware</button>
        </div>
        <div id="sys-content" style="padding:12px;overflow:auto;"></div>
      </div>
    `;
  },
  init(root) {
    const content = {
      general: `<h3>Michael Zuazo</h3><p>Location: Tallahassee, FL</p><p>Role: AI Researcher | IT Student | Help Desk Technician</p>`,
      skills: `<ul><li>Python v3.12</li><li>C++ v20</li><li>Java v21</li><li>SQL Database Management v2.1</li><li>Docker v27</li><li>Git v2.4</li><li>Bash v5</li><li>HTML v5</li><li>Cloud Computing v1.0</li><li>Ollama v0.3</li><li>n8n v1.0</li><li>Airtable v2026</li><li>Lovable v1.0</li></ul>`,
      certs: `<ul><li>CompTIA A+ — Active</li><li>Network+ — Active</li><li>Security+ (program completed) — Active</li><li>Wise Device repair — Active</li></ul>`,
      hardware: `<ul><li>Brain: Overclocked</li><li>Coffee: Required</li><li>Creativity Engine: Online</li><li>Troubleshooting Module: Always Running</li></ul>`
    };
    const panel = root.querySelector("#sys-content");
    const show = (tab) => { panel.innerHTML = content[tab]; };
    show("general");
    root.querySelectorAll(".sys-tab").forEach((btn) => {
      btn.addEventListener("click", () => show(btn.dataset.tab));
    });
  }
};
