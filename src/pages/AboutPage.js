import React, { Component } from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {

    return(

        <div>
            <Hero title={props.title}  />


            <Content>
            After working 5 years in the vape industry working trade shows doing marketing, content creation, helping out with designs of packaging, I've decided to freelance and help other small brands with graphic design and packaging for over a year.
            <p></p>    My work is focused on projects for the marijuana industries with custom packaging and product design, although creativity is something very fluid and can be applied to any field. I have experience with branding, logo concepts & fashion apparel.
            </Content>


        </div>
    );
}


export default AboutPage;