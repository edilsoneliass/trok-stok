import * as S from './styles';

type CardProps = {
    title: string;
    detail?: string;
    onClick?: () => void;
};

const TextCard: React.FC<CardProps> = ({ title, detail, onClick }) => {
    return (
        <S.Container onClick={onClick}>
            <S.MainText>{title}</S.MainText>
            {detail && <S.Detail>{detail}</S.Detail>}
        </S.Container>
    );
};

export default TextCard;
