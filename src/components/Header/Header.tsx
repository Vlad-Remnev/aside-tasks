import React, {FC} from 'react';

interface IHeader {
    title: string
}

const Header:FC<IHeader> = ({title}) => {
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};

export default Header;