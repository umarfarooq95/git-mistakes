import React, { Component } from 'react';
import UserDetail from './UserDetail';
const self = this;

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            printHello: function(){
                return "Hello"
            }
        }
        console.log('User constructor')
        console.log(this)
        console.log(self)
    }

    changeStateData = (e) => {
        this.setState({
            userName: Math.random()
        })
        
        console.log(e);
    }


// initial Stage
    componentDidMount () {
       const userName = 'UMAR'
       this.setState({
        userName
       })
       console.log('componentDidMount')
    }

// update Stage
    componetDidUpdate(prevProps){
        if(prevProps.age !== this.props.age){
            this.setState({
                userName : 'A'
               })
        }
        console.log('componetDidUpdate')
    }

    // destroy stage 
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        const {age} = this.props;
        const {userName} = this.state;
        return (
            <div>
                <h4 className="bg-primary text-white text-center p-2">
                    { age }
                </h4>
            
                <h4 className="bg-primary text-white text-center p-2">
                    { userName }'s To Do List
                </h4>
                <h4 className="bg-primary text-white text-center p-2">
                    { this.state.printHello() }
                </h4>
                <button className="btn btn-primary m-2"
                        onClick={ (e) => this.changeStateData(e) }>
                    Change
                </button>
                <UserDetail name={userName} age={age}/>
            </div>
        )
    };
}