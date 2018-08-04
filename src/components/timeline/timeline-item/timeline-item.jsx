import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimelineBody from './timeline-body';
import TimelineFooter from './timeline-footer';
import TimelineHeader from './timeline-header';


class TimelineItem extends Component {

	render() {
		var body = '', footer = '';
		if (this.props.body) {
			body = <TimelineBody content={this.props.body.content} >
				{this.props.body.markup}
			</TimelineBody>
		}

		if (this.props.footer) {
			footer = <TimelineFooter content={this.props.footer.content} >
				{this.props.footer.markup}
			</TimelineFooter>

		}

		return (
			<li>
				<i className={this.props.icon + " " + this.props.iconTheme}></i>

				<div className="timeline-item">
					<span className="time">
						<i className="fa fa-clock-o"></i>
						{this.props.time}
					</span>

					<TimelineHeader url={this.props.header.url} title={this.props.header.title} content={this.props.header.content} />

					{body}

					{footer}
				</div>
			</li>
		)
	}
}

TimelineItem.defaultProp = {
	icon: 'fa fa-coffee',
	iconTheme: 'bg-blue',
	time: '',   
};

TimelineItem.propTypes = {
	icon : PropTypes.string,
	iconTheme : PropTypes.string,
	time : PropTypes.string,
	body : PropTypes.any,
	footer : PropTypes.any,
	header : PropTypes.any
};

export default TimelineItem;
