//index.htmlda scriptda index.js ulangan buni sababi index.tsda yozilgan kodlar index.jsda compilatsa bo'ladi va index.js htmlga ulangani sababli bu tsda yozilgan kodlarni jsda yani browserda ko'rish mumkun
/////////////////////////////////////////////
// console.log("Hello TypeScript");
// console.log("Salom Dunyo");//qayta qayta compilatsa uchun tsc yoki tsc index.ts commandlarini bosib yurish shartmas terminalda tsc --watch buyrug'i berib qo'yilsa bo'ldi autocmpliteni o'zi bajaraveradi va buni 3 4 hil yo'li bor ekan hullas muammomas

///////

// throw new Error (" Some Error")//bu holatda hato joyi  index.js:2:7 va "sourceMap": true, yoqilgandan keyin endi hato joyi index.ts:3:7 yani hoto ts fileda va qatori browserda  aniq tiniq ko'rsatildi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//bu yerda hato 3 chi qatorga yozildi lekin ts filedagi kodlar js filega compilatsaa bo'lganda ts js filega tartib bilan kodlarni yozadi shu sabab hato 3 chi qatorda bo'lsaham consoleda hatoni 2 chi qatorda ko'rsatadi chunki browser jsni o'qiydi tsnimas compilatsa sabab//agar loyiha kattalashib ketsa tsda yozilgan hatoni browserda topish chalkashib ketishi mumkun shu sabab ts configda "sourceMap": true, parametri ts configni eng tepasida yoqilib qo'yilishi kerak shunda hatoni aniq adresini ts ko'rsatib turadi va index.js.map file aftamati yaratiladi va bu fileda yozilgan kodlarni adresi turadi (qanaqadur objectda qanaqadur formatda???) va endi compilatsa qiletganda tsc index.ts deyishham shasrtmas tsc yozilsa kifoya qiladi

///////

// console.log(true +  10);//bu holat ts uchun hatolik lekin jsda bu hatomas masalan truni + sabab 1 ga aylatrib 1oga qo'shib 11ni qaytarib bergan bo'lardi tsda esa undeymas//yani tsda boolean bilan number bir biriga qo'shilmaydi

//////

// let a = 12//yani number typega oid o'zgaruvchi
// a = "string"//yoki a = false a = {} //bular hato chunki a o'zgaruvchi endi faqat number type bo'la oladi bu a o'zgaruvchini shunchaki string qilib bo'lmaydi chunki bu ts

//////

// let a = 12;
// a = 12 + 12;//bu to'gri chunki a numberga number qo'shilepti

//////

// let a: number
// a = 17//bu holatham to'g'ri chunki a o'zgaruvchiga san numbersan deb qattiy aytib qo'yildi va a ni chaqirib qiymatini 17 qilinsa 17 number type bo'lgani uchun bu to'g'ri hissoblanadi

//////

// let b: string = "text"
// b = "text-2"//yani bu string type bungaham endi faqat string malumot turini qo'shish mumkun boshqa hech qanday malumot ruini qabul qilmeydi hato chiqaradi
// console.log(b);

//////

// let c: boolean =  true
// c = false
// console.log(c);

//////

// let d: null = null;//null type buham endi faqayt nullni qabul qiladi boshqatypelarniq abul qilmaydi

//////

// let e: undefined = undefined;

//////

// let f: object = {}; //yani aftmatik tarzda f objectni qabul qilgan holat lekin aytib qo'yish yahshiroq varyant yani dasturchi bitta qarab bu funksiya yoki o'zgaruvchini nima ekanligini biladi
// f = 12; //hato chunki objectni o'ziga to'g'ridan to'g'ri boshqa qiymatni biriktirib bo'lmaydi

//////

// let f: object = {}
// f = {name: "Nur"}
// f.//hato yani f object va bu objecta f = object qilib qiymatiga name: bersakham f ni bosib keyin nuqta bosilsa name qiymatini chaqirmepti chunki bu hato sintaksiz

//////

