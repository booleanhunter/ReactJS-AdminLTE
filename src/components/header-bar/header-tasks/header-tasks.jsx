import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskItem from './task-item';

const TaskList = ({ items, onItemClicked }) => (
    items.map(taskDetails => {
        var progressBarColor;
        if (taskDetails.progress < 21) {
            progressBarColor = 'progress-bar-red'
        } else if (taskDetails.progress > 20 && taskDetails.progress < 41) {
            progressBarColor = 'progress-bar-yellow'
        } else if (taskDetails.progress > 40 && taskDetails.progress < 61) {
            progressBarColor = 'progress-bar-green'
        } else  {
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

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggleMenu = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            console.log("click outside");
            this.setState({
                expanded: false
            });
        }
    }

    setWrapperRef = (node) =>{
        this.wrapperRef = node;
    }


    render() {
        const { expanded } = this.state;
        const { items, onViewAllClicked } = this.props;
        const length = items ? items.length : 0;
        return (
            <li ref={this.setWrapperRef} className={"dropdown tasks-menu " + (expanded ? "open" : "")}>
                <a href="#" onClick={this.toggleMenu} className="dropdown-toggle " data-toggle="dropdown">
                    <i className="fa fa-flag-o"></i>
                    {length && <span className="label label-danger">{length}</span>}
                </a>
                <ul className="dropdown-menu">
                    <li className="header">You have {length} tasks.</li>
                    <li>
                        {/* inner menu: contains the actual data */}
                        <div className="slimScrollDiv">

                            <ul className="menu">
                                {items && <TaskList onItemClicked={this.props.onItemClicked} items={items} />}
                            </ul>

                            <div className="slimScrollBar"></div>
                            <div className="slimScrollRail"></div>
                        </div>
                    </li>
                    <li className="footer">
                        <a href="#" onClick={onViewAllClicked}>View all tasks</a>
                    </li>
                </ul>
            </li>
        );
    }
}

HeaderTasks.propTypes = {
    items: PropTypes.array,
    onViewAllClicked: PropTypes.func.isRequired,
    onItemClicked: PropTypes.func.isRequired
}

export default HeaderTasks;
