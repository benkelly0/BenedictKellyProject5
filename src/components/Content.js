// NODE MODULES
import React, { Component } from 'react';

// COMPONENT FOR RECEIVING PROPS FROM APP AND POPULATING CONTENT FROM MAPPED THROUGH ARRAY
class Content extends Component {
    render() {
        return (
            <div className='wrapper'>
                {this.props.hero.map(hero => (
                    <div className='heroContent flex' key={hero.id}>
                        <figure className='heroPic'>
                            <img src={hero.image.url} alt={`Action shot of ${hero.name}`}/>
                        </figure>
                        <div className='heroInfo'>
                            <h2>{hero.name}</h2>
                            <ul>
                                <li>Real Name: <span>{hero.biography["full-name"]}</span></li>
                                <li>Race: <span>{hero.appearance.race}</span></li>
                                <li>Gender: <span>{hero.appearance.gender}</span></li>
                                <li>Place of Birth: <span>{hero.biography["place-of-birth"]}</span></li>
                                <li>Good or Bad: <span>{hero.biography.alignment}</span></li>
                                <li>Alter Egos: <span>{hero.biography["alter-egos"]}</span></li>
                                <li>Personal connections: <span>{hero.connections.relatives}</span></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content;