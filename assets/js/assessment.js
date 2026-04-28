
document.addEventListener('DOMContentLoaded',()=>{
  App.setupLayout('assessment');
  const root=document.getElementById('page');
  root.innerHTML = App.hero('نموذج التقويم التفاعلي', 'اختر مستوى الأداء لكل مؤشر، وسيتم حفظ تقدمك تلقائيًا في المتصفح.', 'التقويم') + `
  <section class="section"><div class="container">
    <div id="progressBox"></div>
    <div class="tabs" id="domainTabs"></div>
    <div id="indicators"></div>
    <div class="hero-actions no-print"><button class="btn btn-primary" id="saveBtn">حفظ التقدم</button><button class="btn btn-secondary" id="reportBtn">عرض التقرير</button><button class="btn btn-danger" id="clearBtn">مسح الإجابات</button></div>
  </div></section>`;
  let selected='all';
  function renderTabs(){
    const tabs=document.getElementById('domainTabs');
    tabs.innerHTML=`<button class="tab ${selected==='all'?'active':''}" data-id="all">كل المجالات</button>` + App.domains().map(d=>`<button class="tab ${selected===d.id?'active':''}" data-id="${d.id}">${d.icon} ${App.escape(d.title)}</button>`).join('');
    tabs.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.id; render();}));
  }
  function renderProgress(){
    const c=App.calc();
    document.getElementById('progressBox').innerHTML=`<div class="progress-panel" style="margin-bottom:18px"><div><h2 class="section-title">تقدم التقويم</h2><p class="section-sub">تم تقييم ${App.arabicDigits(c.answered)} من ${App.arabicDigits(c.totalIndicators)} مؤشر.</p><div class="bar-row"><span>نسبة الإكمال</span><div class="bar"><i style="width:${c.completion}%"></i></div><small>${App.percent(c.completion)}</small></div><div class="bar-row"><span>الأداء في المجاب</span><div class="bar"><i style="width:${c.performance}%"></i></div><small>${App.percent(c.performance)}</small></div></div><div class="progress-circle" style="--p:${c.readiness}"><div><strong>${App.percent(c.readiness)}</strong><span>جاهزية عامة</span></div></div></div>`;
  }
  function card(ind, domain){
    const data=App.assessment(); const v=Number(data.answers?.[ind.id]||0); const note=data.notes?.[ind.id]||'';
    return `<article class="assessment-card" data-id="${ind.id}"><div class="top"><div><span class="tag">${domain.icon} ${App.escape(domain.title)}</span><h3 class="indicator-title">${App.escape(ind.text)}</h3></div><span class="tag">${v?App.escape(App.level(v).label):'لم يتم التقييم'}</span></div><div class="level-buttons">${LEVELS.map(l=>`<button type="button" class="level-btn ${v===l.value?'active':''}" data-score="${l.value}"><span>${App.arabicDigits(l.value)} - ${l.label}</span><small>${l.hint}</small></button>`).join('')}</div><div class="field" style="margin-top:12px"><label>ملاحظات مختصرة لهذا المؤشر</label><textarea data-note="${ind.id}" placeholder="اكتب الملاحظة أو الإجراء المقترح...">${App.escape(note)}</textarea></div></article>`;
  }
  function renderIndicators(){
    const wrap=document.getElementById('indicators');
    const domains= selected==='all'? App.domains() : App.domains().filter(d=>d.id===selected);
    wrap.innerHTML=domains.map(d=>`<div style="margin:18px 0"><div class="section-head"><div><h2 class="section-title">${d.icon} ${App.escape(d.title)}</h2><p class="section-sub">${App.escape(d.desc)}</p></div><a class="btn btn-secondary btn-small" href="evidence.html">إضافة شاهد</a></div>${d.indicators.map(i=>card(i,d)).join('')}</div>`).join('');
    wrap.querySelectorAll('.level-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const id=btn.closest('.assessment-card').dataset.id; const data=App.assessment();
      data.answers[id]=Number(btn.dataset.score); App.saveAssessment(data); render(); App.toast('تم حفظ مستوى المؤشر');
    }));
    wrap.querySelectorAll('textarea[data-note]').forEach(t=>t.addEventListener('input',()=>{
      const data=App.assessment(); data.notes[t.dataset.note]=t.value; App.saveAssessment(data);
    }));
  }
  function render(){renderProgress(); renderTabs(); renderIndicators();}
  render();
  document.getElementById('saveBtn').addEventListener('click',()=>App.toast('تم حفظ التقدم بنجاح'));
  document.getElementById('reportBtn').addEventListener('click',()=>location.href='report.html');
  document.getElementById('clearBtn').addEventListener('click',()=>{if(confirm('هل تريد مسح جميع إجابات التقويم؟')){App.remove('assessment'); render(); App.toast('تم مسح الإجابات');}});
});
