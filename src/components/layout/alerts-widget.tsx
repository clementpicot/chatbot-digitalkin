"use client";

import { DismissibleAlert } from "../ui/dismissible-alert";

export default function AlertWidget() {
  return (
    <div className="mt-4 space-y-4">
      <DismissibleAlert content="Your Kin R&D has less than 10000 tokens left, don't forget to refill!" variant="warning" />
      <DismissibleAlert content='Your file "Reporting" has been generated successfully.' variant="success" />
    </div>
  );
}
