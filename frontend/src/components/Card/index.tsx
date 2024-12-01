import BaseButton from 'components/Button';
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

type TradeCardProps = {
    entA: string;
    entB: string;
    detail?: string;
    onClick?: () => void;
    buttonText?: string;
};

export const TradeCard: React.FC<TradeCardProps> = ({
    entA,
    entB,
    detail,
    onClick,
    buttonText
}) => {
    return (
        <S.TradeContainer onClick={onClick}>
            <S.TradeWrapper>
                <S.NamesWrapper>
                    <S.MainText>{entA}</S.MainText>
                    <S.MainText>{'<>'}</S.MainText>
                    <S.MainText>{entB}</S.MainText>
                </S.NamesWrapper>
                {detail && <S.Detail>{detail}</S.Detail>}
            </S.TradeWrapper>
            {buttonText && (
                <S.ButtonWrapper>
                    <BaseButton>{buttonText}</BaseButton>
                </S.ButtonWrapper>
            )}
        </S.TradeContainer>
    );
};

export default TextCard;
