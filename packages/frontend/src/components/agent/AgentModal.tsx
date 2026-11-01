import { useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, FC, useState } from 'react';
import { FaBolt, FaStar } from 'react-icons/fa';

import { EvoTree } from './EvoTree';
import { Modal } from '../common';
import { TabEnum, getAgentInfo, inputConfig } from '../utils';
import { AgentDB } from '../../atoms';

export const AgentModal: FC = () => {
  const [currentTab, setCurrentTab] = useState(TabEnum.Stats);
  const [failedSkillIconUrl, setFailedSkillIconUrl] = useState<string | null>(null);

  const agents = useAtomValue(AgentDB.values);
  const agent = agents.find((agent) => agent.options.openModal);
  const setAgent = useSetAtom(AgentDB.set);

  if (!agent) {
    return null;
  }

  const skillIconName = agent.name === 'Kagawa Matsu' ? 'kagawaMatsu' : agent.name.replace(/\s/g, '');
  const skillIconUrl = `/agents/${skillIconName}Skill.webp`;

  const closeModal = () => {
    setCurrentTab(TabEnum.Stats);
    setAgent(agent.name, {
      ...agent,
      options: {
        ...agent.options,
        openModal: false
      }
    });
  };

  const {
    bio,
    className,
    organization,
    rarity,
    recordNumber,
    skillCooldown,
    skillDescription,
    skillEffects,
    skillName,
    title
  } = getAgentInfo(agent.name);
  const rarityStars = Number.parseInt(rarity, 10);
  const activeRarityStars = Number.isFinite(rarityStars) ? Math.min(5, Math.max(0, rarityStars)) : 0;

  const renderParagraphs = (text: string, className: string) =>
    text
      .trim()
      .split(/\n\s*\n/)
      .filter(Boolean)
      .map((paragraph, index) => (
        <p className={className} key={index}>
          {paragraph.trim()}
        </p>
      ));

  const renderBody = () => {
    switch (currentTab) {
      case TabEnum.Stats:
        return (
          <section className="agent-tab-panel agent-stats-panel" aria-label="Combat stats">
            <div className="agent-tab-heading">
              <div>
                <span className="agent-tab-eyebrow">SIMULATION / PARAMETERS</span>
                <h3>Combat profile</h3>
              </div>
              <span className="agent-tab-count">{String(Object.keys(inputConfig).length).padStart(2, '0')} FIELDS</span>
            </div>

            <div className="agent-stats-grid">
              {Object.entries(inputConfig).map(([name, { label, abbrTitle, step }], index) => (
                <div className="agent-stat-card" key={name}>
                  <div className="agent-stat-card__meta">
                    <span>PARAMETER / {String(index + 1).padStart(2, '0')}</span>
                    {abbrTitle && (
                      <abbr title={abbrTitle} aria-label={abbrTitle}>
                        i
                      </abbr>
                    )}
                  </div>
                  <label htmlFor={`agent-stat-${name}`}>{label}</label>
                  <input
                    id={`agent-stat-${name}`}
                    className="agent-stat-card__input hover-grow focus-grow"
                    type="number"
                    min="0"
                    step={step}
                    name={name}
                    value={`${agent.stats[name]}`}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      const newValue = Number(event.target.value);
                      if (event.target.value.includes('-')) {
                        event.preventDefault();
                      } else {
                        setAgent(agent.name, { ...agent, stats: { ...agent.stats, [name]: newValue } });
                      }
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="agent-tab-footnote">
              <span className="agent-tab-footnote__mark" />
              Changes apply to this agent in future calculations.
            </p>
          </section>
        );
      case TabEnum.Bio:
        return (
          <section className="agent-tab-panel agent-bio-panel" aria-label="Agent biography">
            <div className="agent-bio-heading">
              <div>
                <span className="agent-tab-eyebrow">PERSONNEL FILE / {String(recordNumber).padStart(3, '0')}</span>
                <h3>{title}</h3>
              </div>
              <span className="agent-bio-class">{className}</span>
            </div>

            <div className="agent-bio-layout">
              <aside className="agent-bio-facts" aria-label="Agent profile">
                <div className="agent-bio-facts__heading">
                  <span>IDENTIFICATION</span>
                  <span>NO. {String(recordNumber).padStart(3, '0')}</span>
                </div>
                <dl>
                  <div>
                    <dt>Rarity</dt>
                    <dd
                      className="agent-rarity-stars"
                      role="img"
                      aria-label={activeRarityStars ? `${activeRarityStars} stars` : rarity}
                    >
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          className={`agent-rarity-star${index < activeRarityStars ? ' is-active' : ''}`}
                          aria-hidden="true"
                        />
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt>Organization</dt>
                    <dd>{organization}</dd>
                  </div>
                  <div>
                    <dt>Class</dt>
                    <dd>{className}</dd>
                  </div>
                </dl>
              </aside>

              <article className="agent-bio-copy">
                <span className="agent-bio-copy__eyebrow">BACKGROUND / 01</span>
                <div>{renderParagraphs(bio, 'agent-bio-copy__paragraph')}</div>
              </article>
            </div>
          </section>
        );
      case TabEnum.Skill:
        return (
          <section className="agent-tab-panel agent-skill-panel" aria-label="Agent skill">
            <div className="agent-skill-heading">
              <div className="agent-skill-heading__title">
                <span className="agent-skill-icon" aria-hidden="true">
                  {failedSkillIconUrl === skillIconUrl ? (
                    <FaBolt className="agent-skill-icon__fallback" />
                  ) : (
                    <img src={skillIconUrl} alt="" onError={() => setFailedSkillIconUrl(skillIconUrl)} />
                  )}
                </span>
                <div>
                  <span className="agent-tab-eyebrow">SPECIAL ABILITY / {String(recordNumber).padStart(3, '0')}</span>
                  <h3>{skillName}</h3>
                </div>
              </div>
              <div className="agent-skill-cooldown">
                <span>COOLDOWN</span>
                <strong>
                  {skillCooldown}
                  <small>SEC</small>
                </strong>
              </div>
            </div>

            <div className="agent-skill-main">
              <div className="agent-skill-summary">
                <article className="agent-skill-description">
                  <span className="agent-bio-copy__eyebrow">ABILITY NOTES</span>
                  <div>{renderParagraphs(skillDescription, 'agent-skill-description__paragraph')}</div>
                </article>

                <div className="agent-skill-profile">
                  <div className="agent-skill-profile__heading">
                    <span>Linked combat profile</span>
                    <span>LIVE PARAMETERS</span>
                  </div>
                  <div className="agent-skill-profile__metrics">
                    <div>
                      <span>BASE SKILL DAMAGE</span>
                      <strong>{agent.stats.skillDamage}</strong>
                    </div>
                    <div>
                      <span>CRITICAL RATE</span>
                      <strong>{(agent.stats.criticalRate * 100).toFixed(0)}%</strong>
                    </div>
                    <div>
                      <span>CRITICAL DAMAGE</span>
                      <strong>{agent.stats.criticalDamage.toFixed(2)}x</strong>
                    </div>
                  </div>
                </div>
              </div>

              <section className="agent-skill-effects" aria-label="Skill effect details">
                <div className="agent-skill-effects__heading">
                  <span>Effect sequence</span>
                  <span>{String(skillEffects.length).padStart(2, '0')} MODULES</span>
                </div>
                <div className="agent-skill-effects__list">
                  {skillEffects.length > 0 ? (
                    skillEffects.map((effect, index) => (
                      <div className="agent-effect-card" key={`${effect.type}-${index}`}>
                        <div className="agent-effect-card__heading">
                          <span>MODULE / {String(index + 1).padStart(2, '0')}</span>
                          <strong>{effect.type}</strong>
                        </div>
                        <div className="agent-effect-card__meta">
                          {effect.duration !== undefined && (
                            <div>
                              <span>DURATION</span>
                              <strong>{effect.duration}s</strong>
                            </div>
                          )}
                          {effect.interval !== undefined && (
                            <div>
                              <span>INTERVAL</span>
                              <strong>{effect.interval}s</strong>
                            </div>
                          )}
                          {effect.numberOfHits !== undefined && (
                            <div>
                              <span>HITS</span>
                              <strong>{effect.numberOfHits}</strong>
                            </div>
                          )}
                          {effect.duration === undefined &&
                            effect.interval === undefined &&
                            effect.numberOfHits === undefined && <span>Immediate effect</span>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="agent-skill-effects__empty">No separate effect modules.</p>
                  )}
                </div>
              </section>
            </div>
          </section>
        );
      case TabEnum.EvoTree:
        return <EvoTree />;
    }
  };

  const renderTabs = () => (
    <div className="tab-container tabs-fill">
      <ul>
        {Object.values(TabEnum).map((tab) => (
          <li
            key={tab}
            className={`hover-grow ${tab === currentTab ? 'selected' : ''}`}
            onClick={() => setCurrentTab(tab)}
          >
            <div className="tab-item-content">{tab}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Modal
      modalId={agent.name}
      className={currentTab === TabEnum.EvoTree ? 'modal-content--evo-tree' : 'modal-content--agent-details'}
      clickOutside={closeModal}
    >
      <div className="modal-header">
        <button className="modal-close" type="button" aria-label="Close agent editor" onClick={closeModal}>
          <span className="icon">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times fa-w-11 fa-wrapper"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </span>
        </button>
        <div className="modal-title">Edit</div>
      </div>

      <div className={`modal-body${currentTab === TabEnum.EvoTree ? ' modal-body--evo-tree' : ''}`}>
        <div className="u-center">
          <div className="tile level">
            <div className="tile__icon agent-avatar">
              <div className="avatar avatar--lg bg-white">
                <div
                  style={{
                    height: '100%',
                    backgroundImage: `url(agents/${agent.name.replace(/\s/g, '')}Mini.webp)`,
                    backgroundSize: '100%'
                  }}
                />
              </div>
            </div>
            <div className="tile__container">
              <p className="tile__title m-0 text-xl">{agent.name}</p>
            </div>
          </div>
        </div>

        {renderTabs()}
        {renderBody()}
      </div>
    </Modal>
  );
};
