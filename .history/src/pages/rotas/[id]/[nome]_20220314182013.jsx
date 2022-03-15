import { useRouter } from 'next/router'
 
export default function idNome() {
  const router = useRouter()
  const nome = router.query.nome
  return (
    <div>
      <h1>Rotas /Id / {nome}</h1>
    </div>
  )
}