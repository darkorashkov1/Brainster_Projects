import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import styles from '../../styles/About.module.css';
import { AboutPageTypes } from '../../types/types';
import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
  aboutPageData: AboutPageTypes;
}

const MHRAAbout: NextPage<Props> = ({ aboutPageData }) => {
  return (
    <div className='my-14'>
      <div className={styles.mainSection}>
        <div className="wrapper85">
          <Breadcrumbs />

          <section className={styles.topSection}>
            <div>
              <Image
                className={styles.image1}
                src={aboutPageData.first_image}
                alt="Image1"
                width={600}
                height={400}
              />
            </div>
            <div className={styles.textContainer}>
              <h1>{aboutPageData.main_title}</h1>
              <h3>{aboutPageData.first_title}</h3>
              <p>{aboutPageData.first_content_block}</p>
              <div>
                <span><strong>{aboutPageData.mission.title}</strong>{aboutPageData.mission.body}</span><br />
                <span><strong>{aboutPageData.vision.title}</strong>{aboutPageData.vision.body}</span>
              </div>
            </div>
          </section>

          <section className={styles.bottomSection}>
            <div className={styles.textContainer2}>
              <h3>{aboutPageData.second_title}</h3>
              <div>
                <span><strong>{aboutPageData.second_content_block.first_paragraph.title}</strong>{aboutPageData.second_content_block.first_paragraph.body}</span><br />
                <span><strong>{aboutPageData.second_content_block.second_paragraph.title}</strong>{aboutPageData.second_content_block.second_paragraph.body}</span><br />
                <span><strong>{aboutPageData.second_content_block.third_paragraph.title}</strong>{aboutPageData.second_content_block.third_paragraph.body}</span>
              </div>
            </div>
            <div>
              <Image
                className={styles.image2}
                src={aboutPageData.second_image}
                alt="Image2"
                width={600}
                height={400}
              />
            </div>
          </section>

          <div className={styles.dottedGrid}>
            <img src="/images/group_9200.png" alt="dottedGrid" />
          </div>

          <section className={styles.mainSection2}>
            <div className={styles.topSection2}>
              <div>
                <Image
                  className={styles.image2}
                  src={aboutPageData.third_image}
                  alt="Image3"
                  width={600}
                  height={400}
                />
              </div>
              <div className={styles.textContainer1}>
                <h1>{aboutPageData.third_title}</h1>
                <h3>{aboutPageData.third_title_name}</h3>
                <p>{aboutPageData.third_content_block.first_p}</p>
                <p>{aboutPageData.third_content_block.second_p}</p>
                <p>{aboutPageData.third_content_block.third_p}</p>
                <p>{aboutPageData.third_content_block.fourth_p}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};


export default MHRAAbout;
