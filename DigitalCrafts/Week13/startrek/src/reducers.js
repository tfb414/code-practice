import actions from './actions'

const crewMembers = (state=[], action) => {
    switch (action.type) {
        case actions.ADD_MEMBER:
            return state.concat({
                name: action.name,
                rank: action.rank,
                id: action.id
            });
        default:
            return state;
    }
}

export default crewMembers;