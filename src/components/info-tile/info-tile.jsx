import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoTile extends Component {

    render() {
        const { children, width, icon, theme, content, stats } = this.props;
        return (
            <div className={"col-md-" + width + " col-sm-6 col-xs-12"}>
                <div className={"info-box " + theme}>
                    <span className="info-box-icon">
                        <i className={"fa " + icon}></i>
                    </span>

                    <div className="info-box-content">
                        <span className="info-box-text">{subject}</span>
                        <span className="info-box-number">{stats}</span>
                        {children ? children : null}
                    </div>

                    {content}
                </div>
            </div>
        );
    }
}

InfoTile.defaultProps = {
    content: '',
    icon: 'fa-star-o',
    stats: '0',
    subject: 'Default Subject',
    theme: 'bg-aqua'
}

InfoTile.propTypes = {
    theme: PropTypes.string,
    stats: PropTypes.any,
    subject: PropTypes.any,
    icon: PropTypes.string,
    content: PropTypes.any,
    children: PropTypes.any,
    width: PropTypes.number
}

export default InfoTile;
