"use client";

import { Button, DialogContainer } from "@unkey/ui";
import type React from "react";
import { useState } from "react";

export type ConfirmProps = {
  title: string;
  description?: string;
  trigger: (onClick: () => void) => React.ReactNode;
  onConfirm: () => void | Promise<void>;
  variant?: "destructive";
  disabled?: boolean;
};

export const Confirm: React.FC<ConfirmProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const onConfirm = async () => {
    setLoading(true);
    await props.onConfirm();
    setLoading(false);
    setIsOpen(false);
  };

  return (
    <>
      {props.trigger(() => setIsOpen(true))}
      <DialogContainer
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        title={props.title}
        footer={
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <Button
              type="submit"
              variant="primary"
              size="xlg"
              disabled={loading}
              loading={loading}
              className="w-full rounded-lg"
              onClick={onConfirm}
            >
              Confirm
            </Button>
          </div>
        }
      >
        <p>{props.description}</p>
      </DialogContainer>
    </>
  );
};
