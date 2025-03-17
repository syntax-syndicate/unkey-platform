// @ts-nocheck
"use client";
import { FormInput, Button, FormTextarea } from "@unkey/ui";
import { formOpts } from "../validator";
import { useActionState } from "react";
import { useForm } from "@tanstack/react-form";
import create, { ServerResponse } from "../server/action";
import { useStore } from "@tanstack/react-store";

const initialServerState: ServerResponse = {
  status: "success",
  submitted: false,
} as const;

export const ContactForm = () => {
  const [state, action] = useActionState<ServerResponse, FormData>(
    async (_, formData) => create(_, formData),
    initialServerState
  );

  const emailRegex = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
  const form = useForm({
    ...formOpts,
    validators: {
      onChange: ({ value }) => {
        if (!value["Full Name"] || !value["Email"] || !value["YC Batch"]) {
          return "Please fill in all required fields";
        }
      },
    },
  });

  const serverState = state as ServerResponse;
  const formErrors = useStore(
    form.store,
    (formState) => formState.errors ?? []
  );

  return (
    <div className="p-8 md:p-8 rounded-lg relative bg-black border-0 overflow-hidden before:absolute before:inset-0 before:p-[1px] before:rounded-lg before:bg-linear-to-r before:from-orange-500 before:via-purple-500 before:to-blue-500 before:-z-10 shadow-[0_0_50px_rgba(249,115,22,0.25)]">
      <div className="h-full">
        <div className="">
          <h2 className="text-2xl font-semibold">Apply now</h2>
          <p className="py-4">
            Complete the fields below and we'll be in touch.
          </p>
        </div>

        <form
          action={action}
          onSubmit={() => {
            form.handleSubmit();
            if (form.state.isSubmitSuccessful) {
              form.reset();
            }
          }}
          className="space-y-6"
        >
          {/* Name field */}
          <div className="space-y-2">
            <form.Field
              name="Full Name"
              validators={{
                onBlur: ({ value }) =>
                  !value
                    ? "A name is required"
                    : value.length < 3
                    ? "Name must be at least 3 characters"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <FormInput
                    className="dark"
                    label={field.name}
                    placeholder="Bruce Wayne"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    error={field.state.meta.errors.join(",")}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                  />
                );
              }}
            />
          </div>

          {/* Email field */}
          <div className="space-y-2 relative">
            <form.Field
              name="Email"
              validators={{
                onBlur: ({ value }) =>
                  !value
                    ? "Email is required"
                    : !emailRegex.test(value)
                    ? "Email must be at valid"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <FormInput
                    className="dark"
                    type="email"
                    placeholder="bruce.wayne@gotham.com"
                    label={field.name}
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    error={field.state.meta.errors.join(",")}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                  />
                );
              }}
            />
          </div>

          {/* YC batch field */}
          <div className="space-y-2 relative">
            <form.Field
              name="YC Batch"
              validators={{
                onBlur: ({ value }) =>
                  !value
                    ? "A YC batch is required"
                    : value.length < 3
                    ? "YC batch must be at least 3 characters"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <FormInput
                    className="dark"
                    placeholder="YCW2025"
                    id={field.name}
                    label={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    error={field.state.meta.errors.join(",")}
                    onChange={(e) => field.handleChange(e.target.value)}
                    required
                  />
                );
              }}
            />
          </div>

          {/* Workspace ID field */}
          <div className="space-y-2 relative">
            <form.Field
              name="Workspace ID"
              validators={{
                onBlur: ({ value }) =>
                  value.startsWith("ws_") && value.length < 19
                    ? "Workspace ID must start with 'ws_' and be at least 19 characters long"
                    : undefined,
              }}
              children={(field) => {
                return (
                  <FormInput
                    className="dark"
                    placeholder="ws_123"
                    id={field.name}
                    name={field.name}
                    label={field.name}
                    value={field.state.value}
                    error={field.state.meta.errors.join(",")}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                );
              }}
            />
          </div>

          {/* Migration support field */}
          <div className="space-y-2 relative">
            <form.Field
              name="Migrating From"
              children={(field) => {
                return (
                  <FormInput
                    className="dark"
                    placeholder="we are coming from Apigee"
                    id={field.name}
                    name={field.name}
                    label={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                );
              }}
            />
          </div>

          <div className="space-y-2 relative">
            <form.Field
              name="More Info"
              children={(field) => {
                return (
                  <FormTextarea
                    className="dark"
                    id={field.name}
                    label={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                );
              }}
            />
          </div>

          {/* Submit button */}
          <div className="space-y-2 justify-end align-bottom">
            <form.Subscribe
              selector={(state) => [
                state.canSubmit,
                state.isSubmitting,
                state.isPristine,
              ]}
              children={([canSubmit, isSubmitting, isPristine]) => (
                <Button
                  size="lg"
                  className="dark w-full bg-orange-500 inset-x-0 bottom-0 "
                  type="submit"
                  disabled={!canSubmit || isSubmitting || isPristine}
                >
                  {isSubmitting ? "..." : "Submit"}
                </Button>
              )}
            />
          </div>
          {serverState?.status === "success" && serverState.submitted ? (
            <div className="text-green-500 p-4 rounded-md bg-green-500/10 mb-4">
              <p>Thank you for your submission! We'll be in touch soon.</p>
            </div>
          ) : null}

          {serverState?.status === "error" &&
            serverState.errors?.length > 0 && (
              <div className="text-red-500 p-4 rounded-md bg-red-500/10 mb-4">
                {serverState?.status === "error" &&
                  serverState.errors?.map((error, i) => (
                    <p key={`server-error-${i}`} className="mb-1">
                      {error}
                    </p>
                  ))}
                {formErrors.map((error, i) => (
                  <p key={`form-error-${i}`} className="mb-1">
                    {error}
                  </p>
                ))}
              </div>
            )}
        </form>
      </div>
    </div>
  );
};
