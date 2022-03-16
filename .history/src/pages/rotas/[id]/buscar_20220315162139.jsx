import { useRouter } from 'next/router'
 
export default function buscar() {
  const router = useRouter()
  const codigo = router.query.codigo
  return (
    <div>
      <h1>Rotas /Id / {codigo}</h1>
      <Link href='/rotas'>
        <a >
        <button>Voltar</button>
        </a>
      </Link>
    </div>
  )
}