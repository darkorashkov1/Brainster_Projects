import React from 'react'
import { Recommendations } from '../types/types'
import styles from '../styles/UserProfile.module.css';


const RecommendationCard: React.FC<Recommendations> = ({ id, avatarImage, name, posted, content }) => {
  return (
    <div key={id} className={styles.card}>
      <div className={styles.cardContent}>
        <img src={avatarImage} alt={`${name} profile picture`} className={styles.cardImage} />
        <div className={styles.cardText}>
          <p>{name}</p>
          <span>{posted}</span>
        </div>
      </div>
      <div>
        <div className={styles.cardRecText}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default RecommendationCard
