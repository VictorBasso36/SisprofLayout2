import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/CallToAction/CallToAction.module.css'

//ItemsNext
import Link from 'next/link'

export default function CallToAction() {
  return (
    <>
        <section className={styles.MainCalToAction}>
            <div className={styles.MainCalToActionContainer}>
                
              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="70"
                    height="55"
                    viewBox="0 0 70 55"
                  >
                    <image
                      width="70"
                      height="55"
                      data-name="Camada 5"
                      xlinkHref="data:img/png;base64,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"
                    ></image>
                  </svg>
                    <div className={styles.TextHere}>
                      <h2>Cadastre <br /> seu Imóvel!</h2>
                      <p>Anuncie conosco!</p>
                    </div>
                  </div>
                  <Link href="/Anunciar">
                    <div className={styles.callButton}>
                      <h2>Cadastrar agora</h2>
                    </div>
                  </Link> 
              </div>
           
              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="48"
                      height="49"
                      viewBox="0 0 48 49"
                    >
                      <image
                        width="48"
                        height="49"
                        data-name="Camada 6"
                        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAxCAYAAACcXioiAAAEzklEQVRogc2aa4iWRRTHf7m6Fa1aGeXmorSQYVcVTCjTtOgmRAVZKBgVhh+6fqpYLco++CXpQ0RFCV2/VFRQaG0ZWeZaZEn4oauZVyyvrLetnRNnOQtvszPPO8/l3fYPA7sz5znzPzPnnGfmPO8JIo4G4yxgMjABaAdG23QHgd+ArcBG4M8iNIY3iPvpwO3ALOBK4Mw68juBtcAnwNtmXBKq3gFd5QeBu4BRBXXsB14GVgC76kqrARW0ZhF3n4g7JuKkorZfxN0r4pqy+FWxA7rqbwHTyiqKQF1rAbA9NFzWgOnA+xaoWegBfgd2AN268eZibbYAI+o8r+SvAzYPGCnhPueLuCMZ7uJEXKeIWyjizo7o0AVsFXGLRNznIq43Q99xETfR11GUfLuIO5Ax2SoRd5GIG5ZT73QzJKZ3i4ibUDYGWoBVwIzA2FHLQi8BvuKJwEzgHHsX9AL7gB+BNcAek1N3WgQ8qy4emOMb4NIyLrQisjqHRNxUT1az0/0i7jtzqdjKqiuuFnGTap6dLeIORuSXF3WhCyMKNeXN8GSvFXGbc6bUA56OK0Tc0YCc9l1QxIAPIxPf6sk9WuJd4MfN/IjcSn1H5ImBqZaTT/H6XwMW2t9NwDLgkYD/6kRdwFfAbjvGjAeutvhQvAAsDsz9ur0LatHTl75zrP6yyJaPq5G5JSDTI+LeEHEXZ6TSWSJuTsZb95JI1lucx4BfAwpeNAI6Pjow/rcZVTRd17bOgP4dqQ+PiPjhVTUyzwfIX18R+f6sNIBD6sMh15Ca8TYRt80be6pC8v1tAIdhiQEcemltypA/DCxJ1J0H63zZVAPODfR11fy93QjrQe0v4KYGkFf84Hek3shCN6qfvf9fAd6xdHmkGL+62OkLlLlS9gT6uqvjmjZnqgvtCfS1lueTG2P8B1IN+CXQN3lwuffhPL8j1YAvA30zy/PJjcv8B1LPQifZWd+HrshPg0R+jGW4/yB1B45ZAcrHzQ2hGkZHqDfVAMWbgb7bgJEVkozhNGBeYGxlHgPeDbjRFODG6vkOwHxgXKB/ed47sd5dZ3t9x62sklwOzImxwB+B0oveK+bk2QHFQ4G+E4GPSpQSs9AMdAbIa0Hgub7FK3Ai7ImcTD+o+OQ5SsR9HJlrQ79cXqUdde6za0Tc2ArItxrJ2DxtRQzoqFMa6W9bRdy8EuTvEHG7Irp19xfUyle18qG2VsTdKeJOTnSXu0Xc+jo6H/afrZeFNMiftCpDU8FA3At8al9htnnF3fFW7dDKxKkZOlT+CWveSPbKLC1R36mqaVH3nlidNUZcyxuP5yRwqGLizkqS07IWOTawJOdk6y1zzBVxGxODPavttq8zzfXip4qA/TawvTeIuPdEXHcOPb2WOtVdWlKzlh/EGiRLI2XtENbZWWhfZPwM+4qj5/hJduQYaclB78177cuNliw3AFssYJNRa8BjwSiPY5N9Rm3UGSgJaoCu9gPA0zmO11/boa5R1YdkqAHt9pUktUKh5OeGbkf/B4bbiyqVvH7euRz4ZyiQx3YgNWi6LGAL/aahUUg14Hurjx4eSuSxoH2mjswXFrBDjjy2Ay2Wh6cExj8zt2l0ybAw+t8DWnPRX4dcYzUgrfW8ate2XC+WQQXwLy05TtkxG6OmAAAAAElFTkSuQmCC"
                      ></image>
                    </svg>
                    <div className={styles.TextHere}>
                      <h2>Faça uma <br /> Busca Avançada!</h2>
                      <p>Encontre o imóvel dos sonhos!</p>
                    </div>
                  </div>
                  <Link href="/Resultado">
                    <div className={styles.callButton}>
                      <h2>Buscar agora</h2>
                    </div>
                  </Link> 
              </div>

              <div className={styles.CallToActionCard}>
                  <div className={styles.CardText}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                  >
                    <image
                      width="49"
                      height="49"
                      data-name="Camada 7"
                      xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAACyElEQVRoge2ZS4hPURzHP3MHxQIpNRNGynukiSwUC1lIidIkQils2FAmZaEsWNt5lMYGY0EWXqWURyl5LLwiZCEWnlH+mJl79Bu/O90m/zn33Dv3f88d/2+dOvf9/Z7H7/zO/TYYE6IYCWwH1gLT9dhH/AQeAp3AFSCMREwALgBLPSVeDSeAbZGIq8AK4AdwCLgH9HhJG0YBq4AdenwAY8JFxoRGywIRVZKy25iwx5jwZQBsUEVngQcFtrArjgJfgBYRMUUfflYe/n2oAL8kAImIQE+agkmlRlBm8hGCZLf5jREO7GYCc4HeFIoeAW/yagkXEc8zfOcusEzXoSGHi4hzwJyUPXET6M5DAI4i2vMikRXDYmL/d9Epzf1ZkSgJdSH1GJiacmKnhewZ9ti+6SJiVgE9IXldg+0mF1JNwLQa98SLJEPKRcQnLd6hHmJ9gctw2gLMr/He+6KmLIPCRURnPjwHxWzgji3vchGxSV9ay+h0LUni6CLiVDY++aEenXxBXYQvGDYirFmi7xAR35Xj+BLyb0RF3NAT6wrYL2TBYmAs8DHQdELcl0nAJaC5BAIWAieBMcD9yGRZDlxWA0OW+afAb31Ajm8Dey0vHgccUassT8iwn6Hv/wq0xg2VJcaE12OGS7xULMaLNMbpKs/mUcRc6TImbJHvx43HCKJystYnqvnSrb1UDfv7bKe/2Ai8zzF8y1bgFfC2/4ylhZuMvSfaYy29swirzNZatjVE/oAc07oEiOOZ2zkF/jWc4pBI9U6j1+gB1xq1W+Vf1BOgrSjHNe24FaP+vAr4rL/tC7OM04roAFar+bce+DDEvJyQRsRK4KDW9+kWslC4ipgHnNG6TOTDRQsggYgoOhmdB126Mot9tasG/BIhaU9UdCK3an0N8K1g7v2whVgG+Ny9Golu5U8tOZL0xGbgtf6h3qrJoD8A/gCpwV/WQe7ZVgAAAABJRU5ErkJggg=="
                    ></image>
                  </svg>
                    <div className={styles.TextHere}>
                      <h2>Converse com um <br /> Especialista!</h2>
                      <p>Fale com um corretor!</p>
                    </div>
                  </div>
                  <Link href="/Contato">
                    <div className={styles.callButton}>
                      <h2>Contato</h2>
                    </div>
                  </Link> 
              </div>
               
          
            </div>
        </section>
    </>
  )
}
