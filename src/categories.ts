import {
  HiArrowCircleDownSolid,
  HiBadgeCheckSolid,
  HiBellSolid,
  HiCameraSolid,
  HiChatAlt2Solid,
  HiChatAltSolid,
  HiChevronDoubleDownOutline,
  HiChevronDoubleRightSolid,
  HiClipboardListSolid,
  HiCollectionSolid,
  HiCreditCardSolid,
  HiDeviceTabletOutline,
  HiDeviceTabletSolid,
  HiDotsHorizontalSolid,
  HiDuplicateSolid,
  HiHomeSolid,
  HiMenuSolid,
  HiMinusSolid,
  HiPencilAltSolid,
  HiPhotographSolid,
  HiQuestionMarkCircleSolid,
  HiStarSolid,
  HiTableSolid,
  HiUserSolid,
} from 'svelte-icons/hi';

import { FaSpinner } from 'svelte-icons/fa';

export default [
  {
    title: 'Dashboard',
    icon: HiHomeSolid,
    href: '/',
  },
  {
    title: 'Alerts',
    icon: HiBellSolid,
    href: '/alerts',
    card: {
      className: 'w-56',
      images: { light: 'alerts-light.svg', dark: 'alerts-dark.svg' },
    },
  },
  {
    title: 'Accordion',
    icon: HiCreditCardSolid,
    href: '/accordion',
    card: {
      className: 'w-56',
      images: { light: 'accordion-light.svg', dark: 'accordion-dark.svg' },
    },
  },
  {
    title: 'Avatar',
    icon: HiUserSolid,
    href: '/avatar',
    card: {
      className: 'w-40',
      images: { light: 'avatar-light.svg', dark: 'avatar-dark.svg' },
    },
  },
  {
    title: 'Badges',
    href: '/badges',
    icon: HiBadgeCheckSolid,
    card: {
      className: 'w-28',
      images: { light: 'badges-light.svg', dark: 'badges-dark.svg' },
    },
  },
  {
    title: 'Breadcrumb',
    icon: HiChevronDoubleRightSolid,
    href: '/breadcrumb',
    card: {
      className: 'w-64',
      images: { light: 'breadcrumb-light.svg', dark: 'breadcrumb-dark.svg' },
    },
  },
  {
    title: 'Buttons',
    icon: HiCollectionSolid,
    href: '/buttons',
    card: {
      className: 'w-24',
      images: { light: 'buttons.svg', dark: 'buttons.svg' },
    },
  },
  {
    title: 'Card',
    icon: HiCreditCardSolid,
    href: '/card',
    card: {
      className: 'w-36',
      images: { light: 'card-light.svg', dark: 'card-dark.svg' },
    },
  },
  {
    title: 'Dropdown',
    icon: HiArrowCircleDownSolid,
    href: '/dropdown',
    card: {
      className: 'w-28',
      images: { light: 'dropdown-light.svg', dark: 'dropdown-dark.svg' },
    },
  },
  {
    title: 'Forms',
    icon: HiPencilAltSolid,
    href: '/forms',
    card: {
      className: 'w-40',
      images: { light: 'forms-light.svg', dark: 'forms-dark.svg' },
    },
  },
  {
    title: 'Footer',
    icon: HiMinusSolid,
    href: '/footer',
    card: {
      className: 'w-40',
      images: { light: 'footer-light.svg', dark: 'footer-dark.svg' },
    },
  },
  {
    title: 'List group',
    icon: HiClipboardListSolid,
    href: '/list-group',
    card: {
      className: 'w-36',
      images: { light: 'list-group-light.svg', dark: 'list-group-dark.svg' },
    },
  },
  {
    title: 'Modal',
    icon: HiDeviceTabletSolid,
    href: '/modal',
    card: {
      className: 'w-36',
      images: { light: 'modal-light.svg', dark: 'modal-dark.svg' },
    },
  },
  {
    title: 'Navbars',
    icon: HiDotsHorizontalSolid, // FiNavigation
    href: '/navbars',
    card: {
      className: 'w-56',
      images: { light: 'navbars-light.svg', dark: 'navbars-dark.svg' },
    },
  },
  {
    title: 'Pagination',
    icon: HiChevronDoubleDownOutline,
    href: '/pagination',
    card: {
      className: 'w-36',
      images: { light: 'pagination-light.svg', dark: 'pagination-dark.svg' },
    },
  },
  {
    title: 'Progress',
    icon: HiMinusSolid,
    href: '/progress',
    card: {
      className: 'w-36',
      images: { light: 'progress-light.svg', dark: 'progress-dark.svg' },
    },
  },
  {
    title: 'Rating',
    icon: HiStarSolid,
    href: '/rating',
    card: {
      className: 'w-40',
      images: { light: 'rating-light.svg', dark: 'rating-dark.svg' },
    },
  },
  {
    title: 'Sidebar',
    icon: HiMenuSolid,
    href: '/sidebar',
    card: {
      className: 'w-16',
      images: { light: 'sidebar-light.svg', dark: 'sidebar-dark.svg' },
    },
  },
  {
    title: 'Spinners',
    icon: FaSpinner,
    href: '/spinners',
    card: {
      className: 'w-36',
      images: { light: 'spinners-light.svg', dark: 'spinners-dark.svg' },
    },
  },
  {
    title: 'Tables',
    icon: HiTableSolid,
    href: '/tables',
    card: {
      className: 'w-36',
      images: { light: 'tables-light.svg', dark: 'tables-dark.svg' },
    },
  },
  {
    title: 'Toast',
    icon: HiChatAlt2Solid,
    href: '/toast',
    card: {
      className: 'w-36',
      images: { light: 'toast-light.svg', dark: 'toast-dark.svg' },
    },
  },
  {
    title: 'Tooltips',
    icon: HiChatAltSolid,
    href: '/tooltips',
    card: {
      className: 'w-24',
      images: { light: 'tooltips-light.svg', dark: 'tooltips-dark.svg' },
    },
  },
];
