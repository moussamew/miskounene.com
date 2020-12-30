import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: string
}

const StyledText = styled.p`
  ${tw`mb-1 text-justify whitespace-pre-line`}
`

const Text: FunctionComponent<Props> = ({ children }) => (
  <StyledText dangerouslySetInnerHTML={{ __html: children }} />
)

export { Text }
