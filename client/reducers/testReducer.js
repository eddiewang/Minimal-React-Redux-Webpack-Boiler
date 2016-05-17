import { TEST_ACTION } from '../actions/testActions';

export default function testReducer (state = 0, action) {
    switch(action.type){
        case TEST_ACTION:
            return state + 1
        default:
            return state
    }
}