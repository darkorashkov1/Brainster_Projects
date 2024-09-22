import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { CardStructure, CardType, EventAgendaType, EventsType } from '../../types/types';
import HeroSection from '../../components/HeroSection';
import Carousel from '../../components/Carousel';
import Agenda from '../../components/Agenda';
import EventBlock from '../../components/event/EventBlock';
import EventSpeakers from '../../components/event/EventSpeakers';
import EventPackages from '../../components/event/EventPackages';
import CurrentEvents from '../../components/event/CurrentEvents';
import Breadcrumbs from '../../components/Breadcrumbs'; // Make sure to import your Breadcrumbs component

interface Props {
  eventData: CardStructure;
  eventBlockData: CardStructure[];
  eventCardsData: EventsType[];
  agendaData: EventAgendaType[];
  cardsData: CardType[];
  cafeCardsData: CardType[];
}

const EventDetails: NextPage<Props> = ({
  cafeCardsData,
  cardsData,
  eventData,
  eventCardsData,
  agendaData,
  eventBlockData,
}) => {
  // Find the specific event based on the id from eventData
  const specificEvent = eventBlockData.find(event => event.id === eventData.id);

  return (
    <>
      <div className="h-screen mTopHeader">
        <HeroSection
          image3Src={eventData.imageUrl}
          mainText4={eventData.category}
          topSpan="Настан"
          bottomSpan={`| ${eventData.mkDate}`}
        />
      </div>

      <Carousel eventCardsData={eventCardsData} />

      <div className={`wrapper85 my-20`}>
        <Breadcrumbs />

        {specificEvent ? (
          <EventBlock eventBlockData={specificEvent} />
        ) : (
          <p>No event found</p>
        )}
      </div>

      <div className="my-20">
        <Agenda agendaData={agendaData} headline2={'Агенда на настанот:'} subHeadline2={eventData.mkDayDateMonth} />
      </div>

      <EventSpeakers speakers={cardsData.slice(8, 11)} />
      <EventPackages />
      <CurrentEvents cardData={cafeCardsData} headline="Слични настани" />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const eventRes = await fetch(`http://localhost:5001/events/${query.id}`);
  const eventData: CardStructure = await eventRes.json();

  const eventBlockRes = await fetch(`http://localhost:5001/events/`);
  const eventBlockData: CardStructure[] = await eventBlockRes.json();

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  const agendaRes = await fetch("http://localhost:5001/eventAgenda");
  const agendaData: EventAgendaType[] = await agendaRes.json();

  const cardsRes = await fetch("http://localhost:5001/aboutPageCards");
  const cardsData: CardType[] = await cardsRes.json();

  const cafeCardsRes = await fetch("http://localhost:5001/events?_start=3&_limit=4");
  const cafeCardsData: CardType[] = await cafeCardsRes.json();

  return {
    props: {
      eventData,
      eventCardsData,
      agendaData,
      eventBlockData,
      cardsData,
      cafeCardsData,
    },
  };
};

export default EventDetails;
