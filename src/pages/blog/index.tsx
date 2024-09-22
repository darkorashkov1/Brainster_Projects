import React from 'react'
import HeroSection from '../../components/HeroSection'
import Carousel from '../../components/Carousel'
import { CardStructure, EventsType } from '../../types/types'
import { GetStaticProps, NextPage } from 'next'
import Breadcrumbs from '../../components/Breadcrumbs'
import styles from '../../styles/Blogs.module.css'
import DotOrnament from '../../components/DotOrnament'
import DiscoverBlogs from '../../components/DiscoverBlogs'
import CurrentEvents from '../../components/event/CurrentEvents'

interface Props {
  eventCardsData: EventsType[];
  researchData1: CardStructure[];
  researchData2: CardStructure[];
  blogCardsData: CardStructure[]
}

const AllBlogs: NextPage<Props> = ({ eventCardsData, researchData1, researchData2, blogCardsData }) => {
  return (
    <>
      <div className='h-screen mTopHeader'>
        <HeroSection
          image1Src="https://s3-alpha-sig.figma.com/img/d78b/a7b4/1a840315c0424f16a29e0f5cea6638c2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vdx2G8PQ2pXSBkRmAHi~pynZ2vcWJHmlWm729ebNCm32yBVXRPT9NGTXMcZ-TWiXARYdVzVCXJAX7wZt3Eb-Wuy2rQbLddc0TQiZ9rIoY4~bU98Kir6gxB~lyg1CWtDbtrVI65hcMmfY5SMhxAdbG-ps2CmQhmgGUJqWuTqT6BHiNi9MmSDc~hv2Z4YhPXrdD-ijWO7jLDvLBAB9eI9BS87MHBZ1xnu8InQWfXoT4sQHRmFfAYLb9l2qnX9wOekyBIpXbhnQAlvynaQBY7fAniPWWUcmfMBZAh9HmrniM4TOPs0MlZMaAKsFxS4MOiCJQCLjbM~vFcqhdLEDkgaFKA__"
          image2Src="https://s3-alpha-sig.figma.com/img/d78b/a7b4/1a840315c0424f16a29e0f5cea6638c2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vdx2G8PQ2pXSBkRmAHi~pynZ2vcWJHmlWm729ebNCm32yBVXRPT9NGTXMcZ-TWiXARYdVzVCXJAX7wZt3Eb-Wuy2rQbLddc0TQiZ9rIoY4~bU98Kir6gxB~lyg1CWtDbtrVI65hcMmfY5SMhxAdbG-ps2CmQhmgGUJqWuTqT6BHiNi9MmSDc~hv2Z4YhPXrdD-ijWO7jLDvLBAB9eI9BS87MHBZ1xnu8InQWfXoT4sQHRmFfAYLb9l2qnX9wOekyBIpXbhnQAlvynaQBY7fAniPWWUcmfMBZAh9HmrniM4TOPs0MlZMaAKsFxS4MOiCJQCLjbM~vFcqhdLEDkgaFKA__"
          mainText3="Како до најдобар избор при процесот на регрутација"
          topSpan="Истакнат блог"
          bottomSpan="Од Ѓоко Вукановски | 20 Јуни, 2024"
          joinButtonText="Прочитај повеќе"
          linkJoin="blogs"
        />
      </div>
      <Carousel eventCardsData={eventCardsData} />

      <div className='wrapper85'>
        <Breadcrumbs />
      </div>

      <div className={styles.blogContainer}>
        <div className={styles.leftContainer}>
          <img
            className={styles.blogImage}
            src="https://s3-alpha-sig.figma.com/img/dc47/d3b5/ab984c57fd363f8e8a47c993594f84c2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bey5Gw~jPaup6K3yU8Ajppt-TYxK1gb1eJWAlPc1lxJzKW-goYxSuc-Gx7carkIHczYGzFlvWMW0hTsrjZ8ZXLBn60zgL9MSMi70AKnr2Drb0PhsTX413JvvnrVi-kx7jwdMDld1YHIqpTODnei-LBwC5D9bg1iiYq6pJnVN2VkxuMCe4cAVoSAdJGL8zEIBscOfxsCiOs-6N-wIIJzQGtK2aFDHHeVdOUROSnXkUE3qK5ReF1v~t0c8XzXg75haLgYeHbhCtGV3OmIxLbiA1oT8FmeZhBBYatveXADbOQ2uWA7DoP6s-UqvYDFrYScODXgbaKGkal0OoCQe4kQW2A__"
            alt="Conference"
          />
        </div>

        <div className={styles.rightContainer}>
          <h1 className={styles.title}>
            Биди <span>активен/на</span>, споделувај настани на социјаните медиуми, собирај поени, добивај значки и рамки, кани пријатели на настани и освојувај попусти за следната купена карта
          </h1>
          <p className={styles.description}>Доколку овој месец си најактивен/а во форумот добиваш награди за да го направиш твојот профил уникатен, а ако каниш пријатели и тие купат карта преку твојот линк за покана добиваш попуст на следната купена карта за настан.</p>
        </div>

      </div>

      <div className='my-20'>
        <DiscoverBlogs cardData={blogCardsData} />
      </div>

      <div className='my-20'>
        <DotOrnament />
      </div>

      <div className='h-screen my-14'>
        <CurrentEvents cardData={researchData1} headline='Тема: Култура на компанијата' />
      </div>

      <div className='my-20'>
        <DotOrnament />
      </div>

      <div className='h-screen my-14'>
        <CurrentEvents cardData={researchData2} headline='Тема: Култура на компанијата' />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  const researchRes1 = await fetch('http://localhost:5001/blogCards?_start=0&_limit=4');
  const researchData1: CardStructure[] = await researchRes1.json();

  const researchRes2 = await fetch('http://localhost:5001/blogCards?_start=4&_limit=4');
  const researchData2: CardStructure[] = await researchRes2.json();

  const blogCardsRes = await fetch('http://localhost:5001/blogCards');
  const blogCardsData: CardStructure[] = await blogCardsRes.json();

  return {
    props: {
      eventCardsData,
      researchData1,
      researchData2,
      blogCardsData
    }
  };
};

export default AllBlogs
