export const outlookApp = {
  id: "outlook",
  title: "Outlook Express - Contact Me",
  icon: "📧",
  render() {
    return `
      <div style="height:100%;display:grid;grid-template-columns:220px 1fr;font:12px Tahoma,sans-serif;">
        <aside style="border-right:1px solid #b8c9dd;background:#edf3fb;padding:10px;">
          <h3 style="margin-top:0;">Contacts</h3>
          <div>Email: michaelczuazo@gmail.com</div>
          <div>Phone: (954)-224-8558</div>
          <div>GitHub: github.com/MichaelCelic</div>
          <div>LinkedIn: www.linkedin.com/in/michael-zuazo</div>
        </aside>
        <form id="mail-form" style="padding:10px;display:grid;grid-template-rows:auto auto auto 1fr auto;gap:8px;">
          <label>To: <input value="michaelczuazo@gmail.com" readonly></label>
          <label>From: <input id="fromEmail" required></label>
          <label>Subject: <input id="subjectLine"></label>
          <label>Message:<textarea id="messageBody" style="width:100%;height:100%;min-height:160px;"></textarea></label>
          <button type="submit">Send</button>
        </form>
      </div>
    `;
  },
  init(root) {
    root.querySelector("#mail-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const from = root.querySelector("#fromEmail").value.trim();
      const subject = encodeURIComponent(root.querySelector("#subjectLine").value.trim());
      const message = encodeURIComponent(`From: ${from}\n\n${root.querySelector("#messageBody").value}`);
      window.location.href = `mailto:michaelczuazo@gmail.com?subject=${subject}&body=${message}`;
    });
  }
};
