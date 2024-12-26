// import React from 'react';
// import PropTypes from 'prop-types';
// // как додати картинку треба імпортувати та  записати в зміну
// import image1 from '../../image/1.webp';

// // console.log(image1);

// const Card = ({ url, title, price, tag, profileUrl, quantity }) => {
//   return (
//     <section>
//       <h2>Карточки</h2>
//       <article>
//         <img src={url} alt={title} width="400" />
//         <h2>{title}</h2>
//         <p>
//           Автор: <a href={profileUrl}>{tag}</a>
//         </p>
//         <p>Цена: {price}кредитов</p>
//         <p>Доступність: {quantity < 10 ? 'Закінчується' : 'є в налічії'}</p>
//         <button type="button">Добавити до корзини</button>
//       </article>
//     </section>
//   );
// };

// Card.defaultProps = {
//   url: image1,
// };

// Card.propTypes = {
//   // необов'язковий
//   url: PropTypes.string,
//   // обязательний
//   title: PropTypes.string.isRequired,
//   profileUrl: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   quantity: PropTypes.number.isRequired,
// };

// export default Card;
