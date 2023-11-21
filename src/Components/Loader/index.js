import react from 'react'

import { Oval } from 'react-loader-spinner'


const Loader=()=>{
    return(
        <Oval
 height={80}
  width={80}
  color="#532539"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#87676A"
  strokeWidth={2}
  strokeWidthSecondary={2}

       />
    )
}

export default Loader;