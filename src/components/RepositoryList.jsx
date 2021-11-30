import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: "unform2",
    description: "Forms in React", 
    link: "https://google.com"
}

export function RepositoryList() {
    return(
        <section>
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem 
                    repository={repository} 
                />
                <RepositoryItem 
                    repository={repository} 
                />
                <RepositoryItem 
                    repository={repository} 
                />
                
            </ul>
        </section>
    )
}