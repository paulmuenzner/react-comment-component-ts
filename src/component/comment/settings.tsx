import { SettingTypes } from './interfaces'

// MAXIMUM CHARACTERS FOR FIELD VALIDATION
export const settings: SettingTypes = {
  // DEFINE MAX ALLOWED CHARACTERS FOR COMMENT FIELDS
  maxCharsName: 20,
  maxCharsEmail: 30,
  maxCharsWebsite: 40,
  maxCharsComment: 1000,
  // FURTHER SETTINGS
  allowUpVoting: true,
  allowDownVoting: true,
  allowCommentButtonTop: true,
  allowCommentButtonBottom: true,
  // CHANGE & DEFINE DESCRIPTIONS
  textButtonTop: 'WRITE COMMENT',
  textButtonBottom: 'WRITE COMMENT',
  // Misc
  maxMainCommentsPerPaginationUnit: 2,
}

// BUTTONS
export const buttonTop: boolean = settings.allowCommentButtonTop
export const buttonBottom: boolean = settings.allowCommentButtonBottom
export const textButtonTop: string = settings.textButtonTop
export const textButtonBottom: string = settings.textButtonBottom

// VALIDATION
export const maxCharsName: number = settings.maxCharsName
export const maxCharsEmail: number = settings.maxCharsEmail
export const maxCharsWebsite: number = settings.maxCharsWebsite
export const maxCharsComment: number = settings.maxCharsComment

// VOTING
export const allowUpVoting: boolean = settings.allowUpVoting
export const allowDownVoting: boolean = settings.allowDownVoting

// MISC
export const paginationSize: number = settings.maxMainCommentsPerPaginationUnit
