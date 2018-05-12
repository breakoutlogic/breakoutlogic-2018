import React from 'react';
import { TRANSITION_LENGTH } from '../utils/constants';
import { setTitle } from '../utils/dom-helpers';
import '../scss/Page.scss';

export class Page extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            transitionEnded: false
        };
    }
    
    componentDidMount() {
        
        setTitle(this.props.title);
        
        const endTransition = () => {
            this.setState({transitionEnded: true});
        }
        
        window.setTimeout(endTransition, TRANSITION_LENGTH);
    }
    
    render() {
        return (
            <div className={this.state.transitionEnded ? 'page loaded' : 'page'}>
                {this.props.children}
            </div>
        );
    }
}