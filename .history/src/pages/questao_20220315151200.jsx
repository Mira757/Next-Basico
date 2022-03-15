import { useEffect,useState } from "react"

export default function questao() {

  const [questao,setQuestao] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
    .then(resp => resp.json())
    .then(setQuestao)
  }, [])

  function renderizarRespostas() {
    if(questao) {
      return questao.respostas.map(resp => {
        return <li key={i}>{resp}</li>
      })
    }
  }

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>{questao?.enunciado}</span>
        <ul>
          {renderizarRespostas()}
        </ul>
      </div>
    </div>
  )
}