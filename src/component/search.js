import React , {Component} from 'react';

export default class Search extends Component {
    state = {
        val:"",
        recipes:this.props.recipes
    }
    handelSearch = e => {
        const { actions, category, recipes } = this.props;
        let ar =[];
        if (e.target.value!=="") {
            this.setState({val:e.target?e.target.value:e.currentTarget.value},() => {
                for(const r of recipes){
                    if(r.name.indexOf(this.state.val)>-1){
                        ar.push(r)
                    }
                }
                actions.SAVE_RECIPES_DISPATCH(ar)
            })
        } else {
            this.setState({val:e.target?e.target.value:e.currentTarget.value},() => {
                actions.SAVE_RECIPES_DISPATCH(this.state.recipes)
            })
        }
    }
    render(){
        return (
            <div style = {{width:"100%",height:"50px"}} >
                <input type="text" value={this.state.val} onChange={this.handelSearch} />
            </div>
        )
    }
}