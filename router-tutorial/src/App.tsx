import './App.css'
import Articles from "./pages/Articles.tsx";
import Article from "./pages/Article.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Profile from "./pages/Profile.tsx";
import Layout from './Layout.tsx';
import NotFound from './pages/NotFound.tsx';
import Login from './pages/Login.tsx';
import MyPage from './pages/MyPage.tsx';

function App() {
  return (
   <Routes>
    <Route path="*" element={<NotFound />} />
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/profiles" element={<Profile />} /> {/* username 없이 처리 */}
          <Route path="/profiles/:username" element={<Profile />} />
        </Route>
        <Route path="/articles" element={<Articles />} >   
          <Route path=":id" element={<Article />} />  {/* 중첩 라우트 */}
        </Route> 
        <Route path='/login' element={<Login />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
