import { BarLoader } from "react-spinners"
const Spinner = ({color = 'blue', size='150'}) => {
    const cssOverride = {
        display: 'block',
        margin: '0 auto 50px auto'
    }
  return (
    <div>
      <BarLoader
      color={color}
      size={size}
      cssOverride={cssOverride}
      aria-label='Loading...'
      />
    </div>
  )
}

export default Spinner
