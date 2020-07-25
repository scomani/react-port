import React, { Component } from 'react';
import Card from '../components/Card';

import shatterdream from '../assets/shatterdream.png';
import Sample from '../assets/Sample.png';
import bamboo from '../assets/bamboo.png';
import { Container, Row } from 'react-bootstrap';








class Carousel extends React.Component {


        constructor(props) {
            super(props)
            this.state = {
                items: [
                    {
                        id: 0,
                        title: 'Shattered Dreams Extract',
                        subTitle: 'Past Project',
                        imgSrc: shatterdream,
                        link: 'http://www.shattereddreamsextracts.co/',
                        selected: false
                    
                    },

                    {
                        id: 1,
                        title: 'Prior Projects',
                        subTitle: 'More than just the Logo itself.',
                        imgSrc: Sample,
                        link: 'https://google.com',
                        selected: false
                    
                    },
                    {
                        id: 2,
                        title: 'Bamboo Union',
                        subTitle: 'Branding Project',
                        imgSrc: bamboo,
                        link: 'https://bambooxunion.com',
                        selected: false
                    
                    },
                
                
                ]
                 
            }
        }

        handleCardClick = (id, card) => {
            

            let items = [...this.state.items];
    
            items[id].selected = items[id].selected ? false : true;
    
            items.forEach(item => {
                if(item.id !== id) {
                    item.selected = false;
                }
            });
    
            this.setState({
                items
            });
        }
    
    
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }
    
    
        render() {
            return(
                <Container fluid={true}>
                    <Row className="justify-content-around">
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            );
        }
    
    }
    
    export default Carousel;
   



