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

//   function printToConsole(s: string) {//yani bu holatda greeter funksiya void yani hech narsa qaytarmeydi va bu voidli greeter funksiya printToConsoleda typelanib greetor funksiyani ichida chaqirildi
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
//     get name(): string | number {
//         //get va set metodi classni metodi
//         //yani getda name nomli metod ochildi bu name Personga tegishli name qilinib Personni name qiymati ushlab olindi
//         //bu name Person classni constructoridagi name, constructordagi name esa Person classdagi string typega ega  _name bilan tenglashtirilgan yani bu get dagi nameham string bo'lishi shart bo'lmasa hato chiqadi
//         return this._name;
//     }
//     set name(value: string) {
//         //yani Personni get  qilingan(alohida Persondan ajratib olingan) name qiymatiga set qilib yangi value qo'shish va bu valueham string bo'lishi shart va bu value personi _name qiymatiga teng
//         this._name = value;
//     }
//     get age(): number {
//         return this._age;
//     }
//     set age(value: number) {
//         //agega qiymat berilganda bungaham type nima ekanligi aytilishi shart
//         if (value > 0 && value < 100) {
//             //yani agega yangi qiymat yani Person classdan nusxa olinadigahn objectga yangi qiymat berilganda shu qiymatni ushlab olish va shart qo'yib qo'yish
//             this._age = value;
//         } else {
//             throw new Error("Siz noto'g'ri yosh kiritdingiz!!!"); //error zo'r ishlarkan bu error global error qaytararkan yani logda global error//yani ageni Nurda berilgan qiymati agar 0 dan yuqori 100 dan baland bo'lsa shu error ishlaydi masalan -55 yoki 101 bo'lsa
//         }
//     }
// }
// const Nur: Person = new Person("Nur", 35);
// console.log(Nur);
// Nur.age = 55; //to'g'ri
// Nur.age = -55; //error zo'r ishlarkan bu error global error qaytararkan yani logda global error//shu qatorda hato elon qilingandan keyin shu qatordan pastdagi ishlab turgan kodlarham ishlamey qoldi yani hato bo'lgan joydan boshlab ts kodlarni ishlatmey qo'yarkan yani tsni  mantig'i shu hato bo'lmasligi kerak yoki to'liq ishlaydigan hatosiz dastur yoki hato qatorigacha bo'lgan hatosiz dastur lekin hatomas
// console.log(Nur.age);
// //
// if (Nur instanceof Person) {
//     //objecti Person classga tegishli yoki tegishli emasligini tekshirishi instanceof bilan shunday qilinadi//tyoeof bilan esa typlarni qaysi typega ega ekanligini tekshirish mumkun instanceof bilan esa objectlarni qaysi classga tegishli ekanligini tekshirish mumkun
//     console.log("Bu Nur Object Person classiga tegishli"); //logda shu chiqadi chunki Nur objecti Person class constructordan vorislangan
// } else {
//     console.log("Bu Nur Object Person classiga tegishli emas!!!");
// }
//////////////////////////////////////////////////////////////////yuqoridagi kodni commentsiz holati
// class Person {
//     _name: string;
//     _age: number;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     info(value: number): string {//valuega faqat number oladi va string qilib qaytaradi
//         return `Nomi ${this._name} yoshi ${this._age + value} da `;
//     }
//     get age(): number {
//         return this._age;
//     }
//     set age(value: number) {
//         if (value > 0 && value < 100) {
//             this._age = value;
//         } else {
//             throw new Error("Siz noto'g'ri yosh kiritdingiz!!!");
//         }
//     }
// }
// const Nur: Person = new Person("Nur", 35);
// console.log(Nur);//Person classdan nusxalan Nur objecti
// Nur.age = 55; //Personni ichidagi info metodi va set age sabab endi yosh 55da
// console.log(Nur.age); //Personni ichidagi info metodi va set age sabab endi yosh 55da
// console.log(Nur.info(4)); //Personni info metodi va age sabab 55 yoshga 4 value sifatida qo'shildi va yosh 59 bo'ldi//Nomi Nur yoshi 59 da
// //objectni classga tegishlimi yoki yo'qmi tekshirish
// if (Nur instanceof Person) {
//     console.log("Bu Nur Object Person classiga tegishli"); ///Bu Nur Object Person classiga tegishli chnki rostdan shunday
// } else {
//     console.log("Bu Nur Object Person classiga tegishli emas!!!");
// }
/////////////////////////////////////////////////////////////////////////////////////
// class Person {
//     _name: string = ""; //default holati
//     _age: number = 0; //default holati
//     constructor(name: string, age: number) {
//         //object constructor yani Person classidagi qiymatlardan vorislanib object yasaydigan constructor. masalan _namega teng qilinadigan har qanday narsa endi string bo'lishi kerak aks holda hato chunki Personda _name string qilingan endi boshqa classda nusxalanib chaqirilgandaham bu qiymatlarni typesi shu string va age number bo'lishi shart tsni qoidi shu classdan nusxalangan objectlarniham type ona classdagi bilan bir hil bo'lishi shart
//         this._name = name;
//         this._age = age;
//     }
// }
// class Student extends Person {
//     //bu student classi extends kalit so'zi bilan Person classdan structurani  voris oladi yani Person classni constructoridagi qiymatlarni voris qilib oladi person classini constructordagi qiymatlari esa person classda qattiy qilib qanday typega oid ekanligi qattiy aytib qo'yilgan
//     _group: string = "";
//     _courses: number = 0;
//     //Personni   namesi, Personni agesi group va corses esa studentni yangi qiymatlari
//     constructor(name: string, age: number, group: string, courses: number) {
//         //super constructorga yani bu holatda Person classidan nusxa oletgan  hu student classini constructoriga Person classni constructoridagi qiymatlarham chaqirilishi kerak va typeham aytilishi kerak yani bu constructordagi boshidagi name, va age Persondan keldi
//         super(name, age); //bu super constructor yani extends qilnayotgan har bir classda super constructor bo'lsdi va bu super constructor birichi qatorda yozilishi kerak
//         this._group = group;
//         this._courses = courses;
//     }
// }
// const nur: Person = new Person("Nur", 23);
//boshidagi name bilan age yani bu holatdagi "Nur" bilan 35 yani age Persondan Studentga super constructor parametrida chaqirilgan
// const talaba: Student = new Student("Nur", 35, "gruppasi", 4); //yangi o'zgaruvchi nomi talaba type Student classi 1chi qiymat nomi: string Nur, 2chi qiymat yoshi number 35 da,  3chi qiymat gruppasi string 4chi qiymat kurslari number//vorislangan student classdagi qiymatlarni tartiblanishi va typega qarab object chaqiriladi va bu tartib buzulsaham hato chiqadi yani tsda qattiy qoidasi shu adashmaslik global hato chiqmasligi uchun hare bir funksiya har bir object yozilayotganda qattiy qoidalar asosida yoziladi shunda hato kam bo'ladi
// console.log(nur);
// console.log(talaba);
/////////////////////////////////////////////////////////////////////////////////////////////////////
// let a: unknown = 1; //nomalum yani anyga o'hshash
// let b: number = <number>a; //nomalum typega ega a o'zgaruvchini b o'zgaruvchiga chaqirib number typega aylantirish yani unknown typedan endi aniq tiniq number typega o'zgardi
/////////////////////////////////////////////////////////////////////////////////////////////////////
// class Persons {
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
// }
// class Student extends Persons {
//     //classda qiymat yaratilayotganda type aniq aytilib o'tilishi shart tsni qonuni shu
//     _group: string = ""; //bu Stedentda yangi yaratilgan qiymat type string
//     _courses: number = 0; //bu Stedentda yangi yaratilgan qiymat type number
//     constructor(name: string, age: number, group: string, courses: number) {
//         //Persons classidagi name va age qiymatlari super constructor sabab Student classga keldi
//         super(name, age);
//         this._group = group; //bu Stedentda yangi yaratilgan qiymat type string
//         this._courses = courses; //bu Stedentda yangi yaratilgan qiymat type number
//     }
// }
// class Teacher extends Persons {
//     disciplines: string[] = [];
//     constructor(name: string, age: number, disciplines: string[]) {
//         //Teacher classi Personsdan nusxa oldi va ynagi disciplines nomli string qiymatli arrayni qo'shdi bu disciplines array ichida faqat stringni qabul qiladi object shu Teacher classdan nuxa olganda bu arrayga>>>["React.js", "JS", "Next.js"]shu holatd aqiymat berildi
//         super(name, age);
//         this.disciplines = disciplines;
//     }
// }
// const nur: Persons = new Persons("Nur", 23);
// console.log(nur);
// const sardor: Student = new Student("Nur", 35, "gruppasi", 4);
// sardor._age; //Personsdan keldi
// sardor._name; //Personsdan keldi
// sardor._group; //Studentdan keldi
// sardor._courses; //Studentdan keldi
// console.log(sardor);
// const newSardor: Persons = <Persons>sardor;
// newSardor._name; //bu Persons classdan keldi
// newSardor._age; //bu Persons classdan keldi
// console.log(newSardor);
// const abror: Teacher = new Teacher("Abror", 34, ["React.js", "JS", "Next.js"]);
// console.log(abror);
///////////////////////////////////////////////////////////////////////////////////////////////////
// class Persons {
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;//bu default hamma joyda seyhello chaqirilsaham shu default string qiymat ishlaydi va this._nameni qiy,ati yani name ishlaydi
//     }
// }
// class Student extends Persons {
//     //classda qiymat yaratilayotganda type aniq aytilib o'tilishi shart tsni qonuni shu
//     _group: string = ""; //bu Stedentda yangi yaratilgan qiymat type string
//     _courses: number = 0; //bu Stedentda yangi yaratilgan qiymat type number
//     constructor(name: string, age: number, group: string, courses: number) {
//         //Persons classidagi name va age qiymatlari super constructor sabab Student classga keldi
//         super(name, age);
//         this._group = group; //bu Stedentda yangi yaratilgan qiymat type string
//         this._courses = courses; //bu Stedentda yangi yaratilgan qiymat type number
//     }

