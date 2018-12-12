const initState = {
    posts: [
        { id: '1', title: 'Squired Laid an Egg', body: 'Lorem ipsum' },
        { id: '2', title: 'Squired Laid  Egg', body: 'Lorem ipsum dfgf'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter( post => {
              return action.id !== post.id
         }
        )

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;