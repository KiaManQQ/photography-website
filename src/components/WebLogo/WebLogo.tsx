import React, { FC } from "react";
import styles from './_styles.module.scss';
import cn from 'classnames';
import logo from '../assets/img/logo.png';



type logoSize = 'big' | 'small' | 'smaller';

interface logoSizeProps
{
  size: logoSize;
  className?: string;
}

export const WebLogo:FC<logoSizeProps> = (props) => 
{
  return (
    <img src={logo} alt='web-logo' className={cn (styles['logo'], [styles[`logo--${props.size}`] ])}/>
  )
}