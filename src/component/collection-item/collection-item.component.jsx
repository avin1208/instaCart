import React from "react";

import './collection-item.styles.scss';

const CollectionItem = ({ store }) => {
    const { icon, name, items, delivery, pickup, prices, time } = store;
    return (
        <div className="collection-item">
            <img src={`${icon}`} alt='icon' />
            <div className="details">
                <span className="name">{name}</span>
                <span className="items">{items}</span>
                <span className="delivery">{delivery}</span>
                <span className="pick-up">{pickup}</span>
                <span className="prices">{prices}</span>
                <span className="time">{time}</span>
            </div>
        </div>
    )
}

export default CollectionItem;