import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './task-item';

const TaskList = ({ tasks, onItemClicked }) => (
    tasks.map(taskDetails => {
        var progressBarColor;
        if (taskDetails.progress < 21) {
            progressBarColor = 'progress-bar-red'
        } else if (taskDetails.progress > 20 && taskDetails.progress < 41) {
            progressBarColor = 'progress-bar-yellow'
        } else if (taskDetails.progress > 40 && taskDetails.progress < 61) {
            progressBarColor = 'progress-bar-green'
        } else if (taskDetails.progress > 60) {
            progressBarColor = 'progress-bar-aqua';
        }
        <TaskItem
            onItemClicked={onItemClicked}
            key={taskDetails.id}
            id={taskDetails.id}
            progress={taskDetails.progress}
            content={taskDetails.content}
            theme={progressBarColor} />
    })
);


class HeaderTasks extends Component {

    state = {
        expanded: false //State to toggle dropdown
    }

    toggleMenu = () => {
        this.setState(prev => ({
            expanded: !prev.expanded
        }));
    }



    render() {
        const { expanded } = this.state;
        const { tasks, onViewAllClicked } = this.props;
        const length = tasks ? tasks.length : 0;
        return (
            <li className="dropdown tasks-menu">
                <a href="#" className={"dropdown-toggle " + expanded ? "open" : ""} data-toggle="dropdown">
                    <i className="fa fa-flag-o"></i>
                    <span className="label label-danger">{length}</span>
                </a>
                {expanded && <ul className="dropdown-menu">
                    <li className="header">You have {""+length} tasks.</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv">

                            <ul className="menu">
                                <TaskList onItemClicked={this.props.onItemClicked} tasks={tasks} />
                            </ul>

                            <div className="slimScrollBar"></div>
                            <div className="slimScrollRail"></div>
                        </div>
                    </li>
                    <li className="footer">
                        <a href="#" onClick={onViewAllClicked}>View all tasks</a>
                    </li>
                </ul>}
            </li>
        );
    }
}

HeaderTasks.propTypes = {
    tasks: PropTypes.array,
    onViewAllClicked: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired
}

export default HeaderTasks;
