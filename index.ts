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

// let f: { name: string } = {name: "Nur"}
// f.name//bu holat to'g'ri//bu holatda f nomli o'zgaruvchi ochib bu f {}object va name nomli qiymati bor va name qiymatini type string deb qattiy aytildi va bu f object ichidagi  string qiymatli name endi "Nur" stringga teng bo'lsin shunda f o'zgaruvchiga ishlov berililganda f. nuqta bosilsa f ni nmae qiymati to'g'ri holatda keladi

//////

