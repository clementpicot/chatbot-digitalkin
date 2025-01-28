//Generated with v0. I wanted a quick but efficient bug report dialog

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Bug, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

const bugReportSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long" })
    .max(1000, { message: "Description must not exceed 1000 characters" }),
  severity: z.string({
    required_error: "Please select the severity level",
  }),
  steps: z
    .string()
    .min(10, { message: "Steps must be at least 10 characters long" })
    .max(500, { message: "Steps must not exceed 500 characters" }),
  expectedResult: z.string().optional(),
  actualResult: z.string().optional(),
});

type BugReportForm = z.infer<typeof bugReportSchema>;

export default function BugReportDialog() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useTranslations();

  const form = useForm<BugReportForm>({
    resolver: zodResolver(bugReportSchema),
    defaultValues: {
      title: "",
      description: "",
      severity: "",
      steps: "",
      expectedResult: "",
      actualResult: "",
    },
  });

  async function onSubmit(data: BugReportForm) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitting(false);
    setOpen(false);
    form.reset();
  }

  console.log(open);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <span
        className="flex items-center gap-2 p-2"
        onClick={() => setOpen(!open)}
      >
        <Bug width={16} />{" "}
        <span className="group-data-[collapsible=icon]:hidden">
          {t("sidebar.bug")}
        </span>
      </span>
      <DialogContent className="sm:max-w-[600px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <DialogHeader>
              <DialogTitle>{t("sidebar.bug")}</DialogTitle>
              <DialogDescription>
                {t("bugReport.modalDescription")}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("bugReport.title")}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("bugReport.titlePlaceholder")}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("bugReport.titleParagraph")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="severity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("bugReport.severity")}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("bugReport.severityPlaceholder")}
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="critical">
                          {t("bugReport.severitySelect.critical")}
                        </SelectItem>
                        <SelectItem value="high">
                          {t("bugReport.severitySelect.high")}
                        </SelectItem>
                        <SelectItem value="medium">
                          {t("bugReport.severitySelect.medium")}
                        </SelectItem>
                        <SelectItem value="low">
                          {t("bugReport.severitySelect.low")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {t("bugReport.severityParagraph")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("bugReport.descriptionPlaceholder")}
                        className="h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      {t("bugReport.descriptionParagraph")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="steps"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("bugReport.steps")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("bugReport.stepsPlaceholder")}
                        className="h-20"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                    {t("bugReport.stepsParagraph")}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="expectedResult"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("bugReport.expectedRes")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("bugReport.expectedResPlaceholder")}
                          className="h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="actualResult"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("bugReport.actualRes")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t("bugReport.actualResPlaceholder")}
                          className="h-20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(!open)}
              >
                {t("generic.cancel")}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {t("bugReport.submit")}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
