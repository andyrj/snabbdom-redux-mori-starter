'use strict';

export default function visibility(state = 'SHOW_ALL', action) {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state;
	}
}
