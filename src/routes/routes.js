import RoutesPrivate from "./routesPrivate.js";
import RoutesOpen from "./routesOpen.js";
function Routes () {

    const user = {
        id_user : 2
    }
    return user.id_user ? <RoutesPrivate/> : <RoutesOpen/>

}

export default Routes