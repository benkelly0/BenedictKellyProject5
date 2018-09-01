import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log(this.props.hero);
        return (
            <div className={'wrapper'}>
                {this.props.hero.map(hero => (
                    <div key={hero.id}>
                        {console.log(hero.name)
                        }
                        <h2>{hero.name}</h2>
                        <p></p>
                        <figure>
                            <img src={hero.image.url} alt=""/>
                        </figure>
                    </div>
                ))}
            </div>
        )
    }
}

export default Content;