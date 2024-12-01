import { useRouter } from 'next/router';
import TextInput from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import * as S from './styles';

const ItemSearchTemplate = () => {
    const router = useRouter();
    const [sideBar, setSideBar] = useState(false);

    return (
        <S.BgContainer>
            {sideBar && <SideBar />}
            <S.Container>
                <Header
                    onClick={() => {
                        setSideBar(!sideBar);
                    }}
                    title="Pesquisa de Itens"
                    subtitle="Encontre o item que procura dentre todas as Organizações"
                />
                <S.SafeArea>
                    <TextInput
                        label="O que você quer encontrar?"
                        placeholder="ex: parafusadeira"
                    />
                    <LinedText>Categorias</LinedText>
                    <S.ButtonsWrapper>
                        <S.ButtonContainer>
                            <BaseButton size="small">Ferramentas</BaseButton>
                        </S.ButtonContainer>
                        <S.ButtonContainer>
                            <BaseButton size="small">Compostos</BaseButton>
                        </S.ButtonContainer>
                        <S.ButtonContainer>
                            <BaseButton size="small">Eletrônicos</BaseButton>
                        </S.ButtonContainer>
                        <S.ButtonContainer>
                            <BaseButton size="small">Fluidos</BaseButton>
                        </S.ButtonContainer>
                    </S.ButtonsWrapper>
                    <LinedText>Itens</LinedText>
                    <S.CardsWrapper>
                        <TextCard
                            title="Parafuso M1"
                            detail="Organização: Laboratório Química"
                            onClick={() => router.push('/organizations/itens')}
                        />
                        <TextCard
                            title="Porca"
                            detail="Organização: Laboratório Física"
                            onClick={() => router.push('/organizations/itens')}
                        />
                        <TextCard
                            title="Cafeteira"
                            detail="Organização: Laboratório Biologia"
                            onClick={() => router.push('/organizations/itens')}
                        />
                    </S.CardsWrapper>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default ItemSearchTemplate;
