import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi'
import styled from 'styled-components'
import {
  BorderTypes,
  ButtonContainerType,
  CommentContainerTypes,
  NumberVotesTypes,
  VoteComponentTypes,
} from './interfaces'
const widthTotal = 600

export const CommentSectionContainer = styled.div`
  max-width: ${widthTotal}px;
  margin-left: auto;
  margin-right: auto;
  color: #212529;
  box-shadow: 0 5px 10px -6px rgb(0 0 0 / 15%);
  background-color: #fafafa;
`

export const CommentContainer = styled.div<CommentContainerTypes>`
  background-color: #fafafa;
  padding-top: 2.6rem;
  padding-right: 2.6rem;
  color: #212529;
  line-height: 1.5;
  text-align: left;
  padding-left: ${(props) => (props.commentLevel === 0 ? '3rem' : '5rem')};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;
`

export const CommentPosition = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`

export const H5 = styled.h5`
  margin-bottom: 0;
  margin-top: 0;
  font-size: 1.25rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
`
export const CommentDate = styled.p`
  font-size: 0.85714rem;
  color: #777;
`

export const ContentWrapper = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
`

export const CommentFooter = styled.div<BorderTypes>`
  padding-left: ${(props) => (props.commentLevel === 0 ? null : '18px')};
`

export const FooterList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 420px) {
    display: -ms-flexbox;
    display: flex;
  }
`

export const ListItem = styled.li`
  margin-right: 5px;
  display: inline-block;
  &:last-child {
    margin-left: auto;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`

export const ListItemContent = styled.a`
  color: #777;
  user-select: none;
  text-decoration: none;
  background-color: transparent;
  touch-action: manipulation;
  cursor: pointer;
`

export const NumberVotes = styled.div<NumberVotesTypes>`
  color: ${(props) =>
    props.hoverUp ? 'lightgreen' : props.hoverDown ? 'red' : null};
  display: inline-block;
  user-select: none;
`

export const HL = styled.hr`
  height: 0.125rem;
  border: none;
  background-color: rgb(237, 233, 225);
  margin: 0px;
`

export const UpVoteComponent = styled(FiThumbsUp)<VoteComponentTypes>`
  height: 1.3rem;
  vertical-align: sub;
  color: ${(props) => (props.hover ? 'lightgreen' : null)};
`

export const DownVoteComponent = styled(FiThumbsDown)<VoteComponentTypes>`
  height: 1.1rem;
  vertical-align: sub;
  color: ${(props) => (props.hover ? 'red' : null)};
`

export const BorderLeft = styled.div<BorderTypes>`
  border-left: ${(props) =>
    props.commentLevel === 0 ? null : '2px solid rgb(237, 236, 232)'};
  padding-left: ${(props) => (props.commentLevel === 0 ? null : '15px')};
`

export const ButtonContainer = styled.div<ButtonContainerType>`
  margin-right: 2.6rem;
  margin-left: 3rem;
  padding: ${(props) =>
    props.position === 'bottom' ? '10px 0px 10px 0px' : '10px 0px 0px 0px'};
`

export const Button = styled.div`
  max-width: 100%;
  text-align: center;
  border: 2px solid #282c34;
  text-decoration: none;
  cursor: pointer;
  padding: 10px 15px 10px 15px;
  margin: 20px auto 10px auto;
  font-family: inherit;
  letter-spacing: 1px;
  color: black;
  user-select: none;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.6s;
  @media only screen and (max-width: 400px) {
    font-size: 12px;
    overflow: hidden;
  }
  &:hover {
    padding: 10px 15px 10px 15px;
    transform: scale(1, 1);
    text-decoration: none;
    background-color: #282c34;
    color: rgba(255, 255, 255, 1);
  }
`

////////////////////////////////////////////////W
// INPUT

export const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  border: 1px;
  &:focus {
    outline: none;
  }
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 17px;
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  border: 0px;
  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  font-size: 0.01px;
  height: 0.01px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`

export const CharCounterStyle = styled.div`
  font-size: 1.2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
