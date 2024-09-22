import React from 'react';
import { EventsType, Recommendations, UserDetails } from '../types/types';
import { GetStaticProps, NextPage } from 'next';
import User from '../components/User';
import Carousel from '../components/Carousel';

interface Props {
  recCardData: Recommendations[];
  eventCardsData: EventsType[]
  userData: UserDetails;
}

const UserDashboard: NextPage<Props> = ({ recCardData, userData, eventCardsData }) => {
  return (
    <>
      <div className={`h-100 my-6`}>
        <User recCardsData={recCardData} usersData={userData} />
      </div>

      <div className={`h-2/5`}>
        <Carousel eventCardsData={eventCardsData} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const recCardRes = await fetch('http://localhost:5001/recommendations');
  const recCardData: Recommendations[] = await recCardRes.json();

  const userRes = await fetch('http://localhost:5001/userDetails');
  const userData: UserDetails = await userRes.json();

  const res = await fetch('http://localhost:5001/carouselEvents');
  const eventCardsData: EventsType[] = await res.json();

  return {
    props: {
      recCardData,
      userData,
      eventCardsData
    }
  };
};

export default UserDashboard;
