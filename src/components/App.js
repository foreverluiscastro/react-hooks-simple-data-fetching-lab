// create your App component here
import React, { useEffect , useState } from 'react'

function App() {
  const [image, setImage] = useState(null)

  const API = 'https://dog.ceo/api/breeds/image/random'

  useEffect(() => {
    fetch(API)
    .then((r) => r.json())
    .then((r) => setImage(r))
  }, []);

  if (image === null) return <p>Loading...</p>

  return (
    <div>
      <img src={image.message} alt="A Random Dog"/>
    </div>
  )
}

export default App