import classNames from 'classnames'

// eslint-disable-next-line react/prop-types
const Title = ({ text, className }) => {
  return (
    <>
      <h1
        className={classNames(
          'header text-2xl font-sans lg:text-4xl sm:text-sm font-bold pb-2 pt-1 lg:pt-4 text-gray-900',
          className,
        )}>
        {text}
      </h1>
    </>
  )
}

export default Title
