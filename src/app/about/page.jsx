'use client'
import { useRouter } from 'next/navigation'

/* export const metadata = {
    title: "About - FaztWeb",
}; */

function AboutPage() {
  const router = useRouter()
  return (
    <section>
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nam
        vel est expedita nemo quos assumenda maxime fugit nostrum ratione amet
        adipisci perferendis provident, quidem maiores nisi autem culpa?
        Repellat aut, dolorum dicta iste error et deserunt velit fugit suscipit
        illum? Tempora ipsa magni, voluptatum molestias nam reiciendis placeat,
        commodi error, laudantium qui enim at velit a ipsam. Alias sit, minima
        molestiae quia neque possimus laborum corrupti. Tempora, vero!
        Rationesoluta vero, tenetur possimus architecto suscipit dicta aliquam
        exercitationem cumque excepturi similique, magni nostrum est, earum
        dolorem enim! Voluptas libero, quaerat excepturi quis fuga at nihil
        neque expedita corrupti quibusdam.
      </p>

      <button
        className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={() => {
          alert('Executing Code!!!')
          router.push('/')
        }}
      >
        Click
      </button>
    </section>
  )
}

export default AboutPage
