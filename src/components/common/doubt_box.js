import React from 'react';

const DoubtBox = (props) => {
	return (
		<div className="box mt-1">
			<div className="title mt-3">
				<h4>
					How to do Ajax in Rails ?
				</h4>

				<span className="res-btn">
					Resolved
				</span>
			</div>
			
			<div className="desc mt-2">
				<p> kuh bih kar lo, ki fark penda hai </p>
			</div>

			<div className="text-right mt-2">
				<p>Asked By: kokila Ben on Aug 8, 7:37</p>
			</div>

			<div>
				<p>
					<b>Answer: </b>
					Rashi ben thi
				</p>
			</div>

			<div>
				<p>
					Answered by Gopi bahu on Aug 9, 8:46
				</p>
			</div>
		</div>
	);
}

export default DoubtBox;