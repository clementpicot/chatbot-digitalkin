import { ColumnDef } from "@tanstack/react-table";
import { LucideIcon } from "lucide-react";
import { AlertVariant } from "./components/ui/alert";

export type Kin = {
  id: number;
  title: string;
  description: string;
  url: string;
  remainingTokens: number;
  maxTokens: number;
};

export type KinContextType = {
  kins: Kin[];
  handleAddKin: () => void;
};

export type TutorialContextType = {
  startTutorial: () => void;
  steps: Step[];
};

export type Step = {
  element: string;
  popover: {
    title: string;
    content: string;
  };
};


export interface DismissibleAlertProps {
  content: string;
  variant?: AlertVariant;
  icon?: LucideIcon
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  canFilter?: boolean;
  pagination?: boolean;
  rowHeight?: "small" | "normal" | "large";
}

export type User = {
  name: string;
  email: string;
};

export type FileType = {
  type: string;
  icon: LucideIcon;
};

export type FileTableData = {
  id: string;
  filename: string;
  uploadedBy: User;
  lastModified: number;
};

export type HistoryTableData = {
  id: string;
  title: string;
  date: number;
  lastUser: User;
  kin: string;
};
