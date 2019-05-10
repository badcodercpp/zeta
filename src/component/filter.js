import React , {Component} from 'react';

export default class Filter extends Component {
    state = {
        val:""
    }
    handelSearch = e => {
        this.setState({val:e.target?e.target.value:e.currentTarget.value})
    }
    render(){
        return (
            <div style = {{width:"100%",height:"50px"}} >
                <input type="text" value={this.state.val} onChange={this.handelSearch} />
            </div>
        )
    }
}