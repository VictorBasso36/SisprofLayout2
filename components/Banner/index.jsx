import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/components/Banner/Banner.module.css'

import { useEffect, useState, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';


SwiperCore.use([Pagination, Navigation, Autoplay, Virtual]);


export default function Banner() {
    const [loaded, setLoaded] = useState(false);
    const cards = ['https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp','https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp'];
    const [virtualSlides, setVirtualSlides] = useState([]);
    const paginationRef = useRef(null);
    useEffect(() => {
        const slides = cards.map((item, index) => (
          <SwiperSlide key={index}>
              <img className={styles.ImagensBanner} src={cards[index]} alt="Banner Item" />
          </SwiperSlide>
        ));
        setVirtualSlides(slides);
      }, []);
  
      const renderPagination = () => {
          return (
            <div ref={paginationRef} className="swiper-pagination">
              {virtualSlides.map((slide, index) => (
                <span key={index} className="swiper-pagination-bullet"></span>
              ))}
            </div>
          );
        };
  return (
    <>
        <section className={styles.Banner}>
            <div className={styles.BannerContainer}>
                <div className={styles.BannerContent}>
                    <div className={styles.SwiperHere}>
                        <Swiper
                        loop={true}
                        spaceBetween={0}
                        autoplay={{ delay: 1000 }}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next"
                        }}
                        modules={[Pagination, Autoplay, Navigation]}
                        pagination={{
                            el: paginationRef.current,
                            clickable: true,
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
                        <Link href="/">
                            <div className={styles.ContentHereBanner}>
                                <h2>Exemplo de Banner:</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>     
                        </Link>
                       <div className={styles.BannerSwiperHere}>
                            {renderPagination()}
                        </div>
                    </div>
                </div>
            </div>  
        </section>
    </>
  )
}
