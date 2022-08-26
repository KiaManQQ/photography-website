import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import styles from './_social-media.module.scss'
import cn from 'classnames'

interface iconSize{
  size?: SizeProp;
}

export const SocialMedia:FC<iconSize> = (props) => {
  return (
    <div className={styles['social-media']}>

      <div className={styles['social-media__icon-container']}>
        <FontAwesomeIcon icon={brands('twitter')} size={props.size} 
        className={cn(styles['social-media__icon'], [styles['social-media__icon--twitter']])}/>
      </div>

      <div className={styles['social-media__icon-container']}>
        <FontAwesomeIcon icon={brands('linkedin')} size={props.size} 
        className={cn(styles['social-media__icon'], [styles['social-media__icon--linkedin']])}/>
      </div>

      <div className={styles['social-media__icon-container']}>
        <FontAwesomeIcon icon={brands('google')} size={props.size} 
        className={cn(styles['social-media__icon'], [styles['social-media__icon--google']])}/>
      </div>

    </div>
  )
}