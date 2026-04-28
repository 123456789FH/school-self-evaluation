(function () {
  const LANG_KEY = "schoolSelfEvalV2:lang";
  const SEEN_KEY = "schoolSelfEvalV2:assistantSeen";

  function isEnglish() {
    return localStorage.getItem(LANG_KEY) === "en";
  }

  const AR = {
    title: "مساعد التقويم الذاتي",
    subtitle: "مرشد سريع داخل المنصة",
    openLabel: "فتح مساعد التقويم الذاتي",
    closeLabel: "إغلاق",
    quickTitle: "أسئلة سريعة",
    placeholder: "اكتب سؤالك هنا...",
    send: "إرسال",
    greeting:
      "مرحبًا 👋 أنا مساعد التقويم الذاتي. أستطيع إرشادك لبدء التقويم، إضافة الشواهد، استخدام روابط OneDrive، فتح التقرير، أو دخول مشرف الدعم.",
    fallback:
      "لم أفهم السؤال بدقة. جرّب أن تسأل عن: بدء التقويم، إضافة شاهد، OneDrive، التقرير، الحفظ، أو دخول المشرف.",
    quicks: [
      "كيف أبدأ التقويم؟",
      "كيف أضيف شاهدًا؟",
      "كيف أستخدم OneDrive؟",
      "كيف أفتح التقرير؟",
      "كيف يدخل مشرف الدعم؟",
      "هل البيانات محفوظة؟"
    ],
    answers: [
      {
        keys: ["ابدأ", "ابدا", "بداية", "التقويم", "تقييم", "مؤشرات", "start", "evaluation"],
        text:
          "لبدء التقويم افتح صفحة التقويم، ثم اختر مستوى الأداء لكل مؤشر. يتم حفظ تقدمك داخل المتصفح تلقائيًا.",
        link: "assessment.html",
        linkText: "فتح صفحة التقويم"
      },
      {
        keys: ["شاهد", "شواهد", "اضافة شاهد", "إضافة شاهد", "ارفع", "توثيق", "evidence"],
        text:
          "لإضافة شاهد افتح صفحة الشواهد، اختر المجال المناسب، اكتب عنوان الشاهد، ثم ألصق رابط OneDrive أو رابط الصورة أو الفيديو.",
        link: "evidence.html",
        linkText: "فتح صفحة الشواهد"
      },
      {
        keys: ["onedrive", "ون درايف", "وندرايف", "رابط", "روابط", "مشاركة", "رفع"],
        text:
          "ارفع الملف أولًا في OneDrive، ثم اضغط مشاركة، وانسخ الرابط، وبعدها الصقه داخل صفحة الشواهد. اجعل الرابط للعرض فقط إذا كان الملف حساسًا.",
        link: "evidence.html",
        linkText: "إضافة رابط شاهد"
      },
      {
        keys: ["تقرير", "النتيجة", "نتائج", "طباعة", "pdf", "report"],
        text:
          "لعرض التقرير افتح صفحة التقرير. ستجد الجاهزية العامة، ملخص الشواهد، التوصيات، وخطة التحسين المقترحة. يمكنك طباعته أو حفظه PDF.",
        link: "report.html",
        linkText: "فتح التقرير"
      },
      {
        keys: ["مشرف", "دعم", "دخول", "كلمة المرور", "لوحة التحكم", "login", "supervisor"],
        text:
          "لدخول مشرف الدعم افتح صفحة دخول المشرف، ثم أدخل كلمة المرور المعتمدة. لا تشارك كلمة المرور إلا مع المسؤول المخوّل.",
        link: "login.html",
        linkText: "فتح دخول المشرف"
      },
      {
        keys: ["حفظ", "بيانات", "مسودة", "تصدير", "استيراد", "نسخة", "backup", "export"],
        text:
          "البيانات تُحفظ داخل المتصفح على نفس الجهاز. قبل تغيير الجهاز أو حذف بيانات المتصفح، صدّر نسخة احتياطية من لوحة مشرف الدعم."
      },
      {
        keys: ["لغة", "انجليزي", "english", "العربية", "language"],
        text:
          "يمكنك تغيير اللغة من زر English / العربية في أعلى المنصة. ستتحول الصفحات الأساسية بين العربية والإنجليزية."
      }
    ]
  };

  const EN = {
    title: "Self-Evaluation Assistant",
    subtitle: "Quick guide inside the platform",
    openLabel: "Open self-evaluation assistant",
    closeLabel: "Close",
    quickTitle: "Quick Questions",
    placeholder: "Type your question here...",
    send: "Send",
    greeting:
      "Hello 👋 I can help you start the evaluation, add evidence, use OneDrive links, open the report, or access the support supervisor dashboard.",
    fallback:
      "I did not fully understand the question. Try asking about: start evaluation, add evidence, OneDrive, report, saving data, or supervisor login.",
    quicks: [
      "How do I start the evaluation?",
      "How do I add evidence?",
      "How do I use OneDrive?",
      "How do I open the report?",
      "How does the supervisor log in?",
      "Is the data saved?"
    ],
    answers: [
      {
        keys: ["start", "evaluation", "indicator", "begin", "assessment", "ابدأ", "تقويم"],
        text:
          "Open the Evaluation page, then select the performance level for each indicator. Your progress is saved automatically in the browser.",
        link: "assessment.html",
        linkText: "Open Evaluation"
      },
      {
        keys: ["evidence", "add evidence", "upload", "document", "شاهد", "شواهد"],
        text:
          "Open the Evidence page, choose the correct domain, enter the evidence title, then paste a OneDrive, image, or video link.",
        link: "evidence.html",
        linkText: "Open Evidence"
      },
      {
        keys: ["onedrive", "link", "share", "upload", "ون درايف", "رابط"],
        text:
          "Upload the file to OneDrive first, click Share, copy the link, and paste it in the Evidence page. Use view-only links for sensitive files.",
        link: "evidence.html",
        linkText: "Add Evidence Link"
      },
      {
        keys: ["report", "pdf", "print", "results", "تقرير", "طباعة"],
        text:
          "Open the Report page to view overall readiness, evidence summary, smart recommendations, and the suggested improvement plan. You can print or save it as PDF.",
        link: "report.html",
        linkText: "Open Report"
      },
      {
        keys: ["supervisor", "login", "password", "dashboard", "admin", "مشرف", "دخول"],
        text:
          "Open the Supervisor Login page and enter the approved password. Do not share the password except with authorized staff.",
        link: "login.html",
        linkText: "Supervisor Login"
      },
      {
        keys: ["save", "saved", "backup", "export", "data", "حفظ", "تصدير"],
        text:
          "Data is saved in the browser on the same device. Before changing devices or clearing browser data, export a backup from the support supervisor dashboard."
      },
      {
        keys: ["language", "arabic", "english", "لغة", "العربية"],
        text:
          "Use the English / العربية button at the top of the platform to switch between Arabic and English."
      }
    ]
  };

  function content() {
    return isEnglish() ? EN : AR;
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[أإآ]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHtml(text) {
    return String(text || "").replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char];
    });
  }

  function findAnswer(question) {
    const q = normalize(question);
    const data = content();

    return (
      data.answers.find((item) =>
        item.keys.some((key) => q.includes(normalize(key)))
      ) || {
        text: data.fallback
      }
    );
  }

  function injectStyle() {
    if (document.getElementById("evaAssistantStyle")) return;

    const style = document.createElement("style");
    style.id = "evaAssistantStyle";

    style.textContent = `
      .eva-assistant {
        position: fixed;
        inset-inline-end: 22px;
        bottom: 22px;
        z-index: 9999;
        font-family: inherit;
      }

      .eva-chat-toggle {
        width: 66px;
        height: 66px;
        border: 0;
        border-radius: 50%;
        background: linear-gradient(135deg, #14875d, #0b4f3c);
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        box-shadow: 0 18px 38px rgba(7, 59, 46, 0.25);
        display: grid;
        place-items: center;
      }

      .eva-chat-panel {
        width: min(390px, calc(100vw - 28px));
        height: min(620px, calc(100vh - 120px));
        background: #ffffff;
        border: 1px solid #d7e5dd;
        border-radius: 28px;
        overflow: hidden;
        box-shadow: 0 28px 70px rgba(7, 59, 46, 0.22);
        display: none;
        flex-direction: column;
      }

      .eva-assistant.open .eva-chat-panel {
        display: flex;
      }

      .eva-assistant.open .eva-chat-toggle {
        display: none;
      }

      .eva-chat-head {
        padding: 18px;
        background:
          linear-gradient(135deg, rgba(20, 135, 93, 0.96), rgba(7, 59, 46, 0.96));
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .eva-chat-title {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .eva-chat-avatar {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(255,255,255,0.16);
        display: grid;
        place-items: center;
        font-size: 23px;
      }

      .eva-chat-title strong {
        display: block;
        font-size: 17px;
        line-height: 1.4;
      }

      .eva-chat-title span {
        display: block;
        font-size: 12px;
        opacity: 0.85;
      }

      .eva-chat-close {
        border: 0;
        background: rgba(255,255,255,0.14);
        color: #fff;
        border-radius: 14px;
        padding: 8px 10px;
        cursor: pointer;
        font-weight: 800;
      }

      .eva-chat-body {
        padding: 16px;
        overflow: auto;
        flex: 1;
        background: #f8fbf9;
      }

      .eva-msg {
        display: flex;
        margin-bottom: 12px;
      }

      .eva-msg.user {
        justify-content: flex-end;
      }

      .eva-msg.bot {
        justify-content: flex-start;
      }

      .eva-bubble {
        max-width: 88%;
        padding: 12px 14px;
        border-radius: 18px;
        line-height: 1.8;
        font-size: 14px;
        color: #073b2e;
        background: #fff;
        border: 1px solid #dce9e2;
      }

      .eva-msg.user .eva-bubble {
        background: #14875d;
        color: #fff;
        border-color: #14875d;
      }

      .eva-chat-link {
        display: inline-flex;
        margin-top: 10px;
        padding: 8px 12px;
        border-radius: 999px;
        background: #fff6d8;
        color: #5d3b00;
        border: 1px solid #ecd58a;
        text-decoration: none;
        font-weight: 800;
      }

      .eva-quick {
        padding: 12px 16px;
        border-top: 1px solid #e3eee8;
        background: #fff;
      }

      .eva-quick strong {
        display: block;
        margin-bottom: 8px;
        color: #073b2e;
        font-size: 13px;
      }

      .eva-quick-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .eva-quick-buttons button {
        border: 1px solid #cde3d8;
        background: #f3fbf7;
        color: #073b2e;
        border-radius: 999px;
        padding: 7px 10px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
      }

      .eva-chat-form {
        display: flex;
        gap: 8px;
        padding: 14px;
        background: #fff;
        border-top: 1px solid #e3eee8;
      }

      .eva-chat-form input {
        flex: 1;
        border: 1px solid #cde0d7;
        border-radius: 16px;
        padding: 12px;
        font: inherit;
        outline: none;
      }

      .eva-chat-form input:focus {
        border-color: #16875d;
        box-shadow: 0 0 0 4px rgba(22, 135, 93, 0.12);
      }

      .eva-chat-form button {
        border: 0;
        background: #14875d;
        color: #fff;
        border-radius: 16px;
        padding: 0 16px;
        font-weight: 900;
        cursor: pointer;
      }

      @media (max-width: 520px) {
        .eva-assistant {
          inset-inline-end: 12px;
          bottom: 12px;
        }

        .eva-chat-toggle {
          width: 58px;
          height: 58px;
        }

        .eva-chat-panel {
          width: calc(100vw - 24px);
          height: min(620px, calc(100vh - 80px));
          border-radius: 22px;
        }
      }

      @media print {
        .eva-assistant {
          display: none !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  function createAssistant() {
    if (document.querySelector(".eva-assistant")) return;

    const data = content();

    const assistant = document.createElement("div");
    assistant.className = "eva-assistant no-print";
    assistant.dir = isEnglish() ? "ltr" : "rtl";

    assistant.innerHTML = `
      <button class="eva-chat-toggle" type="button" aria-label="${escapeHtml(data.openLabel)}">💬</button>

      <section class="eva-chat-panel" aria-label="${escapeHtml(data.title)}">
        <header class="eva-chat-head">
          <div class="eva-chat-title">
            <div class="eva-chat-avatar">✅</div>
            <div>
              <strong>${escapeHtml(data.title)}</strong>
              <span>${escapeHtml(data.subtitle)}</span>
            </div>
          </div>

          <button class="eva-chat-close" type="button">${escapeHtml(data.closeLabel)}</button>
        </header>

        <div class="eva-chat-body" id="evaChatBody"></div>

        <div class="eva-quick">
          <strong>${escapeHtml(data.quickTitle)}</strong>
          <div class="eva-quick-buttons">
            ${data.quicks.map((q) => `<button type="button" data-question="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join("")}
          </div>
        </div>

        <form class="eva-chat-form">
          <input type="text" autocomplete="off" placeholder="${escapeHtml(data.placeholder)}">
          <button type="submit">${escapeHtml(data.send)}</button>
        </form>
      </section>
    `;

    document.body.appendChild(assistant);

    const body = assistant.querySelector("#evaChatBody");
    const toggle = assistant.querySelector(".eva-chat-toggle");
    const close = assistant.querySelector(".eva-chat-close");
    const form = assistant.querySelector(".eva-chat-form");
    const input = form.querySelector("input");

    function addMessage(type, text, link, linkText) {
      const row = document.createElement("div");
      row.className = `eva-msg ${type}`;

      const bubble = document.createElement("div");
      bubble.className = "eva-bubble";
      bubble.innerHTML = escapeHtml(text).replace(/\n/g, "<br>");

      if (link && linkText) {
        const a = document.createElement("a");
        a.href = link;
        a.className = "eva-chat-link";
        a.textContent = linkText;
        bubble.appendChild(document.createElement("br"));
        bubble.appendChild(a);
      }

      row.appendChild(bubble);
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
    }

    function openChat() {
      assistant.classList.add("open");
      input.focus();
    }

    function closeChat() {
      assistant.classList.remove("open");
      localStorage.setItem(SEEN_KEY, "yes");
    }

    function ask(question) {
      if (!question.trim()) return;

      addMessage("user", question);

      const answer = findAnswer(question);

      setTimeout(() => {
        addMessage("bot", answer.text, answer.link, answer.linkText);
      }, 250);
    }

    toggle.addEventListener("click", openChat);
    close.addEventListener("click", closeChat);

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const value = input.value.trim();
      input.value = "";
      ask(value);
    });

    assistant.querySelectorAll("[data-question]").forEach((button) => {
      button.addEventListener("click", () => {
        ask(button.dataset.question || "");
      });
    });

    addMessage("bot", data.greeting);

    if (!localStorage.getItem(SEEN_KEY)) {
      setTimeout(openChat, 900);
      localStorage.setItem(SEEN_KEY, "yes");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectStyle();
    createAssistant();
  });
})();