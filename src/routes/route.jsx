import { createBrowserRouter } from 'react-router';
import Root from '../comps/layout/Root';
import App from '../App';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Project from '../pages/Projects';
import NoPage from '../pages/NoPage';
import Versions from '../pages/Versions';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            { index: true, Component: App },
            { path: '/about', Component: About },
            { path: '/contact', Component: Contact },
            { path: '/projects', Component: Project },
            { path: '/versions', Component: Versions},
            { path: '/*', Component: NoPage }
        ]
    }
]);

export { router }