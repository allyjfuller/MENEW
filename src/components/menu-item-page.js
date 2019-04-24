import React from 'react';
import {connect} from 'react-redux';
import Modal from './modal';
import MenuItemForm from './menu-item-form';


export function MenuItemPage() {
	return (
		<div>
			<Modal>
				<h2>Add New Item</h2>

				<MenuItemForm />

				<button onClick=''> + </button>
				<button onClick=''>Done</button>
			</Modal>
		</div>
	);
}

export default connect()(MenuItemPage);