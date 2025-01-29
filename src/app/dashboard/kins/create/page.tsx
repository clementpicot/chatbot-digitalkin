"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Bot,
  Brain,
  MessagesSquare,
  Send,
  Settings2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Cell from "@/components/ui/cell";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useLocale, useTranslations } from "next-intl";

const KinFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  role: z.string().min(1, {
    message: "Please select a role for your Kin.",
  }),
  personality: z.string().min(20, {
    message: "Personality description must be at least 20 characters.",
  }),
  basePrompt: z.string().min(50, {
    message: "Base prompt must be at least 50 characters.",
  }),
  temperature: z.string(),
  maxTokens: z.string(),
  useWebBrowsing: z.boolean().default(false),
  useCodeInterpreter: z.boolean().default(false),
  useDatabaseAccess: z.boolean().default(false),
  memoryType: z.string(),
});

type KinFormValues = z.infer<typeof KinFormSchema>;

const defaultValues: Partial<KinFormValues> = {
  temperature: "0.7",
  maxTokens: "2048",
  memoryType: "conversational",
  useWebBrowsing: false,
  useCodeInterpreter: false,
  useDatabaseAccess: false,
};

export default function CreateKinPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");

  const t = useTranslations();
  const locale = useLocale();

  const form = useForm<KinFormValues>({
    resolver: zodResolver(KinFormSchema),
    defaultValues,
  });

  function onSubmit(data: KinFormValues) {
    console.log(data);
  }

  const handleTestMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: inputMessage },
      {
        role: "assistant",
        content:
          locale === 'en' ? "This is a simulated response from your Kin. In production, this would be connected to your AI backend." : "Il s'agit d'une réponse simulée de votre Kin. En production, elle serait connectée à votre backend d'IA.",
      },
    ];
    setMessages(newMessages);
    setInputMessage("");
  };

  return (
    <Cell>
      <div className="grid gap-6">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <Bot className="h-8 w-8" />
            <h1 className="text-2xl font-bold">{t("createKin.title")}</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">
                    {t("createKin.infos.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("createKin.infos.paragraph")}
                  </p>
                </div>
                <div className="py-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("createKin.infos.name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("createKin.infos.namePh")}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {t("createKin.infos.nameP")}
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
                            placeholder={t("createKin.infos.descriptionPh")}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {t("createKin.infos.descriptionP")}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("createKin.infos.role")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t("createKin.infos.rolePh")}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="customer-service">
                              {t("createKin.infos.roleSelect.hr")}
                            </SelectItem>
                            <SelectItem value="sales">R&D</SelectItem>
                            <SelectItem value="technical-support">
                              {t("createKin.infos.roleSelect.ts")}
                            </SelectItem>
                            <SelectItem value="content-creator">
                              Finance
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          {t("createKin.infos.roleP")}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">
                    {t("createKin.settings.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("createKin.settings.paragraph")}
                  </p>
                </div>
                <div className="py-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="model-settings">
                      <AccordionTrigger className="gap-2">
                        <div className="flex items-center gap-2">
                          <Settings2 className="h-4 w-4" />
                          {t("createKin.settings.model.title")}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="temperature"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t("createKin.settings.model.temperature")}
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t(
                                        "createKin.settings.model.temperaturePh"
                                      )}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0.1">
                                    0.1 -{" "}
                                    {t(
                                      "createKin.settings.model.temperatureSelect.focused"
                                    )}
                                  </SelectItem>
                                  <SelectItem value="0.5">
                                    0.5 -{" "}
                                    {t(
                                      "createKin.settings.model.temperatureSelect.balanced"
                                    )}
                                  </SelectItem>
                                  <SelectItem value="0.7">
                                    0.7 -{" "}
                                    {t(
                                      "createKin.settings.model.temperatureSelect.creative"
                                    )}
                                  </SelectItem>
                                  <SelectItem value="1.0">
                                    1.0 -{" "}
                                    {t(
                                      "createKin.settings.model.temperatureSelect.most"
                                    )}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {t("createKin.settings.model.temperatureP")}
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="maxTokens"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t("createKin.settings.model.tokens")}
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue
                                      placeholder={t(
                                        "createKin.settings.model.tokensPh"
                                      )}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1024">
                                    1024 {t("generic.thoughts")}
                                  </SelectItem>
                                  <SelectItem value="2048">
                                    2048 {t("generic.thoughts")}
                                  </SelectItem>
                                  <SelectItem value="4096">
                                    4096 {t("generic.thoughts")}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {t("createKin.settings.model.tokensP")}
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="capabilities">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          {t("createKin.settings.capabilities.title")}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="useWebBrowsing"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {t(
                                    "createKin.settings.capabilities.webTitle"
                                  )}
                                </FormLabel>
                                <FormDescription>
                                  {t("createKin.settings.capabilities.webP")}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="useCodeInterpreter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {t(
                                    "createKin.settings.capabilities.codeTitle"
                                  )}
                                </FormLabel>
                                <FormDescription>
                                  {t("createKin.settings.capabilities.codeP")}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="useDatabaseAccess"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">
                                  {t("createKin.settings.capabilities.dbTitle")}
                                </FormLabel>
                                <FormDescription>
                                  {t("createKin.settings.capabilities.dbP")}
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="memory">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          {t("createKin.settings.memory.title")}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <FormField
                          control={form.control}
                          name="memoryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                {t("createKin.settings.memory.type")}
                              </FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select memory type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">
                                    {t(
                                      "createKin.settings.memory.typeSelect.noMem"
                                    )}
                                  </SelectItem>
                                  <SelectItem value="conversational">
                                    {t(
                                      "createKin.settings.memory.typeSelect.conv"
                                    )}
                                  </SelectItem>
                                  <SelectItem value="long-term">
                                    {t(
                                      "createKin.settings.memory.typeSelect.mem"
                                    )}
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                {t("createKin.settings.memory.typeP")}
                              </FormDescription>
                            </FormItem>
                          )}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Button type="submit" className="ml-auto">
                    {t("kins.create")}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>

        <div className="space-y-6 rounded-lg border p-6">
          <div>
            <div className="flex flex-col space-y-1.5">
              <h3 className="text-xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <MessagesSquare className="h-5 w-5" />
                {t("createKin.test.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("createKin.test.paragraph")}
              </p>
            </div>
            <div className="flex-1">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${
                        message.role === "assistant"
                          ? "flex-row"
                          : "flex-row-reverse"
                      }`}
                    >
                      <Avatar>
                        <AvatarFallback>
                          {message.role === "assistant" ? locale === 'en' ? "AI" : "Kin" : "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg px-3 py-2 max-w-[80%] ${
                          message.role === "assistant"
                            ? "bg-muted"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
            <div>
              <form onSubmit={handleTestMessage} className="flex w-full gap-2">
                <Input
                  placeholder={`${t("createKin.test.title")}...`}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Cell>
  );
}
