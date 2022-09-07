import React from 'react';
import Template from '../../components/Template/Template';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const Home = () => 
{
  return (
    <Template 
    title='Home'
    key={1}>
  <ResponsiveMasonry columnsCountBreakPoints={{400: 1, 750: 2, 900: 4}}>
    <Masonry gutter='1rem'>
      <img src={require('../../components/assets/img/gallery/1.webp')} alt='imagen de galería 1'/>
      <img src={require('../../components/assets/img/gallery/2.webp')} alt='imagen de galería 2'/>
      <img src={require('../../components/assets/img/gallery/3.webp')} alt='imagen de galería 3'/>
      <img src={require('../../components/assets/img/gallery/4.webp')} alt='imagen de galería 4'/>
      <img src={require('../../components/assets/img/gallery/5.webp')} alt='imagen de galería 5'/>
      <img src={require('../../components/assets/img/gallery/6.webp')} alt='imagen de galería 6'/>
      <img src={require('../../components/assets/img/gallery/7.webp')} alt='imagen de galería 7'/>
      <img src={require('../../components/assets/img/gallery/8.webp')} alt='imagen de galería 8'/>
      <img src={require('../../components/assets/img/gallery/9.webp')} alt='imagen de galería 9'/>
      <img src={require('../../components/assets/img/gallery/1.webp')} alt='imagen de galería 1'/>
      <img src={require('../../components/assets/img/gallery/2.webp')} alt='imagen de galería 2'/>
      <img src={require('../../components/assets/img/gallery/3.webp')} alt='imagen de galería 3'/>
      <img src={require('../../components/assets/img/gallery/6.webp')} alt='imagen de galería 6'/>
      <img src={require('../../components/assets/img/gallery/7.webp')} alt='imagen de galería 7'/>
      <img src={require('../../components/assets/img/gallery/1.webp')} alt='imagen de galería 1'/>
      <img src={require('../../components/assets/img/gallery/2.webp')} alt='imagen de galería 2'/>
    </Masonry>
  </ResponsiveMasonry>
    </Template>
    )
}


export default Home;