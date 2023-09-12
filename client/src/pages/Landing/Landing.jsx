import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

const Landing = () => {
    return (
        <div className='landingWrapper'>
            <div className='header'>
                <div className="headerInfo">
                    <h1>Photo printing service</h1>
                    <p>Share bright moments with loved ones</p>
                    <Link to='contact'><button>Contact</button></Link>
                </div>
            </div>

                <div className='langingServicesBlocks'>
                    <div className='servicesHeader'>
                            <h1>Our services</h1>
                    </div>
                    <div className='landingServices'>
                        
                        <div className='squarePhotos'>
                            
                            
                            <div className='squareInfo'>
                                <div className='squareImage'>
                                
                                </div>
                                <h3>Square photos</h3>
                                <div className='squareComponents'>
                                    <p>
                                    10x10cm<br />
                                    10x13cm<br />
                                    10x15cm<br />
                                    </p>
                                    <div className='buttonsSquare'>
                                    <button className='buttonPriceSquare'>Price</button>
                                    <button className='buttonOrderSquare'>Order</button>
                                    </div>
                                </div>
                                
                                    
                            </div>
                        </div>

                        <div className='polaroidPhotos'>

                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Landing;
