import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProfileInfoList extends Component {

    listItems = () => {
        const { profileinfos, onProfileItemClicked, onProfileItemLinkClicked } = this.props;
        profileinfos.map(info => (
            <li id={info.id} key={info.id} onClick={onProfileItemClicked}>
                <a href={info.link} onClick={onProfileItemLinkClicked}>
                    {info.description}
                    <span className={"pull-right badge " + info.badgeTheme}>
                        {info.stats}
                    </span>
                </a>
            </li>
        ));
    }

    render() {
        return (
            <ul className="nav nav-stacked">
                {this.listItems}
            </ul>
        )
    }
}

ProfileInfoList.propTypes = {
    profileinfos: PropTypes.array,
    onProfileItemClicked: PropTypes.func.isRequired,
    onProfileItemLinkClicked: PropTypes.func.isRequired
}

export default ProfileInfoList;
