import React from 'react';
import styles from '../../styles/MHRABoard.module.css';
import AboutCards from '../about/AboutCards';
import { CardType } from '../../types/types';

interface Props {
  boardCards: CardType[]
}

const MhraBoard: React.FC<Props> = ({ boardCards }) => {
  return (
    <div className={`my-14`}>
      <div className='wrapper85'>

        <div className={styles.heading}>
          <h1>Одбор на МАЧР</h1>
        </div>

        <div className={styles.about_cards}>
          {boardCards.map((card, index) => {
            return <AboutCards key={card.id || index} {...card} />
          })}

        </div>

      </div>
    </div>
  );
}

export default MhraBoard;
