import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import MenuItemPage from './menu-item-page';
import {fetchProtectedData} from '../actions/protected-data';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <Router>
                <div className="dashboard">
                
                <button><Link to="/menu-item-page" className="menu-item-page"> + </Link></button>
                <Route exact path="/menu-item-page" component={ MenuItemPage } />

                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));