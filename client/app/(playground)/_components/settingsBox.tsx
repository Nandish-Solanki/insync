import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rabbit } from "lucide-react";

export interface SettingsBoxProps {
  updateModel: (value: string) => void;
  updateTemperature: (value: number) => void;
}

const SettingsBox = (props: SettingsBoxProps) => {
  return (
    <fieldset className="grid gap-6 rounded-lg border p-4">
      <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
      <div className="grid gap-3">
        <Label htmlFor="model">Model</Label>
        <Select onValueChange={props.updateModel}>
          <SelectTrigger
            id="model"
            className="items-start [&_[data-description]]:hidden"
          >
            <SelectValue placeholder="Select a model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sql-genesis">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Rabbit className="size-5" />
                <div className="grid gap-0.5">
                  <p>
                    SQL{" "}
                    <span className="font-medium text-foreground">Genesis</span>
                  </p>
                  <p className="text-xs" data-description>
                    Generates SQL queries from natural language
                  </p>
                </div>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="temperature">Temperature (Optional)</Label>
        <Input
          id="temperature"
          type="number"
          placeholder="0.4"
          onChange={(e) => props.updateTemperature(Number(e.target.value))}
        />
      </div>
    </fieldset>
  );
};

export default SettingsBox;
