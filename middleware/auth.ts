export default defineNuxtRouteMiddleware(() => {
  if (!isAuthenticated()) {
    return navigateTo("/login");
  }
});

let isAuthenticated: () => boolean = () => true;

export function setIsAuthenticated(authenticated: () => boolean) {
  isAuthenticated = authenticated;
}
