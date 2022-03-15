import { useRouter } from 'next/router'
 
export default function idNome() {
  const router = useRouter()
  const codigo = router.query.nome
  return (
    <div>
      <h1>Rotas /Id / {codigo}</h1>
    </div>
  )
}