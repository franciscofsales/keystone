import { css } from 'glamor';
import React, { PropTypes } from 'react';
import theme from '../../../../theme';

import ListSort from './ListSort';

function ListHeaderTitle ({
	activeSort,
	availableColumns,
	handleSortSelect,
	title,
	...props
}) {
	var titulo = '';
	const field = title.split(' ');
	titulo = field[0] + ' ' + field[1];
	if (field[2] !== undefined) {
		titulo = field[0] + ' Categorias';
	};
	return (
		<h2 className={css(classes.heading)} {...props}>
			{titulo}
			<ListSort
				activeSort={activeSort}
				availableColumns={availableColumns}
				handleSortSelect={handleSortSelect}
			/>
		</h2>
	);
};

ListHeaderTitle.propTypes = {
	activeSort: PropTypes.object,
	availableColumns: PropTypes.arrayOf(PropTypes.object),
	handleSortSelect: PropTypes.func.isRequired,
	title: PropTypes.string,
};

const classes = {
	heading: {
		[`@media (max-width: ${theme.breakpoint.mobileMax})`]: {
			fontSize: '1.25em',
			fontWeight: 500,
		},
	},
};

module.exports = ListHeaderTitle;
