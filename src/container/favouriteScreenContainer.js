import {bindActionCreators} from 'redux';
import * as Actions from "../redux/actions/actionCreater";
import FavouriteScreen from '../component/favouriteScreen';
import {connect} from 'react-redux'

const mapStateToProps = (state) =>{
    return {
        category:state["zetaReducer"].category,
        recipes:state["zetaReducer"].recipes
}}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(FavouriteScreen)