document.addEventListener("DOMContentLoaded", () => {
  App.setupLayout("admin");

  const root = document.getElementById("page");
  const settings = App.settings();
  const calc = App.calc();
  const evidence = App.evidence();

  function isEnglish() {
    return localStorage.getItem("schoolSelfEvalV2:lang") === "en";
  }

  function tr(ar, en) {
    return isEnglish() ? en : ar;
  }

  function n(value) {
    return isEnglish() ? String(value ?? 0) : App.arabicDigits(value ?? 0);
  }

  function p(value) {
    return isEnglish() ? `${Math.round(value || 0)}%` : App.percent(value);
  }

  function statusText(domain) {
    if (!domain.answered) return tr("لم يبدأ التقييم", "Not Started");
    if (domain.percent >= 85) return tr("متميز", "Excellent");
    if (domain.percent >= 70) return tr("متقدم", "Advanced");
    if (domain.percent >= 50) return tr("نامٍ", "Developing");
    return tr("بحاجة إلى دعم", "Needs Support");
  }

  function statusClass(domain) {
    if (!domain.answered) return "#65756d";
    if (domain.percent >= 85) return "#0f7b4f";
    if (domain.percent >= 70) return "#227a9b";
    if (domain.percent >= 50) return "#b7791f";
    return "#b42318";
  }

  function domainSummaryText(domain) {
    const answered = domain.answered || 0;
    const total = domain.indicators ? domain.indicators.length : 0;
    const evidenceCount = domain.evidenceCount || 0;

    if (isEnglish()) {
      return `Evaluated ${answered} of ${total} indicators. Evidence Count: ${evidenceCount}.`;
    }

    return `تم تقييم ${App.arabicDigits(answered)} من ${App.arabicDigits(total)} مؤشرات. عدد الشواهد: ${App.arabicDigits(evidenceCount)}.`;
  }

  function domainScoreLabel() {
    return tr("نسبة المجال", "Domain Score");
  }

  const sortedDomains = [...calc.byDomain].sort((a, b) => a.percent - b.percent);

  const priorityDomains = sortedDomains
    .filter((d) => d.percent < 70 || d.evidenceCount === 0)
    .slice(0, 4);

  root.innerHTML = `
    ${App.hero(
      tr("لوحة متابعة مشرف الدعم", "Support Supervisor Dashboard"),
      tr(
        "متابعة إنجاز المدرسة في التقويم الذاتي، مراجعة الشواهد، وتحديد مجالات الدعم والتحسين.",
        "Track the school’s self-evaluation progress, review evidence, and identify support and improvement areas."
      ),
      tr("لوحة مشرف الدعم", "Support Supervisor Dashboard")
    )}

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">${tr("ملخص إنجاز المدرسة", "School Achievement Summary")}</h2>
            <p class="section-sub">
              ${tr(
                "تعرض هذه اللوحة حالة التقويم الذاتي بناءً على الإجابات والشواهد الموثقة.",
                "This dashboard shows the self-evaluation status based on responses and documented evidence."
              )}
            </p>
          </div>
        </div>

        <div class="grid grid-4">
          <div class="card">
            <div class="icon-pill">📊</div>
            <h3>${p(calc.completion)}</h3>
            <p>${tr("نسبة إكمال التقويم", "Evaluation Completion Rate")}</p>
          </div>

          <div class="card">
            <div class="icon-pill">✅</div>
            <h3>${p(calc.readiness)}</h3>
            <p>${tr("الجاهزية العامة", "Overall Readiness")}</p>
          </div>

          <div class="card">
            <div class="icon-pill">🗂️</div>
            <h3>${n(evidence.length)}</h3>
            <p>${tr("عدد الشواهد المضافة", "Number of Added Evidence")}</p>
          </div>

          <div class="card">
            <div class="icon-pill">📌</div>
            <h3>${n(priorityDomains.length)}</h3>
            <p>${tr("مجالات تحتاج متابعة", "Domains Requiring Follow-up")}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:#fff">
      <div class="container">
        <div class="section-head">
          <div>
            <h2 class="section-title">${tr("متابعة المجالات", "Domain Follow-up")}</h2>
            <p class="section-sub">
              ${tr(
                "يساعد هذا الجزء مشرف الدعم على معرفة مستوى كل مجال وعدد الشواهد المرتبطة به.",
                "This section helps the support supervisor review each domain level and related evidence."
              )}
            </p>
          </div>
        </div>

        <div class="grid grid-2">
          ${calc.byDomain.map((d) => `
            <article class="card">
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
                <div>
                  <div class="icon-pill">${d.icon}</div>
                  <h3>${App.escape(d.title)}</h3>
                </div>

                <span class="tag" style="border-color:${statusClass(d)};color:${statusClass(d)}">
                  ${statusText(d)}
                </span>
              </div>

              <p>${domainSummaryText(d)}</p>

              <div class="bar-row">
                <span>${domainScoreLabel()}</span>
                <div class="bar">
                  <i style="width:${d.percent}%"></i>
                </div>
                <small>${p(d.percent)}</small>
              </div>

              <div class="hero-actions" style="margin-top:16px">
                <a class="btn btn-secondary" href="evidence.html?domain=${encodeURIComponent(d.id)}">
                  ${tr("مراجعة الشواهد", "Review Evidence")}
                </a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <div class="card">
            <h2 class="section-title">${tr("أولويات الدعم", "Support Priorities")}</h2>
            <p class="section-sub">
              ${tr(
                "هذه المجالات تحتاج متابعة أو تعزيز الشواهد قبل اعتماد التقرير النهائي.",
                "These domains need follow-up or stronger evidence before final report approval."
              )}
            </p>

            ${
              priorityDomains.length
                ? `<ul class="check-list">
                    ${priorityDomains.map((d) => `
                      <li>
                        <strong>${App.escape(d.title)}</strong>
                        — ${tr("نسبة المجال", "Domain Score")} ${p(d.percent)}
                        — ${tr("الشواهد", "Evidence")} ${n(d.evidenceCount)}
                      </li>
                    `).join("")}
                  </ul>`
                : `<div class="note-box">
                    ${tr("لا توجد مجالات حرجة حاليًا. أداء المدرسة مطمئن.", "There are no critical domains at the moment. The school performance is reassuring.")}
                  </div>`
            }
          </div>

          <div class="card">
            <h2 class="section-title">${tr("إرشادات مشرف الدعم", "Support Supervisor Guidelines")}</h2>
            <ul class="check-list">
              <li>${tr("راجع المجالات ذات النسبة الأقل أولًا.", "Review the lowest-scoring domains first.")}</li>
              <li>${tr("تأكد من وجود شاهد واضح لكل مؤشر مهم.", "Ensure clear evidence exists for each important indicator.")}</li>
              <li>${tr("دوّن ملاحظة دعم مختصرة عند الحاجة.", "Write a brief support note when needed.")}</li>
              <li>${tr("وجّه المدرسة لاستكمال الشواهد قبل طباعة التقرير النهائي.", "Guide the school to complete evidence before printing the final report.")}</li>
              <li>${tr("صدّر نسخة احتياطية بعد كل متابعة مهمة.", "Export a backup after each important follow-up.")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:#fff">
      <div class="container">
        <div class="grid grid-2">
          <form class="card" id="noteForm">
            <h2 class="section-title">${tr("إضافة ملاحظة مشرف الدعم", "Add Support Supervisor Note")}</h2>

            <div class="field">
              <label>${tr("المجال", "Domain")}</label>
              <select name="domainId" required>
                ${App.domains().map((d) => `
                  <option value="${d.id}">${App.escape(d.title)}</option>
                `).join("")}
              </select>
            </div>

            <div class="field">
              <label>${tr("درجة الأولوية", "Priority Level")}</label>
              <select name="priority" required>
                <option value="Normal">${tr("عادية", "Normal")}</option>
                <option value="Medium">${tr("متوسطة", "Medium")}</option>
                <option value="High">${tr("عالية", "High")}</option>
              </select>
            </div>

            <div class="field">
              <label>${tr("ملاحظة الدعم", "Support Note")}</label>
              <textarea name="note" required placeholder="${tr("اكتب ملاحظة مختصرة حول ما تحتاجه المدرسة...", "Write a brief note about what the school needs...")}"></textarea>
            </div>

            <button class="btn btn-primary full" type="submit">${tr("حفظ الملاحظة", "Save Note")}</button>
          </form>

          <div class="card">
            <h2 class="section-title">${tr("ملاحظات المتابعة المحفوظة", "Saved Follow-up Notes")}</h2>
            <div id="notesBox"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          <form class="card" id="linkForm">
            <h2 class="section-title">${tr("روابط متابعة رئيسة", "Main Follow-up Links")}</h2>

            <div class="field">
              <label>${tr("اسم الرابط", "Link Name")}</label>
              <input name="title" placeholder="${tr("مثال: ملف شواهد المدرسة", "Example: School Evidence File")}">
            </div>

            <div class="field">
              <label>${tr("الرابط", "Link")}</label>
              <input name="url" placeholder="https://...">
            </div>

            <button class="btn btn-primary full" type="submit">${tr("إضافة الرابط", "Add Link")}</button>
          </form>

          <div class="card">
            <h2 class="section-title">${tr("الروابط المحفوظة", "Saved Links")}</h2>
            <div id="linksBox"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background:#fff">
      <div class="container">
        <div class="grid grid-2">
          <form class="card" id="settingsForm">
            <h2 class="section-title">${tr("بيانات المدرسة", "School Information")}</h2>

            <div class="field">
              <label>${tr("اسم المدرسة أو المنصة", "School or Platform Name")}</label>
              <input name="schoolName" value="${App.escape(settings.schoolName)}">
            </div>

            <div class="field">
              <label>${tr("العام الدراسي", "Academic Year")}</label>
              <input name="academicYear" value="${App.escape(settings.academicYear)}">
            </div>

            <div class="field">
              <label>${tr("اسم المسؤول أو مشرف الدعم", "Responsible Person / Support Supervisor")}</label>
              <input name="owner" value="${App.escape(settings.owner)}">
            </div>

            <button class="btn btn-primary full" type="submit">${tr("حفظ البيانات", "Save Data")}</button>
          </form>

          <div class="card">
            <h2 class="section-title">${tr("إجراءات المتابعة", "Follow-up Actions")}</h2>
            <p class="section-sub">
              ${tr(
                "استخدم هذه الأزرار لمراجعة التقرير أو حفظ نسخة من بيانات المتابعة.",
                "Use these buttons to review the report or export a backup copy."
              )}
            </p>

            <div class="hero-actions">
              <a class="btn btn-primary" href="report.html">${tr("عرض التقرير", "View Report")}</a>
              <a class="btn btn-secondary" href="evidence.html">${tr("مراجعة الشواهد", "Review Evidence")}</a>
              <button class="btn btn-gold" type="button" id="exportBtn">${tr("تصدير نسخة احتياطية", "Export Backup")}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  function renderNotes() {
    const box = document.getElementById("notesBox");
    const notes = App.read("supportNotes", []);

    if (!notes.length) {
      box.innerHTML = `<div class="note-box">${tr("لا توجد ملاحظات متابعة محفوظة بعد.", "No follow-up notes saved yet.")}</div>`;
      return;
    }

    box.innerHTML = notes.map((note, index) => {
      const domain = App.domains().find((d) => d.id === note.domainId);

      return `
        <div class="note-box" style="margin-bottom:10px">
          <strong>${App.escape(domain?.title || tr("مجال غير محدد", "Unspecified Domain"))}</strong>
          <br>
          <span class="tag">${App.escape(note.priority)}</span>
          <p style="margin:10px 0">${App.escape(note.note)}</p>
          <small>${App.escape(note.date)}</small>
          <br><br>
          <button class="btn btn-danger" type="button" data-delete-note="${index}">
            ${tr("حذف الملاحظة", "Delete Note")}
          </button>
        </div>
      `;
    }).join("");

    box.querySelectorAll("[data-delete-note]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.deleteNote);
        const current = App.read("supportNotes", []);
        current.splice(index, 1);
        App.write("supportNotes", current);
        renderNotes();
        App.toast(tr("تم حذف الملاحظة", "Note deleted"));
      });
    });
  }

  function renderLinks() {
    const box = document.getElementById("linksBox");
    const links = App.read("onedriveLinks", []);

    if (!links.length) {
      box.innerHTML = `<div class="note-box">${tr("لا توجد روابط محفوظة بعد.", "No saved links yet.")}</div>`;
      return;
    }

    box.innerHTML = links.map((link, index) => `
      <div class="note-box" style="margin-bottom:10px">
        <strong>${App.escape(link.title)}</strong>
        <br>
        <a href="${App.escape(link.url)}" target="_blank" rel="noopener">${tr("فتح الرابط", "Open Link")}</a>
        <br><br>
        <button class="btn btn-danger" type="button" data-delete-link="${index}">
          ${tr("حذف الرابط", "Delete Link")}
        </button>
      </div>
    `).join("");

    box.querySelectorAll("[data-delete-link]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.deleteLink);
        const current = App.read("onedriveLinks", []);
        current.splice(index, 1);
        App.write("onedriveLinks", current);
        renderLinks();
        App.toast(tr("تم حذف الرابط", "Link deleted"));
      });
    });
  }

  document.getElementById("noteForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const notes = App.read("supportNotes", []);

    notes.push({
      domainId: form.domainId.value,
      priority: form.priority.value,
      note: form.note.value.trim(),
      date: new Date().toLocaleDateString(isEnglish() ? "en-US" : "ar-SA")
    });

    App.write("supportNotes", notes);
    form.reset();
    renderNotes();
    App.toast(tr("تم حفظ ملاحظة مشرف الدعم", "Support supervisor note saved"));
  });

  document.getElementById("linkForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const title = form.title.value.trim();
    const url = form.url.value.trim();

    if (!title || !url) {
      App.toast(tr("أكمل اسم الرابط والرابط", "Complete the link name and URL"));
      return;
    }

    const links = App.read("onedriveLinks", []);
    links.push({ title, url });
    App.write("onedriveLinks", links);

    form.reset();
    renderLinks();
    App.toast(tr("تم حفظ الرابط", "Link saved"));
  });

  document.getElementById("settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const current = App.settings();

    App.write("settings", {
      ...current,
      schoolName: form.schoolName.value.trim(),
      academicYear: form.academicYear.value.trim(),
      owner: form.owner.value.trim()
    });

    App.toast(tr("تم حفظ بيانات المدرسة", "School information saved"));
  });

  document.getElementById("exportBtn").addEventListener("click", () => {
    const backup = {
      settings: App.settings(),
      assessment: App.assessment(),
      evidence: App.evidence(),
      supportNotes: App.read("supportNotes", []),
      onedriveLinks: App.read("onedriveLinks", []),
      exportedAt: new Date().toISOString()
    };

    App.download(
      isEnglish() ? "self-evaluation-follow-up-backup.json" : "نسخة-متابعة-التقويم-الذاتي.json",
      JSON.stringify(backup, null, 2)
    );
  });

  renderNotes();
  renderLinks();
});