import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    constructor() {
        super(); 

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        //getInitialState
        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish){
        // update our state
        const fishes = {...this.state.fishes}; //this.state.fishes = existing fishes state
        //... == spread, takes a copy of existing state & puts it into new state
        //this.state.fishes.fish1 = fish;
        const timestamp = Date.now(); 
        fishes[`fish-${timestamp}`] = fish; 
        // set state
        this.setState({ fishes: fishes })
    }

    loadSamples() {
        this.setState({
            fishes: sampleFishes
        });
    }

    addToOrder(key) {
        //take a copy of our state
        const order = {...this.state.order}; 
        //update or add the new number of fish ordered
        order[key] = order[key] + 1 || 1; 
        // update our state
        this.setState({ order: order });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/> 
                    <ul className="list-of-fishes">
                        {
                            Object.
                                keys(this.state.fishes)
                                .map(key => <Fish index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} key={key}/>)
                        }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples} /> 
            </div>   
        )
    }
}

export default App; 