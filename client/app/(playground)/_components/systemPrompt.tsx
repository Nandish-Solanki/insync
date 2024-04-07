import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SystemPromptBox = () => {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">System Prompt</legend>
      <div className="grid gap-3">
        <Label htmlFor="content">Define table structure here</Label>
        <Textarea
          id="content"
          placeholder="CREATE TABLE table_name (col1 INTEGER, col2 BOOLEAN)..."
          className="min-h-[9.5rem]"
        />
      </div>
    </fieldset>
  );
};

export default SystemPromptBox;
