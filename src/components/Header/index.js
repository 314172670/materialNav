import React, { Component } from 'react';
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <HeaderTop/>
                <HeaderBottom/>
            </div>
        );
    }
}

export default Header;