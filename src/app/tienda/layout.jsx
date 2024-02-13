import Link from 'next/link'

export const metadata = {
  title: 'Tienda',
  description: 'La Store de mi tienda',
}

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav>
        <h1>TIENDA</h1>
        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/productos">Productos</Link>
          </li>
        </ul>
      </nav>

      {children}
    </>
  )
}
