import './App.css' //*Importamos el estilo
import { TwitterFollowCard } from './TwitterFollowCard' //*Importamos las tarjetas de twitter
 
export function App() {
    return(
        <section className='App'> 

        <TwitterFollowCard userName={'_Raggis_'}> 
        Bryan Andres Lopez Arango 
        </TwitterFollowCard>

        <TwitterFollowCard userName={'TheOdinProject'}>
            TheOdinProject
        </TwitterFollowCard>

        <TwitterFollowCard userName={'freeCodeCamp'}>
            freeCodeCamp
        </TwitterFollowCard>
        </section>
    )
}