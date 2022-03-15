import { useRouter } from 'next/router'
 
export default function idNome() {
  const router = useRouter()
  const nome = router.query.nome
  const codigo = router.query.codigo
  return (
    <div>
      <h1>Rotas /{codigo} / {nome}</h1>
    </div>
  )
}