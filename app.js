(function () {
  const sectionButtons = document.querySelectorAll(".control[data-id]");

  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentActiveBtn = document.querySelector(".control.active-btn");
      if (currentActiveBtn) currentActiveBtn.classList.remove("active-btn");
      btn.classList.add("active-btn");

      const currentActiveSection = document.querySelector(".container.active");
      if (currentActiveSection) currentActiveSection.classList.remove("active");

      const targetId = btn.dataset.id;
      const targetSection = document.getElementById(targetId);
      if (targetSection) targetSection.classList.add("active");

      window.scrollTo(0, 0);
    });
  });

  document.querySelectorAll("[data-scroll]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = el.getAttribute("data-scroll");
      const btn = document.querySelector(`.control[data-id="${id}"]`);
      if (btn) btn.click();
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }

  // I18N DICTIONARY
  const dict = {
    en: {
      hero_desc:
        "Junior Full-Stack Developer (Angular + NestJS) with experience in building a real-time Monitoring system for industrial machines. I worked on the end-to-end flow: Angular UI, REST APIs, API testing, connecting with backend, used time-series data in InfluxDB and visualization.\n\nCurrently building foundational knowledge in LLMs, prompt engineering, and effective AI usage to improve development productivity and code quality, also improving German (A2 → B1).",

      btn_contact: "Get in Touch",
      about_title_1: "About",
      about_title_2: "me",

      about_text:
        "I am a developer focused on web-based applications. During my thesis + internship, I built a real-time Condition Monitoring Dashboard for thermoform machines. The system included an Angular frontend, a NestJS backend, and InfluxDB for time-series sensor data. I implemented and worked on APIs, handled data querying/processing, and created dashboards for machine KPIs and trend visualization. I am now looking for a Junior Developer / Full-Stack role where I can contribute to production systems and keep improving.",

      about_focus_title: "What I am strong at",
      about_focus_1:
        "Angular UI development (components, routing, state, responsive layouts)",
      about_focus_2:
        "Backend integration with NestJS (REST APIs, auth basics, validation)",
      about_focus_3:
        "Time-series data handling with InfluxDB (queries, aggregation, KPIs)",
      about_focus_4: "Docker, Git/GitLab, Jira/Confluence workflow",

      btn_cv: "View CV",
      stat_1: "Projects\nBuilt",
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
      p3_title: "AI Interview Job Search Assistant - IN PROGRESS",
      p3_sub: "Role-based Q&A • skill gaps • export notes",
      p4_title: "Ecommerce UI (Learning)",
      p5_title: "Lost & Found App",
      p5_sub: "Android Studio • Java • Firebase",

      work_extra:
        "I can explain and share the experience about the architecture, and implementation details on request.",

      contact_title: "Contact",
      contact_text:
        "Thanks for checking my portfolio. If you’re hiring or can refer me, feel free to reach out.",
      contact_loc: "Location: 73760 Tuffweg 3, Ostfildern, Germany",
      btn_send: "Send",
    },

    de: {
      hero_desc:
        "Junior Full-Stack Developer (Angular + NestJS) mit Erfahrung in der Entwicklung eines Echtzeit-Monitoring-Systems für industrielle Maschinen. Ich habe den End-to-End-Flow umgesetzt: Angular UI, REST APIs, API-Tests, Backend-Anbindung sowie Zeitreihendaten in InfluxDB und Visualisierung.\n\nAktuell baue ich Grundlagen in LLMs, Prompt Engineering und effektiver KI-Nutzung auf, um Entwicklung, Produktivität und Codequalität zu verbessern – außerdem verbessere ich mein Deutsch (A2 → B1).",

      btn_contact: "Kontakt",
      about_title_1: "Über",
      about_title_2: "mich",

      about_text:
        "Ich bin Entwickler mit Fokus auf webbasierte Anwendungen. Während meiner Thesis + Internship habe ich ein Echtzeit-Condition-Monitoring-Dashboard für Thermoform-Maschinen entwickelt. Das System umfasst ein Angular-Frontend, ein NestJS-Backend und InfluxDB für Zeitreihen-Sensordaten. Ich habe an APIs gearbeitet, Datenabfragen/Verarbeitung umgesetzt und Dashboards für Maschinen-KPIs sowie Trend-Visualisierung erstellt. Jetzt suche ich eine Junior Developer / Full-Stack Rolle, in der ich produktive Systeme mitentwickeln und mich weiter verbessern kann.",

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
      p3_title: "AI Interview Job Search Assistant - IN PROGRESS",
      p3_sub: "Rollenbasierte Fragen • Skill-Gaps • Export",
      p4_title: "Ecommerce UI (Lernprojekt)",
      p5_title: "Lost & Found App",
      p5_sub: "Android Studio • Java • Firebase",

      work_extra:
        "Ich kann die Architektur und Implementierungsdetails auf Anfrage erklären und teilen.",

      contact_title: "Kontakt",
      contact_text:
        "Danke fürs Anschauen. Wenn ihr einstellt oder mich empfehlen könnt, meldet euch gerne.",
      contact_loc: "Ort: 73760 Tuffweg 3, Ostfildern, Deutschland",
      btn_send: "Senden",
    },
  };

  function applyLang(lang) {
    const data = dict[lang] || dict.en;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;

      if (data[key]) {
        el.textContent = data[key];
      }
    });

    const langToggle = document.getElementById("langToggle");
    if (langToggle) {
      const label = langToggle.querySelector(".lang-label");
      if (label) label.textContent = lang.toUpperCase();
      langToggle.classList.toggle("is-de", lang === "de");
    }

    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "en";
      const next = current === "en" ? "de" : "en";
      applyLang(next);
    });
  }

  const savedLang = localStorage.getItem("lang") || "en";
  applyLang(savedLang);
})();
