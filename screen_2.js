player1N=localStorage.getItem("player1");
player2N=localStorage.getItem("player2");

P2S=0;
P1S=0;

console.log(player1N);
console.log(player2N);
console.log(P2S);
console.log(P1S);


document.getElementById("P1Number").innerHTML=player1N+" : ";
document.getElementById("P2Number").innerHTML=player2N+" : ";

document.getElementById("P1S").innerHTML=P1S;
document.getElementById("P2S").innerHTML=P2S;