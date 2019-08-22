import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';
import './App.css';

const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    margin: 0 auto;
    width: 180px;
    height: 180px;
    transform: rotate(${props => props.transform}deg);
}
`;

export default class Preloader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            startLoader: 0,
            numberOfSpins: 360 * 5
        };
        this.handleClick = this.handleClick.bind(this);
    }
      
    handleClick(e) {
        this.setState({
            startLoader: 1
        });
    }
    
    render() {
        return (
            <div id="parent">
                <div className="container">
                    <div id="preloader-holder">
                        <p id="preloader-text">
                            {' '}
                            Spin that loader! 
                            <button onClick={this.handleClick} className="btn btn-lg btn-primary">Click</button>
                        </p>
                        <div id="preloader-wrapper">
                            <Motion
                                defaultStyle={{ transform: 0 }}
                                style={{
                                    transform: spring(
                                        this.state.startLoader ? this.state.numberOfSpins : 0,
                                        { stiffness: 10, damping: 10 }
                                    )
                                }}
                            >
                                {style => <Loader transform={style.transform} />}
                            </Motion>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