//     //  seyHello(): string {//bu seyHello Persons ona classdagi metod lekin bu Student classda bo'lgani uchuno'z ichidagi returinni ishlatadi faqat bu qaytaradigan narsa string bo'lsa bo'ldi chuni Persons ona classda bu metodni type string bo'lsin deyilgan boshqa narsani qabul qilmaydi
//     //         return ` Salom `
//     // }

//     seyHello(): string {//bu holatda birinchi Person classdagi seyhello va keyin esa  Student classdagi seyhelloni stringgi chiqadi chunki parentMethod bilan Personsdagi seyhello shaxsan chaqirilgan Studentdagi seyhelloni ichida
//         const parentMethod = super.seyHello()//ona class Personsdan metodlarniham super bilan chaqirib qiymatini o'zgartirish mumkun  sayhello string type va seyhelloni shunday super bilan chaqirib hohlagancha string malumot qo'shish mumkun
//         return `${parentMethod} Men ${this._courses}-kursning, ${this._group}da o'qiyman `
//     }//endi Student classidan nusxa olgan sardor nomli o'zgaruvchid ashu student classida yozilganseyHello metodi ishlaydi yani ona class parentsdan kelgani emas faqat studentda yozilgansayhello ishlaydi
// }
// class Teacher extends Persons {//extends qikinetgan class faqat bitta classdan extends qiladi
//     disciplines: string[] = [];
//     constructor(name: string, age: number, disciplines: string[]) {
//         //Teacher classi Personsdan nusxa oldi va ynagi disciplines nomli string qiymatli arrayni qo'shdi bu disciplines array ichida faqat stringni qabul qiladi object shu Teacher classdan nuxa olganda bu arrayga>>>["React.js", "JS", "Next.js"]shu holatd aqiymat berildi
//         super(name, age);
//         this.disciplines = disciplines;
//     }
//     info():string{
//         const parent = super.seyHello()
//         return `${parent} Men ${this.disciplines[0]} dan dars beraman`
//     }
// }
// const nur: Persons = new Persons("Nur-1", 23);
// console.log(nur);
// console.log(nur.seyHello());
// const sardor: Student = new Student("Nur-2", 35, "34-gruhi", 4);
// // sardor._age; //Personsdan keldi
// // sardor._name; //Personsdan keldi
// // sardor._group; //Studentdan keldi
// // sardor._courses; //Studentdan keldi
// console.log(sardor);
// console.log(sardor.seyHello()); //bu sayHello metodi Persons ona classda yozilgani sabab sardor o'zgaruvchidaham nur o'zgaruvchidaham nusxalandi yani Student extend classdaham Teacher extends classdaham bu sayHello bor
// const newSardor: Persons = <Persons>sardor; //sardor o'zgaruvchi newSardor o'zgaruvchida yana chaqirilgani uchun logda ikkita Nur-2 chiqdi yani sardor o'zgaruvchi ikki martta chiqdi
// // newSardor._name; //bu Persons classdan keldi
// // newSardor._age; //bu Persons classdan keldi
// console.log(newSardor);
// console.log(newSardor.seyHello()); //bu sayHello metodi Persons ona classda yozilgani sabab sardor o'zgaruvchidaham nur o'zgaruvchidaham nusxalandi yani Student extend classdaham Teacher extends classdaham bu sayHello bor va seyhello metodi return qilsin becet ichidagi stringni va this.nameni yani ona class Perosnsni name qiymatini bu degnai har bir extend qilingan yangi classlardaham bu sayhello metodi chaqirilganda nameni yani nusxalangan objectdagi nameni oladi
// const abror: Teacher = new Teacher("Abror", 34, ["React.js", "JS", "Next.js"]);
// console.log(abror);
// console.log(abror.seyHello()); //bu sayHello metodi Persons ona classda yozilgani sabab sardor o'zgaruvchidaham nur o'zgaruvchidaham nusxalandi yani Student extend classdaham Teacher extends classdaham bu sayHello bor va seyhello metodi return qilsin becet ichidagi stringni va this.nameni yani ona class Perosnsni name qiymatini bu degnai har bir extend qilingan yangi classlardaham bu sayhello metodi chaqirilganda nameni yani nusxalangan objectdagi nameni oladi
// console.log(abror.info());
/////////////////////////////////////////////////////////// yuqoridagi kodni commentsizi pastda
// class Persons {
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
// }
// const nur: Persons = new Persons("Nur-1", 23);
// console.log(nur);
// console.log(nur.seyHello());//Persons ona classni seyHello metodi
// /////////////
// class Student extends Persons {
//     //Persons classdan vorislangan Student classi
//     _group: string = "";
//     _courses: number = 0;
//     constructor(name: string, age: number, group: string, courses: number) {
//         super(name, age);
//         this._group = group;
//         this._courses = courses;
//     }
//     //  seyHello(): string {//bu seyHello Persons ona classdagi metod lekin bu Student classda bo'lgani uchuno'z ichidagi returinni ishlatadi faqat bu qaytaradigan narsa string bo'lsa bo'ldi chuni Persons ona classda bu metodni type string bo'lsin deyilgan boshqa narsani qabul qilmaydi
//     //         return ` Salom `
//     // }
//     seyHello(): string {//logga Men 4-kursning, 34-gruhida o'qiyman ni beradi
//         const parentMethod = super.seyHello();//logga Assalomu aleykum mening ismim Nur-2! ni beradi
//         return `${parentMethod} Men ${this._courses}-kursning, ${this._group}da o'qiyman `;//logga Men 4-kursning, 34-gruhida o'qiyman ni beradi
//     }
// }
// //                                   name   age   group   courses
// const sardor: Student = new Student("Nur-2", 35, "34-gruhi", 4);
// console.log(sardor);
// console.log(sardor.seyHello());//Student classni seyHello metodi
// const newSardor: Persons = <Persons>sardor;//newSardor o'zgaruvchi yani hech narsasi yo'q yangi o'zgaruvchi Personsdan vorislanib  qiymatlarini sardorga berdi endi newSardorda eski sardor o'zgaruvchi bor
// console.log(newSardor);
// console.log(newSardor.seyHello());
// ///////////
// class Teacher extends Persons {
//     disciplines: string[] = [];
//     constructor(name: string, age: number, disciplines: string[]) {//disciplinesda string typli massiv bot nima yozsaham 0 dan tartiblanib faqat string qabul qiladi bo'lmasa hato chiqadi
//         super(name, age);
//         this.disciplines = disciplines;
//     }
//     info(): string {
//         const parent = super.seyHello(); //ona Persons classdagi sayHello metodini chaqirilishi super bilan chaqiriladi
//         //       {parent}ni ichida ona class Personsda yozilgan sayHello bor {this.disciplines[0]}ni ichida abror o'zgaruvchi chaqirilgana 2 chi elementni 0 chi qiymati yani "React" bor
//         return `${parent} Men ${this.disciplines[0]} dan dars beraman`;
//     }
// }
// //string bo'lishi Teacher classda disciplinesda yozilgan ["React.js", "JS", "Next.js"]
// const abror: Teacher = new Teacher("Abror", 34, ["React.js", "JS", "Next.js"]);
// console.log(abror);
// console.log(abror.seyHello());
// console.log(abror.info());
////////////////////////////////////////////////////////////////////////////////////

