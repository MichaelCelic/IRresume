export const myspaceApp = {
  id: "myspace",
  title: "MySpace - My Projects",
  icon: "🌐",
  render() {
    return `
      <div style="height:100%;background:#130d14;color:#fff;font:12px Arial,sans-serif;overflow:auto;">
        <div style="padding:10px;background:#221127;border-bottom:2px solid #5b214f;">
          <h2 style="margin:0;color:#ffb4df;text-shadow:0 0 10px #ff58c9;">Michael Zuazo 🖤</h2>
          <div>Currently Playing: Linkin Park - Numb</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,minmax(120px,1fr));gap:8px;padding:10px;">
          <button class="friend-btn" data-key="nn">Neural Network Development</button>
          <button class="friend-btn" data-key="face">Facial Recognition System</button>
          <button class="friend-btn" data-key="neuro">NeuroForge Systems</button>
          <button class="friend-btn" data-key="screen">ScreenWager Mobile App</button>
          <button class="friend-btn" data-key="bella">Bella AI Companion</button>
        </div>
        <div id="myspace-detail" style="margin:10px;border:1px solid #6c2f5f;padding:10px;background:#281530;"></div>
      </div>
    `;
  },
  init(root) {
    const details = {
      nn: "Designed and implemented a convolutional neural network (CNN) using Python. Leveraged libraries such as TensorFlow and Keras to perform image classification tasks. The project focused on developing foundational deep learning skills and understanding of neural network architecture, training, and evaluation.",
      face: "Developed a facial recognition application in Python that provides real-time face detection and identification. Utilized libraries such as OpenCV and face_recognition to map facial features and associate them with corresponding names. The system can enroll new faces and perform recognition based on stored image data.",
      neuro: "Founded AI startup integrating OpenAI, Elevenlabs, n8n, and Loveable. NeuroForge builds custom AI automation solutions for service-based businesses—from conversational AI and CRM automation to scheduling and lead generation.",
      screen: "Built the front end of ScreenWager, a React Native application that enables students to bet on their friends' ability to reduce screen time. The project combines social accountability with gamification to encourage healthier screen habits. Collaborated on UI design, navigation, and component integration for iOS and Android platforms.",
      bella: "Desktop AI companion with voice and text interaction and emotional expression. Digital companion designed to create emotional connections through conversation, voice synthesis, and visual expression."
    };
    const box = root.querySelector("#myspace-detail");
    const set = (k) => { box.textContent = details[k]; };
    set("nn");
    root.querySelectorAll(".friend-btn").forEach((b) => {
      b.style.cssText = "border:1px solid #e778c8;background:#3c1e3c;color:#fff;padding:8px;border-radius:4px;";
      b.addEventListener("click", () => set(b.dataset.key));
    });
  }
};
