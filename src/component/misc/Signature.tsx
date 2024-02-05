import { Fragment } from 'react'
import { Link } from '../../svg/link'

const Signature = () => {
  return (
    <Fragment>
      <a
        target={'blank'}
        style={{
          color: 'lightblue',
          textDecoration: 'none',
          fontFamily: 'Tahoma',
        }}
        href="https://github.com/paulmuenzner"
      >
        <h3>
          HANDCRAFTED BY PAUL MÜNZNER <Link />
        </h3>
      </a>
    </Fragment>
  )
}

export default Signature