//////

////interface // Interfeyslar - bu ob'ektning tuzilishi yoki shaklini aniqlash va ob'ektga ega bo'lgan yoki ega bo'lishi kerak bo'lgan xususiyatlar va usullarni belgilash imkonini beruvchi TypeScript xususiyati . Ularning asosiy vazifasi turni tekshirish va ishlab chiquvchilarga ishlab chiqish jarayonida turga bog'liq xatolarni aniqlashda yordam berish va Asosiysi, TypeScript-dagi interfeys ob'ektning kutilayotgan tuzilishini belgilaydigan sintaktik shartnomadir . U hech qanday funksionallikni amalga oshirmasdan ob'ektlar shaklini, jumladan, ularning xossalari va usullarini tasvirlash usulini taqdim etadi.
////Turlar ibtidoiy qiymatlar, birlashma/kesishma turlari, funksiyalar va kortejlar uchun afzal ko'riladi, interfeyslar esa yaxshiroq xato xabarlari va turni tekshirish samaradorligini taklif qiladi . Ularning o'rtasida tanlov shaxsiy imtiyozlarga, o'qish qobiliyatiga va loyiha talablariga asoslanishi kerak.
////Interfeys - ob'ektni tavsiflovchi, lekin ularni amalga oshirish yoki ishga tushirishni ta'minlamaydigan tegishli xususiyatlar va usullar guruhidir
////
// interface IPerson {
//     _name: string;
//     _age?: number; // ? so'roq belgisi bu ageni ishlatsaham ishlatmasaham bo'ladi lekin qolganini BU INTERFACE CHAQIRILGAN CLASSDA ISHLATISH SHART BO'LMASA HATO CHIQADI
//     seyHello(): string;
//     // seyHello: () => string;//Interface ichida function metodlardaham array function ishlatish mumkun
//     ///// new(name: string, age: number):void//interfacelarda constructorham yozsa bo'ladi bu holatda bu conctructor ishlatilmadi

