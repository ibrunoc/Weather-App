/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

function Card({ data }) {
  const {
    location,
    current,
  } = data;

  return (
    <div className="bg-[#1e1e1e] p-6 mb-10 mt-20 rounded-lg shadow-md min-w-[220px] w-[90%] sm:mt-0 max-w-[380px] ">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-50">{location.name}</span>
        <span className="text-sm font-medium text-slate-200">{`${location.region}, `}</span>
        <span className="text-sm font-bold text-slate-50">{location.country}</span>
      </div>

      <div className="font-bold text-slate-700 flex mt-4 mb-4 justify-center">
        <span className="text-8xl text-rose-700">{current.temp_c}</span>
        <span className="text-3xl mt-2 text-rose-700">ºC</span>
      </div>

      <div className="text-center flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="Icon Temperatura" />
        <span className="font-medium text-slate-50">{current.condition.text}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  data: PropTypes.object,
}.isRequired;
