export type AccordionProps = {
  label: string;
  items: AccordionItemProps[];
};

export interface AccordionItemProps {
  action?: (id?: string) => void;
  icon?: JSX.Element;
  id: string;
  label?: string;
  updates?: number;
}