// }
// class Persons implements IPerson {
//     //implements kalit so'zi bilan classga interfaceni chaqirsa bo'ladi//ENDI Personsga IPersondan keladigan qiymatlarni hammasi kelishi shart tsni maqsadi Persons classi ishlaganda nimadur qolib ketmasligi yani hato chiqmasli uchun hamma qiymatlar kelishi shart
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}, yoshim ${this._age}!`;//bu name age sayhello qiymatlari implements kalit so'zi bilan IPerson interfacedian kelepti
//     }
// }
// const nur: Persons = new Persons("Nur", 35);
// console.log(nur);
// console.log(nur.seyHello());
/////////////////////////////////////////////////////////////////////////////////
//TypeScript-dagi typlar yanada moslashuvchan va ibtidoiy, kesishish, birlashma, kortej yoki turli xil ma'lumotlarni belgilashi mumkin, interfeyslar esa ob'ekt shaklini tasvirlash uchun ishlatiladi . Typelar yangi tur yaratish uchun type kalit so'zidan, interfeyslar esa interfeysni e'lon qilish uchun interfeys kalit so'zidan foydalanadi.yani typelar qattiqqo'lroq va imkoniyati kengroq
//Interfeysning deyarli barcha xususiyatlari typeda mavjud, asosiy farq shundaki, har doim kengaytiriladigan interfeysga nisbatan yangi xususiyatlar qo'shish uchun turni qayta ochib bo'lmaydi
//////////
// interface IPerson {
//     //masalan interfacega berilgan nomIPerson bilan interface ochildi va ichiga 3 ta qiymat yozildi va classga chaqirib ishlatildi lekin keyinchalik bu IPerson interfaciga yana malumot qo'shilishi kerak bo'lsa yana IPerson deb interface ochib yangi qiymatlar qo'shib ishlatish mumkun shunda birinchi interfacedan keyingi bir hil nomli interfacelar hamma qiymatini aslida birinchi yozilgan interfacega bu holatda ipersonga yig'ib boraveradi typelarda esa unday emas typelar bilan interfaceni yana bir farqi shundaki interfaceda bitta nom qayta qayta ishlatilishi mumkun lekin typelarda emas typelarda sal boshqacharoq qilib qiymatlar yana qo'shiladi
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// interface IPerson {
//     //yani  bir hil nomli interfacega yana ikkita qiymat qo'shildi bu qo'shilgan nqiymatlarniham qanday typga ega bo'lishi kerakligi qattiy aytilishi kerak va chaqirilgan classiga bu qiymatlarham qattiy ravishda qo'shilishi shart bo'lmasa hato chiqadi yani tsda nimadur qolib ketishi kerymas hammasi ishlashi yoki o'chirilishi shart
//     _isMarried: boolean;
//     _cars: number;
//     seyHello(): string;
// }
// class Persons implements IPerson {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     seyHello(): string {
//         return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     }
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);
// console.log(nur.seyHello());
///////////////////////////////////////////////////////////////////////
// type IPerson {//hato typelarda bir hil nom bilan ishlash mumkun emas typelar yanaham qattiqqo'lroq
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// type IPerson {//hato typelarda bir hil nom bilan ishlash mumkun emas typelar yanaham qattiqqo'lroq
//     _isMarried: boolean;
//     _cars: number;
//     seyHello(): string;
// }
// class Persons implements IPerson {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     seyHello(): string {
//         return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     }
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);
// console.log(nur.seyHello());//brawserda faqat class ishlayapti typelar emas
////////////////////////////////////////////////////////////////////////////////////////////////
// interface IPersonProps {//ona interface
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// interface IPersonProps2 {//ona interface
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// interface IPerson extends IPersonProps, IPersonProps2 {//IPerson interface va ona interface IPersonPropsdan va IPersonProps2 dan vorislanepti//inerfacelarda boshqa interfacelardan hohlagancha vorislanish mumkun lekin classslarda faqat bitta classdan vorislanish mumkun
//     //////ikkita interface yozilib classga qiymatlari chaqirilgandan keyin interface o'chirilsaham class interfacedan kelgan qiymatlarni o'zini qiymatiday o'zlashtirib ishlataveradi hato chiqarmaydi lekin interfacelarda yozilgan qiymatlardan birirtasi classda tushurib qoldirilsa shunda ts ishlaydi va aytadiki bu class interfacedan vorislangan vorislangan narsalar ichida manabu narsda classda tushib qoldi shunda hato chiqadi masalan bu holatda sayhello metodi o'chirib qo'yilganda class hato
//     _isMarried: boolean;
//     _cars: number;
//     seyHello(): string;
// }
// class Persons implements IPerson {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     seyHello(): string {
//         return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     }
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);
// console.log(nur.seyHello())
///////////////////////////////////////////////////////////////////////////////////////////////////////
// interface IPersonProps {//ona interface
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// interface IPersonProps2 {//ona interface
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// interface IPerson extends IPersonProps, IPersonProps2 {//IPerson interface va ona interface IPersonPropsdan va IPersonProps2 dan vorislanepti//inerfacelarda boshqa interfacelardan hohlagancha vorislanish mumkun lekin classslarda faqat bitta classdan vorislanish mumkun
//     //////ikkita interface yozilib classga qiymatlari chaqirilgandan keyin interface o'chirilsaham class interfacedan kelgan qiymatlarni o'zini qiymatiday o'zlashtirib ishlataveradi hato chiqarmaydi lekin interfacelarda yozilgan qiymatlardan birirtasi classda tushurib qoldirilsa shunda ts ishlaydi va aytadiki bu class interfacedan vorislangan vorislangan narsalar ichida manabu narsda classda tushib qoldi shunda hato chiqadi masalan bu holatda sayhello metodi o'chirib qo'yilganda class hato qaytardi
//     _isMarried: boolean;
//     _cars: number;
//     seyHello(): string;
// }
// class Persons implements IPerson {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     // seyHello(): string {
//     //     return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     // }//HATO>>>>>>Class 'Persons' incorrectly implements interface 'IPerson'. Property 'seyHello' is missing in type 'Persons' but required in type 'IPerson'
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);//browserdagi log aslida class o'zida yozilgan aslida interfacedan kelishi kerak bo'lgan lekin hato sabab kelmagan qiymatlarni o'zlashtirib olgani uchun chiqdi aslida esa hato
// console.log(nur.seyHello())//interfacedan nusxalanib classga kelgan va classda tushirib qoldiorilgani uchgun hato
///////////////////////////////////////////////////////////////////////////////////////////////////
// type  IPersonProps = {
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// type IPersonProps2 = IPersonProps & {//typelar bir biridan vorislanmaydi lekin birlashtiriladi bu holatda va bilan yani >>& bu bilan birlashtirildi bu va degani (&) yani va  IPersonProps va IPersonProps2 typelar ishlatilishi shart yani ichidagi qiymatlar chaqirilgan classida ishlatilishi shart degani
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// class Persons implements IPersonProps {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     seyHello(): string {
//         return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     }
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);
// console.log(nur.seyHello());
///////////////////////////////////////////////////////////////////////////////////////////////////////
// type  IPerson = {
//     _name: string;
//     _age?: number;
//     seyHello(): string;
// }
// type IPerson2 = IPerson | {
//     _isMarried: boolean;
//     _cars: number;
// }
// class Persons implements IPerson  {
//     _name: string = "";
//     _age: number = 0;
//     _isMarried: boolean;
//     _cars: number;
//     constructor(name: string, age: number, isMarried: boolean, cars: number) {
//         this._name = name;
//         this._age = age;
//         this._isMarried = isMarried;
//         this._cars = cars;
//     }
//     seyHello(): string {
//         return `Ismi: ${this._name}, yoshi: ${this._age}, oilaviy holati: ${this._isMarried},  `;
//     }
// }
// const nur: Persons = new Persons("Nur", 35, false, 2);
// console.log(nur);
// console.log(nur.seyHello());
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////yuqoridagi interface codlarda loglarda hatolar bor etibor berma (lekin dars maqsadi to'g'ri hato faqat bazi loglarda) loglarda hatosi yo'q interface pastdagi codda
// interface IPerson { _name: string; _age?: number; seyHello(): string;}
// interface IStudent extends IPerson {_group: string; _course: number;}//ona IPerson interfacedan vorislangan IStudent interfeceda sayHello metodi ishlatilmadi chunki | va yani qattiy shular ishlatilsin deyilmadi
// class Person implements IPerson {
//     _name: string = ""; // IPerson interfecdan kelgan agar IPerson interface udalit qilinsa bu qiymatlarni class o'zlashtirib classni qiymatiday ishlatadi
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;//IPerson interfacedan keldi
//         this._age = age;//IPerson interfacedan keldi
//     }
//     seyHello(): string {//IPerson interfacedan keldi
//         return `Assalomu aleykum mening ismim ${this._name}!     `;
//     }
// }
// class Student extends Person implements IStudent {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);//ona IPerson interfacedan vorislangan Person classidan kelgan
//         this._group = group;//IStudent interfacedan vorislangan
//         this._course = course;//IStudent interfacedan vorislangan
//         //bu Student classi IStudent interfacedan vorislangabni uchun sayHello metodi kelmasaham hato chiqarmadi chunki sayHello metodi IPerson interface chaqirilgan classda qattiy ishlatilishi kerak
//     }
// }
// const nur: IPerson = new Person("Nur, bu IPerson interfacedan vorislangan Person classi bilan yaratilgan object", 35);
// console.log(nur);console.log(nur.seyHello());
// const nur2: IStudent = new Student("Nur-2, bu Person classidan vorislangan Student classi student classi IStudent interfacedan vorislangan ", 36, "123-gruh", 4);
// console.log(nur2);console.log(nur2.seyHello());
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////
//abstract classlar
// interface IPerson { _name: string; _age?: number; seyHello(): string;}
// interface IStudent extends IPerson {_group: string; _course: number;}
// abstract class Person implements IPerson {//abstract classlardan object yaratib bo'lmaydi faqatgina vorislanish uchun ishlatiladi// endi Person classidan object yasab bo'lmaydi faqat Person classini Student classiga vorislantirib Student classidan object yasash mumkun shunda Student classidan yasalgan objectda bu abstract class Personniham qiymatlari vorislanadi va Person abstract classdagi qiymatlarham Student classga o'tadi lekin endi Personni o'zidan to'g'ridan to'g'ri object yasab bo'lmaydi
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
// }
// class Student extends Person implements IStudent {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
// }
// const nur2: IStudent = new Student("Nur-2, bu Person classidan vorislangan Student classi student classi IStudent interfacedan vorislangan ", 36, "123-gruh", 4);
// console.log(nur2);console.log(nur2.seyHello());
//////////////////////////////////////////////////////////////////////////////////////
// interface IPerson { _name: string; _age?: number; seyHello(): string; info(): string}
// interface IStudent extends IPerson {_group: string; _course: number;}
// abstract class Person implements IPerson {
//     _name: string = "";
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
//     abstract info(): string //abstract metodlar//abstract metodlar bor classdan vorislanetgan classlar (masalan bu holatda IStudent classi) abstract metodni o'z ichid aqo'llashi majburiy yani tushib qolmasligi kerak tsni qonuni yani objectda nimadur tushib qolmasligi kerak//yani abstract metodlar bilan qattiqqo'lroq lekinaslida agar abstract metodlarda ishlatilmasaham hato chiqdi ts baribir infoni ishlatmaganimzi uchun student classda hato chiqardi
// }
// class Student extends Person implements IStudent {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
//         info(): string {
//         return `
//         Ism: ${this._name}
//         Yosh: ${this._age}//age number bo'lsaham bu info metodi endi buni string holatga o'giradi yani infoni qiymati faqat string bo'ladi
//         Gruh: ${this._group}
//         Kurs: ${this._course}`
//     }
// }
// const nur2: IStudent = new Student("Nur-2, bu Person classidan vorislangan Student classi student classi IStudent interfacedan vorislangan IStudent interface esa IPersonn interfacedan vorislangan ", 36, "123-gruh", 4);
// console.log(nur2);console.log(nur2.seyHello());console.log(nur2.info());
///////////////////////////////////////////////////////////////////////////////////////////////////////////

