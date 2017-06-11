// TOP LEVEL IMPORTS
import React from 'react';
import { Link } from 'react-router';
// ANTD
import Table from 'antd/lib/table';
import Button from 'antd/lib/button';
import Tag from 'antd/lib/tag';
import Input from 'antd/lib/input';
// APOLLO
import { GET_CLIENTS } from '/imports/ui/apollo/queries';
import { graphql } from 'react-apollo';
//COMPONENTS
import MachineModelsTable from './MachineModelsTable'
import MachineModelsForm from '/imports/ui/components/admin/MachineModelsForm'
// REDUX
import { connect } from 'react-redux'
import * as actions from '/imports/ui/redux/actions'


// CONSTANTS & DESTRUCTURING
// ====================================
const Search = Input.Search;



class MachineModelsPage extends React.Component {
	state = { showComponent: 'table' }

	render(){
		const { children } = this.props;
/*		const { loading, usersAdmin } = data;
		if (loading) { return <div>Loading...</div>; }*/

		if (this.state.showComponent === 'table') { 
			return (
				<div>
					<Button 
						className='fpm-admin-button' 
						type='primary' 
						onClick={()=>this.setState({showComponent: 'addForm'})}
					>
						+ ADD MACHINE MODEL
					</Button>
					<Search
					    placeholder="input search text"
					    style={{ width: 200 }}
					    onChange={e => this.props.onSearchTextChange(e.target.value)}
					  />
					<MachineModelsTable />
				</div>
			);
		}

		if (this.state.showComponent === 'addForm') { 
			return (
				<div>
					<Button 
						className='fpm-admin-button' 
						type='default' 
						onClick={()=>this.setState({showComponent: 'table'})}
					>
						CANCEL
					</Button>
					<div>
						<MachineModelsForm 
							onAdded={() => this.setState({ showComponent: 'table' })}
						/>
					</div>
				</div>
			);
		}

	}
};


let mapStateToProps = ({ search }) => {
	
	const { searchText } = search;
	
	return {
		searchText
	}
}

export default connect(mapStateToProps, actions)(MachineModelsPage)