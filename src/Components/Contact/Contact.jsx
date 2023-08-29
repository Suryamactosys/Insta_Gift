import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <div className="row">
                    <div className="col-md 5">
                        {/* <img src="/Assets/images/contact.png" alt="Contact Us" height="300px" width="300px" /> */}
                        <h4>CONTACT US</h4>
                        <h1>How Can I Help You?</h1>
                        <p>Our service helps you live smarter, giving you time to focus on<br/> what's most important. Our skilled professionals go above<br/> and beyond on every job.</p>
                        <div className="mb-3">
                            <span><i className="bi bi-telephone"></i><input type="text"  placeholder="+123 - 433 - 123" /></span>
                        </div>
                        <div className="mb-3">
                        <i className="bi bi-envelope"></i><input type="text"  placeholder="hello@company.com" />
                        </div>
                        <div className="mb-3">
                        <i className="bi bi-geo-alt"></i><input type="text"  placeholder="JKT, Indonesia" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Full name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required />
                            </div>
                            <div className="mb-3">
                                <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Email address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required />
                            </div>
                            <div className="mb-3">
                                <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Subject" 
                                value={subject} 
                                required 
                                onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <textarea 
                                className="form-control" rows="5" 
                                value={text} 
                                onChange={(e) => setText(e.target.value)}>
                                </textarea>
                            </div>
                            <div className='d-grid'>
                            <button type="submit" className="btn btn-danger">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Contact;