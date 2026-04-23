export const forumApp = {
  id: "forum",
  title: "MSN Groups - Extra Curriculars",
  icon: "🏆",
  render() {
    return `
      <div style="height:100%;font:12px Tahoma,sans-serif;background:#f5f9ff;overflow:auto;">
        <div style="padding:10px;background:#1a64c9;color:#fff;font-weight:700;">FSU ThinkAI - Community Forum</div>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>
            <tr class="thread" data-k="welcome"><td style="padding:8px;border:1px solid #c6d8ef;">📌 [PINNED] President's Welcome Message</td></tr>
            <tr class="thread" data-k="events"><td style="padding:8px;border:1px solid #c6d8ef;">💬 Thread: Events We've Run</td></tr>
            <tr class="thread" data-k="partner"><td style="padding:8px;border:1px solid #c6d8ef;">💬 Thread: Partnerships Update</td></tr>
            <tr class="thread" data-k="takeaways"><td style="padding:8px;border:1px solid #c6d8ef;">💬 Thread: Takeaways & Reflections</td></tr>
          </tbody>
        </table>
        <div id="forum-post" style="padding:10px;border-top:1px solid #c6d8ef;"></div>
      </div>
    `;
  },
  init(root) {
    const posts = {
      welcome: "<b>Strategic Leadership:</b> Directing the mission of ThinkAI to demystify artificial intelligence for students of all skill levels, fostering a community of \"learning, innovating, and connecting.\"",
      events: "<b>Event Orchestration:</b> Overseeing the planning and execution of interactive workshops, technical deep-dives, and networking events that bridge the gap between academic theory and industry application.",
      partner: "<b>Stakeholder Management:</b> Collaborating with FSU faculty and the CCI leadership board to align student initiatives with the university's broader AI@FSU goals and ethical standards.",
      takeaways: "<ol><li><b>Community-Driven Learning:</b> The best way to master a disruptive technology is to build a collaborative environment where peers teach peers.</li><li><b>Strategic Alignment:</b> Success comes from aligning a small organization's goals with the larger university's mission (AI@FSU).</li><li><b>Adaptive Leadership:</b> In a field as fast-moving as AI, leadership requires being \"first to learn\" and \"fast to pivot.\"</li></ol>"
    };
    const area = root.querySelector("#forum-post");
    const show = (k) => { area.innerHTML = posts[k]; };
    show("welcome");
    root.querySelectorAll(".thread").forEach((row) => row.addEventListener("click", () => show(row.dataset.k)));
  }
};
