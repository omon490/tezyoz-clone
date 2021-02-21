export default () => {

  const texts = [
    `"Oliy ta'lim" atamasi zaminida iqtisod, fan, texnika va madaniyat sohasida faoliyat olib boruvchi, ish mobaynida ilm-fan, madaniyat, texnika yangiliklarini qo'llagan va o’z ustida ishlagan holda nazariy va amaliy muammolarni bartaraf etuvchi yuqori malakali mutaxassislarni tayyorlash tushuniladi.
    Oliy ta'limning asosiy maqsadi zamon talablariga javob bera oladigan malakali, raqobatbardosh, yuksak bilimli, oliy ta'lim mutaxassisi talablariga o’zi tanlagan yo’nalishi yuzasidan talabga javob bera oladigan respublikaning ilm-fan, madaniyat, iqtisod, ijtimoiy sohalarini rivojlantirishda o’z hissasini qo’shadigan, mustaqil fikrlaydigan, yuksak ma'naviyatga bo’lgan yuqori salohiyatli mutaxassislarni tayyorlashdir.`,

    `Uchinchi JavaScript full stack web dasturlash kurslari boshlandi JavaScript web dasturlash yo'nalishidan ochilgan uchinchi guruhlarda ilk darslar boshlandi. Bugundan boshlab, ular uchun 1 oylik sinov tarzidagi darslar olib boriladi. Sinovdan o'tgan o'quvchilar esa, JavaScript web dasturlash kursini to'liq o'qib tugatishlari mumkin bo'ladi. Bootcamp tarzida o'qish, ular uchun sohani yanada chuqurroq egallashga xizmat qiladi. Har kunlik mashqlar, amaliy vazifalar orqali esa, ular bilimlarini yanada mustahkamlab boradilar. Networking - ya'ni o'quvchilar bir-birlari bilan fikr almashib ishlashlari, boshqa o'quvchilarning ham xatolarini tahlil qilib borishlari orqali, ular o'zlarida kuzatilishi mumkin bo'lgan xatoliklarni oldini olishlari va keng fikrlashlari mumkin bo'ladi.`,

    `Najot Taʼlimda dasturlashning bootcamp yoʻnalishlari uchun qabul nega to'xtatilgan edi? Xabaringiz bor, bir necha kun oldin Najot Taʼlimda dasturlashning bootcamp yoʻnalishlari uchun qabul to'xtatilgan edi. Aytib oʻtish kerakki, oʻtgan bir necha oy davomida dasturlashni oʻqitish borasida uchrayotgan muammolar, qiyinchiliklar oʻrganib chiqildi. IT bozoriga mutaxassislarni yana-da kuchliroq qilib tayyorlash borasida takliflar oʻrtaga tashlanib, maqbullarini amaliyotga joriy etish, yaʼni yangi strategiyani yoʻlga qoʻyish uchun ham bu yoʻnalishlarga qabul vaqtincha toʻxtatildi. Xoʻsh, "Dasturlashning bootcamp yoʻnalishlari uchun yangi strategiyadan nimalar oʻrin oldi?", "Endi dasturlash kurslariga qabul jarayoni qiyinlashadimi?", "Nega dasturlash kurslariga "Foundation" o'qib keyin qabul qilinish tizimi joriy etildi?", "Foundation uchun qanday bonus taqdim etilmoqda?", "Ota-onalar farzandlarini dasturlash kursiga olib kelishidan oldin ulardagi qaysi jihatlarga eʼtibor berishi kerak?" kabi savollarga javob olish uchun shu haqidagi videoni tomosha qiling`,

    `Ablah do'st dushmandan yomon, Ne hiyla bilsa, ishlatar oson`,

    `Arpa-bug'doy bir kuningga yaraydi, Sodiq do'sting o'lguningcha yaraydi.`,

    `Bostirmadan ayvon yaxshi, Yomon do'stdan hayvon yaxshi`,

    `Dushman uyida yashagandan, Do'st uyida o'lgan yaxshi.`,

    `Dushjmanimning do'sti - mening dushmanim, Dushmanimning dushmani - mening do'stim.`,

    `Do'st ziyonkor bo'lmas, Ziyonkor do'st bo'lmas.`,

    `Bilmaganni bildim dema, Qilmaganni qildim dema.`,

    `Davlat uchun erga tekkandan, yerga teg.`,

    `Zarraday joydan ko'ngil to'lar, Zarraday joydan ko'ngil qolar.`,

    `Kuchuk tomga chiqsa ham, Egasidan katta bo'lmas.`,

    `Xotin hurmat qilsa, hurmat ko'radi, Er hurmat qilsa, ne'mat ko'radi.`,

    `Achchiq bilan chuchukni totgan bilar, Uzoq bilan yaqinni — yurgan.`,

    `Bug'doy noning bo'lmasa ham, Ochiq yuzing bo'lsin.`,

    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,

    `Ikki oshna yoshlikdan birga o'sdilar. Davr kelib ikkalasi ham o'z baxtini izlab yo'lga chiqsalar, ikki yo'l uchraydi. Biri bir tomonga, ikkinchisi boshqa tomonga yo'l oladilar. Ulardan biri shaharma-shahar yurib ilm-u hunar orttiradi. Ikkinchisi, borgan shahrida podshoh saylash uchun uchirilgan semurg' qush tasodifan uning boshiga qo'nib, shu shaharga shoh bo'lib qoldi. Yillar o'tib, do'sti shu shaharga keladi. Har yerga qo'yilgan shahar shohining rasmiga ko'zi tusha-di. Do'stining iqbolidan shodlanib, uni ko'rishga oshiqdi. Podshoh saroyiga borib uning huzuriga kirdi. Podshoh uni tanib, tanimaslikka oldi. U kuyunib, yonib «Axir men sening do'sting falonchiman-ku!» deb o'zini tanitdi. Podshoh esa: «Xo'sh, mendan nima istaysan», dedi. Do'sti esa «Sendan hech qanday iltimosim yo'q. Shahringga kelsam, xalq orasida podshohning ko'zlari ojiz bo'lib qolibdi, degan xunuk xabarni eshitdim. Shuning uchun do'stimning holidan xabar olay deb huzuringga kelgan edim», debdi-yu, yo'liga qaytibdi.`,

    `Go'zallik deganda, ko'z oldimga birinchi bo'lib gul tasviri keladi. Balki gul go'zallik ramzidir. Go'zallikni his qilmay turib, u haqida gapirish go'yoki gulni ko'rmasdan uni tavsiflashga o'xshaydi. Go'zallik hech qanday qolipga sig'maydi. U o'z nomi bilan go'zallik. U haqida gapirganda uzoq yo'lga otlanish oldidan kerakli buyumlarini chamadonga solayotgan sayyohni eslayman. Sayyoh barcha kerakli narsalarai chamadonga joylab, uni arang berkitadi, kerakli nimasidir esiga tushib, yana ming azobda ochib yopadi, yana kerakli narsalar chiqaveradi-chiqaveradi. qoldirib ketishga ko'zi qiymaydi...`,

    `Kamtarlik - inson qiyofasini bezovchi bebaho fazilatlardan biri. Haqiqiy kamtarlik, insonparvarlik, odamiylik kabi xislatlar bilan uzviy bog'liqdir. Kamtar odam o'zini hech qachon mehnatkash xalqdan ustun qo'ymaydi. Xalq bilan doimo bir tan, bir jon bo'lib yashaydi. Oilada, turmushda, yurish-turishda, kiyinishda oddiy odamlarga nisbatan samimiy munosabatda bo'ladilar.`,

    `Bolalikni bahorga o'xshatilishining yana boshqa sabablari ham bor. Ya'ni kuzda ko'tariladigan xirmon bahorda sepilgan urug'ga bog'liq bo'lgani kabi, sizning qanday insonlar bo'lib yetishishingiz, albatta, bolalikda nimalarni o'rganishingiz, qanday odatlarga ega bo'lishingiz, odob-axloqni qay yo'sinda egallashingizga bog'liqdir. Mana shuning uchun ham sizning eng birinchi vazifangiz ota-onangizning, el-yurtingizning odobli farzandi bo'lishdir.`
  ]

  return texts[Math.floor(Math.random() * texts.length)]
}