import { Popover } from '@headlessui/react';
import { ClickAwayListener } from '@mui/base';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface IDropdownProps {
  children?: React.ReactNode;
  items: Array<string>;
  showUserList: boolean;
  setShowUserList: (showUserList: boolean) => void;
}

const Dropdown = ({ items, showUserList, setShowUserList }: IDropdownProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Popover.Overlay>
      <div className='absolute bg-white shadow-md w-40 bottom -left-10 border-2 rounded-md'>
        <ul>
          {items.map((item: string, index) => (
            <li key={index}>
              <Popover.Button
                as={Link}
                to={`/${item.toLowerCase()}`}
                className='p-2 border-zinc-300 border-b hover:bg-blue-100 font-sans font-light block text-center'
              >
                {item}
              </Popover.Button>
            </li>
          ))}
        </ul>
      </div>
    </Popover.Overlay>
  );
};

export default Dropdown;
