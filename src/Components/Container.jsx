const Container = ({ children, className = '' }) => {
  return (
    <div className={`container w-full max-w-310 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
 