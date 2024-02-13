import { Fragment, useState } from 'react'
import { FooterTypes } from './interfaces'
import {
  CommentFooter,
  DownVoteComponent,
  FooterList,
  ListItem,
  ListItemContent,
  NumberVotes,
  UpVoteComponent,
} from './styles'

import { messageVoted } from './messages'

import { FiCornerUpLeft } from 'react-icons/fi'
import { CommentModal } from './modal'
import { allowDownVoting, allowUpVoting } from './settings'

export const Footer = ({
  upVotes,
  downVotes,
  keyParent,
  commentLevel,
  parentName,
}: FooterTypes) => {
  const [hoverUp, setHoverUp] = useState<boolean>(false)
  const [hoverDown, setHoverDown] = useState<boolean>(false)
  const [votesDown, setVotesDown] = useState<number>(downVotes)
  const [votesUp, setVotesUp] = useState<number>(upVotes)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [hasVoted, setHasVoted] = useState<boolean>(false)

  // EVENT HANDLER
  const handleMouseHover = (vote: 'up' | 'down', isHovering: boolean) => {
    vote === 'up' ? setHoverUp(isHovering) : setHoverDown(isHovering)
  }

  // VOTES
  const upVote = () => {
    if (hasVoted === true) {
      return messageVoted()
    }
    setVotesUp(votesUp + 1)
    setHasVoted(true)
  }
  const downVote = () => {
    if (hasVoted === true) {
      return messageVoted()
    }
    setVotesDown(votesDown + 1)
    setHasVoted(true)
  }

  return (
    <Fragment>
      <CommentFooter commentLevel={commentLevel}>
        <FooterList>
          <ListItem>
            {allowUpVoting ? (
              <ListItemContent
                onMouseOver={() => handleMouseHover('up', true)}
                onMouseLeave={() => handleMouseHover('up', false)}
                onClick={upVote}
              >
                <UpVoteComponent hover={hoverUp} />
                <NumberVotes hoverUp={hoverUp}>
                  &nbsp; {`${votesUp}`}
                </NumberVotes>
              </ListItemContent>
            ) : null}
          </ListItem>
          <ListItem>
            {allowDownVoting ? (
              <ListItemContent
                onMouseOver={() => handleMouseHover('down', true)}
                onMouseLeave={() => handleMouseHover('down', false)}
                onClick={downVote}
              >
                <DownVoteComponent hover={hoverDown} />
                <NumberVotes hoverDown={hoverDown}>
                  &nbsp;{`${votesDown}`}
                </NumberVotes>
              </ListItemContent>
            ) : null}
          </ListItem>
          <ListItem
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            <ListItemContent>
              <FiCornerUpLeft
                style={{
                  height: '1.3rem',
                  verticalAlign: 'sub',
                  userSelect: 'none',
                }}
              />
              Reply
            </ListItemContent>
          </ListItem>
          <CommentModal
            isOpen={isModalOpen}
            handleClose={() => {
              setIsModalOpen(false)
            }}
            keyParent={keyParent}
            parentName={parentName}
          />
        </FooterList>
      </CommentFooter>
    </Fragment>
  )
}
