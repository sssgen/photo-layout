import React from 'react';
import './Price.scss';
import TableRow from '../../components/TableRow/TableRow';

const Price = () => {

    return (
        <div className='container'>
            <div className='priceBlock'>
                <h2>Price</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Cost</th>
                            <th>Count</th>
                            <th>Overall</th>
                            <th>Lamination</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRow
                            size={"13x15"}
                            cost={1312}
                        />
                        <TableRow />
                        <TableRow />
                        <TableRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Price;