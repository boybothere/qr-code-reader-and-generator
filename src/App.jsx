import React from 'react'
import CreateQr from './components/CreateQr'
import ReadQr from './components/ReadQr'

const App = () => {
  return (
    <div className="container-fluid">
      <h1 className='my-3 text-center display-2'>QR Code Generator and Reader</h1>


      <div className="row">
        <CreateQr />
        <ReadQr />
      </div>
    </div>
  )
}

export default App