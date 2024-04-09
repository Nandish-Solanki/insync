import { ChatMessage } from "../playground/page";

export default function Component(props: ChatMessage) {
  return (
    <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow-sm bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-col gap-2">
        <div className="p-4">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Question
          </p>
          <p className="text-base font-semibold">{props.message}</p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <p className="p-4 text-sm">{props.model_response}</p>
        </div>
      </div>
    </div>
  );
}
