export const winampApp = {
  id: "winamp",
  title: "WINAMP - Education",
  icon: "🎓",
  render() {
    return `
      <div style="height:100%;background:#2d3042;color:#d8ff7a;font:12px 'Courier New',monospace;display:grid;grid-template-rows:auto 1fr;">
        <div style="padding:8px;border-bottom:1px solid #4f5162;">WINAMP</div>
        <div style="display:grid;grid-template-columns:240px 1fr;min-height:0;">
          <div style="border-right:1px solid #4f5162;overflow:auto;">
            <button class="trk" data-trk="t1">Track 01 - Florida State University - Information Technology B.S. (3:26)</button>
            <button class="trk" data-trk="t2">Track 02 - McFatter Technical College - Cyber Security A.A.S. (4:21)</button>
            <button class="trk" data-trk="t3">Track 03 - McFatter Technical High School - Magnet Diploma (4:00)</button>
          </div>
          <div id="winamp-display" style="padding:12px;color:#f2f7dd;"></div>
        </div>
      </div>
    `;
  },
  init(root) {
    const panel = root.querySelector("#winamp-display");
    const tracks = {
      t1: "Florida State University, College of Communication & Information. Major: Information Technology (Aug 2023 - May 2026).",
      t2: "McFatter Technical College. IT & Cyber Security (Aug 2017 - Jun 2021).",
      t3: "McFatter Technical High School. Magnet Program (2017 - 2021)."
    };
    const show = (id) => { panel.textContent = tracks[id]; };
    show("t1");
    root.querySelectorAll(".trk").forEach((btn) => {
      btn.style.cssText = "display:block;width:100%;text-align:left;background:#272b3c;color:#c9ff72;border:0;border-bottom:1px solid #4a5068;padding:8px;cursor:pointer;";
      btn.addEventListener("click", () => show(btn.dataset.trk));
    });
  }
};
