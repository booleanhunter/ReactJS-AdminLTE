import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TimelineHeader extends Component {
	render() {
		return (
			<h3 className="timeline-header">
				<a href={this.props.url} target="_blank">{this.props.title}</a>
				{this.props.content}
				{this.props.children}
			</h3>
		)
	}
}

TimelineHeader.propTypes = {
	content : PropTypes.any,
	children : PropTypes.any
};

return TimelineHeader
