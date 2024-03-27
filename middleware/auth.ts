export default defineNuxtRouteMiddleware(() => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (isAuthenticated() === false) {
        return navigateTo('/login')
    }
})

function isAuthenticated() {
    // Check if user is authenticated
    return true
}