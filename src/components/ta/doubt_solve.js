import React from 'react';
import Comments from '../common/comments';
import DoubtBox from '../common/doubt_box';
import Navbar from '../common/navbar';
import './style.scss';

class SolveDoubt extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Navbar heading={'Home | Raise Doubt | Solve Doubts'} />

				<div className="mt-5 container">
					<h3 className="mb-5">Solve Doubts</h3>

					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-12">
							<DoubtBox />
							<Comments />
						</div>

						<div className="col-lg-5 col-md-5 col-sm-12">
							<div className="p-3 ans-cont">
								<p className="mb-0"><b>Answer</b></p>

								<input className="form-control inp-elm" placeholder="Answer" />

								<div className="text-right">
									<button className="ml-3 logout-btn mt-3">
										Answer
									</button>
								</div>
							</div>

							<div className="text-right">
								<button className="esc-btn mt-3">
									Escalate
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SolveDoubt;