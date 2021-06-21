import React from 'react';
import Navbar from '../common/navbar';
import './style.scss';

class DoubtList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<Navbar heading={'Home | Raise Doubt | Solve Doubts'}/>

				<div className="mt-5 container">
					<h3 className="mb-5">Solve Doubts</h3>

					<div className="doubt-list pl-3 pr-5 mb-4">
						<h6 className="mb-0">How to get started with Rails ?</h6>
						<button className="ml-3 cmt-btn pl-3 pr-3 pt-1 pb-1">
							Accept
						</button>
					</div>					
				</div>				
			</>
		);
	}
}

export default DoubtList;