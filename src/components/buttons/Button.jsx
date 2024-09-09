const Button = ({ url, props }) => {
  return (
    <div className='text-center'>
      <a href={url}>
        <button className='rounded-none bg-blue-500 p-2'>
          {props.children}
        </button>
      </a>
    </div>
  )
}

export default Button
