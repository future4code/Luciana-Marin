


enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type informacaoFilmes = {
  nome: string,
  ano: number,
  genero: GENERO,
  pontuacao?: number
}

function filmes (filme: informacaoFilmes): informacaoFilmes {
  return filme
} 

console.log(filmes({nome: "He never died", ano: 2015, genero: GENERO.TERROR, pontuacao: 10}))