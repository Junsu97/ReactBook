import { Link, NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            <Outlet /> {/* 중첩 라우트가 보여질 자리 */}
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
}

const ArticleItem = ({ id }: { id: number }) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <li>
            <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                게시글 {id}
            </NavLink>
        </li>
    )
}

export default Articles;