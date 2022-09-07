import React, { FC } from 'react';
import styles from './_forms.module.scss';
import cn from 'classnames';
import { show } from '../../base/customTypes';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

interface registerProps
{
  showRegister: show;
  click: any;
}

const RegisterForm:FC<registerProps> = (props) => 
{
  return (
    <div className={cn(styles['lightbox'],
    [styles[`lightbox--${props.showRegister}`]])}>
    
    <section className={cn(styles['form-container'], [styles['form-container--register']])}>
    <FontAwesomeIcon icon={solid('xmark')} size='lg' 
    className={styles['close-login']} onClick={props.click}/>
      
    <form className={styles['form']}>
      <h4 className={styles['form__title']}>Registrate para crear tu cuenta</h4>

    <div className={cn(styles['form__field-container'], [styles['form__field-container--register']])}>

        <div className={styles['form__field']}>
            <label htmlFor="form-name">Introduzca su nombre</label>
            <input type="text" name='form-name' placeholder='Nombre'/>
          </div>

        <div className={styles['form__field']}>
            <label htmlFor="form-mail">Introduzca su correo electrónico</label>
            <input type="email" name='form-mail' placeholder='Correo electrónico'/>
          </div>

          <div className={styles['form__field']}>
            <label htmlFor="form-password">Introduzca su contraseña</label>
            <input type="password" name='form-password'  placeholder='Contraseña'/>
          </div>

          <div className={styles['form__field']}>
            <label htmlFor="form-password-confirm">Confirme su contraseña</label>
            <input type="password" name='form-password-confirm'  placeholder='Contraseña'/>
          </div>

          <div className={cn(styles['form__field'], [styles['form__field--register']])}>
            <input type="checkbox" />
            <label htmlFor="">Acepto los términos y condiciones</label>
          </div>

      <input type="submit" value="Registrarse" className={cn(styles['form__field'], [styles['form__field--submit']])}/>
    </div>


      <div className={styles['form__cta-container']}>
        <a href="https://google.com" className={styles['form__cta']}>Iniciar sesión</a>
        <a href="https://google.com" className={styles['form__cta']}>¿Ha olvidado su contraseña?</a>
      </div>

    </form> 

    </section>
    </div>
  )
}

export default RegisterForm;