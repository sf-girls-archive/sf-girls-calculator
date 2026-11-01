import { useAtomValue } from 'jotai';
import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaRegStar, FaStar } from 'react-icons/fa';

import { Search } from '../common';
import { History, Results } from '../result';
import { TargetSelect } from '../target';
import { AgentItem, CurrentViewAtom, FilterAtom } from '../../atoms';

type AgentListProps = {
  agents: AgentItem[];
  loading: boolean;
  calculate: () => void;
  favorite: (agent: AgentItem) => void;
  select: (agent: AgentItem) => void;
  toggleModal: (agent: AgentItem) => void;
  contextMenuHandler: (event: MouseEvent, agent: AgentItem) => void;
};

export const AgentList: FC<AgentListProps> = ({ agents, loading, calculate, favorite, select, contextMenuHandler }) => {
  const viewName = useAtomValue(CurrentViewAtom);
  const filter = useAtomValue(FilterAtom);

  const containerRef = useRef<HTMLUListElement>(null);
  const [loadedIndexes, setLoadedIndexes] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setLoadedIndexes((prev) => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '-30px', threshold: 0 }
    );

    const cards = containerRef.current?.querySelectorAll('.avatar');
    cards?.forEach((card, index) => {
      observer.observe(card);
      card.setAttribute('data-index', String(index));
    });

    return () => observer.disconnect();
  }, [agents, filter]);

  const renderAgentList = () =>
    agents.length ? (
      agents.map((agent, index) => {
        const {
          options: {
            isFavorite,
            [viewName]: { isSelected }
          }
        } = agent;
        const className = `u-relative menu-item u-unselectable${isSelected ? ' selected animated bounceIn' : ''}`;
        const listElementStyle = {
          height: '100%',
          backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
          backgroundSize: '100%'
        };

        return (
          <li
            key={agent.name}
            className={className}
            onContextMenu={(event: MouseEvent) => contextMenuHandler(event, agent)}
          >
            <a className="w-100p u-flex" onClick={() => select(agent)}>
              <div className="avatar avatar--xs bg-white m-0 mr-1">
                {loadedIndexes.includes(index) && <div style={listElementStyle} />}
              </div>
              {agent.name}
            </a>
            <button
              className="favorite"
              type="button"
              aria-label={`${isFavorite ? 'Remove' : 'Add'} ${agent.name} ${isFavorite ? 'from' : 'to'} favorites`}
              aria-pressed={isFavorite}
              onClick={() => favorite(agent)}
            >
              {isFavorite ? (
                <FaStar className="favorite-star active" aria-hidden="true" />
              ) : (
                <FaRegStar className="favorite-star" aria-hidden="true" />
              )}
            </button>
          </li>
        );
      })
    ) : (
      <li className="menu-item mr-1">
        <p>No results found...</p>
      </li>
    );

  return (
    <>
      <div className="tree-nav-header u-items-center">
        <a href="#sidebar" className="u-shadow-none" aria-label="Open agent selection">
          <FaAngleRight aria-hidden="true" />
        </a>
      </div>

      <div className="sidebar-container tree-nav p-0 mr-2" id="sidebar">
        <div className="sidebar-wrapper">
          <div className="sidebar px-3">
            <div className="sidebar__heading">
              <div>
                <span className="eyebrow sidebar__eyebrow">
                  <span className="eyebrow-mark" />
                  SELECT / 01
                </span>
                <h2 className="sidebar__title">Agent roster</h2>
              </div>
              <span className="sidebar__count">{String(agents.length).padStart(2, '0')}</span>
            </div>
            <div className="sidebar__search">
              <Search />
            </div>
            <ul ref={containerRef} id="agent-list" className="menu mb-3">
              {renderAgentList()}
            </ul>
          </div>
        </div>
      </div>
      <a
        href="#"
        id="sidebar-close"
        className="tree-nav-close p-0 u-shadow-none"
        aria-label="Close agent selection"
        style={{ boxShadow: 'none' }}
      />

      <div className="tree-nav-container h-auto" style={{ flexGrow: 1 }}>
        <main className="page-layout">
          <section>
            <TargetSelect />
            <Results calculate={calculate} loading={loading} contextMenuHandler={contextMenuHandler} />
          </section>

          <section>
            <History />
          </section>
        </main>
      </div>
    </>
  );
};
