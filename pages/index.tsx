import styled from "styled-components";
import Layout from "../layout/Layout";
import { FiMonitor } from '@react-icons/all-files/fi/FiMonitor'
import { FiList } from '@react-icons/all-files/fi/FiList'
import { FiCalendar } from '@react-icons/all-files/fi/FiCalendar'
import SearchBar from "../components/SearchBar";

const Wrapper = styled.div`
  height: calc(100% - 70px);
	display: flex;
	flex-flow: column;
`
const Hero = styled.div`
	flex: 1;
	margin-bottom: 10px;
	position: relative;

  &::before, &::after {
	content: "";
	height: 60%;
	width: 100%;
	position: absolute;
	background-image: url("https://images.unsplash.com/photo-1513350949-6bd4ab6ff7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right -15px bottom;
	border-radius: 20px;
	bottom: 0;
  }

  &::after {
	bottom: 80px;
  }

  ${({theme}) => theme.queries.laptop} {
    margin-bottom: 100px;
    border-radius: 30px;

    &::before {
      border-radius: 30px;
      height: 100%;
      z-index: -1;
      background-position: right;
    }

    &::after {
      display: none;
    }
  }
`
const H1 = styled.h1`
  font-size: 5.6rem;
  font-weight: 800;
  width: min-content;
  text-align: center;
  margin: 3% auto;
  position: relative;
  z-index: 1;

  ${({theme}) => theme.queries.laptop} {
      font-size: 7rem;
      text-align: unset;
      margin: 140px 0 20px 100px;
  }
`
const P = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;

  ${({theme}) => theme.queries.laptop} {
      font-size: 1.8rem;
      margin-left: 100px;
      text-align: unset;
  }
`
const WrapperSection = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 50px 0;

    ${({theme}) => theme.queries.laptop} {
        margin: 150px 0;
    }
`
const H2 = styled.h2`
    font-weight: 800;
    font-size: 3.6rem;
    margin-top: 10px;
`
const ItemWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;

    ${({theme}) => theme.queries.laptop} {
        flex-flow: row;
        justify-content: space-evenly;
    }
`
const Item = styled.div`
    max-width: 300px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(2, auto);
    text-align: center;
    grid-row-gap: 5px;
    margin: 20px 0;
`
const IconWrapper = styled.div`
    height: 250px;
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const H3 = styled.h3`
    font-weight: 800;
    font-size: 2.4rem;
    grid-area: 2 / 1 / 3 / 2;
`
const Description = styled.p`
    font-weight: 200;
    font-size: 1.4rem;
    grid-area: 3 / 1 / 4 / 2;
`
const Icon = styled.span`
    height: 60px;
    width: 60px;
    background: ${({theme}) => theme.colors.green};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    box-shadow: 0px 14px 36px 0px rgba(0, 0, 0, .3);
    position: relative;

    ::before, ::after {
        content: '';
        position: absolute;
        border-radius: 100%;
    }

    ::before {
        height: 14px;
        width: 14px;
        box-shadow:
            110px -60px 0 ${({theme}) => theme.colors.yellow},
            -130px 100px 0 ${({theme}) => theme.colors.gray};
    }

    ::after {
        height: 8px;
        width: 8px;
        box-shadow:
            -120px -45px 0 ${({theme}) => theme.colors.light_blue};
    }
`
const Icon2 = styled(Icon)`
    background: ${({theme}) => theme.colors.dark_blue};

    ::before {
        box-shadow:
            110px -15px 0 ${({theme}) => theme.colors.orange},
            -110px -80px 0 ${({theme}) => theme.colors.dark_blue};
    }

    ::after {
        box-shadow:
            -125px 70px 0 ${({theme}) => theme.colors.light_blue};
    }
`
const Icon3 = styled(Icon)`
    background: ${({theme}) => theme.colors.light_blue};

    ::before {
        box-shadow:
            105px -80px 0 ${({theme}) => theme.colors.pink},
            -120px 5px 0 ${({theme}) => theme.colors.dark_blue};
    }

    ::after {
        box-shadow:
            130px 70px 0 ${({theme}) => theme.colors.yellow};
    }
`

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Hero>
          <H1>Podróżuj, planuj</H1>
          <P>Ty decydujesz, gdzie jedziesz.</P>
        <SearchBar />
        </Hero>
      </Wrapper>

      <WrapperSection>
          <H2>Dlaczego my?</H2>
          <ItemWrapper>
            <Item>
              <IconWrapper>
                  <Icon><FiList color={'#fff'} size={25} /></Icon>
              </IconWrapper>
              <H3>Aktualne rozkłady</H3>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc ultrices nibh </Description>
            </Item>
            <Item>
              <IconWrapper>
                  <Icon2><FiMonitor color={'#fff'} size={25} /></Icon2>
              </IconWrapper>
              <H3>Przyjazny interfejs</H3>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc ultrices nibh </Description>
            </Item>
            <Item>
              <IconWrapper>
                  <Icon3><FiCalendar color={'#fff'} size={25} /></Icon3>
              </IconWrapper>
              <H3>Łatwe planowanie</H3>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nunc ultrices nibh </Description>
            </Item>
          </ItemWrapper>
        </WrapperSection>
    </Layout>
  )
}