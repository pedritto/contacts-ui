export const PENDING = '-PENDING';
export const SUCCESS = '-SUCCESS';
export const ERROR = '-ERROR';

export const exec = (method, nameSpace) => {
  return function (dispatch) {
    dispatch({
      type: `${nameSpace}${PENDING}`
    });

    return method()
      .then((data) => {
        dispatch({
          type: `${nameSpace}${SUCCESS}`,
          data
        });
      })
      .catch((error) => {
        dispatch({
          type: `${nameSpace}${ERROR}`,
          error
        });
      });
  };
};
