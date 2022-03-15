import Link from 'next/link'

export default function rotas () {
  return (
    <div>
      <h1>salve</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Parans</li>
        </Link>
      </ul>
    </div>
  )
}