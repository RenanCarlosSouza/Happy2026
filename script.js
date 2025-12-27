// --- RANDOMIZAÇÃO DO TEMA (MIDNIGHTS) ---
const temas = [
    { id: 'moonstone', nome: 'Themed: Moonstone Blue Edition' }, // Padrão
    { id: 'mahogany', nome: 'Themed: Mahogany Edition' },
    { id: 'bloodmoon', nome: 'Themed: Blood Moon Edition' },
    { id: 'jade', nome: 'Themed: Jade Green Edition' }
];

// Escolhe um tema aleatório ao carregar a página
const temaEscolhido = temas[Math.floor(Math.random() * temas.length)];

// Aplica a classe ao body (menos se for o padrão que já é a cor base)
if (temaEscolhido.id !== 'moonstone') {
    document.body.classList.add(temaEscolhido.id);
}

// Mostra o nome do tema no rodapé
const temaLabel = document.getElementById('tema-atual');
if (temaLabel) {
    temaLabel.innerText = temaEscolhido.nome;
}


// --- DADOS DOS AMIGOS ---
const friendsData = {
    "karen": {
        name: "Karen",
        pass: "jessie",
        hint: "Qual abertura de série da Disney cê gostava de cantar quando era mais nova?",
        text: "Oii, garotinha. Passando aqui pra te desejar um feliz Ano Novo! Que Deus te abençoe hoje e sempre. Amo você. Queria ter te visto mais esse ano, tô com muita saudade. Te amo muitão.",
        photo: "karen.jpg",
        specialImage: "Karen-Momento.jpg",
        spotifyID: "3yOlyBJuViE2YWCn3higa0" // Música: Hey Jessie
    },
    "silviane": {
        name: "Silviane",
        pass: "casa",
        hint: "Quando cê vem pra...",
        text: "Oii, titia. Passando aqui pra te desejar um feliz Ano Novo. Esse ano foi bem complicado, né? Desculpa qualquer coisa. Queria ter te visto mais esse ano, só te vi um final de semana e passou tão rápido. Te amo muito, obrigado por tanto. Espero que esteja tudo bem por aí. A partir de janeiro vou terminar de lhe pagar as parcelas que atrasei e não paguei. Te amo. Tô com muita saudade.",
        photo: "Silviane.jpg",
        specialImage: "Silviane-Momento.jpg",
        spotifyID: "4uUG5RXrOKz7mK1H19rZC0" // I'm Good (Blue) - Exemplo
    },
    "roberta": {
        name: "Roberta",
        pass: "cadeira",
        hint: "Em uma sala lotada, sempre vou guardar pra você.",
        text: "Garotinhaaa. Passando pra te desejar um feliz Ano Novo, te amo muitooo. Tô com muita saudade. Fico com o coração transbordando ao acompanhar teus stories, te ver feliz sempre me deixa feliz. Que Papai do Céu te abençoe e proteja sempre. Te amo muitão.",
        photo: "Roberta.jpg",
        specialImage: "Roberta-Momento.jpg",
        spotifyID: "3w9VRlKPvNxj40RdUGRweH"
    },
    "vivian": {
        name: "Vivian",
        pass: "comida",
        hint: "Algo que te deixa feliz quando cê tá brava.",
        text: "Oii, garotinha. Passando aqui pra te desejar um feliz Ano Novo. Que Deus te abençoe e proteja sempre. Te ver feliz me deixa feliz. Obrigado por um ano incrível e por todos esses momentos, em especial o do Empório de Fátima kkk. Amo você.",
        photo: "Vivian.jpg",
        specialImage: "Vivian-Momento.jpg",
        spotifyID: "4uUG5RXrOKz7mK1H19rZC0"
    },
    "vitoria": {
        name: "Vitoria",
        pass: "travesseiro",
        hint: "O que a Fabrícia pegou de ti kkk",
        text: "Oiii, divaaa. Passando aqui pra te desejar um feliz Ano Novo. Que Deus te proteja e abençoe. Obrigado por tanto, amo você e sua família. Deixo aqui um momento bem legal:",
        photo: "Vitoria.jpg",
        specialImage: "Vitoria-Momento.jpg",
        spotifyID: "4uUG5RXrOKz7mK1H19rZC0"
    },
    "soraia": {
        name: "Soraia",
        pass: "estrelas",
        hint: "O que cê colocou de especial no meu bolo de aniversário?",
        text: "Amigaaaaa, acho que esse é o primeiro ano que não passamos juntos, então um feliz Ano Novo! Que Deus te proteja e abençoe sempre. Obrigado por um ano incrível, amo estar ao seu lado e aproveitar cada momento. Deixo aqui um momento bem legal:",
        photo: "Soraia.jpg",
        specialImage: "Soraia-Momento.jpg",
        spotifyID: "4uUG5RXrOKz7mK1H19rZC0"
    },
    "roberio": {
        name: "Roberio",
        pass: "2021",
        hint: "O ano que passamos a virada juntos.",
        text: "Amigoooo, feliz Ano Novo! A gente mal se viu esse ano, mas a consideração é a mesma. Deus te abençoe e proteja sempre, você e sua família. Amo você. Deixo aqui um momento bem legal:",
        photo: "Roberio.jpg",
        specialImage: "Roberio-Momento.jpg",
        spotifyID: "4uUG5RXrOKz7mK1H19rZC0"
    }
};

