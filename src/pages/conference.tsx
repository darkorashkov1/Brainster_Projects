import React from 'react'
import HeroSection from '../components/HeroSection'
import { CardStructure, EventAgendaType, EventsType } from '../types/types';
import { GetStaticProps, NextPage } from 'next';
import Carousel from '../components/Carousel';
import Breadcrumbs from '../components/Breadcrumbs';
import ConferenceBlockInternational from '../components/ConferenceBlockInternational';
import Guests from '../components/Guests';
import Agenda from '../components/Agenda';
import Presenters from '../components/Presenters';
import Packages from '../components/Packages';
import LocationMap from '../components/LocationMap';
import CurrentEvents from '../components/event/CurrentEvents';

interface Props {
  eventCardsData: EventsType[];
  agendaData: EventAgendaType[];
  researchData2: CardStructure[];
  researchData3: CardStructure[];
}

const ConferencePage: NextPage<Props> = ({ eventCardsData, agendaData, researchData2, researchData3 }) => {
  return (
    <>
      <div className="h-screen mTopHeader">
        <HeroSection
          image3Src="https://s3-alpha-sig.figma.com/img/0ef4/8ab8/2f9ab26babfe0ada74066367c7f2fc4d?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tkq2Pk3Q61xZaq4QZkAksAHHiuBWvrwbrE2VnZdvq1nl7eOEe7ik3N3A5tRqSqAqbQjRAVVE9NiKi5DizrUqCVMvN8XTDh~M5wjWsflxPyjvEcZpTxKtg1avdKGlnv2Rz57tqEamWoY7h8Hc-LRwAEBkE-Xo1NI8e3-rOhYffpjt1v4SZotVFcFWlx0HQVEvXZ~5Hw3MoehGhFD1oZGB3KXN8HA8zm~YbHfGFn78Fd82wKd2Bs1GpKJLyUHCzApvFY6bUIQFnYDR~VrUlqJm2MtJMhyxpWoKe84x6~w2sldost3ny8lgu7AqlAVOkD1Mynwwx1KigoQRLGEMvStcpA__"
          mainText4="13та меѓународна МАЧР конференција"
          topSpan="Настан"
          bottomSpan="| 24-25 Декември, 2024"
        />
      </div>

      <Carousel eventCardsData={eventCardsData} />

      <div className="h-screen my-20">
        <ConferenceBlockInternational />
      </div>

      <div className="h-screen my-20">
        <Guests />
      </div>

      <div className="h-screen my-20">
        <Agenda agendaData={agendaData} headline1='Агенда на конференцијата' subHeadline1='/' />
      </div>

      <div className="h-screen my-20">
        <Presenters />
      </div>

      <div className="h-screen my-20">
        <Packages />
      </div>

      <div className="h-screen my-20">
        <LocationMap />
      </div>

      <div className='h-screen my-20'>
        <CurrentEvents cardData={researchData2} headline='Најнови блогови' />
      </div>

      <div className='h-screen my-20'>
        <CurrentEvents cardData={researchData3} headline='Слични настани' />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  const researchRes2 = await fetch('http://localhost:5001/blogCards?_start=4&_limit=4');
  const researchData2: CardStructure[] = await researchRes2.json();

  const researchRes3 = await fetch('http://localhost:5001/events?_start=0&_limit=4');
  const researchData3: CardStructure[] = await researchRes3.json();

  const agendaRes = await fetch("http://localhost:5001/eventAgenda");
  const agendaData: EventAgendaType[] = await agendaRes.json();

  return {
    props: {
      eventCardsData,
      researchData2,
      researchData3,
      agendaData
    }
  };
};

export default ConferencePage
