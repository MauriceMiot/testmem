const reconcile = (state: any, payload: any) => {
  const keyNames = Object.keys(state);
  let trueState = {};

  keyNames.forEach((key) => {
    switch (key) {
      case 'page':
        let currentPages = state[key];
        const rewritePages: any = {};

        for (let currentPage in currentPages) {
          const prevPage = currentPages[currentPage];
          const existPrevPage = prevPage ? Object.keys(prevPage)?.length : null;

          if (existPrevPage) {
            rewritePages[currentPage] = prevPage;

            trueState = {
              ...trueState,
              page: {
                ...currentPages,
                ...payload[key],
                ...rewritePages,
              },
            };
          }
        }

        break;
      case 'auth':
        const credentials = state[key];
        trueState = { ...trueState, auth: credentials };
        break;

      default:
        break;
    }
  });

  return trueState;
};

export default reconcile;
