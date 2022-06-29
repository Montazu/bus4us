import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Footer from '../components/Footer'
import Navigaton from '../components/Navigaton'
import { theme } from '../utils/theme'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #__next {
        height: 100%;
        font-family: 'Inter', sans-serif;
        font-size: 10px;
    }
`

const Wrapper = styled.div`
    height: 100%;
    margin: 0 10px;

    ${theme.queries.laptop} {
        margin: 0 40px;
    }

    ${theme.queries.desktop} {
        margin: 0 150px;
    }
`

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <ThemeProvider theme={theme}>
            <Head>
                <title>Bus4us</title>
            </Head>
            <GlobalStyle />
            <Wrapper>
                <Navigaton />
                {children}
                <Footer />
            </Wrapper>
        </ThemeProvider>
    )
}