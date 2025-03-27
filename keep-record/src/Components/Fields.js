import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const Fields = ({ name, email, index }) => {
    return (
        <div className='data-value'>
            <h4>{name}</h4>
            <h4>{email}</h4>
            <IconButton color="primary" aria-label="delete" size="large">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default Fields
