import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import HeroSection from "../components/HeroSection";
import Carousel from "../components/Carousel";
import { CardStructure, EventsType } from "../types/types";
import BlogBlock from "../components/BlogBlock";
import AboutBlock from "../components/about/AboutBlock";
import JoiningBenefits from "../components/JoiningBenefits";
import CurrentEvents from "../components/event/CurrentEvents";
import ConferenceBlock from "../components/ConferenceBlock";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  eventCardsData: EventsType[];
  cardData: CardStructure[];
  researchData: CardStructure[];
}

const Home: NextPage<Props> = ({ eventCardsData, cardData, researchData }) => {
  return (
    <>
      <div className="h-screen mTopHeader">
        <HeroSection
          image5Src="https://s3-alpha-sig.figma.com/img/fbfe/28e7/875db2a77735ff822703caffcdc8feff?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qIx4Jb5KYH6iRxXcoX2yzSrntH80thJhFJ6pSsaim1hoPcHueyJUSUAM7Jet8hOHULF2N7XFHWXL~y3jx74zmdAzz12LIXEEytPoKN3SvYIsnZH1mSk3Axr9pja7Ef4ZCISDoJPUFpGWdZ-BMaYt41kryJQB-ixqbguxb-xebJEO4OMnxj5xdDFYQq9E-wsDFWI2W1Y~vQVfcQt2h5KGTyx~Nfh2lGH6H0igG542Jspf89u6KTEcpp3TQFzONdE3xZ2CV9UTZKi0YIUY7veD5ErvfkQGnnJL6XSd~8yd49iIPqbjnclBZyLvUryIjNiheaEDoB7dSSU4Sde36y1--Q__"
          image4Src="https://s3-alpha-sig.figma.com/img/b998/8d5c/f3c00e532ff2aacede7cea70bf660f9e?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJjgJ2WeSpauGkKi~0ySHJ5aiad5FcL-ujKlO5IwvCQusTyW8lzmxFx91hUgJznosx9Dl1zZHx2stpFu2uMDqAi2tj3DEq9gAlOKhsyXWLm9pVxL~HEHb4sfVdoH3-1OCdfAHk3q5L0oeQNau0Ti9EmOr2tKapzt0XWDvbqZBedZ9a8LnVSul4kgHB6q89bvIatdCIAdlRz4rBFahMujRuehbRXwzzPFwrHa84NbOXkll0XqocKakzMx~atbM-7HBlA13XsD1l-d5Ao8eUaw60WZbdYPY7VlgPT60hgEaa4u2iPcdVaMXkwOhPz6aFo1kKRQ18drAEK3GNzc~504Og__"
          mainText="Луѓето пред се!"
          subText="Македонска Асоцијација за Човечки Ресурси"
          joinText="Придружи ни се:"
          joinButtonText="Зачлени се"
          dottedGrid1="/images/group_9200.png"
          linkJoin="sign-up"
        />
      </div>
      <div className={`h-2/5`}>
        <Carousel eventCardsData={eventCardsData} />
      </div>
      <div className="h-screen my-20">
        <BlogBlock />
      </div>
      <div className="h-screen my-20">
        <JoiningBenefits />
      </div>
      <div className="h-screen my-20">
        <CurrentEvents cardData={cardData} headline='Актуелни настани' />
      </div>
      <div className="h-screen my-20">
        <ConferenceBlock />
      </div>
      <div className="h-screen my-20">
        <CurrentEvents cardData={researchData} headline='Популарни истражувања' />
      </div>
      <div className="h-screen my-20">
        <AboutBlock />
      </div>

    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  const cardRes = await fetch('http://localhost:5001/currentEvents');
  const cardData: CardStructure[] = await cardRes.json();

  const researchRes = await fetch('http://localhost:5001/popularResearches');
  const researchData: CardStructure[] = await researchRes.json();

  const cafeEventRes = await fetch('http://localhost:5001/popularResearches');
  const cafeEventData: CardStructure[] = await cafeEventRes.json();

  return {
    props: {
      eventCardsData,
      cardData,
      researchData
    },
  };
};

export default Home
