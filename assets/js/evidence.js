
document.addEventListener('DOMContentLoaded',()=>{
  App.setupLayout('evidence');
  const root=document.getElementById('page');
  root.innerHTML = App.hero('بنك الشواهد والروابط', 'أضف روابط OneDrive أو صورًا صغيرة أو روابط فيديو، ثم اربط كل شاهد بمجاله.', 'الشواهد') + `
  <section class="section"><div class="container">
    <div class="grid grid-2" style="align-items:start">
      <form class="card" id="evidenceForm"><h2 class="section-title">إضافة شاهد جديد</h2><p class="hint">للملفات الكبيرة والفيديوهات: ارفعها أولًا في OneDrive ثم انسخ رابط المشاركة هنا.</p>
        <div class="form-grid" style="margin-top:14px">
          <div class="field"><label>عنوان الشاهد</label><input name="title" required placeholder="مثال: صورة تنفيذ برنامج علاجي"></div>
          <div class="field"><label>المجال</label><select name="domainId" required>${App.domains().map(d=>`<option value="${d.id}">${d.icon} ${App.escape(d.title)}</option>`).join('')}</select></div>
          <div class="field"><label>نوع الشاهد</label><select name="type"><option>رابط OneDrive</option><option>صورة</option><option>فيديو</option><option>ملف PDF</option><option>رابط خارجي</option></select></div>
          <div class="field"><label>تاريخ الشاهد</label><input name="date" type="date"></div>
        </div>
        <div class="field" style="margin-top:12px"><label>رابط OneDrive أو كود التضمين</label><textarea name="link" placeholder="الصق رابط المشاركة من OneDrive أو رابط الفيديو أو كود iframe للتضمين"></textarea></div>
        <div class="field"><label>رفع صورة صغيرة من الجهاز — اختياري</label><input name="file" type="file" accept="image/*,video/*,.pdf"><small class="hint">الصور الصغيرة فقط يمكن حفظها داخل المتصفح. الفيديوهات والملفات الكبيرة الأفضل ربطها من OneDrive.</small></div>
        <div class="field"><label>وصف مختصر</label><textarea name="desc" placeholder="اكتب وصفًا يساعد لجنة التقويم على فهم الشاهد"></textarea></div>
        <button class="btn btn-primary full" type="submit">حفظ الشاهد</button>
      </form>
      <div class="card"><h2 class="section-title">إرشاد سريع لروابط OneDrive</h2><ul class="check-list"><li>ارفع الصورة أو الفيديو أو الملف إلى OneDrive.</li><li>اضغط مشاركة ثم انسخ الرابط.</li><li>الصق الرابط في خانة رابط OneDrive.</li><li>اختر المجال المناسب ليظهر الشاهد في التقرير.</li></ul><div class="note-box" style="margin-top:16px">التوثيق داخل هذه النسخة يعمل بالروابط والحفظ المحلي. الرفع المباشر إلى OneDrive من داخل المنصة يحتاج ربط Microsoft Graph وحسابات صلاحيات.</div></div>
    </div>
    <div class="section-head" style="margin-top:28px"><div><h2 class="section-title">الشواهد المحفوظة</h2><p class="section-sub" id="evidenceCount"></p></div><div class="hero-actions"><button class="btn btn-secondary" id="exportEvidence">تصدير الشواهد</button><label class="btn btn-secondary" for="importEvidence">استيراد الشواهد</label><input id="importEvidence" type="file" accept="application/json" hidden><button class="btn btn-danger" id="clearEvidence">مسح الكل</button></div></div>
    <div class="tabs" id="filters"></div><div class="grid grid-3" id="evidenceList"></div>
  </div></section>`;
  const urlParams = new URLSearchParams(window.location.search);
let filter = urlParams.get("domain") || "all";
  function safeFrame(link){
    const s=String(link||'').trim();
    const m=s.match(/src=["']([^"']+)["']/i); const src=m?m[1]:s;
    if(/^https:\/\//i.test(src)) return `<iframe src="${App.escape(src)}" allowfullscreen loading="lazy"></iframe>`;
    return `<span>لا توجد معاينة مباشرة</span>`;
  }
  function preview(e){
    if(e.dataUrl) return `<img src="${e.dataUrl}" alt="${App.escape(e.title)}">`;
    if(e.link && (e.type.includes('فيديو') || e.link.includes('iframe') || e.link.includes('onedrive') || e.link.includes('sharepoint'))) return safeFrame(e.link);
    if(e.link) return `<a class="btn btn-secondary" href="${App.escape(e.link)}" target="_blank" rel="noopener">فتح الرابط</a>`;
    return `<span>أضف رابطًا أو صورة للمعاينة</span>`;
  }
  function renderFilters(){
    const f=document.getElementById('filters');
    f.innerHTML=`<button class="tab ${filter==='all'?'active':''}" data-id="all">كل الشواهد</button>`+App.domains().map(d=>`<button class="tab ${filter===d.id?'active':''}" data-id="${d.id}">${d.icon} ${App.escape(d.title)}</button>`).join('');
    f.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.id; render();}));
  }
  function renderList(){
    const list=document.getElementById('evidenceList');
    const data=App.evidence();
    const filtered=filter==='all'?data:data.filter(e=>e.domainId===filter);
    document.getElementById('evidenceCount').textContent=`عدد الشواهد: ${App.arabicDigits(filtered.length)} من ${App.arabicDigits(data.length)}`;
    if(!filtered.length){list.innerHTML=`<div class="empty" style="grid-column:1/-1">لم تُضف شواهد بعد. أضف أول شاهد من النموذج أعلاه.</div>`; return;}
    list.innerHTML=filtered.map(e=>{const d=App.domains().find(x=>x.id===e.domainId)||{}; return `<article class="card evidence-card"><div class="preview">${preview(e)}</div><div class="evidence-meta"><span class="tag">${d.icon||''} ${App.escape(d.title||'مجال')}</span><span class="tag">${App.escape(e.type)}</span>${e.date?`<span class="tag">${App.arabicDigits(e.date)}</span>`:''}</div><h3>${App.escape(e.title)}</h3><p>${App.escape(e.desc||'')}</p><div class="card-actions"><a class="btn btn-primary btn-small" href="${App.escape(e.link||'#')}" target="_blank" rel="noopener">فتح</a><button class="btn btn-secondary btn-small" data-copy="${e.id}">نسخ الرابط</button><button class="btn btn-danger btn-small" data-del="${e.id}">حذف</button></div></article>`}).join('');
    list.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>{if(confirm('حذف هذا الشاهد؟')){App.write('evidence', App.evidence().filter(e=>e.id!==b.dataset.del)); render(); App.toast('تم حذف الشاهد');}}));
    list.querySelectorAll('[data-copy]').forEach(b=>b.addEventListener('click',()=>{const e=App.evidence().find(x=>x.id===b.dataset.copy); if(e?.link){navigator.clipboard?.writeText(e.link); App.toast('تم نسخ الرابط');}}));
  }
  function render(){renderFilters(); renderList();}
  render();
  document.getElementById('evidenceForm').addEventListener('submit', async (ev)=>{
    ev.preventDefault(); const form=ev.currentTarget; const fd=new FormData(form); const file=fd.get('file');
    const item={id:Date.now().toString(36), title:fd.get('title'), domainId:fd.get('domainId'), type:fd.get('type'), date:fd.get('date'), link:fd.get('link'), desc:fd.get('desc'), createdAt:new Date().toISOString()};
    if(file && file.size){
      if(file.type.startsWith('image/') && file.size <= 3*1024*1024){item.dataUrl=await new Promise(res=>{const r=new FileReader(); r.onload=()=>res(r.result); r.readAsDataURL(file);});}
      else{item.fileName=file.name; item.fileNote='ملف محلي كبير؛ ارفعه إلى OneDrive وأضف رابط المشاركة ليبقى متاحًا.'; if(!item.link) App.toast('أضف رابط OneDrive للملف الكبير حتى يظهر لاحقًا');}
    }
    const data=App.evidence(); data.unshift(item); App.write('evidence', data); form.reset(); render(); App.toast('تم حفظ الشاهد');
  });const requestedDomain = urlParams.get("domain");
const requestedTitle = urlParams.get("title");

if (requestedDomain || requestedTitle) {
  const form = document.getElementById("evidenceForm");

  if (form) {
    if (requestedDomain && form.elements.domainId) {
      form.elements.domainId.value = requestedDomain;
    }

    if (requestedTitle && form.elements.title) {
      form.elements.title.value = requestedTitle;
    }

    form.scrollIntoView({ behavior: "smooth", block: "start" });
    App.toast("تم تجهيز نموذج الشاهد");
  }
}
  document.getElementById('exportEvidence').addEventListener('click',()=>App.download('school-evidence.json', JSON.stringify(App.evidence(), null, 2)));
  document.getElementById('importEvidence').addEventListener('change',e=>{const file=e.target.files[0]; if(!file)return; const r=new FileReader(); r.onload=()=>{try{const data=JSON.parse(r.result); if(Array.isArray(data)){App.write('evidence',data); render(); App.toast('تم استيراد الشواهد');}}catch(err){alert('ملف غير صحيح');}}; r.readAsText(file);});
  document.getElementById('clearEvidence').addEventListener('click',()=>{if(confirm('هل تريد مسح جميع الشواهد؟')){App.write('evidence',[]); render();}});
});
