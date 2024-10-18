let tekSayilar = [];
let ciftSayilar = [];

function sayiTopla() {
    let tekToplam = 0;
    for (const tekSayi of tekSayilar) {
        tekToplam += tekSayi
    }
    console.log("tek sayilarin toplami: " + tekToplam);

    let ciftToplam = 0;

    for (const ciftSayi of ciftSayilar) {
        ciftToplam += ciftSayi
    }
    console.log("cift sayilarin toplami: " + ciftToplam);
}

function sayiEkle() {
    let sayiAdedi = Number(prompt("kac adet sayi gireceksin"));

    for (let i = 0; i < sayiAdedi; i++) {
        let girilenSayi = Number(prompt((i + 1) + ". sayiyi giriniz"))

        if (girilenSayi % 2 == 0) {
            ciftSayilar.push(girilenSayi);
        } else {
            tekSayilar.push(girilenSayi);
        }
    };

    console.log("girilen sayilar:");
    for(const sayi of tekSayilar){
        console.log(sayi)
    };
    for(const say1 of ciftSayilar){
        console.log(say1)
    };
    sayiTopla();
}