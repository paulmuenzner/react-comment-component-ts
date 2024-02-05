import { FC, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { InputField } from '../Input'
import {
  validateEmail,
  validateSpecialCharComment,
  validateSpecialCharName,
} from '../helpers'
import { ModalCommentInput } from '../interfaces'
import { messageMaxChar, messageValidate } from '../messages'
import {
  maxCharsComment,
  maxCharsEmail,
  maxCharsName,
  maxCharsWebsite,
} from '../settings'
import ReactPortal from './ReactPortal'
import { Button, Modal, ModalContent, ModalHeading } from './style'

import { CharCounterStyle, Textarea } from '../styles'

interface CommentModalProps {
  isOpen: boolean
  handleClose: () => void
  parentName?: string
  keyParent?: string
}

const CommentModal: FC<CommentModalProps> = ({
  isOpen,
  handleClose,
  parentName,
  keyParent,
}): JSX.Element | null => {
  const [comment, setComment] = useState<ModalCommentInput>({
    name: '',
    email: '',
    website: '',
    content: '',
  })

  useEffect(() => {
    if (comment.content.length >= maxCharsComment) {
      return messageMaxChar(maxCharsComment, 'comment')
    }
    if (comment.name.length >= maxCharsName) {
      return messageMaxChar(maxCharsName, 'name')
    }
    if (comment.email.length >= maxCharsEmail) {
      return messageMaxChar(maxCharsEmail, 'email')
    }
    if (comment.website.length >= maxCharsWebsite) {
      return messageMaxChar(maxCharsWebsite, 'website')
    }
  }, [comment.content, comment.website, comment.name, comment.email])

  const updateChange: (e: ModalCommentInput) => void = (
    e: ModalCommentInput,
  ) => {
    if (e.content.length > maxCharsComment) {
      return
    }
    if (e.email.length > maxCharsEmail) {
      return
    } else setComment(e)
  }

  const handleSubmit: () => void = () => {
    if (comment.email.length === 0) {
      messageValidate('Email cannot be empty!')
      return
    }
    if (validateEmail(comment.email)) {
      messageValidate('Please provide a valid email!')
      return
    }
    if (comment.name.length < 3) {
      messageValidate('At least three characters for name!')
      return
    }
    if (validateSpecialCharName(comment.name)) {
      messageValidate('No special characters in name!')
      return
    }
    if (validateSpecialCharComment(comment.content)) {
      messageValidate('Invalid special characters in comment!')
      return
    }
    if (comment.content.length < 10) {
      messageValidate('Your comment is too short!')
      return
    }
    const request = {
      comment: { ...comment, date: Date.now(), key: uuid() },
      keyParent,
    }

    // Replace with API request to backend
    console.log('comment', request)
  }

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <Modal>
        <Button
          onClick={() => {
            handleClose()
            setComment({ name: '', email: '', website: '', content: '' })
          }}
        >
          DISCARD
        </Button>

        <ModalContent>
          {parentName ? (
            <ModalHeading>Answer to {parentName}:</ModalHeading>
          ) : null}
          <ModalHeading style={{ fontSize: '15px' }}>
            Your email address will not be published. Required fields are
            marked*
          </ModalHeading>
          <InputField
            maxLength={maxCharsName}
            name="name"
            spellCheck={false}
            item={comment}
            label="Name*"
            type="text"
            placeholder="Name*"
            autoComplete="off"
            updateChange={(e: ModalCommentInput) => updateChange(e)}
            defaultValue={comment.name}
          />
          <InputField
            maxLength={maxCharsEmail}
            name="email"
            spellCheck={false}
            item={comment}
            label="Email"
            type="text"
            placeholder="Email*"
            autoComplete="on"
            updateChange={(e: ModalCommentInput) => updateChange(e)}
            defaultValue={comment.email}
          />
          <InputField
            maxLength={maxCharsWebsite}
            name="website"
            spellCheck={false}
            item={comment}
            label="Website"
            type="text"
            placeholder="Website"
            autoComplete="on"
            updateChange={(e: ModalCommentInput) => updateChange(e)}
            defaultValue={comment.website}
          />
          <Textarea
            rows={6}
            maxLength={maxCharsComment}
            placeholder="Type here...*"
            autoComplete="off"
            onChange={({ target }) =>
              updateChange({ ...comment, content: target.value })
            }
            defaultValue={comment.content}
          />
          <CharCounterStyle>
            {comment.content.length}/{maxCharsComment}
          </CharCounterStyle>
          <Button onClick={() => handleSubmit()}>SUBMIT</Button>
        </ModalContent>
      </Modal>
    </ReactPortal>
  )
}

export default CommentModal
