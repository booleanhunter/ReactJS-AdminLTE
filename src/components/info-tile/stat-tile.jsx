import React, { Component } from 'react';
import PropTypes from 'prop-types';


class StatTile extends Component {

    onClick = (e) =>{
        e.preventDefault();
        if(this.props.onLinkClicked){
            this.props.onLinkClicked(this.props.link, this.props.id);
        }
    }

    render() {
        var link = '',
            stats = <h3> {this.props.stats} </h3>;

        if (this.props.link) {
            link =
                <a href={this.props.link} onClick={this.onClick} className="small-box-footer">
                    More info <i className="fa fa-arrow-circle-right"></i>
                </a>;
        }

        if (this.props.stats.indexOf('%') !== -1) {
            var style = {
                fontSize: '20px'
            };

            stats =
                <h3>
                    {this.props.stats.replace(/%/g, '')}
                    <sup style={style}>%</sup>
                </h3>
        }

        return (
            <div className={"col-lg-" + this.props.width + " col-xs-6"}>
                <div className={"small-box " + this.props.theme}>
                    <div className="inner">
                        {stats}
                        <p>{this.props.subject}</p>
                    </div>
                    <div className="icon">
                        <i className={"fa " + this.props.icon}></i>
                    </div>
                    {link}
                </div>
            </div>
        );
    }
}

StatTile.propTypes = {
    id : PropTypes.string,
    color : PropTypes.string,
    icon : PropTypes.string,
    subject : PropTypes.string,
    stats : PropTypes.string,
    link : PropTypes.string,
    onLinkClicked : PropTypes.func
}

StatTile.defaultProps = {
    color: 'bg-yellow',
    icon: 'ion-person-add',
    subject: 'Default Subject',
    stats: '0',
    link: '#'
};

export default StatTile;
