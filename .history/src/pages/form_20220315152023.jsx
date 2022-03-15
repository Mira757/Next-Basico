import { useState } from "react";

export default function form() {

  const [nome,setNome] = useState("")
  const [idade,setIdade] = useState(0)

  return (
    <div>
      <h1>Integrando com a API #02</h1>
      <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
    </div>
  )

}