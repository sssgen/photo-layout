import React from 'react';
import './Price.scss';

const Price = () => {
    return (
        <div className='container'>
            <div className='priceBlock'>
                <h2>Price</h2>
                <div className='priceConstructor'>
                    <div className='size'>
                        <h3>Size</h3>
                    </div>
                    <div className='price'>
                        <h3>Price</h3>
                    </div>
                    <div className='count'>
                        <h3>Count</h3>
                    </div>
                    <div className='cost'>
                        <h3>Cost</h3>
                    </div>
                    <div className='lamination'>
                        <h3>Lamination</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;