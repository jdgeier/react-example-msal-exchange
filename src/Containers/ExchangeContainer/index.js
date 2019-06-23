import AppDrawer from '../../Components/Exchange/AppDrawer'
import {getMessages} from '../../Actions/MSGraph'
import {connect} from 'react-redux'

const fetchMessages = (messages) =>{
    return messages
}

const mapStateToProps = state =>({
    messages: fetchMessages(state.messages)
})

const mapDispatchToProps = dispatch => ({
    getMessages: dispatch(getMessages())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer)