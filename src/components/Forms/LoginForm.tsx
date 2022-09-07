import React, { FC } from 'react';
import styles from './_forms.module.scss';
import cn from 'classnames';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { show } from '../../base/customTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface showLightboxProps
{
  showLightbox: show;
  click: any;
}

const LoginForm:FC<showLightboxProps> = (props) => 
{

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => 
  {
    e.preventDefault();
  }

  return (
    <div className={cn(styles['lightbox'], [styles[`lightbox--${props.showLightbox}`]])}>
    <section className={styles['form-container']}>
    <FontAwesomeIcon icon={solid('xmark')} size='lg' 
    className={styles['close-login']}
    onClick={props.click} />
      
    <form className={styles['form']}>
      <h4 className={styles['form__title']}>Inicia sesión o Registrate para acceder</h4>
    <div className={styles['social-media-container']}>
      <SocialMedia size='2x'/>
    </div>

      <span>- O -</span>

    <div className={styles['form__field-container']}>
        <div className={styles['form__field']}>
            <label htmlFor="form-mail">Introduzca su correo electrónico</label>
            <input type="email" name='form-mail' placeholder='Correo electrónico'/>
          </div>

          <div className={styles['form__field']}>
            <label htmlFor="form-password">Introduzca su contraseña</label>
            <input type="password" name='form-password'  placeholder='Contraseña'/>
          </div>

      <input type="submit" value="Iniciar sesión" className={cn(styles['form__field'], [styles['form__field--submit']])} onClick={handleSubmit}/>
    </div>


      <div className={styles['form__cta-container']}>
        <a href="https://google.com" className={styles['form__cta']}>Crear Cuenta</a>
        <a href="https://google.com" className={styles['form__cta']}>¿Ha olvidado su contraseña?</a>
      </div>

    </form> 

    </section>
    
    </div>
  )
}

export default LoginForm;