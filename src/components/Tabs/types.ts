export interface Tab<T = any> {
  value: T;
  label: string;
}

export interface TabsProps<T = any> {
  tabs: Tab[];
  tabValue: T;
  onChange: (value: T) => void;
}
