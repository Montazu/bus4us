import { useState } from 'react'
import styled from 'styled-components'
import { wordChanger } from '../helpers/wordChanger'

const Wrapper = styled.div`
    height: 150px;
    width: 100%;
    width: -webkit-fill-available;
    position: absolute;
    bottom: 0;
    background: ${({theme}) => theme.colors.white};
    z-index: 1;
    margin: 3px;
    border-radius: 20px;
    overflow: hidden;
	display: flex;
	flex-flow: column;

    ${({theme}) => theme.queries.laptop} {
        height: 180px;
        width: 1000px;
        left: 0;
        right: 0;
        margin: 0 auto;
        box-shadow: 0px 14px 36px 0px #00000038;
        bottom: -70px;
    }
`
const Navigaton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px 0 3px 0;

    button {
        cursor: pointer;
        font-size: 1.4rem;
        border: none;
        background: 0;
    }

    ${({theme}) => theme.queries.laptop} {
        display: none
    }
`
const Container = styled.div`
    height: 100%;
	width: 100%;
	flex: 1;
	position: relative;

    ${({theme}) => theme.queries.laptop} {
        display: flex;
    }
`
const Header = styled.header`
    display: flex;
	justify-content: center;
	align-content: center;
`
const ItemBelt = styled.div<{setWidth?: number, setTranslateX?: number}>`
    background: ${({theme}) => theme.colors.blue};
	height: 3px;
	display: flex;
	width: ${props => props.setWidth}px;
	transform: translateX(${props => props.setTranslateX}px);
	transition: all 0.5s ease-in-out;
	border-radius: 1rem;
	display: flex;

    ${({theme}) => theme.queries.laptop} {
        display: none
    }
`
const Tab = styled.div<{setTranslateX?: string | any}>`
    height: 100%;
    width: 100%;
    position: absolute;
    transition: transform 0.5s ease-in-out;
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    flex-flow: column;
    transform: translateX(${props => props.setTranslateX}%);

    &:last-child {
        display: none;
    }

    ${({theme}) => theme.queries.laptop} {
        position: unset;
        padding: 20px;
        transform: unset;

        &:last-child {
            display: flex;
        }
    }
`
const Input = styled.input`
    height: 50%;
    border: 0;
    border-radius: 10px;
    padding: 20px;
    width: 80%;
    margin: 0 auto;
    background: #dce0e6;

    ${({theme}) => theme.queries.laptop} {
        width: 100%;
    }
`
const List = styled.ul`
    font-size: 1.4em;
    width: 80%;
    list-style: none;
    left: 0;
    right: 0;
    position: absolute;
    margin: 0 auto;
    bottom: 88px;

    li {
        padding: 5px 20px;
        margin: 3px 0;
        background: #dce0e6;
        cursor: pointer;
        border-radius: 10px;
    }
       
`

export default function SearchBar() {
    const [activeTab, setActiveTab] = useState({
        itemBeltWidth: 48,
        itemBeltTranslateX: 31,
        activeTab: 0,
    })
    const [proposedLocation, setProposedLocation] = useState([{}]);

    const handleClickItem = (item: any, index: number) => {
        const prevItems = [0, 1, 2];
		const nextItems = prevItems.splice(index);
		nextItems.shift();

        setActiveTab({
            itemBeltWidth: item.target.offsetWidth,
            itemBeltTranslateX: item.target.offsetLeft,
            activeTab: index,
        })
    }
    
    const locationBase = [
        {
            id: 1,
            name: "Kraków"
        },
        {
            id: 2,
            name: "Warszawa"
        },
        {
            id: 3,
            name: "Kielce"
        },
        {
            id: 4,
            name: "Wrocław"
        },
        {
            id: 5,
            name: "Sosnowiec"
        },
        {
            id: 6,
            name: "Tychy"
        },
        {
            id: 7,
            name: "Szczecin"
        }
    ];

    const searchLocalization = (word: string | any) => {
        const searchValue = word.target.value
        if(searchValue.length > 2) {
            setProposedLocation([...locationBase].filter((x) => 
                wordChanger(x.name).includes(wordChanger(searchValue))))
        }
    }

    console.log(proposedLocation)

    return (
        <Wrapper>
            <Navigaton>
                <button onClick={(item) => handleClickItem(item, 0)}>Wyjazd</button>
                <button onClick={(item) => handleClickItem(item, 1)}>Przyjazd</button>
                <button onClick={(item) => handleClickItem(item, 2)}>Data</button>
	        </Navigaton>

            <ItemBelt
                setWidth={activeTab.itemBeltWidth}
                setTranslateX={activeTab.itemBeltTranslateX}
            />

            <Container>
                <Tab setTranslateX={activeTab.activeTab === 0 ? 0 : '100'}>
                    <Input type="search" placeholder="Dokąd chcesz jechać?" onChange={searchLocalization} />
                    <List>
                        {proposedLocation.map((location: any) =>
                            <li key={location.id}>{location.name}</li>
                        )}
                    </List>
                </Tab>
                <Tab setTranslateX={activeTab.activeTab === 1 ? 0 : '100'}>
                    <Input type="search" placeholder="Dokąd chcesz jechać?" onChange={searchLocalization} />
                    <List>
                        {proposedLocation.map((location: any) =>
                            <li key={location.id}>{location.name}</li>
                        )}
                    </List>
                </Tab>
                <Tab setTranslateX={activeTab.activeTab === 2 ? 0 : '100'}>
                    <Input type="datetime-local" />
                </Tab>
                <Tab></Tab>
            </Container>
        </Wrapper>
    )
}
