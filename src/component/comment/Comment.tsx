import { Fragment, useMemo, useState } from 'react'
import { MainCommentTypes, SubCommentTypes } from './interfaces'
import {
  buttonBottom,
  buttonTop,
  paginationSize,
  textButtonBottom,
  textButtonTop,
} from './settings'

import { CommentContent } from './CommentContent'
import { sortComments } from './helpers'
import { CommentModal } from './modal'
import { Pagination } from './pagination'
import { Button, ButtonContainer, CommentSectionContainer } from './styles'

export const Comment: React.FC<{ commentData: MainCommentTypes[] }> = ({
  commentData,
}) => {
  const [state, setState] = useState<{
    isModalOpen: boolean
    currentPage: number
  }>({
    isModalOpen: false,
    currentPage: 1,
  })

  const { isModalOpen, currentPage } = state
  const PageSize = paginationSize

  const commentArray: MainCommentTypes[] = sortComments({
    comments: commentData,
    field: 'date',
    isAsc: true,
  })

  const currentCommentArray: MainCommentTypes[] = useMemo(() => {
    const firstPageIndex: number = (currentPage - 1) * PageSize
    const lastPageIndex: number = firstPageIndex + PageSize
    return commentArray.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  const hasComment: boolean = currentCommentArray.length > 0

  // Caution. Button top is only displayed if buttonTop=true and if there is at least one comment.
  // If top button is not displayed and buttonBottom=false, there would be no button at all to write a comment.
  // In this case we have to make sure to nevertheless display at least one button.
  // Sumup: bottomCommentButton() is a security measure to at least display one button
  const bottomCommentButton = (): boolean => {
    if (!buttonTop) {
      return true
    } else if (hasComment && buttonTop && buttonBottom) {
      return true
    } else return false
  }

  return (
    <Fragment>
      <CommentSectionContainer>
        {/* Only render top button if there is at least one comment. Otherwise only bottom  */}
        {hasComment && buttonTop && (
          <ButtonContainer
            onClick={() => {
              setState({ ...state, isModalOpen: true })
            }}
            position="top"
          >
            <Button>{textButtonTop}</Button>
          </ButtonContainer>
        )}
        {currentCommentArray.length < 1
          ? null
          : currentCommentArray.map((comments: MainCommentTypes) => (
              <Fragment key={comments.key}>
                <CommentContent
                  commentLevel={0}
                  parentKey={comments.key}
                  data={comments}
                  parentName={comments.name}
                />
                {comments.answersContent.length < 1
                  ? null
                  : comments.answersContent.map((e: SubCommentTypes) => (
                      <Fragment key={e.key}>
                        <CommentContent
                          commentLevel={1}
                          parentKey={comments.key}
                          data={e}
                          parentName={comments.name}
                        />
                      </Fragment>
                    ))}
              </Fragment>
            ))}
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalObjects={commentArray.length}
          objectsPerPage={PageSize}
          siblingCount={0}
          onPageChange={(page: number) =>
            setState({ ...state, currentPage: page })
          }
        />
        {bottomCommentButton() && (
          <ButtonContainer
            onClick={() => {
              setState({ ...state, isModalOpen: true })
            }}
            position="bottom"
          >
            <Button>{textButtonBottom}</Button>
          </ButtonContainer>
        )}
        <CommentModal
          isOpen={isModalOpen}
          handleClose={() => {
            setState({ ...state, isModalOpen: false })
          }}
        />
      </CommentSectionContainer>
    </Fragment>
  )
}
