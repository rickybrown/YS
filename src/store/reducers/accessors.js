// Generic Getter/Setter
const accessors = (state = [], action) => {
  let property = action.type.split(/_(.+)/)[1];

  if(action.type.includes('SET')) {
    let mutated  = {}

    mutated[property] = action.data

    return {
      ...state,
      ...mutated
    }
  }
  else { return state }
}

export default accessors;
