import React from 'react';
import Navbar from '../common/navbar';
import './style.scss';

class TA extends React.Component {
	constructor(props) {
		super(props);
	}

	renderBox(count, type) {
		return(
			<div className="col-lg-3 col-md-3 col-sm-6">
				<div className="ta-box">
					<h4>{ count }</h4>
					<p className="ta-box-text">{ type }</p>
				</div>
			</div>
		);
	}

	render() {
		return (
			<>
				<Navbar heading={'Home | Raise Doubt | Solve Doubts | Dashboard'} />

				<div className="mt-5 container">
					<h3 className="mb-5">Dashboard</h3>

					<div className="row">
						{ this.renderBox('23', 'Doubts Asked') }
						{ this.renderBox('23', 'Doubts Asked') }
						{ this.renderBox('23', 'Doubts Asked') }
						{ this.renderBox('23', 'Avg. Doubt Resolution time') }			
					</div>

					<div className="p-4 mt-5 doubt-cont">
						<h5 className="mb-4">TAs Report</h5>

						<div className="ta-report">
							<p className="mb-0">John Doe</p>
							<p className="mb-0">Doubts Accepted: 16 | Doubts Resolved: 13 | Doubts Escalated: 3 | Avg. Doubt Activity Time: 14min</p>
						</div>
						<div className="ta-report">
							<p className="mb-0">John Doe</p>
							<p className="mb-0">Doubts Accepted: 16 | Doubts Resolved: 13 | Doubts Escalated: 3 | Avg. Doubt Activity Time: 14min</p>
						</div>						<div className="ta-report">
							<p className="mb-0">John Doe</p>
							<p className="mb-0">Doubts Accepted: 16 | Doubts Resolved: 13 | Doubts Escalated: 3 | Avg. Doubt Activity Time: 14min</p>
						</div>						
					</div>
				</div>
			</>
		);
	}
}

export default TA;