import React, { useEffect, useState } from 'react';
import styles from '../styles/DiscoverBlogs.module.css';
import TextField from '@mui/material/TextField';
import Cards from './event/Cards';
import { NextPage } from 'next';
import { CardStructure } from '../types/types';
import SuggestedEventCard from './SuggestedEventCard';

interface Props {
  cardData: CardStructure[];
}

interface Blog {
  id: string;
  cardTitle: string;
  description: string;
  imageUrl: string;
  category: string;
  readMore: string
}

const DiscoverBlogs: NextPage<Props> = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('Сите');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/blogCards');
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };


  const handleAllClick = () => setSelectedFilter('Сите');
  const handleRecruitmentClick = () => setSelectedFilter('Регрутирање');
  const handleCompensationClick = () => setSelectedFilter('Компензации');
  const handleHRConsentClick = () => setSelectedFilter('HR согласност');
  const handleOrganizationalStructureClick = () => setSelectedFilter('Оранизациска структура');
  const handleTrainingClick = () => setSelectedFilter('Обучување');
  const handleDevelopmentClick = () => setSelectedFilter('Развој');
  const handlePerformanceManagementClick = () => setSelectedFilter('Менаџмент на перформанси');

  const filteredBlogs = selectedFilter === 'Сите'
    ? blogData.filter(blog =>
      blog.cardTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : blogData.filter(blog =>
      blog.category.toLowerCase() === selectedFilter.toLowerCase() &&
      (blog.cardTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className="wrapper85">
            <div className={styles.header}>
              <h1 className={styles.headline}>Најнови блогови</h1>
              <TextField
                id="search-bar"
                label="Пребарај"
                variant="outlined"
                className={styles.searchInput}
                color="warning"
                margin="normal"
                value={searchQuery} // Bind search query
                onChange={handleSearchChange} // Handle change
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

            <div className={styles.filterContainer}>
              <a onClick={handleAllClick} className={selectedFilter === 'Сите' ? styles.active : ''}>Сите</a>
              <a onClick={handleRecruitmentClick} className={selectedFilter === 'Регрутирање' ? styles.active : ''}>Регрутирање</a>
              <a onClick={handleCompensationClick} className={selectedFilter === 'Компензации' ? styles.active : ''}>Компензации</a>
              <a onClick={handleHRConsentClick} className={selectedFilter === 'HR согласност' ? styles.active : ''}>HR согласност</a>
              <a onClick={handleOrganizationalStructureClick} className={selectedFilter === 'Оранизациска структура' ? styles.active : ''}>Оранизациска структура</a>
              <a onClick={handleTrainingClick} className={selectedFilter === 'Обучување' ? styles.active : ''}>Обучување</a>
              <a onClick={handleDevelopmentClick} className={selectedFilter === 'Развој' ? styles.active : ''}>Развој</a>
              <a onClick={handlePerformanceManagementClick} className={selectedFilter === 'Менаџмент на перформанси' ? styles.active : ''}>Менаџмент на перформанси</a>
            </div>

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

            <div className={styles.mainContainer}>

              {/* First Container */}
              <div className={styles.firstContainer}>

                <div className={styles.rowContainer1}>
                </div>

                {/* Row of two cards */}
                <div className={styles.rowContainer1}>

                  <div className={styles.card}>
                    <Cards id={'2'}
                      imageUrl={'https://s3-alpha-sig.figma.com/img/cba5/e8bd/36e64c8382849d02351147d485db39f3?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvLRB1JH~oQVhqhC7buAaGNnIElmS-39v0M-qXZW-4Nv2eGG68hwan8As~wbKNLRl7JxBWBwddv3skxZxbL3ZrhBD7mIIWsXCybbO2OpJtrdTocNo8FaxVe28VeAG26EylEGMBXJi5f2hAteDysl76CVNXQImBdK9edS-TqkS0VacKIW41Q4JfMN7Lk08fNb--A7U-X98FQsERe6tecw~oPhViSVbrw3~ndirZDnnKVCOWHnywKNcjyeY0eyDMiVBZTdROiBUcQlH-CmvsL3tZsT9ge7US3NzU3kyoTep~FzyXFDvM6kO0R4v2788q3TRD3doAOHiqb-mgBMqFE5yQ__'}
                      cardTitle={'Техники за управување со стрес на работното место'}
                      description={'Научите како да го намалите стресот и да го подобрите менталното здравје на вработените со практични техники.'}
                      readMore={'Прочитај повеќе'} />
                  </div>

                  <div><SuggestedEventCard
                    id={'1'}
                    imageUrl={'https://s3-alpha-sig.figma.com/img/bc3c/dd9f/bea06eec96c75b10b6a933f4413880b2?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ioMUAavCYz7YOYVVSNxgKt4ZdZMie36EsukA0LgZSXmlQuSbDzE062dLEMfcdIo8crUiWEXTjIB3NXnBd9lXOxp~bF-VY6ZJAlmVp0aQUlnvKUtXbFyk2E67Q0x8r0ZngYgr9ooWsjinvByyg1~5F~oTR1V3aERV9eZwUqQzH57mZJbAnwHby5rrVUQAhst3loBfWXQYL6eza1UHV4jnhJ~4St2pe28i5W8e0s-1w0t~VV02jabqtLfUk3zoePEB9b5b5nK8fWrPDRSFuKI2-O-5BR-RPGaeJlzDsRrIw8WHAy8I78rNXD3gGnh1TReKSek7bHtU0sC2d3ERfQxZBQ__'}
                    cardTitle={'Предложен настан:'}
                    cardSubTitle={'HR викенд:'}
                    description={'Управување со стрес...'}
                    month={'Авг'}
                    day={'16'}
                    readMore={'Прочитај повеќе'} /></div>
                </div>

                {/* Another row of two cards */}
                <div className={styles.rowContainer2}>

                  <div><SuggestedEventCard
                    id={'2'}
                    imageUrl={'https://s3-alpha-sig.figma.com/img/0d7e/214b/bac56381810bcb4aa37199c193934609?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6u8C-zpmRe5WOnDUiMet5pbtPn0D6AgiHdDfmm80~3uVmMwjI2u-n8icEclpj-zYgbe8ilAP5UlNkS1puCj5MdJ97O2YMXvs52ZCY7N0YoU90352a8-70RuaK-sdh1~GAsumIzbnExzM9Z66x5FNOBryQfOwTqdorlNV34JesuQryJLxz3ctrpNpEs49Z0DEtsIHhy9PF5IZAorEqfzxblI1yErdzhkN3G7pSP8L9tavCgwwgj~FG4~ELta3m5ei9-3C3OrBsaedMRr1GCL2LHu9iGwEMiodYF0j~Vo9p1RfMnMfwPivZNc5Wn4rfQfs6dYwQ3vYoiB3P0ypWL2mg__'}
                    cardTitle={'Предложен настан:'}
                    cardSubTitle={'HR викенд:'}
                    description={'Организација во организации...'}
                    month={'Јун'}
                    day={'24'}
                    readMore={'Прочитај повеќе'} /></div>

                  <div className={styles.card}>
                    <Cards id={'7'}
                      imageUrl={'https://s3-alpha-sig.figma.com/img/1d0e/fb22/48e237d3a4654186f27d86bf9664a002?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kcasxo1fvcVOYteuEKz3Gq0VjYZU9GdLP49svVE-jqIaD03IasSvDoQP4-HmnJyTkwD6L7g86leyvSeCV3RvkY~bN1VJKt-w~BAQWHxeGXmChlmMY9iOK-C8VywqQ5NSRSYcig8P8x380i6sWkb~IEjyrkL3OmPILDoKnQYAc0l4l87a2VvFFinLICr-KUGPJYM7hyAOrNJuzDMrfjbJ4f4i~8OOxzVwPGDgBG~94O6he-kgbgVhd8-vvtH-IHW3V-as46gEPuN1OhBtJC8xYNrBMH7sO0fUV0iRVkw2EMao0LnIcwlyYikjUgBhmbFcRikc19RQr96uo9VLOo3XBw__'}
                      cardTitle={'Креирање на позитивна организациска култура'}
                      description={'Кои чекори можете да ги превземете за да креирате и одржите позитивна организациска култура која ќе ги мотивира и инспирира вработените.'}
                      readMore={'Прочитај повеќе'} />
                  </div>

                </div>

              </div>

              {/* Second Container */}
              <div className={styles.secondContainer}>
                <h3>Најнови огласи:</h3>
                <ul>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.hr}>
                        <img src="https://s3-alpha-sig.figma.com/img/4d92/86e3/d2c8ff2376ae4e0fdec98cda477e041d?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqzwTaqvjmzrG7uXsu9zSgCVZhQOjhHlNrjPJj1cAFZLtDMM7gUWlrvVvLH5ODrF-BDd5-TID80WDEBh6cSbFH7p--Cb0x7tZ99417osLD7hRCn1BJ14u4j7BIHD4H4aGUuA-7ZDotUeQBf5cCv9yZfcaJPQjNjn~eHRpF23nbi8ko5Dv5sF9Glg-qMDOKIDkDHIv1~vI7mbBwa5SmcPeDUbMxmITVPoyYQno0s5nDUoP7c6BBjfxH15XYY4RPs80kbPt5bqjoRs00TUOsI4bmAyUP27SYtYJTjLNuTfPf7IbqKbe~ugLLpngOK4FRDi9yaZ~mHP7gdN5dLRrrcy8A__" alt="" />
                      </div>
                      <div className={styles.hrText}><p>HR админ</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.titan}>
                        <img src="https://s3-alpha-sig.figma.com/img/6f73/5d6c/a0edb17647731f49682ec11a720c72ad?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IzMJ9a9UiYKbEuNPnpVCLcT3QGRKcef8ZZLHG3~JokiyCQBC0k9KlJv0cehEZJ2qpgE05J-qJqhIUk0UrfbWH~6QZavQPDhjIbVwxlB3pvKuld7EeH3FsXR8pLTnWM0R1YykWsGfpDsxq5jmtuNuD5PLVNKbwK6vl5~FS0KwkbMIzOMJzQiAd4L~cMMgK8P0tIKXa3hZnPplL8qYGTxqapKXKtRmQMrO4TiIo6X8KTFO~0BaBm8Iy~tPLeMFmrVV92WmJxAftIBy9LjDEQ62DApiYsv~5tkt~fIPVaVYY55E541WfLR9-TA0sL~SGQyIMjx~AzuhUNmumIK8mT28Bg__" alt="" />
                      </div>
                      <div className={styles.titanText}><p>Практикант</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.hr}>
                        <img src="https://s3-alpha-sig.figma.com/img/4d92/86e3/d2c8ff2376ae4e0fdec98cda477e041d?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqzwTaqvjmzrG7uXsu9zSgCVZhQOjhHlNrjPJj1cAFZLtDMM7gUWlrvVvLH5ODrF-BDd5-TID80WDEBh6cSbFH7p--Cb0x7tZ99417osLD7hRCn1BJ14u4j7BIHD4H4aGUuA-7ZDotUeQBf5cCv9yZfcaJPQjNjn~eHRpF23nbi8ko5Dv5sF9Glg-qMDOKIDkDHIv1~vI7mbBwa5SmcPeDUbMxmITVPoyYQno0s5nDUoP7c6BBjfxH15XYY4RPs80kbPt5bqjoRs00TUOsI4bmAyUP27SYtYJTjLNuTfPf7IbqKbe~ugLLpngOK4FRDi9yaZ~mHP7gdN5dLRrrcy8A__" alt="" />
                      </div>
                      <div className={styles.hrText}><p>Практикант</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.hr}>
                        <img src="https://s3-alpha-sig.figma.com/img/4d92/86e3/d2c8ff2376ae4e0fdec98cda477e041d?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqzwTaqvjmzrG7uXsu9zSgCVZhQOjhHlNrjPJj1cAFZLtDMM7gUWlrvVvLH5ODrF-BDd5-TID80WDEBh6cSbFH7p--Cb0x7tZ99417osLD7hRCn1BJ14u4j7BIHD4H4aGUuA-7ZDotUeQBf5cCv9yZfcaJPQjNjn~eHRpF23nbi8ko5Dv5sF9Glg-qMDOKIDkDHIv1~vI7mbBwa5SmcPeDUbMxmITVPoyYQno0s5nDUoP7c6BBjfxH15XYY4RPs80kbPt5bqjoRs00TUOsI4bmAyUP27SYtYJTjLNuTfPf7IbqKbe~ugLLpngOK4FRDi9yaZ~mHP7gdN5dLRrrcy8A__" alt="" />
                      </div >
                      <div className={styles.hrText}><p>Извршен менаџер</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.lean}>
                        <img src="https://s3-alpha-sig.figma.com/img/81a5/04df/e0c8853f03e6f3d03e5424a74363dbfa?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJvbX7wbECorAcjrlnpFfZTlB6Yp7cL26m3kRszROIoITwtsonoRlFRH6r3Ih2MonvxAqcFiK-xRj1TrUZe~H1cla-fLMaPXYAXyOuvEhq7Bz9BaQNqsvX2UH9tU92bR6rZFtnRSvJONa-vOFKQyDUBXAFuIKa2~ZlmfivJNP7GrSD7frQx9sLwIz6e1Ygv3ryFpQbxyiHCw0jmDqZl4UXIzsPDjc7fPG3d7iesq~QPOfyjyPhbOybWpEABppwGF2pTzpK2xhUFoM-UEMNaO6f9AKrqRJ8wN9uTMeaUzlh7~2UPukCIxGedOhN0V45Ur6QjdcAPGACMSyUp5GOzSCA__" alt="" />
                      </div>
                      <div className={styles.leanText}><p>HR Практикант</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.titan}>
                        <img src="https://s3-alpha-sig.figma.com/img/6f73/5d6c/a0edb17647731f49682ec11a720c72ad?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IzMJ9a9UiYKbEuNPnpVCLcT3QGRKcef8ZZLHG3~JokiyCQBC0k9KlJv0cehEZJ2qpgE05J-qJqhIUk0UrfbWH~6QZavQPDhjIbVwxlB3pvKuld7EeH3FsXR8pLTnWM0R1YykWsGfpDsxq5jmtuNuD5PLVNKbwK6vl5~FS0KwkbMIzOMJzQiAd4L~cMMgK8P0tIKXa3hZnPplL8qYGTxqapKXKtRmQMrO4TiIo6X8KTFO~0BaBm8Iy~tPLeMFmrVV92WmJxAftIBy9LjDEQ62DApiYsv~5tkt~fIPVaVYY55E541WfLR9-TA0sL~SGQyIMjx~AzuhUNmumIK8mT28Bg__" alt="" />
                      </div>
                      <div className={styles.titanText}><p>Management trainee</p></div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.liContainer}>
                      <div className={styles.sosv}>
                        <img src="https://s3-alpha-sig.figma.com/img/cff5/4d29/c0bb446750e359679b7c038bfa15347c?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EKN1fC53~dhVQlWQA13ovYVDsAHCv3RxdtcAV8hxqCw2J7yS7xxIUq~Y73eR3s9Rwyv8YQtJFg4-fCa2RsoigA0KmUhGSN~BvciT4UNwduW9e4SwErLiZUhlh-ZIYPJ1JSyEDbtdOWi94SfR7bHSSqsrn1yBpmEQaWvXZqyDBywjgOzNyvjDtyy~JeYrwuaFKY2Xcd0c7QkrNWCuePpQV81-aP64B8~3oKKZY~Jhh7Pavea7y6XN86vc7l9WhWicTNfXNCVGq9TDCSHvadMoVlniqDOmI8gGjjtNGlyLwiorRAWL3JBMAaocQtX82IB957r8wpsRrzLjoRJ3IPxDvQ__" alt="" />
                      </div>
                      <div className={styles.sosvText}><p>Менаџер за HR</p></div>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>


  )
}

export default DiscoverBlogs
