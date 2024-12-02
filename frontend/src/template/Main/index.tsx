import { useRouter } from 'next/router';
import TextInput from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard, { TradeCard } from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useEffect, useState } from 'react';
import Item from 'interfaces/Item';
import OrganizationService from 'services/OrganizationService';
import * as S from './styles';

const MainTemplate = () => {
    const router = useRouter();
    const [sideBar, setSideBar] = useState(false);

    const [items, setItems] = useState<Item[]>();

    const getItems = async () => {
        try {
            const reqItems = await OrganizationService.getOrganizationItems();
            setItems(reqItems.items);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log('erro ao receber os itens da organização');
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <S.BgContainer>
            {sideBar && <SideBar />}
            <S.Container>
                <Header
                    onClick={() => {
                        setSideBar(!sideBar);
                    }}
                    title="Página Principal"
                />
                <S.SafeArea>
                    <TextInput
                        label="O que você quer encontrar?"
                        placeholder="ex: parafusadeira"
                    />
                    <S.ContentDivs>
                        <S.ItemsDiv>
                            <LinedText>Meus Itens</LinedText>
                            <S.ButtonsWrapper>
                                <BaseButton
                                    size="small"
                                    onClick={() => {
                                        router.push('/item/create');
                                    }}
                                >
                                    Cadastrar
                                </BaseButton>
                                <BaseButton
                                    size="small"
                                    onClick={() => {
                                        router.push('/item/my_itens');
                                    }}
                                >
                                    Ver Todos
                                </BaseButton>
                            </S.ButtonsWrapper>
                            <S.CardsWrapper>
                                {items?.map((item) => (
                                    <TextCard
                                        title={item.name}
                                        detail={`Quantidade: ${item.quantity?.toString()} unidades`}
                                    />
                                ))}
                            </S.CardsWrapper>
                        </S.ItemsDiv>
                        <S.ProposalDiv>
                            <LinedText>Propostas Enviadas</LinedText>
                            <S.CardsWrapper>
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Lab 1"
                                    entB="Atlética Poli"
                                    detail="Proposta por: Abner"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Atlética Medicina"
                                    entB="Grêmio Engenharia"
                                    detail="Proposta por: Mariana"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Lab de Física"
                                    entB="Time de Robótica"
                                    detail="Proposta por: João"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Centro Acadêmico"
                                    entB="Atlética Computação"
                                    detail="Proposta por: Fernanda"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Equipe Baja"
                                    entB="Lab de Eletrônica"
                                    detail="Proposta por: Lucas"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Atlética Química"
                                    entB="Grêmio de Física"
                                    detail="Proposta por: Paula"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Lab de Química"
                                    entB="Equipe de Aerodesign"
                                    detail="Proposta por: Rafael"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Atlética Matemática"
                                    entB="Grupo de Estudos"
                                    detail="Proposta por: Ana"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Equipe de Concreto"
                                    entB="Lab de Materiais"
                                    detail="Proposta por: Eduardo"
                                    buttonText="editar"
                                />
                                <TradeCard
                                    onClick={() => {
                                        router.push('/trade/inspect');
                                    }}
                                    entA="Time de Xadrez"
                                    entB="Grupo de Extensão"
                                    detail="Proposta por: Clara"
                                    buttonText="editar"
                                />
                            </S.CardsWrapper>
                        </S.ProposalDiv>
                    </S.ContentDivs>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default MainTemplate;
