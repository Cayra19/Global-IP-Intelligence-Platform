export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("adminToken");
  sessionStorage.clear();
};
