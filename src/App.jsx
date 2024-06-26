import { useState } from 'react'
import Input from "./components/Input"

function App() {
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copy")
  const [passwordSize, setPasswordSize] = useState(12)

  function copyToClipboard() {
    setCopyText("Copied!")
    window.navigator.clipboard.writeText(password)
  }

  function generate(){
    setCopyText("Copy")
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
  }

  return (
    <>
      <h1>Password generator</h1>
      <div>
        <label htmlFor="passwordSize">Password size:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      </div>
      <div>
        <button onClick={generate}>
          Generate!
        </button>
        <button onClick={copyToClipboard}>
          {copyText}
        </button>
        <div>{password}</div>
      </div>
    </>
  )
}

export default App
