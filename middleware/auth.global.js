export default defineNuxtRouteMiddleware((to, from) => {
  // const user = { value: true }; // Replace with your actual user authentication check
  //
  // // If the user is not authenticated
  // if (!user.value) {
  //   // If the user is trying to access a protected route, redirect to /login
  //   if (to.path !== '/login') {
  //     return navigateTo('/login');
  //   }
  // } else {
  //   // If the user is authenticated
  //   // If the user is trying to access the /login route, redirect to /
  //   if (to.path === '/login') {
  //     return navigateTo('/');
  //   }
  // }
  //
  // // Allow the navigation to proceed
  return;
});
