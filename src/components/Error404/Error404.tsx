import React from 'react';
import './Error404.scss';

const Error404 = () => {
  return (
    <main>
      <div className='element-404'>
        <h1 className='title-404' style={{ textAlign: "center" }}>404 - Page Not Found</h1>
        <img className='img-404' src="/Error404.jpg" alt="Page not found" />
        <p className='message-404'>YOU TOOK A WRONG TURN</p>
      </div>
    </main>
  );
};

export default Error404;