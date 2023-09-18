import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../components/UI/MainButton/MainButton';
import './Landing.scss';

const Landing = () => {
    return (
        <div className='landingWrapper'>
            <div className='header'>
                <div className='headerSlider' />  
                    <div className="headerInfo">
                        <h1>Photo printing service</h1>
                        <p>Share bright moments with loved ones</p>
                        <Link to='contact'><MainButton>Contact</MainButton></Link>
                    </div>
            </div>

                <div className='landingServicesBlocks'>
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
                            <div className='polaroidImage'>
                            </div>
                            <h3>Polaroid photos</h3>
                            <div className='polaroidComponents'>
                                <div className='pPolaroid'>
                                <p>13x13cm</p>
                                <p>13x13cm</p>
                                <p>13x13cm</p>
                                </div>
                                <div className='buttonsPolaroid'>
                                    <button className='buttonPricePolaroid'>Price</button>
                                    <button className='buttonOrderPolaroid'>Order</button>
                            </div></div>

    
                            
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Landing;
