import React, {useState} from 'react';

type FilterType = 'all' | 'ruble' | 'dollar'

const FilterComponent = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars ', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars ', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS ', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars ', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS ', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    let filtredMoney = money;

    switch (filter) {
        case  'ruble':
            filtredMoney= money.filter(item => item.banknots === 'RUBLS ');
            break
        case 'dollar':
            filtredMoney = money.filter(item => item.banknots === 'Dollars ');
            break
    }

    const onClickFilterHandler = (name: FilterType) => {
        setFilter(name)
    }

    return (
        <>
            <ul>
                {filtredMoney?.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button style={{marginLeft: '5px'}} onClick={() => onClickFilterHandler('all')}>all</button>
                <button style={{marginLeft: '5px'}} onClick={() => onClickFilterHandler('ruble')}>ruble</button>
                <button style={{marginLeft: '5px'}} onClick={() => onClickFilterHandler('dollar')}>dollar</button>
            </div>
        </>
    );
};

export default FilterComponent;