export type SubCommentTypes = {
  name: string
  date: number
  comment: string
  upVotes: number
  downVotes: number
  key: string
}

export type MainCommentTypes = {
  name: string
  date: number
  comment: string
  upVotes: number
  downVotes: number
  key: string
  answersContent: SubCommentTypes[]
}

export type SettingTypes = {
  maxCharsName: number
  maxCharsEmail: number
  maxCharsWebsite: number
  maxCharsComment: number
  allowUpVoting: boolean
  allowDownVoting: boolean
  allowCommentButtonTop: boolean
  allowCommentButtonBottom: boolean
  textButtonTop: string
  textButtonBottom: string
  maxMainCommentsPerPaginationUnit: number
}

export type FooterTypes = {
  upVotes: number
  downVotes: number
  keyParent: string
  commentLevel: number
  parentName: string
}

export type CommentModalProps = {
  isOpen: boolean
  handleClose: () => void
  parentName: string
  keyParent: string
}

export type SortArrayTypes = {
  comments: MainCommentTypes[]
  field: keyof MainCommentTypes
  isAsc: boolean
}

export type HeaderTypes = {
  date: number
  name: string
}

export type ModalCommentInput = {
  name: string
  email: string
  website: string
  content: string
}

export type InputFieldTypes = {
  maxLength: number
  spellCheck: boolean
  autoComplete: 'off' | 'on'
  type: string
  name: string
  label: string
  placeholder: string
  defaultValue: string
  item: ModalCommentInput
  updateChange: (e: ModalCommentInput) => void
}

export type ButtonContainerType = {
  position: string
}

export type CommentContainerTypes = { commentLevel: number }
export type BorderTypes = { commentLevel: number }

export type VoteComponentTypes = { hover: boolean }

export type NumberVotesTypes = { hoverUp?: boolean; hoverDown?: boolean }
