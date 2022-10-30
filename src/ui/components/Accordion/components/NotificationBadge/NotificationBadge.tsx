import { Styles } from './NotificationBadge.styles';

import type { NotificationBadgeProps } from './@types/NotificationBadge.types';

export const NotificationBadge = ({ notifications }: NotificationBadgeProps) => <Styles.Badge>{notifications}</Styles.Badge>;
