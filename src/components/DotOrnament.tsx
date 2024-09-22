import React from 'react'
import styles from "../styles/DotOrnament.module.css"

const DotOrnament = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.dottedBackground}>
          <img src="/images/group_9201.png" alt="" />

          <div className={styles.squareCover1}></div>
          <div className={styles.rectangleCover}></div>
          <div className={styles.squareCover2}></div>

        </div>
      </div>
    </div>


  )
}

export default DotOrnament
