import { Fragment } from 'react'
import styled from 'styled-components'

const Features = () => {
  return (
    <Fragment>
      <h2>FEATURES</h2>
      <StyledOl>
        <li>Super clean design.</li>
        <li>
          Flexibility! Define maximum number of characters for each field.
          Voting of comments enabled including implemented functionality such as
          counter update or disabling upvote, downvotes or top/bottom comment
          button and changing button text via settings in settings.tsx.
        </li>
        <li>
          Adding and answering comments modal form - realized with React Portal
          for more security.
        </li>
        <li>
          Validation of inputs, such as maximum number of chars, email
          validation or avoiding special characters.
        </li>
        <li>
          Configure in settings the maximum number of parent comments per page.
        </li>
        <li>
          Answering of parent comments in the first level enabled. Answers of
          parent comments are displayed in the second level with an indent.
        </li>
        <li>
          Date format/age of comments displayed dynamically: Date of max. 60
          seconds old comments stated in seconds, max. 60 minutes old comments
          stated in minutes, max. 24 hours old comments in hours, max. 5 days
          old comments ind days. Dates of all comments older than 5 days are
          stated in US date format.
        </li>
        <li>
          The comment field provides a character counter for user orientation.
        </li>
      </StyledOl>
    </Fragment>
  )
}

export default Features

export const StyledOl = styled.ol`
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
  background: #282c34;
  li {
    text-align: left;
    font-family: sans-serif;
    font-size: 14px;
    background: #282c34;
    padding-bottom: 7px;
  }
`
