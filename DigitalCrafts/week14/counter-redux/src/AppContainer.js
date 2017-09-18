
import App from './App';
import actions from './actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        counterNumber: state.counter
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onUpClick: () =>{
            dispatch(actions.incrementUp())
        }
    }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;