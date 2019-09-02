const initialState = {
  name: "Mike",
};


const updateName = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        name: action.payload
      };
    default:
      return state;
  }
};


export default updateName;