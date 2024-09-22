import React, { useState } from 'react';
import styles from '../styles/Agenda.module.css';
import { EventAgendaType } from '../types/types';

interface Props {
  agendaData: EventAgendaType[];
  headline1?: string;
  headline2?: string;
  subHeadline1?: string;
  subHeadline2?: string;
}


const Agenda: React.FC<Props> = ({ agendaData, headline1, headline2, subHeadline1, subHeadline2 }) => {
  const [activePage, setActivePage] = useState('Page1');

  // Split agenda data into two pages
  const page1Data = agendaData.slice(0, 9);
  const page2Data = agendaData.slice(9);

  return (
    <>
      <div className={styles.agendaContainer}>

        {/* Headline */}

        {headline1 && (
          <h1 className={styles.headline}>{headline1}</h1>
        )}

        {headline2 && (
          <h1 className={styles.headline2}>{headline2}</h1>
        )}

        {/* Page Buttons */}

        {subHeadline2 && (
          <div>
            <h1 className={styles.subHeadline}>{subHeadline2}</h1>
            <div className={styles.pageButtons1}>
              <button onClick={() => setActivePage('Page1')} className={activePage === 'Page1' ? styles.activeButton : ''}>Ден 1</button>
              <button onClick={() => setActivePage('Page2')} className={activePage === 'Page2' ? styles.activeButton : ''}>Ден 2</button>
            </div>
          </div>
        )}

        {subHeadline1 && (
          <div className={styles.pageButtons}>
            <button onClick={() => setActivePage('Page1')} className={activePage === 'Page1' ? styles.activeButton : ''}>Ден 1</button>
            <button onClick={() => setActivePage('Page2')} className={activePage === 'Page2' ? styles.activeButton : ''}>Ден 2</button>
          </div>
        )}

        <svg xmlns="http://www.w3.org/2000/svg" width="1196" height="4" viewBox="0 0 1196 4" fill="none">
          <path d="M2 1.625H1194" stroke="#E87B22" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* Content Below - Dynamic */}
        {activePage === 'Page1' && (
          <div className={styles.eventContainer}>
            {page1Data.map((event, index) => (
              <React.Fragment key={index}>
                <div className={styles.eventRow}>
                  <div className={styles.eventTime}>{event.time}</div>
                  <div className={styles.eventDetails}>
                    <ul className={styles.eventList}>
                      <li>| <strong>{event.title}</strong></li>
                      {event.items?.map((item, idx) => (
                        <ul key={idx}>
                          {item.description1 && (
                            <li className={styles.eventDescription}>
                              {event.id === '3' && (
                                <>
                                  {item.description1} <span className={styles.orangeBold}>John Doe</span>
                                </>
                              )}
                              {event.id === '4' && (
                                <>
                                  {item.description1} <span className={styles.orangeBold}>Jane Smith</span>
                                </>
                              )}
                              {event.id === '6' && (
                                <>
                                  {item.description1} <span className={styles.orangeBold}>Alice Johnson</span>
                                </>
                              )}
                              {event.id === '7' && (
                                <>
                                  {item.description1} <span className={styles.orangeBold}>Michael Brown</span>
                                </>
                              )}
                              {!['3', '4', '6', '7'].includes(event.id || '') && item.description1}
                            </li>
                          )}
                          {item.description2 && <li className={styles.eventDescription}>{item.description2}</li>}
                        </ul>
                      ))}
                    </ul>
                  </div>
                </div>

                {index === 4 && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="1196" height="4" viewBox="0 0 1196 4" fill="none">
                    <path d="M2 1.625H1194" stroke="#E87B22" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {activePage === 'Page2' && (
          <div>
            {page2Data.length === 0 ? (
              <p className={styles.noDataMessage}>Нема податоци за прикажување.</p>
            ) : (
              <div className={styles.eventContainer}>
                {page2Data.map((event, index) => (
                  <React.Fragment key={index}>
                    <div className={styles.eventRow}>
                      <div className={styles.eventTime}>{event.time}</div>
                      <div className={styles.eventDetails}>
                        <ul className={styles.eventList}>
                          <li>| <strong>{event.title}</strong></li>
                          {event.items?.map((item, idx) => (
                            <ul key={idx}>
                              {item.description1 && <li className={styles.eventDescription}>{item.description1}</li>}
                              {item.description2 && <li className={styles.eventDescription}>{item.description2}</li>}
                            </ul>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </>
  );
};

export default Agenda;
