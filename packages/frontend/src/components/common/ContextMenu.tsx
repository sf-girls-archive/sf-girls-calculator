import { FC, MouseEvent as ReactMouseEvent, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AgentItem } from '../../atoms';

type ContextMenuProps = {
  agent: AgentItem;
  position: {
    left: number;
    top: number;
  };
  onClose: () => void;
  favorite: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
};

export const ContextMenu: FC<ContextMenuProps> = ({ agent, position, onClose, favorite, toggleModal, select }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuPosition, setMenuPosition] = useState(position);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    if (!menu) {
      return;
    }

    const { width, height } = menu.getBoundingClientRect();
    setMenuPosition({
      left: Math.max(8, Math.min(position.left, window.innerWidth - width - 8)),
      top: Math.max(8, Math.min(position.top, window.innerHeight - height - 8))
    });
  }, [position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      className="context-menu"
      style={{ left: menuPosition.left, top: menuPosition.top }}
      onContextMenu={(event: ReactMouseEvent) => event.preventDefault()}
    >
      <ul className="menu">
        <li
          className="menu-item"
          onClick={() => {
            select(agent);
            onClose();
          }}
        >
          <a>Select</a>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            favorite(agent);
            onClose();
          }}
        >
          <a>Favorite</a>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            toggleModal(agent);
            onClose();
          }}
        >
          <a>Edit</a>
        </li>
      </ul>
    </div>
  );
};
