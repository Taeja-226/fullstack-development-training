import {Header1} from './Header1'
import {Header2} from './Header2'
import {Footer} from './Footer'
import {HomePage} from './HomePage'
import {CreateAccount} from './CreateAccount'
import {Login} from './Login'
import {BankDetail} from './BankDetails'
import {Transfer} from './Transfer'
import {TransactionPage} from './TransactionPage'
import {LogoutPage} from './LogoutPage'
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
   <div className="flex flex-col min-h-screen">
  <BrowserRouter>
    <Header1 />
    <Header2 />

    <main className="flex-1">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Account" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/bankDetail" element={<BankDetail />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </main>

    <Footer />
  </BrowserRouter>
</div>

  );
}

export {App};
