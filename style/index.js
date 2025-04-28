window.d = document;
var cevrilen_kartlar = [];
function karistir() {
    for (var i = kart.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var a = kart[i];
        kart[i] = kart[j];
        kart[j] = a;
    }
}

function oyunTahtasi() {
    var oyun_alani = document.getElementById("tahta_id");
    oyun_alani.innerHTML = "";

    for (var i = 0; i < kart.length; i++) {
        var card = document.createElement("div");
        card.className = "card";
        card.text = i
        card.dataset.kart_index = i;
        card.addEventListener("click", kartCevir);
        oyun_alani.appendChild(card);
    }
}

function kartCevir() {
    if (cevrilen_kartlar.length < 2 && !this.classList.contains("flipped")) {

        this.innerHTML = '<span class="card_cevir_scale">' + kart[this.dataset.kart_index] + '</span>';
        this.classList.add("flipped");
        cevrilen_kartlar.push(this);

        if (cevrilen_kartlar.length === 2) {
            setTimeout(eslesen, 1000);
        }
    }
}
function eslesen() {
    if (cevrilen_kartlar[0].innerHTML === cevrilen_kartlar[1].innerHTML) {
        cevrilen_kartlar[0].classList.add("matched");
        cevrilen_kartlar[1].classList.add("matched");
        cevrilen_kartlar = [];
        kazanan();
    } else {
        cevrilen_kartlar[0].innerHTML = "";
        cevrilen_kartlar[1].innerHTML = "";
        cevrilen_kartlar[0].classList.remove("flipped");
        cevrilen_kartlar[1].classList.remove("flipped");
        cevrilen_kartlar = [];
    }
}

function kazanan() {
    var eslesen_kart = document.getElementsByClassName("matched");
    if (eslesen_kart.length === kart.length) {
        d.getElementById('tebrikler').style.display = 'block';
    }
}

function startGame(say) {
    d.getElementById('tebrikler').style.display = 'none';
    window.say = say;
    var y_array = []
    if (say == 16) {
        y_array = []
    } else if (say == 20) {
        y_array = ['😁', '😁', '😶', '😶']
    } else if (say == 24) {
        y_array = ['😁', '😁', '😶', '😶', '😵', '😵']
    } else if (say == 30) {
        y_array = ['😁', '😁', '😶', '😶', '😵', '😵', '🤑', '🤑', '😻', '😻', '😽', '😽', '🤘', '🤘']
    }
    window.kart = ['😀', '😀', '😍', '😍', '😈', '😈', '👹', '👹', '👺', '👺', '😛', '😛', '🤣', '🤣', '🥲', '🥲'].concat(y_array);
    cevrilen_kartlar = [];
    karistir();
    oyunTahtasi();
    const grid = document.getElementById('tahta_id');
    grid.setAttribute('data-size', say);
}
