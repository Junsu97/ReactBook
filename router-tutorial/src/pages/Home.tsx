import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지</p>
            <Link to="/about">소개 페이지로 이동</Link>
            <ul>
                <li>
                    <Link to={"/about"}>소개</Link>
                </li>
                <li>
                    <Link to={"/profiles/Junsu97"}>Junsu97의 프로필</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>gildong의 프로필</Link>
                </li>
                <li>
                    <Link to={"/profiles/void"}>존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to={"/profiles/"}>null</Link>
                </li>
            </ul>
        </div>
    );
}
export default Home;


