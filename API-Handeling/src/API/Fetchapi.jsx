import React, { useEffect, useState } from 'react'

const Fetchapi = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {

      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      // console.log(data);
      setData(data);

    } catch (error) {

      console.log(error);

    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='container-fluid'>
      <div className="row m-5 d-flex flex-row">
        <h2 className='text-center p-5'>API Handling Using Fetch()</h2>
        {data ?
          data.map((crrvalue) => {
            // console.log(crrvalue);
            return <div className="col-md-4">
              <div className="card border bg-secondary bg-gradient text-white p-5 ">
                <div className="card-body">
                  <h4>Post Id: {crrvalue.id}</h4>
                  <h5 className="card-title">Post Title: {crrvalue.title}</h5>
                  <p className="card-text">Post Body: {crrvalue.body}</p>
                </div>
              </div>
            </div>
          
        })
        : <p>Data Not Found</p>}
    </div >
    </div>
  )
}

export default Fetchapi
