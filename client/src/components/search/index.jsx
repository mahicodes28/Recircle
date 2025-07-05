import '../search/style.css';
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div className="searchBox h-10 sm:h-12 bg-white rounded-4xl !text-black relative !py-1 md:py-2 xl:py-2 !px-4 flex items-center justify-center w-full">
      <input
        type="text"
        placeholder='Search for Products...'
        className='text-xs xl:text-lg md:text-lg px-2 w-full focus:outline-none bg-transparent'
      />
      <Button className='!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10 !rounded-full flex items-center justify-center'>
        <CiSearch className='text-lg md:text-xl xl:text-xl text-black' />
      </Button>
    </div>
  )
}

export default Search