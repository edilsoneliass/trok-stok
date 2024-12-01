import CreateItem from 'components/ItemRegister';
import { useRouter } from 'next/router';
import * as S from './styles';

const CreateItemTemplate = () => {
    const router = useRouter();

    return (
        <S.BgContainer>
            <CreateItem active onCreate={() => router.back()} />
        </S.BgContainer>
    );
};

export default CreateItemTemplate;
