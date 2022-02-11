import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export default function films(){
    const [films, setFilms] = useState([]);

    useEffect(() => {
        api.get('films')
        .then(response => setFilms(response.data.results))
        }, []);
        //console.log("chega aqui",films);
    return (
        <>
        <section >
        <h1>Os filmes da franquia são:</h1>
        <ul>       
            {films.map(films => {
                return (<li key={films.title}>
                    <h2>
                        <strong>Título:</strong>
                        {films.title}
                    </h2>
                </li>)
                
            })}        
        </ul>
        </section>
        </>
  );
}