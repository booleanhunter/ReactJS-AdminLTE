import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeLabel from './time-label';
import TimelineItem from './timeline-item';

class Timeline extends Component {
	
	render() {
		var timelineInfo = [];

		if (this.props.children) {
			timelineInfo = this.props.children;
		} else {
			this.props.timelineInfo.map(function (timelineElement, iterator) {

				if (timelineElement.endDate) {
					timelineInfo.push(<TimeLabel key={"label1" + iterator} theme="bg-red" content={timelineElement.endDate} />);
				}

				timelineElement.items.map(function (item, i) {
					timelineInfo.push(
						<TimelineItem
							key={"item" + iterator + '.' + i}
							icon={item.icon}
							iconTheme={item.iconTheme}
							time={item.time}
							header={item.header}
							body={item.body}
							footer={item.footer} >
						</TimelineItem>
					)
				});

				if (timelineElement.startDate) {
					timelineInfo.push(<TimeLabel key={"label2" + iterator} theme="bg-green" content={timelineElement.startDate} />)
				}
			});
		}

		return (
			<div className="col-md-12">
				<ul className="timeline">
					{/* timeline time label */}
					{timelineInfo}
					<li>
						<i className="fa fa-clock-o bg-gray"></i>
					</li>
				</ul>
			</div>

		);
	}
}

Timeline.propsType = {
	children : PropTypes.array,
}


export default Timeline;
