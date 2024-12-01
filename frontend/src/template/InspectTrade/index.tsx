import LinedText from 'components/Text';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import Item from 'interfaces/Item';
import BaseButton from 'components/Button';
import { useRouter } from 'next/router';
import * as S from './styles';

const InspectTradeTemplate = () => {
    const router = useRouter();
    const [sideBar, setSideBar] = useState(false);

    const [myItens] = useState<Item[]>([
        {
            id: '1',
            name: 'Notebook',
            description: 'Computador portátil para trabalho diário'
        },
        {
            id: '2',
            name: 'Celular',
            description: 'Dispositivo móvel com acesso à internet'
        },
        {
            id: '3',
            name: 'Caderno',
            description: 'Útil para anotações e estudos rápidos'
        }
    ]);

    const [externalItems] = useState<Item[]>([
        {
            id: '4',
            name: 'Tablet',
            description: 'Dispositivo compacto para leitura e navegação'
        },
        {
            id: '5',
            name: 'Relógio inteligente',
            description: 'Monitora atividades e exibe notificações'
        },
        {
            id: '6',
            name: 'Câmera digital',
            description: 'Captura fotos e vídeos em alta resolução'
        }
    ]);

    return (
        <S.BgContainer>
            {sideBar && <SideBar />}
            <S.Container>
                <Header
                    onClick={() => {
                        setSideBar(!sideBar);
                    }}
                    title="Proposta de Troca"
                    subtitle="Poli Júnior <> Laboratório 2"
                />
                <S.SafeArea>
                    <S.Section>
                        <LinedText>Meus Itens</LinedText>
                        <LinedText>Itens Externos</LinedText>
                    </S.Section>
                    <S.TradeArea>
                        <S.TradeZone>
                            {myItens.map((item) => (
                                <TextCard
                                    title={item.name}
                                    detail={item.description}
                                />
                            ))}
                        </S.TradeZone>
                        <S.SendTradeWrapper>
                            <BaseButton
                                onClick={() => {
                                    router.push('/main');
                                    // eslint-disable-next-line no-alert
                                    window.alert(
                                        'Troca realizada com sucesso!'
                                    );
                                }}
                            >
                                Confirmar
                            </BaseButton>
                            <BaseButton
                                color="secondary"
                                onClick={() => {
                                    router.push('/trade/create');
                                }}
                            >
                                Editar
                            </BaseButton>
                            <BaseButton
                                color="secondary"
                                onClick={() => {
                                    router.push('/main');
                                }}
                            >
                                Cancelar
                            </BaseButton>
                        </S.SendTradeWrapper>
                        <S.TradeZone>
                            {externalItems.map((item) => (
                                <TextCard
                                    title={item.name}
                                    detail={item.description}
                                />
                            ))}
                        </S.TradeZone>
                    </S.TradeArea>
                </S.SafeArea>
            </S.Container>
        </S.BgContainer>
    );
};

export default InspectTradeTemplate;
