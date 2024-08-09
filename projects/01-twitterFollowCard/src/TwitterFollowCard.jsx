import { useState } from "react"; //* Se importa para implementar estados
export function TwitterFollowCard ({children, userName}){ //* Se exporta la tarjeta y pide los datos necesarios

    const [isFollowing , setIsFollowing] = useState(false); //*Se usa el useState para comenzar a cambiar estados, primera posicion es el valor del estado, la segunda posicion es como se va a actualizar el estado

    const handleClick  = () =>{ //* Funcion que da la vuelta al estado
        setIsFollowing(!isFollowing);
    }

    const text = isFollowing ? 'Following' : 'Follow';  //* se utiliza como un "if" pero mucho mas simplificado

    const buttonClassname = isFollowing //* Repetimos el if pero esta vez para agregar una className
    ? 'tw-followCard-button is-Following'
    : 'tw-followCard-button is-unfollow';

    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img src={`https://unavatar.io/x/${userName}`} alt="Users avatar" className='tw-followCard-avatar' />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUn'>@{userName}</span>    
            </div> 
        </header>

        <aside>
            <button className={buttonClassname} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-StopFollow">Unfollow</span>
            </button>
        </aside>
    </article>
    )
}