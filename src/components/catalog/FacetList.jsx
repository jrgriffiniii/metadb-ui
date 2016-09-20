import React from 'react'
import assign from 'object-assign'
import SelectedFacetsList from './SelectedFacetsList.jsx'
import FacetListItem from './FacetListItem.jsx'

const T = React.PropTypes

const FacetList = React.createClass({
	propTypes: {
		label: T.string.isRequired,
		name: T.string.isRequired,

		items: T.array.isRequired,
		onRemove: T.func.isRequired,
		onSelect: T.func.isRequired,
		selectedValues: T.array.isRequired,
	},

	handleFacetClick: function (facet) {
		this.props.onSelect(facet)
	},

	renderFacetList: function () {
		return this.props.items.map((item, index) => {
			const props = assign({}, item, {
				key: this.props.name + index,
				onClick: this.handleFacetClick,
			})

			return React.createElement(FacetListItem, props)
		})
	},

	renderSelectedFacets: function () {
		const selected = this.props.selectedValues
		if (!selected.length)
			return

		return (
			<SelectedFacetsList
				onRemove={this.props.onRemove}
				values={selected}
			/>
		)
	},

	render: function () {
		const styles = {
			list: {
				listStyleType: 'none',
				margin: '0',
				padding: '0',
			}
		}

		return (
			<div>
				{this.renderSelectedFacets()}
				<ul style={styles.list}>
					{this.renderFacetList()}
				</ul>
			</div>
		)
	}
})

export default FacetList
