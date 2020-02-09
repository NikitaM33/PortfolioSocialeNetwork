import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/propfileReduser';
import { withRouter, } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile,
        getIsAuth,
        takeStatus,
        getAuthorizedUserId } from '../../redux/usersSelectors';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        
        if(!userId) {
            userId = this.props.authorizedUserId;
            // userId = 1190;
            if(!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return(
            <div>
                <Profile {...this.props} profile={this.props.profile}
                                        status={this.props.status}
                                        updateStatus={this.props.updateStatus}
                                        isOwner={!this.props.match.params.userId}
                                        savePhoto={this.props.savePhoto} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        isAuth: getIsAuth(state),
        status: takeStatus(state),
        authorizedUserId: getAuthorizedUserId(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter
)(ProfileContainer);