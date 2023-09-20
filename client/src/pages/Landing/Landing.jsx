import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../components/UI/MainButton/MainButton';
import bigFormat from '../../images/bigFormat.png';
import canvaPhotos from '../../images/canvaPhotos.png';
import photoCards from '../../images/photoCards.png';
import polaroidPhotos from '../../images/polaroidPhotos.png';
import squarePhotos from '../../images/squarePhotos.jpg';
import './Landing.scss';

function Landing() {
    return (
        <div className='landingWrapper'>
            <div className='header'>
                <div className='headerSlider'>
                    <div className='headerInfo'>
                        <h1>Photo printing service</h1>
                        <p>Share bright moments with loved ones</p>
                        <Link to='contact'><MainButton>Contact</MainButton></Link>
                    </div>
                </div>
            </div>

            <div className='ourServices'>
                <h2 className='servicesHeader'>Our services</h2>
                <div className='topServices'>
                    <div className='squareService topService'>
                        <img src={squarePhotos} alt='square photos' className='serviceImage topServiceImage' />
                        <h3>Square photos</h3>
                        <div className='squareFlex topServiceFlex'>
                            <div className='squarePhotoSize servicesPhotoSize'>
                                <p>10x10cm</p>
                                <p>10x13cm</p>
                                <p>15x15cm</p>
                            </div>
                            <div className='polaroidButtons servicesButtons'>
                                <button className='squarePrice priceButton servicesButton'>Price</button>
                                <button className='squareOrder orderButton servicesButton'>Order</button>
                            </div>
                        </div>
                    </div>

                    <div className='polaroidService topService'>
                        <img src={polaroidPhotos} alt='polaroid photos' className='serviceImage topServiceImage' />
                        <h3>Polaroid Photos</h3>
                        <div className='polaroidFlex topServiceFlex'>
                            <div className='polaroidPhotoSize servicesPhotoSize'>
                                <p>13x13cm</p>
                                <p>13x13cm</p>
                                <p>13x13cm</p>
                            </div>
                            <div className='polaroidButtons servicesButtons'>
                                <button className='polaroidPrice priceButton servicesButton'>Price</button>
                                <button className='polaroidOrder orderButton servicesButton'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottomServices'>
                    <div className='photoCards bottomService'>
                        <img src={photoCards} alt='cards' className='serviceImage' />
                        <h3>Photo cards</h3>
                        <div className='cardsFlex bottomServiceFlex'>
                            <div className='cardsSize servicesPhotoSize'>
                                <p>14x14cm</p>
                                <p>14x14cm</p>
                                <p>14x14cm</p>
                            </div>
                            <div className='cardsButtons servicesButtons'>
                                <button className='cardsPrice priceButton servicesButton'>Price</button>
                                <button className='cardsOrder orderButton servicesButton'>Order</button>
                            </div>
                        </div>
                    </div>

                    <div className='bigFormat bottomService'>
                        <img src={bigFormat} alt='big format' className='serviceImage' />
                        <h3>Big format</h3>
                        <div className='bigFormatFlex bottomServiceFlex'>
                            <div className='bigFormatSize servicesPhotoSize'>
                                <p>10x10cm</p>
                                <p>10x13cm</p>
                                <p>15x15cm</p>
                             </div>
                             <div className='bigFormatButtons servicesButtons'>
                                <button className='bigFormatPrice priceButton servicesButton'>Price</button>
                                <button className='bigFormatOrder orderButton servicesButton'>Order</button>
                             </div>
                        </div>
                    </div>

                    <div className='canvaPhotos bottomService'>
                        <img src={canvaPhotos} alt='canva' className='serviceImage' />
                        <h3>Canva photos</h3>
                        <div className='canvaFlex bottomServiceFlex'>
                            <div className='canvaSize servicesPhotoSize'>
                                <p>10x10cm</p>
                                <p>10x13cm</p>
                                <p>15x15cm</p>
                            </div>
                            <div className='canvaButtons servicesButtons'>
                                <button className='canvaPrice priceButton servicesButton'>Price</button>
                                <button className='canvaOrder orderButton servicesButton'>Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
