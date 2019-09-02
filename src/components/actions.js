const inc = () => {
  return {
    type: 'INC'
  }
};

const dec = () => {
  return {
    type: 'DEC'
  }
};

const updateName = (payload) => {
  return {
    type: "UPDATE_NAME",
    payload: payload,
  }
};

export {
  inc,
  dec,
  updateName,
}