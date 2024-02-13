import Link from 'next/link'
import './Navbar.css'

function NavBar() {
  return (
    <nav className="navbar py-5">
      <Link href={'./'}>
        <h1 className="text-2xl font-bold">Shopify</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tienda">Store</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar;