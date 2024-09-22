import React from 'react';
import HeroSection from '../components/HeroSection';
import SignUp from '../components/SignUp';

const SignUpPage: React.FC = () => {

  return (
    <>
      <div className='h-screen mTopHeader'>
        <HeroSection
          image1Src="/images/Rectangle_6501.png"
          image2Src="/images/Rectangle_6503.png"
          mainText2="Придружи ни се!"
          subText="Сакаш да се информираш подетално за бенефитите?"
          joinButtonText="Прочитај повеќе"
        />
      </div>

      <SignUp />
    </>
  );
};

export default SignUpPage;
