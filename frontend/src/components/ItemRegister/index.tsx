/* eslint-disable no-alert */
import LinedText from 'components/Text';
import TextInput from 'components/Inputs';
import BaseButton from 'components/Button';
import { useState } from 'react';
import ItemService from 'services/ItemService';
import * as S from './styles';

type CreateItemProps = {
    active?: boolean;
    onCreate?: () => void;
};

const CreateItem: React.FC<CreateItemProps> = ({ active, onCreate }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleCreate = async () => {
        try {
            await ItemService.createItem({
                name,
                description,
                quantity,
                category: 1
            });
            window.alert('Item criado com sucesso!');
            onCreate && onCreate();
        } catch (error) {
            window.alert('erro ao criar o item, tente novamente mais tarde');
            onCreate && onCreate();
        }
    };

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
                                        onChange={(e) => {
                                            setImageUrl(e.target.value);
                                        }}
                                        value={imageUrl}
                                    />
                                </S.InputImageDiv>
                            </S.ImageDiv>
                            <S.ItemDetails>
                                <LinedText color="black">
                                    Detalhes do Item
                                </LinedText>
                                <S.InputsDiv>
                                    <TextInput
                                        label="Nome do Item"
                                        fullWidth
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        value={name}
                                    />
                                    <TextInput
                                        label="Quantidade"
                                        fullWidth
                                        type="number"
                                        onChange={(e) => {
                                            setQuantity(
                                                parseInt(e.target.value, 10)
                                            );
                                        }}
                                        value={quantity}
                                    />
                                    <TextInput
                                        label="Descrição"
                                        fullWidth
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
                                        value={description}
                                    />
                                    <S.InputImageDiv>
                                        <BaseButton onClick={handleCreate}>
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
