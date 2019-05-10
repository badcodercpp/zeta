import {bindActionCreators} from 'redux';
import * as Actions from "../redux/actions/actionCreater";
import Header from '../component/header';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        category:state["zetaReducer"].category,
        recipes:state["zetaReducer"].recipes,
        cartNumber: state["zetaReducer"].cartNumber
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(Header)