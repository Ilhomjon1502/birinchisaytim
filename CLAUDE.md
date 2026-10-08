# Ilhomjon Ibragimov — shaxsiy sayt

## Loyiha
- Ilhomjon Ibragimov (Codial akademiyasi menejeri va mentori, 6+ yil tajriba) uchun bir sahifali shaxsiy sayt.
- Maqsad: bolalarga IT ta'limi va dasturiy ta'minot xizmatlarini tanishtirish, ota-onalar va mijozlarni aloqaga chiqarish.
- Til: o'zbek (lotin). Foydalanuvchi bilan ham o'zbekcha gaplashiladi.

## Uslub
- Professional, sokin, minimalistik, yorqin "education" uslubi. Ohang: samimiy, qisqa, "siz" bilan.
- Ranglar faqat `style.css` dagi `:root` tokenlaridan: ko'k `#2563eb`, sariq `#f59e0b`, yashil `#10b981`, fon `#f8fafc`.
- Shrift: Manrope. Yangi rang yoki shrift qo'shishdan oldin so'ra.
- Sayt doim yorug' rejimda ochiladi; tungi rejim faqat 🌙 tugmasi orqali.
- Har o'zgarish telefon (375px) va tungi rejimda ham to'g'ri ko'rinishi shart.

## Texnik chegaralar
- Faqat oddiy HTML/CSS/JS: `index.html`, `style.css`, `script.js` va rasmlar. Framework, npm, build bosqichi yo'q.
- Tashqi kutubxona ishlatma (Google Fonts bundan mustasno). Ikonkalar — `index.html` dagi inline SVG `<symbol>`.
- Rasmlar loyiha papkasida, nisbiy yo'l bilan ulanadi.
- Lokal ko'rish: `.claude/launch.json` dagi `site` (python http.server, 5500-port).

## Animatsiyalar
- Orqa fon: `index.html` dagi `.bg-glow` (3 ta dog', `--blob-a`, `--blob-b`, `--green` tokenlari). Faqat `transform`/`opacity` animatsiya qilinadi.
- Skrollda paydo bo'lish: `script.js` ro'yxatdagi elementlarga `.reveal` qo'shadi, ekranga kirganda `.visible`. Yangi blok qo'shilsa, selektorni o'sha ro'yxatga qo'sh.
- Bosilganda `:active` → `scale(.96)`; rejim tugmasi `.spin` bilan aylanadi.
- Har yangi animatsiya `prefers-reduced-motion: reduce` da o'chirilishi shart.
- Gorizontal skroll bo'lmasligi kerak: chetga chiqadigan elementlarni (masalan `.float`) 1024px va 375px da tekshir.

## Ish qoidalari
- Qurishdan oldin qisqa reja ko'rsat va tasdiqni kut.
- Kichik qadamlar: bitta o'zgarish → brauzerda tekshirish → natijani aytish.
- Foydalanuvchi qadamma-qadam so'rasa, bir vaqtda faqat bitta qadam ber.
- Murakkablashtirma: eng oddiy yechimni tanla.
- GitHub (`Ilhomjon1502/birinchisaytim`, `main`) ga push → Netlify va Vercel avtomatik yangilanadi. Push faqat foydalanuvchi rozi bo'lganda.
- Parol, token, API kalitlarini hech qachon faylga yozma va commit qilma.
