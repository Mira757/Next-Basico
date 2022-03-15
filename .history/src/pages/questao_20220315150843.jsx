import { useEffect,useState } from "react"

export default function questao() {

  const [questao,setQuestao] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/123')
    .then(resp => resp.json())
    .then(json => console.log(json))
  }, [])

  return (
    <div>
      <h1>Questao</h1>
      <div>
        <span>{questao.enunciado}</span>
      </div>
    </div>
  )
}