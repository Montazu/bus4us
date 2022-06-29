import styled from 'styled-components'

const Wrapper = styled.footer`
    height: 200px;
    background: ${({theme}) => theme.colors.blue};
    border-radius: 20px 20px 0 0;
`

export default function Footer() {
    return (
        <Wrapper>
            Footer
        </Wrapper>
    )
}
