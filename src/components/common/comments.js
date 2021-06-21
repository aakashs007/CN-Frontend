import React from 'react';

const Comments = (props) => {
	return (
		<>
			<div className="box">
				<div className="mt-4">
					<p>2 Comments</p>
				</div>

				<div className="comment p-3 mb-2">
					<p className="m-0">
						<b>Kokila Ben: </b>
						Wo rashi thi
					</p>
				</div>

				<div className="d-flex mt-3 mb-4">
					<input className="form-control inp-elm" placeholder="Add Comment" />
					<button className="ml-3 cmt-btn">
						Comment
					</button>
				</div>
			</div>
		</>
	);
}

export default Comments;