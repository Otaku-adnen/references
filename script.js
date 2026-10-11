const main = document.getElementById('main');
const livres=[
    {
        nom:"محمد حسن بريغش",
        livre:"أدب الأطفال - أهدافه وسماته(صفحة 216–224)",
        page:"217",
        lien:"lis_at0303(1).pdf"
    },
    {
        nom:"محمد حسن بريغش",
        livre:"أدب الأطفال - الأسلوب وخصائص أدب الطفل(صفحة 179–187 و191–192)",
        page:"180",
        lien:"lis_at0303(1).pdf"
    },
    {
        nom:"محمد حسن بريغش",
        livre:"أدب الأطفال - أنواع قصة الأطفال والخيال والمغامرات(صفحة 224–232)",
        page:"225",
        lien:"lis_at0303(1).pdf"
    },
    {
        nom:"علي الحديدي",
        livre:"في أدب الأطفال",
        page:"1",
        lien:"Noor-Book.com(2).pdf"
    },
    {
        nom:"أحمد نجيب",
        livre:"أدب الأطفال - علم وفن",
        page:"1",
        lien:"Noor-Book.com(3).pdf"
    },
    {
        nom:"مفتاح محمد دياب",
        livre:"مقدمة في ثقافة وأدب الأطفال",
        page:"1",
        lien:"Noor-Book.com(4).pdf"
    },
    {
        nom:"سمر روحي الفيصل",
        livre:"ﻗﺿﺎﻳﺎ اﻟﻠ ّﻐﺔ اﻟﻌرﺑﻳﺔ ﻓﻲ اﻟﻌﺻر اﻟﺣدﻳث(ﺻﻔﺣﺔ 78)",
        page:"79",
        lien:"lis_arb1206(5).pdf"
    }

];
livres.forEach((livre)=>{
const card=document.createElement('div');
card.classList.add('card');
card.innerHTML=`<p><span>الكتاب : </span>${livre.livre}</p>
<p><span>المألف : </span>${livre.nom}</p>
<a href="show.html?file=${livre.lien}&page=${livre.page}" target="_blank">إطلع على المصدر</a>`;
main.appendChild(card);
});