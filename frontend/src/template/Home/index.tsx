import { useRouter } from 'next/router';
import ToolsLogo from 'components/ToolsLogo';
import * as S from './styles';

const HomeTemplate = () => {
    const router = useRouter();
    return (
        <S.Container
            onClick={() => {
                router.push('/login');
            }}
        >
            <ToolsLogo />
        </S.Container>
    );
};

export default HomeTemplate;
