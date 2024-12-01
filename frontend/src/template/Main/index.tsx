import { useRouter } from 'next/router';
import TextInput from 'components/Inputs';
import LinedText from 'components/Text';
import BaseButton from 'components/Button';
import TextCard, { TradeCard } from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import * as S from './styles';

const MainTemplate = () => {
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
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
                                <TextCard
                                    title="Parafuso M1"
                                    detail="Quantidade: 15 unidades"
                                />
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
