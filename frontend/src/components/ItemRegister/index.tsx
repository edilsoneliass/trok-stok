import LinedText from 'components/Text';
import TextInput from 'components/Inputs';
import BaseButton from 'components/Button';
import * as S from './styles';

type CreateItemProps = {
    active?: boolean;
    onCreate?: () => void;
};

const CreateItem: React.FC<CreateItemProps> = ({ active, onCreate }) => {
    return (
        <>
            {active && (
                <S.Container>
                    <S.SafeArea>
                        <S.Title>Cadastro de Itens</S.Title>
                        <S.Section>
                            <S.ImageDiv>
                                <LinedText color="black">Imagem</LinedText>
                                <S.AddImage>
                                    <S.AddImageText>
                                        + Adicionar Imagem
                                    </S.AddImageText>
                                </S.AddImage>
                                <S.InputImageDiv>
                                    <TextInput
                                        label="Link da Imagem"
                                        fullWidth
                                        placeholder="https://imagem.com"
                                    />
                                </S.InputImageDiv>
                            </S.ImageDiv>
                            <S.ItemDetails>
                                <LinedText color="black">
                                    Detalhes do Item
                                </LinedText>
                                <S.InputsDiv>
                                    <TextInput label="Nome do Item" fullWidth />
                                    <TextInput
                                        label="Quantidade"
                                        fullWidth
                                        type="number"
                                    />
                                    <TextInput label="Descrição" fullWidth />
                                    <S.InputImageDiv>
                                        <BaseButton onClick={onCreate}>
                                            Criar
                                        </BaseButton>
                                    </S.InputImageDiv>
                                </S.InputsDiv>
                            </S.ItemDetails>
                        </S.Section>
                    </S.SafeArea>
                </S.Container>
            )}
        </>
    );
};

export default CreateItem;
