import { Outlet, useNavigate } from "react-router-dom"

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // 이전 페이지로 이동
        navigate(-1);
    }
    const goArticles = () => {
        // articles 경로로 이동
        navigate('/articles', {replace: true}); // replace: true -> 현재 페이지를 기록하지 않음
    }
    return (
        <div>
            <header style={{background: 'lightgrey', padding: 16, fontSize: 24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet/> {/* 중첩 라우트가 보여질 자리 */}
            </main>
        </div>
    )
}

export default Layout;