const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer className="footer">  
        <p>© {year} Kirill Bogomolov. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default Footer