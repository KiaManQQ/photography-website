import React from 'react';
import { SocialMedia } from '../../components/SocialMedia/SocialMedia';
import Template from '../../components/Template/Template';
import styles from './_contact.module.scss';


const Contact = () =>
{
  return (
    <Template 
    title='Contact'
    key={3}>
    <div className={styles['contact']}>
      <div className={styles['contact__form']}>
        <form className={styles['form-contact']}>

          <div className={styles['form-contact__fields']}>
            <input type="text" name='name' placeholder='Nombre' className={styles['form-contact__input']}/>
            <input type="text" name='mail' placeholder='Email' className={styles['form-contact__input']}/>
            <input type="text" name='subject' placeholder='Asunto' className={styles['form-contact__input']}/>
          </div>

          <div className={styles['form-contact__field']}>
            <textarea name='message' className={styles['form-contact__textarea']} placeholder='Mensaje'/>
          </div>

          <div className={styles['form-contact__field']}>
            <input type="submit" value='Enviar' className={styles['form-contact__button']}/>
          </div>

        </form>
          <div className={styles['social-media-container']}>
            <SocialMedia 
            size='2x'
            extended/>
          </div>
        </div>
      </div>
    </Template>
  )
}

export default Contact;