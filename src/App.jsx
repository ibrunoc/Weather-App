import React, { useState } from 'react';
import fetchData from './Services/api';
import initialData from './Halpers/initialData';
import Card from './Components/Card/Card';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(initialData);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchData(city).then((response) => {
      setData(response);
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">
      <Card data={data} />

      <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative p-0 block w-auto justify-center">
        <input
          type="text"
          placeholder="Cidade"
          className="p-3 rounded-lg outline-none w-full sm:max-w-[300px] flex-1"
          value={city}
          onChange={({ target: { value } }) => setCity(value)}
        />
        <button
          type="submit"
          className="bg-rose-700 p-3 rounded-lg ml-3 text-white font-bold"
        >
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default App;
