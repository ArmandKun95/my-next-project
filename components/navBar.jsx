import Link from 'next/link'
import './Navbar.css'

export default function NavBar (){
    return (
        <nav className='navbar py-5'>
          <Link href={"./"}>
            <h1 className='text-2xl font-bold'>Nextjs Curso</h1>
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/tienda">Tienda</Link>
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