//////
////public, private, protected roadonly

// class Person {
//     // public _name: string = "";//classlar ichidagi qiymatlar defult holatda public yani ochiq bo'ladi
//     private _name: string = ""; //shaxsiy yani qulflangan bo'ladi faqat shu Person classga aloqador bo'ladi tashqariga chiqmaydi shu sabab bu Person classidan vorislangan Student classini name qiymatida hatolik sodir bo'ldi privateda qiymatni vorislantirib ishlatib bo'lmaydi
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
// }
// class Student extends Person {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
//     info(): string {
//         return `
//         Ism: ${this._name}
//         Yosh: ${this._age}
//         Gruh: ${this._group}
//         Kurs: ${this._course}`;
//     }
// }
// const nur: Person = new Person("Nur", 35);
// const nur2 = new Student("Nur-2,  ", 36, "123-gruh", 4);
// console.log(nur);
// console.log(nur2);
// console.log(nur2.seyHello());
// console.log(nur2.info());
//////////////////////////////////////////////////////////////////////////////////////////////
// class Person {
//     // public _name: string = "";//classlar ichidagi qiymatlar defult holatda public yani ochiq bo'ladi
//     // private _name: string = "";
//     protected _name: string = ""; //asralgan yani bu protected typiham privatega o'hshaydi faqat farqi bundan voris olsa bo'ladi lekin voris olgan classdan object yasashda ishlamaydi yani bu holatdagi string typli name qiymatiga protected type berildi endi bu nameni boshqa classlarga vorislantirish bilan jo'natsa bo'ladi lekin object yasab bo'lmaydi bu holatda Student classi Person classidan vorislangan va Student classidan nur2 objecti yasalgan shu objectda nameni alohida chaqirib ishlatib bo'lmaydi masalan console.log(nur2.???); name qiymati yo'q chunki protected
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
// }
// class Student extends Person {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
//     //   private protected public metodlargaham bu typelarni berib qo'yish mumkun public aslida aftamatik yozilgan bo'ladi
//     info(): string {
//         return `
//         Ism: ${this._name}
//         Yosh: ${this._age}
//         Gruh: ${this._group}
//         Kurs: ${this._course}`;
//     }
// }
// const nur: Person = new Person("Nur", 35);

// const nur2 = new Student("Nur-2,", 36, "123-gruh", 4);
// console.log(nur);
// console.log(nur2);
// console.log(nur2.seyHello());
// console.log(nur2.info());
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Person {
//     constructor(public name: string, public age: number) {}//constructor ichidaprivate protected va publicdan foydalanish///constructor ichida classga qiymatlar berish yani bu holatda qiymatlar oldiga qanday type bo'lishi yani ts typemas yani o'zi qanday qiymat bo'lishi SHAXSAN AYTILDI SHUNDA YUQORIGA CLASS boshiga qaytadan qiymat berish shart emas ekan constructorni o'zida classsni qiymatlari bittada yozib ketilar ekan
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this.name}!`;
//     }
// }
// class Student extends Person {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
//     info(): string {
//         return `
//         Ism: ${this.name}
//         Yosh: ${this.age}
//         Gruh: ${this._group}
//         Kurs: ${this._course}`;
//     }
// }
// const nur: Person = new Person("Nur", 35);
// const nur2 = new Student("Nur-2,", 36, "123-gruh", 4);
// console.log(nur);
// console.log(nur2);
// console.log(nur2.seyHello());
// console.log(nur2.info());
////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Person {
// public readonly _name: string = "";//readonly type bilan endi bu namega tushgan qiymat o'zgarmaydi huddi constga o'hshab//bu holatda Personn classidan object yasalayotgan nur nomli o'zgaruvchi va Person classidan voris olayotgan Student classini nur2 nomli o'zgaruvchilardaham bu readonly qilingan name qiymati chaqirilgan va endi bu nameni ikkala o'zgaruvchidaham o'zgartirib bo'lmaydi masalan bunday>>>>>>>>nur._name = "some name" yoki nur2._name = "some name" endi namelar o'zgarmaydigan qattiy bo'ldi yani object yasalgandagi birinchiqiymatini yasalgan joydan ("Nur", 35)boshqa joyda o'zgartirib bo'lmaydi
//     _age: number = 0;
//     constructor(name: string, age: number) {
//         this._name = name;
//         this._age = age;
//     }
//     seyHello(): string {
//         return `Assalomu aleykum mening ismim ${this._name}!`;
//     }
// }
// class Student extends Person {
//     _group: string = "";
//     _course: number = 0;
//     constructor(name: string, age: number, group: string, course: number) {
//         super(name, age);
//         this._group = group;
//         this._course = course;
//     }
//     info(): string {
//         return `
//         Ism: ${this._name}
//         Yosh: ${this._age}
//         Gruh: ${this._group}
//         Kurs: ${this._course}`;
//     }
// }
// const nur: Person = new Person("Nur", 35);

// const nur2 = new Student("Nur-2,  ", 36, "123-gruh", 4);
// console.log(nur);
// // nur._name = "some name"////hato chunki ona class Personga bu _nameni o'zgarmas qilib qo'yildi (readonly)
// console.log(nur2);
// console.log(nur2.seyHello());
// console.log(nur2.info());
// // nur2._name = "some name"////hato chunki ona class Personga bu _nameni o'zgarmas qilib qo'yildi (readonly)
///////////////////////////////////////////////////////////////////////////////////////////////////////

//////
////namespace - bu funktsiyalarni mantiqiy guruhlash uchun ishlatiladigan usul . U umumiy munosabatlarga ega bo'lgan xususiyatlar va ob'ektlarni qamrab oladi. Bu bizga kodimizni ancha toza tarzda tashkil qilish imkonini beradi namespace ichki modullar sifatida ham tanilgan.////TypeScript-da namespace kodni mantiqiy guruhlarga ajratish va identifikatorlar o'rtasida nomlash to'qnashuvlarini oldini olish usulidir . Nomlar bo'shliqlari tegishli kodni bitta namespacega yoki modulga guruhlash usulini taqdim etadi, shunda biz kodimizni osongina boshqarishimiz, qayta ishlatishimiz va saqlashimiz mumkin.
// namespace Utils {
//      function logs(text: string, color: string, fontSize?: string): void {
//         if (fontSize) {
//             console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//         } else {
//             console.log(`%c${text}`, `color: ${color}`);
//         }
//     }
//     logs("Salom TypeScript", "red", "62px");//bu logs Utilsni ichidaham tashqaridaham ishlaydi faqat utilsni ichkarida ishlashi uchun export qilinmasa bo'ldi agar tashqarida ishlatilmoqchi bo'lsa functionndan oldin export qo'yilsa bo'ldi
//     // logs("Salom TypeScript", "red", );

