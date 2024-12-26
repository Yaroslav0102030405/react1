import React from 'react';
import PropTypes from 'prop-types';
// import Card from './Card';
import image1 from '../../image/1.webp';

const CardsList = ({ cards }) => (
  <ul>
    {cards.map(
      ({ id, url, title, price, author: { aUrl, aTag }, quantity }) => (
        <li key={id}>
          <article>
            <img src={url} alt={title} width="400" />
            <h2>{title}</h2>
            <p>
              Автор: <a href={aUrl}>{aTag}</a>
            </p>
            <p>Цена: {price}кредитов</p>
            <p>Доступність: {quantity < 10 ? 'Закінчується' : 'є в налічії'}</p>
            <button type="button">Добавити до корзини</button>
          </article>
        </li>
      )
    )}
  </ul>
);

CardsList.defaultProps = {
  url: image1,
};

CardsList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      // необов'язковий
      url: PropTypes.string,
      // обязательний
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      aUrl: PropTypes.string.isRequired,
      aTag: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default CardsList;
