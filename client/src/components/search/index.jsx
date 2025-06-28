import '../search/style.css';
import Button from '@mui/material/Button';
import { CiSearch } from "react-icons/ci";
function Search() {
  return (
    <div className="searchBox  h-12 bg-zinc-200 rounded-md  relative !py-2 !px-2 flex items-center justify-center">
        <input type="text" placeholder='Search for Products...' className=' text-sm !px-2  w-full focus:outline-none' />
       <Button className='!min-w-10 !min-h-10 !rounded-full' ><CiSearch className='text-xl text-black ' /></Button>
    </div>
  )
}

export default Search