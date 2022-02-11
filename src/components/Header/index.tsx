import styles from './styles.module.scss';
import { useEffect } from 'react';
import { api } from '../../services/api';

export function Header() {
    useEffect(() => {
        api.get('films')
        .then(response => console.log(response.data))
    }, []);

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img  src="/images/logo.svg" alt="StarWars" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Films</a>
                    <a>Planets</a>
                    <a>People</a>
                    <a>Starships</a>
                    <a>Species</a>
                    <a>Vehicles</a>
                    
                </nav>
            </div>
        </header>
    );
}