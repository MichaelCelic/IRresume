export const xboxApp = {
  id: "xbox",
  title: "NeuroForge Systems - Xbox Edition",
  icon: "🤖",
  render() {
    return `
      <div style="height:100%;padding:18px;color:#d8ffd2;background:radial-gradient(circle at top,#1d4b1a 0%,#0b1b0d 60%);font-family:Arial,sans-serif;overflow:auto;">
        <h2 style="margin-top:0;color:#8cff7d;">THE NEXT LEVEL OF AI AUTOMATION</h2>
        <p>NeuroForge Systems is a forward-thinking AI automation company founded with the mission of helping service-based businesses streamline operations, reduce overhead, and enhance customer engagement through intelligent agents and automated workflows.</p>
        <p>Leveraging tools like OpenAI, Elevenlabs, Twilio, n8n, and React-based front ends, NeuroForge delivers scalable and cost-effective solutions that turn repetitive tasks into intelligent, autonomous processes.</p>
        <h3>Core Agents</h3>
        <ul>
          <li>Ultimate Assistant</li><li>Email Agent</li><li>Calendar Agent</li><li>Contact Agent</li><li>Content Creator Agent</li><li>Twilio Agent</li><li>Lead Generation Agent</li>
        </ul>
        <h3>Business Benefits</h3>
        <ul>
          <li>24/7 Availability: AI-powered team ready to respond around the clock</li>
          <li>Lead Conversion: Improved response speed and quality for better conversion rates</li>
          <li>Scalability: Easy operational scaling without additional staff</li>
        </ul>
      </div>
    `;
  },
  init() {}
};
