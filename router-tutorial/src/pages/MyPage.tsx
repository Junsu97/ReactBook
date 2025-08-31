import { Navigate } from "react-router-dom";

const MyPage = () => {
    const isLoggedIn = false; // 예시로 로그인 상태를 false로 설정

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }

    return <div>마이페이지</div>;
}

export default MyPage;