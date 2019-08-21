const INIT_STATE = {
  loading: true,
  abc: 'asjdbaskjdh'
};
export default function (state = INIT_STATE, action) {
  console.log('askdasdbaskjdhasjhd', action);

  switch (action.type) {
    case 'xyz': {
      console.log('herererere');
      return {
        ...state,
        abc: 'zzz'
      };
    }
    case 'zyx': {
      return {
        ...state,
        abc: 'qqq'
      };
    }
    default:
      return state;
  }
}
