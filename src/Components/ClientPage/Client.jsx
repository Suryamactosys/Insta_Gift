import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Client.css';
import client_img from '../../Assets/images/client-img.svg';


const Client = () => {
    return (
       <>
       <div className='row' style={{ textAlign: 'center'}}>
                <p style={{color: 'red'}}>HAPPY CLIENTS</p>
                <h3>What Our Client Say’s</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Arcu ac sed id <br/>
                    interdum tortor. Nisl ipsum dictumst dictum aliquet.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div style={{textAlign:'center'}}>
                                <img src={client_img} alt="img"/>
                                <br/>
                                <span className='span'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
                                </div>
                                <p className="card-text">"i love that i can spend more time with my husband, children and family,   and less time stressing over getting  house clean"</p>
                                <b>Nazmi Javier</b>
                                <p>Househusbaand</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            <div style={{textAlign:'center'}}>
                                <img src={client_img} alt="img"/>
                                <br/>
                                <span className='span'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
                                </div>
                                <p className="card-text">"i love that i can spend more time with my husband, children and family,   and less time stressing over getting  house clean"</p>
                                <b>Nazmi Javier</b>
                                <p>Househusbaand</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                            <div style={{textAlign:'center'}}>
                                <img src={client_img} alt="img"/>
                                <br/>
                                <span className='span'><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></span>
                                </div>
                                <p className="card-text">"i love that i can spend more time with my husband, children and family,   and less time stressing over getting  house clean"</p>
                                <b>Nazmi Javier</b>
                                <p>Househusbaand</p>
                            </div>
                        </div>
                    </div>
                </div>
       </>
    )
}

export default Client;