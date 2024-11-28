import * as S from './styles';

type LinedTextProps = {
    children: React.ReactNode;
};

const LinedText = ({ children }: LinedTextProps) => {
    return (
        <S.TextContainer>
            <S.Line />
            <S.Text>{children}</S.Text>
            <S.Line />
        </S.TextContainer>
    );
};

export default LinedText;
