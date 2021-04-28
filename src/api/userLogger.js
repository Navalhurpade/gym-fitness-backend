const authTokenKey = "x-auth-token";

export async function loginUser(token, rememberMe) {
  if (rememberMe) await localStorage.setItem(authTokenKey, token);
  else await sessionStorage.setItem(authTokenKey, token);
}
export function loguotUser() {
  localStorage.removeItem(authTokenKey);
  sessionStorage.removeItem(authTokenKey);
}

export const isUserLoggedIn = () => {
  const foundSessionToken = sessionStorage.getItem(authTokenKey);
  const foundLocalToken = localStorage.getItem(authTokenKey);

  if (foundSessionToken || foundLocalToken) {
    return true;
  } else {
    return false;
  }
};

export const findToken = () => {
  const foundToken =
    sessionStorage.getItem(authTokenKey) || localStorage.getItem(authTokenKey);

  if (foundToken) return foundToken;
  else return false;
};
