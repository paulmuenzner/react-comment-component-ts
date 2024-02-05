import { Fragment } from 'react'
import { CommentHeader } from './CommentHeader'
import { Footer } from './Footer'
import { MainCommentTypes, SubCommentTypes } from './interfaces'
import {
  BorderLeft,
  CommentContainer,
  CommentPosition,
  ContentWrapper,
  HL,
} from './styles'

export const CommentContent = ({
  data,
  parentKey,
  commentLevel,
  parentName,
}: {
  data: MainCommentTypes | SubCommentTypes
  parentKey: string
  commentLevel: number
  parentName: string
}) => {
  return (
    <Fragment>
      <CommentContainer commentLevel={commentLevel}>
        <CommentPosition>
          <BorderLeft commentLevel={commentLevel}>
            <CommentHeader date={data.date} name={data.name} />
            <ContentWrapper>{data.comment}</ContentWrapper>
          </BorderLeft>
          <Footer
            upVotes={data.upVotes}
            downVotes={data.downVotes}
            keyParent={parentKey}
            commentLevel={commentLevel}
            parentName={parentName}
          />
        </CommentPosition>
        <HL />
      </CommentContainer>
    </Fragment>
  )
}
