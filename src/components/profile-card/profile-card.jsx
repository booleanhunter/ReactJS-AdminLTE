import React, { Component } from 'react';
import PropTypes from 'prop-types';



class ProfileCard extends Component {

    render() {

        const { coverPicture, width, theme, displayName, description, displayPicture, children, pictureAlignment } = this.props;
        var style = {}, alignmentType = 'widget-user', footerPadding = '';

        if (pictureAlignment === 'left') {
            alignmentType = 'widget-user-2';
            footerPadding = 'no-padding';
        }

        if (coverPicture) {
            style = {
                background: 'url(' + coverPicture + ') center'
            };
        }

        return (
            <div className={"col-md-" + width}>
                {/* Widget: user widget style 1 */}
                <div className={"box box-widget " + alignmentType}>
                    {/* Add the bg color to the header using any of the bg-* classes */}
                    <div className={"widget-user-header " + theme} style={style}>
                        <div className="widget-user-image">
                            <img className="img-circle" src={displayPicture} alt="User Avatar" />
                        </div>
                        {/* /.widget-user-image */}
                        <h3 className="widget-user-username">{displayName}</h3>
                        <h5 className="widget-user-desc">{description}</h5>
                    </div>
                    <div className={"box-footer " + footerPadding}>
                        {children}
                    </div>
                </div>
                {/* /.widget-user */}
            </div>
        )

    }
}

ProfileCard.defaultProps = {
    pictureAlignment: 'center',
    theme: 'bg-yellow',
    displayName: 'John Doe',
    description: 'My profile description',
    displayPicture: '../dist/img/user7-128x128.jpg'
};

ProfileCard.propTypes = {
    pictureAlignment: PropTypes.string,
    theme: PropTypes.string,
    displayName: PropTypes.any,
    description: PropTypes.any,
    displayPicture: PropTypes.string,
    children: PropTypes.any,
    coverPicture: PropTypes.string
}



export default ProfileCard;
