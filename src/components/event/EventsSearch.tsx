import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import styles from '../../styles/EventsSearch.module.css';
import { CardStructure } from '../../types/types';
import { NextPage } from 'next';

interface Props {
  cardData: CardStructure[];
}

interface Event {
  id: string;
  cardTitle: string;
  description: string;
  imageUrl: string;
  category: string;
  readMore: string;
}

const EventsSearch: NextPage<Props> = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('Сите');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/events');
        const data = await response.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase()); // Make search query lowercase
  };

  const handleAllClick = () => setSelectedFilter('Сите');
  const handleHRCafeClick = () => setSelectedFilter('HR кафе');
  const handleHRWeekendClick = () => setSelectedFilter('HR викенд');
  const handleHRWebinarClick = () => setSelectedFilter('HR вебинар');
  const handleHRConferencesClick = () => setSelectedFilter('HR конференции');

  const filteredBlogs = selectedFilter === 'Сите'
    ? eventData.filter(events =>
      events.cardTitle.toLowerCase().includes(searchQuery) || // Search in lowercase cardTitle
      events.description.toLowerCase().includes(searchQuery) // Search in lowercase description
    )
    : eventData.filter(events =>
      events.category.toLowerCase() === selectedFilter.toLowerCase() &&
      (events.cardTitle.toLowerCase().includes(searchQuery) ||
        events.description.toLowerCase().includes(searchQuery))
    );

  // Grouping by category if the "Сите" filter is selected
  const groupedBlogsByCategory = selectedFilter === 'Сите'
    ? eventData.reduce((acc: Record<string, Event[]>, event) => {
      if (!acc[event.category]) {
        acc[event.category] = [];
      }
      acc[event.category].push(event);
      return acc;
    }, {})
    : {};

  return (
    <div>
      <div className={styles.container}>
        <div className="wrapper85">

          <div className={styles.filterContainer}>
            <a onClick={handleAllClick} className={selectedFilter === 'Сите' ? styles.active : ''}>Сите</a>
            <a onClick={handleHRCafeClick} className={selectedFilter === 'HR кафе' ? styles.active : ''}>HR Кафе</a>
            <a onClick={handleHRWeekendClick} className={selectedFilter === 'HR викенд' ? styles.active : ''}>HR Викенд</a>
            <a onClick={handleHRWebinarClick} className={selectedFilter === 'HR вебинар' ? styles.active : ''}>HR Вебинар</a>
            <a onClick={handleHRConferencesClick} className={selectedFilter === 'HR конференции' ? styles.active : ''}>HR Конференции</a>
          </div>

          <div className={styles.header}>
            {selectedFilter === 'Сите' && (
              <h1 className={styles.headline}>Сите настани</h1>
            )}
            {selectedFilter === 'HR кафе' && (
              <h1 className={styles.headline}>HR Кафе</h1>
            )}
            {selectedFilter === 'HR викенд' && (
              <h1 className={styles.headline}>HR Викенд</h1>
            )}
            {selectedFilter === 'HR вебинар' && (
              <h1 className={styles.headline}>HR Вебинар</h1>
            )}
            {selectedFilter === 'HR конференции' && (
              <h1 className={styles.headline}>HR Конференции</h1>
            )}

            <TextField
              id="search-bar"
              label="Пребарај"
              variant="outlined"
              className={styles.searchInput}
              color="warning"
              margin="normal"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                sx: {
                  width: '512px',
                  height: '60px',
                  borderRadius: '50px',
                  backgroundColor: '#fff',
                  boxShadow: '0px 10px 30px rgba(47, 65, 88, 0.2)',
                  padding: "1rem"
                },
              }}
            />
          </div>

          {selectedFilter === 'Сите' ? (
            Object.keys(groupedBlogsByCategory).map((category) => (
              <div className={styles.categoryTitle} key={category}>
                <h2>{category}</h2> {/* Category Title */}
                <div className={styles.blogGrid}>
                  {groupedBlogsByCategory[category]
                    .filter(blog =>
                      blog.cardTitle.toLowerCase().includes(searchQuery) ||
                      blog.description.toLowerCase().includes(searchQuery)
                    )
                    .map((blog) => (
                      <div key={blog.id}>
                        <Cards
                          id={blog.id}
                          imageUrl={blog.imageUrl}
                          cardTitle={blog.cardTitle}
                          description={blog.description}
                          readMore={blog.readMore}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.blogGrid}>
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <div key={blog.id}>
                    <Cards
                      id={blog.id}
                      imageUrl={blog.imageUrl}
                      cardTitle={blog.cardTitle}
                      description={blog.description}
                      readMore={blog.readMore}
                    />
                  </div>
                ))
              ) : (
                <p>Не се пронајдени блогови од оваа категорија.</p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default EventsSearch;