// --- LÓGICA DO SITE ---

const select = document.getElementById('user-select');
const boxDica = document.getElementById('box-dica');
const textoDica = document.getElementById('texto-dica');

// Preenche o menu com os nomes
for (let key in friendsData) {
    let opt = document.createElement('option');
    opt.value = key;
    opt.innerText = friendsData[key].name;
    select.appendChild(opt);
}

// Mostra a dica quando seleciona o nome
function mostrarDica() {
    const key = select.value;
    if (friendsData[key]) {
        textoDica.innerText = friendsData[key].hint;
        boxDica.style.display = "block";
    }
}

// Função de Login
function entrar() {
    const key = select.value;
    const pass = document.getElementById('password-input').value.toLowerCase().trim();
    const erro = document.getElementById('msg-erro');

    // Validação básica
    if (!key) {
        alert('Por favor, selecione quem é você!');
        return;
    }

    // Verifica a senha
    if (pass === friendsData[key].pass) {
        // SUCESSO: Esconde login e mostra conteúdo
        erro.style.display = 'none';
        document.getElementById('login-screen').style.display = 'none';

        const content = document.getElementById('conteudo-secreto');
        content.style.display = 'block';

        // Rola para o topo do cartão
        const card = document.getElementById('card-principal');
        if (card) card.scrollTop = 0;

        // Preenche os dados na tela
        const data = friendsData[key];
        document.getElementById('user-name').innerText = data.name;
        document.getElementById('user-text').innerText = data.text;

        // Carrega Foto de Perfil
        const imgPerfil = document.getElementById('user-photo');
        imgPerfil.src = data.photo;
        imgPerfil.onerror = function () { this.src = 'https://via.placeholder.com/150?text=Perfil'; };

        // Carrega Foto do Momento Especial
        const imgSpecial = document.getElementById('special-image');
        imgSpecial.src = data.specialImage;
        imgSpecial.onerror = function () { this.src = 'https://via.placeholder.com/400x300?text=Momento+Especial'; };

        // --- CORREÇÃO DO SPOTIFY ---
        // Aqui está o link oficial "open.spotify.com/embed" que funciona corretamente
        const spotifyHtml = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${data.spotifyID}?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

        document.getElementById('spotify-container').innerHTML = spotifyHtml;

    } else {
        // ERRO NA SENHA
        erro.style.display = 'block';

        // Animação de "tremer" o cartão
        const card = document.getElementById('card-principal');
        card.style.transform = "translateX(5px)";
        setTimeout(() => card.style.transform = "translateX(-5px)", 50);
        setTimeout(() => card.style.transform = "translateX(0)", 100);
    }

}
