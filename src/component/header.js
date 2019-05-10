import React , {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <div style={{backgroundColor:"green",width:"100%",height:"90px"}} >
                <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",textOverflow: "ellipsis"}} >
                    <div style={{width:"90%",height:"100%",display:"inline",justifyContent:"center",alignItems:"center",textOverflow: "ellipsis"}} >
                        Best food app
                    </div>
                    <div style={{width:"10%",height:"100%",display:"inline",justifyContent:"center",alignItems:"center",textOverflow: "ellipsis"}} >
                        cart - {this.props.cartNumber}
                    </div>
                </div>
                
            </div>
        )
    }
}