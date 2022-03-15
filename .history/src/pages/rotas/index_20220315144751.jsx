import Link from 'next/link'
import { useRouter } from 'next/router'

export default function rotas () {

  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoComParams() {
    router.push({
      pathname: "/rotas/params",
      query: {
        id: 123,
        nome: 'Ana'
      }
    })
  }

  return (
    <div>
      <h1>salve</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Parans</li>
        </Link>
      </ul>
      <div style={{
        display: "flex", 
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <button onClick={() => router.push("/rotas/123/buscar")}> Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/Daniel")}> Buscar</button>
      </div>
    </div>
  )
}