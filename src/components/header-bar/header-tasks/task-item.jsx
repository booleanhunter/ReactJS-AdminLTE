import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskItem extends Component {

    onClick = (e) =>{
        this.props.onItemClicked(this.props.id);
    }

    render() {
        const { progress, theme, content, id } = this.props;
        const stylePercentage = {
            width: progress + '%'
        };
        return (
            <li>
                <a href="#" id={id} onClick={this.onClick}>
                    <h3>
                        {content}
                        <small className="pull-right">{progress + '%'}</small>
                    </h3>
                    <div className="progress xs">
                        <div className={"progress-bar " + theme} style={stylePercentage}>
                            <span className="sr-only">{progress + '% Complete'} </span>
                        </div>
                    </div>
                </a>
            </li>
        );
    }
}

TaskItem.propTypes = {
    id: PropTypes.string.isRequired,
    progress: PropTypes.number,
    theme: PropTypes.string,
    content: PropTypes.any,
    onItemClicked: PropTypes.func.isRequired
}

export default TaskItem;