// }           //logs funksiyadagi qiymnatlar qanday typega ega bo'lishi aytildi masalan fonstsize erkin yani obshinal yani ?<<ishlasaham ishlamasaham hato chiqarma degan mano borligi uchun if else bilan shuni tekshirildi yani agar fontsize bor bo'lsa logda %c bu %c belgisi yani bayrog'i style css classlarni stringga chaqirib beradigan kalit yani endi color cssdagi color font-size cssdagi font-size va agar fontsize bor bo'lsa text ishlasin yani string va colori bo'lsin string va fontsizi bo'lsin string yoki fontsizesi bo'lsin va logsni chaqirganda parametriga bu funksiya yozilgandagi parametridagi narsalar chaqirildi va logda red rangli 62pxlli text yani birinchi qiymat chiqdi chunki endi bu color: ${color} aniq cssdagi class c% sabab shu sabab tsda dynamic tarzda css stylelar ishlatildi text esa birinchi bu o'zi nima bo'lsin deganda string text bo'lsin buyrug'ini ifoda qiladi yani textni yani "salom type script"ni  colori red bo'lsin font-sizi 62px bo'lsin  mobodo font-sizi bo'lmasa fontsizesizham ishlayversin>>>>logs("Salom TypeScript", "red", );
/////////////////////////////////////////////////////Bu yerda node.js formatidagi barcha bayroqlar: %c: String %d: Raqam %i: parseInt(value, 10) %f: parseFloat(value) %j: JSON %o: Object (jumladan, sanab bo‘lmaydigan xususiyatlar va proksi-serverlar) %O: Ob'ekt (hisoblab bo'lmaydigan xususiyatlar va proksi-serverlarni o'z ichiga olmaydi) %c: CSS %%: yagona p .
////////////////////////////////////////////////////////////////////////////////////////////////////
// namespace Utils {
//     export  function logs(text: string, color: string, fontSize?: string): void {
//          if (fontSize) {
//              console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//          } else {
//              console.log(`%c${text}`, `color: ${color}`);
//          }
//      }
//      logs("Salom TypeScript", "red", "62px");// function export qilinsaham ichkaridaham ishlayveradi
//  }
//  Utils.logs("Salom dunyo","blue")//Utils namespaceni tashqaridaham mishlatish uchun funksiyani export qilingani font-sizesiz ishlatildi chunki font-size ? yani ishlamasa elseni ichidagi ishlasin deyilgan
//////////////////////////////////////////////////////////////////////////////////////////////
// namespace Utils {
//     export function log(text: string, color: string, fontSize?: string): void {
//         if (fontSize) {
//             console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//         } else {
//             console.log(`%c${text}`, `color: ${color}`);
//         }
//     }
//     log("Salom TypeScipt", "red", "32px");
// }
// Utils.log("Salom dunyo", "green", "24px");
// namespace Animals {
//     export abstract class Animal {//abstract class yani bundan voris olsa bo'ladi lekin bu class bilan object yaratib bo'lmaydi// animals namespaceni ichidagi animal classi tashqarida ishlatish uchun export qilinishi shart
//         protected name: string;//himoyalangan qiymat
//         constructor(name: string) {
//             this.name = name;
//         }
//         abstract say(): void;
//     }
// }
// namespace Animals {//namespacelarni nomlari bir hil bo'lsaham ishlayveradi huddi interfacelarga o'hshab
//     export class Tiger extends Animals.Animal {//animals namespaceni ichidagi animal classidan vorislanish
//         private sound: string;//private yani shaxsiy chunki bu tigerni ovozi va buni boshqa hayvonlar uchun class yaratilganda adashib ishlatmaslik kerakli uchun private berildi chunki tigerni ovoziga boshqa ovozlar o'hshamaydi amasalannadashim quyon classiga ishlatib qo'ymaslik uchun tsda shunday ehtiyot bo'linadi yani hatolardan shunday qochiladi
//         constructor(name: string, sound: string) {
//             super(name);//super bilan animal class ichidagi name qiymati chaqirildi
//             this.sound = sound;//shaxsan tiger classni qiymati
//         }
//         say(): void {
//             Utils.log(//utilsdagi topshiriq bilan tigerni say metodi vazifalandi yani endi tiger nima desa yani tigerni namesi va soundi qanday string bo'lsa shu stringga utils bilan style berilmoqda yani rangi blue fontsize 44px bo'ladi//utilsda birinchi text qiymati berilgan edi bu holatda tex qiymati yo'qligi uchun yani thislar borligi uchun text qiymatiga shu thislarni o'giradi yani obu classdan object yasalayotganda utils bu thislarni qiymatini string qiladi va qolgan  ikkita qiymatniham sylelar bilan string qiladi shunda text string rang blue fontsize 44px bo'ladi
//                 `${this.name} - ${this.sound}, `,
//                 "blue",
//                 "44px"
//             );
//         }
//     }
// }
// const tiger = new Animals.Tiger("Sherxon", "RRRR");//birinchi animals namespacedan vorislangan ikkinchi animals namespacedan vorislangan tiger class birinchi qiymatiga ona classdan vorislangan name stringni ikkinchi qiymatiga tiger classdan vorislangan sound
// console.log(tiger);
// tiger.say();//birinchi animals namespacedan vorislangan ikkinchi animals namespacedan vorislangan tiger class birinchi qiymatiga ona classdan vorislangan name stringni ikkinchi qiymatiga tiger classdan vorislangan sound va say metodi bilan
/////////////////////////////////////////////////////////////////////////////////////////////////
// namespace Utils {
//     export function log(text: string, color: string, fontSize?: string): void {
//         if (fontSize) {
//             console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//         } else {
//             console.log(`%c${text}`, `color: ${color}`);
//         }
//     }
//     log("Salom TypeScipt", "red", "32px");
// }
// Utils.log("Salom dunyo", "green", "24px");
// namespace Animals {
//     export abstract class Animal {
//         protected name: string;
//         constructor(name: string) {
//             this.name = name;
//         }
//         abstract say(): void;
//     }
// }
// namespace Animals {
//     export class Tiger extends Animals.Animal {
//         private sound: string;//private yani shaxsiy chunki bu tigerni ovozi va buni boshqa hayvonlar uchun class yaratilganda adashib ishlatmaslik kerakli uchun private berildi chunki tigerni ovoziga boshqa ovozlar o'hshamaydi amasalannadashim quyon classiga ishlatib qo'ymaslik uchun tsda shunday ehtiyot bo'linadi yani hatolardan shunday qochiladi
//         #sound: string; //private typeni # bilan yozilishi shunda private deb yozish shartmas bu #===privatega lekin object ichida chaqirsa bo'ladi ts hato ko'rsatadi lekin ishlayveradi
//         constructor(name: string, sound: string) {
//             super(name);
//             this.sound = sound;
//             this.#sound = sound;
//         }
//         say(): void {
//             Utils.log(
//                 `${this.name} - ${this.sound}, ${this.#sound}`,
//                 "blue",
//                 "24px"
//             );
//         }
//     }
//     export namespace Pets {//namespaceni ichida hohlagancha class yaratish mumkun
//         export class Cat extends Animals.Animal {
//             private sound: string;
//             constructor(name: string, sound: string) {
//                 super(name);
//                 this.sound = sound;
//             }
//             say(): void {
//                 Utils.log(`${this.name} - ${this.sound}`, "blue", "24px");
//             }
//         }
//     }
// }
// const tiger = new Animals.Tiger("Sherxon", "RRRR");
// console.log(tiger);
// tiger.say(); //"RRRR" ikki martta kelepti #sound va private sound sabab
// const cat = new Animals.Pets.Cat("Mushuk", "Mov");//namespacelar ichidagi classlarni ichma ich chaqirish
// console.log(cat);
// cat.say();
//////////////////////////////////////////////////////////////////////////////////////////////////////
////yuqoridagi kodlarni kommentsiz yozilgani
// namespace Utils {
//     export function log(text: string, color: string, fontSize?: string): void {
//         if (fontSize) {
//             console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
//         } else {
//             console.log(`%c${text}`, `color: ${color}`);
//         }
//     }
//     log("Salom TypeScipt", "red", "62px");
// }
// Utils.log("Salom dunyo", "green");
// namespace Animals {
//     export abstract class Animal {
//         protected name: string;
//         constructor(name: string) {
//             this.name = name;
//         }
//         abstract say(): void;
//     }
// }
// namespace Animals {
//     export class Tiger extends Animals.Animal {
//         private sound: string;
//         constructor(name: string, sound: string) {
//             super(name);
//             this.sound = sound;
//         }
//         say(): void {
//             Utils.log(`${this.name} - ${this.sound},`, "blue", "44px");
//         }
//     }
// }
// const tiger = new Animals.Tiger("Sherxon", "RRRR");
// console.log(tiger);
// tiger.say();
////////////////////////////////////////////////////////////////////////////////////////////////

