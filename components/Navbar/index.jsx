import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import styles from '@/styles/components/Navbar/Navbar.module.css'

//ItemsNext
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Navbar() {
 const router = useRouter()
 const [modal, setModal] = useState(false)
 useEffect(() => {
   if (modal) {
     document.documentElement.style.overflow = "hidden";
     window.scrollTo(0, 0)
   } else {
     document.documentElement.style.overflow = "";
     window.scrollTo(0, 0)
   }
 }, [modal]);
  return (
    <>
        { modal &&
        <div className={styles.ModalNavbar} onClick={() => setModal(!modal)}>
            <div className={styles.HeaderModalClose}>
                <div className={styles.HambMenuModalClose}>
                    <div className={styles.HambMenuModalCloseContainer}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.ModalNavbarContainer}>
                <ul>
                    <li><Link href="/"><p style={{textDecoration: router.pathname === '/' ? 'underline 1px var(--Main-Color)' : 'unset'}}>Home</p></Link></li>
                    <li><Link href="/Quem-Somos" style={{textDecoration: router.pathname === '/Quem-Somos' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Quem Somos</p></Link></li>
                    <li><Link href="/Contato" style={{textDecoration: router.pathname === '/Contato' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Contato</p></Link></li>
                    <li><Link href="/Anunciar" style={{textDecoration: router.pathname === '/Anunciar' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Anunciar</p></Link></li>
                    <li>
                    <Link title="Área do cliente sisprof" href="https://www.google.com.br/" target="_blank">
                        <div className={styles.ClientAreaButtonModal}>
                            <p>Área do cliente</p>      
                        </div>

                    </Link>
                    </li>
                </ul>
            </div>
        </div>
        }

        <nav className={styles.MainFooter}>
            <div className={styles.MainFooterContainer}>
                <Link href="/">
                    {svgMainLogo}
                </Link>
                <ul>
                    <li><Link href="/" style={{textDecoration: router.pathname === '/' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Home</p></Link></li>
                    <li><Link href="/Quem-Somos" style={{textDecoration: router.pathname === '/Quem-Somos' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Quem somos</p></Link></li>
                    <li><Link href="/Contato" style={{textDecoration: router.pathname === '/Contato' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Contato</p></Link></li>
                    <li><Link href="/Anunciar" style={{textDecoration: router.pathname === '/Anunciar' ? 'underline 1px var(--Main-Color)' : 'unset'}}><p>Anunciar</p></Link></li>
                </ul>
                <div className={styles.ClientAreaButton}>
                    <Link href="/"><p>Área do Cliente</p></Link>
                </div>                
                <div className={styles.HambMenu} onClick={() => setModal(!modal)}>
                    <div className={styles.HambMenuContainer}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

const svgMainLogo = 
<svg
className={styles.MainNavbarLogo}
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="165"
height="86"
viewBox="0 0 165 86"
>
<image
  width="165"
  height="86"
  data-name="Objeto Inteligente de Vetor"
  xlinkHref="data:img/png;base64,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"
></image>
</svg>