// let f: { name: string } = {name: "Nur-1"}
// f.name//bu holat to'g'ri//bu holatda f nomli o'zgaruvchi ochib bu f {}object va name nomli qiymati bor va name qiymatini type string deb qattiy aytildi va bu f object ichidagi  string qiymatli name endi "Nur" stringga teng bo'lsin shunda f o'zgaruvchiga ishlov berililganda f. nuqta bosilsa f ni nmae qiymati to'g'ri holatda keladi
// f.name = "Nur-2"//endi f ni nur-1 qiyamti nur-2 qiymatga o'zgardi
// console.log(f);

//////

// let j; //any yani nimadur aniqmas nimadurda
// let gi: any;
// gi = 12;
// gi = "any";
// gi = false;
// gi = {};
// gi = function () {};
// gi = [];
// gi = null
// gi = undefined
// console.log(gi); //browserda javob 12 chunki tsga bu gi o'zgaruvchini any dedik any type shunday narsaki bu any hamma narsa bo'lishi mumkun hohlagan typeda bo'lishi mumkun bu esa aslida hato tsni prinsipiga mos emas bu anyni ishlatish kereymas lekin ishlatish kerak joylari bor masalanserverdan malumot keltganda tekshirish uchunmasalan serverdan keletgan malumotni qabul qilganda any qilib qabul qilib keyinkelgan malumotni typeni aniqlab keyin anyni aniq typelarga o'zgartirish mumkun  lekin TypeScript-dagi har qanday turdagi qiymat qaysi turdagi bo'lishi mumkinligini bilmagan holatlar uchun vaqtinchalik echimdir . Bu sizga har qanday turdagi o'zgaruvchi yoki funktsiya parametrini belgilash imkonini beradi. any typeni  ishlatganingizda, TypeScript taqdim etgan statik tur tekshiruvini chetlab o'tasiz. Bu xatoga ko'proq moyil bo'lgan kodga olib keladi va bu kompilyatsiya vaqtida qo'lga olinishi mumkin bo'lgan ish vaqti xatolariga olib kelishi mumkin

//////

// function pow (x, y){//jsda yozilishi va bu agar js fileda yozilgan bo'lganda to'gri lekin tsda bu hato hissoblanadi
//     return x ** y
// }//bu holat hato chunki funksiyaga va parametridagi qiymatlarga yani o'zgaruvchilarga qanaqa typda ekanligi aytilmadi lekin ts fileda bu hato bo'lsaham js filega compilatsa qilib beravo'radi chunki bu funksiya js uchun hatomas tsda esa hato chunki tsni mantig'i typelar berish yani tsda hamma narsani type aniq bo'lishi shart
// pow()

//////

// function pow(x: number, y: number):number {//bu holatda pow funksiyadagi x, y parametrlargaham type qanday ekanligini aytib qo'ydik yani number va bu funksiya nima qaytarishi kerak shuniham alohida aytib qo'yish kerak masalan bu holatda :number yani bu funksiya faqat number bilan ishleydi agar ichida boshqa malumot qo'shilsa ts hato qaytaradi
//     return x ** y;
// }

// function pow(x: number, y: number):string {
//     return `${x} ** ${y} = ${x ** y}`;//becet `` ichida yoki bu qo'shtirnoqlar ichida "" '' yoziladigan narsalar string type bo'ladi// endi function string type qaytarishi shart agar boshqa type bo'lsa hato chiqadi
// }
// pow(2, 3)

// https://www.typescriptlang.org/docs/handbook/2/functions.html
// function greeter(fn: (a: string) => void) {
//     fn("Hello, World");
//   }

//   function printToConsole(s: string) {//yani bu holatda greeter funksiya void yani hech narsa qaytarmeydi va bu foidli greeter funksiya printToConsoleda typelanib greetor funksiyani ichida chaqirildi
//     console.log(s);
//   }

//   greeter(printToConsole);
// https://www.typescriptlang.org/docs/handbook/2/functions.html

//////

//// const add = (x, y)=> x + y//jsda bu to'g'ri sintaksiz lekin tsda bu hato
// const add = (x: number, y: number): number => x + y//yani add o'zgaruvchi yani array functionni x parametrini type number x nikiham number va bu add number typeni qaytarsin
// add(2, 3)

//////

// function log (x: number){//yani aftamatik tarzda void funksiya hissoblanadi lekin :void ni yozish tafsiya qilinadi cunki tsda nima bo'lgandaham hamma narsani type yozilishi kerak aslida voidhambitta type yani qaytarilishi yani return qilish shartmas funksiyaga :void berib qo'yiladi shunda bittada bu funksiyani browserga chiqmeydigan funksiya ekanligini bilish mumkun
//     console.log(x);
// }

