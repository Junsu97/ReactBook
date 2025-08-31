import {useParams} from "react-router-dom";

const data: Record<string, {name:string; description:string}> = {
    Junsu97: {
        name: '준수',
        description: '리액트를 공부하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    }
};

const Profile = () => {
    const params = useParams<{ username?: string }>();
    const profile = params.username ? data[params.username] : null;

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;