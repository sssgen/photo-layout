import React from 'react';
import { Link } from 'react-router-dom';
import MainButton from '../../components/UI/MainButton/MainButton';
import bigFormat from '../../images/bigFormat.png';
import canvaPhotos from '../../images/canvaPhotos.png';
import comfortIcon from '../../images/comfortIcon.svg';
import deliveryIcon from '../../images/deliveryIcon.svg';
import downArrow from '../../images/downArrow.svg';
import guaranteeIcon from '../../images/guaranteeIcon.svg';
import iconReceive from '../../images/iconReceive.svg';
import iconSelect from '../../images/iconSelect.svg';
import iconUpload from '../../images/iconUpload.svg';
import operativelyIcon from '../../images/operativelyIcon.svg';
import payIcon from '../../images/payIcon.svg';
import photoCards from '../../images/photoCards.png';
import polaroidPhotos from '../../images/polaroidPhotos.png';
import qualityIcon from '../../images/qualityIcon.svg';
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

            <div className='workProcedureWrapper'>
                <div className='workProcedure'>
                    <div className='howItWorksText'>
                        <h3>How it works?</h3>
                        <p>Brief and clear explanation of our work with clients</p>
                        <img src={downArrow} alt='arrow down' />
                    </div>
                    <div className='workSteps'>
                        <div className='selectStep workStep'>
                            <img src={iconSelect} alt='icon select' />
                            <div className='workStepText'>
                                <h4>1. Select products</h4>
                                <p>Select products you are interested in</p>
                            </div>
                        </div>
                        <div className='uploadStep workStep'>
                            <img src={iconUpload} alt='icon upload' />
                            <div className='workStepText'>
                                <h4>2. Upload photos</h4>
                                <p>Upload the photos you need to print</p>
                            </div>
                        </div>
                        <div className='receiveStep workStep'>
                            <img src={iconReceive} alt='icon receive' />
                            <div className='workStepText'>
                                <h4>3. Receive it and only then pay</h4>
                                <p>Pay for your order after receiving it</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='benefitsWrapper'>
                <div className='benefits'>
                    <h3>Benefits</h3>
                    <div className='benefitsFlex'>
                        <div className='comfortableBenefit benefit'>
                            <img src={comfortIcon} alt='comfort logo' className='benefitIcon' />
                            <h5 className='benefitHeading'>Comfort</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='qualityBenefit benefit'>
                            <img src={qualityIcon} alt='quality logo' className='benefitIcon' />
                            <h5 className='benefitHeading'>Quality</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='payBenefit benefit'>
                            <img src={payIcon} alt='pay logo' className='benefitIcon' />
                            <h5 className='benefitHeading'>Pay</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='operativelyBenefit benefit'>
                            <img src={operativelyIcon} alt='operatively logo' className='benefitIcon' />
                            <h5 className='benefitHeading'>Operatively</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='guaranteeBenefit benefit'>
                            <img src={guaranteeIcon} alt='guarantee logo' className='benefitIcon' />
                            <h5 className='benefitHeading'>Guarantee</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='deliveryBenefit benefit'>
                            <img src={deliveryIcon} alt='delivery logo' className='benefitIcon' />
                            <h5 className='benefitHeading' >Delivery</h5>
                            <p className='benefitInfo'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutUsWrapper'>
                <div className='aboutUsHeading'>
                <h4>About Us</h4>
                </div>
                <div className='aboutUsInfo'>
                <h5><span className='aboutUsSpan'>PrinterKyiv - </span>photo printing service in Kyiv</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices urna sit id tortor amet amet, eu. Potenti suscipit leo nulla sodales habitant in eget gravida. Urna, vitae pulvinar lorem lorem lacus, sed.</p>
                </div>
            </div>
        </div>
    );
}

export default Landing;
