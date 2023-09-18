import config from '~/config';

//Pages
import Login from '~/pages/Login/Login';

// Public routes
const publicRoutes = [{ path: config.routes.home, component: Login }];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
