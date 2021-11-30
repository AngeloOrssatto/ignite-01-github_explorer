import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss'

//https://api.github.com/users/AngeloOrssatto/repos

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/AngeloOrssatto/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []) //array vazio executa uma vez assim q renderizar o componente
           //se passar sem o segundo parametro => loop

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                        return ( <RepositoryItem key={repository.name} repository={repository}/>)
                    }
                )}
            </ul>
        </section>
    )
}