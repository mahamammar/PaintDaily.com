//Function use for catching Error

function ErrorFallback({error}) {
    console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error}</pre>
    </div>
  )
}
export default ErrorFallback;