import React, { Component } from 'react';
import CardInfo from '../components/Cardinfo';

function Card(props) {

    return(
        <div className="d-inline-block sk-card" onClick={(e) => props.click(props.item)}>
            <img className="sk-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}


export default Card;
