import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from '@/styles/components/Card/Card.module.css'

//ItemsNext
import Link from 'next/link'



export default function Card(props){
  return (
    
    <div className={styles.MainCard}>
           <div className={styles.CardTitle}>
              <p>AP em Moema - São Paulo</p>
            </div>
        <div className={styles.CardImage} 
        style={{ backgroundImage: 'url("https://www.construtoralaguna.com.br/images/empreendimentos/ampio/fachada.webp")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
        }}>

        </div>

        <div className={styles.CardInfo}>
         
            <div className={styles.ItemsCard}>
              <div className={styles.item}>
                {carSVG}
                <p>2</p>
              </div>
              <div className={styles.item}>
                {quartosSVG}
                <p>2</p>
              </div>
              <div className={styles.item}>
                {banheirosSVG}
                <p>2</p>
              </div>
              <div className={styles.item}>
                
                {metragemSVG}
                <p>100m²</p>
              </div>

            </div>
        </div>
        <div className={styles.PriceCard}>
            <p>venda: R$ <strong>1.000.000</strong></p>
        </div>
    </div>
   
  )
}

const carSVG =    
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="32"
height="18"
viewBox="0 0 32 18"
>
<image
  width="32"
  height="18"
  data-name="Camada 8 copiar 4"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAACpElEQVRIia3VfaiecxgH8M9h03b2kjRhWG0na6y8b2HDymnKwlajzdqKf5QlJS3FSmkipbzOYpOxxB/esmxe5m1ILFZaCSFGMgo7Xs7ajq75Prp7Ys+ek2/dz33fz+/6Xb/v9b1e7p7+OWfogDNxK/ox4gCmu7AOKzHYyWkLh3RYvxPvYyqW41SciEUhNC3XeViPFfgT5/4fBNbiBlyKPnyAuZiOJ/EqzsLiEKzIe/A83sSsgyHwX5Iuw1WYGQV2YiIGMCbX7bg20h+Oh3FXCD+LrQlwqFsFjsSjuDmHl4MfcDSOyfu42G3LfSQW4Hqsxvyk4u3hKPAhvsYqvI4dyX3hsMjcE/L7Gvsq6glR5AkcF+LX4IGDITAWj+HYSFwpOB+f4BmMzgGF3/ArZmBTw8d3ub8RklWU9yctpdy3eKq5p0VgVnJWuDwHFKGnI/H0rP2Bx/EL7o0C50SZwmQ8h0NxVLroBMzJetlemdRVp/xec2BiiuwlXIS9nfIWVApGhWw3OBtvRY1J5eQF7MaFXRwuw6m64uIuCbyLXhyPNZWC01K93aJyuxEfD2PvYPYvb7XhZ20GVYgnd3BSEr6TeuiE8jWlzebl+mkR+Kmx8BC+wfZU+sxhRNhCX+qrfH2eVm0GsL8LSo5HsBlH4AosTHQb8B5uw/jG5mrN+/JNqCn4IJa2kd2dGbAzhVcKvIYX8WlSr7pgRibfpPT/vMzyW/ItGEjRDDScb8EluDsj+rIqKCxp2IzJvebBTZklgzm8puSPFeSIjNuTYjyUXi01vsp/vYlk9b9IfF3j+epcLVyAV/JcKf25MQ9GtYzaR/GN+ch8n6/dl9iTFHWL2l95rqhL5dkZYqXUP2gncEcivifvX+CUTMDh4PTk/KNsLhVLzb+BvwDiH5qc0WlaewAAAABJRU5ErkJggg=="
></image>
</svg>

const quartosSVG =
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="23"
height="19"
viewBox="0 0 23 19"
>
<image
  width="23"
  height="19"
  data-name="Camada 11 copiar 4"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAATCAYAAAB7u5a2AAABoklEQVQ4ja2VTSuEURTHfzM9ectggSwUJaXsWHrXaApfgA+ApMbaTjZslQVbL59hmgW2EqaslLyUyMtiDEJmjI7O1e02422ef93Oc8+5z/+e83/OvU8g3NveCawCTcA7/uAUmPSAWqARWANOfOCuV746IU+qc8SnrA3uhLxMJ0PAgT6/APdA1lpcBFQAD8Cr5Q+ov1TnLcCm+IQ8qM4j4OqbTITwNoc/q9UnrbkgGLQm1WpLgLj63bGex78NhPT9GrOJZ2VgOmURGABWgGcr3gGMAodatkExMKHr5btlTMBTzbBK7gYugHGnfFn7BoSBGyc2CHTps4kFPEuWZqBBP0w5EHEIWtWOAbtOLKQb96n9ksWUHndeiJEbc3n8OHI9epZGx8AskLJksCEVph0pDdJqpeIZrTLjaT8L2rSHC8WGJvIk5MNKtiCnygfySrURubiyPyz+N4yuy8C8nrJ0gXxVwDQQNeTXwJlPCUuCl1j3SkJtKs/x/u2QC0+wb8oQRLV/5TAsObfhXzClLX1uyPeAHmXoB7YKkET+aDuffzVIfABsDnIFNd1ypgAAAABJRU5ErkJggg=="
