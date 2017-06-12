// TOP LEVEL
import React from 'react';
// ANTD
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';
// MODULES
import 'antd/dist/antd.css'; // new line of code

class LoginPage extends React.Component {

	render(){
		return (
			<div>
				<Card>
					<Icon type='tool' />
				</Card>
				<Card>
					<Icon type='user' />
				</Card>
			</div>
			
		)
	}
}


export default LoginPage;