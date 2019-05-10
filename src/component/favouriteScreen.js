import React , {Component} from 'react';

const style = {
    mainDiv: {
        width: "100%",
        height:"400px",
        backgroundColor:"grey",
    },
    scrollable: {
        width: "100%",
        height:"100%",
        overflow:"auto",
        whiteSpace:"nowrap"
    }
}

export default class FavouriteScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            category:[],
            recipes:[]
        }
    }
    _reorder_click = e => {
        alert("this functionality is not implemented yet")
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log(nextProps)
        return {
            category:nextProps.category?nextProps.category:prevState.category,
            recipes:nextProps.recipes?nextProps.recipes:prevState.recipes,
        }
        // if (nextProps.category) {
        //     return {
        //         category:nextProps.category
        //     }
        // }
        // if(nextProps.recipes){
        //     return {
        //         recipes: nextProps.recipes
        //     }
        // }else{
        //     return null;
        // }
    }
    componentDidMount(){
        const { actions } = this.props;
        actions.CALL_API_DISPATCH("http://temp.dash.zeta.in/food.php")
    }
    render(){
        return (
            <div style={style.mainDiv} >
                <div style={style.scrollable} >
                {
                    this.state.recipes.map( (a,b) => {
                        return (
                            <div key={b} style={{width:"350px",height:"400px",marginRight:"10px",backgroundColor:"red",marginTop:"10px",display:"inline-block"}} >
                                <img alt="loading" style={{width:"250px",height:"250px"}} src={a.image} />
                                <div style={{width:"350px",height:"95px",marginTop:"4px"}} >
                                    <div style={{display:"flex",width:"100%",height:"100%"}} >
                                        <div style={{width:"80%",height:"100%"}} >
                                            <div style={{width:"100%",height:"50%",justifyContent:"center",alignItems:"center"}} >
                                                <p style={{textOverflow:"ellipsis",wordWrap: "break-word"}} >{a.name}</p>
                                            </div>
                                            <div style={{width:"100%",height:"50%",justifyContent:"center",alignItems:"center"}} >
                                                <p style={{textOverflow:"ellipsis",wordWrap: "break-word"}} >{a.price}</p>
                                            </div>
                                        </div>
                                        <div style={{width:"20%",height:"100%"}} >
                                            <input type="button" value="Reorder" onClick={this._reorder_click} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } )
                }
                </div>
            </div>
        )
    }
}

