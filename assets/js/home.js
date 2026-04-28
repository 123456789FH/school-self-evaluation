document.addEventListener("DOMContentLoaded", () => {
  App.setupLayout("home");

  const root = document.getElementById("page");
  const calc = App.calc();

  root.innerHTML = `
    <section class="hero">
      <div class="container hero-content">
        <div>
          <div class="crumbs">
            <span>الرئيسية</span>
            <span>›</span>
            <span class="current">منصة التقويم الذاتي</span>
          </div>

          <span class="kicker">منصة داخلية للتقويم الذاتي المدرسي</span>

          <h1>${App.escape(App.settings().schoolName)}</h1>

          <p>
            ${App.escape(App.settings().subtitle)}.
            صممت لتساعدك على متابعة مجالات التقويم، توثيق الشواهد، وبناء تقرير نهائي واضح ومنظم.
          </p>

          <div class="hero-actions">
            <a class="btn btn-primary" href="assessment.html">ابدأ التقويم الآن</a>
            <a class="btn btn-secondary" href="evidence.html">أضف شاهدًا</a>
            <a class="btn btn-gold" href="report.html">عرض التقرير</a>
          </div>
        </div>

        <div class="hero-card">
          <h3>حالة المنصة</h3>
          <p>تابع تقدم التقويم، وعدد الشواهد، ونسبة الإكمال من مكان واحد.</p>

          <div class="mini-stats">
            <div class="mini-stat">
              <strong>${App.arabicDigits(DEFAULT_DOMAINS.length)}</strong>
              <span>مجالات</span>
            </div>

            <div class="mini-stat">
              <strong>${App.arabicDigits(App.allIndicators().length)}</strong>
              <span>مؤشرات</span>
            </div>

            <div class="mini-stat">
              <strong>${App.arabicDigits(App.evidence().length)}</strong>
              <span>شواهد</span>
            </div>

            <div class="mini-stat">
              <strong>${App.percent(calc.completion)}</strong>
              <span>نسبة الإكمال</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">ماذا تحتوي المنصة؟</h2>
            <p class="section-sub">
              صفحات منظمة تساعد فريق المدرسة على التقويم، توثيق الشواهد، ومتابعة خطة التحسين.
            </p>
          </div>
        </div>

        <div class="grid grid-4">
          ${[
            ["📌", "المجالات", "استعراض مجالات التقويم والمؤشرات والشواهد المقترحة.", "areas.html"],
            ["✅", "التقويم", "اختيار مستوى الأداء لكل مؤشر وحفظ التقدم.", "assessment.html"],
            ["🗂️", "الشواهد", "إضافة روابط الشواهد والصور والفيديوهات وتصنيفها.", "evidence.html"],
            ["📄", "التقرير", "عرض النتائج والتوصيات وخطة التحسين والطباعة.", "report.html"]
          ].map((c) => `
            <a class="card" href="${c[3]}">
              <div class="icon-pill">${c[0]}</div>
              <h3>${c[1]}</h3>
              <p>${c[2]}</p>
            </a>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section" style="background:#fff">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">خطوات العمل المقترحة</h2>
            <p class="section-sub">اتبع الخطوات من اليمين إلى اليسار لإنجاز ملف التقويم الذاتي.</p>
          </div>
        </div>

        <div class="timeline">
          ${[
            "راجع المجالات",
            "أجب عن المؤشرات",
            "جهّز الشواهد الرقمية",
            "أضف الروابط في الشواهد",
            "اطبع التقرير"
          ].map((t, i) => `
            <div class="step">
              <div class="step-num">${App.arabicDigits(i + 1)}</div>
              <h4>${t}</h4>
              <p>${[
                "افهم نطاق كل مجال",
                "اختر مستوى الأداء",
                "ارفع الملفات في OneDrive أو أي رابط آمن",
                "صنّف الشاهد واربطه بالمجال",
                "استخرج خطة التحسين"
              ][i]}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="progress-panel">
          <div>
            <h2 class="section-title">مؤشر التقدم الحالي</h2>
            <p class="section-sub">يعتمد على المؤشرات التي تم تقييمها حتى الآن.</p>

            <div class="bar-row">
              <span>إكمال التقويم</span>
              <div class="bar">
                <i style="width:${calc.completion}%"></i>
              </div>
              <small>${App.percent(calc.completion)}</small>
            </div>

            <div class="bar-row">
              <span>الجاهزية العامة</span>
              <div class="bar">
                <i style="width:${calc.readiness}%"></i>
              </div>
              <small>${App.percent(calc.readiness)}</small>
            </div>
          </div>

          <div class="progress-circle" style="--p:${calc.readiness}">
            <div>
              <strong>${App.percent(calc.readiness)}</strong>
              <span>جاهزية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
});