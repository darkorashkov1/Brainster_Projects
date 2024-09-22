import React, { useState } from 'react';
import styles from '../styles/SubscribeModal.module.css';
import { Button, TextField } from '@mui/material';

interface SubscribeModalProps {
  closeModal: () => void;
}

const SubscribeModal = ({ closeModal }: SubscribeModalProps) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = () => {

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    // Close modal on successful subscribe
    closeModal();
  };

  return (
    <>
      <div className={`${styles.subscribeForm} ${styles.active}`}>
        <div className={styles.left}>
          <img src="/images/subscribe_logo.png" alt="mailbox" width="100%" />
        </div>
        <div className={styles.right}>
          <h2>Претплатете се на нашиот билтен!</h2>
          <p>Претплати се на нашиот информативен билтен и никогаш повеќе не пропуштај важни настани и известувања</p>
          <div className={styles.form}>
            <div className={styles.input}>
              <TextField
                id="email"
                label="Е-маил"
                placeholder="вашиот_емаил@пример.com"
                multiline
                variant="outlined"
                color="warning"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
            </div>
            <div className={styles.button}>
              <Button type='button' onClick={handleSubscribe}>Претплати се</Button>
            </div>
          </div>
        </div>
        <button type='button' className={styles.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </>
  );
};

export default SubscribeModal;
