import React from 'react';
import Navbar from '../common/navbar';

class RaiseDoubt extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<Navbar heading={'Home | Raise Doubt'} />

				<div className="mt-5 container">
					<h3>Raise Doubt</h3>

					<div className="doubt-cont mt-5 pl-4 pr-4">
						<form className="m-auto">
							<div className="mb-3">
								<label for="title_id" className="form-label">Title</label>
								<input placeholder="Title" type="text" className="form-control inp-elm" id="title_id" aria-describedby="email" />
							</div>
							<div className="mb-2">
								<label for="pswd_id" className="form-label">Description</label>
								<input placeholder="Description" type="text" className="form-control inp-elm" id="pswd_id" aria-describedby="password" />
							</div>

							<div className="mt-3 text-right">
								<button type="submit" className="btn btn-primary ask-doubt"> Ask Doubt </button>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	}
}

export default RaiseDoubt;