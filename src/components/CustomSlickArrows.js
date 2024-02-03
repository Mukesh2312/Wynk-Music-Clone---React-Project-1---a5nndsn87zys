import React from 'react'

const CustomSlickArrows = ({ onClick, direction }) => {
    return (
        <div onClick={onClick} className={`custom-arrows custom-${direction}`}>
            {direction === 'next' ? <span>&#8594;</span> : <span>&#8592;</span>}
        </div>
    )
}

export default CustomSlickArrows;


