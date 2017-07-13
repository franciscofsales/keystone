/**
 * A navigation item of the secondary navigation
 */

import React from 'react';
import { Link } from 'react-router';

const SecondaryNavItem = React.createClass({
	displayName: 'SecondaryNavItem',
	propTypes: {
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		href: React.PropTypes.string.isRequired,
		onClick: React.PropTypes.func,
		path: React.PropTypes.string,
		title: React.PropTypes.string,
	},
	render () {
		const lookUpTable = {
			'User': 'Utilizador',
			'Image': 'Imagem',
			'Post Categories': 'Categorias',
			'Enquiries': 'Requerimentos',
			'Posts': 'Posts',
			'Users': 'Utilizadores',
			'Name': 'Nome',
			'Email': 'Email',
			'Can access Keystone': 'Previlégios de Administrador',
		};
		return (
			<li className={this.props.className} data-list-path={this.props.path}>
				<Link
					to={this.props.href}
					onClick={this.props.onClick}
					title={this.props.title}
					tabIndex="-1"
				>
					{lookUpTable[this.props.children]}
				</Link>
			</li>
		);
	},
});

module.exports = SecondaryNavItem;
