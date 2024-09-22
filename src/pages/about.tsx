import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';

import { AboutPageTypes, CardType, EventsType } from '../types/types';
import { GetStaticProps, NextPage } from 'next';
import MHRABoard from '../components/about/MHRABoard';
import MHRAAbout from '../components/about/MHRAAbout';

interface Props {
  aboutPageData: AboutPageTypes;
  aboutCardData: CardType[];
  eventCardsData: EventsType[];
}

const AboutPage: NextPage<Props> = ({ aboutPageData, aboutCardData, eventCardsData }) => {

  return (
    <>
      <div className={`h-screen mTopHeader`}>
        <HeroSection
          image1Src="https://s3-alpha-sig.figma.com/img/93a1/d305/9c16b73ecab450744bfd69af1cd90b5f?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oW6LDdwe3KTuIZRchRdrF6MjJmZcDZSf~2vSl1l333Zz421UGdGP37Zha1PA0yHytOjD0VtUfQJJ-7Unw8ROSvAI4efVxI-J9Yh2dXt~6GWjdo~4YJL-xuhiVeWGiL2S6bcxI-EAAKVA5rnMjlpbRTdDIX-1AJJvFoUN7fEoUjYc6usenysswci8kkKGxlXjOPKfm5aM4c3ZuE4NJe3wgl0O-WPL9O7w1q~elWacuCF0oJtasNZJ4Q9vgRh-9JC9o2eSxaz~bNy8Lb182FD~37ukyJdfnLTToHRSn-MQBKxMSyyLCXDv5YWiw1eV6RoiYa5bnzDq2X5Rkk6g3ZKGtw__"
          image2Src="https://s3-alpha-sig.figma.com/img/e952/00c0/dc49a95cac0b8626351d59a8a182cfb8?Expires=1727049600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vu7XbPJwuo0tsp0fOfvqyvxUI1YBYBdVuQuKu54BZTWENHKpZlnoTSO9YuKmxjxpxHQakDvGyoRlGpoVJVSco~NxQ29ZY9x7G-tUuxG1jiSIh~urqcjc3z0qiPRezw0~3vEwZADHfTWkL76t-yKhkJp~TZ07OKZd7OmxqUHyRdd3jfN-MM7VfRMzg~Me5vep3DIpmkQFytr~xBK4DdvuyalCf4DEFf1RHo0Z4yUhKiyFHJUySOgd1Et4qBGQcNkhDlfmfmdynhw2vvW~wzKTkOUIzvxZNdsu9-Y6LVBvpZRJvAAR8Ls-yXJMO1UqW7R1ZFWZuJb8gG0USy6ImOxXtQ__"
          mainText="Запознај го тимот"
          subText="Македонска Асоцијација за Човечки Ресурси"
          joinText="Придружи ни се:"
          joinButtonText="Прочитај повеќе"
        />
      </div>

      <Carousel eventCardsData={eventCardsData} />

      <MHRAAbout aboutPageData={aboutPageData} />

      <MHRABoard boardCards={aboutCardData} />

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const aboutPageRes = await fetch("http://localhost:5001/about_page");
  const aboutPageData: AboutPageTypes = await aboutPageRes.json();

  const aboutCardRes = await fetch("http://localhost:5001/aboutPageCards");
  const aboutCardData: CardType[] = await aboutCardRes.json();

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  return {
    props: {
      aboutPageData,
      aboutCardData,
      eventCardsData
    },
  };
};

export default AboutPage;
