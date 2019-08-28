import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NotFound from '../pages/notFound';
import Login from '../pages/login';
import Signup from '../pages/signup';
import Home from '../pages/home';
import CourseDetail from '../pages/courseDetail';
import CreateCourse from '../pages/createCourse';
import SubscriptionCourses from '../pages/subscriptionCourses';
import ProfileEdit from '../pages/profileEdit';
import EditCourse from '../pages/editCourse';
import Profile from '../pages/profile';
import configureStore from '../lib/redux';

const { store, persistor } = configureStore();

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} requireAuth={true} />} />
);

const AppRouter = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact />
            <ProtectedRoute path="/create-a-course" component={CreateCourse} exact />
            <ProtectedRoute path="/subscriptions" component={SubscriptionCourses} exact={true} />
            <Route path="/courses/:id/edit" component={EditCourse} />
            <Route path="/courses/:id" component={CourseDetail} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/profile" component={Profile} exact={true} />
            <ProtectedRoute path="/profile/edit" component={ProfileEdit} exact={true} />
            <Route path="/signup" component={Signup} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default AppRouter;
