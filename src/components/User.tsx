import React, { useState } from 'react'
import { Recommendations, UserDetails } from '../types/types';
import styles from '../styles/UserProfile.module.css';
import { NextPage } from 'next';
import RecommendationCard from './RecommendationCard';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  recCardsData: Recommendations[];
  usersData: UserDetails;
}

const User: NextPage<Props> = ({ recCardsData, usersData }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(2);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const closeModal = () => setIsModalOpen(false);

  const handleShowAll = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 2);
  };

  const handleSave = () => {
    // Handle the save logic
    console.log("Saving settings...");

    setTimeout(() => {
      closeModal();
    }, 500);
  };

  return (
    <div className='h-screen mTopHeader'>
      <div className={styles.container}>
        <div className={styles.wrapper85}>

          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.profileContainer}>
              <img src={usersData.avatarImage} alt="Profile" className={styles.profilePic} />
              <div className={styles.notification} />
              <p className={styles.name}>{usersData.firstName}</p>
              <span className={styles.city}>{usersData.city}</span>
              <hr className='hLine' />
            </div>

            <div className={styles.jobSection} >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.98898 3.1201C11.3411 3.1201 12.4368 4.20897 12.4368 5.55269C12.4368 6.8964 11.3411 7.98527 9.98898 7.98527C8.63686 7.98527 7.54119 6.8964 7.54119 5.55269C7.54119 4.20897 8.63686 3.1201 9.98898 3.1201ZM9.98898 13.5455C13.4508 13.5455 17.0992 15.2367 17.0992 15.9781V17.2523H2.87873V15.9781C2.87873 15.2367 6.5271 13.5455 9.98898 13.5455ZM9.98898 0.919189C7.41297 0.919189 5.32652 2.99268 5.32652 5.55269C5.32652 8.11269 7.41297 10.1862 9.98898 10.1862C12.565 10.1862 14.6514 8.11269 14.6514 5.55269C14.6514 2.99268 12.565 0.919189 9.98898 0.919189ZM9.98898 11.3446C6.87679 11.3446 0.664062 12.8968 0.664062 15.9781V19.4532H19.3139V15.9781C19.3139 12.8968 13.1012 11.3446 9.98898 11.3446Z" fill="#7F7F7F" />
                </svg>
                <h2>{usersData.profession}</h2>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.2495 2.62502C13.5103 2.62304 12.778 2.76757 12.095 3.05027C11.4119 3.33296 10.7917 3.74821 10.27 4.27202L3.37755 11.166C3.1661 11.3771 3.04716 11.6635 3.04688 11.9622C3.04659 12.261 3.165 12.5476 3.37605 12.759C3.58709 12.9705 3.87349 13.0894 4.17224 13.0897C4.47098 13.09 4.7576 12.9716 4.96905 12.7605L11.8645 5.86352C12.506 5.2738 13.3505 4.95476 14.2217 4.97306C15.0928 4.99136 15.9232 5.34558 16.5394 5.96171C17.1555 6.57784 17.5097 7.40823 17.528 8.27938C17.5463 9.15053 17.2273 9.99506 16.6375 10.6365L8.68305 18.591C8.46978 18.7897 8.18771 18.8979 7.89626 18.8928C7.60481 18.8876 7.32673 18.7696 7.12061 18.5634C6.91449 18.3573 6.79643 18.0793 6.79128 17.7878C6.78614 17.4963 6.89433 17.2143 7.09305 17.001L15.0475 9.04652C15.259 8.83527 15.3779 8.54869 15.378 8.2498C15.3781 7.95091 15.2595 7.66421 15.0483 7.45277C14.8371 7.24133 14.5505 7.12246 14.2516 7.12232C13.9527 7.12218 13.666 7.24077 13.4545 7.45202L5.49855 15.4095C4.90883 16.051 4.58979 16.8955 4.60809 17.7667C4.62639 18.6378 4.98061 19.4682 5.59674 20.0843C6.21287 20.7005 7.04326 21.0547 7.91441 21.073C8.78556 21.0913 9.63008 20.7722 10.2715 20.1825L18.226 12.228C18.7499 11.7067 19.1654 11.0867 19.4483 10.404C19.7313 9.72118 19.8761 8.9891 19.8745 8.25002C19.873 6.75866 19.2798 5.32885 18.2253 4.2743C17.1707 3.21975 15.7409 2.62661 14.2495 2.62502Z" fill="#7F7F7F" />
                </svg>
                <a href="/user-dashboard/cv" className={styles.cvLink} >CV</a>
              </div>
            </div>
            <hr className='hLine' />

            <div className={styles.contactSection}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="19" viewBox="0 0 27 19" fill="none">
                  <path d="M14.6006 4.71744C14.6006 2.15743 12.5142 0.0839386 9.93819 0.0839386C7.36219 0.0839386 5.27574 2.15743 5.27574 4.71744C5.27574 7.27744 7.36219 9.35093 9.93819 9.35093C12.5142 9.35093 14.6006 7.27744 14.6006 4.71744ZM12.2694 4.71744C12.2694 5.99165 11.2204 7.03418 9.93819 7.03418C8.65602 7.03418 7.60697 5.99165 7.60697 4.71744C7.60697 3.44322 8.65602 2.40069 9.93819 2.40069C11.2204 2.40069 12.2694 3.44322 12.2694 4.71744ZM0.613281 16.3012V18.6179H19.2631V16.3012C19.2631 13.2199 13.0504 11.6677 9.93819 11.6677C6.826 11.6677 0.613281 13.2199 0.613281 16.3012ZM2.94451 16.3012C3.17763 15.4787 6.79104 13.9844 9.93819 13.9844C13.0737 13.9844 16.6754 15.4671 16.9319 16.3012H2.94451ZM22.7599 12.8261V9.35093H26.2568V7.03418H22.7599V3.55906H20.4287V7.03418H16.9319V9.35093H20.4287V12.8261H22.7599Z" fill="#7F7F7F" />
                </svg>
                <a href={`tel:${usersData.telephoneNo}`}>{usersData.telephoneNo}</a>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                  <g clip-path="url(#clip0_269_58407)">
                    <path d="M26.0906 7.00321C26.0906 5.729 25.0415 4.68646 23.7594 4.68646H5.10955C3.82737 4.68646 2.77832 5.729 2.77832 7.00321V20.9037C2.77832 22.1779 3.82737 23.2205 5.10955 23.2205H23.7594C25.0415 23.2205 26.0906 22.1779 26.0906 20.9037V7.00321ZM23.7594 7.00321L14.4345 12.7951L5.10955 7.00321H23.7594ZM23.7594 20.9037H5.10955V9.31996L14.4345 15.1118L23.7594 9.31996V20.9037Z" fill="#7F7F7F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_269_58407">
                      <rect width="27.9747" height="27.801" fill="white" transform="translate(0.447266 0.0529785)" />
                    </clipPath>
                  </defs>
                </svg>
                <a href={`mailto:${usersData.email}`}>{usersData.email}</a>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z" stroke="#7F7F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#7F7F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <button onClick={openModal} className={styles.settingsButton}>Settings</button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <h2>Кратка биографија</h2>
            <p>{usersData.bio}</p>
            <h2>Препораки</h2>
            <div className={styles.recommendations}>

              {recCardsData.slice(0, visibleCards).map((rec) => (
                <RecommendationCard {...rec} key={rec.id} />
              ))}

              {visibleCards <= recCardsData.length && (
                <button className={styles.showAllButton} onClick={handleShowAll}>Види ги сите</button>
              )}

            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>

                <div className={styles.modalHeader}>
                  <h2>Поставки</h2>
                  <CloseIcon fontSize='large' className={styles.closeButton} onClick={closeModal} />
                </div>

                <div className={styles.modalBody}>
                  <div className={styles.leftSide}>
                    <TextField
                      id="firstName"
                      className={styles.modalInput}
                      label="Име"
                      placeholder={usersData.firstName}
                      multiline
                      variant="outlined"
                      color="warning"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="email"
                      className={styles.modalInput}
                      label="Е-маил"
                      placeholder={usersData.email}
                      multiline
                      variant="outlined"
                      color="warning"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="password"
                      className={styles.modalInput}
                      label="Лозинка"
                      placeholder={usersData.password}
                      multiline
                      variant="outlined"
                      color="warning"
                      type="password"
                      fullWidth
                      margin="normal"
                    />
                    <FormControl fullWidth variant="outlined" margin="normal" color="warning">
                      <InputLabel id="demo-simple-select-outlined-label">Професија</InputLabel>
                      <Select label="Професија" >
                        <MenuItem value="admin" disabled >{usersData.profession}</MenuItem>
                        <MenuItem value="user">{usersData.profession}</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className={styles.rightSide}>
                    <TextField
                      id="lastName"
                      className={styles.modalInput}
                      label="Презиме"
                      placeholder={usersData.lastName}
                      multiline
                      variant="outlined"
                      color="warning"
                      type="last name"
                      fullWidth
                      margin="normal"
                    />
                    {/* First set of checkboxes */}
                    <div className={styles.checkboxGroup}>
                      <h4>Добивај информации на:</h4>
                      <div className={styles.checkboxItem}>
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Платформа" />
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Е-маил" />
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Социјални медиуми" />
                      </div>
                    </div>

                    {/* Second set of checkboxes */}
                    <div className={styles.checkboxGroup}>
                      <h4>Добивај информации за:</h4>
                      <div className={styles.checkboxItem}>
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Нови содржини" />
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Нови настани" />
                        <FormControlLabel className={styles.checkbox} control={<Checkbox color="warning" />} label="Приближување на датум и настан" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Save Button */}
                <div className={styles.saveButtonContainer}>
                  <Button variant="contained" className={styles.saveButton} onClick={handleSave}>
                    Зачувај
                  </Button>
                </div>
              </div>
            </div>

          )}


        </div>
      </div>
    </div>
  )
}


export default User
