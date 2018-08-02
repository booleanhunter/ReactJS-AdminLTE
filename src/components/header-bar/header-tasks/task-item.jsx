import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskItem extends Component {

    render() {
        const { percentage, theme, content, id, onItemClicked } = this.props;
        var stylePercentage = {
            width: percentage + '%'
        };
        return (
            <li>
                <a href="#" id={id} onClick={onItemClicked}>
                    <h3>
                        {content}
                        <small className="pull-right">{percentage + '%'}</small>
                    </h3>
                    <div className="progress xs">
                        <div className={"progress-bar " + theme} style={stylePercentage}>
                            <span className="sr-only">{percentage + '% Complete'} </span>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number,
    content: PropTypes.any,
    onItemClicked: PropTypes.func.isRequired
}

export default TaskItem;
