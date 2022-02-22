import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import { useEffect, useState } from 'react';

import SplashScreenHome from './components/SplashPage/SplashScreen-Home';
import SplashScreenSecond from './components/SplashPage/SplashScreen-Second';
import MenuView4Page from './components/MenuView4Page';
import MenuHome from './components/MenuPage/MenuHome';
import Home from './components/Home';
import QrPage from './components/QrPage/QrPage';
import QrView7Page from './components/QrView7Page';
import QrView3Page from './components/QrView3Page';
import IntroPage from './components/GamePage/IntroPage';
import Login from './components/GamePage/Login/LoginPage';
import Register from './components/GamePage/Register/RegisterPage';
import RegisterGroup from './components/GamePage/Register/ProfileGroudRegister';
import InterestPage from './components/GamePage/Register/InterestPage';
import PageError from './components/PageError';
import PageShell from './components/PageShell';

import './App.css';
import './styles/splashHome.css';
import './styles/filepod-custom.css';
import SocketWrapper from './components/SocketWrapper';
import history from './@history';
import PublicChat from './components/Chat/PublicChat';
import InvitedPage from './components/Chat/InvitedPage';
import PersonalChat from './components/Chat/PersonalChat';
import ProfilePage from './components/GamePage/Profile/ProfilePage';
import LookAtGroupProfile from './components/GamePage/Profile/LookAtGroupProfile';
import Auth from './components/Auth';
import withAppProviders from './components/withAppProviders';
import OrderPage from './components/OrderPage';
import ConfirmOrderPage from './components/ConfirmOrderPage';
import CommerceDetailPage from './components/CommerceDetailPage';

function App() {
  const tokenInitial = localStorage.getItem('@token-login');
  const [localToken, setLocalToken] = useState(tokenInitial);

  useEffect(() => {
    setLocalToken(localStorage.getItem('@token-login'));
  }, [localToken]);

  return (
    <Auth>
      <Router history={history}>
        <SocketWrapper>
          <Switch>
            {/* TODO: VISTA-1 */}
            <Route
              path="/home/:idCommerce"
              component={PageShell(Home, Grow, 'left')}
              exact={false}
            />

            {/* TODO: VISTA-2 */}
            <Route
              path="/view-2"
              component={PageShell(CommerceDetailPage, Grow, 'left')}
              exact={false}
            />

            {/* TODO: VISTA-3 */}
            <Route path="/view-3" component={PageShell(QrView3Page, Grow, 'left')} exact />

            {/* TODO: VISTA-4 */}
            <Route
              path="/view-4"
              component={PageShell(MenuView4Page, Grow, 'left')}
              exact={false}
            />

            {/* TODO: VISTA-5 */}
            <Route path="/view-5" component={PageShell(OrderPage, Grow, 'left')} exact={false} />

            {/* TODO: VISTA-6 */}
            <Route
              path="/view-6"
              component={PageShell(ConfirmOrderPage, Grow, 'left')}
              exact={false}
            />

            {/* TODO: VISTA-7 */}
            <Route path="/view-7" component={PageShell(QrView7Page, Grow, 'left')} exact={false} />

            <Route path="/" component={PageShell(QrPage, Grow, 'left')} exact />

            <Route
              path="/commerce/:idCommerce"
              component={PageShell(SplashScreenHome, Grow, 'left')}
              exact={false}
            />

            <Route
              path="/second/:idCommerce"
              component={PageShell(SplashScreenSecond, Grow, 'left')}
              exact={false}
            />

            <Route
              path="/menu/:idCommerce"
              component={PageShell(MenuHome, Grow, 'left')}
              exact={false}
            />

            <Route
              path="/intro-game/:idCommerce"
              component={PageShell(IntroPage, Grow, 'left')}
              exact={false}
            />
            <Route
              path="/login"
              // component={PageShell(Login, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <Redirect to="/chat-public" /> : <Login />;
              }}
            />
            <Route
              path="/register"
              exact={false}
              render={() => {
                return localToken ? <Redirect to="/chat-public" /> : <Register />;
              }}
            />
            <Route
              path="/register-group"
              // component={PageShell(RegisterGroup, Grow, 'left')}
              exact={false}
              render={() => {
                return <RegisterGroup />;
              }}
            />
            <Route
              path="/interest"
              // component={PageShell(InterestPage, Grow, 'left')}
              exact={false}
              render={() => {
                return <InterestPage />;
              }}
            />
            <Route
              path="/chat-public"
              // component={PageShell(PublicChat, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <PublicChat /> : <Login />;
              }}
            />
            <Route
              path="/chat-guest"
              // component={PageShell(InvitedPage, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <InvitedPage /> : <Login />;
              }}
            />
            <Route
              path="/chat-personal"
              // component={PageShell(PersonalChat, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <PersonalChat /> : <Login />;
              }}
            />
            <Route
              path="/profile"
              // component={PageShell(ProfilePage, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <ProfilePage /> : <Login />;
              }}
            />
            <Route
              path="/look-at-profile"
              // component={PageShell(LookAtGroupProfile, Grow, 'left')}
              exact={false}
              render={() => {
                return localToken ? <LookAtGroupProfile /> : <Login />;
              }}
            />
            <Route path="*" component={PageShell(PageError, Grow, 'left')} exact={false} />
          </Switch>
        </SocketWrapper>
      </Router>
    </Auth>
  );
}

export default withAppProviders(App)();
