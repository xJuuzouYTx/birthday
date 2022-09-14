import React, { useContext } from 'react';
import PersonList from '@containers/PersonList';
import '@styles/Home.scss';
import { TimePicker } from '@components/TimePicker';

const Home = () => {

  return (
    <div className='Home'>
      
        <div className='birthday'>
          <TimePicker />
          <PersonList />
        </div>
      
    </div>
  )
}

export default Home;