//////

// function log(x: number): void {
//     console.log(x);
// }

//////

// function someFunction(s: string): never{//yani bu never shunaqa typeki bu never yozilgan funksiya hech qachon tamomlanmasa yani doim ishleydigan funksiyaga bu type beriladi aslida hamma funksiyalar dasturchini yozishiga qarab biror vazifani bajarib ishlashdan to'htaydi lekin bu someFunctin funksiyasi esa hato qaytadigan funksiya bo'lgani uchun never typega o'rab olinishi dasturchilar uchun tushunarli bo'ladi
//     throw new  Error (s)
// }

//////

//signatuer function
// let c: (x: number, y: string) => string
// c = function(a: number, b: number): number{//hato chunki signature funksiyada x ni type number y ni type string va funksita string qaytarsin deyildi shu uchun c nomli funksiyaga qiymat berilayotganda birinchi parametriga number ikkinchisiga string berish kerak bu holatda esa iikala parametrgaham number berildi va c funksiyaga ishlov berilayotganda number type berildi ona funksiyada esa funksiya string qaytarsin deyilgandi shu sabablar bilan bu kod hato qaytaradi
// return a + b
// }
// let d: (x: number, y: string) => string
// d = function(a: number, b: string): string{//d ona default typelar berilgan funksiyani o'zgartirish yani qiymatlar berish
// return `${b}: ${a}`
// }
// console.log(d(2, " Nur"));//yani Nur: 2 sabai string typega ega b parametri returnda birinchi chaqirilgan shu sabab logda yozilgan joyiga qarab ishladi

//////

//function overload
// function overloadFunction(x: any, y: any): any {
//     //bu holatda x,  y parametrlarga any type berildi endi bu funksiya nima qaytarishini aniq bilmaganimiz uchun funksiyani typeniham any type qilish kerak
//     if (typeof x === "number" && typeof y === "number") {
//         //shartni ichida x, va y ni typeni aniq bilib olish //yani bu holatda any typega ega bo'lgan x, y parametrlarga  dynamic yoki ihtiyiriy shart qiliib if elsni ichida type berildi yani agar x va y ni typeofi number bo'lsa x ga y ni qo'sh deyildi va yokida string qil deb bacetga olindi va bu overloadFunction funksiya chaqirilganda parametriga 1, 2 yozildi bu degani x 1 ga teng y 2 ga teng degani shunda javob 3 number chiqadi chunki overloadFunction funksiya chaqirilganda parametriga number berildi
//         return x + y;
//     } else {
//         return `${x} ${y}`;
//     }
// }
// console.log(overloadFunction(1, 2));//javob 3 chiqadi chunki hamma narsa any bo'lgani uchun parametrdagi 1, 2 ni number qilib qo'shib beradi/////////////////////////////////
// function overloadFunction(x: any, y: any): any {
//     //bu holatda x,  y parametrlarga any type berildi endi bu funksiya nima qaytarishini aniq bilmaganimiz uchun funksiyani typeniham any type qilish kerak
//     if (typeof x === "number" && typeof y === "number") {
//         //shartni ichida x, va y ni typeni aniq bilib olish //yani bu holatda any typega ega bo'lgan x, y parametrlarga  dynamic yoki ihtiyiriy shart qiliib if elsni ichida type berildi yani agar x va y ni typeofi number bo'lsa x ga y ni qo'sh deyildi va yokida string qil deb bacetga olindi va bu overloadFunction funksiya chaqirilganda parametriga 1, 2 yozildi bu degani x 1 ga teng y 2 ga teng degani shunda javob 1 , 2-string chiqadi chunki overloadFunction funksiya chaqirilganda parametriga endi string  berildi yani endi bu overloadFunction funksiya if else sabab yoki number bo'ladi yoki string bo'ladi boshqa narsa bo'la olmeydi
//         return x + y;
//     } else {
//         return `${x} ${y}`;
//     }
// }
// console.log(overloadFunction("1 ,", "2-string"));//javob 3 chiqadi chunki hamma narsa any bo'lgani uchun parametrdagi 1, 2 ni number qilib qo'shib beradi

//////

