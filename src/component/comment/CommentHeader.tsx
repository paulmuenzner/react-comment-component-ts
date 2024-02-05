import { Fragment } from 'react'
import { dateFormat } from './helpers'
import { HeaderTypes } from './interfaces'
import { CommentDate, H5 } from './styles'

export const CommentHeader = ({ date, name }: HeaderTypes) => {
  const formatedDate = dateFormat(date)
  return (
    <Fragment>
      <H5>{name}</H5>
      <CommentDate>{formatedDate}</CommentDate>
    </Fragment>
  )
}
