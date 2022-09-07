import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from './_social-media.module.scss';

interface iconSize
{
  size?: SizeProp;
  extended?: boolean;
}

export const SocialMedia:FC<iconSize> = (props) => 
{
  const { extended } = props;
  
  return (
      <div className={styles['social-media']}>

        <FontAwesomeIcon icon={brands('twitter')} size={props.size} 
        className={(!extended) ? styles['social-media__icon'] : styles['social-media__icon-extended']}/>

      <FontAwesomeIcon icon={brands('linkedin')} size={props.size} 
        className={(!extended) ? styles['social-media__icon'] : styles['social-media__icon-extended']}/>

   
      <FontAwesomeIcon icon={brands('google')} size={props.size} 
        className={(!extended) ? styles['social-media__icon'] : styles['social-media__icon-extended']}/>
    </div>
  )
}