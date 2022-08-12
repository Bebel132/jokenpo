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
        c =  Math.floor(Math.random()*3)+1;
        j = parseInt(i.value)
        jEmoji.innerHTML = "";
        cEmoji.innerHTML = "";
        resultado.innerHTML = "";

        if(j == 1){
            jEmoji.append(document.createTextNode("✊"))
        } else if(j == 2){
            jEmoji.append(document.createTextNode("✋"))
        } else if(j == 3){
            jEmoji.append(document.createTextNode("✌️"))
        }

        if(c == 1){
            cEmoji.append(document.createTextNode("✊"))
        } else if(c == 2){
            cEmoji.append(document.createTextNode("✋"))
        } else if(c == 3){
            cEmoji.append(document.createTextNode("✌️"))
        }

        if(jokenpo(j, c) == "ganhou"){
                    resultado.append(document.createTextNode("voce ganhou"))
                } else if(jokenpo(j,c) == "perdeu") {
                    resultado.append(document.createTextNode("voce perdeu"))
                } else if(jokenpo(j,c) == "empate") {
                    resultado.append(document.createTextNode("empate"))
                }
    })
})

// for(let i = 0; i<=10; i++){
//     j = Math.floor(Math.random()*3)+1;
//     c = Math.floor(Math.random()*3)+1;
//     if(jokenpo(j, c) == "ganhou"){
//         console.log("ganhou")
//     } else if(jokenpo(j,c) == "perdeu") {
//         console.log("perdeu")
//     } else if(jokenpo(j,c) == "empate") {
//         console.log("empate")
//     }
//     console.log("\ncomputador "+c+"\njogador "+j+"\n")
// }