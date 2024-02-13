import NavBar from "@/components/NavBar";
import { Roboto } from "next/font/google"
import "./globals.css"

export const metadata = {
  title: "FaztWeb",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecomemerce",
}

const roboto = Roboto ({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
 return (
    <html >
      <body className={roboto.className}>
        <NavBar />

        {children}
      </body>
    </html>
  )
}
