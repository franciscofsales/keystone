import React from 'react';
import evalDependsOn from '../../../../../../fields/utils/evalDependsOn';

module.exports = React.createClass({
	displayName: 'FormHeading',
	propTypes: {
		options: React.PropTypes.object,
	},
	render () {
		if (!evalDependsOn(this.props.options.dependsOn, this.props.options.values)) {
			return null;
		}
		console.log('this form heading' + this.props.content);
		return <h3 className="form-heading">{this.props.content}</h3>;
	},
});
