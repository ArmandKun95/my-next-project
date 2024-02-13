import Users from '@/components/Users'

export const metadata = {
  title: 'Mi pagina especial HOME',
}

export default function HomePage() {
  // Server Component
  return (
    <section>
      {/* Client Component*/}
      <Users />
    </section>
  )
}
