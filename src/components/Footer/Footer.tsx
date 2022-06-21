import React, {FC} from 'react';

interface IFooter {
    title: string
}

export const Footer:FC<IFooter> = ({title}) => {
    return (
        <div>
            <div>{title}</div>
        </div>
    );
};