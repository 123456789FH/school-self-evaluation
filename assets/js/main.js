(function () {
  const KEY = "schoolSelfEvalV2";

  /*
    الصفحات الظاهرة للمستخدمين فقط.
    تم إخفاء:
    - admin.html التحكم
    - guide.html دليل التشغيل
  */
  const pages = [
    ["home", "index.html", "الرئيسية"],
    ["areas", "areas.html", "المجالات"],
    ["assessment", "assessment.html", "التقويم"],
    ["evidence", "evidence.html", "الشواهد"],
    ["report", "report.html", "التقرير"]
  ];

  window.App = {
    key(name) {
      return `${KEY}:${name}`;
    },

    read(name, fallback) {
      try {
        const raw = localStorage.getItem(this.key(name));
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return fallback;
      }
    },

    write(name, value) {
      localStorage.setItem(this.key(name), JSON.stringify(value));
    },

    remove(name) {
      localStorage.removeItem(this.key(name));
    },

    settings() {
      return {
        ...DEFAULT_SETTINGS,
        ...this.read("settings", {})
      };
    },

    domains() {
      return this.read("domains", DEFAULT_DOMAINS);
    },

    allIndicators() {
      return this.domains().flatMap((d) =>
        d.indicators.map((i) => ({
          ...i,
          domainId: d.id,
          domainTitle: d.title,
          domainIcon: d.icon
        }))
      );
    },

    evidence() {
      return this.read("evidence", []);
    },

    assessment() {
      return this.read("assessment", {
        answers: {},
        notes: {}
      });
    },

    saveAssessment(data) {
      this.write("assessment", data);
    },

    arabicDigits(value) {
      return String(value).replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
    },

    escape(str) {
      return String(str || "").replace(/[&<>'"]/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[c]));
    },

    percent(n) {
      return this.arabicDigits(Math.round(n || 0)) + "٪";
    },

    level(score) {
      return LEVELS.find((l) => l.value === Number(score));
    },

    toast(message) {
      let el = document.querySelector(".toast");

      if (!el) {
        el = document.createElement("div");
        el.className = "toast";
        document.body.appendChild(el);
      }

      el.textContent = message;
      el.classList.add("show");

      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        el.classList.remove("show");
      }, 2400);
    },

    setupLayout(active) {
      const settings = this.settings();

      const header = document.getElementById("appHeader");

      if (header) {
        const links = pages
          .map(([id, href, label]) => {
            return `<a class="nav-link ${active === id ? "active" : ""}" href="${href}">${label}</a>`;
          })
          .join("");

        header.innerHTML = `
          <div class="gov-strip">
            <div class="container">
              <span class="badge">منصة مدرسية داخلية للتقويم الذاتي</span>
              <span>العام الدراسي: ${this.escape(settings.academicYear)}</span>
            </div>
          </div>

          <header class="site-header">
            <div class="container nav">
              <a class="brand" href="index.html" aria-label="الرئيسية">
                <img
                  class="brand-logo"
                  src="${this.escape(settings.logoUrl || "assets/img/logo.svg")}"
                  alt="شعار"
                  onerror="this.src='assets/img/logo.svg'"
                >
                <span>
                  <strong>${this.escape(settings.schoolName)}</strong>
                  <span>${this.escape(settings.subtitle)}</span>
                </span>
              </a>

              <button class="menu-toggle" type="button" aria-label="فتح القائمة">
                <span>☰</span>
                القائمة
              </button>

              <nav class="nav-links" aria-label="القائمة الرئيسية">
                ${links}
              </nav>
            </div>
          </header>
        `;

        const btn = header.querySelector(".menu-toggle");
        const nav = header.querySelector(".nav-links");

        btn?.addEventListener("click", () => {
          nav.classList.toggle("open");
        });
      }

      const footer = document.getElementById("appFooter");

      if (footer) {
        const items = (settings.footerItems || DEFAULT_SETTINGS.footerItems)
          .filter(Boolean);

        footer.innerHTML = `
          <footer class="footer">
            <div class="container">
              <div>
                <strong>${this.escape(settings.schoolName)}</strong>
                <br>
                <small>منصة داخلية للتقويم الذاتي وتوثيق الشواهد</small>
              </div>

              <p>${items.map((item) => this.escape(item)).join(" &nbsp; | &nbsp; ")}</p>
            </div>
          </footer>
        `;
      }
    },

    hero(title, text, current) {
      const settings = this.settings();

      return `
        <section class="hero">
          <div class="container hero-content">
            <div>
              <div class="crumbs">
                <a href="index.html">الرئيسية</a>
                <span>›</span>
                <span class="current">${this.escape(current || title)}</span>
              </div>

              <span class="kicker">${this.escape(settings.academicYear)} • تقويم ذاتي مدرسي</span>

              <h1>${this.escape(title)}</h1>
              <p>${this.escape(text)}</p>
            </div>

            <div class="hero-card">
              <h3>لوحة مختصرة</h3>
              <p>اجمع البيانات، أضف الشواهد، ثم اطبع التقرير النهائي.</p>

              <div class="mini-stats">
                <div class="mini-stat">
                  <strong>${this.arabicDigits(this.domains().length)}</strong>
                  <span>مجالات</span>
                </div>

                <div class="mini-stat">
                  <strong>${this.arabicDigits(this.allIndicators().length)}</strong>
                  <span>مؤشرات</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    },

    calc() {
      const domains = this.domains();
      const evidence = this.evidence();
      const data = this.assessment();
      const indicators = this.allIndicators();

      const max = indicators.length * 4;

      let score = 0;
      let answered = 0;

      const byDomain = domains.map((d) => {
        let dScore = 0;
        let dAnswered = 0;
        const count = d.indicators.length;

        d.indicators.forEach((i) => {
          const v = Number(data.answers?.[i.id] || 0);

          if (v) {
            dAnswered++;
            dScore += v;
            score += v;
            answered++;
          }
        });

        const evCount = evidence.filter((e) => e.domainId === d.id).length;

        return {
          ...d,
          score: dScore,
          answered: dAnswered,
          total: count * 4,
          percent: count ? (dScore / (count * 4)) * 100 : 0,
          evidenceCount: evCount
        };
      });

      return {
        score,
        max,
        answered,
        totalIndicators: indicators.length,
        completion: indicators.length ? (answered / indicators.length) * 100 : 0,
        readiness: max ? (score / max) * 100 : 0,
        performance: answered ? (score / (answered * 4)) * 100 : 0,
        byDomain
      };
    },

    download(filename, data, type = "application/json") {
      const blob = new Blob([data], { type });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 500);
    }
  };
})();