"use client";

import AlertWidget from "@/components/layout/alerts-widget";
import KinWidget from "@/components/layout/kins-widget";
import TodoWidget from "@/components/layout/todo-widget";
import { Calendar } from "@/components/ui/calendar";
import Cell from "@/components/ui/cell";
import { DataTable } from "@/components/ui/data-table";
import { getChatHistoryColumns, chatHistoryData } from "@/lib/data";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  const locale = useLocale()
  const chatHistoryColumns = getChatHistoryColumns(locale)

  return (
    <div className="grid grid-cols-6 gap-8">
      <Cell className="col-span-6">
        <KinWidget />
        <h3 className="text-xl mt-8">{t('kins.chatHistory.title')}</h3>
        <DataTable
          columns={chatHistoryColumns}
          data={chatHistoryData}
          canFilter={false}
          rowHeight="small"
          pagination={false}
        />
      </Cell>
      <Cell className="col-span-6 lg:col-span-2">
        <h2 className="text-xl">Todo</h2>
        <TodoWidget />
      </Cell>
      <Cell className="col-span-6 lg:col-span-2">
        <h2 className="text-xl">{t('generic.calendar')}</h2>
        <Calendar
          classNames={{
            months:
              "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "",
            row: "w-full mt-2",
          }}
        />
      </Cell>
      <Cell className="col-span-6 lg:col-span-2">
        <h2 className="text-xl">{t('alerts.title')}</h2>
        <AlertWidget />
      </Cell>
    </div>
  );
}
