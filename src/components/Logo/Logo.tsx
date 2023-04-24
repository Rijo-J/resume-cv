import React from 'react';

const logoDescription = 'Hello I\'m John Doe';

export const Logo = () => (
  <a href="/" className="logo">
    <img src={'https://www.svgrepo.com/show/424896/react-logo-programming-2.svg'}
      height={50} alt={logoDescription} className="logo__image" />
  </a>
);