////////
////generic type yani type kalit so'zi bilan birorta type yo'q yani belgilanmagan o'zgaruvchi ochib shu type yo'q o'zgaruvchini boshqa o'zgaruvchiga chaqirib type berish shu <T> bilan yoziladi
// type A<T> = T; //onasi yani o'zgaruvchan onasi A // yani bu T aslida type bo'ladi bu joyga <> hohlagan narsani yozish mumkun hohlagancha nom berish mumkun lekin bo'sh bo'masa bo'ldi T deyilishini sababi type ekanligi yani bo'sh type ekanligi bun bo'sh typega ega T o'zgaruvchiga hohlagancha boshqa o'zgaruvchiga chaqirib hohlagancha qiymat berish mumkun
// type B = A<string>; // B = string
// type C = A<number>; // C = number
// type D = A<boolean>; // D = boolean
// type E = A<"TypeScript">; // E = 'TypeScript'
// let arr1: number[] = [1, 2, 3];
// let arr2: Array<number> = [1, 2, 3]; //buham aslida genericni boshqacha sintaksisi
// let arr3: Array<string> = ["a", "b", "c"]; //buham aslida genericni boshqacha sintaksisi
// type MyArray<T> = T[]; //generic arrayda ishlatish yani bu holatda arrayga ega bo'sh type o'zgaruvchi endi bu MyArrayni pastda chaqirib hohlagan qiymat berilssaham massiv ichida berilsa bo'ldi
// //generic>>>MyArray <T> ==== T[]>>>T[]
// const arr4: MyArray<boolean> = [true, false]; //yuqoridagi MyArray generic type default bo'sh massiv faqat boolean qabul qiladi boshqa narsaga esa hato qaytaradi
// const arr5: MyArray<boolean | number> = [true, false, 12]; //arr5 MyArray ona typedan generic qilingan va bosh qiymatiga boolean yoki number bo'lish aytilgan
///////////////////////////////////////////
// function echo<T>(x: T): T {//ona generic function
//     //generic function
//     return x;
// }
// const result = echo(12); //type echo function = 12
// const result = echo("salom"); //type echo function = "salom"
// const result:string = echo("salom");
// const result: number = echo(12);
///////////////////////////////////////////
// const echo = <T>(x: T): T => {
//     return x;
// };
// const result =  echo ("ts")
// const result:string =  echo ("ts")
// const result =  echo<string> ("ts")// const result:string =  echo ("ts")sintaksiz o'zgardi holos
// const result:number =  echo (12)
// const result = echo<number>(12);
///////////////////////////////////////////
// const echo1 = <T>(x: T): T => {
//     return x;
// };

// const echo2: <T>(x: T) => T = <T>(x: T): T => {
//     return x;
// };
/////////////
/////////////
// function identity<Type>(arg: Type): Type {
//     return arg;
// }
// // let output = identity<string>("myString");//sintaksiz-1 string ekanligi shaxsan aytildi
// // let output = identity("myString");//sintaksiz-2 ""buni tanib o'zi string typeni aftamatik berdi
// let output = identity(1); //number typeni aftamatik berdi// chunki identityda type berilgan yani anyga o'hshagan lekin anydan farqi bor farqi shuki ohiridaham any qaytaradi yani nimaligi nomalum bo'lib qoladi typeda esa type beriladi va shu typega qarab nima keletganinianiq bilish mumkun
//////////////classlarda generic typelardan foydalanish
// class List<T> {
//     elements: T[] = [];
//     add(element: T): void {
//         this.elements.push(element);
//     }
// }
// let lists = new List<number>();
// lists.add(12);
// lists.add(32);
// console.log(lists);
// let lists1 = new List <boolean | undefined>()
// lists1.add(undefined)
// lists1.add(true)
// lists1.add(false,true)//hato sabab??? booleanda ikkita qiymat borku lekin ikklasiniham bitta joyda ishlatim bo'lmaydi chunki booleanda yoki false yoki tru bo'lishi kerak nimadur bir vaqtni o'zida ham hato ham to'g'ri bo'la olmaydi
/////////////
// class List<T> {
//     elements: T[] = [];
//     add(element: T): void {
//         this.elements.push(element);
//     }
// }
// let lists = new List<number | string>();
// lists.add(12);
// lists.add("32");
// console.log(lists);
/////////////

