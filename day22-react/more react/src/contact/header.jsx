import React from 'react';
import './index.scss';


export default class Header extends React.Component{
    constructor(props){
        super();
        this.state = {
            homeLink: props.homeLink
        }
    }
    render () {
        return(
            <nav>
                <ul>
                    <li>
                        <a href="#">{this.props.homeLink}</a>
                    </li>
                </ul>
            </nav>
        );
    }
};