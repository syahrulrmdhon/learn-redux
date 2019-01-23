import { NEW_POST, FETCH_POSTS } from '../actions/Types'

const initialState = {
    items: [],
    item: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}