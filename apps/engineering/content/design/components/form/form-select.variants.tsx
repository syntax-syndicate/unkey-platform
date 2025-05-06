import { RenderComponentWithSnippet } from "@/app/components/render";
import { FormSelect } from "@unkey/ui/src/components/form/form-select";
import { Rocket } from "lucide-react";

export const Default = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
        className="w-52"
        id="select-plan"
      />
    </RenderComponentWithSnippet>
  );
};

export const WithDescription = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        description="Choose the plan that best fits your needs"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};

export const Required = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a refill interval"
        required
        options={[
          { value: "none", label: "None" },
          { value: "monthly", label: "Monthly" },
          { value: "daily", label: "Daily" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};

export const Optional = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Join email list?"
        description="We'll send you a weekly digest of our latest news and updates"
        defaultValue="noThanks"
        optional
        options={[
          { value: "noThanks", label: "No thanks" },
          { value: "yesPlease", label: "Yes please!" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};

export const WithIcon = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        leftIcon={<Rocket size={16} />}
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};

export const WithError = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        error="Please select a plan to continue"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};

export const Success = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        variant="success"
        description="Great choice!"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
        defaultValue="pro"
      />
    </RenderComponentWithSnippet>
  );
};

export const Warning = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        variant="warning"
        description="This plan may not include all features you need"
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
        defaultValue="free"
      />
    </RenderComponentWithSnippet>
  );
};

export const Disabled = () => {
  return (
    <RenderComponentWithSnippet>
      <FormSelect
        label="Select a plan"
        description="This feature is currently unavailable"
        disabled
        options={[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise" },
        ]}
      />
    </RenderComponentWithSnippet>
  );
};
