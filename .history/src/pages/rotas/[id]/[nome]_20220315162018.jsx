import { useRouter } from 'next/router'
import { Link } from 'next/link'
 
export default function idNome() {
  const router = useRouter()
  const nome = router.query.nome
  const codigo = router.query.codigo
  return (
    <div>
      <h1>Rotas /{codigo} / {nome}</h1>
      <Link>
      </Link>
    </div>
  )
}