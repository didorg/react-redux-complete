import React from 'react';

const Pets = ({ pets, deletePet }) => {
    const petList = pets.map(pet => {
        if (pet.age > 10) {
            return (
                <div className="pet" key={pet.id}>
                    <div>Pet: {pet.name}</div>
                    <div>Age: {pet.age}</div>
                    <div>Eyes: {pet.eyes}</div>
                    <button onClick={() => { deletePet(pet.id) }}>Delete Pet </button>
                </div>
            )

        } else {
            return null
        }
    })

    return (
        <div className="pet-list">
            {petList}
        </div>
    )

}

export default Pets
