import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import LinedText from 'components/Text';
import TextCard from 'components/Card';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import { useState } from 'react';
import Item from 'interfaces/Item';
import BaseButton from 'components/Button';
import { useRouter } from 'next/router';
import * as S from './styles';

const ITEM_TYPE = 'CARD';

const DraggableCard = ({ item }: { item: Item }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ITEM_TYPE,
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                width: '100%'
            }}
        >
            <TextCard title={item.name} detail={item.description} />
        </div>
    );
};

const DroppableZone = ({
    children,
    dropItems,
    setItems,
    sourceItems,
    setSourceItems
}: {
    children: React.ReactNode;
    dropItems: Item[];
    setItems: (items: Item[]) => void;
    sourceItems: Item[];
    setSourceItems: (items: Item[]) => void;
}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (draggedItem: Item) => {
            // Verificar se o item já existe na zona de destino
            if (!dropItems.find((i) => i.id === draggedItem.id)) {
                // Adiciona o item à zona de destino
                setItems([...dropItems, draggedItem]);
                // Remove o item da zona de origem
                setSourceItems(
                    sourceItems.filter((i) => i.id !== draggedItem.id)
                );
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));

    return (
        <S.TradeZone
            ref={drop}
            style={{
                backgroundColor: isOver ? '#e0ffe0' : '#f8f8f8',
                padding: '10px',
                borderRadius: '8px',
                border: '1px dashed #ccc'
            }}
        >
            {children}
        </S.TradeZone>
    );
};

const DroppableZoneStart = ({
    children,
    dropItems,
    setItems,
    sourceItems,
    setSourceItems
}: {
    children: React.ReactNode;
    dropItems: Item[];
    setItems: (items: Item[]) => void;
    sourceItems: Item[];
    setSourceItems: (items: Item[]) => void;
}) => {
    const [, drop] = useDrop(() => ({
        accept: ITEM_TYPE,
        drop: (draggedItem: Item) => {
            if (!dropItems.find((i) => i.id === draggedItem.id)) {
                setItems([...dropItems, draggedItem]);
                setSourceItems(
                    sourceItems.filter((i) => i.id !== draggedItem.id)
                );
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));

    return <S.CardsWrapper ref={drop}>{children}</S.CardsWrapper>;
};

const CreateTradeTemplate = () => {
    const router = useRouter();

    const [sideBar, setSideBar] = useState(false);

    const [myItens, setMyItens] = useState<Item[]>([
        {
            id: 1,
            name: 'Notebook',
            description: 'Computador portátil para trabalho diário',
            category: 1
        },
        {
            id: 2,
            name: 'Celular',
            description: 'Dispositivo móvel com acesso à internet',
            category: 1
        },
        {
            id: 3,
            name: 'Caderno',
            description: 'Útil para anotações e estudos rápidos',
            category: 1
        }
    ]);
    const [myTrade, setMyTrade] = useState<Item[]>([]);

    const [externalItems, setExternalItems] = useState<Item[]>([
        {
            id: 4,
            name: 'Tablet',
            description: 'Dispositivo compacto para leitura e navegação',
            category: 1
        },
        {
            id: 5,
            name: 'Relógio inteligente',
            description: 'Monitora atividades e exibe notificações',
            category: 1
        },
        {
            id: 6,
            name: 'Câmera digital',
            description: 'Captura fotos e vídeos em alta resolução',
            category: 1
        }
    ]);
    const [externalTrade, setExternalTrade] = useState<Item[]>([]);

    return (
        <DndProvider backend={HTML5Backend}>
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
                        <LinedText>Área de Troca</LinedText>
                        <S.TradeArea>
                            <DroppableZone
                                dropItems={myTrade}
                                setItems={setMyTrade}
                                sourceItems={myItens}
                                setSourceItems={setMyItens}
                            >
                                {myTrade.map((item) => (
                                    <DraggableCard key={item.id} item={item} />
                                ))}
                            </DroppableZone>
                            <S.SendTradeWrapper>
                                <BaseButton
                                    onClick={() => {
                                        router.push('/main');
                                        // eslint-disable-next-line no-alert
                                        window.alert(
                                            'Troca enviada com sucesso!'
                                        );
                                    }}
                                >
                                    Enviar
                                </BaseButton>
                                <BaseButton
                                    color="secondary"
                                    onClick={() => {
                                        router.back();
                                    }}
                                >
                                    Cancelar
                                </BaseButton>
                            </S.SendTradeWrapper>
                            <DroppableZone
                                dropItems={externalTrade}
                                setItems={setExternalTrade}
                                sourceItems={externalItems}
                                setSourceItems={setExternalItems}
                            >
                                {externalTrade.map((item) => (
                                    <DraggableCard key={item.id} item={item} />
                                ))}
                            </DroppableZone>
                        </S.TradeArea>
                        <S.ContentDivs>
                            <S.ItemsDiv>
                                <LinedText>Meus Itens</LinedText>
                                <DroppableZoneStart
                                    dropItems={myItens}
                                    setItems={setMyItens}
                                    sourceItems={myTrade}
                                    setSourceItems={setMyTrade}
                                >
                                    {myItens.map((item) => (
                                        <DraggableCard
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}
                                </DroppableZoneStart>
                            </S.ItemsDiv>
                            <S.ProposalDiv>
                                <LinedText>
                                    Itens Externos: Laboratório 2
                                </LinedText>
                                <DroppableZoneStart
                                    dropItems={externalItems}
                                    setItems={setExternalItems}
                                    sourceItems={externalTrade}
                                    setSourceItems={setExternalTrade}
                                >
                                    {externalItems.map((item) => (
                                        <DraggableCard
                                            key={item.id}
                                            item={item}
                                        />
                                    ))}
                                </DroppableZoneStart>
                            </S.ProposalDiv>
                        </S.ContentDivs>
                    </S.SafeArea>
                </S.Container>
            </S.BgContainer>
        </DndProvider>
    );
};

export default CreateTradeTemplate;
