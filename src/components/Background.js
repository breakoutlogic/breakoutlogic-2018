import React from 'react';
import '../scss/Background.scss';
import bgUrl from '../assets/bg.jpeg';

const STYLE = {
    backgroundImage: `url('${bgUrl}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

export class Background extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false
        }
    }
    
    componentDidMount() {
        var img = new Image();
        img.onload = () => {
            this.setState({isLoaded: true});
        }
        img.src = bgUrl;
    }
    
    render() {
        
        return (<div className={this.state.isLoaded ? 'bg loaded' : 'bg'} style={STYLE}></div>);
    }
}