import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({
    auth,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component = {(props) => (
        auth ? (
            <Redirect to = 'admin/Home' />
        ):(
            <Component {...props}/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    auth: !!state.admin._id
});

export default connect(mapStateToProps)(PublicRoute);