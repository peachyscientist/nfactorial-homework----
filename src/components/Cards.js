import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>How It Works?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
    
              text='Show your best skills& Upload your CV'
              label='1'
    
            />
            <CardItem
              text='Search for the best match'
              label='2'
            
            />
            <CardItem
              text='Find the best opportunity'
              label='3'
              
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;