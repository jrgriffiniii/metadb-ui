import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import FacetGroup from '../src/components/catalog/FacetGroup.jsx'
import assign from 'object-assign'

import data from './data/facets.json'

const findIdx = (arr, fn) => {
	for (let i = 0; i < arr.length; i++) {
		if (fn.call(arr, arr[i], i, arr))
			return i
	}

	return -1
}

const ExampleFacetGroup = React.createClass({
	getInitialState: function () {
		return {
			facets: this.props.facets,
			selectedFacets: {},
		}
	},

	handleFacetSelect: function (name, facet) {
		const pool = assign({}, this.state.selectedFacets)

		if (pool[name])
			pool[name] = [].concat(pool[name], facet)
		else
			pool[name] = [facet]

		const facets = [].concat(this.state.facets)
		const idx = findIdx(facets, fg => fg.name === name)
		facets[idx].items = facets[idx].items.filter(f => f.value !== facet.value)

		this.setState({selectedFacets: pool, facets})
	},

	handleFacetRemove: function (name, facet) {
		const pool = assign({}, this.state.selectedFacets)
		pool[name] = pool[name].filter(f => f.value !== facet.value)

		if (!pool[name].length)
			delete pool[name]

		const facets = [].concat(this.state.facets)
		const idx = findIdx(facets, fg => fg.name === name)
		facets[idx].items = [].concat(facets[idx].items, facet)

		this.setState({selectedFacets: pool, facets})
	},

	render: function () {
		return (
			<div>
				<FacetGroup
					facets={this.state.facets}
					onRemoveFacet={this.handleFacetRemove}
					onSelectFacet={this.handleFacetSelect}
					selectedFacets={this.state.selectedFacets}
				/>

				<div style={{
					backgroundColor: '#ddd',
					display: 'inline-block',
					overflowX: 'scroll',
					position: 'absolute',
					right: '10px',
					top: '10px',
					width: '550px',
				}}>
					<pre>
					{JSON.stringify(this.state.selectedFacets, true, 2)}
					</pre>
				</div>
			</div>
		)
	}
})

storiesOf('<FacetGroup />', module)
	.add('it works!', () => (
		<ExampleFacetGroup facets={data}/>
	))
