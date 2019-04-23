import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import Description from './description';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const descriptionLength = length({min: 5, max: 120});



export class MenuItemForm extends React.Component {
	onSubmit(values) {
		const {itemName, price, description} = values;
	}

	render() {
		return (
			<form 
				className="menu-item-form"
				onSubmit={this.props.handleSubmit(values =>
					this.onSubmit(values)
				)}>
				<Field component={Input} type="text" name="item-name" placeholder="Item Name" validate={[required, nonEmpty]} />
				<Field component={Input} type="text" name="item-price" placeholder="Price" validate={[required, nonEmpty]} />
				<input type="file" id="input" />
				<Field component={Description} type="text" name="item-description" validate={[required, descriptionLength, isTrimmed]} />
				<button> + </button>
				<button>Done</button>
			</form>
		);
	}
}

export default reduxForm({
    form: 'menu-item',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('menu-item', Object.keys(errors)[0]))
})(MenuItemForm);