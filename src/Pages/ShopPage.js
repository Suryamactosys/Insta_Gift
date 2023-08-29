import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShopPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // API endpoint URL
        const apiUrl = 'https://fakestoreapi.com/products';

        // Fetch data from the API using axios
        axios.get(apiUrl)
            .then(response => {
                // Process the data as needed
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='container' style={{paddingTop:'100px'}}>
            {/* Render the data */}
            {data.map(item => (
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{paddingTop:'10px'}}>
                    <div className="col">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..." height={300} width={200} />
                            <div className="card-body">
                                <h5 className="card-title">Price:{item.price}₹</h5>
                                <p className="card-text" style={{fontSize:'16px'}}>{item.title}</p>
                                <button type="button" className='btn btn-primary'>Add Card</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..." height={300} width={200} />
                            <div className="card-body">
                                <h5 className="card-title">Price:{item.price}₹</h5>
                                <p className="card-text">{item.title}</p>
                                <button type="button" className='btn btn-primary'>Add Card</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..." height={300} width={200} />
                            <div className="card-body">
                                <h5 className="card-title">Price:{item.price}₹</h5>
                                <p className="card-text">{item.title}</p>
                                <button type="button" className='btn btn-primary'>Add Card</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShopPage;