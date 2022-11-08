import React from 'react';

const Service = ({service}) => {
   //const {service} = props

   const {name, price, desc, img} = service;

   return (
      <div>
         <img src={img} alt="" />
         <h3>{name}</h3>
         <h5>price: {price}</h5>
         <p>{desc}</p>
      </div>
   );
};

export default Service;