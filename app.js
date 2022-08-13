function jokenpo(valorJ, valorC){
    // pedra(1) ganha: tesoura(3); perde: papel(2)
    // papel(2) ganha: pedra(1); perde: tesoura(3)
    // tesoura(3) ganha: papel(2); perde: pedra(1) 

    // valorJ  valor  valorC
    //    1    perde    2
    //    1    ganha    3

    //    2    perde    3
    //    2    ganha    1

    //    3    perde    1
    //    3    ganha    2
    for(let i = 1; i<=3; i++){
        if(i != 3){
            if(valorJ == i){
                if(valorJ == valorC){
                    return "empate";
                } else {
                    if(valorC == i+1){
                        return "perdeu";
                    } else {
                        return "ganhou";
                    }
                }
            }
        } else {
            if(valorJ == i){
                if(valorJ == valorC){
                    return "empate";
                } else {
                    if(valorC == 1){
                        return "perdeu";
                    } else {
                        return "ganhou";
                    }
                }
            }
        }
    }
}

let j;
let c;
// j = jogador
// c = computador

const jEmoji = document.querySelector("#jEmoji");
const cEmoji = document.querySelector("#cEmoji");
const resultado = document.querySelector(".resultado");

document.querySelectorAll(".botao").forEach(i => {
    i.addEventListener("click", () => {
        document.querySelectorAll(".botao").forEach(e => {
            e.disabled = true;
        });

        document.querySelector(".saida").style.display = "flex";
        c =  Math.floor(Math.random()*3)+1;
        j = parseInt(i.value);
        jEmoji.innerHTML = "";
        cEmoji.innerHTML = "";
        resultado.innerHTML = "";
        let timeC = ((Math.floor(Math.random()*3)+1)*1000)+4000;

        setTimeout(() => {
            resultado.append(document.createTextNode("pedra, "));

            setTimeout(() => {
                resultado.append(document.createTextNode("papel "));
                
                setTimeout(() => {
                    resultado.append(document.createTextNode("e..."));

                    setTimeout(() => {
                        resultado.innerHTML = "";
                        resultado.append(document.createTextNode("pedra, papel e tesoura"));
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 500);

        setTimeout(() => {
            resultado.innerHTML = "";
            if(j == 1){
                jEmoji.append(document.createTextNode("✊"));
            } else if(j == 2){
                jEmoji.append(document.createTextNode("✋"));
            } else if(j == 3){
                jEmoji.append(document.createTextNode("✌️"));
            }

            if(c == 1){
                cEmoji.append(document.createTextNode("✊"));
            } else if(c == 2){
                cEmoji.append(document.createTextNode("✋"));
            } else if(c == 3){
                cEmoji.append(document.createTextNode("✌️"));
            }
        }, timeC);

        setTimeout(() => {
            if(jokenpo(j, c) == "ganhou"){
                resultado.append(document.createTextNode("voce ganhou"));
            } else if(jokenpo(j,c) == "perdeu") {
                resultado.append(document.createTextNode("voce perdeu"));
            } else if(jokenpo(j,c) == "empate") {
                resultado.append(document.createTextNode("empate"));
            }
            document.querySelectorAll(".botao").forEach(e => {
                e.disabled = false;
            })
        }, timeC + 10);
    })
})