import './LogInBar.css';

const LogInBar = () => {
    const bagImg = 'https://cdn-icons-png.flaticon.com/512/2662/2662503.png'
    const magGlass = 'https://static-00.iconduck.com/assets.00/magnifying-glass-icon-2048x2048-3qmsqqer.png'
  return (
    <div className='logInBar'>
        <button className='logIn'>log in</button>
        <input className='search' type="" />
        <img className='magGlass' src={magGlass} alt="magnifying glass" />
        <img className='bagImg' src={bagImg} alt="buying bag" />
        <strong>3</strong>
    </div>
  )
}

export default LogInBar