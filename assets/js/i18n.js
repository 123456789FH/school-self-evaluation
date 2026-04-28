(function () {
  const LANG_KEY = "schoolSelfEvalV2:lang";

  const DICT = {
    "لوحة تحكم المشرف": "Support Supervisor Dashboard",
"دخول المشرف": "Support Supervisor Login",
"هذه الصفحة مخصصة للمسؤول عن إعدادات المنصة فقط.": "This page is for the authorized support supervisor only.",
"كلمة المرور غير صحيحة.": "Incorrect password.",
"لوحة متابعة مشرف الدعم": "Support Supervisor Follow-up Dashboard",
"متابعة إنجاز المدرسة في التقويم الذاتي، مراجعة الشواهد، وتحديد مجالات الدعم والتحسين.": "Track the school’s self-evaluation progress, review evidence, and identify support and improvement areas.",
    "تنظيم الروابط، والملفات الرقمية، وشواهد OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم الروابط والملفات الرقمية وشواهد OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم الروابط، الملفات الرقمية، وشواهد OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم الروابط والملفات الرقمية وملفات الشواهد.": "Organizing links, digital files, and evidence files.",
    "منصة التقويم الذاتي في المدرسة": "School Self-Evaluation Platform",
    "منصة التقويم الذاتي": "Self-Evaluation Platform",
    "التقويم الذاتي": "Self-Evaluation",
    "منصة مدرسية داخلية للتقويم الذاتي": "Internal School Self-Evaluation Platform",
    "منصة داخلية للتقويم الذاتي المدرسي": "Internal School Self-Evaluation Platform",
    "تقييم ذاتي مدرسي": "School Self-Evaluation",
    "تقويم ذاتي مدرسي": "School Self-Evaluation",
    "قياس الأداء المدرسي، توثيق الشواهد، وبناء خطة تحسين بطريقة سهلة ومنظمة": "Measuring school performance, documenting evidence, and building an organized improvement plan",
    "صممت لتساعدك على متابعة مجالات التقويم، توثيق الشواهد، وبناء تقرير نهائي واضح ومنظم.": "Designed to help you follow evaluation domains, document evidence, and build a clear final report.",
    "تابع تقدم التقويم، وعدد الشواهد، ونسبة الإكمال من مكان واحد.": "Track evaluation progress, evidence count, and completion rate in one place.",

    "الرئيسية": "Home",
    "المجالات": "Domains",
    "التقويم": "Evaluation",
    "الشواهد": "Evidence",
    "التقرير": "Report",
    "الرئيسية": "Home",
    "لوحة مشرف الدعم": "Support Supervisor Dashboard",
    "لوحة متابعة مشرف الدعم": "Support Supervisor Dashboard",
    "دخول المشرف": "Supervisor Login",
    "تسجيل الخروج": "Log out",
    "العودة للرئيسية": "Back to Home",
    "دخول": "Login",
    "كلمة المرور": "Password",
    "أدخل كلمة المرور": "Enter password",
    "هذه الصفحة مخصصة للمسؤول عن إعدادات المنصة فقط.": "This page is for the authorized support supervisor only.",

    "ابدأ التقويم الآن": "Start Evaluation",
    "أضف شاهدًا": "Add Evidence",
    "عرض التقرير": "View Report",
    "مراجعة الشواهد": "Review Evidence",
    "طباعة التقرير": "Print Report",
    "حفظ البيانات": "Save Data",
    "حفظ الإعدادات": "Save Settings",
    "إضافة الرابط": "Add Link",
    "حفظ الملاحظة": "Save Note",
    "حذف الملاحظة": "Delete Note",
    "حذف الرابط": "Delete Link",
    "فتح الرابط": "Open Link",
    "حفظ الشاهد": "Save Evidence",
    "مسح الكل": "Clear All",

    "حالة المنصة": "Platform Status",
    "لوحة مختصرة": "Quick Dashboard",
    "مجالات": "Domains",
    "مجال": "Domain",
    "مؤشرات": "Indicators",
    "مؤشر": "Indicator",
    "شواهد": "Evidence",
    "شاهد": "Evidence",
    "نسبة الإكمال": "Completion Rate",
    "الجاهزية العامة": "Overall Readiness",
    "ماذا تحتوي المنصة؟": "What does the platform include?",
    "صفحات منظمة تساعد فريق المدرسة على التقويم، توثيق الشواهد، ومتابعة خطة التحسين.": "Organized pages that help the school team evaluate, document evidence, and follow up on the improvement plan.",
    "خطوات العمل المقترحة": "Suggested Workflow",
    "اتبع الخطوات من اليمين إلى اليسار لإنجاز ملف التقويم الذاتي.": "Follow the suggested steps to complete the self-evaluation file.",
    "راجع المجالات": "Review Domains",
    "أجب عن المؤشرات": "Complete Indicators",
    "جهّز الشواهد الرقمية": "Prepare Digital Evidence",
    "أضف الروابط في الشواهد": "Add Evidence Links",
    "اطبع التقرير": "Print Report",
    "افهم نطاق كل مجال": "Understand the scope of each domain",
    "اختر مستوى الأداء": "Select the performance level",
    "ارفع الملفات في OneDrive أو أي رابط آمن": "Upload files to OneDrive or any secure link",
    "صنّف الشاهد واربطه بالمجال": "Classify the evidence and link it to the domain",
    "استخرج خطة التحسين": "Generate the improvement plan",
    "مؤشر التقدم الحالي": "Current Progress Indicator",
    "يعتمد على المؤشرات التي تم تقييمها حتى الآن.": "Based on the indicators evaluated so far.",
    "إكمال التقويم": "Evaluation Completion",
    "جاهزية": "Readiness",

    "مجالات التقويم الذاتي": "Self-Evaluation Domains",
    "استعرض المجالات الرئيسة ومؤشراتها والشواهد المقترحة لكل مجال.": "Review the main domains, indicators, and suggested evidence for each domain.",

    "القيادة المدرسية": "School Leadership",
    "التعليم والتعلم": "Teaching and Learning",
    "التحصيل الدراسي": "Academic Achievement",
    "البيئة المدرسية الآمنة": "Safe School Environment",
    "الشراكة مع الأسرة والمجتمع": "Family and Community Partnership",
    "الدعم والتوجيه الطلابي": "Student Support and Guidance",
    "النشاط والموهبة": "Activities and Talent",
    "التحول الرقمي والتوثيق": "Digital Transformation and Documentation",

    "وضوح الرؤية، إدارة الأداء، وتمكين فريق العمل.": "Clarity of vision, performance management, and staff empowerment.",
    "جودة التخطيط، تنوع الاستراتيجيات، وفاعلية التقويم البنائي.": "Planning quality, varied strategies, and effective formative assessment.",
    "جودة التخطيط، تنوع الاستراتيجيات، والتقويم البنائي.": "Planning quality, varied strategies, and formative assessment.",
    "تحليل النتائج، علاج الفاقد، ورفع مستوى الإتقان.": "Results analysis, learning loss treatment, and mastery improvement.",
    "سلامة المرافق، الانضباط، والصحة النفسية والاجتماعية.": "Facility safety, discipline, and psychological and social well-being.",
    "قنوات تواصل فاعلة ومبادرات مجتمعية مؤثرة.": "Effective communication channels and impactful community initiatives.",
    "تواصل فعال، شراكات، ومشاركة أولياء الأمور.": "Effective communication, partnerships, and parent engagement.",
    "رعاية الحالات، متابعة الغياب، وتعزيز الدافعية.": "Case care, absence follow-up, and motivation enhancement.",
    "الرعاية الطلابية، الدعم السلوكي، وخدمات الإرشاد.": "Student care, behavioral support, and guidance services.",
    "برامج إثرائية وأنشطة جاذبة تعزز المهارات والقيم.": "Enrichment programs and engaging activities that promote skills and values.",
    "تنمية المواهب، إثراء التعلم، وبناء الشخصية.": "Talent development, learning enrichment, and character building.",
    "تنظيم OneDrive الرقمية، الروابط، وملفات الشواهد.": "Organizing OneDrive, digital links, and evidence files.",
    "إدارة الروابط، حفظ الشواهد، وجودة التوثيق.": "Link management, evidence storage, and documentation quality.",

    "توجد رؤية ورسالة واضحة ومعلنة ومفعلة داخل المدرسة.": "The school has a clear, announced, and activated vision and mission.",
    "تستخدم القيادة البيانات لاتخاذ قرارات تطويرية قابلة للقياس.": "Leadership uses data to make measurable improvement decisions.",
    "تتابع القيادة تنفيذ الخطة التشغيلية ومؤشرات الأداء بانتظام.": "Leadership regularly follows up on the operational plan and performance indicators.",
    "توفر القيادة بيئة عمل داعمة ومحفزة للمعلمين والإداريين.": "Leadership provides a supportive and motivating work environment for teachers and administrators.",

    "تُخطط الدروس وفق نواتج تعلم واضحة ومناسبة للمتعلمين.": "Lessons are planned according to clear and suitable learning outcomes.",
    "تخطط الدروس وفق نواتج تعلم واضحة ومناسبة للمتعلمين.": "Lessons are planned according to clear and suitable learning outcomes.",
    "تُستخدم استراتيجيات تعليم نشط تراعي الفروق الفردية.": "Active learning strategies are used while considering individual differences.",
    "تستخدم استراتيجيات تعليم نشط تراعي الفروق الفردية.": "Active learning strategies are used while considering individual differences.",
    "تُوظف أساليب تقويم متنوعة قبل وأثناء وبعد التعلم.": "Various assessment methods are used before, during, and after learning.",
    "توظف أساليب تقويم متنوعة قبل وأثناء وبعد التعلم.": "Various assessment methods are used before, during, and after learning.",
    "تُقدم تغذية راجعة واضحة تساعد الطالب على تحسين أدائه.": "Clear feedback is provided to help students improve their performance.",
    "تقدم تغذية راجعة واضحة تساعد الطالب على تحسين أدائه.": "Clear feedback is provided to help students improve their performance.",

    "تُحلل نتائج الطلاب وتُستخرج جوانب القوة والاحتياج.": "Student results are analyzed to identify strengths and needs.",
    "تحلل نتائج الطلاب وتستخرج جوانب القوة والاحتياج.": "Student results are analyzed to identify strengths and needs.",
    "توجد خطط علاجية وإثرائية مبنية على نتائج التحليل.": "Remedial and enrichment plans are based on analysis results.",
    "تُتابع المدرسة أثر البرامج العلاجية على تقدم الطلاب.": "The school follows up on the impact of remedial programs on student progress.",
    "تتابع المدرسة أثر البرامج العلاجية على تقدم الطلاب.": "The school follows up on the impact of remedial programs on student progress.",
    "تُحفز المدرسة الطلاب على التميز وتحسين مستوى الإتقان.": "The school motivates students toward excellence and mastery improvement.",
    "تحفز المدرسة الطلاب على التميز وتحسين مستوى الإتقان.": "The school motivates students toward excellence and mastery improvement.",

    "تتوفر بيئة مدرسية آمنة ونظيفة ومحفزة للتعلم.": "A safe, clean, and motivating learning environment is provided.",
    "تتابع المدرسة إجراءات السلامة والصيانة بصورة منظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
    "تتابع المدرسة إجراءات السلامة والصيانة بشكل منظم.": "The school follows up on safety and maintenance procedures in an organized way.",
    "تتابع المدرسة إجراءات السلامة والصيانة بمنظومة منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
    "تُطبق برامج وقائية للحد من المشكلات السلوكية والتنمر.": "Preventive programs are implemented to reduce behavioral problems and bullying.",
    "تطبق برامج وقائية للحد من المشكلات السلوكية والتنمر.": "Preventive programs are implemented to reduce behavioral problems and bullying.",
    "تدعم المدرسة الصحة النفسية والاجتماعية للطلاب.": "The school supports students’ psychological and social well-being.",

    "توجد قنوات تواصل واضحة وفاعلة مع أولياء الأمور.": "Clear and effective communication channels with parents are available.",
    "تتواصل المدرسة بانتظام مع أولياء الأمور بطرق واضحة.": "The school communicates regularly with parents through clear channels.",
    "تنفذ المدرسة مبادرات تعزز مشاركة الأسرة في تعلم الطالب.": "The school implements initiatives that enhance family participation in student learning.",
    "تُنفذ المدرسة مبادرات تعزز مشاركة الأسرة في تعلم الطالب.": "The school implements initiatives that enhance family participation in student learning.",
    "تفعل المدرسة شراكات مجتمعية تخدم أهدافها التعليمية.": "The school activates community partnerships that support its educational goals.",
    "تُفعل المدرسة شراكات مجتمعية تخدم أهدافها التعليمية.": "The school activates community partnerships that support its educational goals.",
    "توثق المدرسة أثر الشراكات والبرامج المجتمعية.": "The school documents the impact of partnerships and community programs.",
    "توثق المدرسة أثر الشراكات في تحسين الأداء المدرسي.": "The school documents the impact of partnerships on school performance.",

    "ترصد احتياجات الطلاب الإرشادية والتعليمية بشكل منتظم.": "Students’ guidance and learning needs are monitored systematically.",
    "تتابع المدرسة الغياب والتأخر وتنفذ إجراءات علاجية مناسبة.": "The school follows up on absence and delay and implements appropriate remedial actions.",
    "تتوفر برامج دعم للطلاب ذوي الاحتياج والموهوبين.": "Support programs are available for students with needs and gifted students.",
    "تقاس فاعلية برامج التوجيه والدعم الطلابي بوضوح.": "The effectiveness of guidance and student support programs is clearly measured.",
    "توجد برامج دعم للطلاب المتعثرين أكاديميًا وسلوكيًا.": "Support programs are available for students with academic and behavioral needs.",
    "تُقدم خدمات إرشادية وقائية ونمائية للطلاب.": "Preventive and developmental guidance services are provided for students.",
    "تقدم خدمات إرشادية وقائية ونمائية للطلاب.": "Preventive and developmental guidance services are provided for students.",
    "تُتابع حالات الغياب والتأخر بخطط علاجية واضحة.": "Absence and tardiness cases are followed up through clear remedial plans.",
    "تتابع حالات الغياب والتأخر بخطط علاجية واضحة.": "Absence and tardiness cases are followed up through clear remedial plans.",
    "تُراعى احتياجات الطلاب المختلفة في البرامج والخدمات.": "Students’ diverse needs are considered in programs and services.",
    "تراعى احتياجات الطلاب المختلفة في البرامج والخدمات.": "Students’ diverse needs are considered in programs and services.",

    "تكتشف مواهب الطلاب وترعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
    "تُكتشف مواهب الطلاب وُترعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
    "تُنفذ برامج لاكتشاف ورعاية الموهوبين.": "Programs are implemented to identify and support gifted students.",
    "تنفذ برامج لاكتشاف ورعاية الموهوبين.": "Programs are implemented to identify and support gifted students.",
    "تُقدم أنشطة مدرسية متنوعة مرتبطة بميول الطلاب.": "Various school activities linked to students’ interests are provided.",
    "تقدم أنشطة مدرسية متنوعة مرتبطة بميول الطلاب.": "Various school activities linked to students’ interests are provided.",
    "تنفذ أنشطة مدرسية متنوعة مرتبطة بمهارات القرن الحادي والعشرين.": "The school implements various activities linked to 21st-century skills.",
    "تُنفذ أنشطة مدرسية متنوعة مرتبطة بمهارات القرن الحادي والعشرين.": "The school implements various activities linked to 21st-century skills.",
    "تسهم الأنشطة في تعزيز القيم والانتماء والمسؤولية.": "Activities contribute to strengthening values, belonging, and responsibility.",
    "تُسهم الأنشطة في تعزيز القيم والانتماء والمسؤولية.": "Activities contribute to strengthening values, belonging, and responsibility.",
    "توثق مخرجات الأنشطة وأثرها على الطلاب.": "The outcomes of activities and their impact on students are documented.",
    "تُوثق مخرجات الأنشطة وأثرها على الطلاب.": "The outcomes of activities and their impact on students are documented.",

    "تستخدم أدوات رقمية في التعليم والإدارة والتواصل المدرسي.": "Digital tools are used in teaching, administration, and school communication.",
    "تُستخدم أدوات رقمية في التعليم والإدارة والتواصل المدرسي.": "Digital tools are used in teaching, administration, and school communication.",
    "توجد آلية منظمة لحفظ الشواهد الرقمية وتصنيفها.": "There is an organized mechanism for saving and classifying digital evidence.",
    "تصنف الشواهد الرقمية وتحفظها بطريقة منظمة.": "Digital evidence is classified and saved in an organized way.",
    "تُصنف الشواهد الرقمية وتحفظها بطريقة منظمة.": "Digital evidence is classified and saved in an organized way.",
    "توثق البرامج والإنجازات بصور وفيديوهات وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with photos, videos, and accessible links.",
    "توثق البرامج والإنجازات بصور وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with images and retrievable links.",
    "تُوثق البرامج والإنجازات بصور وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with images and retrievable links.",
    "تُراعى الخصوصية وجودة البيانات عند مشاركة الروابط والملفات.": "Privacy and data quality are considered when sharing links and files.",
    "تراعى الخصوصية وجودة البيانات عند مشاركة الروابط والملفات.": "Privacy and data quality are considered when sharing links and files.",
    "يُتاح الوصول للشواهد للمصرح لهم فقط بطريقة منظمة.": "Evidence access is organized and limited to authorized users only.",
    "يتاح الوصول للشواهد للمصرح لهم فقط بطريقة منظمة.": "Evidence access is organized and limited to authorized users only.",

    "الخطة التشغيلية": "Operational Plan",
    "محاضر الاجتماعات": "Meeting Minutes",
    "مؤشرات الأداء": "Performance Indicators",
    "خطط الدروس": "Lesson Plans",
    "نماذج خطط الدروس": "Lesson Plan Samples",
    "نماذج أنشطة": "Activity Samples",
    "بطاقات خروج": "Exit Tickets",
    "سجلات المتابعة": "Follow-up Records",
    "تحليل النتائج": "Results Analysis",
    "خطط علاجية": "Remedial Plans",
    "خطط العلاج": "Remedial Plans",
    "نماذج اختبارات": "Test Samples",
    "نماذج الاختبارات": "Test Samples",
    "تقارير السلامة": "Safety Reports",
    "خطة السلامة": "Safety Plan",
    "خطط الإخلاء": "Evacuation Plans",
    "سجلات الصيانة": "Maintenance Records",
    "برامج الانضباط": "Discipline Programs",
    "برامج التوعية": "Awareness Programs",
    "دعوات أولياء الأمور": "Parent Invitations",
    "شراكات مجتمعية": "Community Partnerships",
    "نشرات إعلامية": "Media Bulletins",
    "الشراكات المجتمعية": "Community Partnerships",
    "لقاءات أولياء الأمور": "Parent Meetings",
    "برامج الدعم": "Support Programs",
    "خطط إرشادية": "Guidance Plans",
    "متابعة الغياب": "Absence Follow-up",
    "دراسات حالة": "Case Studies",
    "الإرشاد الطلابي": "Student Guidance",
    "رعاية الموهوبين": "Gifted Students Support",
    "صور الأنشطة": "Activity Photos",
    "شهادات إنجاز": "Achievement Certificates",
    "خطط موهوبات": "Gifted Program Plans",
    "الأنشطة المدرسية": "School Activities",
    "المسابقات": "Competitions",
    "روابط OneDrive": "OneDrive Links",
    "صور الشواهد": "Evidence Images",
    "فيديوهات توثيقية": "Documentation Videos",
    "نماذج إلكترونية": "Electronic Forms",
    "صور وفيديوهات": "Photos and Videos",

    "نموذج التقويم التفاعلي": "Interactive Evaluation Form",
    "اختر مستوى الأداء لكل مؤشر، وأضف ملاحظات مختصرة عند الحاجة.": "Select the performance level for each indicator and add brief notes when needed.",
    "لم يتم التقييم": "Not Evaluated",
    "٤ - متميز": "4 - Excellent",
    "٣ - متقدم": "3 - Advanced",
    "٢ - نامٍ": "2 - Developing",
    "١ - يحتاج تحسين": "1 - Needs Improvement",
    "مطبق بفاعلية وموثق": "Effectively applied and documented",
    "مطبق غالبًا": "Mostly applied",
    "مطبق جزئيًا": "Partially applied",
    "بحاجة لإجراء واضح": "Needs a clear action",
    "ملاحظات مختصرة لهذا المؤشر": "Brief notes for this indicator",
    "اكتب الملاحظة أو الإجراء المقترح...": "Write a note or suggested action...",
    "حفظ التقدم": "Save Progress",
    "مسح الإجابات": "Clear Answers",

    "بنك الشواهد": "Evidence Bank",
    "بنك الشواهد والروابط": "Evidence Bank and Links",
    "إضافة شاهد جديد": "Add New Evidence",
    "عنوان الشاهد": "Evidence Title",
    "نوع الشاهد": "Evidence Type",
    "رابط الشاهد": "Evidence Link",
    "وصف مختصر": "Short Description",
    "صورة": "Image",
    "فيديو": "Video",
    "ملف PDF": "PDF File",
    "رابط OneDrive": "OneDrive Link",
    "رابط": "Link",
    "كل الشواهد": "All Evidence",
    "الشواهد المحفوظة": "Saved Evidence",
    "تصدير الشواهد": "Export Evidence",
    "استيراد الشواهد": "Import Evidence",
    "إرشاد سريع لروابط OneDrive": "Quick Guide for OneDrive Links",
    "ارفع الملف إلى OneDrive.": "Upload the file to OneDrive.",
    "اضغط مشاركة ثم انسخ الرابط.": "Click Share, then copy the link.",
    "الصق الرابط في خانة رابط الشاهد.": "Paste the link in the evidence link field.",
    "اختر المجال المناسب ليظهر الشاهد في التقرير.": "Choose the appropriate domain so the evidence appears in the report.",
    "التوثيق داخل هذه النسخة يعمل بالروابط والحفظ المحلي. الرفع المباشر إلى OneDrive من داخل المنصة يحتاج ربط Microsoft Graph وحسابات صلاحيات.": "This version documents evidence using links and local storage. Direct upload to OneDrive from inside the platform requires Microsoft Graph integration and permission accounts.",
    "اربط كل شاهد بمجاله، إما برابط OneDrive أو فيديو أو صورة صغيرة.": "Link each evidence item to its domain using a OneDrive link, video, or small image.",
    "للمشاركة هنا: انسخ رابط OneDrive أو رابط الفيديو أو الصورة.": "For sharing here: copy the OneDrive, video, or image link.",
    "للملفات الكبيرة والفيديوهات الأفضل رفعها أولًا في OneDrive ثم لصق الرابط.": "For large files and videos, upload them to OneDrive first, then paste the link.",
    "للتضمين iframe أو كود فيديو أو رابط OneDrive، الصق الكود هنا.": "To embed an iframe, video code, or OneDrive link, paste the code here.",
    "رفع صورة صغيرة من الجهاز — اختياري": "Upload a small image from the device — optional",
    "لم يتم اختيار ملف": "No file selected",
    "اختيار ملف": "Choose File",
    "الصور الصغيرة فقط يمكن حفظها داخل المتصفح. الملفات الكبيرة والفيديوهات الأفضل ربطها من OneDrive.": "Only small images can be saved in the browser. Large files and videos are better linked from OneDrive.",
    "اكتب وصفًا يساعد لجنة التقويم على فهم الشاهد.": "Write a description that helps the evaluation committee understand the evidence.",
    "أضف أول شاهد من النموذج أعلاه.": "Add the first evidence item using the form above.",
    "عدد الشواهد": "Evidence Count",

    "التقرير النهائي": "Final Report",
    "التقرير النهائي وخطة التحسين": "Final Report and Improvement Plan",
    "ملخص التقرير": "Report Summary",
    "نقاط القوة": "Strengths",
    "أولويات التحسين": "Improvement Priorities",
    "خطة التحسين": "Improvement Plan",
    "خطة تحسين مقترحة": "Suggested Improvement Plan",
    "التوصيات": "Recommendations",
    "التوصيات الذكية": "Smart Recommendations",
    "ملخص الشواهد حسب المجال": "Evidence Summary by Domain",
    "يعرض هذا التقرير نتيجة التقويم، الشواهد، وأولويات التحسين المقترحة.": "This report presents the evaluation results, evidence, and suggested improvement priorities.",
    "استكمل تقييم جميع المؤشرات قبل اعتماد التقرير النهائي.": "Complete all indicators before approving the final report.",
    "ركز على بناء خطة تحسين قصيرة المدى للمجالات الأقل في النتيجة.": "Focus on creating a short-term improvement plan for the lowest-scoring domains.",
    "ركّز على بناء خطة تحسين قصيرة المدى للمجالات الأقل في النتيجة.": "Focus on creating a short-term improvement plan for the lowest-scoring domains.",
    "وثّق التقرير بإضافة روابط OneDrive وشواهد رقمية.": "Document the report by adding OneDrive links and digital evidence.",
    "يحتاج إلى إجراء تحسين واضح وشواهد داعمة.": "Needs a clear improvement action and supporting evidence.",
    "يحتاج إلى إجراء تحسين واضح و شواهد داعمة.": "Needs a clear improvement action and supporting evidence.",
    "تظهر المجالات الأقل نتيجة في أعلى الجدول.": "The lowest-scoring domains appear at the top of the table.",
    "المطلوب من الشواهد": "Required Evidence",
    "الإجراء المقترح": "Suggested Action",
    "المدة": "Duration",
    "أسبوعان إلى شهر": "Two weeks to one month",
    "تنفيذ إجراء تطويري وقياس أثره في نهاية الفترة.": "Implement an improvement action and measure its impact by the end of the period.",
    "طباعة أو حفظ PDF": "Print or Save PDF",
    "تصدير بيانات التقرير": "Export Report Data",
    "تعديل التقويم": "Edit Evaluation",
    "الشواهد المضافة": "Added Evidence",
    "المؤشرات المكتملة": "Completed Indicators",
    "موثق بروابط أو صور محلية.": "Documented with links or local images.",
    "أولوية تحسين عاجلة": "Urgent Improvement Priority",
    "حسب المجال": "by Domain",
    "دعوات أولياء الأمور، شراكات مجتمعية، نشرات إعلامية": "Parent Invitations, Community Partnerships, Media Bulletins",
    "خطط إرشادية، متابعة الغياب، دراسات حالة": "Guidance Plans, Absence Follow-up, Case Studies",
    "صور الأنشطة، شهادات إنجاز، خطط موهوبات": "Activity Photos, Achievement Certificates, Gifted Program Plans",
    "فيديوهات، نماذج إلكترونية، صور وروابط OneDrive": "Videos, Electronic Forms, Photos, and OneDrive Links",

    "ملخص إنجاز المدرسة": "School Achievement Summary",
    "تعرض هذه اللوحة حالة التقويم الذاتي بناءً على الإجابات والشواهد الموثقة.": "This dashboard shows the self-evaluation status based on responses and documented evidence.",
    "نسبة إكمال التقويم": "Evaluation Completion Rate",
    "عدد الشواهد المضافة": "Number of Added Evidence",
    "مجالات تحتاج متابعة": "Domains Requiring Follow-up",
    "متابعة المجالات": "Domain Follow-up",
    "يساعد هذا الجزء مشرف الدعم على معرفة مستوى كل مجال وعدد الشواهد المرتبطة به.": "This section helps the support supervisor review each domain level and related evidence.",
    "أولويات الدعم": "Support Priorities",
    "هذه المجالات تحتاج متابعة أو تعزيز الشواهد قبل اعتماد التقرير النهائي.": "These domains need follow-up or stronger evidence before final report approval.",
    "إرشادات مشرف الدعم": "Support Supervisor Guidelines",
    "راجع المجالات ذات النسبة الأقل أولًا.": "Review the lowest-scoring domains first.",
    "تأكد من وجود شاهد واضح لكل مؤشر مهم.": "Ensure clear evidence exists for each important indicator.",
    "دوّن ملاحظة دعم مختصرة عند الحاجة.": "Write a brief support note when needed.",
    "وجّه المدرسة لاستكمال الشواهد قبل طباعة التقرير النهائي.": "Guide the school to complete evidence before printing the final report.",
    "صدّر نسخة احتياطية بعد كل متابعة مهمة.": "Export a backup after each important follow-up.",
    "إضافة ملاحظة مشرف الدعم": "Add Support Supervisor Note",
    "درجة الأولوية": "Priority Level",
    "ملاحظة الدعم": "Support Note",
    "ملاحظات المتابعة المحفوظة": "Saved Follow-up Notes",
    "روابط متابعة رئيسة": "Main Follow-up Links",
    "اسم الرابط": "Link Name",
    "الروابط المحفوظة": "Saved Links",
    "بيانات المدرسة": "School Information",
    "اسم المدرسة أو المنصة": "School or Platform Name",
    "العام الدراسي": "Academic Year",
    "اسم المسؤول أو مشرف الدعم": "Responsible Person / Support Supervisor",
    "إجراءات المتابعة": "Follow-up Actions",
    "استخدم هذه الأزرار لمراجعة التقرير أو حفظ نسخة من بيانات المتابعة.": "Use these buttons to review the report or export a backup copy.",
    "تصدير نسخة احتياطية": "Export Backup",
    "لا توجد ملاحظات متابعة محفوظة بعد.": "No follow-up notes saved yet.",
    "لا توجد روابط محفوظة بعد.": "No saved links yet.",
    "لا توجد مجالات حرجة حاليًا. أداء المدرسة مطمئن.": "There are no critical domains at the moment. The school performance is reassuring.",
    "لم يبدأ التقييم": "Not Started",
    "متميز": "Excellent",
    "متقدم": "Advanced",
    "نامٍ": "Developing",
    "بحاجة إلى دعم": "Needs Support",
    "عادية": "Normal",
    "متوسطة": "Medium",
    "عالية": "High",

    "هـ": "AH"
  };

  const MIXED_FIXES = {
    "Evaluated 4 4 من Indicators. Evidence Count: 0.": "Evaluated 4 of 4 indicators. Evidence Count: 0.",
"Evaluated 0 4 من Indicators. Evidence Count: 0.": "Evaluated 0 of 4 indicators. Evidence Count: 0.",
"Evaluated 4 من 4 Indicators. Evidence Count: 0.": "Evaluated 4 of 4 indicators. Evidence Count: 0.",
"Evaluated 0 من 4 Indicators. Evidence Count: 0.": "Evaluated 0 of 4 indicators. Evidence Count: 0.",

"Domain نسبة": "Domain Score",
"نسبة Domain": "Domain Score",
"— نسبة Domain 0% — Evidence 0": "— Domain Score 0% — Evidence 0",

"مراجعة الشواهد": "Review Evidence",
"اكتب ملاحظة مختصرة حول ما تحتاجه المدرسة...": "Write a brief note about what the school needs...",
"...اكتب ملاحظة مختصرة حول ما تحتاجه المدرسة": "Write a brief note about what the school needs...",

"المدرسة Evidence مثال: ملف": "Example: School Evidence File",
"مثال: ملف Evidence المدرسة": "Example: School Evidence File",
"Linkال": "Link",
"الرابط": "Link",

"منصة التقويم الذاتي في المدرسة": "School Self-Evaluation Platform",
"أ/ فاطمة هزازي": "Fatimah Hazazi",
"١٤٤٧هـ": "1447 AH",
    "Indicatorsإكمال ال": "Completed Indicators",
"إكمال الIndicators": "Completed Indicators",
"المؤشرات المكتملة": "Completed Indicators",

"Domains نتائج": "Domain Results",
"نتائج Domains": "Domain Results",
"نتائج المجالات": "Domain Results",

".موثًقا Report حتى يصبح Links OneDriveرقمية و Evidence أضف": "Add digital evidence and OneDrive links to make the report documented.",
"موثًقا Report حتى يصبح Links OneDriveرقمية و Evidence أضف": "Add digital evidence and OneDrive links to make the report documented.",
"موثقًا Report حتى يصبح Links OneDrive رقمية و Evidence أضف": "Add digital evidence and OneDrive links to make the report documented.",
"أضف Evidence رقمية وOneDrive Links حتى يصبح Report موثقًا.": "Add digital evidence and OneDrive links to make the report documented.",

"Domain الأولوية Suggested Action": "Domain Priority Suggested Action",
"Evidenceال المطلوب": "Required Evidence",
"Evidenceال\nالمطلوب": "Required Evidence",
"الEvidence المطلوب": "Required Evidence",
"المطلوب Evidence": "Required Evidence",
"الأولوية": "Priority",
"المطلوب": "Required Evidence",
    "أضف OneDrive Links أو روابط صغيرة أو Video, ثم اربط All Evidence بDomainه.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",
"أضف OneDrive Links أو صورًا صغيرة أو Video, ثم اربط All Evidence بDomainه.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",
"أضف OneDrive Links أو روابط صغيرة أو Video, ثم اربط All Evidence ب Domainه.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",

"لDomain": "Domain",
"الDomain": "Domain",
"Domainال": "Domain",

"Evidenceتاريخ ال": "Evidence Date",
"تاريخ الEvidence": "Evidence Date",
"تاريخ Evidence": "Evidence Date",

"أو كود التضمين OneDrive Link": "OneDrive Link or Embed Code",
"OneDrive Link أو كود التضمين": "OneDrive Link or Embed Code",

"للتضمين iframe أو كود الVideo Link أو OneDrive المشاركة من Link الصق": "Paste the sharing link from OneDrive, a video link, or an iframe embed code.",
"للتضمين iframe أو كود Videoال Link أو OneDrive المشاركة من Link الصق": "Paste the sharing link from OneDrive, a video link, or an iframe embed code.",
"للتضمين iframe أو كود ال Video Link أو OneDrive المشاركة من Link الصق": "Paste the sharing link from OneDrive, a video link, or an iframe embed code.",

"Evidence المحفوظة": "Saved Evidence",
"المحفوظة Evidence": "Saved Evidence",
"Evidence تصدير": "Export Evidence",
"Evidence استيراد": "Import Evidence",
"تصدير Evidence": "Export Evidence",
"استيراد Evidence": "Import Evidence",

"Evidence Count: 0 0 من": "Evidence Count: 0 of 0",
"Evidence Count: 0 من 0": "Evidence Count: 0 of 0",
"لم تُضف Evidence بعد. Add the first evidence item using the form above.": "No evidence has been added yet. Add the first evidence item using the form above.",
"تضفُ لم Evidence بعد. Add the first evidence item using the form above.": "No evidence has been added yet. Add the first evidence item using the form above.",
    "أضف Links OneDrive أو روابط صغيرة أو صور أو Video, ثم اربط Evidence All بDomainه.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",
"أضف OneDrive Links أو روابط صغيرة أو صور أو Video, ثم اربط All Evidence بDomainه.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",
"أضف روابط OneDrive أو صورًا صغيرة أو فيديو، ثم اربط كل شاهد بمجاله.": "Add OneDrive links, small images, or videos, then link each evidence item to its domain.",

"للملفات الكبيرة والVideos: ارفعها أولًا في OneDrive ثم انسخ Link المشاركة هنا.": "For large files and videos, upload them to OneDrive first, then copy the sharing link here.",
"للملفات الكبيرة وال Videos: ارفعها أولًا في OneDrive ثم انسخ Link المشاركة هنا.": "For large files and videos, upload them to OneDrive first, then copy the sharing link here.",
"Videosللملفات الكبيرة وال": "For large files and videos",

"مثال: Image تنفيذ برنامج علاجي": "Example: Remedial Program Implementation",
"تنفيذ برنامج علاجي Image :مثال": "Example: Remedial Program Implementation",

"Domainال": "Domain",
"Evidenceتاريخ ال": "Evidence Date",
"أو كود التضمين Link OneDrive": "OneDrive Link or Embed Code",
"للتضمين iframe أو كود Videoال Link أو OneDrive المشاركة من Link الصق": "Paste the sharing link from OneDrive, a video link, or an iframe embed code.",

"الصور الصغيرة فقط يمكن حفظها داخل المتصفح. الVideos والملفات الكبيرة الأفضل ربطها من OneDrive.": "Only small images can be saved in the browser. Large videos and files are better linked from OneDrive.",
"الصور الصغيرة فقط يمكن حفظها داخل المتصفح. الملفات الكبيرة والفيديوهات الأفضل ربطها من OneDrive.": "Only small images can be saved in the browser. Large files and videos are better linked from OneDrive.",

"اكتب وصفًا يساعد لجنة Evaluation على فهم الEvidence": "Write a description that helps the evaluation committee understand the evidence.",
"Evidenceعلى فهم ال Evaluation اكتب وصفًا يساعد لجنة": "Write a description that helps the evaluation committee understand the evidence.",

"ارفع الImage أو الVideo أو الملف إلى OneDrive.": "Upload the image, video, or file to OneDrive.",
"ارفع ال Image أو ال Video أو الملف إلى OneDrive.": "Upload the image, video, or file to OneDrive.",
"الصق الLink في خانة OneDrive Link.": "Paste the link in the OneDrive Link field.",
"الصق ال Link في خانة OneDrive Link.": "Paste the link in the OneDrive Link field.",

"Evidence Count: 0 0 من": "Evidence Count: 0 of 0",
"Evidence Count: 0 من 0": "Evidence Count: 0 of 0",
"لم تُضف Evidence بعد. Add the first evidence item using the form above.": "No evidence has been added yet. Add the first evidence item using the form above.",
"تضفُ لم Evidence بعد. Add the first evidence item using the form above.": "No evidence has been added yet. Add the first evidence item using the form above.",
    ".OneDrive الرقمية, الروابط, وملفات Evidence تنظيم": "Organizing OneDrive links, digital files, and evidence.",
"OneDrive الرقمية, الروابط, وملفات Evidence تنظيم": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم Evidence وملفات الروابط، الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
    "Evaluation تقدم": "Evaluation Progress",
"تم تقييم 4 من 32 Indicator": "4 of 32 indicators evaluated",
"تم تقييم": "Evaluated",
"من 32 Indicator": "of 32 indicators",
"الأداء في المجاب": "Answered Performance",
"عامة Readiness": "Overall Readiness",

"Select the performance level لكل Indicator, المتصفح في وسيتم حفظ تقدمك تلقائيًا.": "Select the performance level for each indicator. Your progress will be saved automatically in the browser.",
"Select the performance level لكل Indicator": "Select the performance level for each indicator",
"وسيتم حفظ تقدمك تلقائيًا.": "Your progress will be saved automatically.",
"المتصفح في": "in the browser",

"Quick Dashboard": "Quick Dashboard",
"اجمع البيانات، أضف Evidence, ثم اطبع Final Report.": "Collect data, add evidence, then print the final report.",
"Final Report ثم اطبع ,Evidence اجمع البيانات, أضف": "Collect data, add evidence, then print the final report.",

"تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم Evidence وملفات الروابط، الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"OneDrive الرقمية, الروابط, وملفات Evidence تنظيم.": "Organizing OneDrive links, digital files, and evidence.",
    "تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
"تنظيم Evidence وملفات الروابط، الرقمية OneDrive.": "Organizing OneDrive links, digital files, and evidence.",
    "تنظيم Evidence وملفات الروابط، الرقمية OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
"تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
"تنظيم الروابط والملفات الرقمية وشواهد OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
"تنظيم الروابط، والملفات الرقمية، وشواهد OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
    "تتابع المدرسة إجراءات السلامة والصيانة بimage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
"تتابع المدرسة إجراءات السلامة والصيانة بImage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
"تُتابع المدرسة إجراءات السلامة والصيانة بimage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
"تُتابع المدرسة إجراءات السلامة والصيانة بImage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",

"تُكتشف مواهب الطلاب وترعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
"تكتشف مواهب الطلاب وترعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
"تُكتشف مواهب الطلاب وتُرعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
"تكتشف مواهب الطلاب وتُرعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
    "البنائي Evaluationجودة التخطيط, تنوع الاستراتيجيات, و": "Planning quality, varied strategies, and effective formative assessment.",
"البنائي Evaluationجودة التخطيط، تنوع الاستراتيجيات، و": "Planning quality, varied strategies, and effective formative assessment.",

"تتابع المدرسة إجراءات السلامة والصيانة بImage منظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
"تتابع المدرسة إجراءات السلامة والصيانة بimage منظمة.": "The school follows up on safety and maintenance procedures in an organized way.",

"تُرصد احتياجات الطلاب الإرشادية والتعليمية بشكل منظم": "Students’ guidance and learning needs are monitored systematically.",
"تُرصد احتياجات الطلاب الإرشادية والتعليمية بشكل منظم.": "Students’ guidance and learning needs are monitored systematically.",
"تُتابع المدرسة الغياب والتأخر وتنفذ إجراءات علاجية مناسبة": "The school follows up on absence and tardiness and implements appropriate remedial actions.",
"تُتابع المدرسة الغياب والتأخر وتنفذ إجراءات علاجية مناسبة.": "The school follows up on absence and tardiness and implements appropriate remedial actions.",
"تُقاس فاعلية برامج التوجيه والدعم الطلابي بوضوح": "The effectiveness of guidance and student support programs is clearly measured.",
"تُقاس فاعلية برامج التوجيه والدعم الطلابي بوضوح.": "The effectiveness of guidance and student support programs is clearly measured.",

"تُوثق المدرسة أثر الشراكات والبرامج المجتمعية": "The school documents the impact of partnerships and community programs.",
"تُوثق المدرسة أثر الشراكات والبرامج المجتمعية.": "The school documents the impact of partnerships and community programs.",

"تُكتشف مواهب الطلاب وترعى من خلال برامج واضحة": "Students’ talents are identified and supported through clear programs.",
"تُكتشف مواهب الطلاب وترعى من خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",

"تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
"تنظيم Evidence وملفات الروابط، الرقمية OneDrive.": "Organizing OneDrive, digital links, and evidence files.",
"تنظيم Evidence وملفات الروابط، الرقمية OneDrive": "Organizing OneDrive, digital links, and evidence files.",

"توثق البرامج والإنجازات بPhotos and Videos وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with photos, videos, and accessible links.",
"تُوثق البرامج والإنجازات بPhotos and Videos وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with photos, videos, and accessible links.",
"وروابط يمكن الرجوع إليها Photos and Videosتُوثق البرامج والإنجازات ب": "Programs and achievements are documented with photos, videos, and accessible links.",
    "البنائي Evaluationجودة التخطيط, تنوع الاستراتيجيات, و": "Planning quality, varied strategies, and effective formative assessment.",
    "البنائي Evaluation جودة التخطيط, تنوع الاستراتيجيات, و": "Planning quality, varied strategies, and effective formative assessment.",
    "البنائي Evaluationجودة التخطيط، تنوع الاستراتيجيات، و": "Planning quality, varied strategies, and effective formative assessment.",
    "البنائي Evaluation جودة التخطيط، تنوع الاستراتيجيات، و": "Planning quality, varied strategies, and effective formative assessment.",

    "تتابع المدرسة إجراءات السلامة والصيانة بImage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",
    "تتابع المدرسة إجراءات السلامة والصيانة بimage منتظمة.": "The school follows up on safety and maintenance procedures in an organized way.",

    "تكتشف مواهب الطلاب وترعى of خلال برامج واضحة.": "Students’ talents are identified and supported through clear programs.",
    "ترصد احتياجات الطلاب الإرشادية والتعليمية بشكل ofظم.": "Students’ guidance and learning needs are monitored systematically.",

    "OneDrive الرقمية, الروابط, وملفات Evidence تنظيم": "Organizing links, digital files, and OneDrive evidence.",
    "تنظيم Evidence وملفات الروابط, الرقمية OneDrive.": "Organizing links, digital files, and OneDrive evidence.",
    "الرقمية وتصنيفها Evidence توجد آلية منظمة لحفظ": "There is an organized mechanism for saving and classifying digital evidence.",
    "توثق البرامج والإنجازات بPhotos and Videos وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with photos, videos, and accessible links.",
    "توثق البرامج والإنجازات ب Videos and Photos وروابط يمكن الرجوع إليها.": "Programs and achievements are documented with photos, videos, and accessible links.",

    "استعراض Domains Evaluation المقترحة والIndicators وEvidence.": "Review domains, indicators, and suggested evidence.",
    "اختيار مستوى الأداء لكل Indicator وحفظ Save Progress.": "Select the performance level for each indicator and save progress.",
    "إضافة روابط Evidence والصور والVideoهات وتصنيفها.": "Add evidence links, images, videos, and classify them.",
    "عرض النتائج وRecommendations وImprovement Plan والطباعة.": "View results, recommendations, the improvement plan, and print.",
    "استعراض Domains Evaluation": "Review the evaluation domains,",
    "المقترحة والIndicators وEvidence.": "indicators, and suggested evidence.",
    "اختيار مستوى الأداء لكل Indicator": "Select the performance level for each indicator",
    "وSave Progress.": "and save progress.",
    "evidence المقترحة": "suggested evidence",
    "Evidence المقترحة": "suggested evidence",
    "المقترحة.": "suggested evidence.",

    "Final Report وImprovement Plan": "Final Report and Improvement Plan",
    "Indicatorsال إكمال": "Completed Indicators",
    "Evidence المضافة": "Added Evidence",
    "Recommendations الذكية": "Smart Recommendations",
    "Domain حسب ال Evidence ملخص": "Evidence Summary by Domain",
    "المطلوب Evidence ال": "Required Evidence",
    "موثقًا Report حتى يصبح OneDrive Links رقمية و Evidence أضف": "Add digital evidence and OneDrive links to make the report documented.",
    "يحتاج إلى إجراء تحسين واضح و Evidence داعمة.": "Needs a clear improvement action and supporting evidence.",
    "والروابط Evidence Bank": "Evidence Bank and Links",
    "OneDrive Linksإرشاد سريع ل": "Quick Guide for OneDrive Links",
    "أو كود التضمين OneDrive Link": "OneDrive Link or Embed Code",
    "التاريخ Evidence ال": "Evidence Date",
    "اختياري Image رفع صغيرة من الجهاز": "Optional image upload from device",
    "أضف أول Evidence من النموذج أعلاه.": "Add the first evidence item using the form above.",
    "من 0 Evidence: 0 عدد": "Evidence count: 0 of 0",
    "استيراد Evidence": "Import Evidence",
    "تصدير Evidence": "Export Evidence",
    "المحفوظة Evidence": "Saved Evidence",
    "Evidence المحفوظة": "Saved Evidence",
    "Evidence تصدير": "Export Evidence",
    "Evidence استيراد": "Import Evidence",
    "كل Evidence": "All Evidence",

    "Videoهات": "Videos"
  };

  function lang() {
    return localStorage.getItem(LANG_KEY) || "ar";
  }

  function toLatinDigits(text) {
    if (lang() !== "en") return text;

    return String(text)
      .replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
      .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
      .replace(/٪/g, "%")
      .replace(/،/g, ",")
      .replace(/؛/g, ";")
      .replace(/؟/g, "?")
      .replace(/(\d)AH/g, "$1 AH")
      .replace(/هـ/g, "AH");
  }

  function translateText(text) {
    if (lang() === "ar") return text;

    let output = String(text);

    Object.keys(DICT)
      .sort((a, b) => b.length - a.length)
      .forEach(ar => {
        output = output.split(ar).join(DICT[ar]);
      });

    Object.keys(MIXED_FIXES)
      .sort((a, b) => b.length - a.length)
      .forEach(mixed => {
        output = output.split(mixed).join(MIXED_FIXES[mixed]);
      });

      output = output.replace(
    /.*تنظيم\s+Evidence\s+وملفات\s+الروابط[،,]\s*الرقمية\s+OneDrive\.?/g,
    "Organizing OneDrive links, digital files, and evidence."
  );

  output = output.replace(
    /.*OneDrive\s+الرقمية[،,]\s*الروابط[،,]\s*وملفات\s+Evidence\s+تنظيم.*/g,
    "Organizing OneDrive links, digital files, and evidence."
  );

  output = output.replace(
    /.*تنظيم\s+الروابط.*الملفات\s+الرقمية.*OneDrive.*/g,
    "Organizing OneDrive links, digital files, and evidence."
  );
    output = output.replace(
    /Evaluation\s*تقدم|تقدم\s*Evaluation/g,
    "Evaluation Progress"
  );

  output = output.replace(
    /عامة\s*Readiness|Readiness\s*عامة/g,
    "Overall Readiness"
  );

  output = output.replace(
    /كل\s*Domains|Domains\s*كل/g,
    "All Domains"
  );

  output = output.replace(
    /Select the performance level for each indicator[\s\S]*وسيتم حفظ تقدمك[\s\S]*المتصفح\.?/g,
    "Select the performance level for each indicator. Your progress will be saved automatically in the browser."
  );

  output = output.replace(
    /.*Final Report.*Evidence.*اجمع البيانات.*أضف.*/g,
    "Collect data, add evidence, then print the final report."
  );

  output = output.replace(
    /.*اجمع البيانات.*Evidence.*Final Report.*/g,
    "Collect data, add evidence, then print the final report."
  );
    output = output.replace(
    /Evaluated\s+(\d+)\s+(\d+)\s+من\s+Indicators\. Evidence Count:\s*(\d+)\./g,
    "Evaluated $1 of $2 indicators. Evidence Count: $3."
  );

  output = output.replace(
    /Evaluated\s+(\d+)\s+من\s+(\d+)\s+Indicators\. Evidence Count:\s*(\d+)\./g,
    "Evaluated $1 of $2 indicators. Evidence Count: $3."
  );

  output = output.replace(/Linkال/g, "Link");
  output = output.replace(/الLink/g, "Link");

    output = toLatinDigits(output);

  output = output.replace(
    /Evaluated\s+(\d+)\s+من\s+(\d+)\s+Indicators\. Evidence Count:\s*(\d+)\./g,
    "Evaluated $1 of $2 indicators. Evidence Count: $3."
  );

  output = output.replace(
    /Evaluated\s+(\d+)\s+(\d+)\s+من\s+Indicators\. Evidence Count:\s*(\d+)\./g,
    "Evaluated $1 of $2 indicators. Evidence Count: $3."
  );

  return output;
  }

  function shouldSkip(node) {
    const parent = node.parentElement;
    if (!parent) return true;

    return ["SCRIPT", "STYLE", "CODE", "PRE"].includes(parent.tagName);
  }

  function translateAttributes() {
    ["placeholder", "title", "alt", "aria-label"].forEach(attr => {
      document.querySelectorAll(`[${attr}]`).forEach(el => {
        const current = el.getAttribute(attr);
        const next = translateText(current);

        if (current !== next) {
          el.setAttribute(attr, next);
        }
      });
    });
  }

  function translateTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (!shouldSkip(node) && node.nodeValue.trim()) {
        nodes.push(node);
      }
    }

    nodes.forEach(node => {
      const current = node.nodeValue;
      const next = translateText(current);

      if (current !== next) {
        node.nodeValue = next;
      }
    });
  }

  function setDirection() {
    if (lang() === "en") {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      document.body.classList.add("is-en");
    } else {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      document.body.classList.remove("is-en");
    }
  }

  function addLanguageButton() {
    if (document.querySelector(".language-switch")) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "language-switch no-print";
    button.textContent = lang() === "ar" ? "English" : "العربية";

    button.addEventListener("click", () => {
      localStorage.setItem(LANG_KEY, lang() === "ar" ? "en" : "ar");
      location.reload();
    });

    const nav = document.querySelector(".nav-links");

    if (nav) {
      nav.appendChild(button);
    } else {
      document.body.appendChild(button);
    }
  }

  function translatePage() {
    setDirection();
    addLanguageButton();

    if (lang() !== "en") return;

    translateTextNodes();
    translateAttributes();

    const newTitle = translateText(document.title);
    if (document.title !== newTitle) {
      document.title = newTitle;
    }
  }

  const style = document.createElement("style");
  style.textContent = `
    .language-switch {
      border: 1px solid #b8d5c8;
      background: #ffffff;
      color: #073b2e;
      border-radius: 999px;
      padding: 8px 16px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 8px 22px rgba(7, 59, 46, 0.08);
    }

    body > .language-switch {
      position: fixed;
      top: 16px;
      left: 16px;
      z-index: 9999;
    }

    html[dir="ltr"] body {
      direction: ltr;
      text-align: left;
    }

    html[dir="ltr"] .nav,
    html[dir="ltr"] .hero-content,
    html[dir="ltr"] .section-head,
    html[dir="ltr"] .grid,
    html[dir="ltr"] .footer .container,
    html[dir="ltr"] .timeline,
    html[dir="ltr"] .progress-panel {
      direction: ltr;
    }

    html[dir="ltr"] .field,
    html[dir="ltr"] .login-card .field {
      text-align: left;
    }

    html[dir="ltr"] .check-list li {
      padding-right: 0;
      padding-left: 34px;
    }

    html[dir="ltr"] .check-list li::before {
      right: auto;
      left: 0;
    }

    html[dir="ltr"] .crumbs {
      direction: ltr;
    }
  `;
  document.head.appendChild(style);

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(translatePage, 120);

    let timer = null;

    const observer = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(translatePage, 120);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  });

  window.I18N = {
    translatePage,
    lang
  };
})();