// TOP LEVEL
import React from 'react';
// ANTD
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';
// MODULES
import { handleLogin } from '/imports/modules/helpers'

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