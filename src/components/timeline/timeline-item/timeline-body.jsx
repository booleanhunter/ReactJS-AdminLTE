import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TimelineBody extends Component {

	render() {
		return (
			<div className="timeline-body">
				{this.props.content}
				{this.props.children}
			</div>
		);
	}
}

TimelineBody.propTypes = {
	content: PropTypes.any,
	children: PropTypes.any
}

export default TimelineBody;
