import { useEffect, useState } from 'react';
import apiResponseType from '../types/ApiResponseType';
import axios from 'axios';
import 'bootstrap';

export default function InitialPage() {
  const [apiResponse, setApiResponse] = useState<apiResponseType[]>();

  useEffect(() => {
    getApiResponse();
  }, []);

  const getApiResponse = async (): Promise<void> => {
    try {
      const response = await axios.get(
        'https://api.mercadolibre.com/sites/MLB/search?q=computador',
      );
      setApiResponse(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul>
        {apiResponse &&
          apiResponse.map((e: apiResponseType) => (
            <li
              className="
              max-w-sm rounded overflow-hidden shadow-md text-center
             border-amber-400 border p-4 flex flex-col items-center justify-around
            shadow-amber-400 w-22 h-60 m-3"
              key={e.id}
            >
              <img className="w-20" src={e.thumbnail} alt="" />
              <div className="px-6 py-4">
                <p className="text-base">{e.title}</p>
                <h6 className="font-bold text-xl mb-2 text-amber-400">R$ {e.price.toFixed(2)}</h6>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
