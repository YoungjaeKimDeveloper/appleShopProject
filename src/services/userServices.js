import apiClient from "../../utiles/api-client";

export function signup(user, profile) {
  const body = new FormData();

  body.append("name", user.name);
  body.append("email", user.email);
  body.append("password", user.password);
  body.append("deliveryAddress", user.deliveryAddress);
  body.append("profilePic", profile);

  return apiClient.post("/user/signup", body);
}

export function login(user) {
  return apiClient.post("/user/login", user);
}

export function logout() {
  localStorage.removeItem("token");
}
