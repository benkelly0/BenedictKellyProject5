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
                                <li>Real Name: <em>{hero.biography["full-name"]}</em></li>
                                <li>Race: <em>{hero.appearance.race}</em></li>
                                <li>Gender: <em>{hero.appearance.gender}</em></li>
                                <li>Place of Birth: <em>{hero.biography["place-of-birth"]}</em></li>
                                <li>Good or Bad: <em>{hero.biography.alignment}</em></li>
                                <li>Alter Egos: <em>{hero.biography["alter-egos"]}</em></li>
                                <li>Personal connections: <em>{hero.connections.relatives}</em></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content;