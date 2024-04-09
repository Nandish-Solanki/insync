"use client";
import { CornerDownLeft, Mic, Paperclip, Share } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Sidebar from "../_components/sidebar";
import SystemPromptBox from "../_components/systemPrompt";
import SettingsBox from "../_components/settingsBox";
import DrawerComponent from "../_components/drawerComponent";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface ChatMessage {
  message: string;
  model_response: string;
  isResponseReady: boolean;
}

export default function Dashboard() {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [systemPrompt, setSystemPrompt] = useState<string>("");
  const [temprature, setTemprature] = useState<Number | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleSystemPromptChange = (value: string) => {
    setSystemPrompt(value);
  };

  const handleTempratureChange = (value: Number) => {
    setTemprature(value);
  };

  const handleModelChange = (value: string) => {
    setModel(value);
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const formatMessage = () => {
    const final_message: String = `${message}? | ${systemPrompt} `;
    return final_message;
  };

  const sendMessage = () => {
    console.log(message);
    const final_message = formatMessage();
    console.log(final_message);
  };

  return (
    <div className="grid h-screen w-full pl-[53px]">
      <Sidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
          <h1 className="text-xl font-semibold">Playground</h1>
          <DrawerComponent />
          <Button
            variant="outline"
            size="sm"
            className="ml-auto gap-1.5 text-sm"
          >
            <Share className="size-3.5" />
            Share
          </Button>
        </header>
        <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative hidden flex-col items-start gap-8 md:flex">
            <form className="grid w-full items-start gap-6">
              <SettingsBox
                updateTemperature={handleTempratureChange}
                updateModel={handleModelChange}
              />
              <SystemPromptBox updateSystemPrompt={handleSystemPromptChange} />
            </form>
          </div>
          <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
            <Badge variant="outline" className="absolute right-3 top-3">
              Output
            </Badge>
            <div className="flex-1" />
            <ScrollArea className="h-[680px]"></ScrollArea>
            <div className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
              <Label htmlFor="message" className="sr-only">
                Message
              </Label>
              <Textarea
                onChange={handleMessageChange}
                value={message}
                id="message"
                placeholder="Type your message here..."
                className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Attach File</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Mic className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">Use Microphone</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <Button
                  type="submit"
                  size="sm"
                  className="ml-auto gap-1.5"
                  onClick={sendMessage}
                >
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