></image>
</svg>

const banheirosSVG =
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="19"
height="19"
viewBox="0 0 19 19"
>
<image
  width="19"
  height="19"
  data-name="Camada 10 copiar 4"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAABfUlEQVQ4jZ3UMUhVcRzF8c8zcyiTpsDBoUbHHMRBaDC3SBK3SGhzCWkxCDdxKAqCgraEgqZQaIlUqAgcgqCCEoIoIQw3Qc2kMn7wu3AR3+v6Dvx5l8t933s4v9+5tYEzPVJXcAe/MImT+I6b2FFBrflIH24n7Ahu4Bu6EG8bxu7/cC352401jGMLS5hADa+qgJScBXQ7r3vxA3cxiuV0u1XVWVmPMISX+ICBjKCys7LuYQULuIV3eF8Ftp+z0FP8TJeb+HoQZ7US+Fjp3hu8xaHS/f0UA9pozbFHJkfrTO1vgmsNYH9wP2APMp/HOJF/PqiOYypgiziNU+ioulN79CXaErARfM7zqcFQ6mUVz1/D2YD9zoV8iLkmXEnYeuEicmprEnS4cFnAPuJck7DBrOJqAYuJXsTVksOWBqdYk/6M50kMoIA9w/WsT1Qpgo3dqXciltXsbwztUkDK3ZzOj+EMXmC+QY6duIznOF/s5t6it2MWFypk9RpjWTXwD7KZWZ4v4GTcAAAAAElFTkSuQmCC"
></image>
</svg>

const metragemSVG = 
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="28"
height="19"
viewBox="0 0 28 19"
>
<image
  width="28"
  height="19"
  data-name="Camada 9 copiar 4"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAATCAYAAACDW21BAAACU0lEQVRIia3VbciOZxgH8B/uEMuIJbWHfPKSlzAPWWsLjbSwsJD3eGrLB4UkKfsyso8sq31Yywc9xBLLZGxRasWWtsUSUdiYvEXKy+is/627O4nn9q+r47y6zvP6Hy//4zjbTfxglBpMQAvG4hZO4z6uYUPWDaF9DnfGT3k+QS+8GeIueAN/YPTrImxFM+bm513RP1EV8l+wAkfzrc2o4H0Mxdu4E7sOF/EN9uMMhmAVdmFKIxFuwrKQDUw0fbAcn+I6FmAzvsIg9G6EsNTl97wvwhosxo5koOBfNGV9Cv0aIeyQOklkj2q+P44tWbiddf+a/W0iLFgSW8i+x0YMTn1/RF88DNkwTG6U8COMSx2XpU5NaY0jmBnRbE9vzsPSthBWa7QTh3ApEU6v27cogip7/sIYfIl38QXOvirh+aRpD7ZGJA+S4rcS/ewMiPE4jL1JdxkON6Lmu+iOq8nQBfTEk/Tvo2pKy+FjiW4qhuNnjMDnafjSj99l8rQmtStxMFFfwQD8hhnYjYVx4kGy01ypi7gl9rMc+BsnIp4q/k/t/8M2TMO5RHAZW6KBr1P7A+gYZ6dVor564t2x+59Tho5ppSr21qx/jZ0ZOzEj8Sbalad4ejJSf1m8l35tEwrh+szO+iifh8URyMJ4/MponyupEpm/CB+nLqUV7kVgL+NkUegzVA/Mwg84nuYuTpTW6IaRGd7v4MOIZU7UWe7Ib7EP/9SNxYIyGksrdcq1V6m/8VdjUqRfpFwcKqn7E2uTzloU4vnokf1FwfXRlblbiG+h+SnOsYdBGE0F6QAAAABJRU5ErkJggg=="
></image>
</svg>
