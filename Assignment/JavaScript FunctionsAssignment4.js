//Role-Based Route Resolver Using switch + Functions Problem statement
const getRoute = function(role, isLoggedIn) {

    if (!isLoggedIn) {
        return "/login";
    } else {
        switch (role) {
            case "admin":
                return "/admin";

            case "student":
                return "/student";

            case "college":
                return "/college";

            case "proctor":
                return "/proctor";

            default:
                return "/denied";
        }
    }
};
console.log(getRoute("admin", true)); 
console.log(getRoute("student", true)); 
console.log(getRoute("college", true)); 
console.log(getRoute("proctor", true)); 
console.log(getRoute("guest", true)); 
console.log(getRoute("admin", false)); 