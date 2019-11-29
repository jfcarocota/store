import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        value : this.props.value,
        tags : ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize : 20,
        fontWeight : 'bold',
    }

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    handleIncrement = product => {
        console.log(product);
        this.setState({value : this.state.value + 1});
    }

    render() { 

        let classes = this.getBadgeClasses();
        const product = {
            name : 'My Product',
            price : 20,
            description : 'some product'
        }
        return(
            <React.Fragment>
                <h4>Counter #{this.props.id}</h4>
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.handleIncrement(product)}
                >
                    Increment
                </button>
                <button className="btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && 'Create a new tag'}
                <ul>{this.renderTags()}</ul>
            </React.Fragment>
        );
    }


    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags</p>;

        return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state
        return count === 0 ? 'Zero' : count;
    }
}
 