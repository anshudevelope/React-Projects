import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card } from '../Components/Card';

const Axiosapi = () => {

    const [data, setData] = useState([]);


    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

    const getMovieData = async () => {
        try {
            const res = await axios.get(API);
            // console.log(res.data.Search);
            setData(res.data.Search);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        getMovieData();
    })

  return (
    
      <ul className="container grid grid-four--cols">
        {
            data.map((curElem) => {                                
                return <Card key={curElem.imdbID} movieData = {curElem} />
            })
        }
      </ul>
    
  )
}

export default Axiosapi
