import { DashboardCard } from "@dashboard/components/Card";
import { DiscoutFormData } from "@dashboard/discounts/types";
import { PromotionTypeEnum } from "@dashboard/graphql";
import { Box, Input, Select } from "@saleor/macaw-ui-next";
import React, { useMemo } from "react";
import { useController, useFormContext } from "react-hook-form";
import { FormattedMessage, useIntl } from "react-intl";

interface DiscountNameProps {
  disabled?: boolean;
  typeDisabled?: boolean;
  error: string | undefined;
}

export const DiscountGeneralInfo = ({
  disabled,
  typeDisabled,
  error,
}: DiscountNameProps) => {
  const intl = useIntl();
  const { formState } = useFormContext<DiscoutFormData>();
  const { field: nameField } = useController<DiscoutFormData, "name">({
    name: "name",
  });
  const { field: typeField } = useController<DiscoutFormData, "type">({
    name: "type",
  });

  const discountTypes = useMemo(
    () => [
      {
        label: intl.formatMessage({
          defaultMessage: "Catalogue",
          id: "uVESNH",
          description: "discount type",
        }),
        value: PromotionTypeEnum.CATALOGUE,
      },
      {
        label: intl.formatMessage({
          defaultMessage: "Order",
          id: "onUvP+",
          description: "discount type",
        }),
        value: PromotionTypeEnum.ORDER,
      },
    ],
    [intl],
  );

  return (
    <DashboardCard>
      <DashboardCard.Title>
        <FormattedMessage defaultMessage="General Information" id="pkUbrL" />
      </DashboardCard.Title>
      <DashboardCard.Content>
        <Box display="grid" gap={3}>
          <Input
            {...nameField}
            error={!!error || !!formState.errors?.name}
            helperText={error || formState.errors?.name?.message}
            label={intl.formatMessage({
              defaultMessage: "Discount name",
              id: "lJXkFS",
              description: "discount name",
            })}
            disabled={disabled || nameField.disabled}
          />

          <Box __width={250}>
            <Select
              {...typeField}
              size="medium"
              options={discountTypes}
              label={intl.formatMessage({
                defaultMessage: "Discount type",
                id: "z/2AZY",
              })}
              disabled={typeDisabled || nameField.disabled}
            />
          </Box>
        </Box>
      </DashboardCard.Content>
    </DashboardCard>
  );
};
