import clsx from 'clsx';
import { KeyboardEvent, KeyboardEventHandler, useMemo } from 'react';
import { Address, Id } from 'types/address';

import styles from './AuctionTile.scss';

interface Props {
  id: Id;
  title: string;
  address: Address;
  vehicleCount: number;
  onSelect: (id: Id) => void;
  selected: boolean;
  className?: string;
}

export default function AuctionTile({
  id,
  title,
  address,
  vehicleCount,
  onSelect,
  selected,
  className,
}: Props) {
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (e: KeyboardEvent<HTMLElement>) => {
    if (e.keyCode === 13) {
      onSelect(id);
    }
  };

  return (
    <div
      tabIndex={0}
      aria-pressed={selected}
      onClick={() => onSelect(id)}
      onKeyDown={handleKeyDown}
      role="button"
      className={clsx(`kmx-card kmx-card--flat`, `p-0`, className, styles.dealerCard, {
        [styles.cardSelected]: selected,
      })}
    >
      <div className={clsx(styles.tileCheck, { [styles.tileCheckSelected]: selected })}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
        </svg>
      </div>
      <div className={clsx(`p-m`, styles.dealerImageContainer)}>
        <span className={`kmx-typography--display-6 ${styles.imagePlaceholder}`}>MM</span>
      </div>
      <div className={clsx(`p-m`, styles.dealerInfoContainer)}>
        <div className={`kmx-typography--display-2 m-b-s ${styles.dealerTitle}`}>{title}</div>
        <div className="m-b-l">
          <div className="kmx-typography--body-2">{address}</div>
          <div className="kmx-typography--body-2">
            {address.city} {address.state}
          </div>
        </div>
      </div>
    </div>
  );
}
