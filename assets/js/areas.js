document.addEventListener("DOMContentLoaded", () => {
  App.setupLayout("areas");

  const root = document.getElementById("page");

  function evidenceLink(domainId, evidenceTitle) {
    return `evidence.html?domain=${encodeURIComponent(domainId)}&title=${encodeURIComponent(evidenceTitle)}`;
  }

  root.innerHTML =
    App.hero(
      "مجالات التقويم الذاتي",
      "استعرض المجالات الرئيسة ومؤشراتها والشواهد المقترحة لكل مجال.",
      "المجالات"
    ) +
    `
    <section class="section">
      <div class="container">
        <div class="grid grid-2">
          ${App.domains()
            .map(
              (d) => `
              <article class="card">
                <div class="icon-pill">${d.icon}</div>

                <h3>${App.escape(d.title)}</h3>
                <p>${App.escape(d.desc)}</p>

                <ul class="check-list">
                  ${d.indicators
                    .map((i) => `<li>${App.escape(i.text)}</li>`)
                    .join("")}
                </ul>

                <div class="evidence-meta" style="margin-top:14px">
                  ${(d.evidence || [])
                    .map(
                      (e) => `
                      <a class="tag tag-link"
                         href="${evidenceLink(d.id, e)}"
                         title="إضافة شاهد: ${App.escape(e)}">
                        ${App.escape(e)}
                      </a>
                    `
                    )
                    .join("")}
                </div>
              </article>
            `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
});