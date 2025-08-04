import { Header } from './Header'
import { HomePage } from './MyHomePage'
import { Footer } from './Footer'
import { FriendsPage } from './FriendsPage'
import { ProfilePage } from './ProfilePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 text-gray-800">
      {/* BrowserRouter component is used to define routing */}
      <BrowserRouter>
        <Header />
        {/* ROutes Component is used to group route */}
        <Routes>
          {/* Route Component used to provide the actual route by linking path with element */}
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='profile' element={<ProfilePage />}></Route>
          <Route path='/friends' element={<FriendsPage />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;