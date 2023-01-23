import React from 'react';


export default function Paginado({ zapasPerPage, allZapas, paginado }) {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(allZapas / zapasPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <nav>
            <ul className='list'>
                {
                    pageNumber && pageNumber.map(num => (
                        <button className='num' key={num}
                            onClick={() => paginado(num)}>{num}</button>
                    ))}
            </ul>
        </nav>
      

    )
}

