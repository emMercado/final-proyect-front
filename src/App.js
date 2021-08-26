import Header from './components/Header/Header';
import Places from './components/Places/Places';
import Home from './pages/Home/Home';
import CreatePlace from './pages/CreatePlace/CreatePlace';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="mx-auto fixed-1" style={{ backgroundImage: `url('https://getwallpapers.com/wallpaper/full/7/c/6/765090-most-popular-technology-background-images-1920x1080-hd-for-mobile.jpg')` }}>
      <BrowserRouter>
        <Header />
        <div >
          <div className='flex'>
            <div /* className='w-1/5' */>
              <Switch>
                <Route path='/places' component={Places}></Route>
                <Route path='/createplace' component={CreatePlace}></Route>
                <Route path='/' component={Home}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
