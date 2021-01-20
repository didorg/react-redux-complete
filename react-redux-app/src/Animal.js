import React from 'react';

const Animals = ({ animals }) => {
    const animalList = animals.map(animal => {
        if (animal.age > 10) {
            return (
                <div className="animal" key={animal.id}>
                    <div>Name: {animal.name}</div>
                    <div>Age: {animal.age}</div>
                    <div>Eyes: {animal.eyes}</div>
                </div>
            )

        } else {
            return null
        }
    })

    return (
        <div className="person-list">
            {animalList}
        </div>
    )

}

export default Animals
