(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = el.getAttribute("data-scroll");
      const btn = document.querySelector(`.control[data-id="${id}"]`);
      if (btn) btn.click();
    });
  });

  // ---- EN / DE TRANSLATIONS ----
  const dict = {
    en: {
      hero_hello: "Hello,",
      hero_im: "I’m",
      hero_desc:
        "Full-Stack Developer (Angular + NestJS) with experience building a real-time Condition Monitoring system for industrial machines. I worked on the end-to-end flow: Angular UI, REST APIs, WebSocket streaming, time-series data in InfluxDB and visualization. Currently expanding AI skills and improving German (A2 → B1).",
      btn_contact: "Get in Touch",
      about_title_1: "About",
      about_title_2: "me",
      about_text:
        "I’m a software developer focused on web-based applications. During my thesis + internship, I built a real-time Condition Monitoring Dashboard for thermoform machines. The system included an Angular frontend, a NestJS backend, and InfluxDB for time-series sensor data. I implemented APIs and WebSocket streaming, handled data querying/processing, and created dashboards for machine KPIs and trend visualization. I’m now looking for a Junior Developer / Full-Stack role where I can contribute to production systems and keep improving.",
      about_focus_title: "What I’m strong at",
      about_focus_1:
        "Angular UI development (components, routing, state, responsive layouts)",
      about_focus_2:
        "Backend integration with NestJS (REST APIs, auth basics, validation)",
      about_focus_3:
        "Time-series data handling with InfluxDB (queries, aggregation, KPIs)",
      about_focus_4: "Docker, Git/GitLab, Jira/Confluence workflow",
      btn_cv: "View CV",
      stat_1: "Projects\nCompleted",
      stat_2: "Year of\nexperience",
      skills_title: "My Skills",
      edu_title: "My Education",
      edu_1_title:
        "M.Eng. Software Engineering for Industrial Applications - Hochschule Hof, Germany",
      edu_1_text:
        "Focus: Web development, IoT, software engineering. Thesis: Real-time condition monitoring system.",
      edu_2_title:
        "B.E. Computer Science Engineering - PSNA College of Engineering and Technology, India",
      edu_2_text:
        "Focus: Programming, databases, software development fundamentals.",
      exp_title: "Experience",
      exp_1_title:
        "Master Thesis – Real-time Condition Monitoring Dashboard - Kiefel GmbH (Germany)",
      exp_1_text:
        "Built an Angular + NestJS system for real-time machine monitoring. Implemented data ingestion/simulation, InfluxDB queries, dashboards (KPIs, trends), and streaming updates (WebSockets). Worked with Docker and GitLab workflow.",
      exp_2_title:
        "Full-Stack Developer Intern (Angular / NestJS) - Kiefel GmbH (Germany)",
      exp_2_text:
        "Developed UI modules, integrated REST APIs, improved dashboard usability, and supported backend features. Collaborated via Jira/Confluence and GitLab (branches + merge requests).",
      work_title: "My Work",
      work_text: "Here are some projects I’ve worked on recently.",
      p1_title: "Condition Monitoring Dashboard",
      p1_sub: "Angular • NestJS • InfluxDB • WebSockets • Grafana/Charts",
      p2_title: "AI Chat Dashboard (WIP)",
      p2_sub:
        "Angular • Chat UI • mock responses now • OpenAI integration next",
      p3_title: "AI Interview Q&A Generator (WIP)",
      p3_sub: "Role-based Q&A • skill gaps • export notes",
      p4_title: "Ecommerce UI (Learning)",
      p5_title: "Lost & Found App",
      p5_sub: "Android Studio • Java • Firebase",
      work_extra:
        "I can share code samples, architecture, and implementation details on request.",
      contact_title: "Contact",
      contact_text:
        "Thanks for checking my portfolio. If you’re hiring or can refer me, feel free to reach out.",
      contact_loc: "Location: Stuttgart, Germany",
      btn_send: "Send",
    },

    de: {
      hero_hello: "Hallo,",
      hero_im: "ich bin",
      hero_desc:
        "Full-Stack Developer (Angular + NestJS) mit Erfahrung im Aufbau eines Echtzeit-Condition-Monitoring-Systems für industrielle Maschinen. Ich habe den End-to-End-Flow umgesetzt: Angular UI, REST APIs, WebSocket-Streaming, Zeitreihendaten in InfluxDB und Visualisierung. Aktuell erweitere ich meine KI-Skills und verbessere mein Deutsch (A2 → B1).",
      btn_contact: "Kontakt",
      about_title_1: "Über",
      about_title_2: "mich",
      about_text:
        "Ich bin Softwareentwickler mit Fokus auf webbasierte Anwendungen. Während meiner Thesis + Internship habe ich ein Echtzeit-Condition-Monitoring-Dashboard für Thermoform-Maschinen entwickelt. Das System umfasst ein Angular-Frontend, ein NestJS-Backend und InfluxDB für Zeitreihen-Sensordaten. Ich habe APIs und WebSocket-Streaming umgesetzt, Datenabfragen/Verarbeitung implementiert und Dashboards für KPIs und Trends erstellt. Jetzt suche ich eine Junior Developer / Full-Stack Rolle in der ich produktive Systeme mitentwickeln kann.",
      about_focus_title: "Meine Stärken",
      about_focus_1:
        "Angular UI Entwicklung (Components, Routing, State, Responsive)",
      about_focus_2:
        "Backend-Integration mit NestJS (REST APIs, Auth-Basics, Validation)",
      about_focus_3:
        "Zeitreihendaten mit InfluxDB (Queries, Aggregation, KPIs)",
      about_focus_4: "Docker, Git/GitLab, Jira/Confluence Workflow",
      btn_cv: "Lebenslauf",
      stat_1: "Projekte\ngebaut",
      stat_2: "Jahr\nErfahrung",
      skills_title: "Skills",
      edu_title: "Ausbildung",
      edu_1_title: "M.Eng. Software Engineering - Hochschule Hof, Deutschland",
      edu_1_text:
        "Fokus: Webentwicklung, IoT, Software Engineering. Thesis: Echtzeit Condition Monitoring.",
      edu_2_title: "B.E. Computer Science Engineering - PSNA College, Indien",
      edu_2_text:
        "Fokus: Programmierung, Datenbanken, Grundlagen der Softwareentwicklung.",
      exp_title: "Erfahrung",
      exp_1_title:
        "Masterarbeit – Echtzeit Condition Monitoring Dashboard - Kiefel GmbH (Deutschland)",
      exp_1_text:
        "Angular + NestJS System für Echtzeit-Maschinenmonitoring. Datensimulation/Ingestion, InfluxDB-Queries, KPI/Trend-Dashboards und Streaming-Updates (WebSockets). Docker + GitLab Workflow.",
      exp_2_title:
        "Full-Stack Praktikum (Angular / NestJS) - Kiefel GmbH (Deutschland)",
      exp_2_text:
        "UI-Module entwickelt, REST APIs integriert, Dashboard-Usability verbessert, Backend-Features unterstützt. Zusammenarbeit über Jira/Confluence und GitLab (Branches + Merge Requests).",
      work_title: "Projekte",
      work_text: "Einige Projekte, an denen ich gearbeitet habe.",
      p1_title: "Condition Monitoring Dashboard",
      p1_sub: "Angular • NestJS • InfluxDB • WebSockets • Grafana/Charts",
      p2_title: "AI Chat Dashboard (in Arbeit)",
      p2_sub:
        "Angular • Chat UI • aktuell Mock • OpenAI Integration als nächstes",
      p3_title: "AI Interview Q&A Generator (in Arbeit)",
      p3_sub: "Rollenbasierte Fragen • Skill-Gaps • Export",
      p4_title: "Ecommerce UI (Lernprojekt)",
      p5_title: "Lost & Found App",
      p5_sub: "Android Studio • Java • Firebase",
      work_extra:
        "Gerne teile ich Code-Beispiele, Architektur und Details auf Anfrage.",
      contact_title: "Kontakt",
      contact_text:
        "Danke fürs Anschauen. Wenn ihr einstellt oder mich empfehlen könnt, meldet euch gerne.",
      contact_loc: "Ort: Stuttgart, Deutschland",
      btn_send: "Senden",
    },
  };
  function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoLink =
      "mailto:nisaanth2000@gmail.com" +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(
        "Name: " + name + "\n" + "Email: " + email + "\n\n" + message
      );

    window.location.href = mailtoLink;
  }

  function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[lang] && dict[lang][key]) el.textContent = dict[lang][key];
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active-lang", b.dataset.lang === lang);
    });
  }

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.dataset.lang));
  });

  // default
  applyLang("en");
})();
