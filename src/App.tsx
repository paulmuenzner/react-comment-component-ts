import { Comment, Features, Header, Signature } from './component'
import commentData from './data'

const App: () => JSX.Element = () => {
  return (
    <div className="App">
      <div className="spacing"> </div>
      <Signature />
      <div className="spacing"> </div>
      <Header />
      <div className="spacing"> </div>
      <Comment commentData={commentData} />
      <div className="spacing"> </div>
      <Features />
      <div className="spacing"> </div>
    </div>
  )
}

export default App
