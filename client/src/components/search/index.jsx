import '../search/style.css';
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div className="searchBox h-10 sm:h-12 bg-zinc-200 rounded-md relative !py-1 sm:py-2 !px-2 flex items-center justify-center w-full">
      <input
        type="text"
        placeholder='Search for Products...'
        className='text-xs sm:text-sm px-2 w-full focus:outline-none bg-transparent'
      />
      <Button className='!min-w-8 !min-h-8 sm:!min-w-10 sm:!min-h-10 !rounded-full flex items-center justify-center'>
        <CiSearch className='text-lg sm:text-xl text-black' />
      </Button>
    </div>
  )
}

export default Search