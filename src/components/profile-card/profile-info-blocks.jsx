import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfileInfoBlocks extends Component {

    descriptionBlocks = () => {
        const { profileinfos, onProfileItemClicked } = this.props;
        profileinfos.map(info => (
            <div id={info.id} onClick={onProfileItemClicked} className="col-sm-4 border-right" key={info.id}>
                <div className="description-block">
                    <h5 className="description-header">{info.stats}</h5>
                    <span className="description-text">{info.description}</span>
                </div>
                {/* /.description-block */}
            </div>
        ));
    }

    render() {
        return (
            <div className="row">
                {this.descriptionBlocks}
            </div>
        );
    }
}

ProfileInfoBlocks.propTypes = {
    profileinfos: PropTypes.array,
    onProfileItemClicked: PropTypes.func.isRequired
}

export default ProfileInfoBlocks;
