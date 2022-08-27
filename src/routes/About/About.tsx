import React, { FC, Key, useState } from 'react'
import Template from '../../components/Template/Template'
import styles from './_about.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface SlideProps{
  imgSrc: string
  title: string
  text: string
  show: number
  value: number
}

const Slide:FC<SlideProps> = (props) => {
  return(
    <>
      <div className={(props.show === props.value) ? cn(styles.about__img, [styles.show]) : styles['about__img']}>
          <img src={require(`../../components/assets/img/${props.imgSrc}`)} alt="about-img-1" />
      </div>
      <div className={(props.show === props.value) ? cn(styles.about__text, [styles.show]) : styles['about__text']}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </>
  )
}


const About = () =>{

  const [show, setShow] = useState(1)

  const prev = () => {
    (show === 1) ? setShow(3) :
    setShow((prevShow) => prevShow - 1)
  }
  const next = () => {
    (show === 3) ? setShow(1) :
    setShow((prevShow) => prevShow + 1)
  }


  return (
    <Template
    title='About'
    key={2}>
    <div className={styles['about-container']}>

      <div className={styles['about']}>

      <Slide imgSrc='about.jpg' 
      title='About Photography Web' 
      text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum esse eius asperiores ipsum voluptas assumenda quia, veritatis omnis, porro necessitatibus deleniti est illo perferendis aspernatur a odio impedit quos quo!'
      key={1}
      show={show}
      value={1}/>

      <Slide 
      imgSrc='about2.jpg'
      title='Our goal'
      text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempora non eos repellat modi fuga veritatis omnis? Nisi a tempora quasi, expedita facere explicabo cum, sapiente, dignissimos animi consequuntur voluptate.'
      key={2}
      value={2}
      show={show}/>

      <Slide 
      imgSrc='about3.jpg'
      title='Our partners'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel dolorum nisi reprehenderit quam, eligendi accusantium. Explicabo, tenetur magnam quam sunt nihil nobis sapiente aut consectetur distinctio maxime quos veritatis?'
      key={3}
      value={3}
      show={show}/>

      </div>
      <div className={styles['controls']}>
        <FontAwesomeIcon icon={solid('circle-chevron-left')} onClick={prev}/>
        <FontAwesomeIcon icon={solid('circle-chevron-right')} onClick={next}/>
      </div>
    </div>
    </Template>
    )
}

export default About