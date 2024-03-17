const useIsLoading = (boolean) => {
  localStorage.setItem("isLoading", boolean);
  window.dispatchEvent(new Event("storage"));
};

export default useIsLoading;
