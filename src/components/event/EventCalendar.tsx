import React, { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styles from "../../styles/EventCalendar.module.css";
import Breadcrumbs from "../Breadcrumbs";

interface Event {
  id: number;
  cardTitle: string;
  description: string;
  date: string;
  imageUrl: string;
}

const EventCalendar = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [popup, setPopup] = useState<Event | null>(null);
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5001/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    const formattedDate = date.toISOString().split("T")[0];
    const upcomingEvent = events.find((event) => event.date === formattedDate);
    if (upcomingEvent) {
      setPopup(upcomingEvent);
    }
  }, [events, date]);

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setDate(value);
      const formattedDate = value.toISOString().split("T")[0];
      const event = events.find((event) => event.date === formattedDate);
      setSelectedEvent(event || null);
    } else {
      setSelectedEvent(null);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1>Календар со датуми за сите престојни настани</h1>
        <p>Погледни ги сите настани распоредени на календар. Со клик на обележаните настани можеш да дознаеш повеќе информации за секој од настаните но за целосни информации упатете се до индивидуалната страна на настанот</p>
      </div>
      <div className={styles.rightContainer}>
        <div
          className={styles.previewPanel}
          style={{
            backgroundImage: selectedEvent ? `url(${selectedEvent.imageUrl})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {selectedEvent ? (
            <>
              <h2>{selectedEvent.cardTitle}</h2>
              <p>{selectedEvent.description}</p>
              <p><strong>Дата:</strong> {selectedEvent.date}</p>
            </>
          ) : (
            <p>Нема евент на избраниот датум.</p>
          )}
        </div>
        <div className={styles.calendar}>
          <h2>Избери дата</h2>
          <Calendar
            value={date}
            locale="bg-BG"
            onClickDay={handleDateChange}
          />
        </div>
      </div>
      {/* {popup && (
        <div className={styles.popup}>
          <h2>Потсетување!</h2>
          <p>Во тек е<br /> <strong>{popup.cardTitle}</strong></p>
          <button onClick={() => setPopup(null)}>Затвори</button>
        </div>
      )} */}
    </div>
  );
};

export default EventCalendar;
