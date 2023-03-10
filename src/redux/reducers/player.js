const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};
function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'score':
    return {
      ...state,
      score: state.score + action.payload,
      assertions: state.assertions + 1,
    };
  case 'zerar':
    return {
      ...state,
      score: action.payload,
      assertions: action.payload,
    };
  default:
    return state;
  }
}
export default player;
