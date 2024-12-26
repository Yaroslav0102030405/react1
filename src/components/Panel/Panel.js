import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children }) => {
  return (
    <section>
      <h1>Привіт!</h1>
      {/* рендер розмітки по условію */}
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Panel.protoTypes = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
