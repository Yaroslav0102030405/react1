import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children, backgroundColor = 'success' }) => {
  return (
    <div className={backgroundColor}>
      <h1>Привіт!</h1>
      {/* рендер розмітки по условію */}
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
};

Panel.protoTypes = {
  title: '',
  backgroundColor: 'success',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['success', 'error']),
  children: PropTypes.node,
};

export default Panel;
