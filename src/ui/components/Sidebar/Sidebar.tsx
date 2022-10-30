import { useRecoilValue } from 'recoil';

import { Styles } from './Sidebar.styles';

import { Accordion } from 'ui/components/Accordion';

import { isMenuOpenState } from 'ui/stores/UserStore/UserStore';

export const Sidebar = () => {
  const isMenuVisible = useRecoilValue(isMenuOpenState);

  return (
    <Styles.Sidebar isMenuVisible={isMenuVisible}>
      <Accordion
        items={[
          { id: '0', label: 'Rides' },
          { id: '1', label: 'Scooters' },
          { id: '2', label: 'Car-sharing' },
          { id: '3', label: 'Food delivery' },
          { id: '4', label: 'Grocery delivery' },
          { id: '5', label: 'Business' }
        ]}
        label="Products"
      />
      <Accordion
        items={[
          { id: '0', label: 'Driver' },
          { id: '1', label: 'Courier' },
          { id: '2', label: 'Restaurant or Store', updates: 9 },
          { id: '3', label: 'Fleet' },
          { id: '4', label: 'Franchise' }
        ]}
        label="Partner with Bolt"
      />
      <Accordion
        items={[
          { id: '0', label: 'Careers' },
          { id: '1', label: 'About' },
          { id: '2', label: 'Green plan' },
          { id: '3', label: 'Blog' },
          { id: '4', label: 'Press' }
        ]}
        label="Company"
      />
      <Accordion items={[]} label="Support" />
      <Accordion items={[]} label="Cities" />
    </Styles.Sidebar>
  );
};
