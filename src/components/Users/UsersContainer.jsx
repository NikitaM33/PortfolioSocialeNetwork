import React from 'react';
import Users from './Users';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/userReduser';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    takeUsersSelector,
} from '../../redux/usersSelectors';



class UsersContainer extends React.Component{

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render(){
        return(
            <>
                { this.props.isFetching ? <Preloader /> : null }
                <Users {...this.props} onPageChanged={this.onPageChanged} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: takeUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);