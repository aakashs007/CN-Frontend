import React from 'react';
import Navbar from '../common/navbar';
import DoubtBox from '../common/doubt_box';
import './style.scss';
import Comments from '../common/comments';

class Students extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Navbar heading={'Home | Raise Doubt'} />

				<div className="mt-5 container">
					<h3>Home</h3>

					<div className="text-right">
						<p>21 Doubts</p>
					</div>
					<DoubtBox />

					<Comments />
				</div>
			</>
		)
	}
}

export default Students;