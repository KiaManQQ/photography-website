import React, { useState, FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { WebLogo } from '../WebLogo/WebLogo'
import { show } from '../../base/customTypes'
import LoginForm from '../Forms/LoginForm'
import RegisterForm from '../Forms/RegisterForm'
import cn from 'classnames'
import styles from './_template.module.scss'


interface templateContent{
  children: ReactNode
  title: string
}



const Template:FC<templateContent> = (props) => {
  const [login, setLogin] = useState<show>('hide')
  const [register, setRegister] = useState<show>('hide')
  const [menu, setMenu] = useState<show>('hide')

  const deployMenu = ():void =>{
    (menu === 'hide') ? setMenu('show') : setMenu('hide')
  }

  const deployLogin = ():void => {
    (login === 'hide') ? setLogin('show') : setLogin('hide')
  }

  const deployRegister = ():void => {
    (register === 'hide') ? setRegister('show') : setRegister('hide')
  }

  return (
    <>
    <LoginForm showLightbox={login} click={deployLogin}/>
    <RegisterForm showRegister={register} click={deployRegister}/>

    <div className={cn(styles['sidebar'], [styles[`sidebar--${menu}`]])}>

    <FontAwesomeIcon 
      icon={solid('xmark')} size='3x' className={styles['close-menu']} onClick={deployMenu}/>
    
    <nav className={styles['menu']}>
      <ul className={styles['menu__elements']}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </div>

  <header className={styles['header']}>
      <Link to='/' className={styles['header__logo-container']}>
        <WebLogo size='big'/>
      </Link>
      <div className={styles['login']}>
        <FontAwesomeIcon icon={solid('user')}/>
        <button className={styles['login__cta']} onClick={deployLogin}>Log in</button>
    </div>
      <div className={styles['login']}>
        <FontAwesomeIcon icon={solid('user-group')}/>
        <button className={styles['login__cta']} onClick={deployRegister}>Register</button>
      </div>
    <FontAwesomeIcon icon={solid('bars')} size='2x' className={styles['burger-icon']}
    onClick={deployMenu}/>
    </header>
    <main className={styles['main']}>
    <h1 className={styles['title']}>{props.title}</h1>
      {props.children}
    </main>
    </>
  )
}

export default Template