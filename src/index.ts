import * as Estados from './utils/estados'
import * as Regioes from './utils/regioes'

const mostrarRegiao = (sigla: string): string => {
  if (Regioes.NORTE.includes(sigla)) return "Norte";
  if (Regioes.NORDESTE.includes(sigla)) return "Nordeste";
  if (Regioes.CENTRO_OESTE.includes(sigla)) return "Centro-Oeste";
  if (Regioes.SUDESTE.includes(sigla)) return "Sudeste";
  if (Regioes.SUL.includes(sigla)) return "Sul";
}

class Regional {
  static regiao(uf: string): any {
    
    if (!uf) return "Insira uma sigla do Estado no qual você gostaria de saber a região";
    
    const REGIAO_FORMATADA = Estados.BR.map((estado, index) => ({
      ...estado,
      regiao: mostrarRegiao(estado.sigla)
    }))

    const RESPOSTA = REGIAO_FORMATADA.filter(item => item.sigla === uf)

    return RESPOSTA.length > 0 ? 
      RESPOSTA : 
      "Estado não encontrado. Tente novamente";
  }
}

export default Regional;