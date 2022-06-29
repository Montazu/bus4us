import styled from 'styled-components'
import Logo from '../assets/svgs/logo.svg'

const Wrapper = styled.nav`
    height: 70px;

    ${({theme}) => theme.queries.laptop} {
        margin: 0 70px;
    }
`

const Link = styled.a`
    display: inline-flex;
`

export default function Navigaton() {
    return (
        <Wrapper>
            <Link title="Strona główna" href="/">
                <Logo />
            </Link>
        </Wrapper>
    )
}