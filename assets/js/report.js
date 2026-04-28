
document.addEventListener('DOMContentLoaded',()=>{
  App.setupLayout('report');
  const root=document.getElementById('page');
  function statusText(p){if(p>=85)return 'مستوى متميز'; if(p>=70)return 'مستوى متقدم'; if(p>=50)return 'مستوى نامٍ'; return 'أولوية تحسين عاجلة';}
  function recommendations(c){
    const lows=c.byDomain.slice().sort((a,b)=>a.percent-b.percent).slice(0,3);
    const list=[];
    if(c.completion<100) list.push('استكمل تقييم جميع المؤشرات قبل اعتماد التقرير النهائي.');
    if(c.readiness<60) list.push('ركز على بناء خطة تحسين قصيرة المدى للمجالات الأقل في النتيجة.');
    if(!App.evidence().length) list.push('أضف شواهد رقمية وروابط OneDrive حتى يصبح التقرير موثقًا.');
    lows.forEach(d=>list.push(`مجال ${d.title}: يحتاج إلى إجراء تحسين واضح وشواهد داعمة.`));
    return [...new Set(list)].slice(0,5);
  }
  function render(){
    const c=App.calc(); const settings=App.settings(); const recs=recommendations(c);
    root.innerHTML = App.hero('التقرير النهائي وخطة التحسين', 'يعرض هذا التقرير نتيجة التقويم، الشواهد، وأولويات التحسين المقترحة.', 'التقرير') + `
    <section class="section"><div class="container">
      <div class="hero-actions no-print" style="margin-bottom:18px"><button class="btn btn-primary" id="printBtn">طباعة أو حفظ PDF</button><button class="btn btn-secondary" id="exportReport">تصدير بيانات التقرير</button><a class="btn btn-secondary" href="assessment.html">تعديل التقويم</a></div>
      <div class="print-only"><h2>${App.escape(settings.schoolName)}</h2><p>${App.escape(settings.academicYear)}</p></div>
      <div class="grid grid-3">
        <div class="report-box"><h3>الجاهزية العامة</h3><div class="progress-circle" style="--p:${c.readiness};margin-top:12px"><div><strong>${App.percent(c.readiness)}</strong><span>${statusText(c.readiness)}</span></div></div></div>
        <div class="report-box"><h3>إكمال المؤشرات</h3><p style="font-size:34px;font-weight:900;color:var(--green-800);margin:8px 0">${App.arabicDigits(c.answered)} / ${App.arabicDigits(c.totalIndicators)}</p><div class="bar"><i style="width:${c.completion}%"></i></div><p>${App.percent(c.completion)}</p></div>
        <div class="report-box"><h3>الشواهد المضافة</h3><p style="font-size:34px;font-weight:900;color:var(--green-800);margin:8px 0">${App.arabicDigits(App.evidence().length)}</p><p>شاهد موثق بروابط أو صور محلية.</p></div>
      </div>
      <div class="report-box" style="margin-top:18px"><h2 class="section-title">نتائج المجالات</h2>${c.byDomain.map(d=>`<div class="bar-row"><span>${d.icon} ${App.escape(d.title)}</span><div class="bar"><i style="width:${d.percent}%"></i></div><small>${App.percent(d.percent)}</small></div>`).join('')}</div>
      <div class="grid grid-2" style="margin-top:18px;align-items:start"><div class="report-box"><h2 class="section-title">التوصيات الذكية</h2>${recs.map(r=>`<div class="recommendation">${App.escape(r)}</div>`).join('')||'<p>لا توجد توصيات حاليًا.</p>'}</div><div class="report-box"><h2 class="section-title">ملخص الشواهد حسب المجال</h2>${c.byDomain.map(d=>`<div class="bar-row"><span>${d.icon} ${App.escape(d.title)}</span><div class="bar"><i style="width:${Math.min(100,d.evidenceCount*25)}%"></i></div><small>${App.arabicDigits(d.evidenceCount)}</small></div>`).join('')}</div></div>
      <div class="section-head" style="margin-top:24px"><div><h2 class="section-title">خطة تحسين مقترحة</h2><p class="section-sub">تظهر المجالات الأقل نتيجة في أعلى الجدول.</p></div></div>
      <div class="table-wrap"><table><thead><tr><th>المجال</th><th>الأولوية</th><th>الإجراء المقترح</th><th>الشاهد المطلوب</th><th>المدة</th></tr></thead><tbody>${c.byDomain.slice().sort((a,b)=>a.percent-b.percent).map((d,i)=>`<tr><td>${d.icon} ${App.escape(d.title)}</td><td>${App.arabicDigits(i+1)}</td><td>تنفيذ إجراء تطويري وقياس أثره في نهاية الفترة.</td><td>${(d.evidence||[]).map(App.escape).join('، ')}</td><td>أسبوعان إلى شهر</td></tr>`).join('')}</tbody></table></div>
    </div></section>`;
    document.getElementById('printBtn').addEventListener('click',()=>window.print());
    document.getElementById('exportReport').addEventListener('click',()=>App.download('school-self-assessment-report.json', JSON.stringify({settings, results:c, evidence:App.evidence(), assessment:App.assessment()}, null, 2)));
  }
  render();
});
