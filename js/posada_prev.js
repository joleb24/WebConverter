window.onload = function(){

    document.querySelector("#btn1").addEventListener("click", function(){

        let textArea1 = document.querySelector("#za_cirilicu");
        let textArea2 = document.querySelector("#za_latinicu");
        let polje_kar1 = document.querySelector("#br_kar_lat");
        let polje_kar2 = document.querySelector("#br_kar_cir");

        textArea1.value = "";
        textArea2.value = "";

        polje_kar1.textContent = "0";
        polje_kar2.textContent = "0";

    });

    // Iz Lat u Cir
    document.querySelector("#btn2").addEventListener("click", function(){

        let textArea1 = document.querySelector("#za_cirilicu");
        let textArea2 = document.querySelector("#za_latinicu");

        let indi;
        let skok = 1;

        let ispis = "";
        let x = textArea1.value;
        let duz = x.length;

        // console.log(x);
        // console.log(duz);


        if(duz > 5000){
            document.querySelector("#greska1").textContent = `Унети текст садржи ${duz} карактера. Дозвољено је 5000 карактера`;
            document.querySelector("#greska1").style.color = "red";
            setTimeout(obrisi_gresku, 6000, "#greska1");
        }
        else{
            for(let i = 0; i < x.length; i++){
                
                if(indi == 1){
                    indi = 0;
                    continue;
                }
    
                if(x[i] == "B")
                    ispis += "Б";
                else if(x[i] == "D" && x[i+1] == "ž"){
                    ispis += "Џ";
                    indi = 1;
                }
                else if(x[i] == "d" && x[i+1] == "ž"){
                    ispis += "џ";
                    indi = 1;
                }
                else if(x[i] == "L" && x[i+1] == "j"){
                    ispis += "Љ";
                    indi = 1;
                }
                else if(x[i] == "l" && x[i+1] == "j"){
                    ispis += "љ";
                    indi = 1;
                }
                else if(x[i] == "N" && x[i+1] == "j"){
                    ispis += "Њ";
                    indi = 1;
                }
                else if(x[i] == "n" && x[i+1] == "j"){
                    ispis += "њ";
                    indi = 1;
                }
                else if(x[i] == "A")
                    ispis += "А";
                else if(x[i] == "a")
                    ispis += "а";
                else if(x[i] == "b")
                    ispis += "б";
                else if(x[i] == "C")
                    ispis += "Ц";
                else if(x[i] == "c")
                    ispis += "ц";
                else if(x[i] == "Č")
                    ispis += "Ч";
                else if(x[i] == "č")
                    ispis += "ч";
                else if(x[i] == "Ć")
                    ispis += "Ћ";
                else if(x[i] == "ć")
                    ispis += "ћ";
                else if(x[i] == "D")
                    ispis += "Д";
                else if(x[i] == "d")
                    ispis += "д";
                else if(x[i] == "E")
                    ispis += "Е";
                else if(x[i] == "e")
                    ispis += "е";
                else if(x[i] == "Đ")
                    ispis += "Ђ";
                else if(x[i] == "đ")
                    ispis += "ђ";
                else if(x[i] == "F")
                    ispis += "Ф";
                else if(x[i] == "f")
                    ispis += "ф";
                else if(x[i] == "G")
                    ispis += "Г";
                else if(x[i] == "g")
                    ispis += "г";
                else if(x[i] == "H")
                    ispis += "Х";
                else if(x[i] == "h")
                    ispis += "х";
                else if(x[i] == "I")
                    ispis += "И";
                else if(x[i] == "i")
                    ispis += "и";
                else if(x[i] == "J")
                    ispis += "Ј";
                else if(x[i] == "j")
                    ispis += "ј";
                else if(x[i] == "K")
                    ispis += "К";
                else if(x[i] == "k")
                    ispis += "к";
                else if(x[i] == "L")
                    ispis += "Л";
                else if(x[i] == "l")
                    ispis += "л";
                else if(x[i] == "M")
                    ispis += "М";
                else if(x[i] == "m")
                    ispis += "м";
                else if(x[i] == "N")
                    ispis += "Н";
                else if(x[i] == "n")
                    ispis += "н";
                else if(x[i] == "O")
                    ispis += "О";
                else if(x[i] == "o")
                    ispis += "о";
                else if(x[i] == "P")
                    ispis += "П";
                else if(x[i] == "p")
                    ispis += "п";
                else if(x[i] == "R")
                    ispis += "Р";
                else if(x[i] == "r")
                    ispis += "р";
                else if(x[i] == "S")
                    ispis += "С";
                else if(x[i] == "s")
                    ispis += "с";
                else if(x[i] == "Š")
                    ispis += "Ш"; 
                else if(x[i] == "š")
                    ispis += "ш";
                else if(x[i] == "T")
                    ispis += "Т"; 
                else if(x[i] == "t")
                    ispis += "т";       
                else if(x[i] == "U")
                    ispis += "У";
                else if(x[i] == "u")
                    ispis += "у"; 
                else if(x[i] == "V")
                    ispis += "В";
                else if(x[i] == "v")
                    ispis += "в";
                else if(x[i] == "Z")
                    ispis += "З";
                else if(x[i] == "z")
                    ispis += "з";
                else if(x[i] == "Ž")
                    ispis += "Ж";
                else if(x[i] == "ž")
                    ispis += "ж";
                else if(x[i] == "W" || x[i] == "w" || x[i] == "Q" || x[i] == "q" || x[i] == "Y" || x[i] == "y" || x[i] == "X" || x[i] == "x"){
                    document.querySelector("#greska1").textContent = "Унети карактери морају бити из скупа слова српске латинице. Унос НЕ МОЖЕ садржати карактере: W, w, Q, q, Y, y, X, x";
                    document.querySelector("#greska1").style.color = "red";
                    setTimeout(obrisi_gresku, 6000, "#greska1");
                    ispis = "";
                    skok = 0;
                    break;
                }
                else
                    ispis += x[i];
            }

            textArea2.value = ispis;
            document.querySelector("#br_kar_cir").textContent = ispis.length;

            if(skok == 1){
                window.scrollTo({
                    top: 450,
                    left: 450,
                    behavior: 'smooth'
                });
            }
        }
    });


    //Iz Cir u Lat
    document.querySelector("#btn3").addEventListener("click", function(){
        
        let textArea1 = document.querySelector("#za_cirilicu");
        let textArea2 = document.querySelector("#za_latinicu");
        
        let skok = 1;

        let ispis = "";
        let x = textArea2.value;    
        let duz = x.length;

        // console.log(x);
        // console.log(duz);

        if(duz > 5000){
            document.querySelector("#greska2").textContent =`Унети текст садржи ${duz} карактера. Дозвољено је 5000 карактера`;
            document.querySelector("#greska2").style.color = "red";
            setTimeout(obrisi_gresku, 6000, "#greska2");
        }
        else{
            for(let i = 0; i < duz; i++){
                // console.log(x[i]);
                // console.log(i);
                // console.log(x.length);
                if(x[i] == "Б")
                    ispis += "B";
                else if(x[i] == "б")
                    ispis += "b"
                else if(x[i] == "А")
                    ispis += "A";
                else if(x[i] == "а")
                    ispis += "a";
                else if(x[i] == "В")
                    ispis += "V";
                else if(x[i] == "в")
                    ispis += "v";
                else if(x[i] == "Г")
                    ispis += "G";
                else if(x[i] == "г")
                    ispis += "g";
                else if(x[i] == "Д")
                    ispis += "D";
                else if(x[i] == "д")
                    ispis += "d";
                else if(x[i] == "Ђ")
                    ispis += "Đ";
                else if(x[i] == "ђ")
                    ispis += "đ";
                else if(x[i] == "Е")
                    ispis += "E";
                else if(x[i] == "е")
                    ispis += "e";
                else if(x[i] == "Ж")
                    ispis += "Ž";
                else if(x[i] == "ж")
                    ispis += "ž";
                else if(x[i] == "З")
                    ispis += "Z";
                else if(x[i] == "з")
                    ispis += "z";
                else if(x[i] == "И")
                    ispis += "I";
                else if(x[i] == "и")
                    ispis += "i";
                else if(x[i] == "Ј")
                    ispis += "J";
                else if(x[i] == "ј")
                    ispis += "j";
                else if(x[i] == "К")
                    ispis += "K";
                else if(x[i] == "к")
                    ispis += "k";
                else if(x[i] == "Л")
                    ispis += "L";
                else if(x[i] == "л")
                    ispis += "l";
                else if(x[i] == "Љ")
                    ispis += "Lj";
                else if(x[i] == "љ")
                    ispis += "lj";
                else if(x[i] == "М")
                    ispis += "M";
                else if(x[i] == "м")
                    ispis += "m";
                else if(x[i] == "Н")
                    ispis += "N";
                else if(x[i] == "н")
                    ispis += "n";
                else if(x[i] == "Њ")
                    ispis += "Nj";
                else if(x[i] == "њ")
                    ispis += "nj";
                else if(x[i] == "О")
                    ispis += "O";
                else if(x[i] == "о")
                    ispis += "o";
                else if(x[i] == "П")
                    ispis += "P";
                else if(x[i] == "п")
                    ispis += "p";
                else if(x[i] == "Р")
                    ispis += "R";
                else if(x[i] == "р")
                    ispis += "r";
                else if(x[i] == "С")
                    ispis += "S";
                else if(x[i] == "с")
                    ispis += "s";
                else if(x[i] == "Т")
                    ispis += "T";
                else if(x[i] == "т")
                    ispis += "t";
                else if(x[i] == "Ћ")
                    ispis += "Ć";
                else if(x[i] == "ћ")
                    ispis += "ć";
                else if(x[i] == "У")
                    ispis += "U";
                else if(x[i] == "у")
                    ispis += "u";
                else if(x[i] == "Ф")
                    ispis += "F";
                else if(x[i] == "ф")
                    ispis += "f";
                else if(x[i] == "Х")
                    ispis += "H";
                else if(x[i] == "х")
                    ispis += "h";
                else if(x[i] == "Ц")
                    ispis += "C";
                else if(x[i] == "ц")
                    ispis += "c";
                else if(x[i] == "Ч")
                    ispis += "Č";
                else if(x[i] == "ч")
                    ispis += "č";
                else if(x[i] == "Џ")
                    ispis += "Dž";
                else if(x[i] == "џ")
                    ispis += "dž";
                else if(x[i] == "Ш")
                    ispis += "Š";
                else if(x[i] == "ш")
                    ispis += "š";
                else if(x[i] == "~" || x[i] == "@" || x[i] == "#" || x[i] == "$" || x[i] == "%" || x[i] == "^" || x[i] == "&" || x[i] == "*" || x[i] == "(" || x[i] == ")" || x[i] == "-" || x[i] == "_" || x[i] == "=" || x[i] == "+" || x[i] == "[" || x[i] == "]" || x[i] == `'` || x[i] == `"` || x[i] == `\/` || x[i] == "0" || x[i] == "1" || x[i] == "2" || x[i] == "3" || x[i] == "4" || x[i] == "5" || x[i] == "6" || x[i] == "7" || x[i] == "8" || x[i] == "9" || x[i] == " " || x[i] == "!" || x[i] == "." || x[i] == "," || x[i] == "/" || x[i] == "<" || x[i] == ">" || x[i] == "?" || x[i] == ";" || x[i] == ":" || x[i] == "{" || x[i] == "}" || x[i] == "„" || x[i] == "“" || x[i] == "\t" || x[i] == "\n" || x[i] == "–" || x[i] == "—"){
                    ispis += x[i];
                    // console.log("Znaci Ulazak");
                }
                else{
                    // console.log("Usao u gresku!");
                    // console.log(x[i]);
                    document.querySelector("#greska2").textContent = "Унети карактери морају бити из скупа слова српске ћирилице";
                    document.querySelector("#greska2").style.color = "red";
                    ispis = "";
                    skok = 0;
                    setTimeout(obrisi_gresku, 5000, "#greska2");
                    break;
                }
            }

            textArea1.value = ispis;
            document.querySelector("#br_kar_lat").textContent = ispis.length;

            if(skok == 1)
                window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Dinamicko prebrojavanje karaktera Prvi_Prozor
    document.querySelector("#za_cirilicu").addEventListener("keyup", function(){
        
        let textArea1 = document.querySelector("#za_cirilicu");
        let polje_kar1 = document.querySelector("#br_kar_lat");

        let sadrzaj = textArea1.value;
        let duzina = sadrzaj.length;

        polje_kar1.textContent = duzina;
        
    });

    // Dinamicko prebrojavanje karaktera Drugi_prozor
    document.querySelector("#za_latinicu").addEventListener("keyup", function(){
        
        let textArea2 = document.querySelector("#za_latinicu");
        let polje_kar2 = document.querySelector("#br_kar_cir");

        let sadrzaj = textArea2.value;
        let duzina = sadrzaj.length;

        polje_kar2.textContent = duzina;

    });

    // Footer dinamicka godina
    let datum = new Date();
    document.querySelector("#godina").textContent = datum.getFullYear();

}

function obrisi_gresku(ime_polja){

    document.querySelector(ime_polja).textContent = "";
}

