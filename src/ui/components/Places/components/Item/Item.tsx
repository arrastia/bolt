import { useRecoilCallback, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isSelectedState, latitudeState, longitudeState, selectedCityState } from 'ui/stores/MapStore/MapStore';

type Coordinate = { latitude: number; longitude: number };

type Props = {
  icon: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
};

const ItemStyles = styled('button')<{ isActive: boolean }>`
  background-color: unset;
  border-radius: 8px;
  border: unset;
  cursor: pointer;
  margin: 12px 0 0;
  padding: 4px 0 14px;
  text-align: center;
  transition: box-shadow 0.2s ease, color 0.2s ease, transform 0.2s;

  background-color: unset;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
    transition: transform 0.2s;
  }

  .item-container {
    display: flex;
    flex-direction: row;

    .item-span {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      /* min-width: var(--chipsbar_chip-width); */

      min-width: revert;

      img {
        aspect-ratio: auto 24 / 24;
        max-width: 100%;
        width: 24px;
        height: auto;
        /* filter: contrast(calc(13 / 44));
        -webkit-transition: filter 200ms ease, -webkit-transform 200ms ease; */

        transition: filter 200ms ease, transform 200ms ease;
        filter: contrast(1);
      }

      .item-text {
        white-space: nowrap;
        position: relative;

        .item-text-span {
          display: inline-block;
          transition: transform 200ms ease;

          &:after {
            position: absolute;
            content: '';
            height: 2px;
            top: calc(100% + 12px);

            inset-inline: 0;
            transition: opacity 0.2s ease;

            background-color: black;

            opacity: ${({ isActive }) => (isActive ? 1 : 0)};
          }
        }
      }
    }
  }
`;

export const Item = ({ icon, id, latitude, longitude, name }: Props) => {
  const isSelected = useRecoilValue(isSelectedState(id));

  const setLocation = useRecoilCallback(
    ({ set }) =>
      ({ id, latitude, longitude }: Coordinate & { id: string }) => {
        set(latitudeState, latitude);
        set(longitudeState, longitude);
        set(selectedCityState, id);
      },
    []
  );

  const onSelect = () => setLocation({ id, latitude, longitude });

  return (
    <ItemStyles isActive={isSelected} onClick={onSelect}>
      <div className="item-container">
        <span className="item-span">
          <img alt={name} src={icon} />
          <div className="item-text">
            <span className="item-text-span">{name}</span>
          </div>
        </span>
      </div>
    </ItemStyles>
  );
};
