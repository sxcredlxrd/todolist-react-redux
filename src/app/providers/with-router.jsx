import { Suspense } from "react";
import {ReactRouterProvider} from "../../shared/router/index.jsx";

export const withRouter = (Component) => () => (
    <ReactRouterProvider>
        <Suspense fallback="Loading...">
            <Component />
        </Suspense>
    </ReactRouterProvider>
);