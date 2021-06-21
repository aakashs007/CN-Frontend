import React from 'react';
import { connect } from "react-redux";
import { authUser } from '../../store/actions/main';
import './style.scss';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login_type: 'Sign In'
		};
	}

	onFormSubmit(e) {
		e.preventDefault();
		const email = document.getElementById('email_id').value;
		const password = document.getElementById('pswd_id').value;
		const type = document.getElementById('opt_type').value;
		const auth_type = this.state.login_type == 'Sign In' ? 'signin' : 'signup';

		this.props.authUser({
			email,
			password,
			type,
			auth_type
		});
	}

	componentDidUpdate() {
		if(!this.props.user.user_auth_pending) {
			//redirect to user home screen
			// this.history.push('/student/home');
			window.location.href = '/student/home';
		}
	}

	changeLoginType(e) {
		if(this.state.login_type == 'Sign In') {
			this.setState({ login_type: 'Sign Up'});
		} else {
			this.setState({ login_type: 'Sign In'});
		}
	}

	render() {
		const { login_type } = this.state;

		return (
			<div style={{margin: '0 35vw'}}>
				<img className="d-block m-auto" src="./cnlogo.svg" width="250" height="auto" />
				<h3 style={{ textAlign: 'center'}}> { login_type } </h3>
				<form>
					<div className="mb-3">
						<select id="opt_type" className="form-select w-100 p-2 mt-4">
							<option selected value="s">Student</option>
							<option value="t">TA</option>
						</select>
					</div>
					<div class="mb-3">
						<label for="email_id" class="form-label">Email address</label>
						<input type="email" class="form-control" id="email_id" aria-describedby="email" />
					</div>
					<div class="mb-3">
						<label for="pswd_id" class="form-label">Password</label>
						<input type="password" class="form-control" id="pswd_id" aria-describedby="password" />
					</div>

					<a href="javascript:void(0)" onClick={e => this.changeLoginType(e)}>
						{ login_type == 'Sign In' ? "Don't have an account ?" : "Already have an account ?" }
					</a> 
					<br />
					<button type="submit" class="btn btn-primary mt-2" onClick={e => this.onFormSubmit(e)}> { login_type } </button>
				</form>				
			</div>
		);
	}
}

const mapStateToProps = state =>
  ({
	  user: state.main
    // stock: state.StockReducer.stock,
    // top_stocks: state.TopStocksReducer.top_stocks,
    // error: state.CurrentStockReducer.error,
    // stock_id: state.CurrentStockReducer.stock_id
  })

const mapDispatchToProps = dispatch =>
  ({
	  authUser: (data) => dispatch(authUser(data))
    // fetchCurrentStock: (stock_id) => dispatch(fetchCurrentStock(stock_id)),
    // fetchStock: (stock_id) => dispatch((fetchStock(stock_id))),
    // fetchStocksList: () => dispatch((fetchStocksList())),
    // fetchTopStocks: (n = 10) => dispatch((fetchTopStocks(n))),
    // setCurrentStock: (stock_id) => dispatch((setCurrentStock(stock_id)))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Login);