import React from 'react'
import HeroSection from '../../components/HeroSection'
import EventCalendar from '../../components/event/EventCalendar'
import Breadcrumbs from '../../components/Breadcrumbs'
import EventsSearch from '../../components/event/EventsSearch'
import { GetStaticProps, NextPage } from 'next'
import { CardStructure } from '../../types/types'

interface Props {
  eventCardData: CardStructure[];
}

const Events: NextPage<Props> = ({ eventCardData }) => {



  return (
    <>
      <div className='h-screen'>
        <div className='h-screen mTopHeader'>
          <HeroSection
            image1Src="https://s3-alpha-sig.figma.com/img/31b4/a58f/4486343b564b6ce2bf38d8757d233362?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CErq5tG07obPnWy-Rn4s4pGzuInmb7EJZRwNYaCwBWMpGkiAPlMiTy9cumuyvwQdArW-Qwut7opZXHwlIbabRsjBodC-K6wEJ5UBD8Wfs5Nr4gYv5VvT6jt8rLOZwGGIi9BGZKFIvOtoCivNhuHey0r3HqG~aHq6dXxpwO~xGk7JEzoYmVAUl86wRH6hJc2Lp2AzOtGayY1v5UopnmV0feq2ldkxBhgx7pJBujQUNyshOzOjch1rOEnqzallVrQ0-5T1fm0mUVRr-8E~TXdc6279TRTQdCRuZESw6HQtmLaCFOFUapMfgSLMW~agMWvhqcKTXuCA9mT0rztgqlh6YA__"
            image2Src="https://s3-alpha-sig.figma.com/img/31b4/a58f/4486343b564b6ce2bf38d8757d233362?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CErq5tG07obPnWy-Rn4s4pGzuInmb7EJZRwNYaCwBWMpGkiAPlMiTy9cumuyvwQdArW-Qwut7opZXHwlIbabRsjBodC-K6wEJ5UBD8Wfs5Nr4gYv5VvT6jt8rLOZwGGIi9BGZKFIvOtoCivNhuHey0r3HqG~aHq6dXxpwO~xGk7JEzoYmVAUl86wRH6hJc2Lp2AzOtGayY1v5UopnmV0feq2ldkxBhgx7pJBujQUNyshOzOjch1rOEnqzallVrQ0-5T1fm0mUVRr-8E~TXdc6279TRTQdCRuZESw6HQtmLaCFOFUapMfgSLMW~agMWvhqcKTXuCA9mT0rztgqlh6YA__"
            mainText3="HR Кафе"
            topSpan="Истакнат настан"
            bottomSpan="Овој четврток кафе на тема како да примените техники и чекори од селф коучинг за подобро да се водите себеси... | 20 Јуни, 2024"
            joinButtonText="Прочитај повеќе"
            linkJoin="events/"
          />
        </div>
      </div>
      <div className='my-20 wrapper85'>
        <Breadcrumbs />
      </div>
      <div className='my-20'>
        <EventCalendar />
      </div>
      <div className='my-20'>
        <EventsSearch cardData={eventCardData} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const eventCardRes = await fetch('http://localhost:5001/events');
  const eventCardData: CardStructure[] = await eventCardRes.json();

  return {
    props: {
      eventCardData
    }
  };
};

export default Events