//////
//////////////////////////interfacelarda generic typelardan foydalanish
// interface IList<T> {
//     elements: T[];
//     add(element: T): void;
// }
// class List implements IList<string> {//bu holatda IList nomli interface ochildi va typiga genericsan deyildi ichida ikkita qiymat bularham generic type deyildi (lekin aslida hohlagan tyypeni berish mumkun faqay classga chaqirilganda shu type berilsa bo'ldi) va bu IList interface implements kalit so'zi bilan List nomli classga chaqirildi va IListga string typeda ekanligi va qiymatlariga typelar  berildi elements typega array ichida string bo'lasan deyildi add metodiga esa string type element nomli parametr ochib elementsga yani string qabul qiladigan bo'sh arrayga push yani jo'natildi push stringni metodi elelemts va element string typega oid bo'lgani uchun push ishlaydi endi addni bitt parametri bor va add chaqirilganda parametriga faqat string format qabul qiladi ikkinchi parametri yo'q shu sabab agar ikkinchi parametriga string yozilgandaham hato qaytaradi
//     elements: string[] = [];
//     add(element: string): void {
//         this.elements.push(element);
//     }
// } //IList interface bu holatda type  <> T yani generic yani umumiy yani hamma narsa bo'lishi mumkun yani generic typega chaqirilganda type berilishi kerak masalan interfacedami typedami classdai farqi yo'q har qanday joyda generic type berib uni chaqirib ishlatganda taypini kiritish kerak generik yani umumiy deganda hamma typelar nazarda tutilgan lekin anydan farqi bor farqi shuki any albatta, umumiy bo'lsa-da, bu funktsiya turi uchun har qanday va barcha turlarni qabul qilishiga olib keladi  biz aslida funktsiya qaytganida bu tur nima bo'lganligi haqidagi ma'lumotni yo'qotamiz. Agar biz funcsiya ichida yoki classda generic typedan kelgan qiymatga number typeni kiritadigan bo'lsak endi bu funksiya yoki class aniq number qaytaradi anyda esa faqat any qaytaradi masalan 12 raqami kelsa bu stringmo numbermi bilmaslik mumkun shu sabab generic bilan ishlash yahshiroq
// let list = new List();
// list.add("strig-1");
// list.add("strigs-2");
// // list.add("strigs-2", "string-3");//hato chunki addni ikkinchi parametri yo'q faqat bitt aparametri bor yani element parametri
// // list.add(56)//hato chunki add metodga class ichida elementni string typeda ekanligi aytilgan
// console.log(list);
/////////////////////////////////////
// interface IList<T> {
//     elements: T[];
//     add(element: T): void;
// }
// type ListType = string | number | boolean;// bu IList interfacega typelarni dynamic berish yani endi IList interfaceni typelari string yoki number yoki boolean bo'lishi mumkun bu uchu IList interface chaqirilgan classda IListni type ListType qilib qo'yilsas bo'ldi
// class List implements IList<ListType> {
//     elements: ListType[] = [];// add metodni parametidagi element qiymatiga string number boolean typlariham yozilsa bo'ladi va bu typelar push metodi sabab string qiymatli elements bo'sh arrayga tushadi endi bu arrayham shu uchta typelarniham qabul qilaoladi chunki array objectida bu typelarni qabul qilish mumkun
//     add(element: ListType): void {
//         this.elements.push(element);
//     }
// }
// let list = new List();
// list.add("strig-1");
// list.add("strigs-2");
// list.add(35);
// list.add(34);
// list.add(false)
// list.add(true)
// //endi bu List classdan object yasalganda add metodi chaqirilganda faqat bitta parametr qabul qiladi uch hil typelar bilan number yoki string yoki boolean
// console.log(list);
////////////////
////generic typlardan vorislik olish
// type A<T> = T
// type B = A<string>
// type C = A<"TS">
// type d = A<number>
////////////////
// type A<T extends string> = T; //yani typeni ichida genericdan voris olish = T; bu tengdan keyingi T qaytarib beriladigan narsa yani A nomli genericimizdan voris olsa bo'ladi va stringni = T; ichida qaytarib beradi = T; esa pastda type B ga vorislnaib o'tdi
// type B = A<string>;
// type C = A<"JS">;//bu C gs A generic chaqirildi va string berildi chunki A genericda string bor
// type D = A<number>//bu hato chunki A dan vorislanishda string vorislanadi numbermas Ada streing berib qo'yilgan lekin hato bo'lsaham D ga baribir number type o'tib qoldi shu uchun A genericga shart qo'yish kerak masalan bu A generigdan vorislangan typelar faqat string bo'lsa A genericga o'zlashtir yani voris ber bo'lmasa berma degan shart qo'yish kerak
/////////////////////
// type A<T> = T extends string ? string : never; //shart dhu if else boshqa sintaksiz yani agar A genericdan voris olinganda string bo'lsa ? yani string olinishi rost bo'lsa string qaytar agar false bo'lsa : never qaytar never bu hech narsa
// type B = A<string>; //string
// type C = A<"JS">; //string
// type D = A<number>; //never
// ///////////////////////////////////////////////////////////////
// function getName<T extends { name: string }>(person: T): void {
//     //bu holatda getName nomli funksiya ichida generic ochilib voris olsin deyildi yani object ichida name qiymatli string typli voris va parametriga person berildi va bu person T dan yani genericdan voris oladi va logda person.name qiymati chiqsin deyildi yani person bu holatda funksiyani parametri genericdan name nomli string type parametr qabul qiladigan T ni yani typeni voris qilib olgan shunda logda personni yani funksiyani parametriga name yani T chaqirildi shunda getName funksiya chaiqirlganda parametriga endi faqat object ichida name nomli string qabul qiladi
//     console.log(person.name);
// }
// getName({ name: "Nur" });
// getName({ name: "Nur-2", age: 23 });///?????? nima bu a nima bu nimasan  san a kimsan san nimasan?????????name qiymatni ichida keldi lekin logda yo'q hatoham yo'q loggda 23ni string typedaham bermadi nima bu a nimasan san ??????????????
// console.dir(getName ({ name: "Nur-3", age: 23 }));//name topildi lekin age undefined yani topilmadi demak yozilishini o'zi hato lekin ts hato qaytarmadi ???????????????????????????
// getName({ name: 12 });//hato chunki bu genericni objecti hissoblangan namega string bo'lish aytilgan
///////////////////////////////////////////////////////////////
//function ichida interfacelardan foydalanish
// interface IName {
//     name: string;
// }
// function getName<T extends IName>(person: T): void {//endi interface INamedan voris oladi
//     console.log(person.name);
// }
// getName({ name: "Nur"});
// getName({ name: 12 });//hato chunki number typeham age qiymatiham interfacedaham getNamedaham yo'q
////////////////////////////////////////////////////////////////
// interface IName {
//     name: string;
//     age: number
// }
// function getName<T extends IName>(person: T): void {//endi interface INamedan voris oladi
//     console.log(person.name, person.age);
// }
// getName({ name: "Nur", age:23});//endi interface INamedaham age bor va bu IName getNamega voris qilingan endi getNameda ikkita name va age qiymatlari Inamedan kelepti yani generic bo'lib kelepti va logda person parametrni ikkala qiymatiham chaqirilepti endi nimasan san savoliga javob olindi
// // getName({ age: 12 });
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////14-chi dars ichidagi tsdagi keyof yahshi tushunilmadi
// interface Inter {
//     a: string;
//     b: boolean;
//     c: number;
// }
// type InterKeys = keyof Inter; //interni keylari yani = a | b | c

// function getProperty1<ObjType, ObjKey extends keyof ObjType>( //agar loyihada boshqa keyof bo'lsa bu funskiya qaysi keyofni olishni qayerdan biladi????????????
//     obj: ObjType,
//     key: ObjKey
// ) {
//     return obj[key];
// }
// const result = getProperty1(
//     { name: "Nur", age: 34, lastName: "Yorov" },"lastName" //bu lastName keyi hissoblanadi yani getproperty1 nomli funksiyani parametrida yasalgan objectni lastName qiymati keyi yani nomi orqali olindi faqat bitta shu lastNameni olepti objectni to'liq omeydimi masalan hamm akeylarini qanday oladi????
// );
// console.log(result); //logda Yorov???
//////////////////////////////
// interface Person {
//     name: string;
//     age: number;
//   }
//   // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
//   function printPersonProperty(person: Person, property: keyof Person) {
//     console.log(`Printing person property ${property}: "${person[property]}"`);
//   }
//   let person = {
//     name: "Max",
//     age: 27
//   };
//   printPersonProperty(person, "name"); // Printing person property name: "Max"
//   printPersonProperty(person, "age"); // Printing person property age: "27"
///////////////////////////////////
// interface Person {
//     name: string;
//     age: number;
//     gender: string;
// }
// const person: Person = {
//     name: "John",
//     age: 25,
//     gender: "male",
// };
// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }
// console.log(getProperty(person, "name")); // "John"
// console.log(getProperty(person, "age")); // 25
// console.log(getProperty(person, "gender")); // "male"
////////////////////////////
// interface Inter {
//     a: string;
//     c: number;
// }
// type InterKeys = keyof Inter;

// function getProperty1<ObjType, ObjKey extends keyof ObjType>(
//     obj: ObjType,
//     key: ObjKey
// )

//  { return obj[key];}

// // const result = getProperty1(
// //     { name: "Nur", age: 34, lastName: "Yorov" },"lastName" //"age" qilsa numberda 32 chiqadi "name" qilsa stringda Nur chiqadi yani bu object qiymatni
// // );

// const result = getProperty1(
//     { name: "Nur", age: 34, lastName: "Yorov", isMarried: true },"isMarried" //endi keyda isMarried bor lekin bu boolean qiymat boolean qiymat esa interface Interda yo'q????? lekin yasalgan object ichida true bor tsga o'shamgan function bo'ldi
// );

// console.log(result); //logda Yorov??? chunki objectdan keyin key bor objectni qiymatlarini keyi orqali chaqirish>>{return obj[key]} endi "lastName" ichiga yasalgan objectni qaysi qiymati keyi bilan chaqirilsa logda shu chiqadi
///////////////////////////////////////////////14-chi dars ichidagi tsdagi keyof yahshi tushunilmadi
////////////////////////////////////////////////////////////////////////////////////////////////////
////infer kalit so'zi doim shart operatorlari bilan birga ishlaydi
let arr = [1, "str", true];//
type A<T> = T extends (infer U)[] ? U : never;//
type B = typeof arr;//
type C = A<B>;//
// 15-chi dars 3 minutda qoldi  14 va 15 chi darslarni boshidan boshlab ulab qilish tafsiya qilinadi 
//// tsc --watch
