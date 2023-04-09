const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postList: [
        { id: 1, text: 'Hi! Who is here?', like: '5' },
        { id: 2, text: 'Hello, it\'s me', like: '3' }
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postList.length + 1,
                text: state.newPostText,
                like: '0'
            }
            // const stateCopy = {
            //     ...state,
            //     postList: [...state.postList],
            // };
            // stateCopy.postList.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;

            return {
                ...state,
                postList: [...state.postList, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, });


export default profileReducer;

