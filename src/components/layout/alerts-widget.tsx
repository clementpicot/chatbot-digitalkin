"use client";

import { CheckCircle, TriangleAlert } from "lucide-react";
import { DismissibleAlert } from "../ui/dismissible-alert";
import { useLocale } from "next-intl";

export default function AlertWidget() {

  const locale = useLocale();

  return (
    <div className="mt-4 space-y-4">
      <DismissibleAlert content={locale === 'en' ? "Your Kin R&D has less than 10000 thoughts left, don't forget to refill!" : "Il reste moins de 10000 pensées à votre Kin R&D, n'oubliez pas de vous réapprovisionner !"} icon={TriangleAlert} variant="warning" />
      <DismissibleAlert content={locale === 'en' ? 'Your file « Reporting.PDF » has been generated successfully.' : 'Votre fichier « Reporting.PDF » a été généré avec succès.'} icon={CheckCircle} variant="success" />
    </div>
  );
}
