import React from 'react'
import styles from "../styles/Guests.module.css"
import Link from 'next/link'

const Guests = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        {/* First Container */}
        <div className={styles.firstContainer}>
          <h1>Специјални гости</h1>
          <p>Ова се луѓе од кои дефинитивно има што да се научи. Нивните достигнувања се огромни и со нивна помош секторот на HR успеа да достигне нови височини. Не пропуштајте ја оваа прилика да ка слушнете, а и да научите нешто од нивната мудрост.</p>
        </div>

        {/* Second Container */}
        <div className={styles.middleContainer}>
          <div className={styles.cardTop}>
            <img src="https://s3-alpha-sig.figma.com/img/f71a/3e70/2197d6966d56c795ee9fadc410552f53?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azybChEik8yl~IlRZlCuIGAstkZn625TiwIR6RcznL-I4vGKwszWlkjGp-bEseF5zmqUE0gukeMFAlxTBWu5iWeB~hmmdU0px0EovwfLk2P6XHZXXuaih6hzeo-Ch1R61BIP2G-1OWlu2fHLmxhOlCNKURjKuOaf74N~YGNRHibRUEn9h8qirGzQHTWStU7PRLi9VEX2W~UC3eGnY8i4gsRDsbTlQ6nwz3mQBT~47bG66q03c0sdLkQElp2XVlFP9W9sKjb2gU7e~1EG8jtwKcmDMhkjygg~77jKWaua9q1tn7E2~2yjpokhUyBLjTQl9XhvULTD0bv9i-ScnjHL7A__" alt="Speaker 1" />
            <div className={styles.socialLeft1}>
              <p>Мајк Вазауски</p>
              <span>СЕО на "Монстер Инк"</span>
              <Link href="https://www.linkedin.com/" target='_blank' className={styles.socialBtnLeft}>
                <img className={styles.socialLink} alt="instagram_link" src="/images/mdi_linkedin_hero.png" />
              </Link>
            </div>
          </div>
          <div className={styles.cardTop}>
            <img src="https://s3-alpha-sig.figma.com/img/50f0/6f83/68b96577e708df86e2b7ef94d007cca5?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BR~HB5M7V9GdFLQKUOGTs84C2HGmwMe0YDLeAr5enAmVBQ0AMubLDkQlje86fzsjOj8K3CTekmlcf94XIUoOEV3NiKs7CQUObVjJe7we7VwrOjW4cW2WTtuuy5eD2vJB-eIekLVoGsYPtSHmZIer9gwD8kAXME38d9s-MVZx-XdlF4v9P-U-tftPsE8MYb1ZqWuPCZzbGdL4u6ws7G4jNbHUcEx2Jh2LKTSjcVRxfeGlJH0qsa7wGMhpI7Qnf0Ld9dbyh9rR8ktBqmC0rsgbpn0-gurrk~37r0sse-3mcsRaYhiRJq678WBC60~2hOplTPbEy23MAbGTAdsx-exniA__" alt="speaker 2" />
            <div className={styles.socialRight1}>
              <p>Оливиа Оил</p>
              <span>СО на "Спинак"</span>
              <Link href="https://www.linkedin.com/" target='_blank' className={styles.socialBtnRight}>
                <img className={styles.socialLink} alt="instagram_link" src="/images/mdi_linkedin_hero.png" />
              </Link>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <img src="https://s3-alpha-sig.figma.com/img/2b27/ad01/672b9f9955203f6bcbb04ed71db5347c?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O7d7iodoSmMZ6KEGjg5JXSId9LWv2DJPSwOBvdBDU4VjD37ye3a4o4bi560PQ-HwPyaM~gMI3oEBlAdM7iB9L5borgTJ7mi8ZGp2rIxULuvfFD6~RhJ6Xb57BJ8VmI-aMSJDhHfaZrC8dSdrcQXHIoL7wQ-J9hSv~01FwJLGCgxsgNfbX53nmZFn4baouQZk8gvaPpBHLgBre7EsdNLUWCw98lxID5XTBxqM3adiczFtB3pSR5SsrFBGKLFF6pS1fJ5Td3pcMgOOXQ5qygQ0SIaS8av1DUQQCbGIYTZB3btVUmlQzp5j4GhQH6j46U9kUzTPWfuvhRn0uFoyJx80nQ__" alt="Speaker 3" />
            <div className={styles.socialLeft2}>
              <p>Мајк Вазауски</p>
              <span>СЕО на "Монстер Инк"</span>
              <Link href="https://www.linkedin.com/" target='_blank' className={styles.socialBtnLeft}>
                <img className={styles.socialLink} alt="instagram_link" src="/images/mdi_linkedin_hero.png" />
              </Link>
            </div>
          </div>
          <div className={styles.cardBottom}>
            <img src="https://s3-alpha-sig.figma.com/img/e1e9/dc2d/8780dafe1c2e3c98c9cae8b54561f6d5?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qa8vZMnnaFCW75Y1tzhwgpddDtV1tIishpltFyu7jV1nw9sFOOfnV0zXjdGnLCUmzj6pFjUFJjXw3~eVSRdoW5s-OoEl3ZjeqQ6PFRROxBxAeSdf-y8gZcIeW6Sln~pzwKdEuIZN1R2NDljHSQoo1sRaH7qc0j~~hM9nBN~5NVElGYWEwIcH2Jx2IEIpGxqAUrbKgw-bqJ7w~kTdhMSGkL0LYukf0LRNG8HCbJojC85ZfMFK8XFP~ZP62uGGVFaAcnJXRXLmXQowmx2oweXIMS7mchuKDng-QXwkCLyPDPb6A-NSKDXXGMTeUu~YNaT4lbNX~ibQWyJHlm-rWFNm3A__" alt="Speaker 4" />
            <div className={styles.socialRight2}>
              <p>Една Моде</p>
              <span>Основач на "E"</span>
              <Link href="https://www.linkedin.com/" target='_blank' className={styles.socialBtnRight}>
                <img className={styles.socialLink} alt="instagram_link" src="/images/mdi_linkedin_hero.png" />
              </Link>
            </div>
          </div>
        </div>

        {/* Third Container */}
        <div className={styles.lastContainer}>
          <button className={styles.lastButton}>Сите спикери</button>
        </div>
        <div>
          <img src="/images/group_9201.png" alt="dottedGrid" className={styles.dottedGrid} />
        </div>
      </div>
    </>
  )
}

export default Guests
