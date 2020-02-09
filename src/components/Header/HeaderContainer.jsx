import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setAuthUserData, logout } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default compose(
    connect(mapStateToProps, {
        setAuthUserData,
        logout
    })
)(HeaderContainer);