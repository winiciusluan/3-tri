const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const pessoasNoMundoAtualizado = 8;
    const pessoasConectadasAtualizado = pessoasConectadas + 1; 
    const porcentagemConectadaAtualizado = ((pessoasConectadasAtualizado / pessoasNoMundoAtualizado) * 100).toFixed(2);

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O mundo possui atualmente mais de <span>${pessoasNoMundoAtualizado} bilhões</span> de pessoas. Desses, aproximadamente <span>${pessoasConectadasAtualizado} bilhões</span> estão ativamente conectadas a redes sociais. Em média, essas pessoas passam cerca de <span>${horas} horas</span> e <span>${minutos} minutos</span> online diariamente.<br> Isso representa cerca de <span>${porcentagemConectadaAtualizado}%</span> da população global envolvida em redes sociais.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
