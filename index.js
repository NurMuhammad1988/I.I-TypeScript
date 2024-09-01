"use strict";
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
// function someFunction(s: string): never{//yani bu never shunaqa typeki bu never yozilgan funksiya hech qachon tamomlanmasa yani doim ishleydigan funksiyaga bu type beriladi aslida hamma funksiyalar dasturchini yozishiga qarab biror vazifani bajarib ishlashdan to'htaydi lekin bu someFunctin funksiyasi esa hato qaytadigan funksiya bo'lgani uchun never typega o'rab olinishi dasturchilar uchun tushunarli bo'ladi//yani funksiya tugallanmaydigan bo'lsa
//     throw new  Error (s)
// }
//////
//signatuer function avvaldan elon qilinib qo'yiladi yani shablon bo'ladi va bu hsablondan chiqib ketmagan holatda ustiga funksiya berish mumkun yani yangi funksiya faqat typelari bir hil bo'lishi kerak
// let c: (x: number, y: string) => string
// c = function(a: number, b: number): number{//hato chunki signature funksiyada x ni type number y ni type string va funksita string qaytarsin deyildi shu uchun c nomli funksiyaga qiymat berilayotganda birinchi parametriga number ikkinchisiga string berish kerak bu holatda esa iikala parametrgaham number berildi va c funksiyaga ishlov berilayotganda number type berildi ona funksiyada esa funksiya string qaytarsin deyilgandi shu sabablar bilan bu kod hato qaytaradi
// return a + b
// }
// let d: (x: number, y: string) => string
// d = function(a: number, b: string): string{//d ona default typelar berilgan funksiyani o'zgartirish yani qiymatlar berish
// return `${b}: ${a}`
// }
// console.log(d(2, " Nur"));//yani Nur: 2 sababi string typega ega b parametri returnda birinchi chaqirilgan shu sabab logda yozilgan joyiga qarab ishladi
//////
//function overload har bir parametrga alohida typelar berish mumkun bo'lgan funksiya
// function overloadFunction(x: any, y: any): any {
//     //bu holatda x,  y parametrlarga any type berildi endi bu funksiya nima qaytarishini aniq bilmaganimiz uchun funksiyani typeniham any type qilish kerak
//     if (typeof x === "number" && typeof y === "number") {
//         //shartni ichida x, va y ni typeni aniq bilib olish //yani bu holatda any typega ega bo'lgan x, y parametrlarga  dynamic yoki ihtiyiriy shart qiliib if elsni ichida type berildi yani agar x va y ni typeofi number bo'lsa x ga y ni qo'sh deyildi va yokida string qil deb bacetga olindi va bu overloadFunction funksiya chaqirilganda parametriga 1, 2 yozildi bu degani x 1 ga teng y 2 ga teng degani shunda javob 3 number chiqadi chunki overloadFunction funksiya chaqirilganda parametriga number berildi
//         return x + y;
//     } else {
//         return `${x} ${y}`;
//     }
// }
// console.log(overloadFunction(1, 2));//javob 3 chiqadi chunki hamma narsa any bo'lgani uchun parametrdagi 1, 2 ni number qilib qo'shib beradi//////////////////////////////////////////////////////////////
// function overloadFunction(x: any, y: any): any {
//     //bu holatda x,  y parametrlarga any type berildi endi bu funksiya nima qaytarishini aniq bilmaganimiz uchun funksiyani typeniham any type qilish kerak
//     if (typeof x === "number" && typeof y === "number") {
//         //shartni ichida x, va y ni typeni aniq bilib olish //yani bu holatda any typega ega bo'lgan x, y parametrlarga  dynamic yoki ihtiyiriy shart qiliib if elsni ichida type berildi yani agar x va y ni typeofi number bo'lsa x ga y ni qo'sh deyildi va yokida string qil deb bacetga olindi va bu overloadFunction funksiya chaqirilganda parametriga 1, 2 yozildi bu degani x 1 ga teng y 2 ga teng degani shunda javob 1 , 2-string chiqadi chunki overloadFunction funksiya chaqirilganda parametriga endi string  berildi yani endi bu overloadFunction funksiya if else sabab yoki number bo'ladi yoki string bo'ladi boshqa narsa bo'la olmeydi
//         return x + y;
//     } else {
//         return `${x} ${y}`;
//     }
// }
// console.log(overloadFunction("1 ,", "2-string"));//javob javob 1 , 2-string chiqadi chunki hamma narsa any bo'lgani uchun parametrdagi 1, 2 ni yani x, y ni string qilib beradi///////////////////////////////////////////////////////////////////////////////////////////////
// function overloadFunction(x: number, y: number): number
// function overloadFunction(x: string, y: number): string
// function overloadFunction(x: any, y: any): any {
//     if (typeof x === "number" && typeof y === "number") {
//         return x + y;
//     } else {
//         return `${x} ${y}`;
//     }
// }
// console.log(overloadFunction(1, 3));//javobi 4 //endi padsakazkadaham 2 ta paramerlar chiqepti endi birinchi parametr 1 ham ikkinchi parametr 3 ham bu holatda number  yani overloadFunction ona funksiyani yuqorida yozilgan number va string qaytradigan bola funksiyalari qiymatlari bilan chiqepti yani bu ona function overloadFunction(x: any, y: any): any funksiyasi huddi bo'sh funksiyaday bu funksiyani chaqirib endi bu anylargan hohlagan typelarni bersa bo'ladi yani huddi this contexga yani js va react class componetlardagi this contexga o'hsharkan yani this contex objectni bo'sh qiymati yani hohlagan qiymatni bersa bo'ladigan bo'sh qiymati bo'lardi bu yerdaham overloadFunction funksiyani any typlariham huddiki bo'sh yani any typelar berilgan x va y bo'sh o'zgaruvchi va bu bo'sh x y ;arni chaqirib hohlagan type berib ishlatishxam mumkun ekan  (lekin nima uchun yuqoriga yozildi??????? chunki bu this contex kabi ishlaydi shu uchunham overloadFunction function tepaga yozilganda hato bermadi pastga yozilganda esa hato berdi )
// console.log(overloadFunction("Javob endi 1 chi parametrda string 2 chi parametrda number >>", 3));//yani contex thisga o'hshagan kod bo'lgani uchun endi bu overloadFunction funksiyani qayta qayta chaqirib qiymatlarini number yoki string qilib chaqirib ishlatish mumkun
//////
// let a: any = 10; //hamma narsa bo'lishi mumkun bo'lgan any = 10
// let b: number = a; // b o'zgaruvchi yaratib uni typesini number qilib bu b o'zgaruvchiga a o'zgaruvchini chaqirvoldik///bu hatomas lekin tafsiya qilinmaydi yani any typeni to'g'ridan to'g'ri boshqa typega o'girish yahshimas yani tsda  boshqa boshqa typelarni to'gridan to'gri o'zgartirish kerakmas
//////
////unknown
// let a: unknown = 20
// let b: number = a//bu holat esa hato// TypeScript-da unkown type oldindan malum bo'lmagan o'zgaruvchilar uchun ishlatiladi . U foydalanishdan oldin aniq turdagi tekshiruvlar yoki tasdiqlarni talab qilish, o'zboshimchalik bilan operatsiyalarni oldini olish va "har qanday" tuypega nisbatan xavfsizroq ishlov berishni targ'ib qilish orqali type xavfsizligini ta'minlaydi.//bu usuldan foydalanish kerakmas!!!!!!
//////
// let c: unknown = 20;
// let e: number = <number>c; //1-chi Usul//bu holatda unkowndan foydalanish yani c o'zgaruvchi ochib typini unkown qilib number type qildik yani 20 va e o'zgaruvchi ochib e o'zgaruvchiga <number>ni chaqirib c o'zgaruvchiga teng qildik yani bu holatda  c unkown o'zgaruvchiga e o'zgaruvchida number type berib qo'yildi endi e o'zgaruvchida c o'zgaruvchini 20 qiymati numberga aylandi
// let f: number = c as number; //2-chi Usul
// console.log(e); //1- chi usul
// console.log(f); //2-chi usul
//////
// let c: unknown = 20.2132;
// let e: number = <number>c;
// (c as number).toFixed(2)//1-chi USIUL //yuqoridagi holatda numberni metodli aftamatik chiqmagan edi bu holatda chiqdi yani 20.2132 qiymatga ega c unkown o'zgaruvchi e o'zgaruvchida number  type berilib keyin dumaloq qavus ichida c ni huddiki number deb chaqirilsa keyin aftamatik tarzda number metodlari chiqar ekan/
// console.log(e);/////////////////////////////////////////////////////
// let c: unknown = 20.2132;
// let e: number = <number>c;
// (<number>c).toString() //2-chi USIUL //yuqoridagi holatda numberni metodli aftamatik chiqmagan edi bu holatda chiqdi yani 20.2132 qiymatga ega c unkown o'zgaruvchi e o'zgaruvchida number  type berilib keyin dumaloq qavus ichida c ni huddiki number deb chaqirilsa keyin aftamatik tarzda number metodlari chiqar ekan
// console.log(e);
//////
////union type
// let h: number | string //union type bu holatda h o'zgaruvchi number |yoki string bo'lsin lekin boshqa hech narsa bo'masin
// h = "string"// h o'zgaruvchini ikkita type bor number va string bu holatda esa string qilib ishlatildi
// console.log(h);//string////////////////////////////////////////////////////////////////////////////
// let h: number | string //union type bu holatda h o'zgaruvchi number |yoki string bo'lsin lekin boshqa hech narsa bo'masin
// h = 11// h o'zgaruvchini ikkita type bor number va string bu holatda esa number qilib ishlatildi
// console.log(h);//number////////////////////////////////////////////////////////
// let h: number | string = 10 //union type bu holatda h o'zgaruvchi number |yoki string bo'lsin lekin boshqa hech narsa bo'masin bu holatda default holatda 10 number
// console.log(h);//number////////////////////////////////////////////////////////
// let h: number | string | boolean; //union type bu holatda h o'zgaruvchi number |yoki string bo'lsin lekin boshqa hech narsa bo'masin
// h = true;
// console.log(h); //true/////////////////////////////////////////////
// let h: number | string
// h = 12
// h = "string"
// console.log(h);//ohirgi stringni oladi numbernimas???????
//////
////Literal type
// let s: "sm" | "md" | "lg";
// s = "sm";
// s = "md";
// s = "lg";//endi bu s o'zgaruvchi default holatida berilgan shu 3 ta string typedan  boshqasini qabul qilmaydi masalan "sds"buham string lekin buniham qabul qilmaydi faqat s ga berilgan default holatdagi stringlarni qabul qiladi
// console.log(s); //ohirgi "lg"ni oladi?????????????????????????
//////
////Aliases Type
// type Sizes = "SM" | "MD" | "LG";//typni jamlab olish bu Sizes endi sm yoki md yoki lg bo'laoladi yani type kalit so'zi bilan typlarni qo'lda hohlagandan yozish mumkun
// let s2:Sizes = "SM" //endi s2 o'zgaruvchida Sisez TYPNI QIYMATLARI BOR
// s2 = "MD"
// s2 = "LG"
// console.log(s2);//ohirgi "LG" ni oladi????/////////////////////////////////////////////////////////
// type Sizes = "SM" | "MD" | "LG";
// let s2: Sizes = "SM";
// s2 = "MD";
// let s3: Sizes = "LG"; //type kalit so'zi bilan ishlaganda bu typedagi Sizes huddi o'zgaruvchiday endi bu Sizes type o'zgaruvchini boshqa o'zgaruvchigaham chaqirib ichidagi qiymatlarini ishlatish mumkun bu holatda type Sizesni ikkita o'zgaruvchiga chaqirib ishlatdik s2 va s3 o'zgaruvchilarda. faqat shu 3 ta qiymatni qabul qiladi boshqa har qanday qiymat qo'shilsa hato chiqadi padsakazkadaham faqat shu uchta qiymat bor
// console.log(s2); // "MD" ni qaytaradi
// console.log(s3); // "LG" ni qaytaradi
//https://medium.com/@SahilSharma_SoftwareDeveloper/type-in-typescript-7f14d30e30a3#:~:text=In%20TypeScript%2C%20the%20type%20keyword%20is%20used%20for%20a%20variety,types%2C%20and%20define%20complex%20structures.
// type Printable = { print: () => void };
// type Loggable = { log: () => void };
// type Logger = Printable & Loggable;
// const myLogger: Logger = {
//   print: () => console.log("Printing..."),
//   log: () => console.log("Logging..."),
// };
// console.log(myLogger);
//Xulosa qilib aytganda, TypeScript-dagi type kalit so'zi turlarni yaratish va manipulyatsiya qilish uchun ko'p qirrali vosita bo'lib, tilni yanada ifodali qiladi va statik tahlil va asboblarni yaxshi qo'llab-quvvatlaydi.
//https://medium.com/@SahilSharma_SoftwareDeveloper/type-in-typescript-7f14d30e30a3#:~:text=In%20TypeScript%2C%20the%20type%20keyword%20is%20used%20for%20a%20variety,types%2C%20and%20define%20complex%20structures.
//////
// type Sizes = "SM" | "MD" | "LG" | boolean; //shu typelardan boshqasini pastda chaqirish mumkun emas hato chiqaradi endi bu Sizes faqat o'ziga biriktirilgan typelar bilan ishlaydi
// let s2: Sizes = "SM"; //s2 o'zgaruvchiga Sizes typydan "SM" default holatda chaqirildi
// s2 = "MD";
// let s3: Sizes = false;
// s3 = "LG"; //elon qilindi
// s3 = false; //s3 da chaqirilgan "LG" false qilindi yani otkaz qilindi
// console.log(s2); // "MD" ni qaytaradi
// console.log(s3); // "LG" ni qaytaradi
//////
// type OBJ = { name: string } | { age: number };// | yoki operatori bilan ishlatish//type kalit so'zi bilan objectlarda ishlash // bu OBJ nomli typeni ikkita qiymati bor birinchisi name string typega ega ikkinchi age number typega ega
// let obj: OBJ;//OBJ nomli typeni obj nomli o'zharuvchiga teng qilib qo'yildi
// obj = { name: "Nur", age: 35 };//obj o'zgaruvchiga chaqirilgan OBJ typeni qiymatlari shunday chaqiriladi OBJni qiymatlarini hohlasa ikklasini hohlasa bittasiniham alohida foydalanish mumkun
// obj = {name: "Nur-2"}//hatomas//chunki bu | yani yoki operatori yani yoki nameni va yoki ageniham deyilgan yani hohlaganini ishlatish mumkun yoki sabab!!!
// console.log(obj);//Nur-2 sreingini oladi
//////
// type OBJ = { name: string } & { age: number };// & yani va operatori bilan ishlatish
// let obj: OBJ;
// obj = {name: "Nur", age: 35}
// obj = {name: "Nur-2"}//bu hato chunki bu yokimas & va operatori yani obj chaqirilganda ichidagi type OBJni ikkala qiymatiham chaqirilishi majburiy bo'lmas hato chunki va & operatorida shunday sababi name va age ishlatilishi shart deyilgan yoki (|) operatori bilan va (&) operatorini farqi shunda va operatori qattiqroq qoidalar bilan ishlaydi
// obj = { age: 35}//hato
//////
//                          age endi number yoki undefined
// type OBJ = { name: string; age?: number };//yani bu ? hohlasa age: number type ishlatilsin hohlanmasa ishlatilmasin yani ageni ishlatish qattiymas ihtiyoriy
// let obj: OBJ = { name: "Nur" };
// obj = { name: "Nur-2", age: 35 };//log shuni oladi chunki kod o'qilish tartibi bo'yicha
// console.log(obj);
//////
// type OBJ = { name: string; age?: number };//yani bu ? hohlasa age: number type ishlatilsin hohlanmasa ishlatilmasin yani ageni ishlatish qattiymas ihtiyoriy lekin name: stringni ishlatish majburiy sababi ?=ihtiyor yo'q
// let obj: OBJ = { name: "Nur" };
// obj = { name: "Nur-2", age: 35 };//log shuni oladi chunki kod o'qilish tartibi bo'yicha
// obj = { age: 35 };//hato chunki chunki name: string majburiy yani OBJda ?=majburiymas ishlatilmagan yani majubiriy
//////
// type OBJ = { name: string; age?: number }; //in operatori
// let obj: OBJ = { name: "Nur" }; //default holati buni default holatisizham yozish mumkun>>>>let obj: OBJ
// obj = { name: "Nur", age: 35 };
// if ("age" in obj) {
//     //OBJda ihtiyoriy qilib qo'yilgan qiymatni OBJ objga chaqirilgandan keyin objni ichida bor yo'qligini tekshirish yani in operatori bilan in operatorida tekshirilishi kerak bo'lgan qiymat stringda yozilishi kerak chunki shu nomga yani yozuvga qarab izlaydi yani ishlaydi bu holatda "age" yani umumiy age yozuvi objni ichida bo'lsa yani true bo'lsa "age mavjud" textini chiqar agar mavjud bo'lmasa yani false bo'lasa "mavjudmas" textini chiqar bu holatda "age mavjud" chiqadi chunki obj objectga qiymat berilayotganda name ham age ham bor
//     console.log("age mavjud");
// } else {
//     console.log("mavjudmas");
// }
//////
// type OBJ = { name: string; age?: number }; //in operatori
// let obj: OBJ
// obj = { name: "Nur" };//age ? saba shartmas qilingani uchun age chaqirilmasaham hato yo'q
// if ("age" in obj) {
//     console.log("age mavjud");
// } else {
//     console.log("mavjudmas");//logda bu ishlaydi chunki objda faqat name bor age yo'q if da esa in bilan "age" ni bor yo'qligi tekshirildi shunda if qareydi age yo'q va elseni qiymatini yani falseni qaytaradi
// }
//////
////arrays
// let a = [];//bu holatda bu array default holatda any yani har qanday typega ega bo'lishiu mumkun bo'lgan massiv
// a = [12, "sdf", true, undefined, {}]//bunga hohlagancha qiymat berish mumkun chunku bu any masiv anyniham ts default holatda berdi///////////////////////////////////////////////////////
// let b = [1,2,3,4]//bu array default holatda number yani ts array ichidagi typega qarab default holat elon qiladi yani bu number deb endi bu b massivga numberdan boshqa qiymat berib bo'lmaydi yanu bu faqat number let b:number =[1,2,3,4,5,]//bu to'gri yozilishi yani ts o'zi bunday hollarda aftamatik tarzda type bersaham aslida typeni shunday yozish kerak
// b = ["dsasa"]//bu hato chunki b massiv number typega aftamatik ega//////////////////////////////////////
// let b: number[]= [1,2,3,4]
// b = [12, 34]
// b = ["sddas", true]// hato chunki b o'zgaruvchiga san number typega oid massivsan deyilgan/////////////////////////////////////////////////////////////////////////////
// let c: Array<number> = [1, 2]; //yani yuqoridagi arrayni yozilishini boshqacha ko'rinishi Array global object chaqirilib typega numbersan deyildi endi numberdan boshqa narsani qabul qilmaydi
// c = [3, 4];///////////////////////////////////////////////////////////////////////////
// let d: (number | string)[] = [12, "dsds", 123]; //number yoki string bo'lsin va bularni arrayda qabul qilsin[] yani ikkalasiham bo'lishi shart emas bu yoki yoki unisi bo'lsin yoki buni farqi yo'q qavus birlashtiradi///////////////////////////////////////////
// let e: Array<boolean | number | {} | boolean> = [true, 12323, false, 123];//arrayga type berishni yana bir uslubi////////////////////////////////////////////////////////////////////////////////////
///////
//tuples
// let f:[number, string]//bu holatda f o'zgaruvchiga array ichida keladigan yoki kutilgan malumotni qanday tartibda kelishi qattiy aytib qo'yilepti yani f o'zgaruvchi massiv va massivda 0 chi elementida number bo'lsin 1 chi elementida string bo'lsin bu qattiy buyruq agar info bundan boshqacha uslubda kelsa ts buni hato ko'rsatadi yani tuples kartej shu yahi tartib bilan qoida bo'yicha qabul qiladi
// [12, 'name']//tuples endi shu tartibdagina malumot qabul qiladi
// f = [ 'name', 12]//hato chunki f o'zgaruvchi tuples uslibida birinchi number keyin string qabul qiladi bu tartibni buzish mumkun emas va
// f = [12]//buham hato chunki f da qattiy qilib birinchi number keyin string kelsin yani ikkalasiham aniq tiniq kelsin aks holda hato
// f = [12 ,'name' ]//bu holat tuples uchun to'gri chunki tartib bo'yich yani number va string shablondan chiqib ketmagan holatda malumot to'ldirilishi kerak///////////////////////////////////////////////////////////////////////////////////
// let f: [number, string, [], {}];
// f = [     12, "name",   [], {}]; //tuplesda aniq qattiy tartib bo'yicha hamm atypelarni kiritish mumkum endi f qattiy holatda qattiy ketmaketlikda va hamma shu typlar kelgandagina to'g'ri bo'ladi aks holda hato chiqadi yani hammasi tartib bo'yicha kelish shart///////////////////////////////////////////////////////////
// let f: [number, string ,[number, string],   {}];
//  //       0,      1,    2, 2.0     2.1       3
// f = [    12,    "name",    [12,   "str"],   {}]; //bu holatda f o'zgaruvchiga san massivsan va 0 chi elementga number qabul qilasan 1 chi elementga string qabul qilasan 2 chi elementga massiv qabul qilasan va massivni 0 chi elementiga number qabul qilsan massivni 1 chi elementiga string qabul qilasan 3 chi elementga object qabul qilsan deyildi endi malumotlar aynan shu tartibda ketmaketlikda kelishi shart va agar birorta malumot kelmay qolsaham bu hato bo'ladi yani bu o'zgaruvchi ishlasa 100% ishleydi bo'masa umuman ishlameydi//////////////////////////////////////////////////////////////////////////////////
//////
////Enum - qayta hissoblash//sanash
// enum Gender{
//     Male,//0
//     Famale//1
// }
// console.log(Gender.Male, Gender.Famale);//0, 1
// ///////////////////////////////////
// enum Gender {
//    A = 10,//default yani 10dan boshlanadi shudna A=10 b=11 bo'ladi
//    B
// }
// console.log(Gender.A, Gender.B);//10, 11
///////////////////////////////////////
// enum Gender {
//     A,//0
//     B = 10,//10 = default
//     C,//11
//  }
//  console.log(Gender.A, Gender.B, Gender.C);//0, 10, 11
///////////////////////////////////////////
// enum Gender {
//     A,//0
//     B,//1
//     C = 11,//11 = default//11
//     D,//12
//  }
//  console.log(Gender.A, Gender.B, Gender.C, Gender.D);
////////////////////////////////////////////////
// enum Gender{
//     Male,//0
//     Famale//1
// }
// console.log(Gender[Gender.Male], Gender.Famale);//Male, 1 //bu holatda Gender chaqirilib massiv ochilganda maleni string qilib qo'yadi yani Genderni tartib raqami bo'yicha Genderni qiymatini string formatda olish
////////////////////////////////////////////////
// enum Gender {
//     Male, //0
//     Famale, //1
// }
// console.log(Gender.Male, Gender.Famale); //0, 1 // tartib raqamlar
// console.log(Gender[Gender.Male], Gender[Gender.Famale]); //Male, Famale //Genderni ikalla qiymatiniham string holatda qiymatini olish//yani value orqali genderni qiymatidagi keylarni olish value esa bu holatda raqami male va famele esa keyi
///////////////////////////////////////////////////
// enum Gender {
//     Male,
//     Famale,
// }
// console.log(Gender[1], Gender[Gender.Famale]); //Famele, Famele //bu holatda Genderni [1] chi qiymatini va Fameleni chaqirdik ikkalasiham aslida Fameli chunki [1]   Genderni 0 dan keyingi birinchi elementi  Famele esa Fameleni o'zi yani  Gender[1]holatda raqam bilan Genderni birinchi elementini keyi tartib raqam bilan olindi Gender[Gender.Famale]bu holatda esa Genderni 1 chi elementi qiymat yani key bilan  olindi
//////////////////////////////////////////////////////
// enum Hello {
//     A = "Hello",
//     B = "TypeScript",
// }
// console.log(Hello.A, Hello.B); //Hello, TypeScript // string typeda turganda number orqali qiymatni olib bo'lmaydi faqat qiymat orqali shu qiymatrni qiymatini olish mumkun yani Hello enumni a qiymatini ichki qiymati "Hello"
//enumni keylariga yani Male, Famale keylariga qiymat sifatida number, symbol, string typelarini berish mumkun masalan Famale = "string", Famale = sybol, Famala = number
/////////////////////////////////////////////////////////
// const enum Ienum {//enumni const bilan yozish enum const bilan yozilganda tepada enum bilan yozilgan kodlar bilan bir hil ishlayveradi yani bir hil yozilavoradi lekin const bilan ishlash tafsiya qilinadi chunki js filega compilats abo'lganda faqat logdagi holat o'tadi yani js codlar kattalashib ketmaydi js codga qara!!!!
//     A,
//     B,
// }
// console.log(Ienum.A, Ienum.B);
////////////////////////////////////////////////////////
// const enum Ienum {
//     A = 10,
//     B = "Salom",
// }
// console.log(Ienum.A, Ienum.B);//js filedagi compilatsa bo'lgan holati>>>console.log(10 /* Ienum.A */, "Salom" /* Ienum.B */); yani qisqa yuqorisida hech narsa yo'q
////////////////////////////////////////////////////////
//////
//classlar
// class Person {}//classlar (constructor) yangi object yaratish uchun bu bo'sh class endi bu classni pastda new clait so'zi bilan yangi Nur o'zgaruvchiga chaqirdik shunda const Nur: Persondan nusxa oladi yani bo'sh objectni nusxalaydi va bu Nur nomli bo'sh objectga teng o'zgaruvchini new calit so'zi bilan Personga tenglab  qo'ydik shunda endi Nur o'zgaruvchida Person class bo'sh objectdan nusxalangan yangi Person nomli object bor va bu yangi objectga hohlagancha husisiyat yani qiymat berish mumkun
// const Nur: Person = new Person()//yangi object
// console.log(Nur);
///////////////////////////////////////////////////////
// class Person {
//     _name: string = "Nur";
//     _age: number = 35;
// }
// const Nur: Person = new Person();
// const Usta: Person = new Person();
// console.log(Nur);
// console.log();
//////////////////////////////////////////////////////////
// class Person {
//     _name: string;
//     _age: number;
//     constructor(name: string, age: number) {//bitta class ichida constructor faqat bir martta ishlatilishi mumkun
//         this._name = name; //bu holatdagi _name va _age Person classni qiymatlari bu qiymatlar endi constructorni parametridagi name va agelarga teng va typelari string va number endi bu classdan nusxa object olinganda name qiymati yani 0 chi qiymati string age yani 1 chi qiymati number bo'lishi shart agar bu name va agelar chaqirilganda joyi o'zxgarsaham hato chiqadi
//         this._age = age;
//     }
// } //js bilan bir hil faqat farqi constructorda qiymatlarni qanday typega oid ekanligi aytib qo'yilar ekan bo'ldi
// const Nur: Person = new Person("Nur", 15);//bir hil hususiyatga ega objectlar faqat qiymatlari har hil hususiyatlari string va number name va age
// const Usta: Person = new Person("Usta", 20);//bir hil hususiyatga ega objectlar faqat qiymatlari har hil hususiyatlari string va number name va age
// const Dasturchi: Person = new Person("Dasturchi", 25);//bir hil hususiyatga ega objectlar faqat qiymatlari har hil hususiyatlari string va number name va age
// const Seo: Person = new Person("Seo", 30);//bir hil hususiyatga ega objectlar faqat qiymatlari har hil hususiyatlari string va number name va age
// const Nft: Person = new Person("Nft", 35);//bir hil hususiyatga ega objectlar faqat qiymatlari har hil hususiyatlari string va number name va age
// console.log(Nur);
// console.log(Usta);
// console.log(Dasturchi);
// console.log(Seo);
// console.log(Nft);
////////////////////////////////////////////////////////////////////
// class Person {
//     _name: string;//bularni tsda yozilishini sababi bu qiymatlarga type nima ekanligini aytib qo'yish uchun
//     _age: number;//bularni tsda yozilishini sababi bu qiymatlarga type nima ekanligini aytib qo'yish uchun
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     //funksiyani ichida function metod yozish yani qo'lda metod yozish
//     info(): string {
//         return `Nomi ${this._name} yoshi ${this._age} da `;
//     }
// }
// const Nur: Person = new Person("Nur", 35);
// console.log(Nur.info());
///////////////////////////////////////////////////////////////////////
// class Person {
//     _name: string;
//     _age: number;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     //funksiyani ichida function metod yozish yani qo'lda metod yozish
//     info(value: number): string {
//         return `Nomi ${this._name} yoshi ${this._age + value} da `;//this._age + value yani _agega qo'shamiz valueni valueni type esa number endi bu valuega string qo'shib bo'meydi lekin bu number ohirida string bo'lib qaytadi chunki bu info function metodga string qaytarishi kerakligi aytilgan
//     }
// }
// const Nur: Person = new Person("Nur", 35);
// console.log(Nur.info(2));//default 35 ga 2 qo'shildi va 37 bo'ldi 2ni infoni valuesidan oldik
////////////////////////////////////////////////////////////////////////////
// class Person {
//     _name: string; //bularni tsda yozilishini sababi bu qiymatlarga type nima ekanligini aytib qo'yish uchun
//     _age: number; //bularni tsda yozilishini sababi bu qiymatlarga type nima ekanligini aytib qo'yish uchun
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     info(value: number): string {
//         return `Nomi ${this._name} yoshi ${this._age + value} da `;
//     }
//     static IsFlaying = false;//staticdanham class ichida hohlagancha foydalanish mumkun
// }
// const Nur: Person = new Person("Nur", 35);
// // console.log(Nur.);//bu holatda Person classni static qiymatini ko'rib yoki olib bo'lmaydi bu staticni faqat Person classiga oid shu uchun Person classini shaxsan o'zini chaqirmasdan bu staticni ko'rib bo'lmaydi pastda staticni qanday chaqirish to'g'ri yozilgan
// console.log(Person.IsFlaying);//false
/////////////////////////////////////////////////////////////////////////////////
// class Person {
//     _name: string;
//     _age: number;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     info(value: number): string {
//         return `Nomi ${this._name} yoshi ${this._age + value} da `;
//     }
//     static IsFlaying = false;//staticdanham class ichida hohlagancha foydalanish mumkun
//     static description (): string{//staticni ichida function metodlar yozish bu static faqat shu Person haqida yani faqat Personga oid buni class constructordan nusxalanadigan yangi objectlarga aloqasi yo'q yani Person classi haqida static malumotlar
//         return`Bu class Person haqida...`
//     }
// }
// const Nur: Person = new Person("Nur", 35);
// console.log(Person.description());
/////////////////////////////////////////////////////////////////////////////////////
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    info(value) {
        return `Nomi ${this._name} yoshi ${this._age + value} da `;
    }
    get name() {
        //get va set metodi classni metodi
        //yani getda name nomli metod ochildi bu name Personga tegishli name qilinib Personni name qiymati ushlab olindi
        //bu name Person classni constructoridagi name, constructordagi name esa Person classdagi string typega ega  _name bilan tenglashtirilgan yani bu get dagi nameham string bo'lishi shart bo'lmasa hato chiqadi
        return this._name;
    }
    set name(value) {
        //yani Personni get  qilingan(alohida Persondan ajratib olingan) name qiymatiga set qilib yangi value qo'shish va bu valueham string bo'lishi shart va bu value personi _name qiymatiga teng
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        //agega qiymat berilganda bungaham type nima ekanligi aytilishi shart
        if (value > 0 && value < 100) {
            //yani agega yangi qiymat yani Person classdan nusxa olinadigahn objectga yangi qiymat berilganda shu qiymatni ushlab olish va shart qo'yib qo'yish
            this._age = value;
        }
        else {
            throw new Error("Siz noto'g'ri yosh kiritdingiz!!!"); //error zo'r ishlarkan bu error global error qaytararkan yani logda global error//yani ageni Nurda berilgan qiymati agar 0 dan yuqori 100 dan baland bo'lsa shu error ishlaydi masalan -55 yoki 101 bo'lsa
        }
    }
}
const Nur = new Person("Nur", 35);
console.log(Nur);
Nur.age = 55; //to'g'ri
// Nur.age = -55; //error zo'r ishlarkan bu error global error qaytararkan yani logda global error
console.log(Nur.age);
//
if (Nur instanceof Person) {
    //objecti Person classga tegishli yoki tegishli emasligini tekshirishi instanceof bilan shunday qilinadi//tyoeof bilan esa typlarni qaysi typega ega ekanligini tekshirish mumkun instanceof bilan esa objectlarni qaysi classga tegishli ekanligini tekshirish mumkun
    console.log("Bu Nur Object Person classiga tegishli"); //logda shu chiqadi chunki Nur objecti Person class constructordan vorislangan
}
else {
    console.log("Bu Nur Object Person classiga tegishli emas!!!");
}
// 07-darsda qoldi
// tsc --watch
//# sourceMappingURL=index.js.map