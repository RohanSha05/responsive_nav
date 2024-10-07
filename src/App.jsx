
import './App.css'

function App() {

  const list_items = <>
      <li className=''>
        <details>
          <summary className='border-b-2 py-4 '>Home</summary>
          <ul className="p-2">
            <li><a className='border-b-2 py-4'>Submenu 1</a></li>
            <li><a className='border-b-2 py-4'>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a  className='border-b-2 py-4'>About</a></li>
      <li>
        <details>
          <summary className='border-b-2 py-4'>Page</summary>
          <ul className="p-2">
            <li><a className='border-b-2 py-4'>Submenu 1</a></li>
            <li><a className='border-b-2 py-4'>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className='border-b-2 py-4'>Services</summary>
          <ul className="p-2">
            <li><a className='border-b-2 py-4'>Submenu 1</a></li>
            <li><a className='border-b-2 py-4'>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className='border-b-2 py-4'>Projects</summary>
          <ul className="p-2">
            <li><a className='border-b-2 py-4'>Submenu 1</a></li>
            <li><a className='border-b-2 py-4'>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className='border-b-2 py-4'>News</summary>
          <ul className="p-2">
            <li><a className='border-b-2 py-4'>Submenu 1</a></li>
            <li><a className='border-b-2 py-4'>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      
  </>

  return (
    <>
      <div className=''>
      <div className="navbar bg-white  font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu uppercase  dropdown-content bg-slate-900 text-white w-[350px]  z-[1] mt-3 ">
        {
          list_items
        }
      </ul>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        list_items
      }
    </ul>
  </div>
 
</div>
      </div>
    </>
  )
}

export default App
