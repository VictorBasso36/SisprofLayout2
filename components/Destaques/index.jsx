import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import styles from '@/styles/components/Destaques/Destaques.module.css'
import Card from '../Card'

import { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import 'swiper/swiper-bundle.css';


export default function Destaques(){
    const [loaded, setLoaded] = useState(false);
    const cards = ['','','','','','','','','','','','','','','','','','','','','','','',''];
    const [virtualSlides, setVirtualSlides] = useState([]);
  
    useEffect(() => {
      const slides = cards.map((item, index) => (
        <SwiperSlide key={index}>
          <Link href="/Detalhes" style={{ width: '100%', maxWidth: '325px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card loading="lazy" style={{ height: '450px' }} />
          </Link>
        </SwiperSlide>
      ));
      setVirtualSlides(slides);
    }, []);
  return (
    <>
      <section className={styles.SectionCards}>
        <div className={styles.SectionCardsContainer}>  
          <div className={styles.HeaderCards}>
              <h2><span>Imóveis em Destaque:</span></h2>
          </div>
          <div className={styles.CarrouselHere}>
  
            <Swiper
              loop={false}
              spaceBetween={10}
              autoplay={{ delay: 3000 }}
              slidesPerView={4}
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
                  spaceBetween: 20,
                },
                880: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1224: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1600: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
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
            <div className={styles.vejamaisdestaques}>
              <Link href="/Resultado-da-Pesquisa">
                  <p>Ver Mais</p>
              </Link> 
            </div>
        </div>
      </section>
    </>
   
  )
}

