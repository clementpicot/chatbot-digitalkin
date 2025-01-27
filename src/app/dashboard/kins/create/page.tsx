"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Bot, Brain, MessagesSquare, Send, Settings2, Sparkles } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import Cell from "@/components/ui/cell"

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
})

type KinFormValues = z.infer<typeof KinFormSchema>

const defaultValues: Partial<KinFormValues> = {
  temperature: "0.7",
  maxTokens: "2048",
  memoryType: "conversational",
  useWebBrowsing: false,
  useCodeInterpreter: false,
  useDatabaseAccess: false,
}

export default function CreateKinPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [inputMessage, setInputMessage] = useState("")

  const form = useForm<KinFormValues>({
    resolver: zodResolver(KinFormSchema),
    defaultValues,
  })

  function onSubmit(data: KinFormValues) {
    console.log(data)
  }

  const handleTestMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const newMessages = [
      ...messages,
      { role: "user", content: inputMessage },
      {
        role: "assistant",
        content:
          "This is a simulated response from your AI Kin. In production, this would be connected to your AI backend.",
      },
    ]
    setMessages(newMessages)
    setInputMessage("")
  }

  return (
    <Cell>
      <div className="grid gap-6">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <Bot className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Create a new Kin</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">Basic Information</h3>
                  <p className="text-sm text-muted-foreground">Configure the basic settings for your Kin.</p>
                </div>
                <div className="py-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Kin Name</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g., Sales Assistant" {...field} />
                        </FormControl>
                        <FormDescription>This is how your Kin will identify itself.</FormDescription>
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
                          <Textarea placeholder="Describe what your Kin does..." {...field} />
                        </FormControl>
                        <FormDescription>Brief description of your Kin's purpose.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="customer-service">Human Resources</SelectItem>
                            <SelectItem value="sales">R&D</SelectItem>
                            <SelectItem value="technical-support">Technical Support</SelectItem>
                            <SelectItem value="content-creator">Finance</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>The primary role of your Kin.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">Personality & Behavior</h3>
                  <p className="text-sm text-muted-foreground">Define how your Kin should interact with users.</p>
                </div>
                <div className="py-6 space-y-4">
                  <FormField
                    control={form.control}
                    name="personality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personality Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Describe the Kin's personality..." className="h-20" {...field} />
                        </FormControl>
                        <FormDescription>Define the tone, style, and character of your Kin.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="basePrompt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Base Prompt</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter the base prompt for your Kin..." className="h-32" {...field} />
                        </FormControl>
                        <FormDescription>
                          The foundational instructions that define your Kin's behavior.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div>
                <div className="flex flex-col space-y-1.5">
                  <h3 className="text-xl font-semibold leading-none tracking-tight">Advanced Settings</h3>
                  <p className="text-sm text-muted-foreground">Fine-tune your Kin's capabilities and behavior.</p>
                </div>
                <div className="py-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="model-settings">
                      <AccordionTrigger className="gap-2">
                        <div className="flex items-center gap-2">
                          <Settings2 className="h-4 w-4" />
                          Model Settings
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="temperature"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Temperature</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select temperature" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="0.1">0.1 - Most Focused</SelectItem>
                                  <SelectItem value="0.5">0.5 - Balanced</SelectItem>
                                  <SelectItem value="0.7">0.7 - Creative</SelectItem>
                                  <SelectItem value="1.0">1.0 - Most Creative</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>Controls randomness in responses.</FormDescription>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="maxTokens"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Max Tokens</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select max tokens" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="1024">1024 tokens</SelectItem>
                                  <SelectItem value="2048">2048 tokens</SelectItem>
                                  <SelectItem value="4096">4096 tokens</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>Maximum length of responses.</FormDescription>
                            </FormItem>
                          )}
                        />
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="capabilities">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4" />
                          Capabilities
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="useWebBrowsing"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Web Browsing</FormLabel>
                                <FormDescription>Allow Kin to search and browse the internet.</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
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
                                <FormLabel className="text-base">Code Interpreter</FormLabel>
                                <FormDescription>Enable code execution capabilities.</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
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
                                <FormLabel className="text-base">Database Access</FormLabel>
                                <FormDescription>Allow querying and updating databases.</FormDescription>
                              </div>
                              <FormControl>
                                <Switch checked={field.value} onCheckedChange={field.onChange} />
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
                          Memory Settings
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <FormField
                          control={form.control}
                          name="memoryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Memory Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select memory type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="none">No Memory</SelectItem>
                                  <SelectItem value="conversational">Conversational</SelectItem>
                                  <SelectItem value="long-term">Long-term Memory</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormDescription>How your Kin remembers past interactions.</FormDescription>
                            </FormItem>
                          )}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <Button type="submit" className="ml-auto">
                    Create Kin
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
                Test Your Kin
              </h3>
              <p className="text-sm text-muted-foreground">Try out your Kin's responses before deploying.</p>
            </div>
            <div className="flex-1">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${message.role === "assistant" ? "flex-row" : "flex-row-reverse"}`}
                    >
                      <Avatar>
                        <AvatarFallback>{message.role === "assistant" ? "AI" : "U"}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`rounded-lg px-3 py-2 max-w-[80%] ${
                          message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
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
                  placeholder="Test your Kin..."
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
  )
}

