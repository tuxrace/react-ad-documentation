import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../constants/routes';

const Documentation = React.lazy(() => import('../../modules/Documentation'));
const Guide = React.lazy(() => import('../../modules/Guide'));
const Intro = React.lazy(() => import('../../modules/Intro'));
const Reference = React.lazy(() => import('../../modules/Reference'));

const Routes: React.FC<{}> = () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Switch>
                <Route path={'/'} exact component={Documentation} />
                <Route path={`${routes.developer}/:id${routes.guide}`} component={Guide} />
                <Route path={`${routes.developer}/:id${routes.intro}`} component={Intro} />
                <Route path={`${routes.developer}/:id${routes.reference}`} component={Reference} />
            </Switch>
        </Router>
    </Suspense>
}

export default Routes;
