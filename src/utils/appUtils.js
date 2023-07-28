export const AppUtils = {
  getHttpHeaders: function() {
    return {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      timeout: 3000000
    };
  }
};
