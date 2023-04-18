import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/components/Banner/Banner.module.css'


import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';





export default function Banner() {
    const [loaded, setLoaded] = useState(false);
    const cards = ['https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp',];
    const [virtualSlides, setVirtualSlides] = useState([]);
  
    useEffect(() => {
      const slides = cards.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href="/Detalhes">
            <img className={styles.ImagensBanner} src={cards[index]} alt="Banner Item" />
          </Link>
        </SwiperSlide>
      ));
      setVirtualSlides(slides);
    }, []);
  return (
    <>
        <section className={styles.Banner}>
            <div className={styles.BannerContainer}>
                <Link href="/" style={{width: '100%'}}>
                <div className={styles.BannerContent}>
                    <div className={styles.SwiperHere}>
                        <Swiper
                            loop={false}
                            spaceBetween={10}
                            autoplay={{ delay: 3000 }}
                            slidesPerView={1}
                            grabCursor={true}
                            lazy="true"
                            virtual
                            modules={[Pagination, Navigation, Autoplay, Virtual]}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            style={{ height: '450px' }}
                            breakpoints={{
                                280: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                }
                            }}
                            >
                            {virtualSlides}
                            <div className="swiper-button-prev">
                                <img src="/leftarrowsisprof.webp" alt="" />
                            </div>
                            <div className="swiper-button-next">
                                <img src="/rightarrowsisprof.webp" alt="" />
                            </div>
                        </Swiper>
                    </div>
                    <div className={styles.TextBanerHere}>
                        <h2>Exemplo de Banner:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <div className={styles.BannerSwiperHere}>
                            {/* bulllets here */}
                        </div>
                    </div>
                </div>
                </Link>
            </div>  
        </section>
    </>
  )
}
