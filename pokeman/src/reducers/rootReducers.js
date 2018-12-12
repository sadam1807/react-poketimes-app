const initState = {
    posts: [
        { id: '1', title: 'Squired Laid an Egg', body: 'Lorem ipsum' },
        { id: '2', title: 'Squired Laid  Egg', body: 'Lorem ipsum dfgf'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;