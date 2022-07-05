import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <nav className='sidebar-container'>
        <ul>
          <li>
            <NavLink className='active' to='/' exact>
              <i className='lni lni-home'></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='active' to='/articles'>
              <i className='lni lni-text-format'></i>
              <span>Articles</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='active' to='/help'>
              <i className='lni lni-support'></i>
              <span>Help & Support</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
