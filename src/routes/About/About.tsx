import React, { Component, FC, useState } from 'react'
import Template from '../../components/Template/Template'
import styles from './_about.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

interface SlideProps{
  imgSrc: string
  title: string
  text: string
  show: boolean
}

const Slide:FC<SlideProps> = (props) => {
  const [showElement, setShowElement] = useState('')

  return(
    <>
      <div className={styles[`about__img`]}>
          <img src={require(`../../components/assets/img/${props.imgSrc}`)} alt="about-img-1" />
      </div>
        <div className={styles[`about__text${showElement}`]}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </>
  )
}

const slides = [
  {
    key: 1,
    imgSrc: 'about.jpg',
    title:'About Photography Web',
    text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae similique asperiores sunt pariatur tempore repellat dolor adipisci sit odit aliquid! Atque quos ratione enim debitis, tenetur sequi excepturi quidem non!',
    show: true
   
  },
  {
    key: 2,
    imgSrc: 'about2.jpg',
    title: 'Our goal',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit natus earum architecto nesciunt dolorum, animi numquam doloribus quo voluptatum qui nemo esse ducimus quidem dolore hic sequi labore ad. Nobis?',
    show: false
  },
  {
    key: 3,
    imgSrc: 'about2.jpg',
    title: 'Our partners',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, esse totam in pariatur corrupti assumenda blanditiis alias atque maxime perspiciatis dolorum soluta eius ut officia repellat molestiae dolores laudantium? Molestias!',
    show: false
  }
]

const allSlideElements = slides.map(element => {
  return(
    <Slide
    key = {element.key}
    imgSrc = {element.imgSrc}
    text = {element.text}
    title = {element.title}
    show = {element.show}
    />
  )
})

const content = (
  <>
  <div className={styles['about']}>
    {allSlideElements}
  </div>

    <div className={styles['controls']}>
      <FontAwesomeIcon icon={solid('circle-chevron-left')} />
      <FontAwesomeIcon icon={solid('circle-chevron-right')}/>
    </div>
  </>
)

const About = () =>{
  return (
    <Template
    title='About' 
    content={content}/>
    )
}

export default About