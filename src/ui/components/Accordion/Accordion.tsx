import { Fragment, useState } from 'react';

import { Styles } from './Accordion.styles';

import { NotificationBadge } from './components/NotificationBadge';

import type { AccordionProps } from './@types/Accordion.types';

export const Accordion = ({ items, label }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleAccordion = () => setIsCollapsed(prevState => !prevState);

  return (
    <Fragment>
      <Styles.Accordion onClick={toggleAccordion}>
        <Styles.Label>{label}</Styles.Label>
        {items.length !== 0 && <Styles.CollapseIcon isCollapsed={isCollapsed} />}
      </Styles.Accordion>
      {items.length !== 0 && (
        <Styles.Menu isCollapsed={isCollapsed}>
          {items.map(({ action, icon, id, label, updates }) => (
            <Styles.Item key={id} onClick={() => action?.(id)}>
              {icon}
              {label}
              {updates && updates > 0 ? <NotificationBadge notifications={updates} /> : null}
            </Styles.Item>
          ))}
        </Styles.Menu>
      )}
    </Fragment>
  );
};
